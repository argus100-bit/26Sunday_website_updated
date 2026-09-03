'use client';

import { useState, useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';
import DotMatrix from '@/components/ui/DotMatrix';

/**
 * EngagementModelToggle — SaaS vs SaaS+ two-option selector with subtle scroll zoom-in
 * @param {Object} props
 * @param {string} props.heading
 * @param {string} props.body1 - First paragraph
 * @param {string} props.body2 - Second paragraph
 * @param {Array<{name: string, href: string}>} props.models
 */
export default function EngagementModelToggle({ heading, body1, body2, models }) {
  const [selected, setSelected] = useState(0);
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Calculate entry progress from 0 (entering screen) to 1 (centered in view)
      const start = windowHeight;
      const end = windowHeight * 0.35;
      const current = rect.top;

      let progress = (start - current) / (start - end);
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const saasDescriptions = [
    {
      label: 'SaaS',
      sublabel: 'You run the platform',
      features: [
        'Full platform access — self-serve',
        'AI-powered automation across all modules',
        'Configure, review, and approve all outputs',
        'Business hours platform support',
      ],
    },
    {
      label: 'SaaS+',
      sublabel: 'We run the platform for you',
      features: [
        'Everything in SaaS, plus expert support',
        'Certified GRC specialists do the heavy lifting',
        'Evidence collection and questionnaire drafting included',
        '24/7 human support with 6-hour SLA',
      ],
    },
  ];

  // Subtle zoom scaling from 0.94 to 1.0
  const zoomScale = 0.94 + scrollProgress * 0.06;
  const zoomOpacity = 0.85 + scrollProgress * 0.15;

  return (
    <section
      ref={sectionRef}
      className="section-pad relative overflow-hidden bg-[#FAF7F2]"
      aria-labelledby="engagement-heading"
    >
      <DotMatrix variant="accent" spacing={28} dotSize={1} opacity={0.08} fade="center-fade" />
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2
            id="engagement-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F3A]"
          >
            {heading}
          </h2>
        </div>

        {/* Toggle pills */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex rounded-xl p-1 gap-1 border border-neutral-300/80 bg-neutral-200/50 backdrop-blur-xs"
            role="tablist"
            aria-label="Engagement model selector"
          >
            {saasDescriptions.map((model, i) => (
              <button
                key={model.label}
                role="tab"
                aria-selected={selected === i}
                onClick={() => setSelected(i)}
                className={`relative px-7 py-3 rounded-lg text-sm sm:text-base font-bold transition-all duration-200 cursor-pointer ${
                  selected === i 
                    ? 'bg-[#FF5757] text-white shadow-md' 
                    : 'text-neutral-700 hover:text-[#0B1F3A]'
                }`}
              >
                {model.label}
              </button>
            ))}
          </div>
        </div>

        {/* Detail panel with subtle scroll zoom-in animation */}
        <div
          className="max-w-5xl mx-auto rounded-2xl border border-neutral-300/80 bg-[#F4EFE6] p-8 sm:p-12 lg:p-14 transition-transform duration-300 ease-out will-change-transform shadow-xs"
          style={{
            transform: `scale(${zoomScale})`,
            opacity: zoomOpacity,
            boxShadow: scrollProgress > 0.5 ? '0 20px 40px -15px rgba(11, 31, 58, 0.08)' : 'none',
          }}
          role="tabpanel"
        >
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1F3A]">
                  {saasDescriptions[selected].label}
                </span>
                <span className="text-base sm:text-lg font-semibold text-neutral-600">
                  {saasDescriptions[selected].sublabel}
                </span>
              </div>

              <p className="text-base sm:text-[16.5px] leading-relaxed text-neutral-700 font-normal mt-5">
                {body1}
              </p>
              <p className="text-base sm:text-[16.5px] leading-relaxed text-neutral-700 font-normal mt-4">
                {body2}
              </p>
            </div>

            <div>
              <ul className="space-y-4 mb-8">
                {saasDescriptions[selected].features.map((f) => (
                  <li key={f} className="flex items-center gap-3.5">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white bg-emerald-600 shadow-xs"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className="text-base sm:text-[16.5px] font-semibold text-[#0B1F3A]">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-2">
                {models[selected] && (
                  <Button
                    href={models[selected].href}
                    variant="primary"
                    size="md"
                    className="px-6 py-3 text-sm sm:text-base font-bold shadow-sm"
                  >
                    Explore {models[selected].name}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
