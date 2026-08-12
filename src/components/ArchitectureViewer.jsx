import React, { useState } from 'react';
import { Server, Cpu, Database, Network, ShieldCheck, Radio, CheckCircle2, Play, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const ArchitectureViewer = () => {
  const [selectedNode, setSelectedNode] = useState(resumeData.architectureNodes[0]);
  const [simulating, setSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);

  const handleSimulate = () => {
    setSimulating(true);
    setSimStep(1);

    const steps = [
      { node: 'gateway', delay: 800 },
      { node: 'auth', delay: 1600 },
      { node: 'knowledge', delay: 2400 },
      { node: 'bot', delay: 3200 },
      { node: 'hitl', delay: 4000 },
      { node: 'realtime-audio', delay: 4800 }
    ];

    steps.forEach((s, idx) => {
      setTimeout(() => {
        const found = resumeData.architectureNodes.find(n => n.id === s.node);
        if (found) setSelectedNode(found);
        setSimStep(idx + 1);
        if (idx === steps.length - 1) {
          setTimeout(() => setSimulating(false), 800);
        }
      }, s.delay);
    });
  };

  const getIcon = (id) => {
    switch (id) {
      case 'gateway': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'auth': return <Server className="w-5 h-5 text-blue-400" />;
      case 'bot': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'knowledge': return <Database className="w-5 h-5 text-pink-400" />;
      case 'hitl': return <Network className="w-5 h-5 text-amber-400" />;
      case 'realtime-audio': return <Radio className="w-5 h-5 text-cyan-400" />;
      default: return <Server className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="architecture" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Platform Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Enterprise Generative AI & System Architecture
          </h2>
          <p className="text-slate-400 text-base">
            Production-grade Generative AI ecosystem featuring RAG, Voice AI microservices, agentic HITL workflows, and Stripe payment automation.
          </p>
        </div>

        {/* Interactive Architecture Playground */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Node Selector Grid */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Select Microservice Node</span>
              <button
                onClick={handleSimulate}
                disabled={simulating}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                  simulating
                    ? 'bg-slate-800 text-slate-400 border border-slate-700 cursor-not-allowed'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20'
                }`}
              >
                <Play className={`w-3.5 h-3.5 ${simulating ? 'animate-spin' : ''}`} />
                <span>{simulating ? `Simulating Flow (Step ${simStep}/6)...` : 'Simulate Request Flow'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resumeData.architectureNodes.map((node) => {
                const isSelected = selectedNode.id === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-200 glass-panel border ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/10 scale-[1.02]'
                        : 'border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                        {getIcon(node.id)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-white text-sm truncate">{node.name}</h3>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>}
                        </div>
                        <p className="text-xs text-emerald-400 font-mono mt-0.5">{node.tech}</p>
                        <p className="text-xs text-slate-400 mt-2 line-clamp-2">{node.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Architecture Highlights Bar */}
            <div className="p-4 rounded-xl glass-panel border border-slate-800 mt-4 flex flex-wrap gap-4 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Enterprise RAG (LlamaParser + FAISS + Weaviate)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Docker & Containerized Microservices
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Voice AI Telephony (Plivo + Azure Speech + Twilio)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Stripe Subscription & Pay-as-you-go Billing
              </span>
            </div>

          </div>

          {/* Detailed Node Inspector Panel */}
          <div className="lg:col-span-5">
            <div className="glass-panel-glow rounded-2xl p-6 border border-emerald-500/30 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    {getIcon(selectedNode.id)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedNode.name}</h3>
                    <span className="text-xs font-mono text-emerald-400">{selectedNode.tech}</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono">
                  ACTIVE NODE
                </span>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">Microservice Responsibility</h4>
                <p className="text-slate-200 text-sm leading-relaxed">{selectedNode.desc}</p>
              </div>

              {/* Node Metrics & Features */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Key Architectural Specs</h4>
                
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Framework</span>
                    <span className="text-white font-semibold font-mono">Fastify / TypeScript</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Inter-Service Comm</span>
                    <span className="text-white font-semibold font-mono">Redis Pub/Sub & REST</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Latency SLA</span>
                    <span className="text-emerald-400 font-semibold font-mono">&lt; 50ms Overhead</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Containerization</span>
                    <span className="text-cyan-400 font-semibold font-mono">Docker Compose</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 font-mono">
                <span className="text-emerald-400">⚡ Production Impact:</span> Enables seamless handoffs, 90% caching efficiency, and multi-tenant credit billing.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
