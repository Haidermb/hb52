import React from 'react';
import { Target, Cpu, ArrowRight } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const AboutSection = () => {
  const { personal } = resumeData;

  return (
    <section id="about" className="py-20 relative bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Quote Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <Target className="w-3.5 h-3.5" />
              <span>Engineering Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
              Business Outcomes Over Hype & Demos
            </h2>

            <div className="p-6 rounded-2xl glass-panel-glow border border-emerald-500/30 space-y-4">
              <p className="text-lg font-semibold text-emerald-300 italic leading-relaxed">
                "AI systems don't create value because they're intelligent. They create value when they're reliable, scalable, and solve real business problems."
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-800 text-xs text-slate-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Haider Bharmal • Full Stack Generative AI Engineer</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-emerald-400 font-bold text-base mb-0.5">75% Cut</div>
                <div className="text-slate-400">Email Processing Time</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-cyan-400 font-bold text-base mb-0.5">90% Cut</div>
                <div className="text-slate-400">Manual Sales Workload</div>
              </div>
            </div>
          </div>

          {/* Right Column - Full LinkedIn About Narrative */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
              <Cpu className="w-5 h-5 text-emerald-400" />
              <span>About & Production Experience</span>
            </h3>

            {personal.aboutPhilosophy.map((para, idx) => (
              <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {para}
              </p>
            ))}

            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-400 font-mono">
                Channels: Web • WhatsApp • Instagram • Email • Telephony Voice AI
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-emerald-500/20"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
