import Hero from '@/components/sections/Hero';
import TwoColumnFeature from '@/components/sections/TwoColumnFeature';
import CapabilitiesGrid from '@/components/sections/CapabilitiesGrid';
import TrustCenterReportCallout from '@/components/sections/TrustCenterReportCallout';
import { trustCenterContent } from '@/content/solutions/trustCenter';

export const metadata = {
  title: trustCenterContent.meta.title,
  description: trustCenterContent.meta.description,
};

export default function TrustCenterPage() {
  const { hero, features, capabilities } = trustCenterContent;

  return (
    <>
      <Hero
        eyebrow={hero.eyebrow}
        badgeVariant="navy"
        badgeIcon="trust-center"
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

      {features.map((feature, i) => (
        <TwoColumnFeature
          key={feature.title}
          eyebrow={feature.eyebrow}
          title={feature.title}
          body={feature.body}
          imagePosition={feature.imagePosition}
        />
      ))}

      <CapabilitiesGrid
        heading={capabilities.heading}
        subheading={capabilities.subheading}
        items={capabilities.items}
      />

      {/* Featured Research Report Callout */}
      <TrustCenterReportCallout />
    </>
  );
}
