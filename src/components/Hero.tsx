import React, { useState } from 'react';
import { personalInfo } from '../data/resumeData';
import { Mail, Phone, MapPin, Copy, Check, MessageSquare, Download, CheckCircle2, ShieldCheck, Briefcase } from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2200);
  };

  const metrics = [
    { label: "IT & Support Experience", value: personalInfo.experienceYears, subtext: "Across enterprise & field ops" },
    { label: "Target Roles", value: "5 Domains", subtext: "IT Support, App Support, SysAdmin" },
    { label: "Tier-1 Track Record", value: "4 Orgs", subtext: "Bharuwa, Concentrix, TP, Tata BSS" },
    { label: "Credentials", value: "MCA + CCNA", subtext: "Post-Graduate & Cisco Certified" }
  ];

  return (
    <section id="overview" className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-b border-slate-200/80 overflow-hidden">
      {/* Background technical grid accent */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        style={{
          backgroundImage: 'radial-gradient(rgba(14, 165, 233, 0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Info Column */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Status & Category Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                {personalInfo.status}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-sky-50 text-sky-800 border border-sky-200">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                Cisco CCNA & MCA Qualified
              </span>
            </div>

            {/* Name and Professional Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-none">
                {personalInfo.name}
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-slate-700">
                IT Support Engineer <span className="text-slate-300 mx-1.5">|</span> Application Support <span className="text-slate-300 mx-1.5">|</span> System & Network Support
              </p>
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              {personalInfo.summary}
            </p>

            {/* Contact Details Bar with One-Click Copy */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Location */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-700 shadow-xs">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>

              {/* Phone with copy */}
              <div className="inline-flex items-center rounded-lg bg-white border border-slate-200 shadow-xs overflow-hidden">
                <a 
                  href={`tel:${personalInfo.rawPhone}`} 
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-sm text-slate-700 hover:text-sky-600 hover:bg-slate-50 transition-colors font-mono"
                  title="Call Himanshu"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>{personalInfo.phone}</span>
                </a>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="px-2.5 py-2 text-slate-400 hover:text-slate-700 border-l border-slate-100 hover:bg-slate-50 transition-colors"
                  title="Copy Phone Number"
                  aria-label="Copy phone"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Email with copy */}
              <div className="inline-flex items-center rounded-lg bg-white border border-slate-200 shadow-xs overflow-hidden">
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-sm text-slate-700 hover:text-sky-600 hover:bg-slate-50 transition-colors"
                  title="Send an email"
                >
                  <Mail className="w-4 h-4 text-sky-600" />
                  <span>{personalInfo.email}</span>
                </a>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="px-2.5 py-2 text-slate-400 hover:text-slate-700 border-l border-slate-100 hover:bg-slate-50 transition-colors"
                  title="Copy Email Address"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}?subject=Job%20Opportunity%20-%20IT%20%2F%20Application%20Support%20Role&body=Hi%20Himanshu,%0A%0AWe%20came%20across%20your%20profile%20and%20would%20like%20to%20discuss%20an%20open%20position.`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 shadow-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Hire / Contact Himanshu</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-sm hover:bg-slate-50 hover:border-slate-400 shadow-xs transition-all cursor-pointer"
                title="Download or Print Himanshu Sharma's CV"
              >
                <Download className="w-4 h-4 text-sky-600" />
                <span>Download / View CV</span>
              </button>
            </div>
          </div>

          {/* Quick Summary Card / Target Roles Box */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-sky-600" />
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-500 font-mono">
                    Target Positions
                  </span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-sky-50 text-sky-700 font-medium font-mono">
                  Full-time
                </span>
              </div>

              <div className="space-y-2.5">
                {personalInfo.roles.map((role) => (
                  <div 
                    key={role}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-50 hover:bg-sky-50/60 border border-slate-100 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span className="text-sm font-semibold text-slate-800">{role}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Key Strengths
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.strengths.map((s) => (
                    <span 
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Highlight Metrics Grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-xs hover:border-sky-200 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tracking-tight text-sky-700">
                {m.value}
              </div>
              <div className="text-sm font-semibold text-slate-800 mt-1">
                {m.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {m.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
