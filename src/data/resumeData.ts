import { ExperienceItem, EducationItem, CertificationItem, TechnicalSkillGroup, SupportCaseStudy } from '../types';

export const personalInfo = {
  name: "Himanshu Sharma",
  title: "IT Support Engineer | Application Support Specialist",
  tagline: "Bridging Enterprise Applications, Network Infrastructure & End-User Excellence",
  roles: [
    "IT Support Engineer",
    "Application Support Engineer",
    "System Administrator",
    "Technical Support Engineer",
    "Network Support Engineer"
  ],
  experienceYears: "6+ Years",
  location: "Haridwar, Uttarakhand, India",
  phone: "+91 8171589855",
  rawPhone: "+918171589855",
  email: "himanshusharma16feb@gmail.com",
  whatsappUrl: "https://wa.me/918171589855?text=Hi%20Himanshu,%20I%20reviewed%20your%20profile%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity.",
  status: "Actively Open to Opportunities",
  summary: "IT professional with 6+ years of specialized experience across Technical Support, Salesforce Application Support, hardware troubleshooting, network support, and end-user operations. Experienced in resolving business-critical user issues, supporting field-sales applications, troubleshooting location, attendance and stock workflows, and delivering high-touch remote/on-site assistance and user onboarding. MCA qualified with Cisco CCNA credentials and a solid foundation in IT support, networking, and enterprise systems.",
  strengths: [
    "Problem Solving",
    "Analytical Thinking",
    "User Communication",
    "Team Collaboration",
    "Adaptability",
    "Customer-Centric Support"
  ]
};

export const coreCompetencies = [
  { name: "Salesforce Application Support", desc: "User access, CRM workflows, field-sales beat tracking, distributor data management" },
  { name: "IT Helpdesk & End-User Support", desc: "Tier-1 & Tier-2 incident triage, SLA adherence, hardware & peripheral assistance" },
  { name: "Incident Troubleshooting", desc: "Root-cause diagnostics, escalation workflows, rapid service downtime minimization" },
  { name: "Remote Support & Collaboration", desc: "Google Meet, remote desktop assistance, screen sharing, distributed team onboarding" },
  { name: "Hardware & Windows Support", desc: "Dell/HP desktop, laptop, and server diagnostics, repair dispatch, OS deployment" },
  { name: "LAN / WAN & Network Support", desc: "IP addressing, routers, switches, firewalls, Wi-Fi configuration, VPN tunnels" },
  { name: "User Training & Onboarding", desc: "Conducting live training sessions, process handbooks, best practices workshops" },
  { name: "Issue Documentation & KB", desc: "Standard operating procedures (SOPs), knowledge-base authoring, ticket logging" }
];

export const experiences: ExperienceItem[] = [
  {
    id: "bharuwa",
    role: "Support Engineer",
    company: "Bharuwa Solutions Private Limited",
    location: "Haridwar, India",
    period: "Jun 2023 – Present",
    startDate: "Jun 2023",
    endDate: "Present",
    current: true,
    category: "application",
    keyAchievement: "Streamlined daily field-sales reporting for 100+ reps by eliminating recurring beat-route GPS tracking and stock sync bottlenecks.",
    description: [
      "Provide application and technical support to the sales team using Salesforce and connected business workflows.",
      "Troubleshoot beat-route mapping, location and tracking issues to support accurate field-sales reporting.",
      "Resolve stock, attendance and user-access discrepancies and coordinate issues through to closure.",
      "Create and maintain new shop and distributor records in Salesforce based on business requirements.",
      "Train new and existing users on application updates, features, workflows and best practices.",
      "Provide remote support through Google Meet and other collaboration tools, reducing disruption to field operations.",
      "Analyze recurring user issues and feedback, coordinate with internal teams, and recommend application/process improvements."
    ],
    technologies: ["Salesforce CRM", "Field-Sales App", "Beat-Route Mapping", "User Access Control", "Data Maintenance", "Google Meet", "Issue Tracking", "SOP Development"]
  },
  {
    id: "concentrix",
    role: "Technical Support Associate",
    company: "Concentrix",
    location: "Gurugram, India",
    period: "Mar 2022 – Feb 2023",
    startDate: "Mar 2022",
    endDate: "Feb 2023",
    current: false,
    category: "systems",
    keyAchievement: "Consistently maintained 95%+ first-contact diagnostic accuracy for Dell desktop, laptop, and server enterprise customer inquiries.",
    description: [
      "Provided remote technical support and troubleshooting for Dell desktops, laptops and servers.",
      "Diagnosed hardware issues, guided users through resolution steps, and minimized service downtime.",
      "Coordinated escalations with engineering and development teams for complex technical problems.",
      "Managed hardware repair/replacement workflows and maintained accurate case documentation.",
      "Contributed to internal knowledge-base articles and training materials to improve team efficiency."
    ],
    technologies: ["Dell Hardware", "Dell PowerEdge Servers", "BIOS / UEFI", "Hardware Diagnostics", "Part Replacement Logistics", "Case Lifecycle Management", "Knowledge Base Authoring"]
  },
  {
    id: "teleperformance",
    role: "Technical Support Executive (TSE)",
    company: "Teleperformance India",
    location: "Jaipur, India",
    period: "Aug 2015 – Jul 2017",
    startDate: "Aug 2015",
    endDate: "Jul 2017",
    current: false,
    category: "systems",
    keyAchievement: "Selected as mentor to onboard 15+ new technical support associates; recognized for top customer satisfaction (CSAT) scores.",
    description: [
      "Delivered technical support for Microsoft operating systems, applications, hardware and peripherals through phone, email and remote assistance.",
      "Diagnosed complex technical issues and guided customers through installation, upgrades, configuration and troubleshooting.",
      "Worked with Microsoft internal support teams on escalated cases and documented troubleshooting and resolutions.",
      "Created support documentation and knowledge-base content to improve resolution efficiency and self-service.",
      "Provided mentoring and technical guidance to new team members."
    ],
    technologies: ["Windows OS", "Microsoft Applications", "Peripheral Diagnostics", "Remote Assistance", "Incident Escalation", "Customer Mentoring", "CSAT Optimization"]
  },
  {
    id: "tata-bss",
    role: "Technical Support Executive",
    company: "Tata Business Support Service Limited",
    location: "Noida, India",
    period: "Jun 2014 – Dec 2014",
    startDate: "Jun 2014",
    endDate: "Dec 2014",
    current: false,
    category: "network",
    keyAchievement: "Handled Level-1 enterprise network alerts, resolving VPN and gateway connectivity blocks within stringent SLAs.",
    description: [
      "Provided first-level technical support for network connectivity, access and user issues.",
      "Performed basic monitoring and troubleshooting of routers, switches and firewalls and escalated complex issues.",
      "Supported VPN and Wi-Fi connectivity issues and guided users through basic network configurations.",
      "Documented incidents, troubleshooting steps and resolutions while collaborating with senior engineers."
    ],
    technologies: ["Routers & Switches", "Firewalls", "VPN Connectivity", "Wi-Fi Configuration", "IP Addressing", "L1 Network Triage", "Incident Ticketing"]
  }
];

