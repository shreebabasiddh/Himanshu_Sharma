import React from 'react';
import { certifications, education } from '../data/resumeData';
import { Award, GraduationCap, MapPin, CheckCircle2, Shield, BookOpen } from 'lucide-react';

export const CertificationsEducation: React.FC = () => {
  return (
    <section id="credentials" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Certifications Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 mb-2">
                Industry Accreditations
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
                <Award className="w-7 h-7 text-sky-600" />
                <span>Professional Certifications</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Formal credentialing in enterprise networking protocols and hardware engineering diagnostics.
              </p>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-sky-300 transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-sky-100 text-sky-800 mb-2">
                        {cert.badge} Certified
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-sm font-semibold text-slate-700 mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                      <Shield className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{cert.location}</span>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                      Core Disciplines Covered
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200/60"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>{s}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 mb-2">
                Academic Background
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
                <GraduationCap className="w-7 h-7 text-indigo-600" />
                <span>Education & Qualifications</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Rigorous higher education combining computer applications, specialized hardware engineering, and natural sciences.
              </p>
            </div>

            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-indigo-200 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                        {edu.degree}
                      </h3>
                      <div className="text-sm font-semibold text-indigo-700 mt-1">
                        {edu.institution}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                  </div>

                  {edu.description && (
                    <p className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
