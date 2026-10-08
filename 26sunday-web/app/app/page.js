'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Terminal,
  Cpu,
  Lock,
  Zap,
  CheckCircle2,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  Server,
  KeyRound,
  FileCode2,
  ChevronDown,
  Layers,
  Globe2,
  Activity,
  Workflow,
  ExternalLink,
  Users2,
} from 'lucide-react';
import './app-staging.css';

export default function AppStagingPage() {
  const emailInputRef = useRef(null);

  // ── Intake Form State ───────────────────────────────────────────────
  const [formData, setFormData] = useState({
    workEmail: '',
    companyDomain: '',
    role: 'CISO / Head of Security',
    customRole: '',
    companySize: '51-250 (Growth)',
    helpNeeds: [],
  });

  const availableHelpNeeds = [
    'Send questionnaires to vendors',
    'Answer client questionnaires faster',
    'Close deals faster',
    'Get a status page on my domain',
    'Show uptime & incidents',
    'Check my ISO 27001 readiness',
    'Check my GDPR readiness',
    'Check readiness for any framework',
    'Build a trust center',
    'Win client trust',
    'Share security docs easily',
    'Manage vendor risk',
    'Pass security reviews',
    'Not sure yet, need guidance',
  ];

  const toggleHelpNeed = (item) => {
    setFormData((prev) => {
      const exists = prev.helpNeeds.includes(item);
      return {
        ...prev,
        helpNeeds: exists
          ? prev.helpNeeds.filter((n) => n !== item)
          : [...prev.helpNeeds, item],
      };
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStep, setSubmitStep] = useState('');
  const [ticketData, setTicketData] = useState(null);
  const [copiedTicket, setCopiedTicket] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.workEmail || !formData.companyDomain) return;
    if (formData.role === 'Not in the list' && !formData.customRole?.trim()) return;

    setIsSubmitting(true);
    setSubmitStep('Connecting to 26Sunday Staging Cluster...');

    setTimeout(() => {
      setSubmitStep('Generating Post-Quantum SHA-256 Signature...');
    }, 550);

    setTimeout(() => {
      setSubmitStep('Allocating VIP Queue Rank #14 in Staging Wave 1...');
    }, 1100);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStep('');
      // Generate synthetic token
      const randomHex = Math.random().toString(16).substring(2, 10).toUpperCase();
      const resolvedRole = formData.role === 'Not in the list'
        ? (formData.customRole?.trim() || 'Not in the list')
        : formData.role;

      setTicketData({
        passId: `VIP-26S-${randomHex}`,
        email: formData.workEmail,
        domain: formData.companyDomain,
        role: resolvedRole,
        helpNeeds: formData.helpNeeds.join(', ') || 'All Platform Solutions',
        hash: `0x7f${Math.random().toString(16).substring(2, 18)}e29a`,
        queueRank: 'Wave 1 // Slot #14 of 50',
        timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC',
      });
    }, 1700);
  };

  const handleCopyTicket = () => {
    if (!ticketData) return;
    const textToCopy = `26SUNDAY VIP STAGING CREDENTIAL\nPass ID: ${ticketData.passId}\nRecipient: ${ticketData.email}\nDomain: ${ticketData.domain}\nRole: ${ticketData.role}\nQueue: ${ticketData.queueRank}\nSignature: ${ticketData.hash}\nHelp Needed: ${ticketData.helpNeeds}`;
    navigator.clipboard?.writeText(textToCopy);
    setCopiedTicket(true);
    setTimeout(() => setCopiedTicket(false), 2500);
  };

  // ── FAQ Accordion State ─────────────────────────────────────────────
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'When will the 26Sunday platform be fully launched to the public?',
      a: 'The autonomous platform is now in closed Alpha with select enterprise design partners. Wave 1 VIP access will launch December 25, 2026, in invite-only waves to ensure all early customers have a smooth, supported onboarding. We’ll be opening up access individually based on Wave 1 feedback before wide availability. Join the waitlist to reserve your spot and get notified the moment your invite is ready.',
    },
    {
      q: 'What is included with Early VIP Access?',
      a: "VIP members get early access to the staging environment, a price guaranty for the first two years of the Founding Cohort, a direct Slack/Teams bridge with one of 26Sunday's founding engineers, SaaS+ by default for SaaS customers, and a free Enterprise Status Page for six months.",
    },
    {
      q: 'Can we migrate from legacy compliance tools like Vanta or Drata?',
      a: "Yes. 26Sunday includes an automated policy and control ingestion pipeline. You can import your existing vendor policies, auditor evidence mapping, and questionnaires quickly, and our team supports you throughout the process to keep disruption to your ongoing audit cycles to a minimum. Timelines vary with the volume and format of your documents, and we'll confirm an estimate during onboarding.",
    },
    {
      q: 'Is our sensitive company security data used to train public AI models?',
      a: 'Never. 26Sunday adheres to a strict Zero-Data-Retention policy. All enterprise security models run within a multi-tenant logical segregation architecture, with encryption keys managed through GCP KMS.',
    },
  ];

  const handleScrollToEmail = () => {
    if (emailInputRef.current) {
      emailInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      emailInputRef.current.focus({ preventScroll: true });
      setTimeout(() => {
        emailInputRef.current?.focus({ preventScroll: true });
      }, 350);
    }
  };

  return (
    <div className="staging-root">
      {/* Background visual layers */}
      <div className="staging-bg-grid" aria-hidden="true" />
      <div className="staging-bg-glow-top" aria-hidden="true" />
      <div className="staging-bg-glow-coral" aria-hidden="true" />

      <main className="staging-container">
        {/* ── HERO HEADER ──────────────────────────────────────────────── */}
        <section className="staging-hero">
          <h1 className="staging-headline">
            <span className="staging-headline-gradient">
              Something transformative is taking shape.
            </span>
          </h1>

          <p className="staging-subtext">
            We are re-engineering how modern enterprises prove security, automate compliance, 
            and turn trust into an unstoppable revenue driver. The next-generation 
            26Sunday Trust Operations platform is in active closed staging.
          </p>

          {/* Dual CTAs in Hero */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <button
              type="button"
              onClick={handleScrollToEmail}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[var(--color-accent)] text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
              style={{ borderRadius: 0, backgroundColor: '#FF5757' }}
              aria-label="Jump directly to Early VIP Access work email input"
            >
              <KeyRound size={16} />
              <span>Get Early VIP Access</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </section>

        {/* ── MAIN INTERACTIVE GRID: VIP INTAKE & BLUEPRINT PREVIEW ───── */}
        <div className="staging-grid" id="vip-intake">
          {/* Left Column: VIP Early Access Terminal Card */}
          <div className="staging-card">
            <div className="staging-card-body">
              {!ticketData ? (
                <form onSubmit={handleSubmit}>
                  <div className="staging-form-group">
                    <label className="staging-label" htmlFor="work-email">
                      Work Email
                      <span className="staging-label-sub">(Corporate domain required)</span>
                    </label>
                    <input
                      ref={emailInputRef}
                      id="work-email"
                      type="email"
                      required
                      placeholder="ciso@enterprise.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="staging-input"
                    />
                  </div>

                  <div className="staging-form-group">
                    <label className="staging-label">
                      Company Organization / Domain
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="acme.corp"
                      value={formData.companyDomain}
                      onChange={(e) => setFormData({ ...formData, companyDomain: e.target.value })}
                      className="staging-input"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 staging-form-group">
                    <div>
                      <label className="staging-label" htmlFor="role-select">Your Role</label>
                      <select
                        id="role-select"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="staging-select"
                      >
                        <option>CISO / Head of Security</option>
                        <option>VP Engineering / CTO</option>
                        <option>Founder / CEO</option>
                        <option>Director of Compliance / SecOps</option>
                        <option>Product / Solutions Architect</option>
                        <option>Not in the list</option>
                      </select>
                    </div>

                    <div>
                      <label className="staging-label" htmlFor="company-size-select">Company Size</label>
                      <select
                        id="company-size-select"
                        value={formData.companySize}
                        onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                        className="staging-select"
                      >
                        <option>1-50 (Seed / Series A)</option>
                        <option>51-250 (Growth)</option>
                        <option>250-1,000 (Mid-Market)</option>
                        <option>1,000+ (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  {formData.role === 'Not in the list' && (
                    <div className="staging-form-group">
                      <label className="staging-label" htmlFor="custom-role-input">
                        Specify Your Role
                        <span className="staging-label-sub">(Not in the list)</span>
                      </label>
                      <input
                        id="custom-role-input"
                        type="text"
                        required
                        placeholder="e.g. Lead GRC Analyst, Data Protection Officer"
                        value={formData.customRole}
                        onChange={(e) => setFormData({ ...formData, customRole: e.target.value })}
                        className="staging-input"
                        autoFocus
                      />
                    </div>
                  )}

                  <div className="staging-form-group">
                    <div className="staging-needs-header">
                      <label className="staging-label">
                        What do you need help with?
                        <span className="staging-label-sub">(Select all that apply)</span>
                      </label>
                      {formData.helpNeeds.length > 0 && (
                        <div className="staging-needs-actions">
                          <span className="staging-needs-badge">
                            {formData.helpNeeds.length} selected
                          </span>
                          <button
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, helpNeeds: [] }))}
                            className="staging-needs-clear-btn"
                          >
                            Clear
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="staging-needs-grid" role="group" aria-label="What do you need help with">
                      {availableHelpNeeds.map((item) => {
                        const active = formData.helpNeeds.includes(item);
                        return (
                          <button
                            type="button"
                            key={item}
                            onClick={() => toggleHelpNeed(item)}
                            className={`staging-need-card ${active ? 'staging-need-card--active' : ''}`}
                            aria-pressed={active}
                          >
                            <span className="staging-need-checkbox" aria-hidden="true">
                              {active && <Check size={11} strokeWidth={3} />}
                            </span>
                            <span className="staging-need-text">{item}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="staging-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent" />
                        <span>{submitStep || 'Dispatching Request...'}</span>
                      </>
                    ) : (
                      <span>Request Early VIP Access</span>
                    )}
                  </button>
                </form>
              ) : (
                /* Generated VIP Pass Ticket */
                <div className="staging-ticket">
                  <div className="staging-ticket-header">
                    <div>
                      <span className="font-mono text-xs text-[#2dd4bf] block mb-1">
                        CRYPTOGRAPHIC TICKET ISSUED
                      </span>
                      <h3 className="staging-ticket-title">
                        VIP Staging Access Pass
                      </h3>
                    </div>
                    <span className="staging-ticket-badge">
                      {ticketData.passId}
                    </span>
                  </div>

                  <div className="staging-ticket-grid">
                    <div>
                      <span className="staging-ticket-field-label">Assigned Holder</span>
                      <div className="staging-ticket-field-val text-ellipsis overflow-hidden">
                        {ticketData.email}
                      </div>
                    </div>
                    <div>
                      <span className="staging-ticket-field-label">Organization</span>
                      <div className="staging-ticket-field-val">
                        {ticketData.domain}
                      </div>
                    </div>
                    <div>
                      <span className="staging-ticket-field-label">Designated Role</span>
                      <div className="staging-ticket-field-val text-ellipsis overflow-hidden">
                        {ticketData.role}
                      </div>
                    </div>
                    <div>
                      <span className="staging-ticket-field-label">Queue Assignment</span>
                      <div className="staging-ticket-field-val text-[#2dd4bf]">
                        {ticketData.queueRank}
                      </div>
                    </div>
                    <div>
                      <span className="staging-ticket-field-label">Issued At</span>
                      <div className="staging-ticket-field-val text-xs">
                        {ticketData.timestamp}
                      </div>
                    </div>
                    <div>
                      <span className="staging-ticket-field-label">Objectives</span>
                      <div className="staging-ticket-field-val text-xs text-ellipsis overflow-hidden">
                        {ticketData.helpNeeds}
                      </div>
                    </div>
                  </div>

                  <div className="staging-ticket-hash-box">
                    <span className="truncate">SIG: {ticketData.hash}</span>
                    <span className="text-xs text-[#2dd4bf] flex-shrink-0">VALIDATED</span>
                  </div>

                  <div className="staging-ticket-actions">
                    <button
                      type="button"
                      onClick={handleCopyTicket}
                      className="staging-ticket-copy-btn"
                    >
                      {copiedTicket ? (
                        <>
                          <Check size={14} />
                          <span>Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>Copy VIP Pass</span>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setTicketData(null);
                        setFormData((prev) => ({ ...prev, customRole: '', helpNeeds: [] }));
                      }}
                      className="px-4 py-2 border border-[#E6DFC5] text-xs text-[#5B6472] hover:text-[#0B1F3A] hover:bg-[#F4EFE6] transition-colors"
                      style={{ borderRadius: 0 }}
                    >
                      Register Another
                    </button>
                  </div>

                  <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                    A confirmation packet and direct staging invitation will be delivered to{' '}
                    <strong className="text-slate-900">{ticketData.email}</strong> as Wave 1 onboarding commences.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── EXCLUSIVE VIP COHORT PRIVILEGES ──────────────────────────── */}
        <section className="mb-20">
          <div className="staging-section-header">
            <h2 className="staging-section-title">
              Exclusive VIP Staging Privileges
            </h2>
            <p className="staging-section-desc">
              Reserved strictly for organizations accepted into the Wave 1 Staging Group.
            </p>
          </div>

          <div className="staging-perks-grid">
            <div className="staging-perk-card">
              <div className="staging-perk-icon-wrap">
                <Lock size={20} />
              </div>
              <h4 className="staging-perk-title">Founding Rate Lock</h4>
              <p className="staging-perk-desc">
                40% discount off standard tier pricing, locked for 2 years of your subscription across all future platform releases.
              </p>
            </div>

            <div className="staging-perk-card">
              <div className="staging-perk-icon-wrap">
                <Users2 size={20} />
              </div>
              <h4 className="staging-perk-title">Direct CISO & Dev Bridge</h4>
              <p className="staging-perk-desc">
                Dedicated private Slack/Teams channel directly connected to 26Sunday founding engineers and senior compliance architects.
              </p>
            </div>

            <div className="staging-perk-card">
              <div className="staging-perk-icon-wrap">
                <Sparkles size={20} />
              </div>
              <h4 className="staging-perk-title">SaaS+ as a default</h4>
              <p className="staging-perk-desc">
                For a duration of six months, customers utilizing the SaaS service will receive SaaS+ as a standard feature, which will incorporate an expert GRC analyst into their team.
              </p>
            </div>

            <div className="staging-perk-card">
              <div className="staging-perk-icon-wrap">
                <Activity size={20} />
              </div>
              <h4 className="staging-perk-title">Enterprise Status Page, Complimentary for 6 Months</h4>
              <p className="staging-perk-desc">
                Launch a fully branded, real-time status page at no cost for your first six months. Keep customers informed during incidents and scheduled maintenance.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ACCORDION ────────────────────────────────────────────── */}
        <section className="staging-faq-list" aria-label="Frequently Asked Questions">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-[#0B1F3A]">VIP Access Inquiries</h3>
          </div>

          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="staging-faq-item">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="staging-faq-question"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="staging-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
