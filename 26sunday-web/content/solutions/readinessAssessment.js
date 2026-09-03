import { 
  BookOpen, 
  Layers, 
  BarChart3, 
  ListTodo, 
  FileText, 
  RefreshCw 
} from 'lucide-react';

export const readinessAssessmentContent = {
  meta: {
    title: 'Readiness Assessment',
    description:
      'The fastest path from "we should get certified" to "we\'re ready." Pre-mapped controls, auditor-approved evidence templates, and a clear gap closure plan — you just track progress.',
  },

  hero: {
    eyebrow: 'Readiness Assessment',
    prefix: "Don't guess readiness. Know what's missing ",
    words: ['instantly.', 'beforehand.', 'clearly.'],
    headline: "Don't guess readiness. Know what's missing instantly.",
    subtext:
      'Pick any framework; 26Sunday gap-checks recommends fixes and tracks progress daily, with AI-enabled efficiency. Pre-mapped controls, auditor-approved evidence templates, and a clear gap closure plan.',
    ctaLabel: 'Get Started',
    ctaHref: '/get-started',
    secondaryCtaLabel: 'See All Solutions',
    secondaryCtaHref: '/solutions',
  },

  frameworksSection: {
    eyebrow: 'COMPLIANCE FRAMEWORKS',
    heading: 'Frameworks Supported Out of the Box',
    subtext:
      'Pre-mapped controls, continuous audit gap-checks, and automated evidence templates tailored for high-growth enterprises.',
    items: [
      {
        id: 'iso-27001',
        tag: 'INFOSEC BASELINE',
        title: 'ISO 27001',
        subtitle: 'International standard for information security management.',
        badge: '93 Controls Pre-Mapped',
        stat: '+96,000 Global Certifications',
        description:
          'More than 96,000 valid ISO 27001 certifications are in use globally, and adoption has nearly doubled between 2023 and 2024. The global average cost of a data breach reached $4.44 million in 2025; certification is a fraction of that exposure. ISO 27001 is not a nice-to-have anymore for B2B SaaS companies. It’s table stakes for enterprise procurement.',
        highlights: [
          'Pre-mapped Annex A security controls',
          'Automated policy generation & gap-checks',
          'Continuous evidence collection for Stage 1 & 2',
        ],
      },
      {
        id: 'iso-42001',
        tag: 'AI GOVERNANCE',
        title: 'ISO 42001',
        subtitle: 'The first certifiable AI management system standard in the world.',
        badge: '39 AI Controls Pre-Mapped',
        stat: '+1,846% Certification Growth (2025–2026)',
        description:
          'Adoptions increased 340% in 2025, and certifications grew 1,846% from April 2025 through March 2026. More than a quarter (28%) of U.S. firms now require suppliers to be ISO 42001 certified, up from just 2% in 2024. The EU AI Act is the rulebook; ISO 42001 is the operating system that makes compliance repeatable and auditable. This framework is the bridge between innovation and trust for any company building or deploying AI.',
        highlights: [
          'EU AI Act cross-framework alignment',
          'AI model risk governance & data lineage',
          'Algorithmic transparency & bias audit trails',
        ],
      },
      {
        id: 'soc-2',
        tag: 'B2B SAAS STANDARD',
        title: 'SOC 2 Type II',
        subtitle: 'The de facto B2B SaaS security baseline.',
        badge: 'Trust Services Criteria',
        stat: '89% of Enterprise Buyers Require Prior to Signing',
        description:
          '89% of Enterprise Buyers Require SOC 2 Type 2 Prior to Contract Signing. 73% of enterprise IT buyers will not consider vendors without a recent Type 2 report. For the Fortune 500, that number jumps to 98%. If you’re selling to enterprises, expect SOC 2 to appear in 80%+ of security questionnaires. Without it, you’re not only losing deals, but you’re also not even in the conversation.',
        highlights: [
          'Automated observation period evidence logging',
          'Security, Confidentiality, & Availability criteria',
          'Direct auditor workspace collaboration',
        ],
      },
      {
        id: 'gdpr',
        tag: 'DATA PRIVACY',
        title: 'GDPR',
        subtitle: 'The gold standard for data privacy.',
        badge: '32 Articles Mapped',
        stat: '€1.2B in 2025 Fines · 22% YoY Breach Rise',
        description:
          'In 2025, European regulators issued over 300 fines totaling €1.2 billion. Daily data breach notifications increase 22% year-over-year. But only 15% of organizations are deemed “fully compliant”. Compliance with GDPR is not optional for any company that processes data of EU citizens. It is the price of doing business in one of the biggest markets in the world.',
        highlights: [
          'Automated DPIA & RoPA record keeping',
          'Sub-processor compliance verification',
          'Data subject access request (DSAR) workflows',
        ],
      },
      {
        id: 'ccpa',
        tag: 'U.S. PRIVACY BLUEPRINT',
        title: 'CCPA',
        subtitle: 'The blueprint for how U.S. states will regulate privacy.',
        badge: 'CPRA / California Privacy',
        stat: '$3.425B in 2025 State Privacy Penalties',
        description:
          'U.S. state regulators imposed $3.425 billion in privacy-related penalties in 2025, nearly double the amount in 2024. Public penalties for CCPA/CPRA have topped over $23 million in high-profile cases as of early 2026. California is enforcing, and enforcing tough. If you serve CA residents, CCPA is the baseline, not the ceiling.',
        highlights: [
          'Consumer rights & "Do Not Sell/Share" opt-out automation',
          'California Privacy Protection Agency (CPPA) audit readiness',
          'Multi-state privacy law cross-mapping (VCDPA, CPA, CTDPA)',
        ],
      },
    ],
  },

  capabilities: {
    heading: 'Everything you need to reach full audit readiness.',
    subheading: 'Six purpose-built capabilities to track, remediate, and prove compliance.',
    items: [
      {
        icon: BookOpen,
        title: 'Pre-mapped control library',
        description:
          '5 frameworks (ISO 42001, SOC 2, HIPAA, GDPR, NIST, PCI DSS) broken into precisely curated individual controls. Each control includes plain-English descriptions and auditor tips.',
      },
      {
        icon: Layers,
        title: 'Cross-framework memory',
        description:
          'Map a single control once, and it automatically applies to every framework that requires it. No duplicate work.',
      },
      {
        icon: BarChart3,
        title: 'Gap scoring',
        description:
          'Your dashboard shows actionable insight for each active framework. Understand exactly which controls are missing, partially complete, or ready.',
      },
      {
        icon: ListTodo,
        title: 'Remediation plans',
        description:
          'For each gap, the 26Sunday platform prioritizes step-by-step recommendations. Assign tasks to team members as required.',
      },
      {
        icon: FileText,
        title: 'Structured auditor reports',
        description:
          'Click a button to generate a complete readiness report: open gaps, evidence, and a smartly structured summary. Download as PDF or share a secure link.',
      },
      {
        icon: RefreshCw,
        title: 'Continuous re-assessment',
        description:
          'Set a schedule (weekly, monthly, quarterly). The platform re-runs gap checks against your latest evidence and alerts you when scores change. Do your security pulse check beforehand.',
      },
    ],
  },
};
