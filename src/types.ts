export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  category: 'application' | 'systems' | 'network';
  description: string[];
  technologies: string[];
  keyAchievement?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  description?: string;
  iconName?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  location: string;
  code?: string;
  badge: string;
  skills: string[];
}

export interface TechnicalSkillGroup {
  category: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    featured?: boolean;
  }[];
}

export interface SupportCaseStudy {
  id: string;
  title: string;
  domain: string;
  scenario: string;
  challenge: string;
  diagnosticSteps: string[];
  resolution: string;
  impact: string;
}

declare module 'html2pdf.js';
