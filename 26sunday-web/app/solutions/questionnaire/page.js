import Hero from '@/components/sections/Hero';
import TwoColumnFeature from '@/components/sections/TwoColumnFeature';
import QuestionnaireScrollStory from '@/components/sections/QuestionnaireScrollStory';
import QuestionnaireHowItWorks from '@/components/sections/QuestionnaireHowItWorks';
import CapabilitiesGrid from '@/components/sections/CapabilitiesGrid';
import QuestionnaireReportCallout from '@/components/sections/QuestionnaireReportCallout';
import { questionnaireContent } from '@/content/solutions/questionnaire';
import { Timer, Zap, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: questionnaireContent.meta.title,
  description: questionnaireContent.meta.description,
};

export default function QuestionnairePage() {
  const { hero, problemSolution, whySection, howItWorks, capabilities } = questionnaireContent;

  return (
    <>
      <Hero
        eyebrow={hero.eyebrow}
        badgeVariant="navy"
        badgeIcon="questionnaire"
        prefix={hero.prefix}
        words={hero.words}
        headline={hero.headline}
        subtext={hero.subtext}
        ctaLabel={hero.ctaLabel}
        ctaHref={hero.ctaHref}
        secondaryCtaLabel={hero.secondaryCtaLabel}
        secondaryCtaHref={hero.secondaryCtaHref}
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
        aria-label="Questionnaire performance metrics"
      >
        <div className="container-wide flex flex-wrap items-center justify-around gap-8 text-white text-center">
          {/* 80% — Less time per questionnaire */}
          <div className="flex items-center gap-3.5 px-4">
            <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 shadow-sm backdrop-blur-xs">
              <Timer size={22} className="text-blue-400 animate-[spin_8s_linear_infinite]" />
            </div>
            <div className="text-left">
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-none">80%</div>
              <div className="text-xs sm:text-sm font-medium mt-1 text-neutral-300">Less time per questionnaire</div>
            </div>
          </div>

          {/* 5x — Faster deal cycles */}
          <div className="flex items-center gap-3.5 px-4">
            <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 shadow-sm backdrop-blur-xs">
              <Zap size={22} className="text-[#FF5757] animate-pulse" />
            </div>
            <div className="text-left">
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-none">5x</div>
              <div className="text-xs sm:text-sm font-medium mt-1 text-neutral-300">Faster deal cycles</div>
            </div>
          </div>

          {/* 90% — First-draft acceptance */}
          <div className="flex items-center gap-3.5 px-4">
            <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 shadow-sm backdrop-blur-xs">
              <CheckCircle2 size={22} className="text-emerald-400 animate-bounce" style={{ animationDuration: '3s' }} />
            </div>
            <div className="text-left">
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-none">90%</div>
              <div className="text-xs sm:text-sm font-medium mt-1 text-neutral-300">First-draft acceptance</div>
            </div>
          </div>
        </div>
      </div>

      <TwoColumnFeature
        eyebrow={problemSolution.eyebrow}
        title={problemSolution.title}
        body={problemSolution.body}
        imagePosition={problemSolution.imagePosition}
      />

      {/* "Why 26Sunday Questionnaire" — Sticky Scroll Layer Assembly Story */}
      <QuestionnaireScrollStory data={whySection} />

      {/* "How it works" — 4-Step Connected Pipeline Flow */}
      <QuestionnaireHowItWorks data={howItWorks} />

      {/* Questionnaire Capability Boxes — 6 Purpose-Built Capabilities Grid */}
      <CapabilitiesGrid
        heading={capabilities.heading}
        subheading={capabilities.subheading}
        items={capabilities.items}
      />

      {/* Featured Research Report Callout */}
      <QuestionnaireReportCallout />
    </>
  );
}


