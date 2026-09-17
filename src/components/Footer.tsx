import React from 'react';
import { personalInfo } from '../data/resumeData';
import { ArrowUp, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-600 text-white font-mono font-bold flex items-center justify-center text-sm">
                HS
              </div>
              <span className="text-lg font-bold text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-md">
              IT Support Engineer • Application Support Specialist • System & Network Support
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a href="#overview" className="hover:text-white transition-colors">Overview</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#credentials" className="hover:text-white transition-colors">Certifications & Education</a>
            <a href="#case-studies" className="hover:text-white transition-colors">Case Highlights</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-sky-500" />
            <span>Himanshu Sharma • Official Portfolio & Resume Hub</span>
          </div>
          <div>
            Haridwar, India • {personalInfo.phone} • {personalInfo.email}
          </div>
        </div>
      </div>
    </footer>
  );
};
