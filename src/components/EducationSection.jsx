import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const EducationSection = () => {
  const { education, certificates } = resumeData;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Education & Certifications
          </h2>
          <p className="text-slate-400 text-base">
            Formal education in Artificial Intelligence & Data Science with Blockchain Honors, plus verified certifications.
          </p>
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-emerald-400">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{education.degree}</h3>
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm mt-1">
                    <Award className="w-4 h-4" />
                    <span>{education.honors}</span>
                  </div>
                  <p className="text-slate-300 text-sm mt-1">{education.institution}</p>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{education.period}</span>
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 text-emerald-300 font-mono font-bold text-sm">
                  {education.score}
                </span>
              </div>
            </div>

            {/* Courses */}
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">Relevant Coursework & Specializations</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {education.courses.map((course) => (
                  <div key={course} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Certificates Grid */}
          {certificates && certificates.length > 0 && (
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Certificates & Certifications</h3>
                  <p className="text-xs text-slate-400 font-mono">Verified technical credentials</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {certificates.map((cert, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/30 transition-all flex flex-col justify-between space-y-2">
                    <span className="w-fit px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-mono">CERTIFIED</span>
                    <div>
                      <h4 className="font-bold text-white text-sm">{cert.title}</h4>
                      <p className="text-xs text-slate-400 font-mono mt-1">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
