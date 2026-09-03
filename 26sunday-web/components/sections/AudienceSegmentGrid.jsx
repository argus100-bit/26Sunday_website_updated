'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  Zap, 
  Clock, 
  Lock,
  Activity,
  Check
} from 'lucide-react';
import DotMatrix from '@/components/ui/DotMatrix';

/**
 * AudienceSegmentGrid — Scroll-driven + tab-interactive persona showcase for 26Sunday
 * @param {Object} props
 * @param {string} [props.heading]
 * @param {Array<{audience: string, body: string}>} props.segments
 */
export default function AudienceSegmentGrid({ 
  heading = '26Sunday is for everyone.', 
  segments = [] 
}) {
  const sectionRef = useRef(null);
  const isManualOverrideRef = useRef(false);
  const overrideTimerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollRatio, setScrollRatio] = useState(0);

  // Fallback defaults if segments prop is empty
  const defaultSegments = [
    {
      audience: 'AI startups chasing ISO 42001 / NIST AI RMF',
      body: 'Chasing ISO 42001 or any new assurance needed for compliance? 26Sunday turns a daunting compliance sprint into a guided, weeks-long walk. We map every required control, auto-detect gaps, and provide auditor-approved evidence templates.',
    },
    {
      audience: 'SaaS companies drowning in security questionnaires',
      body: "Every unanswered questionnaire is a delayed signature. Every manual response burns engineering hours you don't have. 26Sunday turns that chaos into a structured workflow with automated knowledge base mapping.",
    },
    {
      audience: 'Companies managing SOC 2, HIPAA, and beyond',
      body: 'Companies juggling SOC 2, HIPAA, and many more often get blindsided by expired certificates or drifted controls. 26Sunday sends automated expiry alerts and flags control changes daily.',
    },
  ];

  const items = segments.length > 0 ? segments : defaultSegments;

  const segmentConfig = [
    {
      badge: 'AI & Machine Learning',
      shortTitle: 'AI Compliance',
      icon: Cpu,
      color: '#FF5757', // Accent Coral Red
      glow: 'rgba(255, 87, 87, 0.12)',
      bgSoft: 'rgba(255, 87, 87, 0.08)',
      tags: ['ISO 42001', 'NIST AI RMF', 'Auto-Gap Check', 'Model Safety'],
      metric: '10x',
      metricLabel: 'Faster AI Audit Prep',
      demoTitle: 'ISO 42001 AI Risk Control Map',
      features: [
        'Pre-mapped AI Risk Management controls',
        'Auditor-approved evidence templates',
        'Automated model drift detection',
      ],
    },
    {
      badge: 'High-Growth SaaS',
      shortTitle: 'Questionnaire Automation',
      icon: Zap,
      color: '#2F6FED', // Brand Accent Blue
      glow: 'rgba(47, 111, 237, 0.12)',
      bgSoft: 'rgba(47, 111, 237, 0.08)',
      tags: ['AI Auto-Fill', 'Knowledge Base', 'Instant Drafts', 'Review Flow'],
      metric: '90%',
      metricLabel: 'Questionnaire Time Saved',
      demoTitle: 'AI Questionnaire Engine',
      features: [
        'Auto-extracts vendor questions from PDF/XLSX',
        'Matches against verified security knowledge base',
        'Delivers 95%+ confidence draft answers in seconds',
      ],
    },
    {
      badge: 'Multi-Framework Enterprise',
      shortTitle: 'Continuous Compliance',
      icon: ShieldCheck,
      color: '#10B981', // Emerald Success
      glow: 'rgba(16, 185, 129, 0.12)',
      bgSoft: 'rgba(16, 185, 129, 0.08)',
      tags: ['SOC 2 Type II', 'HIPAA', 'ISO 27001', 'Expiry Alerts'],
      metric: '100%',
      metricLabel: 'Continuous Control Visibility',
      demoTitle: 'Unified Trust Health Radar',
      features: [
        'Automated expiry alerts weeks before renewal',
        'Daily control drift monitoring & alerts',
        'Centralized audit history & auditor portal',
      ],
    },
  ];

  // Scroll listener to activate tabs smoothly as user scrolls through section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      // Progress from 0.0 to 1.0 within section
      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable));
      setScrollRatio(progress);

      // Synchronous ref check prevents 1-frame scroll event race condition flickering
      if (!isManualOverrideRef.current) {
        if (progress < 0.33) {
          setActiveIndex(0);
        } else if (progress < 0.66) {
          setActiveIndex(1);
        } else {
          setActiveIndex(2);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click tab navigation handler with zero-latency ref locking
  const handleTabClick = (idx) => {
    isManualOverrideRef.current = true;
    setActiveIndex(idx);

    if (overrideTimerRef.current) {
      clearTimeout(overrideTimerRef.current);
    }

    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = sectionRef.current.offsetHeight - windowHeight;
      const targetProgress = idx === 0 ? 0.1 : idx === 1 ? 0.5 : 0.9;
      const targetY = window.scrollY + rect.top + totalScrollable * targetProgress;
      
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }

    // Reset manual override after smooth scroll completes
    overrideTimerRef.current = setTimeout(() => {
      isManualOverrideRef.current = false;
    }, 900);
  };

  const activeSegment = items[activeIndex] || items[0];
  const activeMeta = segmentConfig[activeIndex % segmentConfig.length];
  const ActiveIcon = activeMeta.icon;

  return (
    <section 
      ref={sectionRef}
      className="relative"
      style={{ 
        minHeight: '230vh',
        backgroundColor: '#FAF7F2' 
      }}
      aria-labelledby="audience-heading"
    >
      {/* Sticky Viewport Container fit cleanly in one view without height cutoff */}
      <div className="sticky top-12 sm:top-16 min-h-[calc(100vh-4rem)] flex flex-col justify-center px-4 py-6 overflow-hidden">
        <DotMatrix variant="accent" spacing={32} dotSize={1} opacity={0.06} fade="center-fade" />
        
        {/* Dynamic Background Ambient Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] rounded-full pointer-events-none transition-all duration-700 blur-3xl opacity-50"
          style={{ background: activeMeta.glow }}
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            {/* Liquid Fill Badge: Dual-Layer Masked Text Contrast for 100% Legibility */}
            <div 
              className="relative overflow-hidden inline-flex items-center px-5 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 border shadow-sm select-none"
              style={{ 
                backgroundColor: '#FAF7F2',
                borderColor: 'rgba(11, 31, 58, 0.3)',
              }}
            >
              {/* 1. Base Text Layer: Navy Blue text visible on unfilled light background */}
              <span className="font-bold tracking-widest text-[#0B1F3A]">
                Built for Every Stage
              </span>

              {/* 2. Liquid Navy Fill Container (Clips White Text Layer) */}
              {(() => {
                let fillPct = 33;
                if (activeIndex === 1) {
                  fillPct = Math.round(66 + (scrollRatio - 0.33) * 50);
                  fillPct = Math.max(66, Math.min(85, fillPct));
                } else if (activeIndex === 2) {
                  fillPct = 100;
                } else {
                  fillPct = Math.round(33 + scrollRatio * 50);
                  fillPct = Math.max(33, Math.min(55, fillPct));
                }

                return (
                  <div
                    className="absolute top-0 left-0 bottom-0 rounded-full transition-all duration-500 ease-out overflow-hidden flex items-center px-5"
                    style={{
                      width: fillPct >= 98 ? '100%' : `${fillPct}%`,
                      right: fillPct >= 98 ? 0 : 'auto',
                      background: 'linear-gradient(110deg, #0B1F3A 0%, #153560 50%, #245293 85%, #0D264A 100%)',
                      boxShadow: '0 4px 18px rgba(11, 31, 58, 0.45)',
                      transitionTimingFunction: 'cubic-bezier(0.34, 1.25, 0.64, 1)',
                    }}
                  >
                    {/* Metallic Mirror Glass Glare Streak */}
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.1) 45%, transparent 70%)',
                      }}
                    />

                    {/* Liquid Wave Crest Leading Edge */}
                    {fillPct < 98 && (
                      <div 
                        className="absolute top-0 right-0 bottom-0 w-3 bg-white/45 blur-[1px]" 
                        style={{ borderRadius: '0 9999px 9999px 0' }}
                      />
                    )}

                    {/* White Text Layer (Only visible over filled liquid area) */}
                    <span 
                      className="font-bold tracking-widest text-white whitespace-nowrap"
                      style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}
                    >
                      Built for Every Stage
                    </span>
                  </div>
                );
              })()}
            </div>

            <h2 
              id="audience-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2"
              style={{ color: 'var(--color-primary)' }}
            >
              {heading}
            </h2>

            <p 
              className="text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed"
              style={{ color: 'var(--color-neutral-600)' }}
            >
              Whether you are launching your first AI product or managing multi-framework compliance across global teams, 26Sunday scales seamlessly with you.
            </p>
          </div>

          {/* Tab Navigation Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6">
            {items.map((seg, idx) => {
              const meta = segmentConfig[idx % segmentConfig.length];
              const IconComponent = meta.icon;
              const isActive = idx === activeIndex;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleTabClick(idx)}
                  className="relative text-left p-3.5 sm:p-4 rounded-xl border overflow-hidden transition-all duration-300 select-none"
                  style={{
                    backgroundColor: isActive ? 'var(--color-white)' : 'rgba(255, 255, 255, 0.65)',
                    borderColor: isActive ? meta.color : 'var(--color-neutral-200)',
                    boxShadow: isActive ? `0 4px 14px ${meta.glow}` : 'none',
                    opacity: isActive ? 1 : 0.82,
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                      style={{ 
                        backgroundColor: isActive ? meta.bgSoft : 'var(--color-neutral-100)',
                        color: meta.color
                      }}
                    >
                      <IconComponent size={18} />
                    </div>
                    <div className="relative">
                      <span 
                        className="text-[10px] font-bold uppercase tracking-wider block"
                        style={{ color: meta.color }}
                      >
                        {meta.badge}
                      </span>
                      <div className="relative inline-block">
                        <span 
                          className="font-bold text-xs sm:text-sm line-clamp-1 transition-colors duration-300"
                          style={{ color: isActive ? 'var(--color-primary)' : 'var(--color-neutral-700)' }}
                        >
                          {meta.shortTitle}
                        </span>

                        {/* Subtle Permanent Sketch Underline with Smooth Opacity Transition */}
                        <svg 
                          className="absolute -bottom-1 left-0 w-full h-1.5 pointer-events-none transition-opacity duration-300" 
                          viewBox="0 0 100 6" 
                          preserveAspectRatio="none" 
                          fill="none"
                          style={{ opacity: isActive ? 0.85 : 0 }}
                        >
                          <path 
                            d="M 1 3 Q 25 1, 50 3.5 T 99 2.5" 
                            stroke={meta.color} 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feature Showcase Card — Sized compactly so all tags fit on one page without cutoff */}
          <div 
            className="rounded-2xl border p-5 sm:p-7 shadow-xl transition-all duration-500 max-h-[75vh] overflow-y-auto"
            style={{ 
              backgroundColor: 'var(--color-white)',
              borderColor: 'var(--color-neutral-200)'
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Info Column */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span 
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: activeMeta.bgSoft, color: activeMeta.color }}
                  >
                    <ActiveIcon size={16} />
                  </span>
                  <span className="text-xs font-bold tracking-wider uppercase text-neutral-500">
                    {activeMeta.badge}
                  </span>
                </div>

                <div>
                  <h3 
                    className="text-xl sm:text-2xl font-bold tracking-tight mb-2"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {activeSegment.audience}
                  </h3>
                  <p 
                    className="text-xs sm:text-sm leading-relaxed"
                    style={{ color: 'var(--color-neutral-600)' }}
                  >
                    {activeSegment.body}
                  </p>
                </div>

                {/* Metric Strip */}
                <div 
                  className="flex items-center gap-3.5 p-3 rounded-lg border"
                  style={{ 
                    backgroundColor: activeMeta.bgSoft,
                    borderColor: 'rgba(0,0,0,0.04)'
                  }}
                >
                  <div 
                    className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                    style={{ color: activeMeta.color }}
                  >
                    {activeMeta.metric}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-800">
                      {activeMeta.metricLabel}
                    </div>
                    <div className="text-[11px] text-neutral-500">
                      Verified outcome for 26Sunday customers
                    </div>
                  </div>
                </div>

                {/* Features Bullet List */}
                <ul className="space-y-1.5 pt-1">
                  {activeMeta.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                      <CheckCircle2 
                        size={15} 
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: activeMeta.color }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags including Model Safety */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeMeta.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md border"
                      style={{
                        backgroundColor: 'var(--color-neutral-100)',
                        borderColor: 'var(--color-neutral-200)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Interactive Mockup Column */}
              <div className="lg:col-span-6">
                <div 
                  className="rounded-xl border p-4 shadow-sm relative overflow-hidden transition-all duration-300"
                  style={{
                    backgroundColor: '#FAF7F2',
                    borderColor: 'var(--color-neutral-200)'
                  }}
                >
                  {/* Mockup Header Bar */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <span className="ml-2 text-xs font-mono font-semibold text-neutral-600">
                        {activeMeta.demoTitle}
                      </span>
                    </div>
                    <span 
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                      style={{ backgroundColor: activeMeta.bgSoft, color: activeMeta.color }}
                    >
                      Live Preview
                    </span>
                  </div>

                  {/* Mockup Dynamic Panels */}
                  {activeIndex === 0 && (
                    <div className="space-y-2.5">
                      <div className="bg-white p-3 rounded-lg border border-neutral-200 shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded bg-red-50 text-red-500 flex items-center justify-center">
                            <Cpu size={16} />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-neutral-800">ISO 42001 Standard Control A.6.2</div>
                            <div className="text-[10px] text-neutral-500">AI Model Transparency & Lineage</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full flex items-center gap-1">
                          <Check size={11} /> Auto-Mapped
                        </span>
                      </div>

                      <div className="bg-white p-3 rounded-lg border border-neutral-200 shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded bg-red-50 text-red-500 flex items-center justify-center">
                            <Lock size={16} />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-neutral-800">NIST AI RMF 1.0 (GOVERN 2.1)</div>
                            <div className="text-[10px] text-neutral-500">AI Risk Assessment & Model Safety</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full flex items-center gap-1">
                          <Check size={11} /> Evidence Attached
                        </span>
                      </div>

                      <div className="bg-white p-2.5 rounded-lg border border-red-200 bg-red-50/50 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Sparkles size={13} className="text-red-500" />
                          <span className="text-[11px] font-medium text-red-800">Gap detected: 1 policy update recommended</span>
                        </div>
                        <button className="text-[10px] font-bold px-2 py-0.5 bg-red-600 text-white rounded">
                          Auto-Fix
                        </button>
                      </div>
                    </div>
                  )}

                  {activeIndex === 1 && (
                    <div className="space-y-2.5">
                      <div className="bg-white p-3 rounded-lg border border-neutral-200 shadow-sm">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[11px] font-bold text-neutral-700">Vendor Question #42</span>
                          <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded">
                            98% AI Match
                          </span>
                        </div>
                        <p className="text-xs font-medium text-neutral-900 mb-1.5">
                          &quot;How is customer data encrypted both in transit and at rest?&quot;
                        </p>
                        <div className="p-2 rounded bg-neutral-50 border border-neutral-200 text-[11px] text-neutral-700 font-mono leading-relaxed">
                          Data in transit is encrypted using TLS 1.3. Data at rest is encrypted with AES-256 via KMS managed keys...
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-neutral-200 shadow-sm">
                        <div className="flex items-center gap-1.5 text-xs text-neutral-600 font-medium">
                          <Zap size={14} className="text-indigo-600" />
                          <span>Draft ready in 1.2s</span>
                        </div>
                        <button className="text-[10px] font-bold px-2.5 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                          Approve & Send
                        </button>
                      </div>
                    </div>
                  )}

                  {activeIndex === 2 && (
                    <div className="space-y-2.5">
                      <div className="bg-white p-3 rounded-lg border border-neutral-200 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5">
                            <Activity size={15} className="text-emerald-600" />
                            <span className="text-xs font-bold text-neutral-800">Trust Posture Status</span>
                          </div>
                          <span className="text-xs font-mono font-bold text-emerald-600">99.8% Healthy</span>
                        </div>

                        <div className="space-y-1.5 mt-2">
                          <div className="flex items-center justify-between text-xs p-1.5 rounded bg-neutral-50 border border-neutral-100">
                            <span className="font-semibold text-neutral-700">SOC 2 Type II Report</span>
                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              Active
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-xs p-1.5 rounded bg-neutral-50 border border-neutral-100">
                            <span className="font-semibold text-neutral-700">ISO 27001 Certification</span>
                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              Active
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-xs p-1.5 rounded bg-amber-50 border border-amber-200">
                            <span className="font-semibold text-amber-900 flex items-center gap-1">
                              <Clock size={12} /> HIPAA Assessment
                            </span>
                            <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded">
                              Auto Alert (45d)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
