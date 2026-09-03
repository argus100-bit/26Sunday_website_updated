'use client';

import { useState } from 'react';
import { Mail, Phone, Shield, ChevronDown, ArrowUpRight } from 'lucide-react';

const channels = [
  {
    type: 'Sales',
    icon: Mail,
    description: 'For prospects, demo requests, and pricing questions.',
    email: 'sales@26sunday.com',
    note: 'We respond within 1 business day.',
  },
  {
    type: 'Support',
    icon: Phone,
    description: 'For existing SaaS and SaaS+ customers needing platform assistance.',
    email: 'support@26sunday.com',
    note: 'SaaS+: 24/7 with 6-hour SLA. SaaS: business hours.',
  },
  {
    type: 'Security',
    icon: Shield,
    description: 'For vulnerability disclosures and security researchers.',
    email: 'security@26sunday.com',
    note: 'We follow responsible disclosure practices.',
  },
];

const reasons = ['Sales inquiry / demo', 'Customer support', 'Security disclosure', 'Other'];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    reason: reasons[0],
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  }

  return (
    <>
      {/* Hero */}
      <section
        className="pt-28 pb-20 lg:pt-36 lg:pb-28"
        style={{ backgroundColor: 'var(--color-primary)' }}
        aria-labelledby="contact-heading"
      >
        <div className="container-narrow text-center">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Contact
          </span>
          <h1
            id="contact-heading"
            className="font-bold"
            style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Get in touch.
          </h1>
          <p
            className="mt-4 text-lg"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            Sales, support, and security — we have the right team for every inquiry.
          </p>
        </div>
      </section>

      {/* Contact channels */}
      <section className="section-pad" style={{ backgroundColor: 'white' }}>
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {channels.map(({ type, icon: Icon, description, email, note }) => (
              <a
                key={type}
                href={`mailto:${email}`}
                className="group relative flex flex-col rounded-xl border transition-shadow duration-300 hover:shadow-xl overflow-hidden"
                style={{
                  borderColor: 'rgba(11, 31, 58, 0.08)',
                  backgroundColor: '#FFFFFF',
                }}
              >
                {/* Top accent bar */}
                <div
                  className="h-1 w-full"
                  style={{ backgroundColor: '#FF5757' }}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon + Type row */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300"
                      style={{
                        backgroundColor: 'rgba(255, 87, 87, 0.08)',
                        border: '1px solid rgba(255, 87, 87, 0.15)',
                      }}
                    >
                      <Icon size={18} className="text-[#FF5757]" />
                    </div>
                    <h2
                      className="text-lg font-bold tracking-tight"
                      style={{ color: '#0B1F3A' }}
                    >
                      {type}
                    </h2>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-5 flex-1"
                    style={{ color: '#4B5563' }}
                  >
                    {description}
                  </p>

                  {/* Email CTA */}
                  <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'rgba(11, 31, 58, 0.06)' }}>
                    <span
                      className="text-sm font-semibold group-hover:underline underline-offset-2 transition-colors duration-200"
                      style={{ color: '#FF5757' }}
                    >
                      {email}
                    </span>
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5"
                      style={{
                        backgroundColor: 'rgba(255, 87, 87, 0.08)',
                      }}
                    >
                      <ArrowUpRight size={14} className="text-[#FF5757]" />
                    </span>
                  </div>

                  {/* SLA note */}
                  <span
                    className="text-[11px] font-medium mt-2.5 block"
                    style={{ color: '#9CA3AF' }}
                  >
                    {note}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-2xl font-bold text-center mb-8"
              style={{ color: 'var(--color-primary)' }}
            >
              Send us a message
            </h2>

            {status === 'success' ? (
              <div
                className="rounded-2xl p-10 text-center border"
                style={{ backgroundColor: 'var(--color-neutral-100)', borderColor: 'var(--color-neutral-200)' }}
                role="status"
                aria-live="polite"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--color-success)' }}
                  aria-hidden="true"
                >
                  <span className="text-white text-xl">✓</span>
                </div>
                <p className="font-semibold text-lg mb-2" style={{ color: 'var(--color-primary)' }}>
                  Message received.
                </p>
                <p className="text-sm" style={{ color: 'var(--color-neutral-600)' }}>
                  We&apos;ll route your message to the right team and be in touch shortly. Note: email routing is not yet wired in the current build — the message has been logged.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border p-8"
                style={{ borderColor: 'var(--color-neutral-200)', backgroundColor: 'var(--color-neutral-100)' }}
                noValidate
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Full name <span aria-hidden="true" style={{ color: 'var(--color-accent)' }}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formState.name}
                    onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border text-sm transition-colors"
                    style={{
                      borderColor: 'var(--color-neutral-200)',
                      backgroundColor: 'white',
                      color: 'var(--color-neutral-900)',
                    }}
                    placeholder="Jane Smith"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Work email <span aria-hidden="true" style={{ color: 'var(--color-accent)' }}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formState.email}
                    onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border text-sm transition-colors"
                    style={{
                      borderColor: 'var(--color-neutral-200)',
                      backgroundColor: 'white',
                      color: 'var(--color-neutral-900)',
                    }}
                    placeholder="jane@company.com"
                  />
                </div>

                {/* Reason */}
                <div>
                  <label
                    htmlFor="contact-reason"
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Reason for contact
                  </label>
                  <div className="relative">
                    <select
                      id="contact-reason"
                      value={formState.reason}
                      onChange={e => setFormState(s => ({ ...s, reason: e.target.value }))}
                      className="w-full px-4 py-3 pr-10 rounded-xl border text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF5757]/20 focus:border-[#FF5757] transition-all"
                      style={{
                        borderColor: 'var(--color-neutral-200)',
                        backgroundColor: 'white',
                        color: 'var(--color-neutral-900)',
                      }}
                    >
                      {reasons.map(r => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                    <ChevronDown
                      size={18}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Message <span aria-hidden="true" style={{ color: 'var(--color-accent)' }}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border text-sm resize-vertical"
                    style={{
                      borderColor: 'var(--color-neutral-200)',
                      backgroundColor: 'white',
                      color: 'var(--color-neutral-900)',
                      minHeight: '120px',
                    }}
                    placeholder="Tell us what you need..."
                  />
                </div>

                {/* Error */}
                {status === 'error' && (
                  <div
                    className="px-4 py-3 rounded-xl text-sm"
                    style={{ backgroundColor: '#FEF2F2', color: '#B91C1C', border: '1px solid #FECACA' }}
                    role="alert"
                    aria-live="assertive"
                  >
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-6 py-3.5 rounded-xl font-semibold text-white text-sm transition-all"
                  style={{
                    backgroundColor: status === 'loading' ? 'var(--color-neutral-400)' : 'var(--color-accent)',
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  }}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
