import html2pdf from 'html2pdf.js';
import { personalInfo, coreCompetencies, experiences, education, certifications, technicalSkillGroups } from '../data/resumeData';

export const generateResumeHtmlString = (autoPrint = false): string => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Himanshu Sharma - Resume</title>
  <style>
    @page {
      size: A4;
      margin: 15mm 15mm 15mm 15mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #1e293b;
      background: #ffffff;
      line-height: 1.45;
      font-size: 11pt;
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    .header {
      text-align: center;
      border-bottom: 2px solid #0f172a;
      padding-bottom: 12px;
      margin-bottom: 16px;
    }
    .name {
      font-size: 20pt;
      font-weight: 800;
      letter-spacing: 0.05em;
      color: #0f172a;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .title {
      font-size: 10pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #334155;
      margin-bottom: 6px;
    }
    .contact-line {
      font-size: 9.5pt;
      color: #475569;
    }
    .contact-line a {
      color: #0284c7;
      text-decoration: none;
    }
    .section {
      margin-bottom: 14px;
    }
    .section-title {
      font-size: 10.5pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #0f172a;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 3px;
      margin-bottom: 8px;
    }
    .summary-text {
      font-size: 9.5pt;
      color: #334155;
      text-align: justify;
      line-height: 1.45;
    }
    .competencies-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 4px 16px;
      font-size: 9.5pt;
      font-weight: 600;
      color: #1e293b;
    }
    .competencies-grid div::before {
      content: "• ";
      color: #0284c7;
      font-weight: bold;
    }
    .exp-item {
      margin-bottom: 12px;
    }
    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-weight: 700;
      font-size: 10pt;
      color: #0f172a;
      margin-bottom: 4px;
    }
    .exp-company {
      font-weight: 600;
      color: #475569;
    }
    .exp-meta {
      font-size: 9pt;
      color: #64748b;
      font-weight: normal;
    }
    .exp-list {
      list-style-type: disc;
      padding-left: 18px;
      font-size: 9pt;
      color: #334155;
      line-height: 1.4;
    }
    .exp-list li {
      margin-bottom: 3px;
    }
    .edu-item {
      margin-bottom: 6px;
      display: flex;
      justify-content: space-between;
      font-size: 9.5pt;
    }
    .edu-deg {
      font-weight: 700;
      color: #0f172a;
    }
    .skills-line {
      font-size: 9pt;
      margin-bottom: 4px;
      color: #334155;
    }
    .skills-cat {
      font-weight: 700;
      color: #0f172a;
    }
    .print-controls {
      background: #f1f5f9;
      padding: 12px 16px;
      border-radius: 8px;
      margin-bottom: 20px;
      text-align: center;
    }
    .print-btn {
      background: #0284c7;
      color: white;
      border: none;
      padding: 8px 16px;
      font-size: 10pt;
      font-weight: 600;
      border-radius: 6px;
      cursor: pointer;
    }
    @media print {
      .print-controls {
        display: none !important;
      }
      body {
        padding: 0 !important;
      }
    }
  </style>
