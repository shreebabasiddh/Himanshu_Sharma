import React, { useState } from 'react';
import { experiences } from '../data/resumeData';
import { Briefcase, MapPin, Calendar, CheckCircle, Building2, Tag, Award } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'application' | 'systems' | 'network'>('all');

  const filteredExperiences = activeFilter === 'all'
    ? experiences
    : experiences.filter(exp => exp.category === activeFilter);

  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 mb-2">
              Career Trajectory
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Professional Experience
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              6+ years delivering frontline and specialized support across leading service providers, software vendors, and hardware manufacturers.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Roles (4)' },
              { id: 'application', label: 'Application Support' },
              { id: 'systems', label: 'Hardware & Systems' },
              { id: 'network', label: 'Network Support' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200/60 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8">
          {filteredExperiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                exp.current 
                  ? 'border-sky-300 shadow-sm ring-1 ring-sky-100' 
                  : 'border-slate-200/90 shadow-xs hover:border-slate-300'
              }`}
            >
              {/* Card Header Bar */}
              <div className="p-6 sm:p-7 border-b border-slate-100 bg-slate-50/50 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-lg sm:text-xl font-bold text-slate-900">
                      {exp.role}
                    </span>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                        Current Role
                      </span>
                    )}
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-200/80 text-slate-700 capitalize font-mono">
                      {exp.category} support
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-sm text-slate-600">
                    <span className="font-semibold text-sky-700 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-slate-400" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 self-start lg:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-sky-600" />
                  <span className="font-semibold text-slate-700">{exp.period}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-6">
                
                {/* Key Accomplishment Callout */}
                {exp.keyAchievement && (
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-sky-50/70 border border-sky-100 text-sky-900 text-sm">
                    <Award className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Key Contribution: </span>
                      <span>{exp.keyAchievement}</span>
                    </div>
                  </div>
                )}

                {/* Detailed Responsibilities List */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Key Responsibilities & Deliverables
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                        <CheckCircle className="w-4 h-4 text-sky-500 shrink-0 mt-1" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies & Environments */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2 mb-2.5">
                    <Tag className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      Technologies & Workflows
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 hover:bg-slate-200/80 text-slate-700 transition-colors"
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
