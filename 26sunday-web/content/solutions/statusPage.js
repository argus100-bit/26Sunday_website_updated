import { Activity, AlertTriangle, Bell, CalendarClock, FileText, Globe } from 'lucide-react';

export const statusPageContent = {
  meta: {
    title: 'Status Page',
    description:
      'A status page that actually builds trust, not just shows outages. Automatic monitoring updates, subscriber alerts, and incident history — all linked to your Trust Health Score.',
  },

  hero: {
    eyebrow: 'Status Page',
    prefix: 'Your reliability, automatically ',
    words: ['proven.', 'communicated.', 'trusted.'],
    headline: 'Your reliability, automatically proven.',
    subtext:
      'Detects downtime, generates incident timelines, and sends subscriber alerts, all from one dashboard. Every incident and resolution is linked directly to your Trust Health Score, turning transparency into a competitive advantage.',
    ctaLabel: 'Get Started',
    ctaHref: '/get-started',
    secondaryCtaLabel: 'See All Solutions',
    secondaryCtaHref: '/solutions',
    image: '/dashboard_status.svg',
    imageAlt: '26Sunday Status Page Dashboard',
    browserUrl: 'status.26sunday.com',
    showBrowserBar: false,
    showFloatingBadge: false,
    wideImage: false,
  },

  problemSolution: {
    eyebrow: 'The Problem',
    title: 'Stop answering status questions during outages.',
    body: 'If your team answers “Is your service down?” during outages and maintenance windows, your company deserves a better way. 26Sunday Status Page automatically updates uptime, issues, and maintenance. To know before asking, customers, partners, and internal teams subscribe to email or Slack notifications. Stop answering status questions and focus on resolution.',
    imagePosition: 'right',
  },

  whySection: {
    heading: 'Why 26Sunday Status Page.',
    subtext:
      'Zero-configuration endpoint monitoring, real-time Trust Health sync, and white-labeled subscriber notifications built for enterprise transparency.',
    items: [
      {
        index: '01',
        tag: 'AUTOMATED MONITORING',
        title: 'Built‑In, Hassle-Free Monitoring',
        body: 'You do not need to bring your own monitoring tools. 26Sunday Status Page includes a lightweight, configurable endpoint checker that pings your public URLs, API endpoints, or internal services at intervals you define - down to 30 seconds. When a check fails, the status page automatically creates an incident timeline, marks the service as degraded or down, and notifies subscribers – all without a single manual click. You can also add manual updates for maintenance or post‑incident summaries. The system is self‑contained, secure, and ready in minutes.',
        highlights: [
          '30-second configurable endpoint checks',
          'Automatic incident timeline generation',
          'Zero manual clicks required during outages',
        ],
      },
      {
        index: '02',
        tag: 'TRUST HEALTH SYNC',
        title: 'Integration with Trust Health Score',
        body: 'Reliability is a core pillar of trust. That is why every incident, resolution, and uptime percentage flows directly into your 26Sunday Trust Health Score. A spike in outages temporarily lowers your health metric; a clean month of 99.99% uptime raises it. Your leadership, sales, and security teams all see, at a glance, how operational stability contributes to overall customer confidence. No more separate uptime reports or spreadsheets – everything lives in a single dashboard.',
        highlights: [
          'Direct feed into Trust Health Score',
          'Single source of truth for sales & leadership',
          'Replaces separate spreadsheets & reports',
        ],
      },
      {
        index: '03',
        tag: 'SUBSCRIBERS & BRANDING',
        title: 'Subscriber Management and White‑Labeled Experience',
        body: 'Your status page is public. Visitors & Potential Customers subscribe with their email address. When an incident occurs, subscribers receive rich notifications with a link to the live status page. The entire page is white-labeled with your company logo, colors, and domain. Customers see a professional, branded reliability hub that strengthens their trust, not a third‑party widget.',
        highlights: [
          'Instant email & Slack subscriber alerts',
          '100% white-labeled with your custom domain',
          'Branded reliability hub instead of 3rd-party widget',
        ],
      },
    ],
  },

  capabilities: {
    heading: 'Everything your Status Page needs to prove reliability.',
    subheading: 'Six purpose-built capabilities, available from day one.',
    items: [
      {
        icon: Activity,
        title: 'Endpoint monitoring',
        description:
          'No external tools needed. We ping your URLs, APIs, and services at configurable intervals, down to 30 seconds, and detect failures instantly.',
      },
      {
        icon: AlertTriangle,
        title: 'Instant incident creation',
        description:
          'A failed check automatically opens an incident with a timestamp, affected component, and severity level. Update it manually or let the system resolve it when the endpoint recovers.',
      },
      {
        icon: Bell,
        title: 'Subscriber notifications',
        description:
          'Customers subscribe via email or Slack. They choose which components to follow. You broadcast once, 26Sunday notify everyone.',
      },
      {
        icon: CalendarClock,
        title: 'Maintenance scheduling',
        description:
          'Plan downtime. Your status page shows upcoming maintenance windows with automatic countdowns. Subscribers get reminders 24 hours and 1 hour before.',
      },
      {
        icon: FileText,
        title: 'Post‑incident summaries',
        description:
          'After resolution, add a root‑cause analysis and remediation steps. The summary stays attached to the incident forever – perfect for compliance audits.',
      },
      {
        icon: Globe,
        title: 'White‑labeled embed',
        description:
          'Embed your status page directly into your website. No redirects, no third‑party branding. Just your logo, your colors, your domain.',
      },
    ],
  },
};
