'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronUp, ChevronDown, Play, Pause, ArrowRight, RotateCw, ShieldCheck, Sparkles } from 'lucide-react';

const lifecycleSteps = [
  {
    step: 1,
    number: '01',
    title: 'Ingest',
    subtitle: 'Upload policies, reports, and historical Q&A',
    description:
      'The wide intake horizon. Multi-format ingestion captures all security policies, SOC 2 reports, ISO 27001 certificates, vendor agreements, and past questionnaire spreadsheets into one unified data basin.',
    tag: 'WIDE INTAKE HORIZON',
    tierLabel: 'INTAKE LEVEL',
    elevationY: 65,
    ringRx: 195,
    ringRy: 28,
  },
  {
    step: 2,
    number: '02',
    title: 'Index',
    subtitle: 'AI reads, tags, and organizes every document',
    description:
      'Gravitational compression. The multi-modal parser shreds, tokenizes, and structures documentation into dense vector embeddings, cross-linking controls across SOC 2, ISO 42001, HIPAA, and NIST.',
    tag: 'SEMANTIC MESHING',
    tierLabel: 'INDEX CONE',
    elevationY: 145,
    ringRx: 125,
    ringRy: 18,
  },
  {
    step: 3,
    number: '03',
    title: 'Retrieve',
    subtitle: 'AI pulls relevant answers for questionnaires and search',
    description:
      'Event horizon synthesis. When questionnaires arrive or prospects search your Trust Center, semantic vector retrieval pinpoints exact policy clauses and auditor proof with zero hallucination.',
    tag: 'EVIDENCE FOCUS',
    tierLabel: 'HORIZON ENTRY',
    elevationY: 220,
    ringRx: 75,
    ringRy: 12,
  },
  {
    step: 4,
    number: '04',
    title: 'Review',
    subtitle: 'Your team validates AI-drafted answers before sending',
    description:
      'The central singularity choke point. Every answer passes through human-in-the-loop governance. Compliance and security leads review, refine, and verify drafted responses with single-click sign-off.',
    tag: 'HUMAN SINGULARITY GATE',
    tierLabel: 'FOCAL CHOKE POINT',
    elevationY: 300,
    ringRx: 24,
    ringRy: 5,
  },
  {
    step: 5,
    number: '05',
    title: 'Learn',
    subtitle: 'Approved answers and edits strengthen your Base',
    description:
      'Downstream expansion. Approved edits and accepted responses are permanently committed back into institutional memory, training the reasoning models and tightening subsequent drafts.',
    tag: 'REINFORCEMENT DISPERSION',
    tierLabel: 'MEMORY EXPANSION',
    elevationY: 380,
    ringRx: 75,
    ringRy: 12,
  },
  {
    step: 6,
    number: '06',
    title: 'Repeat',
    subtitle: 'Each cycle makes the system faster and more accurate',
    description:
      'Closed-loop flywheel. Every completed questionnaire and updated policy reduces future manual overhead, collapsing completion times from weeks to minutes and preserving organizational memory forever.',
    tag: 'CLOSED-LOOP COMPOUNDING',
    tierLabel: 'RECIRCULATION RIM',
    elevationY: 535,
    ringRx: 195,
    ringRy: 28,
  },
];

