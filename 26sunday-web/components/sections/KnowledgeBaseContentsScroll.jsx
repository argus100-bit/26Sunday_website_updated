'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import {
  FileText,
  ShieldCheck,
  MessageSquareQuote,
  Database,
  GitMerge,
  ChevronRight,
} from 'lucide-react';

function WrenchSettings({ size = 22, className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Gear / Settings (top-left) */}
      <circle cx="7.5" cy="7.5" r="2.5" />
      <path d="M7.5 2v2M2 7.5h2M3.6 3.6l1.4 1.4M3.6 11.4l1.4-1.4M7.5 13v-1.5" />

      {/* Wrench (crossing diagonally) */}
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
    </svg>
  );
}

const layers = [
  {
    id: 'policies',
    title: 'Policies & Procedures',
    accent: '#FF5757',
    icon: FileText,
    lead: 'Your operational rulebook:\nAccess control standards, data retention rules, incident response plans, and acceptable use policies.',
    includes: [
      'Information Security Policies',
      'Data Retention & Disposal Rules',
      'Incident Response Plans',
      'Acceptable Use Policies',
    ],
    inAction: 'When a prospect asks "Do you have a policy for encryption at rest?", AI locates the exact paragraph in your Data Protection Policy and drafts a cited answer — no searching, no copy-pasting.',
  },
  {
    id: 'certificates',
    title: 'Compliance Certificates',
    accent: '#5CE1E6',
    icon: ShieldCheck,
    lead: 'Third-party auditor reports and attestations:\nSOC 2 Type 2, ISO 27001, penetration test summaries, and DPA packs.',
    includes: [
      'SOC 2 Type 2 Reports',
      'ISO 27001 & ISO 42001 Certificates',
      'Penetration Test Summaries',
      'GDPR / CCPA / DPA Packs',
    ],
    inAction: 'When a buyer signs an NDA on your Trust Center, the relevant certificates are automatically watermarked and shared through a secure, time-limited access link.',
  },
  {
    id: 'qa',
    title: 'Historical Q&A Vault',
    accent: '#FFBD59',
    icon: MessageSquareQuote,
    lead: 'Every question your security and compliance leaders have answered and approved:\nAcross SIG, CAIQ, VSA, and custom enterprise questionnaires.',
    includes: [
      'Completed Questionnaire Archives',
      'Expert-Approved Responses',
      'Custom Concessions & SLAs',
      'Freshness Timestamps',
    ],
    inAction: 'New questions are matched against your vetted historical answers using semantic search. First drafts are generated instantly — cutting repetitive questionnaire work by 80% or more.',
  },
  {
    id: 'evidence',
    title: 'Control Evidence',
    accent: '#7EB5FF',
    icon: Database,
    lead: 'Technical proof that controls are functioning in production:\nTerraform states, IAM logs, vulnerability scans, and change management records.',
    includes: [
      'Cloud Configuration Exports',
      'Access Control & MFA Proof',
      'System Audit Trails',
      'Vulnerability Scan Reports',
    ],
    inAction: 'During audit season, evidence is automatically packaged into auditor-ready binders. No more frantic screenshot collection across five different tools.',
  },
  {
    id: 'mappings',
    title: 'Framework Mappings',
    accent: '#B8E3D8',
    icon: GitMerge,
    lead: 'The relational graph that connects every internal control to multiple compliance frameworks:\nISO 27001, SOC 2, HIPAA, NIST CSF, and DORA.',
    includes: [
      'Multi-Framework Crosswalks',
      'Unified Control Library',
      'Instant Gap Diagnostics',
      'Regulatory Evolution Sync',
    ],
    inAction: 'Test once, satisfy many. When evidence proves a SOC 2 control, corresponding ISO 27001 and HIPAA requirements are checked off automatically — zero duplicate work.',
  },
  {
    id: 'custom-notes',
    title: 'Custom Notes & Edits',
    accent: '#C084FC',
    icon: WrenchSettings,
    lead: 'Team-specific nuances that generic AI could never know:\nData residency boundaries, subprocessor carve-outs, legal phrasing directives, and roadmap guardrails.',
    includes: [
      'Data Residency Boundaries',
      'Subprocessor Specifics',
      'Legal Phrasing Directives',
      'Roadmap & Beta Disclosures',
    ],
    inAction: 'These notes guarantee every AI-generated response reflects your actual business model. When asked about EU data residency, the system cites your internal engineering note — not a guess.',
  },
];

