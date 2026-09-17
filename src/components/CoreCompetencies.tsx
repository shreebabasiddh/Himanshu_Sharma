import React from 'react';
import { coreCompetencies } from '../data/resumeData';
import { 
  Cloud, 
  HelpCircle, 
  AlertTriangle, 
  Video, 
  Cpu, 
  Network, 
  GraduationCap, 
  FileCheck 
} from 'lucide-react';

const icons = [
  Cloud,
  HelpCircle,
  AlertTriangle,
  Video,
  Cpu,
  Network,
  GraduationCap,
  FileCheck
];

export const CoreCompetencies: React.FC = () => {
  return (
    <section className="py-14 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 mb-2">
            Skill Foundations
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Core Competencies
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Verified proficiencies across enterprise application maintenance, client hardware diagnostics, and network uptime management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreCompetencies.map((comp, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div 
                key={comp.name}
                className="group p-5 rounded-xl bg-slate-50 hover:bg-sky-50/40 border border-slate-200/90 hover:border-sky-300 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-sky-600 mb-4 group-hover:scale-105 group-hover:bg-sky-600 group-hover:text-white transition-all shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-900 transition-colors">
                  {comp.name}
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  {comp.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
