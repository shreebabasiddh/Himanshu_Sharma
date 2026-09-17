import React, { useState } from 'react';
import { supportCaseStudies } from '../data/resumeData';
import { Terminal, ShieldAlert, Wrench, CheckCircle2, ChevronRight, Activity } from 'lucide-react';

export const SupportCaseStudies: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(supportCaseStudies[0].id);

  const activeStudy = supportCaseStudies.find(s => s.id === selectedId) || supportCaseStudies[0];

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 mb-2 flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-sky-500" />
            <span>Problem-Solving Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Incident Diagnosis & Technical Scenarios
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Examining real technical triage, root-cause analysis (RCA), and remediation workflows executed across enterprise Salesforce, server hardware, and network gateways.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Scenario Selector Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 px-1">
              Select Incident Case Study
            </div>
            {supportCaseStudies.map((study, idx) => {
              const isSelected = study.id === selectedId;
              return (
                <button
                  key={study.id}
                  onClick={() => setSelectedId(study.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-sky-50/70 border-sky-300 shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200/90'
                  }`}
                >
                  <div>
                    <div className="text-[11px] font-mono font-semibold uppercase text-sky-700 mb-1">
                      Case 0{idx + 1} • {study.domain}
                    </div>
                    <div className="text-sm font-bold text-slate-900 line-clamp-2">
                      {study.title}
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 mt-1 transition-transform ${
                    isSelected ? 'text-sky-600 translate-x-1' : 'text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Active Case Study Details Panel */}
          <div className="lg:col-span-8">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden">
              
              {/* Terminal-like top bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                  <span className="ml-2 text-slate-300">incident_analysis.log</span>
                </div>
                <div className="text-sky-400 uppercase tracking-wider font-semibold">
                  {activeStudy.domain}
                </div>
              </div>

              {/* Title & Scenario */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                {activeStudy.title}
              </h3>
              
              <div className="mb-6 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-sm text-slate-300 leading-relaxed">
                <span className="font-semibold text-slate-100">Scenario: </span>
                {activeStudy.scenario}
              </div>

              {/* Challenge / Business Risk */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Business Risk & Operational Block</span>
                </div>
                <p className="text-sm text-slate-300">
                  {activeStudy.challenge}
                </p>
              </div>

              {/* Diagnostic Steps */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-400 mb-2.5">
                  <Terminal className="w-4 h-4" />
                  <span>Diagnostic & Triage Protocol</span>
                </div>
                <div className="space-y-2">
                  {activeStudy.diagnosticSteps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-mono text-slate-300 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                      <span className="text-sky-400 font-bold select-none">{'>'}</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resolution & Impact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-1.5">
                    <Wrench className="w-4 h-4" />
                    <span>Permanent Resolution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeStudy.resolution}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/50">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Measurable Impact</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed font-medium">
                    {activeStudy.impact}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
