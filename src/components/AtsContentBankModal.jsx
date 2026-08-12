import React, { useState } from 'react';
import { X, Copy, Check, FileText, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const AtsContentBankModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('coverLetter'); // 'coverLetter' | 'executiveSummaries' | 'matrix'
  const [copiedSection, setCopiedSection] = useState('');

  const copyToClipboard = (text, name) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(name);
    setTimeout(() => setCopiedSection(''), 2000);
  };

  const { personal, skillsMatrix } = resumeData;
  const { coverLetter, executiveSummaries } = personal;

  const fullCoverLetterText = `${coverLetter.opening}\n\n${coverLetter.accomplishments}\n\n${coverLetter.delivery}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel-glow w-full max-w-4xl rounded-2xl border border-emerald-500/40 flex flex-col h-[700px] max-h-[90vh] shadow-2xl relative">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-slate-950">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">Executive ATS Resume & Cover Letter Bank</h3>
              <p className="text-xs text-emerald-400 font-mono">Optimized for Recruiter Visibility & Maximum ATS Parser Scores</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection Bar */}
        <div className="px-5 py-3 border-b border-slate-800 bg-slate-950/50 flex items-center gap-3 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('coverLetter')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'coverLetter'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'glass-panel text-slate-300 hover:text-white'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span>ATS Cover Letter</span>
          </button>

          <button
            onClick={() => setActiveTab('executiveSummaries')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'executiveSummaries'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'glass-panel text-slate-300 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Executive Summaries</span>
          </button>

          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'matrix'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'glass-panel text-slate-300 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>ATS Technical Skills Matrix</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">

          {/* TAB 1: COVER LETTER */}
          {activeTab === 'coverLetter' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <h4 className="text-sm font-mono text-emerald-400 font-bold uppercase">Executive Cover Letter</h4>
                <button
                  onClick={() => copyToClipboard(fullCoverLetterText, 'coverLetter')}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 text-xs font-mono border border-slate-800 transition-all"
                >
                  {copiedSection === 'coverLetter' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied Cover Letter!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Full Cover Letter</span>
                    </>
                  )}
                </button>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4 font-sans text-sm text-slate-200 leading-relaxed">
                <p><strong className="text-white">Dear Hiring Manager & Engineering Leadership,</strong></p>
                <p>{coverLetter.opening}</p>
                <p>{coverLetter.accomplishments}</p>
                <p>{coverLetter.delivery}</p>
                <p className="pt-2 text-slate-400">Sincerely,<br /><strong className="text-white">Haider Bharmal</strong><br /><span className="text-xs font-mono text-emerald-400">haidermb52@gmail.com • +91 9324325347</span></p>
              </div>
            </div>
          )}

          {/* TAB 2: EXECUTIVE SUMMARIES */}
          {activeTab === 'executiveSummaries' && (
            <div className="space-y-6">
              
              {/* Option A */}
              <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-semibold">
                    {executiveSummaries.optionA.title}
                  </span>
                  <button
                    onClick={() => copyToClipboard(executiveSummaries.optionA.text, 'summaryA')}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-mono border border-slate-800"
                  >
                    {copiedSection === 'summaryA' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSection === 'summaryA' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <p className="text-slate-200 text-sm leading-relaxed">{executiveSummaries.optionA.text}</p>
              </div>

              {/* Option B */}
              <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-semibold">
                    {executiveSummaries.optionB.title}
                  </span>
                  <button
                    onClick={() => copyToClipboard(executiveSummaries.optionB.text, 'summaryB')}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-mono border border-slate-800"
                  >
                    {copiedSection === 'summaryB' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSection === 'summaryB' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <p className="text-slate-200 text-sm leading-relaxed">{executiveSummaries.optionB.text}</p>
              </div>

            </div>
          )}

          {/* TAB 3: ATS MATRIX TABLE */}
          {activeTab === 'matrix' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <h4 className="text-sm font-mono text-emerald-400 font-bold uppercase">ATS Technical Skills Matrix</h4>
              </div>

              <div className="glass-panel rounded-2xl overflow-hidden border border-slate-800">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-slate-400 font-mono text-xs uppercase border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-5 font-bold text-emerald-400 w-1/3">Domain</th>
                      <th className="py-3 px-5 font-bold text-white">Core Technologies & Frameworks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {skillsMatrix.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/50">
                        <td className="py-3 px-5 font-bold text-white font-mono">{row.domain}</td>
                        <td className="py-3 px-5">
                          <div className="flex flex-wrap gap-1.5">
                            {row.items.map((tech, tIdx) => (
                              <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-900 text-slate-200 text-xs font-mono border border-slate-800">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
