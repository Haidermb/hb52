export const resumeData = {
  personal: {
    name: import.meta.env.VITE_USER_NAME || "HAIDER BHARMAL",
    title: "Full Stack Generative AI Engineer",
    headline: "AI Engineer who focuses on business outcomes, not demos | Production RAG, Agentic AI & Voice AI systems that reduce manual workload by 70%",
    tagline: "Production RAG, Agentic AI & Voice AI Systems Focused on Business Outcomes",
    location: import.meta.env.VITE_USER_LOCATION || "Mumbai, India",
    phone: import.meta.env.VITE_USER_PHONE || "+91 9324325347",
    email: import.meta.env.VITE_USER_EMAIL || "haidermb52@gmail.com",
    github: import.meta.env.VITE_USER_GITHUB || "https://github.com/haiderbharmal",
    linkedin: import.meta.env.VITE_USER_LINKEDIN || "https://linkedin.com/in/haider-bharmal",
    summary: "Full Stack Generative AI Engineer with 2+ years of experience engineering production-grade AI platforms, agentic workflows, and cloud-native microservices. Deep expertise in Retrieval-Augmented Generation (RAG), multi-provider LLM orchestration (OpenAI, Groq, Amazon Bedrock), and real-time Voice AI systems (Twilio, Plivo, WebSockets). Track record of architecting solutions that reduce system latency by up to 3x, automate business workflows by 75%, and handle high-throughput customer engagements across web, voice, and social channels.",
    executiveSummaries: {
      optionA: {
        title: "Senior Generative AI & Platform Engineer (Recommended)",
        text: "Full Stack Generative AI Engineer with 2+ years of experience engineering production-grade AI platforms, agentic workflows, and cloud-native microservices. Deep expertise in Retrieval-Augmented Generation (RAG), multi-provider LLM orchestration (OpenAI, Groq, Amazon Bedrock), and real-time Voice AI systems (Twilio, Plivo, WebSockets). Track record of architecting solutions that reduce system latency by up to 3x, automate business workflows by 75%, and handle high-throughput customer engagements across web, voice, and social channels."
      },
      optionB: {
        title: "AI Systems Architect & RAG Specialist",
        text: "AI Systems Architect specializing in enterprise RAG pipelines, autonomous agentic workflows, and distributed microservices (Python/Flask, Next.js, Redis, Docker). Demonstrated expertise in vector search engines (Weaviate, FAISS), Human-in-the-Loop (HITL) support automation, real-time ASR streaming, and secure financial integrations (Stripe). Proven ability to design scalable multi-tenant infrastructure with strict security alignment and cost optimization."
      }
    },
    aboutPhilosophy: [
      "AI systems don't create value because they're intelligent. They create value when they're reliable, scalable, and solve real business problems.",
      "Over the past two years, I've designed and deployed production AI applications spanning conversational AI, enterprise knowledge systems, Voice AI, intelligent automation, and agentic workflows deployed across web, WhatsApp, Instagram, email, and telephony channels.",
      "These solutions have reduced email processing time by 75%, decreased manual sales effort by approximately 90%, transformed unstructured data into searchable knowledge systems, and enabled organizations to automate and scale critical business processes.",
      "Working on production systems has taught me that successful AI products require far more than model integration. They demand thoughtful system design, reliable infrastructure, effective retrieval strategies, monitoring, fallback mechanisms, and a clear understanding of business objectives.",
      "My expertise includes Retrieval-Augmented Generation (RAG), Python, FastAPI, LangChain, LlamaIndex, OpenAI, Amazon Bedrock, Weaviate, FAISS, Redis, Docker, AWS, Azure STT/TTS, and Agentic AI."
    ],
    coverLetter: {
      opening: "As a Full Stack Generative AI Engineer with deep experience building production-grade AI platforms, I am writing to express my strong interest in joining your team. In my work on the Brainstormer Super platform, I architected enterprise Retrieval-Augmented Generation (RAG) systems, multi-provider LLM routers, real-time Voice AI microservices, and full-stack management dashboards using Python (FastAPI/Flask), Next.js 14, Redis, Docker, Weaviate, and OpenAI/Groq APIs.",
      accomplishments: "My technical contributions focus on scalable architecture and quantifiable performance gains. I designed an enterprise RAG ingestion pipeline powered by LlamaParser, LangChain, FAISS, and Weaviate, pairing it with a Redis caching strategy that achieved a 90% cache hit rate and reduced database read overhead by 80%. Additionally, I engineered low-latency Voice AI microservices with Twilio, Plivo, Azure Speech, and Socket.IO ASR streaming, autonomously handling over 2,000 customer phone calls while reducing call center workload by 70%.",
      delivery: "Complementing my AI work, I bring robust software engineering practices spanning Next.js 14, Stripe API financial workflows, Gmail/Outlook OAuth automation, and Nginx reverse proxies. I built an Email Automation & Human-in-the-Loop (HITL) review system that slashed inbox response times by 75%, and implemented autonomous Shopify GraphQL sales agents on WhatsApp and Instagram. I look forward to bringing this expertise in Generative AI and cloud microservices to your engineering team."
    }
  },
  metrics: [
    { label: "System Latency", value: "3x Faster", detail: "Inference & Response Optimization" },
    { label: "Cache Hit Rate", value: "90%", detail: "80%+ DB Read Reduction via Redis" },
    { label: "Email Automation", value: "75% Cut", detail: "Inbox Processing Time Reduced" },
    { label: "Voice AI Telephony", value: "2,000+", detail: "Autonomous Customer Call Resolution" },
    { label: "Call Center Workload", value: "70% Cut", detail: "Automated Telephony & Silence Handling" },
    { label: "Sales Workload", value: "90% Cut", detail: "Shopify + WhatsApp/IG Sales Assistant" }
  ],
  skillsMatrix: [
    { domain: "Languages", items: ["Python 3.9", "JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3"] },
    { domain: "AI / ML & LLMs", items: ["OpenAI (GPT-4o/O3-Mini)", "Groq (Llama 3)", "Amazon Bedrock", "OpenRouter", "Cohere", "Prompt Engineering", "Agentic Workflows", "Function Calling", "Braintrust AI Eval"] },
    { domain: "RAG & Vector Search", items: ["Weaviate", "FAISS", "Pinecone", "LangChain", "LlamaParser", "Hybrid Search (BM25 + Vector)", "Reranking", "Semantic Chunking"] },
    { domain: "Backend & Microservices", items: ["Python (FastAPI/Flask)", "Node.js (Express)", "RESTful APIs", "WebSockets", "Socket.IO", "Gunicorn", "Eventlet", "Celery"] },
    { domain: "Frontend & UI", items: ["Next.js 14 (App Router)", "React 18", "Redux Toolkit", "React (CRA)", "TailwindCSS", "Responsive Web Architecture"] },
    { domain: "Data & Infrastructure", items: ["Redis (Caching/PubSub)", "Google Cloud Firestore", "MongoDB", "MySQL", "SQLite", "Strapi CMS v4"] },
    { domain: "DevOps & Cloud", items: ["Docker", "Docker Compose", "Nginx Reverse Proxy", "AWS S3", "Git", "CI/CD Pipelines", "Sentry Monitoring"] },
    { domain: "Integrations & APIs", items: ["Twilio", "Plivo", "Azure Speech Services", "Navana ASR", "Stripe API", "Sendbird", "Gmail/Outlook OAuth", "Meta Graph APIs", "Shopify GraphQL"] }
  ],
  skills: [
    {
      category: "AI, ML & Multi-Provider LLMs",
      icon: "Cpu",
      items: [
        { name: "OpenAI (GPT-4o / O3-Mini)", level: "Expert", tag: "Multimodal Models & Reasoning" },
        { name: "Groq (Llama 3)", level: "Expert", tag: "Ultra-Low Latency Inference" },
        { name: "Amazon Bedrock & OpenRouter", level: "Expert", tag: "Multi-Model Router" },
        { name: "Agentic Workflows & Function Calling", level: "Expert", tag: "Autonomous Execution" },
        { name: "Prompt Engineering & Guardrails", level: "Expert", tag: "Security Alignment" },
        { name: "Braintrust AI Eval", level: "Advanced", tag: "LLM Benchmarking" }
      ]
    },
    {
      category: "RAG & Vector Search Engines",
      icon: "Database",
      items: [
        { name: "Weaviate & FAISS", level: "Expert", tag: "Dense Vector Search" },
        { name: "Pinecone & ChromaDB", level: "Expert", tag: "Vector Embeddings" },
        { name: "LangChain & LlamaParser", level: "Expert", tag: "Document Ingestion" },
        { name: "Hybrid Search (BM25 + Vector)", level: "Expert", tag: "Semantic Chunking & Reranking" }
      ]
    },
    {
      category: "Backend & Microservices Architecture",
      icon: "Server",
      items: [
        { name: "Python (FastAPI / Flask)", level: "Expert", tag: "Async Backends" },
        { name: "Node.js (Express / Fastify)", level: "Expert", tag: "Scalable Microservices" },
        { name: "WebSockets & Socket.IO", level: "Expert", tag: "Real-Time Streaming" },
        { name: "Redis Caching & Pub/Sub", level: "Expert", tag: "90% Cache Hit Rate" },
        { name: "Gunicorn, Eventlet & Celery", level: "Advanced", tag: "Async Task Workers" }
      ]
    },
    {
      category: "Frontend, DevOps & Security",
      icon: "Cloud",
      items: [
        { name: "Next.js 14 (App Router)", level: "Expert", tag: "SSR & React 18" },
        { name: "TailwindCSS & Redux Toolkit", level: "Expert", tag: "Responsive UI Architecture" },
        { name: "Docker & Docker Compose", level: "Expert", tag: "Containerization" },
        { name: "Nginx Reverse Proxy & SSL/TLS", level: "Expert", tag: "API Gateway" },
        { name: "AWS S3 & Cloud Infrastructure", level: "Advanced", tag: "Cloud Storage" }
      ]
    },
    {
      category: "Voice AI, Messaging & Financial APIs",
      icon: "Workflow",
      items: [
        { name: "Twilio, Plivo & Navana ASR", level: "Expert", tag: "Voice Telephony & Streaming ASR" },
        { name: "Azure Speech Services (TTS/STT)", level: "Expert", tag: "Neural Speech Synthesis" },
        { name: "Stripe API & HMAC Webhooks", level: "Expert", tag: "Subscriptions & Usage Billing" },
        { name: "Gmail / Outlook OAuth", level: "Expert", tag: "Email Automation" },
        { name: "Shopify GraphQL & Meta Graph APIs", level: "Expert", tag: "E-Commerce & Social Bots" }
      ]
    }
  ],
  experience: [
    {
      company: "Noesis.tech",
      location: "Mumbai, India",
      role: "Senior Full Stack Generative AI Engineer",
      type: "Full-Time",
      period: "Jan 2024 – Present",
      description: "Leading the architectural design and full-stack development of production-grade AI platforms, agentic workflows, RAG engines, and real-time telephony microservices.",
      highlights: [
        {
          title: "Enterprise AI Microservices Architecture",
          text: "Architected a containerized multi-service AI platform, reducing system inference latency by 3x across 10+ decoupled microservices.",
          techStack: "Python 3.9, Flask, Next.js 14, Redis, Docker, Docker Compose, Gunicorn, Eventlet"
        },
        {
          title: "Enterprise Nginx API Gateway",
          text: "Engineered an enterprise Nginx API gateway with SSL/TLS termination and 300s WebSocket proxies to deliver low-latency real-time token streaming for thousands of concurrent users.",
          techStack: "Nginx, WebSockets, SSL/TLS, Eventlet, Gunicorn, Linux"
        },
        {
          title: "Multi-Tenant Credential Isolation",
          text: "Implemented multi-tenant credential isolation middleware, dynamically resolving tenant API keys with a 1-hour TTL cache to eliminate database latency.",
          techStack: "Python, Flask, Cloud Firestore, Redis, Firebase Admin SDK, REST APIs"
        },
        {
          title: "Non-Bypassable Security Guardrails",
          text: "Enforced non-bypassable platform security guardrails (PLATFORM_PROMPT), mitigating prompt injection, jailbreaking, and PII leakage across all agent deployment channels.",
          techStack: "Python, Flask, Prompt Engineering, System Prompts, Security Alignment"
        },
        {
          title: "Enterprise RAG Ingestion Engine",
          text: "Developed a high-density RAG ingestion engine to extract, chunk, and index complex multi-page PDFs, tabular data, and unstructured business documents.",
          techStack: "LangChain, LlamaParser, FAISS, Weaviate, Pinecone, Python, Flask"
        },
        {
          title: "File-Reference Query Caching Layer",
          text: "Designed a file-reference query caching layer in Redis, achieving a 90% cache hit rate on document lookups and cutting underlying database reads by over 80%.",
          techStack: "Redis, MongoDB, Python, Flask, Hashing Algorithms"
        },
        {
          title: "Dynamic Multi-LLM Provider Router",
          text: "Built a dynamic LLM provider router with automated fallback logic (OpenAI GPT-4o, Groq Llama 3, Amazon Bedrock, OpenRouter) to ensure 99.9% service availability.",
          techStack: "OpenAI API (GPT-4o), Groq (Llama 3), Amazon Bedrock, OpenRouter, Cohere, Python, Flask"
        },
        {
          title: "LLM Function Calling & Schema Validation",
          text: "Implemented LLM function calling and JSON schema validation (jsonschema), parsing unstructured model outputs into validated schemas for dynamic frontend card rendering.",
          techStack: "OpenAI Function Calling, jsonschema, Python, Flask, JSON"
        },
        {
          title: "Real-Time Voice AI Telephony & ASR Bridge",
          text: "Engineered a real-time Voice AI telephony microservice autonomously resolving 2,000+ customer phone calls with live interruption handling, silence detection, and sub-second ASR streaming.",
          techStack: "Twilio API, Plivo API, Azure Neural TTS, Navana ASR, WebSockets, Python, Socket.IO"
        },
        {
          title: "Email Automation & HITL Support Queue",
          text: "Developed an AI-powered email automation engine with confidence-based Human-in-the-Loop review queues, auto-dispatching responses >=85% while reducing inbox processing time by 75%.",
          techStack: "Gmail API, Outlook OAuth2, Python, Flask, Celery, Redis, MongoDB, Next.js 14"
        },
        {
          title: "Autonomous E-Commerce AI Sales Agent",
          text: "Built an autonomous AI sales assistant deployed on WhatsApp and Instagram querying live Shopify GraphQL catalogs, decreasing response times from minutes to seconds and cutting sales workload by 90%.",
          techStack: "Shopify GraphQL API, Meta Graph APIs, SendPulse, OpenAI Function Calling, Python, Flask"
        },
        {
          title: "Stripe Billing & Metering Infrastructure",
          text: "Integrated Stripe subscription management and usage-metering APIs tracking LLM tokens, document ingestion, and voice call durations with automated dunning crons.",
          techStack: "Stripe API, Stripe Webhooks, Python, Flask, Redis, MongoDB, HMAC Verification"
        }
      ],
      techStack: ["Python 3.9", "FastAPI", "Flask", "Next.js 14", "Docker", "Redis", "OpenAI (GPT-4o)", "Groq (Llama 3)", "Amazon Bedrock", "Weaviate", "FAISS", "Twilio", "Plivo", "Azure Speech", "Stripe API"]
    },
    {
      company: "New Leap Initiative",
      location: "Mumbai, India",
      role: "Software Developer Intern",
      type: "Internship",
      period: "Feb 2022 – May 2023",
      description: "Developed RFID record digitization systems, machine learning pipelines, and hardware desktop visualization tools.",
      highlights: [
        {
          title: "RFID College Record Digitization App",
          text: "Built Flask-based app to digitize college records with an RFID system, improving data entry & security for students & staff.",
          techStack: "Python, Flask, RFID Hardware, SQLite"
        },
        {
          title: "ML Pipelines & EDA Analysis",
          text: "Conducted data cleaning and EDA to understand data, identify quality issues and uncover patterns, developed robust ML pipelines using scikit-learn, and seamlessly integrated the pipeline with an API.",
          techStack: "Python, scikit-learn, Pandas, NumPy, REST API"
        },
        {
          title: "Arduino Serial Desktop Visualization App",
          text: "Developed a desktop application using Tkinter to capture live data from Arduino via serial ports and display multiple live graphs simultaneously using Matplotlib, significantly reducing analysis time.",
          techStack: "Python, Tkinter, Matplotlib, Arduino Serial"
        }
      ],
      techStack: ["Python", "Flask", "scikit-learn", "Tkinter", "Matplotlib", "Arduino Serial", "RFID Systems"]
    }
  ],
  projects: [
    {
      id: "autonomous-ai-sales-agent",
      title: "Autonomous AI Sales Agent",
      category: "Agentic Workflows",
      featured: true,
      technologies: ["LLMs", "Function Calling", "Shopify GraphQL", "WhatsApp", "Instagram"],
      summary: "Built AI sales agents that handle product inquiries, classify customers, qualify high-intent leads, and route qualified leads to human sales teams.",
      impactStats: [
        { label: "Manual Sales Workload", value: "90% Lower" },
        { label: "Median Response Time", value: "10 hrs → 60s" },
        { label: "AI Engagement", value: "24/7 Available" }
      ],
      features: [
        "Handles automated product catalog inquiries and real-time customer classification.",
        "Qualifies high-intent sales leads with dynamic LLM function calling.",
        "Routes qualified leads directly to human sales teams across WhatsApp & Instagram."
      ],
      techStackLine: "LLMs · Function Calling · Shopify GraphQL · WhatsApp · Instagram"
    },
    {
      id: "omnichannel-multimodal-ai",
      title: "Omnichannel Multimodal AI",
      category: "Multimodal GenAI",
      featured: true,
      technologies: ["OpenAI", "OpenRouter", "Python", "MongoDB", "Redis"],
      summary: "Extended AI agents beyond text, enabling them to understand and respond to PDF and image-based queries across Web, WhatsApp, and Instagram.",
      impactStats: [
        { label: "Cache Hit Rate", value: "90%" },
        { label: "MongoDB Reads Cut", value: "80%+" },
        { label: "Channels", value: "Web + WA + IG" }
      ],
      features: [
        "Processes PDF document queries and image-based inputs across Web, WhatsApp, and Instagram.",
        "High-density Redis query caching layer cutting underlying database reads by over 80%.",
        "Cross-channel multimodal agent deployment with uniform session state."
      ],
      techStackLine: "OpenAI · OpenRouter · Python · MongoDB · Redis"
    },
    {
      id: "voice-ai-platform",
      title: "Voice AI Platform",
      category: "Real-Time Voice AI",
      featured: true,
      technologies: ["LLMs", "Python", "Plivo", "Azure Speech Services", "Function Calling"],
      summary: "Built real-time AI voice agents that automate inbound and outbound customer conversations with intelligent call handling and 24/7 availability.",
      impactStats: [
        { label: "Manual Workload", value: "70% Lower" },
        { label: "Autonomous Calls", value: "2,000+" },
        { label: "AI Engagement", value: "24/7 Available" }
      ],
      features: [
        "Automates inbound and outbound customer conversations with sub-second streaming speech recognition.",
        "Intelligent call handling with real-time function execution and live interruption recovery.",
        "24/7 autonomous voice engagement scaling up to 2,000+ interactions."
      ],
      techStackLine: "LLMs · Python · Plivo · Azure Speech Services · Function Calling"
    },
    {
      id: "email-agent-hitl",
      title: "Email Agent Integration & HITL",
      category: "Workflow Automation",
      featured: true,
      technologies: ["LLMs", "Agentic AI", "Gmail / Outlook", "HITL Queue", "Python"],
      summary: "Enabled users to connect AI agents to personal or business emails, automate targeted responses, and route uncertain inquiries to human reviewers.",
      impactStats: [
        { label: "Manual Email Handling", value: "75% Less" },
        { label: "Intelligent Routing", value: "Label-Based" },
        { label: "Human Handoff", value: "Confidence-Based" }
      ],
      features: [
        "Connects AI agents to personal or business email accounts via OAuth for auto-drafting and dispatch.",
        "Label-based intelligent routing and categorization of incoming enterprise tickets.",
        "Confidence-based human review queue ensuring safety and zero response errors."
      ],
      techStackLine: "LLMs · Agentic AI · Gmail/Outlook · HITL · Python"
    },
    {
      id: "instagram-kb-engine",
      title: "Instagram Knowledge Base Engine",
      category: "AI Ingestion & R&D",
      featured: true,
      technologies: ["Meta Graph API", "Multimodal LLMs", "Python", "Transcription"],
      summary: "Automated the conversion of Instagram Reels, videos, images, and carousels into structured knowledge for AI-powered customer interactions.",
      impactStats: [
        { label: "Content Ingested", value: "4 Formats" },
        { label: "Knowledge Creation", value: "Automated" },
        { label: "Manual Management", value: "Reduced" }
      ],
      features: [
        "Ingests Instagram Reels, videos, images, and carousels using Meta Graph APIs.",
        "Speech-to-text transcription and vision processing converting social media content into structured knowledge.",
        "Eliminates manual content creation for customer-facing AI agents."
      ],
      techStackLine: "Meta Graph API · Multimodal LLMs · Python · Transcription"
    }
  ],
  education: {
    institution: "KJ Somaiya Institute of Technology, Mumbai",
    degree: "Bachelor of Technology (B.Tech) in Artificial Intelligence and Data Science",
    honors: "Honors in Blockchain",
    period: "2020 – 2024",
    score: "Grade: 8.9 CGPA",
    courses: [
      "Artificial Intelligence",
      "Data Science",
      "Blockchain Engineering",
      "Deep Learning & ML",
      "Natural Language Processing",
      "Database Systems & SQL"
    ]
  },
  certificates: [
    {
      title: "AWS Cloud Foundations Course",
      issuer: "Amazon Web Services (AWS)",
      link: "#"
    },
    {
      title: "Google Analytics Coursera",
      issuer: "Google / Coursera",
      link: "#"
    },
    {
      title: "Malware Analysis with Data Science",
      issuer: "Data Science Specialization",
      link: "#"
    }
  ],
  architectureNodes: [
    { id: "nginx-gateway", name: "Nginx Gateway & Security Guardrails", tech: "Nginx / SSL / PLATFORM_PROMPT", desc: "Enterprise Nginx gateway, 300s WebSocket proxies, multi-tenant credential isolation, anti-jailbreak security guardrails." },
    { id: "rag-engine", name: "RAG & Redis Caching Layer", tech: "LlamaParser / FAISS / Weaviate / Redis", desc: "High-density document ingestion engine with a 90% cache hit rate Redis query caching layer reducing DB reads by >80%." },
    { id: "llm-router", name: "Multi-LLM Provider Router", tech: "OpenAI GPT-4o / Groq / Bedrock / OpenRouter", desc: "Dynamic LLM provider router with automated failover logic ensuring 99.9% service availability & jsonschema validation." },
    { id: "voice-ai", name: "Voice AI & Streaming ASR Bridge", tech: "Twilio / Plivo / Azure Speech / Navana ASR", desc: "Sub-second 16kHz PCM streaming ASR audio bridge, live call silence detection & interruption handling (2,000+ calls)." },
    { id: "hitl-email", name: "Email Automation & HITL Queue", tech: "Gmail / Outlook OAuth / Celery / Redis", desc: "Contextual email ticket drafting with confidence-based HITL review queues (>=85% auto-dispatch, 75% time cut)." },
    { id: "stripe-billing", name: "Financial Billing & Metering", tech: "Stripe API / HMAC Webhooks / Usage Metering", desc: "Stripe subscription portals, HMAC signed webhooks, token/voice duration usage metering, and automated dunning crons." }
  ]
};
