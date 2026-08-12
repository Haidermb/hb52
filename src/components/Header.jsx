import React, { useState } from 'react';
import { Bot, Terminal, Menu, X, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { resumeData } from '../data/resumeData';

export const Header = ({ onOpenAiModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-emerald-900/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center text-slate-950 font-mono font-bold shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <div className="font-bold text-lg text-white tracking-wide group-hover:text-emerald-400 transition-colors flex items-center gap-2">
              HAIDER BHARMAL
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block"></span>
            </div>
            <div className="text-xs text-emerald-400/80 font-mono">Full Stack AI Engineer</div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors py-1 hover:border-b-2 hover:border-emerald-500"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onOpenAiModal}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 text-emerald-300 hover:text-white hover:bg-emerald-500/30 hover:border-emerald-400 transition-all shadow-md shadow-emerald-500/10 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>Ask Haider's AI</span>
          </button>

          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenAiModal}
            className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
            title="Ask Haider's AI"
          >
            <Bot className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-emerald-400 font-medium py-2 px-3 rounded-lg hover:bg-slate-800/50"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 text-emerald-300 text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Ask Haider's AI Assistant</span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-sm"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
