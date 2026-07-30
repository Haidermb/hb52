import React, { useState } from 'react';
import { Layers, ExternalLink, Sparkles, X, CheckCircle2, ArrowRight } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Multimodal AI & RAG', 'Real-Time & WebSockets', 'Voice & Speech AI', 'Agentic Workflows', 'Intelligent Automation'];

  const filteredProjects = resumeData.projects.filter(p => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Key AI Projects & Systems
          </h2>
          <p className="text-slate-400 text-base">
            Production-grade systems built with Fastify, Next.js 15, PostgreSQL Knowledge Graphs, Voice AI, and HITL engines.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'glass-panel text-slate-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                      <Sparkles className="w-3 h-3" /> FEATURED
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm line-clamp-3 leading-relaxed">
                  {project.summary}
                </p>

                {/* Impact Metrics Badges */}
                <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-800/80">
                  {project.impactStats.map((stat, sIdx) => (
                    <div key={sIdx} className="text-center">
                      <div className="text-emerald-400 font-mono font-bold text-sm sm:text-base">{stat.value}</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[11px] font-mono border border-slate-800">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[11px] font-mono">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

              </div>

              {/* View Details Action */}
              <div className="pt-6 mt-4 border-t border-slate-800/60">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-500 hover:text-slate-950 text-emerald-400 font-semibold text-xs transition-all border border-slate-800 hover:border-emerald-400"
                >
                  <span>View Project Deep-Dive</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel-glow w-full max-w-3xl rounded-2xl p-6 sm:p-8 border border-emerald-500/40 space-y-6 max-h-[90vh] overflow-y-auto relative">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-bold text-white mt-3">{selectedProject.title}</h3>
              <p className="text-slate-300 text-sm mt-2">{selectedProject.summary}</p>
            </div>

            {/* Impact Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              {selectedProject.impactStats.map((stat, sIdx) => (
                <div key={sIdx} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gradient-emerald font-mono">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Detailed Features */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Core Features & Architecture</h4>
              <div className="space-y-2">
                {selectedProject.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-emerald-300 text-xs font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
