import Hero from '@/components/sections/Hero';
import ReadinessFrameworksCarousel from '@/components/sections/ReadinessFrameworksCarousel';
import ReadinessReportGeneration from '@/components/sections/ReadinessReportGeneration';
import CapabilitiesGrid from '@/components/sections/CapabilitiesGrid';
import ReadinessReportCallout from '@/components/sections/ReadinessReportCallout';
import { readinessAssessmentContent } from '@/content/solutions/readinessAssessment';
import { Layers, Zap, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: readinessAssessmentContent.meta.title,
  description: readinessAssessmentContent.meta.description,
};

export default function ReadinessAssessmentPage() {
  const { hero, frameworksSection, capabilities } = readinessAssessmentContent;

  return (
    <>
      <Hero
        eyebrow={hero.eyebrow}
        badgeVariant="navy"
        badgeIcon="readiness"
        prefix={hero.prefix}
        words={hero.words}
        headline={hero.headline}
        subtext={hero.subtext}
        ctaLabel={hero.ctaLabel}
        ctaHref={hero.ctaHref}
        secondaryCtaLabel={hero.secondaryCtaLabel}
        secondaryCtaHref={hero.secondaryCtaHref}
        image={hero.image}
        imageAlt={hero.imageAlt}
        browserUrl={hero.browserUrl}
        showBrowserBar={hero.showBrowserBar}
        showFloatingBadge={hero.showFloatingBadge}
        wideImage={hero.wideImage}
        showTrustSignals={false}
        enableTyping={false}
      />

      {/* Navy Blue Highlight Metrics Strip */}
      <div
        className="py-7 relative z-10 border-y border-white/10 shadow-lg"
        style={{ 
          backgroundColor: '#0B1F3A',
          background: 'linear-gradient(135deg, #0B1F3A 0%, #0E2444 50%, #061426 100%)'
        }}
        aria-label="Readiness Assessment performance metrics"
      >
        <div className="container-wide flex flex-wrap items-center justify-around gap-8 text-white text-center">
          {/* 5+ — Frameworks supported + custom */}
          <div className="flex items-center gap-3.5 px-4">
            <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 shadow-sm backdrop-blur-xs">
              <Layers size={22} className="text-blue-400" />
            </div>
            <div className="text-left">
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-none">5+</div>
              <div className="text-xs sm:text-sm font-medium mt-1 text-neutral-300">Frameworks supported + custom</div>
            </div>
          </div>

          {/* 70% — Faster audit preparation */}
          <div className="flex items-center gap-3.5 px-4">
            <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 shadow-sm backdrop-blur-xs">
              <Zap size={22} className="text-[#FF5757] animate-pulse" />
            </div>
            <div className="text-left">
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-none">70%</div>
              <div className="text-xs sm:text-sm font-medium mt-1 text-neutral-300">Faster audit preparation</div>
            </div>
          </div>

          {/* 100% — Gap visibility across controls */}
          <div className="flex items-center gap-3.5 px-4">
            <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 shadow-sm backdrop-blur-xs">
              <CheckCircle2 size={22} className="text-emerald-400 animate-bounce" style={{ animationDuration: '3s' }} />
            </div>
            <div className="text-left">
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-none">100%</div>
              <div className="text-xs sm:text-sm font-medium mt-1 text-neutral-300">Gap visibility across controls</div>
            </div>
          </div>
        </div>
      </div>

      {/* Frameworks Supported Out of the Box Section */}
      <ReadinessFrameworksCarousel data={frameworksSection} />

      {/* Report Generation Section */}
      <ReadinessReportGeneration />

      {/* Capabilities 6-Card Grid */}
      {capabilities && (
        <CapabilitiesGrid
          heading={capabilities.heading}
          subheading={capabilities.subheading}
          items={capabilities.items}
        />
      )}

      {/* Featured Research Report Callout */}
      <ReadinessReportCallout />
    </>
  );
}
