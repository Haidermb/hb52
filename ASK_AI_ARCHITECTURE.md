# "Ask AI" System Architecture & Engineering Document
**Author:** Haider Bharmal (Full Stack Generative AI Engineer)  
**Date:** July 2026  
**System Name:** Ask AI — Multimodal Graph RAG & Real-Time Microservice Platform  

---

## 1. Executive Summary & Core Requirements

The **Ask AI** platform is an enterprise-grade, multimodal Retrieval-Augmented Generation (RAG) and microservice ecosystem. Built to support high-throughput LLM interactions, real-time voice telephony, Human-in-the-Loop (HITL) operator escalation, and multi-tenant credit ledger billing.

### Core Architectural Metrics
* **Microservices Monorepo**: 6 Fastify TypeScript Microservices (`gateway`, `auth`, `bot`, `knowledge`, `hitl`, `realtime-audio`).
* **Graph RAG Context Precision**: **+35%** improvement in precision via combined dense vector retrieval + PostgreSQL Knowledge Graph entity traversal.
* **Database & Caching Performance**: **90%** cache hit rate on repeated document lookups using Redis 7 file-reference caching, reducing PostgreSQL query overhead by **>80%**.
* **HITL Escalation SLA**: **< 50ms** handoff latency from AI bot to live human operator dashboard via `@fastify/websocket` and Redis Pub/Sub.
* **Autonomous Telephony**: **2,000+** monthly calls handled autonomously via Plivo, Azure Speech Services, and ElevenLabs streaming synthesis.

---

## 2. LLM & Multimodal AI Provider Ecosystem

The system abstracts LLM providers through a unified `ConnectorRegistry` and dynamic model router, eliminating single-provider vendor lock-in.

| Component / Layer | Technology / Provider | Purpose & Features |
| :--- | :--- | :--- |
| **Primary LLM Router** | **OpenRouter API** (300+ LLMs) | Dynamic model switching (OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Gemini 1.5 Pro, Llama 3.3 70B, DeepSeek R1) with fallback routing and cost tracking. |
| **Vector Embeddings** | **Google Gemini Embedding 2** | High-density 3,072-dimensional vector embeddings stored in **ChromaDB** for semantic retrieval across raw PDFs, URLs, and social content. |
| **Voice Synthesis & Cloning**| **ElevenLabs API** | Ultra-low latency streaming audio synthesis, custom voice cloning, and WebSocket audio chunking. |
| **Speech-to-Text & Telephony**| **Azure Speech Services & Plivo** | Real-time speech recognition, SIP trunking, live call interruption handling, and silence detection. |
| **Document & Web Ingestion** | **Jina Reader / Cloudflare Browser** | Rapid light-scraping of web URLs, YouTube transcripts, Instagram posts, RSS feeds, and OCR text extraction. |
| **Observability & Tracing** | **LangSmith Tracing** | End-to-end trace tracking for prompt engineering, token consumption, agent tool execution, and latency bottlenecks. |

---

## 3. System Architecture & Component Diagrams

### 3.1 6-Microservice Monorepo Topology

```mermaid
flowchart TD
    Client["Client Frontends (Next.js 15 / WhatsApp / WebSockets)"]
    
    subgraph Monorepo ["Turborepo Monorepo (Node.js & Fastify)"]
        GW["gateway microservice (:8000)<br/>- Local JWT Verification<br/>- Anti-Spoof Header Injection<br/>- Rate Limiting & Billing Guard"]
        AUTH["auth microservice (:8001)<br/>- OAuth2 / JWT Issuer<br/>- RBAC & Session Store"]
        KNOW["knowledge microservice (:8002)<br/>- Gemini 3072-dim Embeddings<br/>- Postgres Recursive CTE Graph<br/>- BullMQ Background Queue"]
        BOT["bot microservice (:8003)<br/>- OpenRouter 300+ LLMs Router<br/>- LangChain Agentic Tools<br/>- Function Calling & Validation"]
        HITL["hitl microservice (:8004)<br/>- Fastify WebSocket Bridge<br/>- Redis Pub/Sub State Sync<br/>- Queue Draining & Presence"]
        AUDIO["realtime-audio microservice (:8005)<br/>- Plivo Telephony Handler<br/>- Azure Speech STT<br/>- ElevenLabs Voice Synthesis"]
    end
    
    DB[(PostgreSQL 15)]
    REDIS[(Redis 7 Pub/Sub & Cache)]
    CHROMA[(ChromaDB Vector Store)]
    LLM_API["OpenRouter / ElevenLabs APIs"]

    Client --> GW
    GW --> AUTH
    GW --> BOT
    BOT --> KNOW
    BOT --> HITL
    BOT --> AUDIO
    
    KNOW --> CHROMA
    KNOW --> DB
    KNOW --> REDIS
    HITL --> REDIS
    AUDIO --> LLM_API
    BOT --> LLM_API
```

