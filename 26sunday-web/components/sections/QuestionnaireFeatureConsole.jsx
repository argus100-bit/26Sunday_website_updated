'use client';

import { useState } from 'react';
import { Sparkles, RefreshCw, ArrowRightLeft, UserCheck, CheckCircle2, Shield, FileText, ArrowRight, Zap, Layers } from 'lucide-react';

export default function QuestionnaireFeatureConsole({ data }) {
  const [activeTab, setActiveTab] = useState(0);
  const items = data.items;

  const tabIcons = [Sparkles, RefreshCw, ArrowRightLeft, UserCheck];

  return (
    <section className="section-pad relative overflow-hidden bg-white" aria-labelledby="questionnaire-features-heading">
      {/* Subtle ambient aura */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(47,111,237,0.12) 0%, transparent 70%)' }}
      />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="inline-block text-xs font-mono font-bold tracking-widest uppercase mb-3 text-[#FF5757]">
            {data.eyebrow}
          </span>
          <h2
            id="questionnaire-features-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
            style={{ color: 'var(--color-primary)' }}
          >
            {data.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            {data.subtext}
          </p>
        </div>

        {/* Interactive Console Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Navigation Rails (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {items.map((item, idx) => {
              const Icon = tabIcons[idx];
              const isActive = activeTab === idx;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 relative border flex flex-col gap-2 group ${
                    isActive
                      ? 'bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-xl translate-x-1 sm:translate-x-2'
                      : 'bg-neutral-50/80 hover:bg-neutral-100/90 text-neutral-700 border-neutral-200/80'
                  }`}
                >
                  {/* Top Meta Line */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                          isActive
                            ? 'bg-[#FF5757] text-white'
                            : 'bg-neutral-200 text-neutral-600 group-hover:bg-neutral-300'
                        }`}
                      >
                        <Icon size={14} />
                      </div>
                      <span className={`font-mono text-[11px] font-bold tracking-wider uppercase ${
                        isActive ? 'text-neutral-300' : 'text-neutral-400'
                      }`}>
                        PILLAR // {item.tag}
                      </span>
                    </div>

                    <span className={`font-mono text-xs font-semibold ${
                      isActive ? 'text-neutral-400' : 'text-neutral-400'
                    }`}>
                      [ {item.index} ]
                    </span>
                  </div>

                  {/* Title */}
                  <div className={`text-base sm:text-lg font-bold tracking-tight mt-1 ${
                    isActive ? 'text-white' : 'text-[#0B1F3A]'
                  }`}>
                    {item.title}
                  </div>

                  {/* Short snippet preview */}
                  <p className={`text-xs line-clamp-2 leading-relaxed ${
                    isActive ? 'text-neutral-300' : 'text-neutral-500'
                  }`}>
                    {item.body}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Live Operational Simulation Showcase (7 Cols) */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div 
              className="rounded-3xl border border-neutral-200/90 p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden"
              style={{ backgroundColor: '#FAF8F5' }}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-neutral-200/80 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5757] animate-pulse" />
                  <span className="font-mono text-xs font-bold text-[#0B1F3A] uppercase tracking-wider">
                    {items[activeTab].title}
                  </span>
                </div>
                <span className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-neutral-200/70 text-neutral-700 font-semibold">
                  LIVE SYSTEM VIEW
                </span>
              </div>

              {/* Detailed Narrative Body */}
              <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal mb-8">
                {items[activeTab].body}
              </p>

              {/* Dynamic Interactive Capability Simulation Card */}
              <div className="rounded-2xl bg-white border border-neutral-200 p-5 sm:p-6 shadow-sm">
                {/* TAB 0: Auto-Fill Engine Simulation */}
                {activeTab === 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pb-2 border-b border-neutral-100">
                      <span>INBOUND VENDOR QUESTION</span>
                      <span className="text-emerald-600 font-bold flex items-center gap-1">
                        <CheckCircle2 size={13} /> 99.4% AI CONFIDENCE
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/70 text-xs sm:text-sm font-medium text-neutral-800">
                      &ldquo;Does your platform enforce multi-factor authentication (MFA) for all production environment access?&rdquo;
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                      <span className="text-[#FF5757]">SOURCE:</span>
                      <span className="bg-neutral-100 px-2 py-0.5 rounded text-neutral-700">Access_Control_Policy_2026.pdf §3.2</span>
                      <span className="bg-neutral-100 px-2 py-0.5 rounded text-neutral-700">SOC2_Type_II.pdf</span>
                    </div>
                    <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                      <span className="font-bold text-[#0B1F3A] block mb-1">AI-Drafted Response:</span>
                      Yes, 26Sunday enforces hardware-backed multi-factor authentication (MFA) for all administrative and production access. Sessions expire automatically and require cryptographic re-authentication.
                    </div>
                    <div className="flex items-center justify-between pt-2 text-xs font-mono text-neutral-500">
                      <span>STATUS: READY FOR QA APPROVAL</span>
                      <span className="text-[#FF5757] font-bold">1-CLICK ACCEPT →</span>
                    </div>
                  </div>
                )}

                {/* TAB 1: Ecosystem Context Sync Simulation */}
                {activeTab === 1 && (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pb-2 border-b border-neutral-100">
                      <span>26SUNDAY UNIFIED DATA GRAPH</span>
                      <span className="text-blue-600 font-bold flex items-center gap-1">
                        <RefreshCw size={13} className="animate-spin" style={{ animationDuration: '6s' }} /> 0ms LATENCY SYNC
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                      <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70">
                        <div className="font-mono text-[10px] text-neutral-400 uppercase">Trust Center</div>
                        <div className="font-bold text-xs text-[#0B1F3A] mt-1">42 Live Policies</div>
                      </div>
                      <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70">
                        <div className="font-mono text-[10px] text-neutral-400 uppercase">Questionnaire</div>
                        <div className="font-bold text-xs text-[#0B1F3A] mt-1">480+ Answers</div>
                      </div>
                      <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70">
                        <div className="font-mono text-[10px] text-neutral-400 uppercase">Status Page</div>
                        <div className="font-bold text-xs text-emerald-600 mt-1">99.99% Uptime</div>
                      </div>
                      <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70">
                        <div className="font-mono text-[10px] text-neutral-400 uppercase">Readiness</div>
                        <div className="font-bold text-xs text-[#0B1F3A] mt-1">SOC 2 / ISO Ready</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0B1F3A] text-white flex items-center justify-between">
                      <div>
                        <div className="font-mono text-[10px] uppercase text-neutral-300 tracking-wider">COMPOSITE TRUST METRIC</div>
                        <div className="text-lg font-extrabold tracking-tight mt-0.5">Trust Health Score: 98.4 / 100</div>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold border border-emerald-400/30">
                        OPTIMAL POSTURE
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: Two-Way Gateway Simulation */}
                {activeTab === 2 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pb-2 border-b border-neutral-100">
                      <span>CUSTOMER PORTAL HANDOFF</span>
                      <span className="text-[#0B1F3A] font-bold">ROUTE: DIRECT GATEWAY</span>
                    </div>

                    <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-[#0B1F3A]">Acme Corp — Security Review</span>
                        <span className="px-2 py-0.5 rounded bg-red-100 text-[#FF5757] font-bold text-[10px]">P1 · HIGH PRIORITY</span>
                      </div>
                      <p className="text-xs text-neutral-600">
                        Submitted via Trust Center portal with 12 custom enterprise questionnaires.
                      </p>
                      <div className="flex items-center gap-4 text-[11px] font-mono text-neutral-500 pt-1">
                        <span>ASSIGNEE: Security Lead</span>
                        <span>STATUS: In Progress (11/12 Complete)</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100 flex items-center justify-between text-xs font-medium text-neutral-700">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-600" />
                        In-App Audit Trail Preserved with Client
                      </span>
                      <span className="font-mono text-[#0B1F3A] font-bold">ACTIVE THREAD</span>
                    </div>
                  </div>
                )}

                {/* TAB 3: SaaS+ Heavy Lifting Simulation */}
                {activeTab === 3 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pb-2 border-b border-neutral-100">
                      <span>CERTIFIED ANALYST CO-PILOT</span>
                      <span className="text-[#FF5757] font-bold flex items-center gap-1">
                        <Shield size={13} /> 26SUNDAY SAAS+
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0B1F3A] text-white flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-sm">
                          GRC
                        </div>
                        <div>
                          <div className="text-sm font-bold">Assigned Senior Compliance Analyst</div>
                          <div className="text-xs text-neutral-300">Reviewed 52/52 Questions • Attached Evidence</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/30">
                        VERIFIED
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 flex items-center justify-between">
                      <span>Your Action Required:</span>
                      <span className="font-bold text-[#0B1F3A] bg-neutral-200 px-2.5 py-1 rounded">
                        1-Click Approval & Send
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Highlight list */}
              <div className="mt-6 pt-5 border-t border-neutral-200/80 flex flex-wrap gap-2.5">
                {items[activeTab].highlights.map((h, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-semibold text-neutral-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5757]" />
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
