'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import {
  ShieldCheck,
  FileQuestion,
  Activity,
  ClipboardCheck,
  BarChart3,
  BookOpen,
  Bell,
  Building2,
  Users,
  Phone,
  Layers,
  Sparkles,
  GitCompare,
} from 'lucide-react';

const solutionItems = [
  {
    icon: ShieldCheck,
    title: 'Trust Center',
    tag: 'Self-Serve',
    description: 'Smart portal for security posture. Visitors self-serve answers without back-and-forth.',
    href: '/solutions/trust-center',
  },
  {
    icon: FileQuestion,
    title: 'Questionnaire',
    tag: 'AI Auto-Fill',
    description: 'AI pre-answers from your knowledge base so you never start from scratch.',
    href: '/solutions/questionnaire',
  },
  {
    icon: Activity,
    title: 'Status Page',
    tag: 'Live Health',
    description: 'Automates incident timelines, uptime monitoring, and subscriber notifications.',
    href: '/solutions/status-page',
  },
  {
    icon: ClipboardCheck,
    title: 'Readiness Assessment',
    tag: 'Gap-Check',
    description: 'Pick any framework, 26Sunday gap-checks, recommends fixes, and tracks progress.',
    href: '/solutions/readiness-assessment',
  },
];

const platformItems = [
  {
    icon: Layers,
    title: 'SaaS',
    tag: 'Self-Serve',
    description: 'Complete autonomy. Your team configures, reviews, and approves all trust operations.',
    href: '/platform/saas',
  },
  {
    icon: Sparkles,
    title: 'SaaS+',
    tag: 'Hands-Free GRC',
    description: 'Our certified GRC specialists act as an extension of your team — we lift, you approve.',
    href: '/platform/saas-plus',
  },
  {
    icon: GitCompare,
    title: 'Compare Models',
    tag: 'Overview',
    description: 'See a side-by-side comparison of SaaS and SaaS+ engagement tiers across all modules.',
    href: '/platform',
  },
];

const resourceItems = [
  {
    icon: BarChart3,
    title: 'Reports',
    tag: 'Research',
    description: 'Data-driven insights, compliance trends, and benchmark reports from 26Sunday.',
    href: '/resources/reports',
  },
  {
    icon: BookOpen,
    title: 'Documentation',
    tag: 'Guides & API',
    description: 'Platform guides, setup instructions, integration docs, and FAQs.',
    href: '/resources/documentation',
  },
  {
    icon: Bell,
    title: 'Product Updates',
    tag: 'Changelog',
    description: 'Latest feature releases, platform enhancements, and security improvements.',
    href: '/resources/product-updates',
  },
];

const companyItems = [
  {
    icon: Building2,
    title: 'About 26Sunday',
    tag: 'Mission',
    description: 'Our philosophy: Trust is foundation. We automate the rest.',
    href: '/company/about',
  },
  {
    icon: Users,
    title: 'Careers',
    tag: 'We\'re Hiring',
    description: 'Join our team building the future of automated trust infrastructure.',
    href: '/company/careers',
  },
  {
    icon: Phone,
    title: 'Contact Us',
    tag: '24/7 Support',
    description: 'Get in touch with our sales, customer support, and security teams.',
    href: '/company/contact',
  },
];

const featuredCallouts = {
  Solutions: {
    title: 'Knowledge Base?',
    description: 'Know Your Knowledge Base. The brain behind the operations that build the trust and take the load off you.',
    cta: 'Knowledge Base',
    href: '/solutions/knowledge-base',
  },
  Platform: {
    title: 'Which Model Fits Your Team?',
    description: 'Mix and match SaaS and SaaS+ per solution, or apply the same model across your entire trust program.',
    cta: 'Compare All Capabilities',
    href: '/platform',
  },
  Resources: {
    title: 'Security Assurance Hub',
    description: 'Access whitepapers, auditor evidence templates, and ISO/SOC 2 readiness toolkits.',
    cta: 'Browse Documentation',
    href: '/resources/documentation',
  },
  Company: {
    title: 'Need Custom Architecture?',
    description: 'Schedule a session with our enterprise security team to evaluate 26Sunday for your stack.',
    cta: 'Talk to Security Team',
    href: '/company/contact',
  },
};

/**
 * @param {{ label: string, items: Array<{icon, title, description, href, tag}>, onClose: Function }} props
 */
