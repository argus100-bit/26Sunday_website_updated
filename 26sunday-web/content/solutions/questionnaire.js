import { Database, FileSpreadsheet, Users, BarChart3, Send, FileQuestion } from 'lucide-react';

export const questionnaireContent = {
  meta: {
    title: 'Questionnaire Automation',
    description:
      'Answer once. Win every review. AI-powered questionnaire automation that learns from your knowledge base and drafts audit-ready answers instantly.',
  },

  hero: {
    eyebrow: 'Questionnaire',
    prefix: 'Cut questionnaire turnaround time for ',
    words: ['Security teams.', 'Sales teams.', 'Legal teams.'],
    headline: 'Cut questionnaire turnaround time for Security teams.',
    subtext:
      'A dedicated, intelligent platform to turn inbound security reviews into a systematic collaborative operation. Customers send us any questionnaire - Excel, Word, Portal, and our AI drafts audit-ready answers from your knowledge base.',
    ctaLabel: 'Get Started',
    ctaHref: '/get-started',
    secondaryCtaLabel: 'See All Solutions',
    secondaryCtaHref: '/solutions',
    image: '/dashboard_questionnaire.svg',
    imageAlt: '26Sunday Questionnaire Automation Dashboard',
    browserUrl: 'app.26sunday.com/questionnaire',
    showBrowserBar: false,
    showFloatingBadge: false,
    wideImage: false,
  },

  problemSolution: {
    eyebrow: 'The Problem',
    title: 'Security questionnaires are blocking your deals.',
    body: 'If your team is spending more time typing answers into spreadsheets, chasing colleagues for evidence, and explaining the same controls to every prospect than completing transactions, you need a better way. 26Sunday Questionnaire is a single platform to turn inbound security reviews into a systematic, collaborative operation. Customers input their questionnaire - whether it\'s a simple Excel file or comprehensive vendor risk assessment. Our AI instantly searches your trust center, knowledge base, and answer library to draft responses. Your security team reviews, modifies as necessary, and returns a comprehensive, audit-ready answer package. No more starting from scratch. No more lost mail. No more dangling signatures.',
    imagePosition: 'right',
  },

  whySection: {
    heading: 'Why 26Sunday Questionnaire.',
    subtext:
      'Built for velocity, connected across your entire security ecosystem, and backed by human expertise when you need it.',
    items: [
      {
        index: '01',
        tag: 'ENGINE',
        title: 'AI‑Native Auto‑Fill Engine',
        body: 'Every questionnaire you have ever answered becomes part of a growing, intelligent knowledge base. When a new customer request arrives, our AI reads each question, matches it to the most relevant answer from your library (pulling from policies, SOC 2 reports, or past responses), and delivers a complete draft within minutes. The system learns from every review you approve, so each subsequent questionnaire gets faster and more accurate. Your team moves from weeks of work to hours of quality assurance.',
        highlights: [
          'Learns from approved reviews',
          'Pulls from policies & SOC 2 reports',
          'Hours of QA instead of weeks of work',
        ],
      },
      {
        index: '02',
        tag: 'ECOSYSTEM',
        title: 'Ecosystem‑Wide Context Sync',
        body: 'The Questionnaire does not work in isolation. It sits directly inside your 26Sunday ecosystem, sharing data with your Trust Center, Status Page, and Readiness assessments. This synchronization also feeds into your Trust Health Score, giving you a single metric that reflects how operational efficiency affects overall trust.',
        highlights: [
          'Direct Trust Center & Status Page sync',
          'Integrated with Readiness assessments',
          'Feeds into your Trust Health Score',
        ],
      },
      {
        index: '03',
        tag: 'GATEWAY',
        title: 'Two‑Way Gateway, Not a Black Hole',
        body: 'Unlike generic form tools that lose submissions in a queue, 26Sunday Questionnaire provides a seamless handoff from the Trust Center. Prospects who have read your policies and still have a few specific questions can upload their questionnaire directly from the trust portal. That request instantly appears in your Questionnaire dashboard with a status, assignee, and priority. You can respond, request clarifications, or mark it as complete. The entire conversation lives inside the platform.',
        highlights: [
          'Direct upload from Trust Center portal',
          'Real-time status, assignee & priority tracking',
          'End-to-end audit conversation thread',
        ],
      },
      {
        index: '04',
        tag: 'SAAS+ EXPERTS',
        title: 'We Do the Heavy Lifting with SaaS+',
        body: 'Even with automation, some teams are too lean to manage questionnaire volume. That is where our SaaS+ offering steps in. For an additional subscription, a certified 26Sunday compliance analyst becomes an extension of your team. They monitor your incoming questionnaire portal, review AI‑drafted answers, fill in missing evidence, and deliver the final response for your approval. Your team simply reviews and clicks “send.” This turns questionnaire management from a weekly fire drill into a passive, hands‑off process.',
        highlights: [
          'Certified 26Sunday compliance analysts',
          'Turnkey evidence gathering & review',
          'Passive, hands-off approval process',
        ],
      },
    ],
  },

  howItWorks: {
    eyebrow: 'How it works',
    headline: 'From inbox to deals in four steps',
    subtext:
      'A continuous, intelligent pipeline that transforms unstructured security reviews into audit-grade deliverables in record time.',
    steps: [
      {
        stepNumber: '01',
        title: 'Upload',
        description:
          'Either upload the questionnaire directly when the format is standard, or, in case of a complex format, build the custom questionnaire from scratch.',
        tag: 'INGESTION',
        badgeText: 'Format Agnostic',
        features: [
          'Direct upload for standard Excel & Word formats',
          'Custom questionnaire builder for complex formats',
          'Instant parsing of tables, sections & dropdowns',
        ],
      },
      {
        stepNumber: '02',
        title: 'AI Drafts',
        description:
          '26Sunday AI, specifically trained for the GRC domain, generates the response from the knowledge base, with citation and confidence scoring.',
        tag: 'DOMAIN AI',
        badgeText: 'GRC-Trained LLM',
        features: [
          'Trained specifically for security & compliance',
          'Direct citations from policies, SOC 2 & evidence',
          'Real-time confidence scoring on every drafted answer',
        ],
      },
      {
        stepNumber: '03',
        title: 'Review',
        description:
          'Your team reviews in a final round; for SaaS+, 26Sunday GRC specialists act as an extension of your team and help with the review process.',
        tag: 'HUMAN IN THE LOOP',
        badgeText: 'Team & SaaS+ QA',
        features: [
          'Fast internal approval workflow with 1-click diffs',
          'SaaS+ certified GRC specialists for hands-off review',
          'Granular team commentary & audit-ready sign-offs',
        ],
      },
      {
        stepNumber: '04',
        title: 'Ship',
        description:
          'The questionnaire is then shipped in an original format. The Knowledge Base learns from all changes and adapts for future reviews.',
        tag: 'DELIVERY & LEARNING',
        badgeText: 'Adaptive Feedback',
        features: [
          'Shipped back in customer’s exact original file format',
          'Knowledge Base automatically learns every edit & approval',
          'Subsequent reviews become faster and more accurate',
        ],
      },
    ],
  },

  capabilities: {
    heading: 'Everything your Questionnaire needs to close deals.',
    subheading: 'Six purpose-built capabilities, available from day one.',
    items: [
      {
        icon: Database,
        title: 'Knowledge Base',
        description:
          'Every answer you’ve ever approved adds a new memory to the Knowledge Base. This helps cut down time by redoing your DDQs.',
      },
      {
        icon: FileSpreadsheet,
        title: 'Structured Formatting',
        description:
          'Upload Excel files, Word docs, and PDFs. Our parser extracts questions and preserves formatting, removing manual re‑typing. For complex formats, there is a 26Sunday standard format or complex format option.',
      },
      {
        icon: Users,
        title: 'Collaborative workflow',
        description:
          'Assign questions to subject matter experts, track status, and leave internal comments. All activity logs are audit‑ready.',
      },
      {
        icon: BarChart3,
        title: 'Actionable dashboard',
        description:
          'See completion rate and aging requests at a glance. Know exactly where your team stands before SLA deadlines hit.',
      },
      {
        icon: Send,
        title: 'No more tab switching',
        description:
          'Compile completed answers into an intended format. Add a personalized cover note, then send back to the requester – all from inside the platform.',
      },
      {
        icon: FileQuestion,
        title: 'Ask DDQs',
        description:
          'Customize the questionnaires that you send to vendors, partners, or prospects. Portal access to replace your end-of-review work.',
      },
    ],
  },
};
