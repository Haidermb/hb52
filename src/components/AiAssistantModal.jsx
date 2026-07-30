import React, { useState } from 'react';
import { Bot, Send, X, Sparkles, Terminal, User, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const AiAssistantModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello! I am Haider Bharmal's AI assistant. Ask me anything about Haider's 6-microservice monorepo, Graph RAG architecture, real-time HITL WebSocket handoffs, Voice AI platforms, or background!"
    }
  ]);
  const [loading, setLoading] = useState(false);

  const samplePrompts = [
    "Tell me about Haider's 6 Fastify microservices monorepo",
    "How does Haider's Graph RAG & Knowledge Graph work?",
    "What is Haider's Real-Time HITL Operator Handoff Engine?",
    "What voice AI platforms has Haider engineered?",
    "How can I hire or contact Haider?"
  ];

  const handleSend = (queryText) => {
    const query = queryText || input;
    if (!query.trim()) return;

    const newMessages = [...messages, { role: 'user', content: query }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      let reply = "";
      const lower = query.toLowerCase();

      if (lower.includes('microservice') || lower.includes('fastify') || lower.includes('monorepo')) {
        reply = "Haider architected a high-throughput Turborepo monorepo consisting of **6 Fastify TypeScript microservices** (`gateway`, `auth`, `bot`, `knowledge`, `hitl`, `realtime-audio`) and a Next.js 15 frontend. The API gateway features local JWT verification, anti-spoof header injection, per-IP rate limiting, and Stripe billing guards.";
      } else if (lower.includes('rag') || lower.includes('knowledge graph') || lower.includes('brainstormer')) {
        reply = "Haider built **Brainstormer V2**, an advanced multimodal RAG engine that utilizes **Gemini Embedding 2 (3072-dim vectors)** in ChromaDB combined with a **PostgreSQL Knowledge Graph (`kg_entities`, `kg_relationships`)** using recursive CTE graph traversal. This dense vector + graph traversal approach eliminated hallucinations and improved context precision by over 35%.";
      } else if (lower.includes('hitl') || lower.includes('operator') || lower.includes('handoff')) {
        reply = "Haider engineered a **Real-Time Human-in-the-Loop (HITL) Handoff Engine** using `@fastify/websocket` and Redis Pub/Sub. When AI confidence drops or a user requests human assistance, the AI output is paused automatically and live streams are routed to human operator dashboards with queue draining and state sync.";
      } else if (lower.includes('voice') || lower.includes('speech') || lower.includes('elevenlabs')) {
        reply = "Haider built a **Voice AI Microservice Platform** using Python, FastAPI, Plivo, Azure Speech, and ElevenLabs API. It supports real-time telephony, live call function calling, interruption detection, and custom voice cloning—handling 2,000+ autonomous calls monthly with a 70% reduction in agent workload.";
      } else if (lower.includes('hire') || lower.includes('contact') || lower.includes('email') || lower.includes('phone')) {
        reply = `You can reach Haider Bharmal directly via email at **${resumeData.personal.email}** or call **${resumeData.personal.phone}**. He is based in Mumbai, India, and is open to Full Stack Generative AI & Microservices engineering opportunities.`;
      } else {
        reply = `Haider Bharmal is a Full Stack Generative AI Engineer with 2+ years of experience. He specializes in TypeScript/Node.js (Fastify), Next.js 15, Python, LangChain, PostgreSQL, Redis, Vector DBs, and Docker. Feel free to ask about his projects like Brainstormer V2, HITL Handoff Engine, or Voice AI Platform!`;
      }

      setMessages([...newMessages, { role: 'assistant', content: reply }]);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel-glow w-full max-w-2xl rounded-2xl border border-emerald-500/40 flex flex-col h-[650px] max-h-[90vh] shadow-2xl relative">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-slate-950">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Ask Haider's AI Assistant</h3>
              <div className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>RAG & Vector Search Simulation Active</span>
              </div>
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
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 ${
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
                    : 'bg-slate-900/90 text-slate-200 border border-slate-800'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-slate-400 text-xs font-mono p-3">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" />
              <span>Querying ChromaDB vector index & Knowledge Graph...</span>
            </div>
          )}
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
            placeholder="Ask about Haider's experience, RAG stack, or projects..."
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
