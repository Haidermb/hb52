import React, { useState } from 'react';
import { Cpu, Database, Server, Cloud, Workflow, Search, CheckCircle2, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...resumeData.skills.map(s => s.category)];

  const getIcon = (category) => {
    switch (category) {
      case 'Generative AI & LLM Engineering': return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'RAG & Knowledge Processing': return <Database className="w-5 h-5 text-pink-400" />;
      case 'Backend & Microservices': return <Server className="w-5 h-5 text-cyan-400" />;
      case 'Cloud, DevOps & Security': return <Cloud className="w-5 h-5 text-blue-400" />;
      case 'Integrations & Third-Party APIs': return <Workflow className="w-5 h-5 text-purple-400" />;
      default: return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  const filteredSkills = resumeData.skills.filter(cat => {
    if (activeCategory !== 'All' && cat.category !== activeCategory) return false;
    return true;
  }).map(cat => ({
    ...cat,
    items: cat.items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Generative AI & Engineering Skills
          </h2>
          <p className="text-slate-400 text-base">
            Comprehensive skill set spanning LLM orchestrations, RAG pipelines, microservices, vector stores, and cloud infrastructure.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl glass-panel border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          {filteredSkills.map((catGroup, idx) => (
            <div key={idx} className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-6">
              
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  {getIcon(catGroup.category)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{catGroup.category}</h3>
                  <span className="text-xs font-mono text-slate-400">{catGroup.items.length} Production Technologies</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {catGroup.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 transition-all hover:bg-slate-900 group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-semibold text-slate-200 text-sm group-hover:text-emerald-400 transition-colors">{skill.name}</h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-mono">{skill.tag}</p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
