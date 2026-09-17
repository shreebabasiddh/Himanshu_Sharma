import React, { useState } from 'react';
import { personalInfo } from '../data/resumeData';
import { Mail, Phone, MapPin, MessageSquare, Send, Check, Copy, Clock, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderCompany, setSenderCompany] = useState('');
  const [inquiryType, setInquiryType] = useState('Interview Invitation');
  const [messageBody, setMessageBody] = useState('');
  const [isCopiedDraft, setIsCopiedDraft] = useState(false);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleGenerateMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${inquiryType} - ${senderCompany || 'Opportunity'} for ${personalInfo.name}`);
    const body = encodeURIComponent(
      `Hello Himanshu,\n\nMy name is ${senderName || '[Name]'} from ${senderCompany || '[Company]'}.\n\n` +
      `${messageBody || 'We reviewed your resume and would like to discuss an opportunity regarding your background in IT and Application Support.'}\n\n` +
      `Best regards,\n${senderName || ''}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyDraft = () => {
    const fullDraft = `Subject: ${inquiryType} - ${senderCompany || 'Opportunity'} for ${personalInfo.name}\n\n` +
      `Hello Himanshu,\n\nMy name is ${senderName || '[Name]'} from ${senderCompany || '[Company]'}.\n\n` +
      `${messageBody || 'We reviewed your resume and would like to discuss an opportunity regarding your background in IT and Application Support.'}\n\n` +
      `Best regards,\n${senderName || ''}`;
    navigator.clipboard.writeText(fullDraft);
    setIsCopiedDraft(true);
    setTimeout(() => setIsCopiedDraft(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 mb-2">
            Direct Reachout
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connect with Himanshu
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Currently available for full-time opportunities in Haridwar, NCR (Noida, Gurugram, Delhi), or remote/relocation across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Quick Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-semibold uppercase text-slate-400">
                    Phone / Call
                  </div>
                  <a 
                    href={`tel:${personalInfo.rawPhone}`}
                    className="text-base font-bold text-slate-900 hover:text-sky-600 transition-colors font-mono"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-white border border-transparent hover:border-slate-200 transition-all"
                title="Copy phone"
              >
                {copiedKey === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="w-11 h-11 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-mono font-semibold uppercase text-slate-400">
                    Direct Email
                  </div>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-sky-600 transition-colors truncate block"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-white border border-transparent hover:border-slate-200 transition-all shrink-0"
                title="Copy email"
              >
                {copiedKey === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* WhatsApp Card */}
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 shadow-xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-semibold uppercase text-emerald-700">
                    Instant Chat
                  </div>
                  <div className="text-base font-bold text-emerald-950">
                    WhatsApp Message
                  </div>
                </div>
              </div>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1 transition-colors"
              >
                <span>Chat</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Location & Work Mode */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-slate-200/80 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-semibold uppercase text-slate-400">
                    Base Location & Mobility
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">
                    Haridwar, Uttarakhand, India
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Open to On-site, Hybrid, or Remote setups. Prior on-site tenure across Noida, Gurugram, and Jaipur.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Recruiter Quick Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Recruiter Quick-Connect
                  </h3>
                  <p className="text-xs text-slate-500">
                    Compose a structured message to Himanshu with one click.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-700 font-medium bg-emerald-100/70 px-2.5 py-1 rounded-full">
                  <Clock className="w-3 h-3" />
                  <span>Fast Response</span>
                </div>
              </div>

              <form onSubmit={handleGenerateMailto} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Priya / John"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tech Corp / Talent HR"
                      value={senderCompany}
                      onChange={(e) => setSenderCompany(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Subject / Discussion Topic
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="Interview Invitation">Interview Invitation (IT Support)</option>
                    <option value="Job Opportunity - Application Support">Job Opportunity - Application Support</option>
                    <option value="Job Opportunity - System / Network Engineer">Job Opportunity - System / Network Engineer</option>
                    <option value="Direct Technical Consultation">Technical Consultation / Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details about the role, location, or schedule..."
                    value={messageBody}
                    onChange={(e) => setMessageBody(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-sm font-semibold shadow-xs transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via Email Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyDraft}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-sm font-semibold transition-colors cursor-pointer"
                  >
                    {isCopiedDraft ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700">Draft Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-500" />
                        <span>Copy Email Draft</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
