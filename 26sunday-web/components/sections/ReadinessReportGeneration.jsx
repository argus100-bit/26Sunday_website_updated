'use client';

import { useState, useEffect } from 'react';
import { FileText, Download, CheckCircle2, Clock, BarChart3, Shield } from 'lucide-react';
import DotMatrix from '@/components/ui/DotMatrix';

/**
 * Report section data for the interactive mockup
 */
const reportSections = [
  {
    num: '01',
    title: 'Executive Summary',
    subtitle: 'Risk Heat Map & Readiness Score',
    pages: 3,
    progress: 100,
    icon: BarChart3,
  },
  {
    num: '02',
    title: 'Gap Analysis Detail',
    subtitle: 'Effort Estimates & Priority Matrix',
    pages: 14,
    progress: 100,
    icon: Shield,
  },
  {
    num: '03',
    title: 'Remediation Roadmap',
    subtitle: 'Owners, Due Dates & Dependencies',
    pages: 6,
    progress: 100,
    icon: Clock,
  },
  {
    num: '04',
    title: 'Evidence Index',
    subtitle: 'Auto Cross-Referenced Source Files',
    pages: 9,
    progress: 100,
    icon: FileText,
  },
];

/**
 * Animated progress ring for the readiness score
 */
function ReadinessScoreRing({ score = 87, size = 72, strokeWidth = 5 }) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedScore(score), 300);
    return () => clearTimeout(timer);
  }, [score]);

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255, 87, 87, 0.1)"
          strokeWidth={strokeWidth}
        />
        {/* Progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#FF5757"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)' }}
        />
      </svg>
      <span
        className="absolute text-base font-extrabold"
        style={{ color: '#FF5757' }}
      >
        {animatedScore}%
      </span>
    </div>
  );
}

/**
 * ReadinessReportGeneration — Interactive report generation showcase section
 */
export default function ReadinessReportGeneration() {
  const [hoveredRow, setHoveredRow] = useState(null);
  const totalPages = reportSections.reduce((sum, s) => sum + s.pages, 0);

  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ backgroundColor: '#FFFFFF' }}
      aria-labelledby="report-generation-heading"
    >
      <DotMatrix variant="light" spacing={30} dotSize={1} opacity={0.06} fade="top-fade" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column — Text Content */}
          <div className="flex flex-col justify-center">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              Report Generation
            </span>

            <h2
              id="report-generation-heading"
              className="font-bold leading-snug"
              style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
            >
              Audit-Ready Reports,{' '}
              <span style={{ color: 'var(--color-accent)' }}>Generated Instantly</span>
            </h2>

            <p
              className="mt-5 text-base sm:text-[16.5px] leading-relaxed"
              style={{ color: 'var(--color-neutral-600)' }}
            >
              Well-structured reports let you review and correct the security summary
              and help auditors understand compliance readiness. 26Sunday generates a
              complete readiness report with gap analysis, remediation plans, and evidence
              cross-references — formatted for your audit firm and board.
            </p>

            {/* Bullet Points */}
            <ul className="mt-8 space-y-4">
              {[
                'Executive Summary with Risk Heat Map and Readiness Score',
                'A comprehensive gap analysis that includes estimates of effort and priority',
                'A remediation roadmap that includes the proprietors, due dates, and dependencies',
                'Evidence index with automatic cross-references to the source files',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span
                    className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span
                    className="text-sm sm:text-[15px] leading-relaxed font-medium"
                    style={{ color: 'var(--color-neutral-700)' }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column — Interactive Report Mockup Widget */}
          <div className="flex items-center justify-center">
            <div
              className="w-full max-w-lg rounded-2xl overflow-hidden"
              style={{
                backgroundColor: '#FAFAFA',
                border: '1px solid rgba(11, 31, 58, 0.08)',
                boxShadow: '0 20px 60px rgba(11, 31, 58, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04)',
              }}
            >
              {/* Report Header */}
              <div
                className="px-6 py-5 flex items-center justify-between"
                style={{
                  background: 'linear-gradient(135deg, #0B1F3A 0%, #132D4F 100%)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(255, 87, 87, 0.2)' }}
                  >
                    <FileText size={18} className="text-[#FF5757]" />
                  </div>
                  <div>
                    <h4
                      className="text-sm sm:text-[15px] font-bold tracking-tight"
                      style={{ color: '#FFFFFF' }}
                    >
                      SOC 2 Readiness Report
                    </h4>
                  </div>
                </div>
              </div>

              {/* Readiness Score Strip */}
              <div
                className="px-6 py-4 flex items-center justify-between border-b"
                style={{ borderColor: 'rgba(11, 31, 58, 0.06)' }}
              >
                <div className="flex items-center gap-4">
                  <ReadinessScoreRing score={87} size={64} strokeWidth={4.5} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-primary)' }}>
                      Readiness Score
                    </p>
                    <p className="text-xs font-semibold mt-0.5" style={{ color: '#4B5563' }}>
                      4 critical gaps · 7 minor findings
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex flex-col items-end gap-1">
                  <span className="text-[22px] font-extrabold" style={{ color: 'var(--color-primary)' }}>
                    {totalPages}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#4B5563' }}>
                    pages
                  </span>
                </div>
              </div>

              {/* Report Sections Table */}
              <div className="px-4 py-3 space-y-1.5">
                {reportSections.map((section, idx) => {
                  const Icon = section.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 cursor-default"
                      style={{
                        backgroundColor: hoveredRow === idx ? 'rgba(255, 87, 87, 0.04)' : 'rgba(255, 255, 255, 0.6)',
                        border: `1px solid ${hoveredRow === idx ? 'rgba(255, 87, 87, 0.12)' : 'rgba(11, 31, 58, 0.04)'}`,
                      }}
                      onMouseEnter={() => setHoveredRow(idx)}
                      onMouseLeave={() => setHoveredRow(null)}
                    >
                      {/* Section Number */}
                      <span
                        className="text-[11px] font-bold w-6 text-center flex-shrink-0"
                        style={{ color: 'var(--color-accent)' }}
                      >
                        {section.num}
                      </span>

                      {/* Icon */}
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                        style={{
                          backgroundColor: hoveredRow === idx ? 'rgba(255, 87, 87, 0.12)' : 'rgba(11, 31, 58, 0.04)',
                        }}
                      >
                        <Icon
                          size={15}
                          style={{ color: hoveredRow === idx ? '#FF5757' : '#0B1F3A' }}
                          className="transition-colors duration-200"
                        />
                      </div>

                      {/* Title + Subtitle */}
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-sm font-semibold truncate"
                          style={{ color: 'var(--color-primary)' }}
                        >
                          {section.title}
                        </p>
                        <p
                          className="text-xs sm:text-[12.5px] truncate mt-0.5 font-medium"
                          style={{ color: '#4B5563' }}
                        >
                          {section.subtitle}
                        </p>
                      </div>

                      {/* Page Count */}
                      <span
                        className="text-xs font-bold flex-shrink-0 hidden sm:block"
                        style={{ color: '#1F2937' }}
                      >
                        {section.pages} pg
                      </span>

                      {/* Status */}
                      <span className="flex items-center gap-1 flex-shrink-0">
                        <CheckCircle2 size={14} className="text-emerald-500" />
                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                          Ready
                        </span>
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <div
                className="px-6 py-4 flex items-center justify-between border-t"
                style={{ borderColor: 'rgba(11, 31, 58, 0.06)' }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold" style={{ color: '#1F2937' }}>
                    Total: {totalPages} pages
                  </span>
                  <span className="text-xs font-bold" style={{ color: '#9CA3AF' }}>·</span>
                  <span className="text-xs font-bold" style={{ color: '#374151' }}>
                    PDF
                  </span>
                  <span className="text-xs font-bold" style={{ color: '#9CA3AF' }}>·</span>
                  <span className="text-xs font-bold" style={{ color: '#374151' }}>
                    Word
                  </span>
                </div>
                <button
                  className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors duration-200 hover:opacity-80"
                  style={{ color: 'var(--color-accent)' }}
                  aria-label="Download readiness report"
                >
                  Download
                  <Download size={13} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
