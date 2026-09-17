/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoreCompetencies } from './components/CoreCompetencies';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsEducation } from './components/CertificationsEducation';
import { SupportCaseStudies } from './components/SupportCaseStudies';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-sky-500 selection:text-white flex flex-col">
      {/* Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <CoreCompetencies />
        <ExperienceSection />
        <SkillsSection />
        <CertificationsEducation />
        <SupportCaseStudies />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Printable Official Resume Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </div>
  );
}
