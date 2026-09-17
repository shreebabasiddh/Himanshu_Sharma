import React, { useRef, useState } from 'react';
import { personalInfo, coreCompetencies, experiences, education, certifications, technicalSkillGroups } from '../data/resumeData';
import { 
  X, 
  Printer, 
  Download, 
  FileDown, 
  FileText, 
  Check, 
  Loader2, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { 
  generatePdfFromElement, 
  downloadResumeHtml, 
  downloadResumeDoc, 
  safePrintResume 
} from '../utils/resumeGenerator';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const resumeContainerRef = useRef<HTMLDivElement>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [downloadSuccessMessage, setDownloadSuccessMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownloadPdf = async () => {
    if (!resumeContainerRef.current) return;
    setIsGeneratingPdf(true);
    setDownloadSuccessMessage(null);

    try {
      const success = await generatePdfFromElement(resumeContainerRef.current, (msg) => {
        // progress callback
      });
      if (success) {
        setDownloadSuccessMessage('Himanshu_Sharma_Resume.pdf downloaded successfully!');
      } else {
        setDownloadSuccessMessage('Resume downloaded as print-ready file!');
      }
    } catch (err) {
      console.error(err);
      downloadResumeHtml();
      setDownloadSuccessMessage('Downloaded printable resume file!');
    } finally {
      setIsGeneratingPdf(false);
      setTimeout(() => setDownloadSuccessMessage(null), 4000);
    }
  };

  const handlePrint = () => {
    safePrintResume();
  };

  const handleDownloadDoc = () => {
    downloadResumeDoc();
    setDownloadSuccessMessage('Himanshu_Sharma_Resume.doc downloaded!');
    setTimeout(() => setDownloadSuccessMessage(null), 3000);
  };

  const handleDownloadHtml = () => {
    downloadResumeHtml();
    setDownloadSuccessMessage('Himanshu_Sharma_Resume.html downloaded!');
    setTimeout(() => setDownloadSuccessMessage(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden my-4 border border-slate-200 flex flex-col max-h-[94vh]">
        
        {/* Top Control Action Bar (Sticky) */}
        <div className="no-print bg-slate-900 text-white px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">
              Executive Resume
            </span>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <span className="text-xs text-slate-300 font-medium hidden sm:inline">
              Download or Print Ready
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Direct PDF Download Button */}
            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-xs transition-all disabled:opacity-60 cursor-pointer"
              title="Download direct PDF file to your device"
            >
              {isGeneratingPdf ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Preparing PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </>
              )}
            </button>

            {/* Word .doc Download */}
            <button
              onClick={handleDownloadDoc}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
              title="Download as Microsoft Word document"
            >
              <FileDown className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Word (.doc)</span>
              <span className="sm:hidden">Word</span>
            </button>

            {/* Print / Save as PDF */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
              title="Open System Print Dialog (Ctrl+P / Save as PDF)"
            >
              <Printer className="w-3.5 h-3.5 text-slate-300" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
              <span className="sm:hidden">Print</span>
            </button>

            {/* Close Modal */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Download Success Banner */}
        {downloadSuccessMessage && (
          <div className="no-print bg-emerald-500 text-white px-4 py-2 text-xs font-medium flex items-center justify-between animate-in slide-in-from-top-2 duration-200">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>{downloadSuccessMessage}</span>
            </div>
            <button 
              onClick={() => setDownloadSuccessMessage(null)}
              className="text-emerald-100 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Quick Format Help Strip (Hidden in Print) */}
        <div className="no-print bg-sky-50/70 border-b border-sky-100 px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between text-xs text-sky-800 gap-2">
          <div className="flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            <span>
              <strong>Download Options:</strong> Click <strong>Download PDF</strong> for instant file download, or choose <strong>Word (.doc)</strong> or <strong>Print</strong>.
            </span>
          </div>
          <button
            onClick={handleDownloadHtml}
            className="text-sky-700 hover:text-sky-900 font-semibold underline text-[11px] cursor-pointer"
          >
            Download HTML version
          </button>
        </div>

        {/* Scrollable Printable Resume View */}
        <div 
          ref={resumeContainerRef} 
          className="overflow-y-auto p-6 sm:p-10 text-slate-900 font-sans space-y-6 print:p-0 print:space-y-4 bg-white"
        >
          {/* Header */}
          <div className="text-center pb-5 border-b-2 border-slate-900">
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-slate-900 font-display">
              {personalInfo.name}
            </h1>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 mt-1">
              IT SUPPORT ENGINEER | APPLICATION SUPPORT | SYSTEM & NETWORK SUPPORT
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-600 mt-2 font-medium">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <a href={`tel:${personalInfo.rawPhone}`} className="hover:underline">{personalInfo.phone}</a>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed text-justify">
              {personalInfo.summary}
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              CORE COMPETENCIES
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-semibold text-slate-800">
              {coreCompetencies.map(c => (
                <div key={c.name} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                  <span>{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3 font-mono">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-4">
              {experiences.map(exp => (
                <div key={exp.id} className="text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-slate-900">
                    <div>
                      <span>{exp.role}</span>
                      <span className="font-normal text-slate-600"> | {exp.company}</span>
                    </div>
                    <div className="text-xs font-mono text-slate-600">
                      {exp.period} • {exp.location}
                    </div>
                  </div>
                  <ul className="mt-1.5 space-y-1 list-disc list-inside text-slate-700">
                    {exp.description.map((d, i) => (
                      <li key={i} className="leading-snug">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              EDUCATION
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              {education.map(edu => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <span className="font-bold text-slate-900">{edu.degree}</span>
                    <span className="text-slate-700"> | {edu.institution}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">{edu.location}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-800">
              {technicalSkillGroups.map(g => (
                <div key={g.category}>
                  <span className="font-bold text-slate-900">{g.category}: </span>
                  <span>{g.skills.map(s => s.name).join(' • ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-800 space-y-1">
              {certifications.map(c => (
                <li key={c.id}>
                  <span className="font-semibold">{c.title}</span> – {c.issuer} ({c.location})
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Strengths */}
          <div className="pt-1">
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              PROFESSIONAL STRENGTHS
            </h2>
            <p className="text-xs sm:text-sm text-slate-800">
              {personalInfo.strengths.join(' • ')}
            </p>
          </div>
        </div>

        {/* Modal Bottom Footer (Hidden in Print) */}
        <div className="no-print bg-slate-50 px-4 sm:px-6 py-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Himanshu Sharma Official CV • Verified Data</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