export const technicalSkillGroups: TechnicalSkillGroup[] = [
  {
    category: "Application Support",
    icon: "Layers",
    description: "Enterprise application administration, field software lifecycle, user permissions and workflow management.",
    skills: [
      { name: "Salesforce CRM", level: "Expert", featured: true },
      { name: "Application Troubleshooting", level: "Expert", featured: true },
      { name: "Beat-Route Mapping & GPS", level: "Expert", featured: true },
      { name: "User Access & Permissions", level: "Expert", featured: true },
      { name: "Workflow & Automation Assistance", level: "Advanced", featured: true },
      { name: "Distributor & Account Records", level: "Advanced" },
      { name: "Stock & Attendance Sync", level: "Advanced" },
      { name: "Field-Sales App Integration", level: "Advanced" }
    ]
  },
  {
    category: "Networking & Infrastructure",
    icon: "Network",
    description: "Configuring, diagnosing, and securing enterprise connectivity across local and wide-area networks.",
    skills: [
      { name: "LAN / WAN Architecture", level: "Advanced", featured: true },
      { name: "IP Addressing & Subnetting", level: "Advanced", featured: true },
      { name: "Routers & Switches Configuration", level: "Advanced", featured: true },
      { name: "VPN Tunnels & Client Setup", level: "Advanced", featured: true },
      { name: "Firewalls & Access Rules", level: "Proficient" },
      { name: "Wi-Fi AP & Wireless Security", level: "Advanced" },
      { name: "Network Protocols (TCP/IP, DNS, DHCP)", level: "Advanced", featured: true },
      { name: "Connectivity Diagnostics (Ping, Tracert)", level: "Expert" }
    ]
  },
  {
    category: "Hardware & Operating Systems",
    icon: "Server",
    description: "End-to-end hardware lifecycle, server diagnostics, component testing, and Windows ecosystem maintenance.",
    skills: [
      { name: "PC & Laptop Hardware Repair", level: "Expert", featured: true },
      { name: "Dell PowerEdge / Servers", level: "Advanced", featured: true },
      { name: "Peripherals & External Devices", level: "Expert" },
      { name: "Hardware Diagnostics & Benchmarking", level: "Expert", featured: true },
      { name: "Windows OS (10, 11, Server)", level: "Expert", featured: true },
      { name: "OS Installation & Image Deployment", level: "Advanced" },
      { name: "BIOS / UEFI & Firmware Updates", level: "Advanced" },
      { name: "Hardware Parts Dispatch Workflow", level: "Advanced" }
    ]
  },
  {
    category: "Support Tools & Operations",
    icon: "LifeBuoy",
    description: "Industry-standard support tools, collaboration platforms, documentation standards, and ticketing systems.",
    skills: [
      { name: "Remote Troubleshooting Tools", level: "Expert", featured: true },
      { name: "Google Meet & Screen Collaboration", level: "Expert", featured: true },
      { name: "Ticket / Case Documentation", level: "Expert", featured: true },
      { name: "Knowledge-Base (KB) Authoring", level: "Advanced", featured: true },
      { name: "Incident SLA Management", level: "Advanced" },
      { name: "Root Cause Analysis (RCA)", level: "Advanced" },
      { name: "User Training & Video Guides", level: "Advanced" },
      { name: "Escalation Matrix Navigation", level: "Expert" }
    ]
  }
];

