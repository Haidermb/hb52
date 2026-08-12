import React, { useState, useEffect } from 'react';
import { Terminal, Sparkles, ArrowRight, Mail, Cpu, Server, Database, CheckCircle2, Copy, Check, RotateCcw } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { resumeData } from '../data/resumeData';

const SmoothBigQuoteCard = () => {
  const fullText = "AI systems don't create value because they're intelligent. They create value when they're reliable, scalable, and solve real business problems.";
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [copied, setCopied] = useState(false);
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    let current = 0;
    setCharIndex(0);
    setIsTyping(true);

    let timeoutId;

    const typeNext = () => {
      if (current < fullText.length) {
        current++;
        setCharIndex(current);

        const char = fullText[current - 1];
        let delay = 35;

        if (char === '.') delay = 420;
        else if (char === ',') delay = 300;
        else if (char === ' ') delay = 50;

        timeoutId = setTimeout(typeNext, delay);
      } else {
        setIsTyping(false);
      }
    };

    timeoutId = setTimeout(typeNext, 300);

    return () => clearTimeout(timeoutId);
  }, [replayKey]);

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReplay = () => {
    setReplayKey((prev) => prev + 1);
  };

  const renderStyledText = () => {
    const parts = [
      { text: "AI systems don't create value because they're intelligent. They create value when they're ", style: "text-slate-100" },
      { text: "reliable", style: "text-emerald-400 font-extrabold underline decoration-emerald-500/60 underline-offset-8 transition-colors duration-300" },
      { text: ", ", style: "text-slate-100" },
      { text: "scalable", style: "text-cyan-400 font-extrabold underline decoration-cyan-500/60 underline-offset-8 transition-colors duration-300" },
      { text: ", and ", style: "text-slate-100" },
      { text: "solve real business problems.", style: "text-amber-300 font-extrabold underline decoration-amber-500/60 underline-offset-8 transition-colors duration-300" }
    ];

    let remaining = charIndex;
    return (
      <span>
        {parts.map((part, pIdx) => {
          if (remaining <= 0) return null;
          const chunk = part.text.slice(0, remaining);
          remaining -= part.text.length;
          return (
            <span key={pIdx} className={part.style}>
              {chunk}
            </span>
          );
        })}
      </span>
    );
  };

  return (
    <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-emerald-500/35 relative overflow-hidden shadow-2xl transition-all duration-500 hover:border-emerald-500/60 bg-slate-900/85 space-y-6 group">
      
      {/* Top Window Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
        </div>

        {/* Action Controls: Replay & Copy */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleReplay}
            className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 transition-all duration-200 border border-slate-800 active:scale-95"
            title="Replay Smooth Typing"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={handleCopyQuote}
            className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 transition-all duration-200 border border-slate-800 active:scale-95"
            title="Copy Quote"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
          </button>
        </div>

      </div>

      {/* Quote Body with Big, Bold Typography & Smooth Typing */}
      <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-relaxed sm:leading-snug tracking-tight min-h-[12rem] flex items-center">
        <div>
          <span className="text-emerald-500 font-extrabold text-2xl sm:text-3xl lg:text-4xl mr-1.5 font-mono">“</span>
          {renderStyledText()}
          <span className={`inline-block w-3 h-7 sm:h-8 ml-1.5 bg-emerald-400 align-middle transition-opacity duration-200 ${isTyping ? 'animate-ping' : 'animate-pulse'}`}></span>
          <span className="text-emerald-500 font-extrabold text-2xl sm:text-3xl lg:text-4xl ml-1.5 font-mono">”</span>
        </div>
      </div>

    </div>
  );
};

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
        
        {/* Hero Title and Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Copy (Left Column) */}
          <div className="lg:col-span-6 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Production <span className="text-gradient-emerald">RAG, Agentic AI</span> & <br />
              <span className="text-gradient-cyan">Voice AI Systems</span>
            </h1>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-all shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
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

          {/* Right Column: Prominent Smooth Typewriter Quote Card with Both Badges */}
          <div className="lg:col-span-6">
            <SmoothBigQuoteCard />
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