export default function KnowledgeBaseLifecycle() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef(null);

  const totalSteps = lifecycleSteps.length;

  const nextStep = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % totalSteps);
  }, [totalSteps]);

  const prevStep = useCallback(() => {
    setActiveStep((prev) => (prev - 1 + totalSteps) % totalSteps);
  }, [totalSteps]);

  // Auto-cycle through the lifecycle
  useEffect(() => {
    if (!isAutoPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextStep();
    }, 4200);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, nextStep]);

  const current = lifecycleSteps[activeStep];

  // Mathematical generation of vertical meridian wireframe hyperbolas
  // 13 meridian curves distributed horizontally across the wormhole
  const numMeridians = 13;
  const meridians = Array.from({ length: numMeridians }, (_, i) => {
    const t = i / (numMeridians - 1); // 0 to 1
    const topX = 65 + t * 370; // 65 to 435 at top rim
    const bottomX = topX; // symmetrical at bottom
    // At center y=300, lines pinch tightly into throat
    const throatX = 250 + (t - 0.5) * 26;
    // Sphere entry/exit coordinates (r=100 centered at 250, 300)
    // Approximate sphere intersection heights: y=202 and y=398
    const sphereTopX = 250 + (t - 0.5) * 115;
    const sphereBottomX = sphereTopX;

    const isCenter = i === 6;

    return {
      id: i,
      isCenter,
      // Upper outer white line (y=65 to y=202)
      topPath: isCenter
        ? 'M 250 65 L 250 202'
        : `M ${topX} 65 C ${topX * 0.75 + 250 * 0.25} 120, ${sphereTopX * 0.9 + topX * 0.1} 165, ${sphereTopX} 202`,
      // Inside sphere throat red lines (y=202 through y=300 to y=398)
      throatPath: isCenter
        ? 'M 250 202 L 250 398'
        : `M ${sphereTopX} 202 C ${sphereTopX * 0.4 + throatX * 0.6} 245, ${throatX} 275, ${throatX} 300 C ${throatX} 325, ${sphereBottomX * 0.4 + throatX * 0.6} 355, ${sphereBottomX} 398`,
      // Lower outer white line (y=398 to y=535)
      bottomPath: isCenter
        ? 'M 250 398 L 250 535'
        : `M ${sphereBottomX} 398 C ${sphereBottomX * 0.9 + bottomX * 0.1} 435, ${bottomX * 0.75 + 250 * 0.25} 480, ${bottomX} 535`,
    };
  });

  return (
    <section
      className="py-24 lg:py-32 relative z-10 border-t border-white/[0.08] overflow-hidden"
      style={{ backgroundColor: '#050B14' }}
      aria-labelledby="kb-lifecycle-heading"
    >
      <div className="container-wide">

        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <h2
            id="kb-lifecycle-heading"
            className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.15]"
            style={{
              color: '#FFFFFF',
              WebkitTextStroke: '0.5px #FFFFFF',
            }}
          >
            Knowledge Base Lifecycle
          </h2>
          <p
            className="mt-4 text-[15px] sm:text-base leading-relaxed max-w-2xl font-normal"
            style={{ color: '#FFFFFF' }}
          >
            Information funnels through vector structuring into a verified governance singularity, expanding outward into continuous, self-reinforcing compliance velocity.
          </p>
        </div>

        {/* ─── The Singularity Wormhole Visual Installation (Seamless Canvas) ─── */}
        <div
          className="relative w-full transition-all duration-300"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">

            {/* ─── Left Panel: The Interactive Wireframe Wormhole / Singularity Graphic ─── */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center select-none">
              
              <div className="relative w-full max-w-[460px] aspect-[5/6] flex items-center justify-center">
                
                <svg
                  viewBox="0 0 500 600"
                  className="w-full h-full filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                  fill="none"
                >
                  <defs>
                    {/* Glowing filter for the central red throat lines */}
                    <filter id="coralSingularityGlow" filterUnits="userSpaceOnUse" x="0" y="0" width="500" height="600">
                      <feGaussianBlur stdDeviation="2.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    {/* Active ring coral glow */}
                    <filter id="activeRingGlow" filterUnits="userSpaceOnUse" x="0" y="0" width="500" height="600">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* 1. CENTRAL OBSIDIAN SPHERE (The Singularity / Black Hole Core) */}
                  <circle
                    cx="250"
                    cy="300"
                    r="98"
                    fill="#050810"
                    stroke="rgba(255, 255, 255, 0.12)"
                    strokeWidth="1.5"
                  />
                  {/* Subtle inner shadow rim inside the sphere */}
                  <circle
                    cx="250"
                    cy="300"
                    r="98"
                    fill="radial-gradient(circle at 35% 35%, rgba(255, 87, 87, 0.08) 0%, transparent 70%)"
                  />

                  {/* 2. WIREFRAME MERIDIAN HYPERBOLIC CURVES (Top & Bottom: Crisp White) */}
                  {meridians.map((m) => (
                    <g key={m.id}>
                      {/* Top funnel white lines */}
                      <path
                        d={m.topPath}
                        stroke="rgba(255, 255, 255, 0.72)"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                      />
                      {/* Bottom funnel white lines */}
                      <path
                        d={m.bottomPath}
                        stroke="rgba(255, 255, 255, 0.72)"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                      />
                    </g>
                  ))}

                  {/* 3. CENTRAL THROAT RED CONVERGENCE LINES (Inside Sphere) */}
                  {meridians.map((m) => (
                    <path
                      key={`throat-${m.id}`}
                      d={m.throatPath}
                      stroke="#FF5757"
                      strokeWidth={m.isCenter ? "1.8" : "1.6"}
                      filter="url(#coralSingularityGlow)"
                      strokeLinecap="round"
                      opacity="0.95"
                    />
                  ))}

                  {/* 4. THE 6 LIFECYCLE TIER RINGS (Interactive Horizontal Ellipses) */}
                  {lifecycleSteps.map((stepItem, idx) => {
                    const isActive = activeStep === idx;

                    return (
                      <g
                        key={stepItem.number}
                        onClick={() => setActiveStep(idx)}
                        className="cursor-pointer group"
                      >
                        {/* Interactive hit area */}
                        <ellipse
                          cx="250"
                          cy={stepItem.elevationY}
                          rx={stepItem.ringRx + 8}
                          ry={stepItem.ringRy + 8}
                          fill="transparent"
                          stroke="transparent"
                          strokeWidth="20"
                        />

                        {/* Visible Elliptical Ring */}
                        <ellipse
                          cx="250"
                          cy={stepItem.elevationY}
                          rx={stepItem.ringRx}
                          ry={stepItem.ringRy}
                          stroke={isActive ? '#FF5757' : 'rgba(255, 255, 255, 0.55)'}
                          strokeWidth={isActive ? '2.5' : '1.25'}
                          strokeDasharray={isActive ? 'none' : 'none'}
                          filter={isActive ? 'url(#activeRingGlow)' : 'none'}
                          className="transition-all duration-300"
                        />

                        {/* Active Beacon Pulse on outer right rim */}
                        {isActive && (
                          <g>
                            <circle
                              cx={250 + stepItem.ringRx}
                              cy={stepItem.elevationY}
                              r="4.5"
                              fill="#FFFFFF"
                              stroke="#FF5757"
                              strokeWidth="2"
                            />
                            <circle
                              cx={250 + stepItem.ringRx}
                              cy={stepItem.elevationY}
                              r="8"
                              fill="none"
                              stroke="#FF5757"
                              strokeWidth="1"
                              opacity="0.8"
                              className="animate-ping origin-center"
                            />
                          </g>
                        )}

                        {/* Left edge level tag label */}
                        <text
                          x={250 - stepItem.ringRx - 14}
                          y={stepItem.elevationY + 4}
                          textAnchor="end"
                          fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
                          fontSize="10"
                          fontWeight={isActive ? '700' : '500'}
                          fill={isActive ? '#FF5757' : 'rgba(255, 255, 255, 0.45)'}
                          className="transition-all duration-300"
                        >
                          {stepItem.number}
                        </text>
                      </g>
                    );
                  })}
                </svg>

              </div>

            </div>

            {/* ─── Right Panel: Lifecycle Stage Inspector & Controls ─── */}
            <div className="lg:col-span-6 flex flex-col justify-between">

              <div>
                {/* Stage Tag */}
                <div className="mb-4">
                  <span
                    className="text-xs font-mono font-bold tracking-[0.2em] uppercase"
                    style={{ color: '#FF5757' }}
                  >
                    {current.tag}
                  </span>
                </div>

                {/* Main Heading for Active Stage */}
                <div className="flex items-baseline gap-4 mb-3">
                  <span
                    className="text-4xl sm:text-5xl font-mono font-black"
                    style={{
                      color: '#FFFFFF',
                      WebkitTextStroke: '0.5px #FFFFFF',
                    }}
                  >
                    {current.number}.
                  </span>
                  <h3
                    className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
                    style={{ color: '#FFFFFF' }}
                  >
                    {current.title}
                  </h3>
                </div>

                {/* Core User Directive Subtitle */}
                <p
                  className="text-lg sm:text-xl font-semibold mb-6 leading-snug"
                  style={{ color: '#E2E8F0' }}
                >
                  {current.subtitle}
                </p>

                {/* Deep System Narrative */}
                <p
                  className="text-[15px] sm:text-base leading-relaxed mb-8 max-w-xl font-normal"
                  style={{ color: '#FFFFFF' }}
                >
                  {current.description}
                </p>
              </div>

              {/* ─── Interactive Stepper & Playback Controls (Segmented Timeline Track) ─── */}
              <div className="pt-8 border-t border-white/[0.08] flex flex-col gap-6">

                {/* Segmented Timeline Rail */}
                <div className="grid grid-cols-6 gap-2 sm:gap-3">
                  {lifecycleSteps.map((stepItem, idx) => {
                    const isSelected = activeStep === idx;

                    return (
                      <button
                        key={stepItem.number}
                        type="button"
                        onClick={() => setActiveStep(idx)}
                        className="group text-left cursor-pointer flex flex-col gap-2 py-1 transition-all"
                      >
                        {/* Track Segment Line */}
                        <div
                          className="h-[2px] w-full transition-all duration-300"
                          style={{
                            backgroundColor: isSelected ? '#FF5757' : 'rgba(255, 255, 255, 0.12)',
                            boxShadow: isSelected ? '0 0 8px rgba(255, 87, 87, 0.6)' : 'none',
                          }}
                        />

                        {/* Step Number & Title */}
                        <div className="flex flex-col">
                          <span
                            className="font-mono text-[11px] font-bold transition-colors"
                            style={{
                              color: isSelected ? '#FF5757' : 'rgba(255, 255, 255, 0.35)',
                            }}
                          >
                            {stepItem.number}
                          </span>
                          <span
                            className="text-xs font-semibold truncate transition-colors"
                            style={{
                              color: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
                            }}
                          >
                            {stepItem.title}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Navigation & Playback Controls */}
                <div className="flex items-center justify-between gap-4 pt-1">
                  
                  {/* Auto-cycle toggle */}
                  <button
                    type="button"
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="flex items-center gap-2 text-xs font-mono tracking-wider transition-colors cursor-pointer text-white/50 hover:text-white"
                  >
                    <span className="uppercase text-[11px]">
                      {isAutoPlaying ? 'Auto Cycle' : 'Cycle Paused'}
                    </span>
                    {isAutoPlaying ? (
                      <Pause size={11} className="text-white/40" />
                    ) : (
                      <Play size={11} className="text-white/40" />
                    )}
                  </button>

                  {/* Sleek Prev / Next Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-3 py-1.5 border border-white/10 text-white/70 hover:text-white hover:border-white/25 transition-all text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 cursor-pointer active:translate-y-[1px]"
                      style={{ background: 'rgba(255, 255, 255, 0.02)' }}
                      aria-label="Previous lifecycle stage"
                    >
                      <span>← Prev</span>
                    </button>

                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-4 py-1.5 border border-[#FF5757]/50 text-white transition-all text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 cursor-pointer active:translate-y-[1px]"
                      style={{
                        background: 'linear-gradient(180deg, rgba(255, 87, 87, 0.25) 0%, rgba(255, 87, 87, 0.1) 100%)',
                        boxShadow: '0 0 10px rgba(255, 87, 87, 0.2)',
                      }}
                      aria-label="Next lifecycle stage"
                    >
                      <span>Next →</span>
                    </button>
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
