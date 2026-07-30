import React from 'react';
import { Terminal, ChevronUp, Mail } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="glass-panel border-t border-slate-800/80 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-mono font-bold text-sm">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-sm text-white">{resumeData.personal.name}</div>
            <div className="text-xs text-slate-400 font-mono">Full Stack Generative AI Engineer</div>
          </div>
        </div>

        {/* Copyright & Stack */}
        <div className="text-xs text-slate-400 font-mono text-center">
          © {new Date().getFullYear()} Haider Bharmal. Engineered with React, Vite, Tailwind CSS & Fastify Monorepo standards.
        </div>

        {/* Scroll Top Button */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-slate-900 hover:bg-emerald-500 text-slate-300 hover:text-slate-950 border border-slate-800 hover:border-emerald-400 transition-all"
          title="Scroll to Top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>

      </div>
    </footer>
  );
};
