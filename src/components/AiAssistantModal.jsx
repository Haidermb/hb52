import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, X, Sparkles, User } from 'lucide-react';
import { resumeData } from '../data/resumeData';

// Environment Configurable AI Title, Mode & Timing Controls (with reliable fallbacks)
const MODAL_TITLE = import.meta.env.VITE_AI_MODAL_TITLE || "Ask The Assistant";
const IS_STREAMING_ENABLED = import.meta.env.VITE_AI_STREAMING_ENABLED !== 'false';
const THINKING_DELAY = Number(import.meta.env.VITE_AI_THINKING_DELAY) || 1800;
const TYPING_SPEED = Number(import.meta.env.VITE_AI_TYPING_SPEED) || 35;

// Helper to parse **bold** and *italic* formatting inside text lines
const parseInline = (content, isUser = false) => {
  if (!content) return null;
  const parts = content.split(/(\*\*.*?\*\*|\*.*?\*)/g);
  return parts.map((part, pIdx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={pIdx} className={isUser ? "font-bold text-slate-950" : "font-bold text-white"}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <span key={pIdx} className={isUser ? "italic text-slate-900" : "italic text-cyan-300 font-mono"}>
          {part.slice(1, -1)}
        </span>
      );
    }
    return part;
  });
};

// Rich text formatter with inline cursor rendering
const renderFormattedText = (text, isUser = false, showCursor = false) => {
  if (!text) return null;
  const lines = text.split('\n');
  const totalLines = lines.length;

  return lines.map((line, lIdx) => {
    const isLastLine = lIdx === totalLines - 1;

    // Inline cursor element rendered ONLY on the current active end-line
    const cursorElement = isLastLine && showCursor ? (
      <span className="inline-block w-2 h-4 ml-1 bg-emerald-400 animate-pulse align-middle" />
    ) : null;

    if (!line.trim() && !isLastLine) return <div key={lIdx} className="h-1.5" />;

    if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
      const bulletText = line.trim().replace(/^[•\-]\s*/, '');
      return (
        <div key={lIdx} className="flex items-start gap-2 my-1 pl-1">
          <span className={isUser ? "text-slate-950 font-bold shrink-0 mt-0.5" : "text-emerald-400 font-bold shrink-0 mt-0.5"}>•</span>
          <div className="flex-1">
            {parseInline(bulletText, isUser)}
            {cursorElement}
          </div>
        </div>
      );
    }

    return (
      <div key={lIdx} className="my-0.5 leading-relaxed">
        {parseInline(line, isUser)}
        {cursorElement}
      </div>
    );
  });
};

// Silky Smooth Local Streaming Component (Driven by .env VITE_AI_TYPING_SPEED & VITE_AI_STREAMING_ENABLED)
const TypingStreamText = ({ text, isUser, onScroll }) => {
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setDisplayedLength(0);
    setIsDone(false);

    let index = 0;
    const total = text.length;

    const timer = setInterval(() => {
      index += 1; // Letter-by-letter streaming
      if (index >= total) {
        setDisplayedLength(total);
        setIsDone(true);
        clearInterval(timer);
      } else {
        setDisplayedLength(index);
      }
      if (onScroll) onScroll();
    }, TYPING_SPEED);

    return () => clearInterval(timer);
  }, [text]);

  const currentText = text.slice(0, displayedLength);

  return renderFormattedText(currentText, isUser, !isDone && !isUser);
};

