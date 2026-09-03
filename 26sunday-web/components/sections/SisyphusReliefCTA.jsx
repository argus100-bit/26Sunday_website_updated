'use client';

import { useState, useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';

/**
 * SisyphusReliefCTA — Editorial-quality animated illustration.
 *
 * Default state:  A figure strains to push a heavy boulder up a slope.
 * Hover "Get Started": The boulder rolls away over the crest, and the
 *   figure straightens up with visible relief — arms drop, posture
 *   relaxes, a small "phew" wipe appears.
 *
 * The illustration uses a minimal, warm line-art style that matches
 * the 26Sunday brand palette (navy + coral accent).
 */
export default function SisyphusReliefCTA({
  title = 'Ready to operationalize trust?',
  subtitle = 'Start with the AI-powered platform. Upgrade to SaaS+ anytime.',
  primaryCtaText = 'Get Started',
  primaryCtaHref = '/get-started',
  secondaryCtaText = 'Talk to Sales',
  secondaryCtaHref = '/company/contact',
}) {
  const [isHovered, setIsHovered] = useState(false);
  const svgRef = useRef(null);

  return (
    <section className="platform-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 diagonal-grid pointer-events-none" aria-hidden="true" />

      <div className="container-wide relative z-10 py-20 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ─── Left: Illustration ─── */}
          <div
            className="order-2 lg:order-1 flex justify-center"
            role="img"
            aria-label="Illustration of a person pushing a heavy stone labeled Manual GRC. When hovering over Get Started, the stone rolls away and the person relaxes with relief."
          >
            <div className="relative w-full max-w-xl select-none">
              {/* Canvas container */}
              <div
                className="relative w-full rounded-2xl overflow-hidden transition-all duration-700"
                style={{
                  aspectRatio: '16 / 8',
                  background: isHovered
                    ? 'linear-gradient(145deg, rgba(11,31,58,0.92) 0%, rgba(28,62,110,0.55) 100%)'
                    : 'linear-gradient(145deg, rgba(11,31,58,0.85) 0%, rgba(6,14,26,0.95) 100%)',
                  border: `1px solid ${isHovered ? 'rgba(255,87,87,0.25)' : 'rgba(255,255,255,0.08)'}`,
                  boxShadow: isHovered
                    ? '0 24px 64px rgba(0,0,0,0.4), 0 0 80px rgba(255,87,87,0.08)'
                    : '0 16px 48px rgba(0,0,0,0.35)',
                }}
              >
                <svg
                  ref={svgRef}
                  viewBox="0 0 480 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  style={{ display: 'block' }}
                >
                  <defs>
                    {/* Hill fill */}
                    <linearGradient id="hillFill" x1="0" y1="200" x2="480" y2="60">
                      <stop offset="0%" stopColor="#0f172a" />
                      <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0.6" />
                    </linearGradient>

                    {/* Boulder fill */}
                    <radialGradient id="rockFill" cx="40%" cy="38%" r="55%">
                      <stop offset="0%" stopColor="#475569" />
                      <stop offset="100%" stopColor="#1e293b" />
                    </radialGradient>

                    {/* Skin tone */}
                    <radialGradient id="skinFill" cx="50%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#f5cba7" />
                      <stop offset="100%" stopColor="#e8b48a" />
                    </radialGradient>

                    {/* Ground shadow blur */}
                    <filter id="groundShadow">
                      <feGaussianBlur stdDeviation="3" />
                    </filter>

                    {/* Glow for relief state */}
                    <filter id="warmGlow">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* ──── GROUND / HILL ──── */}
                  {/* Dotted path line (the uphill road) */}
                  <path
                    d="M 10 170 Q 140 168 220 120 Q 290 78 460 65"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="1"
                    strokeDasharray="3 6"
                    fill="none"
                  />

                  {/* Hill surface */}
                  <path
                    d="M -5 210 L -5 170 Q 140 168 220 120 Q 290 78 490 65 L 490 210 Z"
                    fill="url(#hillFill)"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1.2"
                  />

                  {/* Grass / surface texture marks */}
                  <g stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" strokeLinecap="round">
                    <line x1="60" y1="168" x2="68" y2="165" />
                    <line x1="120" y1="155" x2="128" y2="151" />
                    <line x1="180" y1="138" x2="188" y2="133" />
                    <line x1="260" y1="105" x2="268" y2="100" />
                    <line x1="340" y1="82" x2="348" y2="78" />
                    <line x1="400" y1="72" x2="408" y2="69" />
                  </g>

                  {/* ──── SUMMIT MARKER ──── */}
                  <g
                    style={{
                      transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      transform: isHovered ? 'translate(400px, 38px) scale(1)' : 'translate(400px, 38px) scale(0.7)',
                      opacity: isHovered ? 1 : 0.3,
                    }}
                  >
                    {/* Flag pole */}
                    <line x1="0" y1="24" x2="0" y2="-8" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Flag */}
                    <path
                      d="M 0 -8 Q 8 -4 0 0"
                      fill="var(--color-accent)"
                      fillOpacity={isHovered ? 0.9 : 0.4}
                      style={{ transition: 'fill-opacity 0.6s ease' }}
                    />
                    {/* Label */}
                    <text
                      x="0"
                      y="34"
                      textAnchor="middle"
                      fill={isHovered ? '#93c5fd' : 'rgba(255,255,255,0.25)'}
                      fontSize="7"
                      fontWeight="600"
                      fontFamily="var(--font-sans)"
                      letterSpacing="0.8"
                      style={{ transition: 'fill 0.6s ease' }}
                    >
                      AUTOMATED
                    </text>
                  </g>

                  {/* ──── THE BOULDER ──── */}
                  <g
                    style={{
                      transition: 'all 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
                      transform: isHovered
                        ? 'translate(395px, 50px) rotate(380deg) scale(0.75)'
                        : 'translate(160px, 132px) rotate(0deg) scale(1)',
                    }}
                  >
                    {/* Shadow on ground */}
                    <ellipse
                      cx="0" cy="30"
                      rx={isHovered ? '16' : '28'}
                      ry={isHovered ? '4' : '7'}
                      fill="black"
                      fillOpacity="0.3"
                      filter="url(#groundShadow)"
                      style={{ transition: 'all 0.9s ease' }}
                    />

                    {/* Rock body */}
                    <circle cx="0" cy="0" r="26" fill="url(#rockFill)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />

                    {/* Rock cracks / texture */}
                    <path d="M -8 -12 Q 2 -18 12 -8" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.9" />
                    <path d="M -14 4 Q -4 12 8 6" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.9" />
                    <path d="M 4 -18 L 8 -6" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.7" />

                    {/* Label on boulder */}
                    <text
                      x="0"
                      y="3"
                      textAnchor="middle"
                      fill={isHovered ? 'rgba(255,255,255,0.25)' : 'var(--color-accent)'}
                      fontSize="6"
                      fontWeight="700"
                      fontFamily="var(--font-sans)"
                      letterSpacing="0.6"
                      style={{ transition: 'fill 0.5s ease' }}
                    >
                      {isHovered ? '' : 'MANUAL'}
                    </text>
                    <text
                      x="0"
                      y="10"
                      textAnchor="middle"
                      fill={isHovered ? 'rgba(255,255,255,0.25)' : 'var(--color-accent)'}
                      fontSize="6"
                      fontWeight="700"
                      fontFamily="var(--font-sans)"
                      letterSpacing="0.6"
                      style={{ transition: 'fill 0.5s ease' }}
                    >
                      {isHovered ? '' : 'GRC'}
                    </text>
                  </g>

                  {/* ──── THE PERSON ──── */}
                  <g
                    style={{
                      transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
                      transform: isHovered
                        ? 'translate(220px, 100px)'
                        : 'translate(112px, 145px)',
                    }}
                  >
                    {/* Foot shadow */}
                    <ellipse
                      cx="0" cy="28" rx="12" ry="3"
                      fill="black" fillOpacity="0.25"
                      filter="url(#groundShadow)"
                    />

                    {isHovered ? (
                      /* ═══════ RELIEF POSE ═══════ */
                      <g>
                        {/* Legs — standing upright, slightly apart */}
                        <line x1="-5" y1="27" x2="-3" y2="8" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
                        <line x1="5" y1="27" x2="3" y2="8" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />

                        {/* Shoes */}
                        <ellipse cx="-7" cy="28" rx="4" ry="2" fill="#334155" />
                        <ellipse cx="7" cy="28" rx="4" ry="2" fill="#334155" />

                        {/* Torso — upright */}
                        <line x1="0" y1="8" x2="0" y2="-12" stroke="var(--color-accent)" strokeWidth="6" strokeLinecap="round" />

                        {/* Left arm — wiping brow */}
                        <path d="M 0 -6 Q -10 -16 -4 -22" fill="none" stroke="url(#skinFill)" strokeWidth="3.5" strokeLinecap="round" />
                        {/* Hand touching forehead */}
                        <circle cx="-3" cy="-22" r="2" fill="#f5cba7" />

                        {/* Right arm — relaxed at side */}
                        <path d="M 0 -4 Q 8 4 6 12" fill="none" stroke="url(#skinFill)" strokeWidth="3.5" strokeLinecap="round" />

                        {/* Head */}
                        <circle cx="0" cy="-19" r="7.5" fill="url(#skinFill)" />
                        {/* Hair */}
                        <path d="M -6 -22 Q 0 -29 6 -22" fill="#1e293b" stroke="none" />

                        {/* Face — relief expression */}
                        {/* Eyes: happy arcs */}
                        <path d="M -3.5 -19.5 Q -2 -22 -0.5 -19.5" fill="none" stroke="#5b3a1f" strokeWidth="1.1" strokeLinecap="round" />
                        <path d="M 1.5 -19.5 Q 3 -22 4.5 -19.5" fill="none" stroke="#5b3a1f" strokeWidth="1.1" strokeLinecap="round" />
                        {/* Relieved smile */}
                        <path d="M -2 -16 Q 0 -13.5 2 -16" fill="none" stroke="#c0392b" strokeWidth="0.9" strokeLinecap="round" />
                        {/* Rosy cheeks */}
                        <circle cx="-4" cy="-16.5" r="1.5" fill="#e8a090" fillOpacity="0.5" />
                        <circle cx="4" cy="-16.5" r="1.5" fill="#e8a090" fillOpacity="0.5" />

                        {/* Sweat drop (wiping away) */}
                        <g style={{ animation: 'sweatDrop 1.5s ease-out infinite' }}>
                          <path d="M -8 -26 Q -7 -30 -6 -26 Q -7 -24 -8 -26" fill="#93c5fd" fillOpacity="0.6" />
                        </g>

                        {/* Small relief text — subtle, not emoji-heavy */}
                        <text
                          x="16"
                          y="-24"
                          fill="rgba(255,255,255,0.5)"
                          fontSize="8"
                          fontFamily="var(--font-sans)"
                          fontWeight="500"
                          fontStyle="italic"
                        >
                          phew.
                        </text>
                      </g>
                    ) : (
                      /* ═══════ PUSHING / STRAINING POSE ═══════ */
                      <g>
                        {/* Legs — braced, back leg extended */}
                        <line x1="-18" y1="24" x2="-6" y2="6" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
                        <line x1="-4" y1="24" x2="-6" y2="6" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />

                        {/* Shoes dug in */}
                        <ellipse cx="-20" cy="25" rx="4" ry="2" fill="#334155" />
                        <ellipse cx="-4" cy="25" rx="4" ry="2" fill="#334155" />

                        {/* Torso — leaning heavily forward ~40° */}
                        <line x1="-6" y1="6" x2="10" y2="-14" stroke="var(--color-accent)" strokeWidth="6" strokeLinecap="round" />

                        {/* Arms — both extended forward, pushing */}
                        <line x1="10" y1="-10" x2="28" y2="-12" stroke="url(#skinFill)" strokeWidth="3.5" strokeLinecap="round" />
                        <line x1="10" y1="-6" x2="26" y2="-6" stroke="url(#skinFill)" strokeWidth="3.5" strokeLinecap="round" />

                        {/* Head — tilted forward with effort */}
                        <g transform="rotate(-20, 14, -18)">
                          <circle cx="14" cy="-18" r="7.5" fill="url(#skinFill)" />
                          {/* Hair */}
                          <path d="M 8 -21 Q 14 -28 20 -21" fill="#1e293b" stroke="none" />
                          {/* Face — strained */}
                          {/* Eyes: determined slants */}
                          <line x1="11" y1="-19" x2="14" y2="-17.5" stroke="#5b3a1f" strokeWidth="1.2" strokeLinecap="round" />
                          <line x1="15.5" y1="-19" x2="18" y2="-17.5" stroke="#5b3a1f" strokeWidth="1.2" strokeLinecap="round" />
                          {/* Tight mouth */}
                          <line x1="12.5" y1="-14.5" x2="16" y2="-14.5" stroke="#8b5e3c" strokeWidth="0.9" strokeLinecap="round" />
                        </g>

                        {/* Sweat drops */}
                        <g>
                          <path
                            d="M 4 -28 Q 5 -32 6 -28 Q 5 -26 4 -28"
                            fill="#7dd3fc"
                            fillOpacity="0.7"
                            style={{ animation: 'sweatFly 2s ease-in-out infinite' }}
                          />
                          <path
                            d="M -2 -24 Q -1 -28 0 -24 Q -1 -22 -2 -24"
                            fill="#7dd3fc"
                            fillOpacity="0.5"
                            style={{ animation: 'sweatFly 2.4s ease-in-out 0.3s infinite' }}
                          />
                        </g>

                        {/* Effort lines radiating from arms */}
                        <g stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" strokeLinecap="round">
                          <line x1="30" y1="-14" x2="35" y2="-16" />
                          <line x1="30" y1="-8" x2="35" y2="-8" />
                          <line x1="28" y1="-2" x2="33" y2="0" />
                        </g>
                      </g>
                    )}
                  </g>

                  {/* ──── AMBIENT PARTICLES (stars / dust) ──── */}
                  <g
                    fill="white"
                    fillOpacity={isHovered ? '0.15' : '0.06'}
                    style={{ transition: 'fill-opacity 0.8s ease' }}
                  >
                    <circle cx="40" cy="25" r="0.8" />
                    <circle cx="100" cy="45" r="0.6" />
                    <circle cx="200" cy="18" r="0.7" />
                    <circle cx="300" cy="30" r="0.5" />
                    <circle cx="350" cy="15" r="0.9" />
                    <circle cx="440" cy="22" r="0.6" />
                    <circle cx="70" cy="80" r="0.5" />
                    <circle cx="420" cy="50" r="0.7" />
                  </g>
                </svg>

                {/* ──── CSS Keyframes (scoped via style tag) ──── */}
                <style>{`
                  @keyframes sweatDrop {
                    0%   { opacity: 0.6; transform: translateY(0); }
                    60%  { opacity: 0.3; transform: translateY(6px); }
                    100% { opacity: 0;   transform: translateY(10px); }
                  }
                  @keyframes sweatFly {
                    0%, 100% { opacity: 0.5; transform: translate(0, 0); }
                    50%      { opacity: 0.8; transform: translate(-3px, -4px); }
                  }
                `}</style>
              </div>
            </div>
          </div>

          {/* ─── Right: Copy + CTA ─── */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4"
              style={{ color: 'white', lineHeight: 1.15 }}
            >
              {title}
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed mb-10 max-w-md mx-auto lg:mx-0"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              {subtitle}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4">
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Button href={primaryCtaHref} variant="primary" size="lg" showArrow>
                  {primaryCtaText}
                </Button>
              </div>
              <Button
                href={secondaryCtaHref}
                size="md"
                className="text-white/70 hover:text-white underline underline-offset-4 decoration-white/15 hover:decoration-white/40"
              >
                {secondaryCtaText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
