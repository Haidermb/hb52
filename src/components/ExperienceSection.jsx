import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Sparkles, Building } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Work Experience
          </h2>
          <p className="text-slate-400 text-base">
            Architecting and delivering enterprise AI platforms and scalable microservices.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto">
          {resumeData.experience.map((exp, idx) => (
            <div key={idx} className="relative pl-6 md:pl-8 border-l-2 border-emerald-500/30 space-y-8">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50 border-4 border-slate-950"></div>

              {/* Main Experience Card */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
                
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                  <div>
                    <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold mb-1">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-300 font-normal">{exp.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-base leading-relaxed">
                  {exp.description}
                </p>

                {/* Architectural Highlights List */}
                <div className="space-y-4">
                  <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Key Engineering Milestones</h4>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {exp.highlights.map((item, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-all flex items-start gap-3.5"
                      >
                        <div className="p-1 rounded bg-emerald-500/10 text-emerald-400 mt-0.5 shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div className="space-y-1.5 flex-1">
                          <h5 className="font-semibold text-white text-sm">{item.title}</h5>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{item.text}</p>
                          {item.techStack && (
                            <div className="pt-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/5 px-2.5 py-1 rounded border border-emerald-500/20 inline-block">
                              <span className="text-slate-400 font-bold mr-1">Tech Stack:</span>
                              <span>{item.techStack}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">Core Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
