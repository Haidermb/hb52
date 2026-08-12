import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Layers, ExternalLink, Sparkles, X, CheckCircle2, ArrowRight, Search, Filter, Cpu, Zap, ChevronLeft, ChevronRight, Grid, SlidersHorizontal, Pause, Play } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyFeatured, setOnlyFeatured] = useState(false);
  const [viewMode, setViewMode] = useState('slider'); // 'slider' | 'grid'
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(resumeData.projects.map(p => p.category)))];
  }, []);

  const getCategoryCount = (cat) => {
    if (cat === 'All') return resumeData.projects.length;
    return resumeData.projects.filter(p => p.category === cat).length;
  };

  const filteredProjects = useMemo(() => {
    return resumeData.projects.filter(p => {
      if (onlyFeatured && !p.featured) return false;
      if (activeCategory !== 'All' && p.category !== activeCategory) return false;
      
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      
      return (
        p.title.toLowerCase().includes(query) ||
        p.summary.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.technologies.some(t => t.toLowerCase().includes(query)) ||
        (p.techStackLine && p.techStackLine.toLowerCase().includes(query))
      );
    });
  }, [activeCategory, searchQuery, onlyFeatured]);

  // Smooth Navigation Controls
  const scrollLeft = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      if (container.scrollLeft <= 10) {
        container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: -380, behavior: 'smooth' });
      }
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 20) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 380, behavior: 'smooth' });
      }
    }
  };

  // Smooth Auto-glide timer with hover pause
  useEffect(() => {
    if (viewMode !== 'slider' || isPaused || filteredProjects.length <= 1) return;

    const timer = setInterval(() => {
      scrollRight();
    }, 3200);

    return () => clearInterval(timer);
  }, [viewMode, isPaused, filteredProjects.length]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projects" className="py-20 relative bg-slate-950/60 overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production AI Applications & Systems
          </h2>
          <p className="text-slate-400 text-base">
            High-scale enterprise solutions engineered for maximum reliability, speed, and real-world business ROI.
          </p>
        </div>

        {/* Global Impact Summary Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 p-5 rounded-2xl glass-panel border border-emerald-500/20 bg-slate-900/60 shadow-xl">
          <div className="text-center border-r border-slate-800/80 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">7 Systems</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Production Deployments</div>
          </div>
          <div className="text-center border-r border-slate-800/80 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">75% Reduction</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Enterprise Email Latency</div>
          </div>
          <div className="text-center border-r border-slate-800/80 last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-mono">90% Automated</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Manual Sales Effort</div>
          </div>
          <div className="text-center last:border-r-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono">3x Speedup</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Microservices API Speed</div>
          </div>
        </div>

        {/* Filter Controls & Slider Header */}
        <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 mb-8 space-y-4 shadow-xl">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Live Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by project, tech, or feature..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Slider Navigation & Mode Controls */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              
              {/* Featured Toggle */}
              <button
                onClick={() => setOnlyFeatured(!onlyFeatured)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-semibold transition-all border ${
                  onlyFeatured
                    ? 'bg-amber-400/20 text-amber-300 border-amber-400/40 shadow'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Featured</span>
              </button>

              {/* View Mode Switcher */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800">
                <button
                  onClick={() => setViewMode('slider')}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    viewMode === 'slider' ? 'bg-emerald-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Smooth Carousel View"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Slider</span>
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    viewMode === 'grid' ? 'bg-emerald-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Grid View"
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span>Grid</span>
                </button>
              </div>

              {/* Auto-Play Hover Status Pill */}
              {viewMode === 'slider' && filteredProjects.length > 1 && (
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono">
                  {isPaused ? (
                    <>
                      <Pause className="w-3 h-3 text-amber-400" />
                      <span className="text-amber-300">PAUSED ON HOVER</span>
                    </>
                  ) : (
                    <>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <span className="text-emerald-400">SMOOTH GLIDE (3.2s)</span>
                    </>
                  )}
                </div>
              )}

              {/* Smooth Arrow Controls */}
              {viewMode === 'slider' && filteredProjects.length > 0 && (
                <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
                  <button
                    onClick={scrollLeft}
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all active:scale-95 shadow-md"
                    title="Scroll Left"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={scrollRight}
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all active:scale-95 shadow-md"
                    title="Scroll Right"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}

            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-slate-800/80">
            {categories.map((cat) => {
              const count = getCategoryCount(cat);
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold font-mono transition-all flex items-center gap-2 whitespace-nowrap ${
                    isActive
                      ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                      : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                      isActive ? 'bg-slate-950/30 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Empty Search Result Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 glass-panel rounded-2xl border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">No Projects Match Your Search</h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              Try searching for terms like "RAG", "Voice", "FastAPI", "Redis", or reset your search filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
                setOnlyFeatured(false);
              }}
              className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-xs"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* MODE 1: SILKY SMOOTH DRAG & GLIDE CAROUSEL SLIDER */}
        {viewMode === 'slider' && filteredProjects.length > 0 && (
          <div
            className="relative py-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Scrollable Container with Smooth Native Drag & Snap */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory py-4 px-1"
            >
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="w-[310px] sm:w-[350px] md:w-[380px] shrink-0 snap-start"
                >
                  <div className="glass-panel-glow rounded-2xl p-6 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group hover:shadow-2xl hover:shadow-emerald-500/10 h-full min-h-[420px]">
                    
                    <div className="space-y-4">
                      
                      {/* Category & Badges Header */}
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono font-semibold">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="flex items-center gap-1 text-[10px] font-mono text-amber-300 bg-amber-400/15 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                            <Sparkles className="w-3 h-3 text-amber-400" /> FEATURED
                          </span>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                        {project.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Key Impact Stats Badges */}
                      <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800/80 bg-slate-900/40 rounded-xl px-2">
                        {project.impactStats.map((stat, sIdx) => (
                          <div key={sIdx} className="text-center">
                            <div className="text-emerald-400 font-mono font-bold text-xs sm:text-sm">{stat.value}</div>
                            <div className="text-[10px] text-slate-400 uppercase tracking-tight font-medium">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Key Features Bullet Highlights */}
                      <div className="space-y-1.5">
                        {project.features.slice(0, 2).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Explicit ATS Tech Stack Tag */}
                      {project.techStackLine && (
                        <div className="pt-1">
                          <div className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20 line-clamp-1">
                            <strong className="text-slate-400 mr-1">Stack:</strong>
                            <span>{project.techStackLine}</span>
                          </div>
                        </div>
                      )}

                    </div>

                    {/* View Details Action Button */}
                    <div className="pt-5 mt-4 border-t border-slate-800/60">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-500 hover:text-slate-950 text-emerald-400 font-semibold text-xs transition-all border border-slate-800 hover:border-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950"
                      >
                        <span>Inspect System Spec</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MODE 2: GRID VIEW */}
        {viewMode === 'grid' && filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-panel-glow rounded-2xl p-6 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono font-semibold">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[10px] font-mono text-amber-300 bg-amber-400/15 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                        <Sparkles className="w-3 h-3 text-amber-400" /> FEATURED
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800/80 bg-slate-900/40 rounded-xl px-2">
                    {project.impactStats.map((stat, sIdx) => (
                      <div key={sIdx} className="text-center">
                        <div className="text-emerald-400 font-mono font-bold text-sm sm:text-base">{stat.value}</div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-tight font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1.5">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {project.techStackLine && (
                    <div className="pt-1">
                      <div className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20 line-clamp-1">
                        <strong className="text-slate-400 mr-1">Stack:</strong>
                        <span>{project.techStackLine}</span>
                      </div>
                    </div>
                  )}

                </div>

                <div className="pt-5 mt-4 border-t border-slate-800/60">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-500 hover:text-slate-950 text-emerald-400 font-semibold text-xs transition-all border border-slate-800 hover:border-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950"
                  >
                    <span>Inspect System Spec</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div 
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="glass-panel-glow w-full max-w-3xl rounded-2xl p-6 sm:p-8 border border-emerald-500/40 space-y-6 max-h-[90vh] overflow-y-auto relative shadow-2xl cursor-default"
          >
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-semibold">
                  {selectedProject.category}
                </span>
                {selectedProject.featured && (
                  <span className="flex items-center gap-1 text-xs font-mono text-amber-300 bg-amber-400/15 px-3 py-1 rounded-full border border-amber-400/30">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Featured Enterprise Project
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold text-white mt-3">{selectedProject.title}</h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">{selectedProject.summary}</p>
            </div>

            {/* Impact Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
              {selectedProject.impactStats.map((stat, sIdx) => (
                <div key={sIdx} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gradient-emerald font-mono">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Detailed Features */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-wider font-bold">Core Features & System Architecture</h4>
              <div className="space-y-2">
                {selectedProject.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Line */}
            {selectedProject.techStackLine && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
                <span className="text-white font-bold block mb-1">Tech Stack:</span>
                <span>{selectedProject.techStackLine}</span>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
