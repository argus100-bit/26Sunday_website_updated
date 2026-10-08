'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Earth } from 'lucide-react';
import './not-found.css';

/**
 * Custom 404 — Subtle Space Theme
 *
 * Clean, centered layout with a prominent animated "404"
 * featuring a rocket launch animation inside the "0",
 * twinkling starfield, and 26Sunday coral red theme CTA.
 */
export default function NotFound() {
  const canvasRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* ── Starfield canvas ─────────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let stars = [];
    let shootingStars = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    }

    function initStars() {
      stars = [];
      const count = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.2 + 0.2,
          alpha: Math.random(),
          dAlpha: (Math.random() * 0.006 + 0.001) * (Math.random() < 0.5 ? 1 : -1),
        });
      }
    }

    function maybeSpawnShootingStar() {
      if (Math.random() < 0.003 && shootingStars.length < 2) {
        shootingStars.push({
          x: Math.random() * canvas.width * 0.6,
          y: Math.random() * canvas.height * 0.4,
          len: 60 + Math.random() * 80,
          speed: 4 + Math.random() * 4,
          alpha: 1,
          angle: 0.6 + Math.random() * 0.3,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        s.alpha += s.dAlpha;
        if (s.alpha <= 0.05 || s.alpha >= 1) s.dAlpha *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha * 0.55})`;
        ctx.fill();
      }
      maybeSpawnShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.alpha -= 0.012;
        if (ss.alpha <= 0) { shootingStars.splice(i, 1); continue; }
        const tailX = ss.x - Math.cos(ss.angle) * ss.len;
        const tailY = ss.y - Math.sin(ss.angle) * ss.len;
        const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        grad.addColorStop(0, 'rgba(255,255,255,0)');
        grad.addColorStop(1, `rgba(255,255,255,${ss.alpha * 0.6})`);
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="nf-root" id="page-not-found">
      <canvas ref={canvasRef} className="nf-stars" aria-hidden="true" />

      <div className="nf-glow nf-glow--warm" aria-hidden="true" />
      <div className="nf-glow nf-glow--cool" aria-hidden="true" />

      <div className={`nf-content ${mounted ? 'nf-content--visible' : ''}`}>
        {/* ── Prominent "404" with rocket in "0" ──────────── */}
        <div
          className="nf-error-code"
          aria-label="Error 404"
          onMouseEnter={() => setIsLaunching(true)}
          onMouseLeave={() => setIsLaunching(false)}
        >
          <div className={`nf-404-digits ${isLaunching ? 'nf-404-digits--launching' : ''}`}>
            <span className="nf-digit" data-text="4">4</span>

            <span
              className="nf-zero-slot"
              onMouseEnter={() => setIsLaunching(true)}
              onMouseLeave={() => setIsLaunching(false)}
            >
              <span className="nf-digit nf-digit--zero" data-text="0">0</span>

              {/* Rocket stage inside "0" */}
              <div
                className={`nf-zero-rocket-stage ${isLaunching ? 'nf-zero-rocket-stage--launching' : ''}`}
                aria-hidden="true"
              >
                {/* Launch thruster glow */}
                <div className="nf-zero-glow" />

                {/* Rocket ship that lifts off */}
                <div className="nf-rocket-ship">
                  <svg className="nf-rocket-svg" viewBox="0 0 40 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Fuselage */}
                    <path d="M20 4 C14 10, 10 24, 10 40 L10 62 C10 66, 14 68, 20 68 C26 68, 30 66, 30 62 L30 40 C30 24, 26 10, 20 4 Z" fill="#e8edf5" stroke="#94a3b8" strokeWidth="0.8" />
                    {/* Nose cone */}
                    <path d="M20 4 C17 10, 15 18, 14 24 L26 24 C25 18, 23 10, 20 4 Z" fill="#ff5757" />
                    {/* Porthole */}
                    <circle cx="20" cy="34" r="5.5" fill="#0B1F3A" stroke="#38bdf8" strokeWidth="0.8" />
                    <circle cx="20" cy="34" r="3.6" fill="#0284c7" />
                    <ellipse cx="18.2" cy="32.2" rx="1.2" ry="1.6" fill="rgba(255,255,255,0.75)" />
                    {/* Red stripe */}
                    <rect x="13" y="46" width="14" height="3" rx="1" fill="#ff5757" opacity="0.9" />
                    {/* Fins */}
                    <path d="M10 54 L1 68 L1 72 L10 65 Z" fill="#ff5757" />
                    <path d="M30 54 L39 68 L39 72 L30 65 Z" fill="#ff5757" />
                    {/* Center fin */}
                    <rect x="19.2" y="52" width="1.6" height="14" rx="0.8" fill="#94a3b8" opacity="0.6" />
                    {/* Engine nozzle */}
                    <path d="M13 68 L11 76 L29 76 L27 68 Z" fill="#334155" />
                    {/* Multi-layered animated exhaust flames */}
                    <g className="nf-thruster-flames">
                      <path className="nf-flame nf-flame--outer" d="M13 76 C13 76, 17 96, 20 102 C23 96, 27 76, 27 76" fill="#ff5757" opacity="0.85">
                        <animate attributeName="d" values="M13 76 C13 76, 17 96, 20 102 C23 96, 27 76, 27 76;M13 76 C13 76, 16 90, 20 95 C24 90, 27 76, 27 76;M13 76 C13 76, 17 96, 20 102 C23 96, 27 76, 27 76" dur="0.14s" repeatCount="indefinite" />
                      </path>
                      <path className="nf-flame nf-flame--inner" d="M15 76 C15 76, 18 88, 20 94 C22 88, 25 76, 25 76" fill="#fbbf24" opacity="0.95">
                        <animate attributeName="d" values="M15 76 C15 76, 18 88, 20 94 C22 88, 25 76, 25 76;M15 76 C15 76, 17 82, 20 86 C23 82, 25 76, 25 76;M15 76 C15 76, 18 88, 20 94 C22 88, 25 76, 25 76" dur="0.11s" repeatCount="indefinite" />
                      </path>
                      <path className="nf-flame nf-flame--core" d="M17 76 C17 76, 19 83, 20 86 C21 83, 23 76, 23 76" fill="#ffffff">
                        <animate attributeName="d" values="M17 76 C17 76, 19 83, 20 86 C21 83, 23 76, 23 76;M17 76 C17 76, 18.5 80, 20 82 C21.5 80, 23 76, 23 76;M17 76 C17 76, 19 83, 20 86 C21 83, 23 76, 23 76" dur="0.08s" repeatCount="indefinite" />
                      </path>
                    </g>
                  </svg>
                </div>

                {/* Exhaust smoke particles billow downward in the 0 */}
                <div className="nf-exhaust-particles">
                  <span className="nf-smoke nf-smoke--1" />
                  <span className="nf-smoke nf-smoke--2" />
                  <span className="nf-smoke nf-smoke--3" />
                  <span className="nf-smoke nf-smoke--4" />
                  <span className="nf-smoke nf-smoke--5" />
                </div>
              </div>
            </span>

            <span className="nf-digit" data-text="4">4</span>
          </div>

          <div className="nf-error-label">ERROR</div>
          <div className="nf-scanline" aria-hidden="true" />
        </div>

        {/* ── Divider squiggle ────────────────────────────── */}
        <svg className="nf-squiggle" viewBox="0 0 200 12" fill="none" aria-hidden="true">
          <path d="M4 8 C20 2, 36 12, 52 6 C68 0, 84 10, 100 6 C116 2, 132 12, 148 6 C164 0, 180 10, 196 6" stroke="rgba(255,87,87,0.25)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>

        {/* ── Heading — Typewriter Space Computer Vibe ───── */}
        <h1
          className="nf-heading"
          style={{
            fontFamily: "var(--font-space-mono), 'Space Mono', 'Courier Prime', ui-monospace, 'SF Mono', monospace",
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            lineHeight: 1.35,
            textWrap: 'balance',
            maxWidth: '560px',
            transform: 'none',
          }}
        >
          Hmm, you've wandered off the map
          <span className="nf-cursor" aria-hidden="true">_</span>
        </h1>

        {/* ── Mission Log Telemetry Panel ─────────────────── */}
        <div className="nf-telemetry-panel">
          <div className="nf-telemetry-tag">
            <span className="nf-telemetry-label">MISSION LOG // SECTOR 404</span>
          </div>
          <div className="nf-telemetry-content">
            <p className="nf-body-line">
              <span className="nf-line-prefix" aria-hidden="true">&gt;</span>
              <span>This corner of the universe is still uncharted.</span>
            </p>
            <p className="nf-body-line">
              <span className="nf-line-prefix" aria-hidden="true">&gt;</span>
              <span>Don't worry — even astronauts get lost sometimes.</span>
            </p>
          </div>
        </div>

        {/* ── CTA Button in Coral Red Theme ───────────────── */}
        <div className="nf-cta-wrapper">
          <Link
            href="/"
            className="nf-cta"
            id="notfound-home-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.65rem',
              padding: '0.85rem 1.75rem',
              borderRadius: '0px',
              background: isBtnHovered
                ? 'linear-gradient(135deg, rgba(16, 68, 115, 0.95) 0%, rgba(14, 92, 98, 0.92) 45%, rgba(18, 98, 76, 0.95) 100%)'
                : 'linear-gradient(135deg, rgba(12, 48, 86, 0.9) 0%, rgba(13, 72, 80, 0.88) 45%, rgba(15, 78, 64, 0.9) 100%)',
              border: isBtnHovered
                ? '1px solid rgba(94, 234, 212, 0.5)'
                : '1px solid rgba(45, 212, 191, 0.3)',
              color: '#ffffff',
              fontSize: '0.9rem',
              fontWeight: '600',
              letterSpacing: '-0.01em',
              lineHeight: 1,
              cursor: 'pointer',
              textDecoration: 'none',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: isBtnHovered
                ? '0 8px 30px rgba(4, 11, 22, 0.7), 0 0 24px rgba(45, 212, 191, 0.28), 0 0 12px rgba(56, 189, 248, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.25)'
                : '0 4px 20px rgba(4, 11, 22, 0.5), 0 0 16px rgba(17, 94, 89, 0.22), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
              transform: 'none',
              transition: 'background 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={() => {
              setIsLaunching(true);
              setIsBtnHovered(true);
            }}
            onMouseLeave={() => {
              setIsLaunching(false);
              setIsBtnHovered(false);
            }}
            onFocus={() => {
              setIsLaunching(true);
              setIsBtnHovered(true);
            }}
            onBlur={() => {
              setIsLaunching(false);
              setIsBtnHovered(false);
            }}
          >
            <Earth
              className="nf-cta-icon"
              size={16}
              style={{
                stroke: '#ffffff',
                color: '#ffffff',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                pointerEvents: 'none',
                opacity: isBtnHovered ? 1 : 0.95,
                transform: isBtnHovered ? 'scale(1.08) rotate(15deg)' : 'scale(1) rotate(0deg)',
                transition: 'all 0.3s ease',
              }}
              aria-hidden="true"
            />
            <span
              className="nf-cta-label"
              style={{
                color: '#ffffff',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                lineHeight: 1,
                pointerEvents: 'none',
              }}
            >
              Take me home
            </span>
            <svg
              className="nf-cta-arrow"
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              stroke="#ffffff"
              style={{
                stroke: '#ffffff',
                color: '#ffffff',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                pointerEvents: 'none',
                opacity: isBtnHovered ? 1 : 0.95,
                transform: isBtnHovered ? 'translateX(4px)' : 'translateX(0)',
                transition: 'all 0.25s ease',
              }}
              aria-hidden="true"
            >
              <path d="M3 8h10M9 4l4 4-4 4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
