'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Lock,
  Zap,
  Check,
  Rocket,
  Sparkles,
  Target,
  Send,
  ChevronDown,
  Clock,
  Users,
  Building2
} from 'lucide-react';
import DotMatrix from '@/components/ui/DotMatrix';

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    supportReason: '',
    referralSource: '',
    notes: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const supportOptions = [
    'AI Security & Questionnaire Automation',
    'Trust Center & Live Status Page',
    'SOC 2 / ISO 42001 / HIPAA Readiness',
    'SaaS+ Expert-Managed GRC Support',
    'General Demo & Platform Overview',
  ];

  const referralOptions = [
    'Google Search',
    'LinkedIn',
    'Peer Recommendation',
    'Security Auditor / Advisor',
    'News / Article',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      // Simulate submission delay
      await new Promise((resolve) => setTimeout(resolve, 1200));

      if (!formData.email.includes('@')) {
        throw new Error('Please enter a valid work email address.');
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  // ── Shared input styles for clean light theme ──
  const inputClass =
    'w-full px-4 py-3 text-sm rounded-lg border bg-[#FAFAFB] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF5757]/30 focus:border-[#FF5757] focus:bg-white transition-all border-slate-200 hover:border-slate-300';

  const selectClass =
    'w-full px-4 py-3 pr-10 text-sm rounded-lg border bg-[#FAFAFB] text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#FF5757]/30 focus:border-[#FF5757] focus:bg-white transition-all border-slate-200 appearance-none cursor-pointer hover:border-slate-300';

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">

      {/* ── Ambient background elements ── */}
      <DotMatrix variant="light" spacing={32} dotSize={0.8} opacity={0.25} fade="full" />

      {/* Minimal Background Celestial Gravitational Sketch Watermark */}
      <div 
        className="absolute -right-28 sm:-right-16 top-16 sm:top-24 w-[480px] h-[480px] sm:w-[620px] sm:h-[620px] lg:w-[760px] lg:h-[760px] opacity-[0.06] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <Image
          src="/images/get-started-sketch.png"
          alt=""
          width={760}
          height={760}
          priority
          className="w-full h-full object-contain"
        />
      </div>

      {/* Subtle radial glow — top right */}
      <div
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,87,87,0.05) 0%, transparent 70%)' }}
      />
      {/* Subtle radial glow — bottom left */}
      <div
        className="absolute -bottom-60 -left-60 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(11,31,58,0.04) 0%, transparent 70%)' }}
      />

      {/* ── Main content ── */}
      <section className="pt-28 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full relative z-10">

        {/* ── Page header ── */}
        <div className="text-center mb-14 sm:mb-16">
          <p className="text-xs font-bold tracking-widest uppercase mb-3 text-[#FF5757]">
            Schedule a Demo
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 text-[#0B1F3A]">
            Get Started with{' '}
            <span className="text-[#0B1F3A]">26</span>
            <span className="text-[#FF5757]">Sunday</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            See how 26Sunday automates trust operations for security-first teams.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* ─── LEFT: Demo Request Form ─── */}
          <div className="lg:col-span-7 order-2 lg:order-1">

            <div>

              {status === 'success' ? (
                /* ── Success View ── */
                <div className="py-12 text-center space-y-6">
                  <div
                    className="w-14 h-14 rounded-full mx-auto flex items-center justify-center shadow-md"
                    style={{ backgroundColor: '#10B981' }}
                  >
                    <CheckCircle2 size={28} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#0B1F3A]">
                    Demo Request Received
                  </h3>

                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#0B1F3A]">{formData.firstName}</strong>. Our team will reach out to <strong className="text-[#0B1F3A]">{formData.email}</strong> within 4 business hours to schedule your walkthrough.
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <Link
                      href="/solutions"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-bold text-xs uppercase tracking-wider text-white shadow-md transition-all hover:opacity-90"
                      style={{ backgroundColor: '#FF5757' }}
                    >
                      <span>Explore Solutions</span>
                      <ArrowRight size={14} />
                    </Link>

                    <Link
                      href="/resources/reports"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-bold text-xs uppercase tracking-wider border border-slate-300 text-slate-700 transition-all hover:bg-slate-50 hover:text-slate-900"
                    >
                      <span>Read Research Reports</span>
                    </Link>
                  </div>
                </div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Header */}
                  <div className="mb-2">
                    <h2 className="text-xl font-bold tracking-tight text-[#0B1F3A]">
                      Book a Demo
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Fields marked with <span className="text-[#FF5757]">*</span> are required
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg border text-sm font-medium bg-red-50 text-red-700 border-red-200">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        First Name <span className="text-[#FF5757]">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Jane"
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Last Name <span className="text-[#FF5757]">*</span>
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Email & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Work Email <span className="text-[#FF5757]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Company <span className="text-[#FF5757]">*</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Support Goal */}
                  <div className="space-y-1.5">
                    <label htmlFor="supportReason" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      How can 26Sunday support your business? <span className="text-[#FF5757]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="supportReason"
                        name="supportReason"
                        required
                        value={formData.supportReason}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="" disabled>Select your primary goal...</option>
                        {supportOptions.map((opt, idx) => (
                          <option key={idx} value={opt} className="text-slate-900 bg-white">{opt}</option>
                        ))}
                      </select>
                      <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                    </div>
                  </div>

                  {/* Referral Source */}
                  <div className="space-y-1.5">
                    <label htmlFor="referralSource" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      How did you hear about us? <span className="text-[#FF5757]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="referralSource"
                        name="referralSource"
                        required
                        value={formData.referralSource}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="" disabled>Select an option...</option>
                        {referralOptions.map((opt, idx) => (
                          <option key={idx} value={opt} className="text-slate-900 bg-white">{opt}</option>
                        ))}
                      </select>
                      <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-1.5">
                    <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Anything we should know? <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Tell us about your active frameworks (SOC 2, ISO 27001), team size, or timeline..."
                      className={`${inputClass} resize-y`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 px-6 rounded-lg font-bold text-sm uppercase tracking-wider text-white transition-all duration-200 hover:opacity-90 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md shadow-[#FF5757]/20"
                    style={{ backgroundColor: '#FF5757' }}
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Demo Request</span>
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>

                  {/* Privacy */}
                  <p className="text-center text-[11px] text-slate-500 leading-relaxed">
                    By submitting this form you agree to 26Sunday&apos;s{' '}
                    <Link href="/legal/privacy-policy" className="underline underline-offset-2 font-semibold text-slate-700 hover:text-[#FF5757] transition-colors">
                      Privacy Policy
                    </Link>.
                  </p>

                </form>
              )}

            </div>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <Lock size={12} className="text-slate-400" />
                <span>256-bit encryption</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={12} className="text-slate-400" />
                <span>SOC 2 compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={12} className="text-slate-400" />
                <span>4hr response</span>
              </div>
            </div>
          </div>

          {/* ─── RIGHT: Value Proposition & Timeline ─── */}
          <div className="lg:col-span-5 space-y-9 order-1 lg:order-2">

            {/* ── What happens next ── */}
            <div>
              <h2 className="text-xl font-bold text-[#0B1F3A] tracking-tight mb-6">
                What happens after you request a demo?
              </h2>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border"
                    style={{ 
                      backgroundColor: 'rgba(255, 87, 87, 0.08)',
                      borderColor: 'rgba(255, 87, 87, 0.25)',
                      color: '#FF5757' 
                    }}
                  >
                    1
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1F3A]">Tailored 1-on-1 Walkthrough</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      We prepare a personalized demo configured around your tech stack and target compliance standards.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border"
                    style={{ 
                      backgroundColor: 'rgba(255, 87, 87, 0.08)',
                      borderColor: 'rgba(255, 87, 87, 0.25)',
                      color: '#FF5757' 
                    }}
                  >
                    2
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1F3A]">Live AI Questionnaire & Trust Center Test Drive</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      See how 26Sunday answers security questionnaires in seconds and auto-publishes live evidence.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border"
                    style={{ 
                      backgroundColor: 'rgba(11, 31, 58, 0.06)',
                      borderColor: 'rgba(11, 31, 58, 0.15)',
                      color: '#0B1F3A' 
                    }}
                  >
                    3
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1F3A]">SaaS vs. SaaS+ Engagement Plan</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Choose between self-serve platform access or full expert-managed GRC support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-slate-200/80" />

            {/* ── Supported Frameworks ── */}
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">
                Supported Frameworks
              </p>
              <div className="flex flex-wrap gap-2">
                {['SOC 2 Type II', 'ISO 27001', 'ISO 42001', 'NIST AI RMF', 'HIPAA'].map(badge => (
                  <span
                    key={badge}
                    className="px-3 py-1.5 rounded-md text-[11px] font-bold bg-[#FAFAFB] border border-slate-200 text-slate-700 shadow-xs"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Testimonial ── */}
            <div className="p-5 rounded-xl bg-[#FAFAFB] border border-slate-200/90 shadow-xs">
              <p className="text-xs text-slate-700 leading-relaxed italic">
                &ldquo;26Sunday turned our multi-month ISO 42001 audit sprint into a streamlined workflow. We passed with zero major non-conformities.&rdquo;
              </p>
              <p className="text-[11px] text-slate-500 mt-3 font-semibold">
                Head of Information Security, Enterprise AI SaaS
              </p>
            </div>

          </div>

        </div>

      </section>
    </div>
  );
}
