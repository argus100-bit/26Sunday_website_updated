import Hero from '@/components/sections/Hero';
import TwoColumnFeature from '@/components/sections/TwoColumnFeature';
import StatusPageWhySection from '@/components/sections/StatusPageWhySection';
import CapabilitiesGrid from '@/components/sections/CapabilitiesGrid';
import StatusReportCallout from '@/components/sections/StatusReportCallout';
import StatusPageProblemIllustration from '@/components/illustrations/StatusPageProblemIllustration';
import { statusPageContent } from '@/content/solutions/statusPage';

export const metadata = {
  title: statusPageContent.meta.title,
  description: statusPageContent.meta.description,
};

export default function StatusPagePage() {
  const { hero, problemSolution, whySection, capabilities } = statusPageContent;

  return (
    <>
      <Hero
        eyebrow={hero.eyebrow}
        badgeVariant="navy"
        badgeIcon="status-page"
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

      {problemSolution && (
        <TwoColumnFeature
          eyebrow={problemSolution.eyebrow}
          title={problemSolution.title}
          body={problemSolution.body}
          imagePosition={problemSolution.imagePosition}
          illustrationComponent={<StatusPageProblemIllustration />}
        />
      )}

      {/* "Why 26Sunday Status Page" — Minimal Enterprise Section */}
      {whySection && <StatusPageWhySection data={whySection} />}

      {/* Capabilities 6-Card Grid */}
      {capabilities && (
        <CapabilitiesGrid
          heading={capabilities.heading}
          subheading={capabilities.subheading}
          items={capabilities.items}
        />
      )}

      {/* Featured Status Report Callout */}
      <StatusReportCallout />
    </>
  );
}