export const AiAssistantModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hello! I am Haider Bharmal's AI assistant. Ask me anything about Haider's production AI engineering work at Noesis.tech, Autonomous Sales Agent, Omnichannel Multimodal AI, Voice AI Platform, Email HITL Engine, or technical stack!",
      isNew: false
    }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const samplePrompts = [
    "Tell me about Haider's production AI role at Noesis.tech",
    "How does the Autonomous AI Sales Agent work?",
    "What is Haider's Omnichannel Multimodal AI?",
    "Explain Haider's Real-Time Voice AI Platform",
    "What technical stack does Haider specialize in?",
    "How can I contact or hire Haider?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const getReplyForQuery = (query) => {
    const lower = query.toLowerCase();

    if (lower.includes('experience') || lower.includes('noesis') || lower.includes('role') || lower.includes('company') || lower.includes('work') || lower.includes('summary')) {
      return "Haider Bharmal is a **Full Stack Generative AI Engineer at Noesis.tech** (Jan 2024 – Present | Mumbai, India).\n\n" +
             "• **End-to-End Ownership**: Owned R&D, planning, architecture, and production delivery of GenAI applications for multiple enterprise clients.\n" +
             "• **3× Inference Speedup**: Reduced system inference latency by up to 3× using Python, FastAPI, Flask, Docker, and Redis.\n" +
             "• **Enterprise RAG & Agents**: Built RAG pipelines with LlamaParser, FAISS, and Weaviate, alongside intent-classification agentic workflows.\n" +
             "• **Business ROI**: Deployed AI platforms across Web, WhatsApp, Instagram, Email, and Voice channels, driving 70–90% manual workload reductions.";
    } else if (lower.includes('sales') || lower.includes('shopify') || lower.includes('lead') || lower.includes('qualification')) {
      return "Haider built an **Autonomous AI Sales Agent** (*Agentic Workflows*) deployed across WhatsApp and Instagram.\n\n" +
             "• **Business Impact**: Reduced manual sales workload by **90%** and cut median customer response time from **10 hours to 60 seconds**.\n" +
             "• **Key Capabilities**: Automated customer classification, live product catalog queries via Shopify GraphQL, high-intent lead qualification, and direct routing to human sales teams.\n" +
             "• **Tech Stack**: LLMs, Function Calling, Shopify GraphQL, WhatsApp, Instagram.";
    } else if (lower.includes('multimodal') || lower.includes('omnichannel') || lower.includes('pdf') || lower.includes('image') || lower.includes('mongodb') || lower.includes('cache')) {
      return "Haider engineered an **Omnichannel Multimodal AI System** (*Multimodal GenAI*) that enables AI agents to understand and respond to PDF and image-based queries across Web, WhatsApp, and Instagram.\n\n" +
             "• **Performance Impact**: Achieved a **90% Redis Cache Hit Rate** and cut MongoDB database reads by over **80%** using file-reference query caching.\n" +
             "• **Tech Stack**: OpenAI, OpenRouter, Python, MongoDB, Redis.";
    } else if (lower.includes('voice') || lower.includes('plivo') || lower.includes('azure') || lower.includes('speech') || lower.includes('call') || lower.includes('telephony')) {
      return "Haider built a **Real-Time Voice AI Microservice Platform** (*Real-Time Voice AI*) automating inbound and outbound customer calls.\n\n" +
             "• **System Impact**: Reduced manual workload by **70%** and autonomously resolved over **2,000+ customer phone interactions** with 24/7 engagement.\n" +
             "• **Capabilities**: Sub-second streaming speech recognition, dynamic function calling, live interruption recovery, and silence detection.\n" +
             "• **Tech Stack**: LLMs, Python, Plivo, Azure Speech Services, Function Calling.";
    } else if (lower.includes('email') || lower.includes('hitl') || lower.includes('human') || lower.includes('gmail') || lower.includes('outlook') || lower.includes('label')) {
      return "Haider developed an **Email Agent Integration & HITL Support Engine** (*Workflow Automation*).\n\n" +
             "• **Efficiency Impact**: Slashed manual email handling by **75%** with label-based routing.\n" +
             "• **Safety & HITL**: Features confidence-based routing that automatically routes uncertain responses to human reviewers for validation, eliminating automated response errors.\n" +
             "• **Tech Stack**: LLMs, Agentic AI, Gmail/Outlook OAuth, HITL Review Queue, Python.";
    } else if (lower.includes('instagram') || lower.includes('reels') || lower.includes('ingestion') || lower.includes('video') || lower.includes('meta')) {
      return "Haider created the **Instagram Knowledge Base Ingestion Engine** (*AI Ingestion & R&D*).\n\n" +
             "• **Capability**: Converts Instagram Reels, videos, images, and carousels (4 content types) into structured knowledge vectors for AI customer agents.\n" +
             "• **Tech Stack**: Meta Graph API, Multimodal LLMs, Python, Speech-to-Text Transcription.";
    } else if (lower.includes('skill') || lower.includes('stack') || lower.includes('tech') || lower.includes('python') || lower.includes('fastapi') || lower.includes('llm')) {
      return "Haider's Core Engineering Stack:\n\n" +
             "• **Generative AI & LLMs**: OpenAI, Groq, Gemini, Amazon Bedrock, LangChain, LlamaParser, RAG, Agentic AI, Prompt Engineering, Function Calling, Multimodal AI\n" +
             "• **Backend & APIs**: Python, FastAPI, Flask, REST APIs, Microservices, Webhooks, WebSockets, Streamlit\n" +
             "• **Databases & Vector Stores**: MongoDB, MySQL, Redis, Weaviate, FAISS\n" +
             "• **Integrations**: Twilio, Plivo, Azure Speech Services, Stripe, SendPulse, Gmail/Outlook OAuth, Meta Graph API, Shopify GraphQL\n" +
             "• **Cloud & DevOps**: Docker, AWS S3, Git, CI/CD Pipelines";
    } else if (lower.includes('education') || lower.includes('college') || lower.includes('degree') || lower.includes('somaiya') || lower.includes('cgpa') || lower.includes('btech')) {
      return "Haider holds a **Bachelor of Technology (B.Tech) in Artificial Intelligence and Data Science** from **KJ Somaiya Institute of Technology, Mumbai** (2020 – 2024) with a **8.9 / 10 CGPA** and **Honors in Blockchain Technology**.";
    } else if (lower.includes('contact') || lower.includes('hire') || lower.includes('email') || lower.includes('phone') || lower.includes('reach') || lower.includes('location')) {
      return `You can reach Haider Bharmal directly:\n\n` +
             `• **Email**: ${resumeData.personal.email}\n` +
             `• **Phone**: ${resumeData.personal.phone}\n` +
             `• **Location**: ${resumeData.personal.location}`;
    } else {
      return "Haider Bharmal is an AI Engineer with 2+ years of experience building production-grade Generative AI applications, RAG engines, Voice AI platforms, and agentic workflows.\n\n" +
             "Feel free to ask about his **Autonomous Sales Agent**, **Omnichannel Multimodal AI**, **Voice AI Platform**, **Noesis.tech experience**, or **contact info**!";
    }
  };

  const handleSend = (queryText) => {
    const query = queryText || input;
    if (!query.trim() || loading) return;

    const userMsgId = Date.now().toString();
    const newMessages = [...messages, { id: userMsgId, role: 'user', content: query, isNew: false }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    // Thinking delay driven by .env VITE_AI_THINKING_DELAY
    setTimeout(() => {
      const fullReply = getReplyForQuery(query);
      setLoading(false);

      const assistantMsgId = (Date.now() + 1).toString();
      setMessages((prev) => [
        ...prev,
        { id: assistantMsgId, role: 'assistant', content: fullReply, isNew: true }
      ]);
    }, THINKING_DELAY);
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="glass-panel-glow w-full max-w-2xl rounded-2xl border border-emerald-500/40 flex flex-col h-[650px] max-h-[90vh] shadow-2xl relative cursor-default"
      >
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-slate-950">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">{MODAL_TITLE}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message History */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 font-sans">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300 ${
                msg.role === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs ${
                  msg.role === 'user'
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-emerald-400 border border-slate-800'
                }`}
              >
                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`p-3.5 rounded-2xl max-w-[85%] text-xs sm:text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-emerald-500 text-slate-950 font-medium'
                    : 'bg-slate-900/90 text-slate-200 border border-slate-800 shadow-md'
                }`}
              >
                {msg.isNew && msg.role === 'assistant' && IS_STREAMING_ENABLED ? (
                  <TypingStreamText
                    text={msg.content}
                    isUser={msg.role === 'user'}
                    onScroll={scrollToBottom}
                  />
                ) : (
                  renderFormattedText(msg.content, msg.role === 'user', false)
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2.5 text-slate-400 text-xs font-mono p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 max-w-[85%] animate-in fade-in duration-200">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" />
              <span>Thinking & searching Haider's Knowledge Base...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Prompt Suggestions Chips */}
        <div className="px-4 py-2 border-t border-slate-800/80 bg-slate-950/40 overflow-x-auto flex gap-2 scrollbar-none">
          {samplePrompts.map((prompt, pIdx) => (
            <button
              key={pIdx}
              onClick={() => handleSend(prompt)}
              className="px-3 py-1 rounded-full bg-slate-900 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-300 text-[11px] font-mono whitespace-nowrap border border-slate-800 hover:border-emerald-500/40 transition-all"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-slate-800 flex items-center gap-3">
          <input
            type="text"
            placeholder="Ask about Haider's sales agent, Voice AI, experience, or tech stack..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 px-4 py-2.5 rounded-xl glass-panel border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-emerald-500 font-sans"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || loading}
            className="p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};
