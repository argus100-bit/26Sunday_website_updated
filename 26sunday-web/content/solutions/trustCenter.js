import { Lock, Zap, Palette, Bell, Database, Search } from 'lucide-react';

export const trustCenterContent = {
  meta: {
    title: 'Trust Center',
    description:
      'A smart, intuitive portal where visitors self-serve security answers or submit a questionnaire — no back-and-forth. Close deals faster.',
  },

  hero: {
    eyebrow: 'Trust Center',
    prefix: 'Skip the back-and-forth. Publish your ',
    words: ['posture.', 'trust.', 'compliance.'],
    headline: 'Skip the back-and-forth. Publish your posture.',
    subtext:
      'If your team spends more time emailing security reports and answering the same questions over and over than actually selling, you need a better way. 26Sunday Trust Center is a single, smart page where your customers find everything they need to build trust.',
    ctaLabel: 'Get Started',
    ctaHref: '/get-started',
    secondaryCtaLabel: 'See All Solutions',
    secondaryCtaHref: '/solutions',
  },

  features: [
    {
      eyebrow: 'Unified Control Plane',
      title: 'One place for all your trust controls.',
      body: 'All trust controls, from policies to freshness of compliance evidence, in one intuitive app. There are no setting labyrinths, no hidden menus, and no steep learning curves for new team members. Your security, compliance, and sales teams can onboard in minutes, not weeks. What you see is what you manage: a clean, logical interface that surfaces complexity only when needed. That means less training time and more closing time.',
      imagePosition: 'right',
    },
    {
      eyebrow: 'Intelligent Ecosystem Integration',
      title: 'Your Trust Center syncs with your entire 26Sunday ecosystem.',
      body: 'Your trust center isn\'t isolated. It syncs with your 26Sunday ecosystem. Real-time data on page visits, document downloads, and visitor activity trends. Every activity feeds directly into your Trust Health Score and other operational KPIs, providing a single source of truth for how trust generates revenue.',
      imagePosition: 'left',
    },
    {
      eyebrow: 'Questionnaire Gateway',
      title: 'Handle the 10% no automation can answer.',
      body: 'A trust center should be able to answer 90% of client queries, but the other 10%, the tailored, deal-specific ones, cannot be automated. 26Sunday fills the gap with a smooth hand-off. Within the Trust Center, a prospect can upload their own security questionnaire or put in a free-form inquiry with one click. That submission is immediately routed to our Questionnaire solution, where AI begins to draft replies right away.',
      imagePosition: 'right',
    },
  ],

  capabilities: {
    heading: 'Everything your Trust Center needs to close deals.',
    subheading: 'Six purpose-built capabilities, available from day one.',
    items: [
      {
        icon: Lock,
        title: 'NDA Gating & Access Control',
        description:
          'Gate sensitive documents behind NDA agreements. Control who sees what with granular access rules, so your confidential materials reach only the right people.',
      },
      {
        icon: Zap,
        title: 'Sales Acceleration',
        description:
          'Turn your Trust Center into a revenue tool. Prospects get instant answers, your sales cycle shortens, and your team skips the manual security Q&A entirely.',
      },
      {
        icon: Palette,
        title: 'Custom Branding',
        description:
          'Your Trust Center, your brand. Match your colors, logo, and domain, so customers experience a seamless extension of your product, not a generic third-party portal.',
      },
      {
        icon: Bell,
        title: 'Subprocessor Change Alerts',
        description:
          'Automatically notify subscribers whenever your subprocessor list changes. Stay ahead of customer inquiries and maintain transparency without manual announcements.',
      },
      {
        icon: Database,
        title: 'Audit-Ready Document Vault',
        description:
          'Store SOC 2 reports, pen test results, ISO certificates, and all compliance evidence in one organized, always-current vault, ready for any auditor or prospect request.',
      },
      {
        icon: Search,
        title: 'Smart Search',
        description:
          'Type any keyword - "encryption," "data retention", and instantly see relevant snippets from policies, controls, and reports. No chat, no waiting. Just answers.',
      },
    ],
  },
};