</head>
<body>
  <div class="print-controls">
    <button class="print-btn" onclick="window.print()">🖨️ Click Here to Print / Save as PDF</button>
  </div>

  <div class="header">
    <h1 class="name">${personalInfo.name}</h1>
    <div class="title">${personalInfo.title}</div>
    <div class="contact-line">
      ${personalInfo.location} • 
      <a href="tel:${personalInfo.rawPhone}">${personalInfo.phone}</a> • 
      <a href="mailto:${personalInfo.email}">${personalInfo.email}</a>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Professional Summary</div>
    <p class="summary-text">${personalInfo.summary}</p>
  </div>

  <div class="section">
    <div class="section-title">Core Competencies</div>
    <div class="competencies-grid">
      ${coreCompetencies.map(c => `<div>${c.name}</div>`).join('')}
    </div>
  </div>

  <div class="section">
    <div class="section-title">Professional Experience</div>
    ${experiences.map(exp => `
      <div class="exp-item">
        <div class="exp-header">
          <div>
            <span>${exp.role}</span>
            <span class="exp-company"> | ${exp.company}</span>
          </div>
          <div class="exp-meta">${exp.period} • ${exp.location}</div>
        </div>
        <ul class="exp-list">
          ${exp.description.map(d => `<li>${d}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <div class="section-title">Education</div>
    ${education.map(edu => `
      <div class="edu-item">
        <div>
          <span class="edu-deg">${edu.degree}</span> | <span>${edu.institution}</span>
        </div>
        <span class="exp-meta">${edu.location}</span>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <div class="section-title">Technical Skills</div>
    ${technicalSkillGroups.map(g => `
      <div class="skills-line">
        <span class="skills-cat">${g.category}:</span> ${g.skills.map(s => s.name).join(' • ')}
      </div>
    `).join('')}
  </div>

  <div class="section">
    <div class="section-title">Certifications</div>
    <ul class="exp-list">
      ${certifications.map(c => `
        <li><strong>${c.title}</strong> – ${c.issuer} (${c.location})</li>
      `).join('')}
    </ul>
  </div>

  <div class="section">
    <div class="section-title">Professional Strengths</div>
    <p class="summary-text">${personalInfo.strengths.join(' • ')}</p>
  </div>

  ${autoPrint ? `<script>window.onload = function() { window.print(); }</script>` : ''}
</body>
</html>`;
};

/**
 * Downloads the resume as a formatted HTML file that can be opened anywhere and printed with Ctrl+P.
 */
export const downloadResumeHtml = () => {
  const htmlContent = generateResumeHtmlString(true);
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Himanshu_Sharma_Resume.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Downloads resume as a Word-compatible .doc file.
 */
export const downloadResumeDoc = () => {
  const htmlContent = generateResumeHtmlString(false);
  const blob = new Blob(['\ufeff' + htmlContent], {
    type: 'application/msword'
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Himanshu_Sharma_Resume.doc';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Generates and downloads a direct PDF file using html2pdf.js.
 */
export const generatePdfFromElement = async (
  element: HTMLElement,
  onProgress?: (status: string) => void
): Promise<boolean> => {
  try {
    onProgress?.('Generating PDF document...');
    
    // Create a cloned clean container styled specifically for PDF rendering
    const clone = element.cloneNode(true) as HTMLElement;
    
    // Remove no-print elements from clone
    clone.querySelectorAll('.no-print').forEach(el => el.remove());
    
    const wrapper = document.createElement('div');
    wrapper.style.position = 'fixed';
    wrapper.style.left = '-9999px';
    wrapper.style.top = '0';
    wrapper.style.width = '794px'; // Standard A4 width in 96 DPI
    wrapper.style.backgroundColor = '#ffffff';
    wrapper.style.color = '#0f172a';
    wrapper.style.padding = '20px 28px';
    wrapper.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    wrapper.appendChild(clone);
    document.body.appendChild(wrapper);

    const opt = {
      margin: 10,
      filename: 'Himanshu_Sharma_Resume.pdf',
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
    };

    await html2pdf().set(opt).from(wrapper).save();
    document.body.removeChild(wrapper);
    onProgress?.('Downloaded!');
    return true;
  } catch (err) {
    console.error('PDF generation error, switching to HTML download fallback:', err);
    // Fallback: download HTML which guarantees user gets the file
    downloadResumeHtml();
    return false;
  }
};

/**
 * Safely prints or opens printable view without getting blocked by iframe sandbox restrictions.
 */
export const safePrintResume = () => {
  try {
    // Check if in iframe
    const inIframe = window.self !== window.top;
    if (inIframe) {
      // In sandboxed iframe, window.print() is often blocked with 'allow-modals' not set.
      // Instead, we open a clean blob window or trigger html download
      const htmlContent = generateResumeHtmlString(true);
      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      const blobUrl = URL.createObjectURL(blob);
      
      const newWin = window.open(blobUrl, '_blank');
      if (!newWin || newWin.closed || typeof newWin.closed === 'undefined') {
        // If popup was blocked by browser, trigger direct download
        downloadResumeHtml();
      }
    } else {
      window.print();
    }
  } catch (e) {
    console.warn('Print blocked by environment, initiating direct file download fallback:', e);
    downloadResumeHtml();
  }
};