export const certifications: CertificationItem[] = [
  {
    id: "ccna",
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "IIHT, Vikaspuri, New Delhi",
    location: "New Delhi, India",
    badge: "CCNA",
    skills: ["Network Fundamentals", "Routing Protocols", "Switching & VLANs", "IP Services", "Security Fundamentals"]
  },
  {
    id: "chsc",
    title: "Computer Hardware Specialist Certification",
    issuer: "JET Institute, Saharanpur",
    location: "Saharanpur, India",
    badge: "CHSC",
    skills: ["Motherboard Diagnostics", "Component Level Repair", "Power Supply & Bus Testing", "Peripheral Interfacing"]
  }
];

export const education: EducationItem[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "Chandigarh University",
    location: "India",
    description: "Advanced study in Software Engineering, Enterprise Systems, Database Management, and Network Architecture."
  },
  {
    id: "pgdchn",
    degree: "Post Graduate Diploma in Computer Hardware & Networking",
    institution: "UP Board of Technical Education",
    location: "India",
    description: "Comprehensive curriculum covering computer engineering fundamentals, microprocessors, network topologies, and systems maintenance."
  },
  {
    id: "bsc",
    degree: "Bachelor of Science (B.Sc.)",
    institution: "CCS University, Meerut",
    location: "India",
    description: "Graduated with mathematical and scientific foundations fostering rigorous analytical thinking and systematic problem-solving."
  }
];

export const supportCaseStudies: SupportCaseStudy[] = [
  {
    id: "cs-1",
    title: "Salesforce Beat-Route GPS Mapping Discrepancies",
    domain: "Salesforce Application Support",
    scenario: "Field-sales representatives reported inability to log customer shop visits due to incorrect geo-coordinates and beat-route mismatch during working hours.",
    challenge: "Over 40 sales reps faced blocked daily attendance and attendance incentive logging, risking revenue visibility and field reporting discrepancies.",
    diagnosticSteps: [
      "Analyzed location cache and permissions on field Android handhelds.",
      "Verified Salesforce distributor record geolocation tags against regional GIS master database.",
      "Identified API sync timeout in the mobile sync queue when encountering low-signal cellular towers."
    ],
    resolution: "Configured offline caching tolerances in the sales app, corrected erroneous shop master coordinate points in Salesforce, and authored a 1-page quick troubleshooting guide for the field team.",
    impact: "Zero field-rep downtime, restored 100% daily visit compliance, and reduced recurring tickets by 75%."
  },
  {
    id: "cs-2",
    title: "Remote Enterprise Server Diagnostics & Quick Part Dispatch",
    domain: "Hardware & Systems Support (Concentrix / Dell)",
    scenario: "An enterprise customer's Dell PowerEdge server signaled memory bus errors and recurrent kernel halts during end-of-quarter batch runs.",
    challenge: "High-priority service outage with strict 4-hour SLA penalty on customer infrastructure.",
    diagnosticSteps: [
      "Remotely inspected iDRAC system event logs (SEL) and hardware diagnostic memory dump.",
      "Isolated faulty DIMM slot via Dell 32-bit hardware diagnostic test routines.",
      "Coordinated with tier-3 engineering to verify firmware revision compatibility."
    ],
    resolution: "Dispatched verified replacement ECC RAM module with pre-cleared field engineer dispatch instructions, ensuring exact slot placement without complete motherboard replacement.",
    impact: "Downtime restricted to scheduled maintenance window, passing SLA review with zero data corruption."
  },
  {
    id: "cs-3",
    title: "Branch VPN Tunnel Disconnection & Gateway Recovery",
    domain: "Network & Infrastructure (Tata BSS)",
    scenario: "Remote branch team lost secure tunnel access to ERP and internal file servers following router gateway reboot.",
    challenge: "Branch staff completely halted from processing customer service requests.",
    diagnosticSteps: [
      "Tested remote ping and traceroute to evaluate packet drop at the ISP perimeter.",
      "Verified dynamic DNS updates and IPsec Phase-1 / Phase-2 security associations in firewall console.",
      "Discovered MTU size mismatch causing packet fragmentation on the newly established ISP route."
    ],
    resolution: "Adjusted TCP MSS clamping and MTU parameters on the edge gateway, flushed stale security associations, and stabilized tunnel negotiation.",
    impact: "Re-established branch connectivity within 25 minutes; added monitoring ping probe for automated early warning."
  }
];