export default function KnowledgeBaseContentsScroll() {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const activeStepRef = useRef(0);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    let ticking = false;

    // Threshold boundaries with hysteresis buffer (±0.02)
    const thresholds = [0, 0.166, 0.333, 0.500, 0.666, 0.833];
    const hysteresis = 0.02;

    const handleScroll = () => {
      ticking = false;
      if (!containerRef.current || isScrollingRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const clamped = Math.max(0, Math.min(1, currentScroll / totalScrollable));
      const current = activeStepRef.current;

      const stepSize = 1 / 6;
      const buffer = 0.006;
      let newStep = current;

      if (current < 5 && clamped >= (current + 1) * stepSize + buffer) {
        newStep = Math.min(5, Math.floor(clamped * 6));
      } else if (current > 0 && clamped < current * stepSize - buffer) {
        newStep = Math.max(0, Math.floor(clamped * 6));
      }

      if (newStep !== current) {
        activeStepRef.current = newStep;
        setActiveStep(newStep);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const scrollToStep = useCallback((index) => {
    if (!containerRef.current) return;

    // Lock out the scroll handler during programmatic scroll
    isScrollingRef.current = true;
    activeStepRef.current = index;
    setActiveStep(index);

    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const totalScrollable = rect.height - windowHeight;
    const centers = [0.08, 0.25, 0.42, 0.58, 0.75, 0.92];
    const targetY = containerTop + totalScrollable * centers[index];

    window.scrollTo({ top: targetY, behavior: 'smooth' });

    // Release lock after the smooth scroll settles
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 700);
  }, []);

  const current = layers[activeStep];

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: '380vh', backgroundColor: '#050B14' }}
      aria-label="What Lives Inside the Knowledge Base"
    >
      <div className="sticky top-0 h-screen w-full flex items-center pt-16 pb-8 overflow-hidden">

        <div className="container-wide w-full py-6 lg:py-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* ─── Left Column ─── */}
            <div className="lg:col-span-4 flex flex-col">

              {/* Section title */}
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
                style={{ color: '#FF5757' }}
              >
                Inside the Knowledge Base
              </p>
              <h2
                className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.15] mb-8"
                style={{ color: '#FFFFFF' }}
              >
                Layers of Living Memory
              </h2>

              {/* Navigation rail */}
              <nav className="flex flex-col gap-1.5" aria-label="Knowledge Base layers">
                {layers.map((layer, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <button
                      key={layer.id}
                      type="button"
                      onClick={() => scrollToStep(idx)}
                      className="w-full text-left flex items-center gap-3 py-3 px-4 rounded-xl cursor-pointer transition-all duration-200"
                      style={{
                        background: isActive
                          ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)'
                          : 'transparent',
                        border: isActive
                          ? '1px solid rgba(255, 255, 255, 0.08)'
                          : '1px solid transparent',
                        boxShadow: isActive
                          ? 'inset 0 1px 0 rgba(255, 255, 255, 0.12), inset 0 -1px 0 rgba(0, 0, 0, 0.5), 0 3px 8px rgba(0, 0, 0, 0.3)'
                          : 'none',
                      }}
                    >
                      {/* Title */}
                      <span
                        className="text-[13px] sm:text-sm font-semibold tracking-tight transition-colors duration-150"
                        style={{
                          color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.45)',
                          textShadow: isActive ? '0 1px 2px rgba(0,0,0,0.8)' : 'none',
                        }}
                      >
                        {layer.title}
                      </span>

                      {/* Arrow — fades opacity in place, no translateX to avoid text reflow */}
                      <ChevronRight
                        size={14}
                        className="ml-auto flex-shrink-0 transition-opacity duration-150"
                        style={{
                          opacity: isActive ? 1 : 0,
                          color: layer.accent,
                        }}
                      />
                    </button>
                  );
                })}
              </nav>

              {/* Progress — tactile bevel pills */}
              <div className="mt-6 flex items-center gap-1.5">
                {layers.map((l, i) => (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => scrollToStep(i)}
                    className="h-1.5 w-6 rounded-full transition-all duration-200 cursor-pointer"
                    style={{
                      backgroundColor: i === activeStep ? '#FF5757' : 'rgba(255,255,255,0.12)',
                      boxShadow: i === activeStep ? '0 0 6px rgba(255, 87, 87, 0.8), inset 0 1px 0 rgba(255,255,255,0.3)' : 'inset 0 1px 1px rgba(0,0,0,0.5)',
                    }}
                    aria-label={`Go to ${layers[i].title}`}
                  />
                ))}
              </div>
            </div>

            {/* ─── Right Column: Content Card ─── */}
            <div className="lg:col-span-8 relative">

              {/* Neumorphic Box Shell */}
              <div
                className="rounded-3xl p-7 sm:p-9 relative overflow-hidden transition-all duration-300"
                style={{
                  background: 'linear-gradient(145deg, #07101e 0%, #040812 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                  boxShadow: `
                    -14px -14px 30px rgba(255, 255, 255, 0.035),
                    -4px -4px 10px rgba(255, 255, 255, 0.02),
                    16px 16px 36px rgba(0, 0, 0, 0.9),
                    6px 6px 16px rgba(0, 0, 0, 0.75),
                    inset 1px 1px 1px rgba(255, 255, 255, 0.05),
                    inset -1px -1px 2px rgba(0, 0, 0, 0.6)
                  `,
                }}
              >
                {/* Content Stack — only the text & details cross-fade smoothly */}
                <div className="grid grid-cols-1 grid-rows-1">
                  {layers.map((layer, idx) => {
                    const isActive = activeStep === idx;
                    const LIcon = layer.icon;

                    return (
                      <div
                        key={layer.id}
                        className="col-start-1 row-start-1 w-full will-change-transform"
                        style={{
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? 'translateY(0)' : 'translateY(8px)',
                          transition: 'opacity 220ms ease-out, transform 220ms ease-out, visibility 220ms',
                          visibility: isActive ? 'visible' : 'hidden',
                          pointerEvents: isActive ? 'auto' : 'none',
                          zIndex: isActive ? 10 : 0,
                        }}
                      >
                        {/* Header row */}
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{
                              backgroundColor: `${layer.accent}18`,
                              color: layer.accent,
                            }}
                          >
                            <LIcon size={22} />
                          </div>
                          <div>
                            <h3
                              className="text-2xl sm:text-3xl font-bold tracking-tight"
                              style={{ color: '#FFFFFF' }}
                            >
                              {layer.title}
                            </h3>
                          </div>
                        </div>

                        {/* Lead paragraph */}
                        <p
                          className="text-[15px] sm:text-base leading-relaxed mb-8 whitespace-pre-line font-normal"
                          style={{ color: '#FFFFFF' }}
                        >
                          {layer.lead}
                        </p>

                        {/* Two-column layout: What it stores + How it works */}
                        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">

                          {/* What it stores */}
                          <div>
                            <p
                              className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-3"
                              style={{ color: '#FFFFFF' }}
                            >
                              What it stores
                            </p>
                            <ul className="space-y-2.5">
                              {layer.includes.map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                  <span
                                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                                    style={{ backgroundColor: layer.accent }}
                                  />
                                  <span
                                    className="text-[13px] sm:text-sm font-medium leading-snug"
                                    style={{ color: '#FFFFFF' }}
                                  >
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* How it works in practice */}
                          <div>
                            <p
                              className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-3"
                              style={{ color: '#FFFFFF' }}
                            >
                              How it works in practice
                            </p>
                            <p
                              className="text-[13px] sm:text-sm leading-relaxed"
                              style={{ color: '#FFFFFF' }}
                            >
                              {layer.inAction}
                            </p>
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Navigation controls */}
                <div className="mt-8 flex items-center justify-end">
                  <div className="flex items-center gap-4">
                    {activeStep > 0 && (
                      <button
                        type="button"
                        onClick={() => scrollToStep(activeStep - 1)}
                        className="text-xs font-medium transition-colors hover:text-white cursor-pointer"
                        style={{ color: 'rgba(255,255,255,0.4)' }}
                      >
                        ← Previous
                      </button>
                    )}
                    {activeStep < layers.length - 1 && (
                      <button
                        type="button"
                        onClick={() => scrollToStep(activeStep + 1)}
                        className="text-xs font-medium transition-colors hover:text-white cursor-pointer"
                        style={{ color: current.accent }}
                      >
                        Next →
                      </button>
                    )}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
