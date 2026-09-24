'use client';

import Link from 'next/link';
import Image from 'next/image';
import DotMatrix from '@/components/ui/DotMatrix';

// Inline SVG social icons (lucide-react dropped branded icons)
function LinkedInIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function XIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function YouTubeIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12z" />
    </svg>
  );
}

const footerColumns = [
  {
    label: 'Solutions',
    links: [
      { text: 'Trust Center', href: '/solutions/trust-center' },
      { text: 'Questionnaire', href: '/solutions/questionnaire' },
      { text: 'Status Page', href: '/solutions/status-page' },
      { text: 'Readiness Assessment', href: '/solutions/readiness-assessment' },
    ],
  },
  {
    label: 'Platform',
    links: [
      { text: 'SaaS', href: '/platform/saas' },
      { text: 'SaaS+', href: '/platform/saas-plus' },
      { text: 'Compare', href: '/platform' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { text: 'Reports', href: '/resources/reports' },
      { text: 'Documentation', href: '/resources/documentation' },
      { text: 'Product Updates', href: '/resources/product-updates' },
    ],
  },
  {
    label: 'Company',
    links: [
      { text: 'About', href: '/company/about' },
      { text: 'Careers', href: '/company/careers' },
      { text: 'Contact', href: '/company/contact' },
    ],
  },
  {
    label: 'Legal',
    links: [
      { text: 'Privacy Policy', href: '/legal/privacy-policy' },
      { text: 'Terms of Service', href: '/legal/terms-of-service' },
    ],
  },
];

const socialLinks = [
  { Icon: LinkedInIcon, href: 'https://linkedin.com', label: '26Sunday on LinkedIn' },
  { Icon: XIcon, href: 'https://x.com', label: '26Sunday on X (Twitter)' },
  { Icon: YouTubeIcon, href: 'https://youtube.com', label: '26Sunday on YouTube' },
];

export default function SiteFooter() {
  return (
    <footer
      style={{ backgroundColor: 'var(--color-primary)' }}
      className="text-white relative overflow-hidden"
      aria-label="Site footer"
    >
      <DotMatrix variant="dark" spacing={22} dotSize={0.8} opacity={0.06} fade="top-fade" />
      {/* Main footer grid */}
      <div className="container-wide py-16">
        {/* Logo + tagline */}
        <div className="mb-12 flex items-start justify-between gap-8 flex-wrap">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 group" aria-label="26Sunday home">
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-[5px] text-white p-0.5 border border-white/10"
                style={{ backgroundColor: '#000000' }}
                aria-hidden="true"
              >
                <Image src="/logo.png" alt="26Sunday Logo" width={32} height={32} className="w-full h-full object-contain rounded-[4px]" />
              </span>
              <span className="text-xl font-bold tracking-tight group-hover:opacity-90 transition-opacity inline-flex items-center">
                <span className="text-white">26</span>
                <span style={{ color: 'var(--color-accent)' }}>Sunday</span>
              </span>
            </Link>
            <p className="mt-3 text-sm max-w-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Trust is foundation. We automate the rest.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.7)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerColumns.map(col => (
            <div key={col.label}>
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                {col.label}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-150"
                      style={{ color: 'rgba(255,255,255,0.65)' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'white'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} 26Sunday. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Precision. Transparency. Trust.
          </p>
        </div>
      </div>
    </footer>
  );
}
