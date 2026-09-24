import { ShieldCheck, FileQuestion, Activity, ClipboardCheck } from 'lucide-react';

export const homeContent = {
  hero: {
    headline: 'We steady the bridge.',
    subtext:
      'Trust, built smarter. AI powered customer trust & GRC solution that helps you minimize the friction for Sales, Compliance, Security, Legal, Procurement, and Vendor Risk. Get the SaaS platform your workflow deserves, or add expert guidance with SaaS+.',
    ctaLabel: 'Get Started',
    ctaHref: '/get-started',
    secondaryCtaLabel: 'Learn More',
    secondaryCtaHref: '/company/about',
    image: '/homepage-dashboard.png',
    imageAlt: '26Sunday Platform Dashboard',
  },

  scrollStatement: {
    statement: 'One Roof. We Lift. You Review.',
    subtext:
      'All your trust operations under one roof. From trust centers to questionnaires to readiness, we run the engine. You stay in control.',
  },

  productCards: [
    {
      title: 'Trust Center',
      description:
        'From silent repository to active sales asset. Customers self-serve, submit security questionnaires, and you wake up to signed deals. You get a dashboard, not another email thread.',
      href: '/solutions/trust-center',
      icon: ShieldCheck,
    },
    {
      title: 'Questionnaire',
      description:
        'The only questionnaire tool that learns as you go. Upload. Auto-fill. Review. Send. That\'s the whole workflow. Everything else is our AI.',
      href: '/solutions/questionnaire',
      icon: FileQuestion,
    },
    {
      title: 'Status Page',
      description:
        'A status page that actually builds trust, not just shows outages. Automatic updates from your monitoring tools, subscriber notifications, and incident history are all linked to your Trust Health Score.',
      href: '/solutions/status-page',
      icon: Activity,
    },
    {
      title: 'Readiness Assessment',
      description:
        'The fastest path from \'we should get certified\' to \'we\'re ready.\' Pre-mapped controls, auditor-approved evidence templates, and a clear gap closure plan — you just track progress.',
      href: '/solutions/readiness-assessment',
      icon: ClipboardCheck,
    },
  ],

  audienceSegments: {
    heading: '26Sunday is for everyone.',
    segments: [
      {
        audience: 'AI startups chasing ISO 42001 / NIST AI RMF',
        body: 'Chasing ISO 42001 or any new assurance needed for compliance? 26Sunday turns a daunting compliance sprint into a guided, weeks-long walk. We map every required control, auto-detect gaps, and provide auditor-approved evidence templates. You just review, implement, and submit.',
      },
      {
        audience: 'SaaS companies drowning in security questionnaires',
        body: 'Every unanswered questionnaire is a delayed signature. Every manual response burns engineering hours you don\'t have. 26Sunday turns that chaos into a structured workflow: we auto-detect questions, map them to your knowledge base, and deliver draft answers — you just approve and send.',
      },
      {
        audience: 'Companies managing SOC 2, HIPAA, and beyond',
        body: 'Companies juggling SOC 2, HIPAA, and many more often get blindsided by expired certificates or drifted controls. 26Sunday sends automated expiry alerts weeks in advance, and flags control changes daily, so you fix issues before auditors do.',
      },
    ],
  },

  engagementModel: {
    heading: 'Choose your Engagement Model',
    body1:
      '26Sunday solution is available in two tiers. With SaaS, your team retains full control: you configure, review, and approve all outputs. With SaaS+, our certified GRC specialists act as an extension of your team. We handle the day-to-day work (creation of the trust center, evidence collection, questionnaire drafting, readiness assessments, and viable requests within scope) and deliver only the final items for your approval. The underlying platform is identical. The only difference is who lifts.',
    body2:
      'Select SaaS for complete autonomy. Select SaaS+ for hands-free compliance. Mix and match per solution, or apply the same model across your entire trust program.',
    models: [
      { name: 'SaaS', href: '/platform/saas' },
      { name: 'SaaS+', href: '/platform/saas-plus' },
    ],
  },
};