function MegaPanel({ label, items, onClose }) {
  const featured = featuredCallouts[label] || featuredCallouts.Solutions;

  return (
    <div
      className="animate-slide-down absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-2xl p-6 z-50 border shadow-2xl overflow-hidden"
      style={{
        width: '780px',
        backgroundColor: '#FAF7F2',
        borderColor: 'var(--color-neutral-200)',
        boxShadow: '0 24px 60px rgba(11, 31, 58, 0.18), 0 4px 16px rgba(0, 0, 0, 0.06)',
      }}
      role="menu"
    >
      <div className="grid grid-cols-12 gap-6 items-stretch">

        {/* Left Column: Categorized Options */}
        <div className="col-span-8 space-y-3">
          <div className="flex items-center justify-between px-1 pb-2 border-b border-[#E2D6C3]">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0B1F3A]">
              {label} Overview
            </span>
            <span className="text-[11px] font-semibold text-[#4B5563]">
              {items.length} Modules
            </span>
          </div>

          <div className="grid grid-cols-1 gap-2 pt-1">
            {items.map(({ icon: Icon, title, description, href, tag }) => (
              <Link
                key={href}
                href={href}
                role="menuitem"
                onClick={onClose}
                className="flex items-start gap-3.5 p-3 rounded-xl transition-all duration-200 group hover:bg-[#F1E8DC] border border-transparent hover:border-[#E2D6C3]"
              >
                <span
                  className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 group-hover:scale-105"
                  style={{
                    backgroundColor: 'rgba(255, 87, 87, 0.1)',
                    border: '1px solid rgba(255, 87, 87, 0.25)',
                  }}
                >
                  <Icon size={19} style={{ color: '#FF5757' }} aria-hidden="true" />
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[15px] font-bold group-hover:text-[#FF5757] transition-colors"
                        style={{ color: '#0B1F3A' }}
                      >
                        {title}
                      </span>
                      {tag && (
                        <span
                          className="px-2 py-0.5 text-[10px] font-bold rounded-full uppercase tracking-wider"
                          style={{
                            backgroundColor: 'rgba(11, 31, 58, 0.08)',
                            color: '#0B1F3A',
                          }}
                        >
                          {tag}
                        </span>
                      )}
                    </div>
                    <span
                      className="text-xs opacity-0 group-hover:opacity-100 transition-opacity font-bold"
                      style={{ color: '#FF5757' }}
                    >
                      →
                    </span>
                  </div>
                  <p
                    className="text-xs mt-1 leading-relaxed line-clamp-2 font-normal"
                    style={{ color: '#374151' }}
                  >
                    {description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column: Enterprise Featured Callout Sidebar */}
        <div className="col-span-4 flex flex-col justify-between p-5 rounded-none border border-[#E2D6C3] bg-[#F2EBE0]">
          <div>
            <span
              className="inline-block px-2.5 py-1 rounded-none text-[10px] font-extrabold uppercase tracking-wider mb-3"
              style={{
                backgroundColor: '#0B1F3A',
                color: '#FFFFFF',
              }}
            >
              Enterprise
            </span>
            <h4
              className="text-base font-bold leading-snug mb-2"
              style={{ color: '#0B1F3A' }}
            >
              {featured.title}
            </h4>
            <p
              className="text-xs leading-relaxed font-normal"
              style={{ color: '#374151' }}
            >
              {featured.description}
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-[#E2D6C3]">
            <Link
              href={featured.href}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-bold transition-all duration-150 hover:translate-x-1"
              style={{ color: '#FF5757' }}
            >
              {featured.cta} →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

/**
 * @param {{ label: string, items: Array, openMenu: string|null, setOpenMenu: Function }} props
 */
export function NavDropdown({ label, items, openMenu, setOpenMenu, darkMode }) {
  const isOpen = openMenu === label;
  const ref = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(label);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenMenu(null);
      }
    }
    function handleKey(e) {
      if (e.key === 'Escape') setOpenMenu(null);
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClick);
      document.addEventListener('keydown', handleKey);
    }
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isOpen, setOpenMenu]);

  const textColor = isOpen
    ? 'var(--color-accent)'
    : darkMode
      ? 'rgba(255, 255, 255, 0.9)'
      : 'var(--color-primary)';

  return (
    <div 
      ref={ref} 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="nav-glass-item flex items-center gap-1.5 px-4 py-2 text-sm font-semibold tracking-wide rounded-xl transition-all duration-200"
        style={{ color: textColor }}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setOpenMenu(isOpen ? null : label)}
      >
        {label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {isOpen && (
        <MegaPanel label={label} items={items} onClose={() => setOpenMenu(null)} />
      )}
    </div>
  );
}

export { solutionItems, platformItems, resourceItems, companyItems };
