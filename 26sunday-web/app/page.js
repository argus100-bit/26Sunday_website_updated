import Hero from '@/components/sections/Hero';
import ScrollStatement from '@/components/sections/ScrollStatement';
import ProductCardRow from '@/components/sections/ProductCardRow';
import AudienceSegmentGrid from '@/components/sections/AudienceSegmentGrid';
import EngagementModelToggle from '@/components/sections/EngagementModelToggle';
import { homeContent } from '@/content/home';

export const metadata = {
  title: '26Sunday — Trust is Foundation. We Automate the Rest.',
  description:
    'The AI-powered GRC platform for Trust Centers, Security Questionnaires, Status Pages, and Readiness Assessments — one connected system to prove your security posture.',
};

// JSON-LD Organization schema for homepage
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '26Sunday',
  url: 'https://26sunday.com',
  logo: 'https://26sunday.com/images/logo.png',
  description:
    'AI-powered GRC platform for Trust Centers, Questionnaires, Status Pages, and Readiness Assessments.',
  sameAs: [
    'https://linkedin.com/company/26sunday',
    'https://x.com/26sunday',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'sales@26sunday.com',
      contactType: 'sales',
    },
    {
      '@type': 'ContactPoint',
      email: 'support@26sunday.com',
      contactType: 'customer service',
    },
  ],
};

export default function HomePage() {
  const { hero, scrollStatement, productCards, audienceSegments, engagementModel } = homeContent;

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Section 1: Hero */}
      <Hero
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        subtext={hero.subtext}
        ctaLabel={hero.ctaLabel}
        ctaHref={hero.ctaHref}
        secondaryCtaLabel={hero.secondaryCtaLabel}
        secondaryCtaHref={hero.secondaryCtaHref}
        image={hero.image}
        imageAlt={hero.imageAlt}
        showTrustSignals={false}
      />

      {/* Section 2: Scroll statement — "One Roof. We Lift. You Review." */}
      <ScrollStatement
        statement={scrollStatement.statement}
        subtext={scrollStatement.subtext}
      />

      {/* Section 3: Four-product showcase */}
      <ProductCardRow
        cards={productCards}
        heading="Everything trust, in one platform."
        subheading="Four purpose-built solutions that work independently or as one connected system."
      />

      {/* Section 4: Audience segments — "Who it's for" */}
      <AudienceSegmentGrid
        heading={audienceSegments.heading}
        segments={audienceSegments.segments}
      />

      {/* Section 5: Engagement model toggle */}
      <EngagementModelToggle
        heading={engagementModel.heading}
        body1={engagementModel.body1}
        body2={engagementModel.body2}
        models={engagementModel.models}
      />
    </>
  );
}
