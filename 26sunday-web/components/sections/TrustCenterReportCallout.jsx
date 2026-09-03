'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import DotMatrix from '@/components/ui/DotMatrix';

export default function TrustCenterReportCallout() {
  const reportHref = '/resources/reports/trust-centers-role-in-security-and-compliance';

  return (
    <section
      className="py-12 sm:py-16 border-t relative overflow-hidden"
      style={{
        backgroundColor: '#FAF7F2',
        borderColor: 'rgba(11, 31, 58, 0.08)',
      }}
      aria-labelledby="trust-center-report-callout-title"
    >
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Content Area (Unboxed) */}
          <div className="max-w-3xl">
            {/* Headline */}
            <h2
              id="trust-center-report-callout-title"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1F3A] mb-3 leading-tight"
            >
              Trust Centers&apos; Role in Security &amp; Compliance
            </h2>

            {/* Supporting Line */}
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-4">
              Explore market benchmarks, 70–90% turnaround reductions, and how 26Sunday&apos;s live Knowledge Base sync eliminates documentation friction.
            </p>

            {/* Topics */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-neutral-500">
              <span className="px-2.5 py-1 rounded-none bg-black/5 text-neutral-700 border border-neutral-200">
                70–90% Review Time Reduction
              </span>
              <span className="px-2.5 py-1 rounded-none bg-black/5 text-neutral-700 border border-neutral-200">
                87% Buyers Check Security First
              </span>
              <span className="px-2.5 py-1 rounded-none bg-black/5 text-neutral-700 border border-neutral-200">
                Zero-Sync Native Architecture
              </span>
            </div>
          </div>

          {/* Right Action CTA Card (Typographic Box with Dot Grid & Sharp Edges) */}
          <div className="flex-shrink-0 flex items-center justify-center pt-2 lg:pt-0">
            <Link
              href={reportHref}
              className="group relative flex flex-col items-center justify-between p-6 sm:p-7 w-full sm:w-[220px] md:w-[240px] aspect-square rounded-none bg-white border-2 transition-colors duration-300 hover:border-[#FF5757]/60 overflow-hidden select-none"
              style={{
                borderColor: 'rgba(11, 31, 58, 0.16)',
              }}
            >
              {/* Dot Matrix Background Pattern */}
              <DotMatrix 
                variant="light" 
                spacing={16} 
                dotSize={1} 
                opacity={0.18} 
                className="transition-opacity duration-300 group-hover:opacity-28" 
              />

              {/* Inner Accent Frame (Sharp Corners) */}
              <div 
                className="absolute inset-2.5 rounded-none border border-dashed pointer-events-none transition-colors duration-300 group-hover:border-[#FF5757]/50"
                style={{ borderColor: 'rgba(11, 31, 58, 0.12)' }}
              />

              {/* Top Row: Mini Tag + Arrow */}
              <div className="relative z-10 w-full flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-400 group-hover:text-[#FF5757] transition-colors">
                  Research Brief
                </span>
                <span 
                  className="w-7 h-7 rounded-none flex items-center justify-center transition-colors duration-300 group-hover:bg-[#FF5757] group-hover:text-white"
                  style={{
                    backgroundColor: 'rgba(255, 87, 87, 0.1)',
                    color: '#FF5757',
                  }}
                >
                  <ArrowUpRight size={15} />
                </span>
              </div>

              {/* Center: Bold Stacked Typography */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto">
                <span className="text-3xl sm:text-4xl font-black tracking-tight leading-[0.9] text-[#0B1F3A] group-hover:text-[#FF5757] transition-colors duration-300">
                  READ
                </span>
                <span className="text-2xl sm:text-[28px] font-black tracking-tight leading-[0.95] my-1 text-[#0B1F3A] transition-colors duration-300">
                  THE FULL
                </span>
                <span 
                  className="text-3xl sm:text-4xl font-black tracking-tight leading-[0.9] text-[#FF5757] group-hover:text-[#0B1F3A] transition-colors duration-300"
                >
                  REPORT
                </span>
              </div>

              {/* Bottom: Read Time Indicator */}
              <div className="relative z-10 w-full text-center">
                <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-700 transition-colors">
                  6 Min Read
                </span>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
