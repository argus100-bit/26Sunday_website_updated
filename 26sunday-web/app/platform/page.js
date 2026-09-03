import ComparisonTable from '@/components/sections/ComparisonTable';
import FAQAccordion from '@/components/sections/FAQAccordion';
import Button from '@/components/ui/Button';
import { comparisonContent } from '@/content/platform/comparison';

export const metadata = {
  title: comparisonContent.meta.title,
  description: comparisonContent.meta.description,
};

// JSON-LD FAQPage schema for rich results
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: comparisonContent.faq.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function PlatformPage() {
  const { table, faq } = comparisonContent;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Platform Hero */}
      <section
        className="platform-hero-gradient relative overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-32"
        aria-labelledby="platform-heading"
      >
        {/* Diagonal grid overlay */}
        <div className="absolute inset-0 diagonal-grid pointer-events-none" aria-hidden="true" />

        {/* Centered accent glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(47,111,237,0.18) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        <div className="container-wide relative z-10 text-center">
          {/* Eyebrow */}
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            Platform
          </span>

          {/* Headline */}
          <h1
            id="platform-heading"
            className="font-bold max-w-3xl mx-auto"
            style={{ color: 'white', fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', lineHeight: 1.1 }}
          >
            Two ways to run 26Sunday.
          </h1>

          {/* Subtitle */}
          <p
            className="mt-6 text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            Same AI engine. Same trust data. Different levels of human expertise. Choose how much of the work you want us to do.
          </p>

          {/* Two model pills */}
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="/platform/saas"
              className="glass-card-dark rounded-2xl px-8 py-5 text-center block min-w-[180px]"
            >
              <div className="text-2xl font-bold mb-1" style={{ color: 'white' }}>SaaS</div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>You run it</div>
            </a>
            <a
              href="/platform/saas-plus"
              className="glass-card-dark rounded-2xl px-8 py-5 text-center block min-w-[180px]"
              style={{ borderColor: 'rgba(255, 87, 87, 0.25)' }}
            >
              <div className="text-2xl font-bold mb-1" style={{ color: 'white' }}>
                SaaS<span style={{ color: 'var(--color-accent)' }}>+</span>
              </div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>We run it</div>
            </a>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Button href="/platform/saas" variant="primary" size="md" showArrow>
              Explore SaaS
            </Button>
            <Button
              href="/platform/saas-plus"
              size="md"
              className="border border-white/20 text-white hover:bg-white/10 hover:border-white/40"
            >
              Explore SaaS+
            </Button>
          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="gradient-divider" />

      {/* Comparison table */}
      <ComparisonTable
        rows={table.rows}
        closingStatement={table.closingStatement}
      />

      {/* FAQ */}
      <FAQAccordion
        items={faq}
        heading="Frequently asked questions"
      />
    </>
  );
}
