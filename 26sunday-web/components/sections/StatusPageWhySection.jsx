'use client';

import { Activity, ShieldCheck, BellRing, RefreshCw, Mail, Lock } from 'lucide-react';

export default function StatusPageWhySection({ data }) {
  const items = data?.items || [];
  const heading = data?.heading || 'Why 26Sunday Status Page.';
  const subtext = data?.subtext || 'Zero-configuration endpoint monitoring, real-time Trust Health sync, and white-labeled subscriber notifications built for enterprise transparency.';

  const pillarIcons = [Activity, ShieldCheck, BellRing];

  return (
    <section 
      className="section-pad relative bg-[#FAF7F2] border-t border-neutral-300/80 overflow-hidden" 
      aria-labelledby="why-status-page-heading"
    >
      {/* Background Engineering Graph Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(11, 31, 58, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(11, 31, 58, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2
            id="why-status-page-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F3A]"
          >
            {heading}
          </h2>

          <p className="mt-4 text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto font-normal">
            {subtext}
          </p>
        </div>

        {/* Tactical Straight-Line Graph Container */}
        <div className="relative border border-neutral-300/90 bg-white/80 backdrop-blur-md shadow-xs">
          {/* 3-Column Tactical Graph Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200/90">
            {items.map((item, idx) => {
              const Icon = pillarIcons[idx] || Activity;

              return (
                <div
                  key={item.title}
                  className="p-8 sm:p-10 flex flex-col justify-between relative"
                >
                  <div>
                    {/* Top Row: Category Tag & Tactical Icon Pill */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-bold tracking-wider uppercase bg-[#FF5757]/10 text-[#FF5757] px-3 py-1 rounded-none border border-[#FF5757]/20">
                        {item.tag}
                      </span>
                      <div className="w-9 h-9 rounded-none flex items-center justify-center bg-neutral-100 border border-neutral-200 text-[#0B1F3A]">
                        <Icon size={18} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0B1F3A] mb-4 leading-tight">
                      {item.title}
                    </h3>

                    {/* Body Paragraph */}
                    <p className="text-base sm:text-[16.5px] text-neutral-700 leading-relaxed font-normal mb-8">
                      {item.body}
                    </p>
                  </div>

                  {/* Tactical Graph Micro-Interface Visual Widget (Sharp Edges) */}
                  <div className="mt-auto pt-6 border-t border-neutral-200/60 space-y-5">
                    {/* PILLAR 1 SIMULATION: Built-In Endpoint Monitoring (White Coral Red Gradient Glassmorphism) */}
                    {idx === 0 && (
                      <div className="relative rounded-none p-4.5 bg-gradient-to-br from-[#FF5757]/[0.08] via-white/90 to-[#FF5757]/[0.04] backdrop-blur-xl border border-[#FF5757]/25 shadow-xs space-y-3.5 text-xs overflow-hidden">
                        {/* Service Header */}
                        <div className="flex items-center justify-between pb-2 border-b border-[#FF5757]/15 font-mono text-xs">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.4)]" />
                            <span className="text-[#0B1F3A] font-bold text-[13px]">api.production</span>
                          </div>
                          <span className="text-neutral-500 text-xs font-medium">Every 30s</span>
                        </div>

                        {/* Real Endpoint Check Row */}
                        <div className="p-3 rounded-none bg-white/95 backdrop-blur-md border border-[#FF5757]/15 shadow-xs flex items-center justify-between font-mono text-xs">
                          <div className="flex items-center gap-2 truncate">
                            <span className="text-[#FF5757] font-bold text-xs bg-[#FF5757]/10 px-2 py-0.5 border border-[#FF5757]/20">GET</span>
                            <span className="text-[#0B1F3A] font-semibold text-xs truncate">/v1/health</span>
                          </div>
                          <div className="flex items-center gap-2 font-semibold">
                            <span className="text-emerald-700 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-xs font-bold">200 OK</span>
                            <span className="text-neutral-500 text-xs font-normal">42ms</span>
                          </div>
                        </div>

                        {/* Human-crafted 90-day Uptime Segments Bar */}
                        <div className="space-y-1.5 pt-0.5">
                          <div className="flex items-center justify-between text-xs font-mono text-neutral-600">
                            <span className="font-semibold">90-Day Uptime</span>
                            <span className="text-emerald-600 font-extrabold text-[13px]">99.99%</span>
                          </div>
                          <div className="grid grid-cols-24 gap-[2px] h-3">
                            {Array.from({ length: 24 }).map((_, barIdx) => (
                              <div
                                key={barIdx}
                                className={`h-full ${barIdx === 17 ? 'bg-emerald-400/60' : 'bg-emerald-500'} rounded-none`}
                                title={`Day ${barIdx + 1}: 100%`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* PILLAR 2 SIMULATION: Trust Health Score Sync (White Coral Red Gradient Glassmorphism) */}
                    {idx === 1 && (
                      <div className="relative rounded-none p-4.5 bg-gradient-to-br from-[#FF5757]/[0.08] via-white/90 to-[#FF5757]/[0.04] backdrop-blur-xl border border-[#FF5757]/25 shadow-xs space-y-3.5 text-xs overflow-hidden">
                        {/* Header with live sync */}
                        <div className="flex items-center justify-between pb-2 border-b border-[#FF5757]/15 text-xs">
                          <div className="flex items-center gap-1.5 text-[#0B1F3A] font-bold text-[13px]">
                            <ShieldCheck size={15} className="text-[#FF5757]" />
                            <span>Trust Health Sync</span>
                          </div>
                          <span className="font-mono text-xs text-emerald-700 bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/20 font-bold flex items-center gap-1">
                            <RefreshCw size={11} className="animate-spin" style={{ animationDuration: '8s' }} /> Live
                          </span>
                        </div>

                        {/* Main Score Display */}
                        <div className="p-3 rounded-none bg-white/95 backdrop-blur-md border border-[#FF5757]/15 shadow-xs grid grid-cols-2 gap-3 divide-x divide-neutral-200">
                          <div>
                            <div className="text-xs text-neutral-500 font-mono uppercase tracking-wider">30-Day Uptime</div>
                            <div className="text-lg font-extrabold font-mono text-[#0B1F3A] mt-0.5">99.99%</div>
                          </div>
                          <div className="pl-3">
                            <div className="text-xs text-neutral-500 font-mono uppercase tracking-wider">Health Score</div>
                            <div className="text-lg font-extrabold font-mono text-emerald-600 mt-0.5 flex items-baseline gap-1">
                              98.6 <span className="text-xs text-neutral-400 font-normal">/ 100</span>
                            </div>
                          </div>
                        </div>

                        {/* Audit Feed Snippet */}
                        <div className="flex items-center justify-between text-xs font-mono text-neutral-600 pt-0.5">
                          <span className="truncate font-medium">Evidence: 0 unresolved outages</span>
                          <span className="text-emerald-700 font-bold">SOC 2 verified</span>
                        </div>
                      </div>
                    )}

                    {/* PILLAR 3 SIMULATION: White-Labeled Subscriber Experience (White Coral Red Gradient Glassmorphism) */}
                    {idx === 2 && (
                      <div className="relative rounded-none p-4.5 bg-gradient-to-br from-[#FF5757]/[0.08] via-white/90 to-[#FF5757]/[0.04] backdrop-blur-xl border border-[#FF5757]/25 shadow-xs space-y-3.5 text-xs overflow-hidden">
                        {/* Custom Domain URL Bar */}
                        <div className="flex items-center justify-between pb-2 border-b border-[#FF5757]/15 font-mono text-xs">
                          <div className="flex items-center gap-1.5 text-neutral-700">
                            <Lock size={13} className="text-[#FF5757] flex-shrink-0" />
                            <span className="text-[#0B1F3A] font-bold text-[13px]">status.acme.com</span>
                          </div>
                          <span className="text-xs text-[#FF5757] font-mono font-bold uppercase tracking-wider bg-[#FF5757]/10 border border-[#FF5757]/20 px-2 py-0.5">
                            Custom SSL
                          </span>
                        </div>

                        {/* Subscriber Broadcast Notification */}
                        <div className="p-3 rounded-none bg-white/95 backdrop-blur-md border border-[#FF5757]/15 shadow-xs space-y-1.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B1F3A]">
                              <Mail size={14} className="text-[#FF5757]" />
                              <span>Incident Update Broadcast</span>
                            </div>
                            <span className="text-xs font-mono text-emerald-700 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 font-bold">
                              Sent
                            </span>
                          </div>
                          <p className="text-xs text-neutral-600 font-mono leading-tight">
                            &quot;DB maintenance complete. All systems nominal.&quot;
                          </p>
                        </div>

                        {/* Broadcast Stats */}
                        <div className="flex items-center justify-between text-xs font-mono text-neutral-600 pt-0.5">
                          <span className="font-medium">Slack + Email</span>
                          <span className="text-[#0B1F3A] font-bold">1,420 subscribers notified</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
