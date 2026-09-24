import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Quote
} from 'lucide-react';
import { reportsList, getReportBySlug } from '@/content/reports';
import ReportShareButton from '@/components/ui/ReportShareButton';

// Generate static params for Next.js build
export async function generateStaticParams() {
  return reportsList.map((report) => ({
    slug: report.slug,
  }));
}

// Dynamic page metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const report = getReportBySlug(slug);

  if (!report) {
    return {
      title: 'Report Not Found — 26Sunday',
    };
  }

  return {
    title: `${report.title} — 26Sunday Reports`,
    description: report.excerpt,
    openGraph: {
      title: report.title,
      description: report.excerpt,
      type: 'article',
      publishedTime: report.date,
    },
  };
}

export default async function ReportDetailPage({ params }) {
  const { slug } = await params;
  const report = getReportBySlug(slug);

  if (!report) {
    notFound();
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF7F2' }}>
      {/* Header Bar */}
      <div 
        className="pt-28 pb-12 px-4 border-b relative overflow-hidden print:hidden"
        style={{ 
          backgroundColor: '#0B1F3A',
          borderColor: 'rgba(255, 255, 255, 0.1)'
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <Link 
              href="/resources/reports" 
              className="inline-flex items-center gap-1.5 text-xs font-semibold hover:opacity-80 hover:underline transition-all"
              style={{ color: '#FFFFFF' }}
            >
              <ArrowLeft size={14} style={{ color: '#FFFFFF' }} />
              <span>Back to All Reports</span>
            </Link>

            <span className="text-xs font-mono text-neutral-400">
              Report ID: {report.id}
            </span>
          </div>

          {/* Title */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight"
            style={{ color: '#FFFFFF' }}
          >
            {report.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed mb-6">
            {report.subtitle}
          </p>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-neutral-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-black p-1 flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden border border-white/20">
                <Image 
                  src="/logo.svg" 
                  alt="26Sunday Logo" 
                  width={24}
                  height={24}
                  className="w-full h-full object-contain" 
                />
              </div>
              <div>
                <div className="font-bold text-white">{report.author.name}</div>
                <div className="text-[11px] text-neutral-400">{report.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-blue-400" />
                {report.displayDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-blue-400" />
                {report.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Reading View */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 print:py-0 print:px-0">
        
        {/* Printable Document Cover Header */}
        <div className="hidden print:block border-b-2 border-black pb-4 mb-6 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-neutral-700">26Sunday Research Report</div>
          <h1 className="text-2xl font-bold text-black mt-1 mb-1" style={{ color: '#000000' }}>{report.title}</h1>
          <p className="text-xs text-neutral-600">{report.displayDate} | Published by 26Sunday</p>
        </div>

        {/* Article Main Body — Unboxed, native document layout */}
        <article className="space-y-6 print:space-y-4">
          {report.content.map((block, idx) => {
            if (block.type === 'paragraph') {
              return (
                <p 
                  key={idx} 
                  className="text-base sm:text-lg leading-relaxed font-normal"
                  style={{ color: '#000000' }}
                >
                  {block.text}
                </p>
              );
            }

            if (block.type === 'comparisonDiagram') {
              return (
                <div 
                  key={idx} 
                  className="my-10 mx-auto max-w-xl rounded-xl border border-black overflow-hidden shadow-xs"
                >
                  {/* Split Header */}
                  <div className="grid grid-cols-2 border-b border-black text-center font-bold text-xs sm:text-sm">
                    <div className="py-2.5 px-4 bg-[#B8E3D8] text-black border-r border-black font-bold">
                      {block.leftTitle}
                    </div>
                    <div className="py-2.5 px-4 bg-[#FFD1DC] text-black font-bold">
                      {block.rightTitle}
                    </div>
                  </div>

                  {/* Split Columns */}
                  <div className="grid grid-cols-2 divide-x divide-black py-6 px-4">
                    <div className="space-y-2.5 text-center text-xs sm:text-sm font-medium" style={{ color: '#000000' }}>
                      {block.leftItems.map((item, i) => (
                        <div key={i}>{item}</div>
                      ))}
                    </div>
                    <div className="space-y-2.5 text-center text-xs sm:text-sm font-medium" style={{ color: '#000000' }}>
                      {block.rightItems.map((item, i) => (
                        <div key={i}>{item}</div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            if (block.type === 'heading') {
              if (block.level === 3) {
                return (
                  <h3 
                    key={idx}
                    className="text-lg sm:text-xl font-bold tracking-tight mt-8 mb-3 text-[#0B1F3A]"
                    style={{ color: '#0B1F3A' }}
                  >
                    {block.text}
                  </h3>
                );
              }
              return (
                <h2 
                  key={idx}
                  className="text-2xl sm:text-3xl font-bold tracking-tight mt-12 mb-4 pt-6"
                  style={{ color: '#000000' }}
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === 'bulletList') {
              return (
                <ul key={idx} className="space-y-2.5 my-5 pl-5 sm:pl-7 list-disc text-base sm:text-lg leading-relaxed" style={{ color: '#000000' }}>
                  {block.items.map((item, i) => (
                    <li key={i} className="pl-1" style={{ color: '#000000' }}>
                      <span style={{ color: '#000000' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            if (block.type === 'callout') {
              return (
                <blockquote 
                  key={idx}
                  className="my-8 p-5 sm:p-6 rounded-xl border-l-4 border-[#FF5757] bg-white border shadow-xs font-medium text-sm sm:text-base leading-relaxed flex items-start gap-3.5"
                  style={{ color: '#0B1F3A', borderColor: 'rgba(11, 31, 58, 0.1)', borderLeftColor: '#FF5757' }}
                >
                  <Quote size={22} className="text-[#FF5757] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="italic" style={{ color: '#1F2937' }}>{block.text || block.quote}</span>
                  </div>
                </blockquote>
              );
            }

            if (block.type === 'table') {
              return (
                <div key={idx} className="my-8 overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-xs">
                  {block.title && (
                    <div className="px-5 py-3 border-b border-neutral-200 bg-neutral-50 font-bold text-sm text-[#0B1F3A]">
                      {block.title}
                    </div>
                  )}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-neutral-300 bg-[#0B1F3A] text-white">
                          {block.headers.map((header, hIdx) => (
                            <th 
                              key={hIdx} 
                              className="px-4 py-3.5 font-bold text-xs uppercase tracking-wider text-white"
                              style={{ color: '#FFFFFF' }}
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200 font-normal">
                        {block.rows.map((row, rIdx) => (
                          <tr 
                            key={rIdx} 
                            className={rIdx % 2 === 0 ? 'bg-white hover:bg-neutral-50/80 transition-colors' : 'bg-[#FAF7F2]/60 hover:bg-neutral-50/80 transition-colors'}
                          >
                            {row.map((cell, cIdx) => (
                              <td 
                                key={cIdx} 
                                className={`px-4 py-3 text-xs sm:text-[13.5px] leading-relaxed ${
                                  cIdx === 0 ? 'font-semibold text-[#0B1F3A]' : 'text-neutral-700'
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            }

            return null;
          })}

          {/* Action Bar Footer inside Article */}
          <div className="pt-10 mt-12 border-t border-black/10 flex flex-wrap items-center justify-between gap-4 print:hidden">
            <Link 
              href="/resources/reports"
              className="inline-flex items-center gap-2 text-xs font-bold text-neutral-800 hover:text-black transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to Reports Hub</span>
            </Link>

            <div className="flex items-center gap-2">
              <ReportShareButton />
            </div>
          </div>
        </article>

      </div>
    </div>
  );
}
