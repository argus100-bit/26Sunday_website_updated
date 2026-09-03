'use client';

import { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Custom Framework Gear + Checkmark Emblem with Crisp Cutout
function CustomFrameworkGearEmblem() {
  return (
    <svg viewBox="0 0 100 100" className="w-18 h-18 sm:w-20 sm:h-20 flex-shrink-0 drop-shadow-md transition-transform duration-300 group-hover:scale-105" aria-label="Custom Framework Automated Engine">
      <defs>
        {/* Mask to cut out the cog notches and the gap around the checkmark */}
        <mask id="gear-cutout-mask">
          <rect width="100" height="100" fill="#FFFFFF" />
          {/* 8 Scallops / Teeth Notches */}
          <circle cx="50" cy="5" r="9.5" fill="#000000" />
          <circle cx="82" cy="18" r="9.5" fill="#000000" />
          <circle cx="95" cy="50" r="9.5" fill="#000000" />
          <circle cx="82" cy="82" r="9.5" fill="#000000" />
          <circle cx="50" cy="95" r="9.5" fill="#000000" />
          <circle cx="18" cy="82" r="9.5" fill="#000000" />
          <circle cx="5" cy="50" r="9.5" fill="#000000" />
          <circle cx="18" cy="18" r="9.5" fill="#000000" />
          {/* Checkmark Cutout gap through gear */}
          <path
            d="M 31 43 L 44 58 L 86 28"
            fill="none"
            stroke="#000000"
            strokeWidth="16"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </mask>
      </defs>

      {/* Outer Blue Gear with Cog Teeth & Cutout */}
      <circle cx="50" cy="50" r="45" fill="#1862F8" mask="url(#gear-cutout-mask)" />
      
      {/* Inner White Circle */}
      <circle cx="50" cy="50" r="23" fill="#FFFFFF" />

      {/* Coral Red Checkmark with crisp cut */}
      <path
        d="M 31 43 L 44 58 L 86 28"
        fill="none"
        stroke="#FF5757"
        strokeWidth="9"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

// Official Real-World Brand Logos for Compliance Frameworks
function FrameworkEmblem({ id }) {
  switch (id) {
    case 'iso-27001':
      return (
        <svg viewBox="0 0 100 100" className="w-18 h-18 sm:w-20 sm:h-20 flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-105" aria-label="Official ISO 27001 Logo">
          {/* Official ISO Red Rounded Box */}
          <rect width="100" height="100" rx="8" fill="#D71920" />
          
          {/* Globe Wireframe Lat/Long Grid */}
          <g stroke="#FFFFFF" strokeWidth="1.8" fill="none" opacity="0.85">
            <circle cx="50" cy="46" r="32" />
            <line x1="18" y1="46" x2="82" y2="46" strokeWidth="1.5" />
            <path d="M 23 31 Q 50 38 77 31" strokeWidth="1.3" />
            <path d="M 23 61 Q 50 54 77 61" strokeWidth="1.3" />
            <ellipse cx="50" cy="46" rx="14" ry="32" strokeWidth="1.5" />
            <line x1="50" y1="14" x2="50" y2="78" strokeWidth="1.5" />
          </g>
          
          {/* Bold Official ISO Wordmark */}
          <rect x="18" y="32" width="64" height="28" rx="3" fill="#D71920" />
          <text x="50" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="21" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="1.5">
            ISO
          </text>

          {/* Standard Designation */}
          <rect x="12" y="74" width="76" height="18" rx="2" fill="#B30E14" />
          <text x="50" y="87" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.8">
            IEC 27001
          </text>
        </svg>
      );

    case 'iso-42001':
      return (
        <svg viewBox="0 0 100 100" className="w-18 h-18 sm:w-20 sm:h-20 flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-105" aria-label="Official ISO 42001 Logo">
          {/* Official ISO Red Rounded Box */}
          <rect width="100" height="100" rx="8" fill="#D71920" />
          
          {/* Globe Wireframe Lat/Long Grid */}
          <g stroke="#FFFFFF" strokeWidth="1.8" fill="none" opacity="0.85">
            <circle cx="50" cy="46" r="32" />
            <line x1="18" y1="46" x2="82" y2="46" strokeWidth="1.5" />
            <path d="M 23 31 Q 50 38 77 31" strokeWidth="1.3" />
            <path d="M 23 61 Q 50 54 77 61" strokeWidth="1.3" />
            <ellipse cx="50" cy="46" rx="14" ry="32" strokeWidth="1.5" />
            <line x1="50" y1="14" x2="50" y2="78" strokeWidth="1.5" />
          </g>
          
          {/* Bold Official ISO Wordmark */}
          <rect x="18" y="32" width="64" height="28" rx="3" fill="#D71920" />
          <text x="50" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="21" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="1.5">
            ISO
          </text>

          {/* Standard Designation */}
          <rect x="12" y="74" width="76" height="18" rx="2" fill="#B30E14" />
          <text x="50" y="87" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.8">
            IEC 42001
          </text>
        </svg>
      );

    case 'soc-2':
      return (
        <svg viewBox="0 0 100 100" className="w-18 h-18 sm:w-20 sm:h-20 flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-105" aria-label="Official AICPA SOC 2 Logo">
          {/* Official AICPA Navy Rounded Box */}
          <rect width="100" height="100" rx="8" fill="#002D62" />
          
          {/* Top AICPA Header */}
          <text x="50" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="900" letterSpacing="2.5" fontFamily="system-ui, -apple-system, sans-serif">
            AICPA
          </text>
          <line x1="26" y1="28" x2="74" y2="28" stroke="#F58220" strokeWidth="2" />
          
          {/* Bold SOC Wordmark */}
          <text x="50" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="900" letterSpacing="1" fontFamily="system-ui, -apple-system, sans-serif">
            SOC
          </text>
          
          {/* Official Orange SOC 2 Type II Ribbon */}
          <rect x="12" y="66" width="76" height="22" rx="3" fill="#F58220" />
          <text x="50" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="900" letterSpacing="0.6" fontFamily="system-ui, -apple-system, sans-serif">
            SOC 2®
          </text>
          <text x="50" y="86" textAnchor="middle" fill="#002D62" fontSize="6.5" fontWeight="900" letterSpacing="0.5" fontFamily="system-ui, -apple-system, sans-serif">
            TYPE II REPORT
          </text>
        </svg>
      );

    case 'gdpr':
      return (
        <svg viewBox="0 0 100 100" className="w-18 h-18 sm:w-20 sm:h-20 flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-105" aria-label="Official European Union GDPR Logo">
          {/* Official European Union Blue Flag Box */}
          <rect width="100" height="100" rx="8" fill="#003399" />
          
          {/* 12 Official EU 5-Point Gold Stars (Static Precomputed Coordinates) */}
          <polygon points="50,11.5 50.8,13.2 52.8,13.2 51.2,14.5 51.8,16.5 50,15.2 48.2,16.5 48.8,14.5 47.2,13.2 49.2,13.2" fill="#FFCC00" />
          <polygon points="68,16.3 68.8,18.0 70.8,18.0 69.2,19.3 69.8,21.3 68,20.0 66.2,21.3 66.8,19.3 65.2,18.0 67.2,18.0" fill="#FFCC00" />
          <polygon points="81.2,29.5 82.0,31.2 84.0,31.2 82.4,32.5 83.0,34.5 81.2,33.2 79.4,34.5 80.0,32.5 78.4,31.2 80.4,31.2" fill="#FFCC00" />
          <polygon points="86,47.5 86.8,49.2 88.8,49.2 87.2,50.5 87.8,52.5 86,51.2 84.2,52.5 84.8,50.5 83.2,49.2 85.2,49.2" fill="#FFCC00" />
          <polygon points="81.2,65.5 82.0,67.2 84.0,67.2 82.4,68.5 83.0,70.5 81.2,69.2 79.4,70.5 80.0,68.5 78.4,67.2 80.4,67.2" fill="#FFCC00" />
          <polygon points="68,78.7 68.8,80.4 70.8,80.4 69.2,81.7 69.8,83.7 68,82.4 66.2,83.7 66.8,81.7 65.2,80.4 67.2,80.4" fill="#FFCC00" />
          <polygon points="50,83.5 50.8,85.2 52.8,85.2 51.2,86.5 51.8,88.5 50,87.2 48.2,88.5 48.8,86.5 47.2,85.2 49.2,85.2" fill="#FFCC00" />
          <polygon points="32,78.7 32.8,80.4 34.8,80.4 33.2,81.7 33.8,83.7 32,82.4 30.2,83.7 30.8,81.7 29.2,80.4 31.2,80.4" fill="#FFCC00" />
          <polygon points="18.8,65.5 19.6,67.2 21.6,67.2 20.0,68.5 20.6,70.5 18.8,69.2 17.0,70.5 17.6,68.5 16.0,67.2 18.0,67.2" fill="#FFCC00" />
          <polygon points="14,47.5 14.8,49.2 16.8,49.2 15.2,50.5 15.8,52.5 14,51.2 12.2,52.5 12.8,50.5 11.2,49.2 13.2,49.2" fill="#FFCC00" />
          <polygon points="18.8,29.5 19.6,31.2 21.6,31.2 20.0,32.5 20.6,34.5 18.8,33.2 17.0,34.5 17.6,32.5 16.0,31.2 18.0,31.2" fill="#FFCC00" />
          <polygon points="32,16.3 32.8,18.0 34.8,18.0 33.2,19.3 33.8,21.3 32,20.0 30.2,21.3 30.8,19.3 29.2,18.0 31.2,18.0" fill="#FFCC00" />
          
          {/* Bold Official GDPR Wordmark */}
          <text x="50" y="52" textAnchor="middle" fill="#FFFFFF" fontSize="17" fontWeight="900" letterSpacing="1" fontFamily="system-ui, -apple-system, sans-serif">
            GDPR
          </text>
          
          <rect x="16" y="60" width="68" height="14" rx="2" fill="#002266" />
          <text x="50" y="70" textAnchor="middle" fill="#FFCC00" fontSize="7" fontWeight="900" letterSpacing="0.6" fontFamily="system-ui, -apple-system, sans-serif">
            EU 2016/679
          </text>
        </svg>
      );

    case 'ccpa':
      return (
        <svg viewBox="0 0 100 100" className="w-18 h-18 sm:w-20 sm:h-20 flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-105" aria-label="Official CCPA California Privacy Logo">
          {/* California Blue Rounded Box */}
          <rect width="100" height="100" rx="8" fill="#0C2340" />
          
          {/* California Red Star */}
          <polygon points="22,15 23.5,19.5 28,19.5 24.5,22.5 26,27 22,24 18,27 19.5,22.5 16,19.5 20.5,19.5" fill="#FF5757" />
          
          {/* California Header Text */}
          <text x="58" y="23" textAnchor="middle" fill="#93C5FD" fontSize="7.5" fontWeight="900" letterSpacing="1.2" fontFamily="system-ui, -apple-system, sans-serif">
            CALIFORNIA
          </text>
          
          <line x1="14" y1="30" x2="86" y2="30" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          
          {/* Bold CCPA Wordmark */}
          <text x="50" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="900" letterSpacing="1" fontFamily="system-ui, -apple-system, sans-serif">
            CCPA
          </text>
          
          {/* CPRA Ribbon */}
          <rect x="12" y="66" width="76" height="22" rx="3" fill="#FF5757" />
          <text x="50" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="900" letterSpacing="0.8" fontFamily="system-ui, -apple-system, sans-serif">
            CPRA
          </text>
          <text x="50" y="86" textAnchor="middle" fill="#0C2340" fontSize="6.5" fontWeight="900" letterSpacing="0.5" fontFamily="system-ui, -apple-system, sans-serif">
            PRIVACY ACT
          </text>
        </svg>
      );

    default:
      return null;
  }
}

export default function ReadinessFrameworksCarousel({ data }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = data?.items || [];
  const heading = data?.heading || 'Frameworks Supported Out of the Box';
  const eyebrow = data?.eyebrow || 'COMPLIANCE FRAMEWORKS';
  const subtext =
    data?.subtext ||
    'Pre-mapped controls, continuous audit gap-checks, and automated evidence templates tailored for high-growth enterprises.';

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = 460;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, items.length));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [items.length]);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const offset = 480;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -offset : offset,
      behavior: 'smooth',
    });
  };

  return (
    <section 
      className="section-pad relative bg-[#FAF7F2] border-t border-neutral-300/80 overflow-hidden" 
      aria-labelledby="frameworks-carousel-heading"
    >
      {/* Background Engineering Graph Coordinates Pattern (24px x 24px) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(11, 31, 58, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(11, 31, 58, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="mb-3">
              <span className="font-mono text-xs font-bold tracking-wider uppercase bg-[#FF5757]/10 text-[#FF5757] px-2.5 py-1 rounded-none border border-[#FF5757]/20 inline-block">
                {eyebrow}
              </span>
            </div>
            
            <h2
              id="frameworks-carousel-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F3A]"
            >
              {heading}
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              {subtext}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start lg:self-end">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous framework"
              className="w-11 h-11 rounded-none border border-neutral-300 bg-white/90 flex items-center justify-center text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white transition-all shadow-xs disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Next framework"
              className="w-11 h-11 rounded-none border border-neutral-300 bg-white/90 flex items-center justify-center text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white transition-all shadow-xs disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Tactical Graph Outer Frame Container */}
        <div className="relative border border-neutral-300/90 bg-white/40 backdrop-blur-xs p-4 sm:p-6 shadow-xs">
          {/* Tactical Coordinate Corner Notches */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 text-[#0B1F3A] font-mono text-[10px] font-bold flex items-center justify-center">+</div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 text-[#0B1F3A] font-mono text-[10px] font-bold flex items-center justify-center">+</div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 text-[#0B1F3A] font-mono text-[10px] font-bold flex items-center justify-center">+</div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 text-[#0B1F3A] font-mono text-[10px] font-bold flex items-center justify-center">+</div>

          {/* Carousel Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 pt-1 scroll-smooth no-scrollbar"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="w-[340px] sm:w-[440px] lg:w-[480px] flex-shrink-0 flex flex-col justify-between rounded-none p-7 sm:p-8 bg-white/95 backdrop-blur-md border border-neutral-300/90 shadow-xs hover:shadow-xl hover:border-neutral-400 transition-all duration-300 group relative"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div>
                  {/* Top Bar: Category Tag on Left & Official Framework Brand Logo on Right */}
                  <div className="flex items-start justify-between gap-4 mb-5 pb-5 border-b border-neutral-200/80">
                    <div className="flex-1">
                      <span className="font-mono text-[11px] font-bold text-[#FF5757] bg-[#FF5757]/10 px-2.5 py-1 border border-[#FF5757]/20 uppercase inline-block mb-2.5">
                        {item.tag}
                      </span>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0B1F3A] mb-1.5 group-hover:text-[#FF5757] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-neutral-600 leading-snug">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Official Brand Logo */}
                    <div className="flex-shrink-0" title={`${item.title} Official Logo`}>
                      <FrameworkEmblem id={item.id} />
                    </div>
                  </div>

                  {/* Key Stat Highlight Capsule */}
                  <div className="p-3 rounded-none bg-[#0B1F3A]/[0.04] border border-[#0B1F3A]/10 mb-5 text-sm sm:text-[15px] font-semibold text-[#0B1F3A]">
                    {item.stat}
                  </div>

                  {/* Main Body Text (Increased Size & Enhanced Legibility) */}
                  <p className="text-sm sm:text-[15px] lg:text-base text-neutral-700 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* End Card: Custom Frameworks Console */}
            <div
              className="w-[340px] sm:w-[420px] lg:w-[460px] flex-shrink-0 flex flex-col justify-between rounded-none p-7 sm:p-8 border border-white/20 shadow-xl group relative"
              style={{
                background: 'linear-gradient(145deg, #061324 0%, #0B1F3A 50%, #102A4C 100%)',
                color: '#FFFFFF',
                scrollSnapAlign: 'start',
              }}
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-5 pb-5 border-b border-white/15">
                  <div className="flex-1">
                    <h3 
                      className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-1.5"
                      style={{ color: '#FFFFFF' }}
                    >
                      Custom Frameworks
                    </h3>
                    <p 
                      className="text-sm sm:text-base font-medium leading-snug"
                      style={{ color: '#E2E8F0' }}
                    >
                      HIPAA, NIST AI RMF, PCI DSS, ISO 27701, FedRAMP, or proprietary controls.
                    </p>
                  </div>

                  {/* Custom Gear + Checkmark Vector Emblem with Cutout */}
                  <div title="Custom Framework Engine">
                    <CustomFrameworkGearEmblem />
                  </div>
                </div>

                {/* Bring Your Own Framework Description */}
                <div className="mb-6 space-y-2">
                  <div 
                    className="text-sm sm:text-[15px] font-bold tracking-tight"
                    style={{ color: '#FFFFFF' }}
                  >
                    Bring Your Own Framework (BYOF)
                  </div>
                  <p 
                    className="text-sm sm:text-[15px] leading-relaxed font-normal"
                    style={{ color: '#E2E8F0' }}
                  >
                    Upload your control spreadsheets or audit guidelines. 26Sunday ingests and cross-maps controls directly into your readiness dashboard.
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <Link
                  href="/get-started"
                  className="w-full py-3.5 px-4 rounded-none bg-[#FF5757] hover:bg-[#1862F8] text-white font-bold text-xs sm:text-sm uppercase tracking-wider font-mono flex items-center justify-center gap-2 transition-all duration-300 shadow-sm cursor-pointer"
                >
                  <span>Request Custom Framework</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex justify-center items-center gap-2 pt-4">
          {Array.from({ length: items.length + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => {
                if (!scrollRef.current) return;
                const cardWidth = 480;
                scrollRef.current.scrollTo({
                  left: dotIdx * cardWidth,
                  behavior: 'smooth',
                });
              }}
              aria-label={`Go to framework ${dotIdx + 1}`}
              className={`h-1.5 transition-all duration-300 cursor-pointer ${
                activeIndex === dotIdx 
                  ? 'w-7 bg-[#0B1F3A]' 
                  : 'w-2 bg-neutral-300 hover:bg-neutral-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