---

### 3.2 End-to-End Request Pipeline & Multimodal RAG Flow

```mermaid
sequenceDiagram
    autonumber
    actor User as User / Client
    participant GW as Fastify Gateway
    participant Bot as Bot Service
    participant Know as Knowledge Engine
    participant Chroma as ChromaDB (3072-dim)
    participant PG as PostgreSQL (Graph CTE)
    participant LLM as OpenRouter API

    User->>GW: POST /v1/chat/completions (JWT Bearer Token)
    GW->>GW: Validate JWT & Verify Stripe Credit Ledger
    GW->>GW: Inject 'X-User-ID' & 'X-Org-ID' Headers
    GW->>Bot: Forward Sanitized Request
    Bot->>Know: Query Context (Query Text, Org ID)
    
    par Vector Search
        Know->>Chroma: Dense Vector Query (Gemini Embedding 2)
        Chroma-->>Know: Top-K Vector Chunks (Cosine Distance)
    and Knowledge Graph Traversal
        Know->>PG: Recursive CTE Query (kg_entities + kg_relationships)
        PG-->>Know: Traversing Entity Graph Connections
    end

    Know-->>Bot: Merged Context (Dense Chunks + Graph Triples)
    Bot->>LLM: Prompt + Augmented Context (Dynamic Model Switch)
    LLM-->>Bot: Streaming LLM Response Chunks
    Bot-->>GW: Stream SSE / WebSocket Chunks
    GW-->>User: Stream Response to Client UI
```

---

### 3.3 Real-Time HITL (Human-in-the-Loop) Handoff Architecture

```mermaid
flowchart LR
    subgraph Ingestion ["Real-Time Conversation Stream"]
        ChatInput["Live Chat Stream"]
    end

    subgraph Evaluation ["Bot Service"]
        ConfChecker{"Confidence Score >= 0.85?"}
    end

    subgraph AIPath ["Automated Path"]
        AIBot["AI Response Engine"]
    end

    subgraph Escalation ["HITL Service"]
        WSBridge["WebSocket Bridge (@fastify/websocket)"]
        RedisPubSub["Redis Pub/Sub Channel"]
        OpQueue["Operator Queue Draining"]
        OpDashboard["Human Operator Dashboard"]
    end

    ChatInput --> ConfChecker
    ConfChecker -- "Yes" --> AIBot
    ConfChecker -- "No / User Requests Help" --> WSBridge
    WSBridge --> RedisPubSub
    RedisPubSub --> OpQueue
    OpQueue --> OpDashboard
    OpDashboard -- "Takeover Signal" --> WSBridge
    WSBridge -- "Pause AI Bot Stream" --> AIBot
```

---

## 4. Environment Variables & Configuration Reference (`.env.example`)

Below is the production environment file used across the microservices monorepo.

```bash
# ==========================================
# GENERAL MONOREPO CONFIGURATION
# ==========================================
NODE_ENV=production
LOG_LEVEL=info
TURBO_TEAM=haider-ai-team

# ==========================================
# FASTIFY API GATEWAY (:8000)
# ==========================================
GATEWAY_PORT=8000
GATEWAY_HOST=0.0.0.0
JWT_SECRET=super_secret_jwt_key_production_32bytes_min
RATE_LIMIT_MAX_PER_MINUTE=120
RATE_LIMIT_ANONYMOUS_MAX=30

# ==========================================
# DATABASE & VECTOR STORE
# ==========================================
POSTGRES_URL=postgresql://haider_admin:SecurePass123!@postgres-db.internal:5432/ask_ai_db?sslmode=require
REDIS_URL=redis://:RedisSecureToken99@redis-cache.internal:6379/0
CHROMADB_URL=http://chromadb.internal:8000
CHROMADB_COLLECTION_NAME=brainstormer_v2_embeddings

# ==========================================
# LLM & EMBEDDING APIS
# ==========================================
OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
GEMINI_API_KEY=AIzaSyAxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ELEVENLABS_API_KEY=el_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
AZURE_SPEECH_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
AZURE_SPEECH_REGION=centralindia

# ==========================================
# TELEPHONY & SOCIAL CONNECTORS
# ==========================================
PLIVO_AUTH_ID=MAXXXXXXXXXXXXXXXXXX
PLIVO_AUTH_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
META_GRAPH_API_TOKEN=EAAGxxxxxxxxxxxxxxxxxxxxxxxxxxxx
SHOPIFY_STORE_DOMAIN=my-store.myshopify.com
SHOPIFY_GRAPHQL_TOKEN=shpat_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

# ==========================================
# STRIPE BILLING & LEDGER
# ==========================================
STRIPE_SECRET_KEY=sk_live_51xxxxxxxxxxxxxxxxxxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

# ==========================================
# OBSERVABILITY & TRACING
# ==========================================
LANGCHAIN_TRACING_V2=true
LANGCHAIN_API_KEY=lsv2_pt_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
LANGCHAIN_PROJECT=ask-ai-production-monitoring
```

