import React, { useState } from 'react';
import { Terminal, Sparkles, ArrowRight, Mail, Cpu, Server, Database, CheckCircle2, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { resumeData } from '../data/resumeData';

export const HeroSection = ({ onOpenAiModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background Neon Grid Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0 opacity-40">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-32 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status Pill */}
        <div className="flex justify-center md:justify-start mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-mono shadow-inner shadow-emerald-500/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>{resumeData.personal.status}</span>
          </div>
        </div>

        {/* Hero Title and Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Building Production <br />
              <span className="text-gradient-emerald">Generative AI</span> & <br />
              <span className="text-gradient-cyan">Microservices Architecture</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              {resumeData.personal.summary}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <a
                href="#architecture"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-all shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                <span>Explore Architecture</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                onClick={onOpenAiModal}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl glass-panel border border-emerald-500/40 text-emerald-300 hover:text-white hover:bg-emerald-500/20 transition-all font-semibold text-base"
              >
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span>Ask Haider's AI</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-slate-600 transition-all font-mono text-sm"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copied ? 'Email Copied!' : resumeData.personal.email}</span>
              </button>
            </div>

            {/* Social Links & Location */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-4 text-sm text-slate-400">
              <div className="flex items-center gap-2 font-mono">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>{resumeData.personal.location}</span>
              </div>
              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${resumeData.personal.email}`}
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Terminal Code Mockup */}
          <div className="lg:col-span-5">
            <div className="glass-panel-glow rounded-2xl p-5 border border-emerald-500/30 font-mono text-xs sm:text-sm text-slate-300 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="text-slate-400 text-xs">monorepo/turborepo-fastify-ai</div>
              </div>

              <div className="space-y-2 text-slate-300">
                <p className="text-slate-500">// Haider's Monorepo Stack Initialization</p>
                <p><span className="text-emerald-400">$</span> agy start --services=<span className="text-cyan-300">gateway,auth,bot,knowledge,hitl,audio</span></p>
                <p className="text-emerald-400/90">✔ [Gateway] Fastify API Gateway running on :8000</p>
                <p className="text-emerald-400/90">✔ [Knowledge] ChromaDB (3072-dim) + Postgres CTE Graph ready</p>
                <p className="text-emerald-400/90">✔ [HITL] WebSocket & Redis Pub/Sub bridge active</p>
                <p className="text-emerald-400/90">✔ [Bot] OpenRouter integrated (300+ LLMs dynamic switching)</p>
                <p className="text-emerald-400/90">✔ [Audio] ElevenLabs & Azure Speech real-time voice ready</p>
                
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Status: <span className="text-emerald-400 font-bold">PRODUCTION HIGH-THROUGHPUT</span></span>
                  <span className="text-cyan-400 font-mono">LATENCY: -66%</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16 pt-8 border-t border-slate-800/80">
          {resumeData.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 rounded-xl text-center border border-slate-800 hover:border-emerald-500/40 transition-all hover:bg-slate-900/60"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-gradient-emerald font-mono mb-1">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-white uppercase tracking-wider">{metric.label}</div>
              <div className="text-[11px] text-slate-400 mt-1">{metric.detail}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
