'use client';

import { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function QuestionnaireScrollStory({ data }) {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const items = data.items;

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalScrollable;
      const clamped = Math.max(0, Math.min(1, rawProgress));

      // Calculate step with smooth thresholds
      let stepIndex = 0;
      if (clamped < 0.26) {
        stepIndex = 0;
      } else if (clamped < 0.51) {
        stepIndex = 1;
      } else if (clamped < 0.76) {
        stepIndex = 2;
      } else {
        stepIndex = 3;
      }

      setActiveStep(stepIndex);
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
  }, [items.length]);

  // Clean labels for each visual layer
  const layerLabels = [
    'AI Knowledge Engine',
    'Ecosystem Sync',
    'Customer Gateway',
    'Certified Expert Review',
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: '360vh', backgroundColor: 'var(--color-neutral-100)' }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="container-wide w-full py-10 sm:py-16">

          {/* Grid: left text, right visual */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT: Text content */}
            <div className="relative">
              {/* Section heading */}
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tight mb-10"
                style={{ color: 'var(--color-primary)' }}
              >
                {data.heading}
              </h2>

              {/* Step content — fixed height container so heading never shifts */}
              <div className="relative h-[360px] sm:h-[320px] lg:h-[300px] w-full">
                {items.map((item, idx) => {
                  const isCurrent = activeStep === idx;
                  return (
                    <div
                      key={item.title}
                      className={`absolute inset-0 w-full transition-opacity transition-transform duration-300 ease-out will-change-transform ${
                        isCurrent
                          ? 'opacity-100 translate-y-0 pointer-events-auto z-10'
                          : 'opacity-0 translate-y-2 pointer-events-none z-0'
                      }`}
                    >
                      {/* Title */}
                      <h3
                        className="text-xl sm:text-2xl font-bold mb-4"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        {item.title}
                      </h3>

                      {/* Body */}
                      <p className="text-sm sm:text-base leading-relaxed text-neutral-600 mb-6">
                        {item.body}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2">
                        {item.highlights.map((h, hi) => (
                          <div key={hi} className="flex items-center gap-2 text-sm text-neutral-700">
                            <CheckCircle2 size={15} className="text-[#FF5757] flex-shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT: Layered visual that builds up seamlessly */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md lg:max-w-lg aspect-square relative flex flex-col justify-between">
                
                {/* Layer blocks that stack progressively */}
                {[0, 1, 2, 3].map((layerIdx) => {
                  const isVisible = activeStep >= layerIdx;
                  
                  const colors = [
                    { bg: '#0B1F3A', border: '#0B1F3A', isGradientBorder: false },
                    { bg: '#102A4C', border: '#102A4C', isGradientBorder: false },
                    { bg: '#16355F', border: '#16355F', isGradientBorder: false },
                    { 
                      bg: '#0B1F3A', 
                      borderGradient: 'linear-gradient(135deg, #16355F 0%, #204C82 50%, #FF5757 100%)', 
                      isGradientBorder: true 
                    },
                  ];
                  const c = colors[layerIdx];

                  return (
                    <div
                      key={layerIdx}
                      className={`relative w-full h-[22%] transition-opacity transition-transform duration-500 ease-out will-change-transform ${
                        isVisible
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-4'
                      }`}
                    >
                      <div
                        className={`w-full h-full shadow-sm ${
                          c.isGradientBorder ? 'p-[2px]' : 'border-2'
                        }`}
                        style={
                          c.isGradientBorder
                            ? { background: c.borderGradient }
                            : { backgroundColor: c.bg, borderColor: c.border }
                        }
                      >
                        <div
                          className="w-full h-full flex items-center justify-between px-6 sm:px-8 text-white"
                          style={{
                            backgroundColor: c.bg,
                          }}
                        >
                          <div>
                            <div className="text-xs font-mono font-bold uppercase tracking-wider opacity-60 mb-0.5">
                              Layer 0{layerIdx + 1}
                            </div>
                            <div className="text-sm sm:text-base font-bold text-white">
                              {layerLabels[layerIdx]}
                            </div>
                          </div>

                          {/* Status indicator */}
                          <div className={`text-xs font-bold px-3 py-1 border ${
                            layerIdx === 3 && activeStep === 3
                              ? 'border-[#FF5757] text-[#FF5757] bg-white shadow-xs'
                              : activeStep >= layerIdx
                                ? 'border-emerald-400 text-emerald-400 bg-emerald-400/10'
                                : 'border-white/30 text-white/40'
                          }`}>
                            {layerIdx === 3 && activeStep === 3
                              ? '✓ COMPLETE'
                              : activeStep >= layerIdx
                                ? '✓ ACTIVE'
                                : 'PENDING'}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
