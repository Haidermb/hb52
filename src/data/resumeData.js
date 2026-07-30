export const resumeData = {
  personal: {
    name: "HAIDER BHARMAL",
    title: "Full Stack Generative AI Engineer",
    tagline: "Architecting Production-Grade AI Platforms, 6-Microservice Monorepos, Graph RAG Engines & Real-Time HITL Bridges",
    location: "Mumbai, India",
    phone: "+91 9324325347",
    email: "haidermb52@gmail.com",
    github: "https://github.com/haiderbharmal",
    linkedin: "https://linkedin.com/in/haider-bharmal",
    status: "Available for AI Engineering & Microservices Roles",
    summary: "Full Stack Generative AI Engineer with 2+ years of experience architecting and deploying production-grade AI platforms, microservice ecosystems, and enterprise Retrieval-Augmented Generation (RAG) engines. Specialized in TypeScript/Node.js (Fastify), Next.js 15, Python, LangChain, PostgreSQL, Redis, and Vector Databases. Proven track record of building complex multimodal AI platforms featuring Graph RAG (Knowledge Graphs), real-time Human-in-the-Loop (HITL) WebSocket bridges, voice cloning (ElevenLabs), and multi-tenant credit billing architecture."
  },
  metrics: [
    { label: "Experience", value: "2+ Years", detail: "Building Production AI Systems" },
    { label: "Architecture", value: "6 Fastify TS", detail: "Microservices Monorepo" },
    { label: "LLM Library", value: "300+ LLMs", detail: "Orchestrated via OpenRouter" },
    { label: "Cache Hit Rate", value: "90%", detail: "80% DB Load Reduction" },
    { label: "Voice AI Calls", value: "2,000+", detail: "Autonomous Monthly Interactions" },
    { label: "Academic CGPA", value: "8.9 / 10", detail: "B.Tech AI & Data Science" }
  ],
  skills: [
    {
      category: "Generative AI & LLM Engineering",
      icon: "Cpu",
      items: [
        { name: "LangChain", level: "Expert", tag: "Agentic Workflows" },
        { name: "OpenRouter (300+ LLMs)", level: "Expert", tag: "Dynamic Model Switching" },
        { name: "OpenAI API & Anthropic Claude", level: "Expert", tag: "Multimodal Models" },
        { name: "Gemini Embedding 2", level: "Expert", tag: "3072-dim Vectors" },
        { name: "ElevenLabs API", level: "Advanced", tag: "Voice Cloning & Synthesis" },
        { name: "LangSmith Tracing", level: "Advanced", tag: "LLM Observability" },
        { name: "Prompt Engineering & Vision LLMs", level: "Expert", tag: "Multimodal Processing" },
        { name: "LlamaParser", level: "Advanced", tag: "Document Ingestion" }
      ]
    },
    {
      category: "RAG & Knowledge Processing",
      icon: "Database",
      items: [
        { name: "Graph RAG (Knowledge Graphs)", level: "Expert", tag: "Entity & Relationship Traversal" },
        { name: "ChromaDB & FAISS", level: "Expert", tag: "Dense Vector Retrieval" },
        { name: "Weaviate & Vector Embeddings", level: "Advanced", tag: "Multimodal RAG" },
        { name: "PostgreSQL Recursive CTEs", level: "Expert", tag: "Graph Traversal Queries" },
        { name: "Content Connectors", level: "Expert", tag: "YouTube, IG, Twitter, RSS, PDFs" },
        { name: "Jina Reader & Cloudflare Browser", level: "Advanced", tag: "Rapid Light Scraping" }
      ]
    },
    {
      category: "Backend & Microservices",
      icon: "Server",
      items: [
        { name: "Node.js & Fastify", level: "Expert", tag: "6-Service Monorepo" },
        { name: "Next.js 15", level: "Expert", tag: "App Router / SSR" },
        { name: "Python & FastAPI", level: "Expert", tag: "Async Backends" },
        { name: "BullMQ", level: "Advanced", tag: "Distributed Task Queues" },
        { name: "Redis 7 Pub/Sub", level: "Expert", tag: "Caching & Rate Limiting" },
        { name: "WebSockets (@fastify/websocket)", level: "Expert", tag: "Real-Time Streaming" },
        { name: "Turborepo", level: "Advanced", tag: "Monorepo Management" },
        { name: "Express & Flask", level: "Advanced", tag: "REST API Microservices" }
      ]
    },
    {
      category: "Cloud, DevOps & Security",
      icon: "Cloud",
      items: [
        { name: "Docker & Docker Compose", level: "Expert", tag: "Containerization" },
        { name: "Blue/Green Deployments", level: "Advanced", tag: "Zero-Downtime Pipelines" },
        { name: "AWS S3 & Cloud Storage", level: "Advanced", tag: "Asset Management" },
        { name: "Nginx & Caddy", level: "Advanced", tag: "Reverse Proxy & TLS" },
        { name: "CI/CD (GitHub Actions)", level: "Advanced", tag: "Automated Testing" },
        { name: "API Security & JWT", level: "Expert", tag: "Header Injection & Rate Limiting" }
      ]
    },
    {
      category: "Integrations & Third-Party APIs",
      icon: "Workflow",
      items: [
        { name: "Stripe Ledger Billing", level: "Expert", tag: "Immutable Usage Ledger" },
        { name: "Meta Graph API", level: "Expert", tag: "Instagram & Reels Ingestion" },
        { name: "Plivo & Azure Speech", level: "Advanced", tag: "Real-Time Telephony AI" },
        { name: "Shopify GraphQL APIs", level: "Advanced", tag: "E-Commerce Catalog Sync" },
        { name: "Twilio & SendPulse", level: "Advanced", tag: "Omnichannel Messaging" }
      ]
    }
  ],
  experience: [
    {
      role: "Full Stack Generative AI Engineer",
      company: "Noesis.tech",
      location: "Mumbai, India",
      period: "Jan 2024 – Present",
      type: "Full-Time",
      description: "Leading the architectural design and full-stack development of production-grade AI applications, microservice ecosystems, and enterprise RAG platforms.",
      highlights: [
        {
          title: "Architected Microservices AI Engine",
          text: "Designed and deployed a Turborepo-based monorepo consisting of 6 Fastify TypeScript microservices (`gateway`, `auth`, `bot`, `knowledge`, `hitl`, `realtime-audio`) and a Next.js 15 frontend, serving high-throughput LLM interactions."
        },
        {
          title: "Engineered Multimodal RAG & Knowledge Graph",
          text: "Built an end-to-end ingestion and retrieval pipeline utilizing Gemini Embedding 2 (3072-dim vectors) in ChromaDB and PostgreSQL-based Knowledge Graphs (`kg_entities`, `kg_relationships`) with recursive CTE graph traversal and BullMQ background indexing."
        },
        {
          title: "Built Real-Time Human-in-the-Loop (HITL) Handoff",
          text: "Developed a WebSocket & Redis Pub/Sub orchestration engine enabling seamless handoff between AI agents and live human operators with presence tracking, operator queue draining, and state synchronization."
        },
        {
          title: "Implemented API Gateway & Security Infrastructure",
          text: "Built a Fastify API gateway featuring local JWT verification, anti-spoof identity header injection, per-IP / per-anonymous rate limiting, and Stripe credit-ledger billing guards."
        },
        {
          title: "Integrated Voice AI & Multi-LLM Orchestration",
          text: "Integrated OpenRouter (300+ LLMs) for dynamic model switching and ElevenLabs API for custom voice cloning and streaming synthesis."
        },
        {
          title: "Developed Creator Onboarding & Social Ingestion",
          text: "Built a 3-step AI agent creator wizard backed by rapid light-scraping (`Jina Reader/Cloudflare Browser`) and asynchronous social content connectors (YouTube, Instagram, RSS, Document OCR)."
        },
        {
          title: "Optimized Latency & Cost Operations",
          text: "Reduced database query overhead by 80% using Redis caching, implemented LangSmith tracing for LLM observability, and set up Docker Compose blue/green deployment pipelines."
        }
      ],
      techStack: ["TypeScript", "Node.js", "Fastify", "Next.js 15", "Python", "FastAPI", "PostgreSQL", "Redis", "ChromaDB", "LangChain", "BullMQ", "ElevenLabs", "Docker"]
    }
  ],
  projects: [
    {
      id: "brainstormer-v2",
      title: "Brainstormer V2 — Multimodal AI Agent & Knowledge Graph Platform",
      category: "Multimodal AI & RAG",
      featured: true,
      technologies: ["Node.js (Fastify)", "Next.js 15", "TypeScript", "PostgreSQL", "Redis", "ChromaDB", "OpenRouter", "ElevenLabs", "BullMQ"],
      summary: "An enterprise-grade multimodal AI agent creation platform with combined dense vector retrieval and Knowledge Graph entity traversal.",
      impactStats: [
        { label: "Context Precision", value: "+35%" },
        { label: "Embedding Vector Dim", value: "3,072" },
        { label: "Supported Models", value: "300+" }
      ],
      features: [
        "Multimodal Content Pipeline: ConnectorRegistry architecture ingesting YouTube videos, IG posts, Twitter feeds, RSS, and PDFs into normalized chunks with automatic vision/OCR extraction.",
        "Graph RAG & Search: Combined dense vector retrieval with PostgreSQL graph entity traversal (`kg_entities`, `kg_relationships`) using recursive CTEs to eliminate hallucinations.",
        "Immutable Credit Billing System: Built an enterprise ledger (`organization_credit_ledger`, `external_cost_events`) tracking provider raw costs vs. customer usage with automated Stripe top-ups."
      ]
    },
    {
      id: "hitl-operator-handoff",
      title: "Real-Time HITL Operator Handoff Engine",
      category: "Real-Time & WebSockets",
      featured: true,
      technologies: ["Node.js", "WebSockets (@fastify/websocket)", "Redis Pub/Sub", "PostgreSQL"],
      summary: "An automated escalation pipeline that pauses AI bot outputs when confidence drops, routing live chat streams to human operators seamlessly.",
      impactStats: [
        { label: "Handoff Latency", value: "<50ms" },
        { label: "Operator Queue Draining", value: "Automated" },
        { label: "State Sync", value: "100%" }
      ],
      features: [
        "Engineered automated escalation pipeline triggering on confidence thresholds or user help requests.",
        "Handled operator availability management, queue draining, typing indicators, and one-click handback to AI.",
        "Utilized Redis Pub/Sub and WebSockets for zero-packet-loss presence tracking and conversation state synchronization."
      ]
    },
    {
      id: "voice-ai-platform",
      title: "Voice AI Microservice Platform",
      category: "Voice & Speech AI",
      featured: true,
      technologies: ["Python", "FastAPI", "Plivo", "Azure Speech Services", "ElevenLabs", "LLMs"],
      summary: "A real-time Voice AI platform supporting inbound/outbound telephony, live call function calling, and ultra-low latency streaming.",
      impactStats: [
        { label: "Workload Reduction", value: "70%" },
        { label: "Monthly Calls", value: "2,000+" },
        { label: "Availability", value: "24/7" }
      ],
      features: [
        "Built real-time voice pipeline with interruption handling, silence detection, and automated call termination.",
        "Implemented live function/tool calling during ongoing phone calls to capture and validate structured customer data.",
        "Reduced manual agent workload by 70% while servicing over 2,000 autonomous calls monthly."
      ]
    },
    {
      id: "autonomous-sales-agent",
      title: "Autonomous E-Commerce Sales & Social Agent",
      category: "Agentic Workflows",
      featured: false,
      technologies: ["Python", "LangChain", "Meta Graph API", "Shopify GraphQL", "Redis"],
      summary: "AI sales assistant deployed across WhatsApp and Instagram integrating Shopify product catalogs for lead qualification and product recommendations.",
      impactStats: [
        { label: "Sales Workload Cut", value: "90%" },
        { label: "Response Speed", value: "Seconds" },
        { label: "Catalog Sync", value: "Real-time" }
      ],
      features: [
        "Eliminated repetitive product inquiries and manual lead qualification using Meta Graph APIs and Shopify GraphQL.",
        "Leveraged LLM function calling to recommend product variants dynamically based on customer intent.",
        "Cut customer response times from minutes to seconds while providing 24/7 engagement."
      ]
    },
    {
      id: "email-hitl-automation",
      title: "Email Automation & HITL Engine",
      category: "Intelligent Automation",
      featured: false,
      technologies: ["Python", "Gmail/Outlook APIs", "Agentic Workflows", "Confidence Queues"],
      summary: "AI-powered email automation platform with agentic workflows and confidence-based Human-in-the-Loop review queues.",
      impactStats: [
        { label: "Processing Time", value: "-75%" },
        { label: "Incorrect Responses", value: "0%" },
        { label: "Integrations", value: "Gmail/Outlook" }
      ],
      features: [
        "Solved high-volume email processing bottlenecks with automated intent classification.",
        "Integrated confidence-based Human-in-the-Loop review queues to prevent erroneous automated replies.",
        "Reduced inbox processing time by 75% across enterprise customer support accounts."
      ]
    }
  ],
  architectureNodes: [
    { id: "gateway", name: "Fastify Gateway", tech: "TypeScript / Fastify", color: "#10B981", desc: "JWT Verification, Header Injection, Anti-Spoofing, Per-IP Rate Limiting, Stripe Billing Guards" },
    { id: "auth", name: "Auth Service", tech: "Node.js / OAuth2", color: "#3B82F6", desc: "Identity Provider, Session Management, JWT Signing, Role-Based Access Control" },
    { id: "bot", name: "Bot Service", tech: "LangChain / OpenRouter", color: "#8B5CF6", desc: "Dynamic Model Switching (300+ LLMs), Function Calling, Structured Output Validation" },
    { id: "knowledge", name: "Knowledge Engine", tech: "ChromaDB / Postgres CTE", color: "#EC4899", desc: "Gemini 3072-dim Vector Embeddings, Recursive CTE Knowledge Graphs, BullMQ Queueing" },
    { id: "hitl", name: "HITL WebSocket Bridge", tech: "Redis Pub/Sub / WS", color: "#F59E0B", desc: "Real-time Operator Handoff, Presence Tracking, Queue Draining, State Sync" },
    { id: "realtime-audio", name: "Realtime Audio", tech: "ElevenLabs / Plivo / Azure", color: "#06B6D4", desc: "Voice Cloning, Ultra-Low Latency Streaming Synthesis, Interruption Detection" }
  ],
  education: {
    degree: "Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science",
    honors: "Honors in Blockchain",
    institution: "KJ Somaiya Institute of Technology, Mumbai",
    period: "2020 – 2024",
    score: "CGPA: 8.9 / 10.0",
    courses: ["Artificial Intelligence", "Data Science", "Blockchain Engineering", "Deep Learning", "Distributed Systems", "Database Management Systems"]
  }
};