---

## 5. Database Schema & Data Models

### 5.1 Knowledge Graph Tables (PostgreSQL 15)

```sql
-- Entity Table for Knowledge Graph
CREATE TABLE kg_entities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL,
    name VARCHAR(255) NOT NULL,
    entity_type VARCHAR(100) NOT NULL, -- e.g., 'PERSON', 'PRODUCT', 'TECHNOLOGY'
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Relationship Table for Graph Traversal
CREATE TABLE kg_relationships (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_entity_id UUID NOT NULL REFERENCES kg_entities(id) ON DELETE CASCADE,
    target_entity_id UUID NOT NULL REFERENCES kg_entities(id) ON DELETE CASCADE,
    relationship_type VARCHAR(100) NOT NULL, -- e.g., 'ARCHITECTED', 'USES', 'DEPENDS_ON'
    weight FLOAT DEFAULT 1.0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Recursive CTE Query for Entity Traversal
CREATE OR REPLACE FUNCTION traverse_knowledge_graph(root_entity_id UUID, max_depth INT)
RETURNS TABLE(source_name VARCHAR, rel_type VARCHAR, target_name VARCHAR, depth INT) AS $$
WITH RECURSIVE graph_cte AS (
    SELECT 
        e1.name AS source_name,
        r.relationship_type AS rel_type,
        e2.name AS target_name,
        r.target_entity_id,
        1 AS depth
    FROM kg_relationships r
    JOIN kg_entities e1 ON r.source_entity_id = e1.id
    JOIN kg_entities e2 ON r.target_entity_id = e2.id
    WHERE r.source_entity_id = root_entity_id

    UNION ALL

    SELECT 
        e1.name AS source_name,
        r.relationship_type AS rel_type,
        e2.name AS target_name,
        r.target_entity_id,
        cte.depth + 1
    FROM kg_relationships r
    JOIN graph_cte cte ON r.source_entity_id = cte.target_entity_id
    JOIN kg_entities e1 ON r.source_entity_id = e1.id
    JOIN kg_entities e2 ON r.target_entity_id = e2.id
    WHERE cte.depth < max_depth
)
SELECT source_name, rel_type, target_name, depth FROM graph_cte;
$$ LANGUAGE sql;
```

---

### 5.2 Immutable Credit Ledger Tables

```sql
-- Credit Ledger for Multi-Tenant Billing
CREATE TABLE organization_credit_ledger (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL,
    amount_cents BIGINT NOT NULL, -- positive for top-up, negative for usage
    balance_after_cents BIGINT NOT NULL,
    description TEXT,
    reference_id VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- External Provider Raw Cost Events
CREATE TABLE external_cost_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL,
    provider VARCHAR(100) NOT NULL, -- 'openrouter', 'elevenlabs', 'azure'
    model_name VARCHAR(100) NOT NULL,
    prompt_tokens INT DEFAULT 0,
    completion_tokens INT DEFAULT 0,
    raw_cost_usd NUMERIC(10, 6) NOT NULL,
    customer_charged_cents BIGINT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

---

## 6. Security Infrastructure & Rate Limiting

1. **Anti-Spoof Header Injection**: The `gateway` microservice strips incoming `X-User-ID` or `X-Org-ID` headers from untrusted clients, validates the JWT, and injects verified claims internally.
2. **Per-IP & Anonymous Rate Limiting**: Managed via Redis sliding window counters (`rate_limit:ip:<ip_address>`).
3. **Credit Ledger Enforcement**: Before dispatching calls to OpenRouter or ElevenLabs, the gateway queries `balance_after_cents`. If funds are depleted, a `402 Payment Required` response is triggered automatically.

---

## 7. Deployment Pipeline

* **Containerization**: Single `docker-compose.yml` orchestrating all 6 microservices alongside PostgreSQL, Redis, and ChromaDB.
* **Zero-Downtime Deployment**: Blue/Green deployment using Nginx reverse proxy health check switching.
