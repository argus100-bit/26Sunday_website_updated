'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, 
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { getSortedReports } from '@/content/reports';
import GraphGrid from '@/components/ui/GraphGrid';

function formatDisplayDate(dateStr, fallback) {
  if (!dateStr) return fallback || '';
  try {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const year = parts[0];
      const month = parts[1];
      const day = parts[2];
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const mIdx = parseInt(month, 10) - 1;
      if (mIdx >= 0 && mIdx < 12) {
        return `${monthNames[mIdx]} ${day}, ${year}`;
      }
    }
  } catch (e) {
    // fallback
  }
  return fallback || dateStr;
}

export default function ReportsHubPage() {
  const allReports = useMemo(() => getSortedReports(), []);
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered reports
  const filteredReports = useMemo(() => {
    return allReports.filter((report) => {
      return (
        report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [allReports, searchQuery]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF7F2' }}>
      {/* Header Banner */}
      <section 
        className="pt-28 pb-16 px-4 border-b relative overflow-hidden"
        style={{ 
          backgroundColor: '#0B1F3A',
          borderColor: 'rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Minimal Graph Grid Design */}
        <GraphGrid variant="dark" gridSize={32} majorRatio={4} opacity={1} fade="full" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-[13px] font-bold tracking-widest uppercase mb-3 text-[#7EB5FF]">
              26Sunday Research & Reports
            </p>

            <h1 
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white"
              style={{ color: '#FFFFFF' }}
            >
              Insights from 26Sunday&apos;s research.
            </h1>

            <p 
              className="text-sm sm:text-base max-w-2xl leading-relaxed font-normal"
              style={{ color: '#E2E8F0' }}
            >
              Data-backed reports and analysis on GRC, trust operations, and the compliance landscape, alongside the innovations and ideas building a better future.
            </p>

            {/* Quick Stats Bar */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <BookOpen size={15} className="text-[#60A5FA]" />
                <span className="text-slate-200">Published Reports: <strong className="text-white">{allReports.length}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-emerald-400" />
                <span className="text-slate-200">Verified Industry Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        
        {/* Section Heading & Search Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12 pb-5 border-b border-neutral-200/80">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1F3A]">
              All Reports
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Showing {filteredReports.length} {filteredReports.length === 1 ? 'publication' : 'publications'}
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search reports by title, topic..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-none border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/20 focus:border-[#0B1F3A] transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Reports Showcase Grid — Modern 3-Column Guild.ai Style with Rounded Thumbnails */}
        {filteredReports.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredReports.map((report) => {
              const badgeText = report.badge || report.tag || (report.category ? report.category.split(' ')[0].toUpperCase() : 'REPORT');
              const formattedDate = formatDisplayDate(report.date, report.displayDate);

              return (
                <Link
                  key={report.id}
                  href={`/resources/reports/${report.slug}`}
                  className="group flex flex-col h-full cursor-pointer select-none"
                >
                  {/* Thumbnail / Cover Artwork Container (Rounded Landscape) */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100 border border-black/[0.07] shadow-xs">
                    <Image
                      src={report.coverImage || '/images/grc-ai-cover.jpg'}
                      alt={report.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Metadata Row: Badge + Date + Read Time */}
                  <div className="mt-4 flex items-center gap-2.5 text-xs text-neutral-500 font-normal">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-[4px] text-[10.5px] font-semibold tracking-wider text-neutral-700 bg-[#E8E5DF] uppercase">
                      {badgeText}
                    </span>
                    <span>{formattedDate}</span>
                    <span className="text-neutral-300">&middot;</span>
                    <span>{report.readTime}</span>
                  </div>

                  {/* Card Title */}
                  <h3 className="mt-3 text-base sm:text-lg font-bold tracking-tight text-[#0B1F3A] group-hover:text-[#FF5757] transition-colors leading-snug line-clamp-2">
                    {report.title}
                  </h3>

                  {/* Excerpt Snippet */}
                  <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 leading-relaxed line-clamp-2">
                    {report.excerpt}
                  </p>

                  {/* Author Row at Bottom */}
                  <div className="mt-4 pt-1 flex items-center gap-2.5 mt-auto">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden flex-shrink-0 bg-[#0B1F3A] flex items-center justify-center p-0.5 border border-black/5 shadow-2xs">
                      <Image
                        src={report.author?.avatar || '/logo.png'}
                        alt={report.author?.name || '26Sunday'}
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-neutral-700">
                      {report.author?.name || '26Sunday Research Team'}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-neutral-200 p-8">
            <div className="w-12 h-12 rounded-full bg-neutral-100 text-neutral-400 mx-auto flex items-center justify-center mb-3">
              <Search size={20} />
            </div>
            <h3 className="text-base font-bold text-neutral-800 mb-1">No reports found</h3>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto mb-4">
              We couldn&apos;t find any reports matching &quot;{searchQuery}&quot;. Try adjusting your search term.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs font-bold px-4 py-2 bg-[#0B1F3A] text-white rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Reset Search
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
