import Image from 'next/image';
import Button from '@/components/ui/Button';
import ProjectorProtractor from '@/components/ui/ProjectorProtractor';
import { aboutContent } from '@/content/company/about';

export const metadata = {
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
};

export default function AboutPage() {
  const { sections } = aboutContent;

  return (
    <>
      {/* Page hero */}
      <section
        className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden"
        style={{ backgroundColor: 'var(--color-primary)' }}
        aria-labelledby="about-heading"
      >
        {/* Subtle decorative background watermark */}
        <div
          className="absolute -right-16 -bottom-16 w-80 h-80 opacity-[0.04] pointer-events-none select-none hidden lg:block"
          aria-hidden="true"
        >
          <Image
            src="/images/about-sketch-white.png"
            alt=""
            width={320}
            height={334}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="container-narrow text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 opacity-90 transition-all duration-300 hover:opacity-100 hover:scale-105">
              <Image
                src="/images/about-sketch-white.png"
                alt="26Sunday Handcrafted Precision Emblem"
                width={140}
                height={146}
                priority
                className="w-full h-full object-contain drop-shadow-[0_4px_20px_rgba(255,255,255,0.08)]"
              />
            </div>
          </div>
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            About 26Sunday
          </span>
          <h1
            id="about-heading"
            className="font-bold"
            style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Precision. Transparency. Trust.
          </h1>
        </div>
      </section>

      {/* Content sections */}
      {sections.map((section, i) => (
        <section
          key={section.headline}
          className="section-pad"
          style={{ backgroundColor: i % 2 === 0 ? 'white' : 'var(--color-neutral-100)' }}
        >
          {/* Section 0: Precision & Reality (Vector Projector Protractor on Left, Writings on Right) */}
          {i === 0 ? (
            <div className="container-wide">
              <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
                {/* Left column: Vector Projector Instrument */}
                <div className="lg:col-span-2 flex justify-center order-2 lg:order-1">
                  <ProjectorProtractor />
                </div>

                {/* Right column: Content writings */}
                <div className="lg:col-span-3 order-1 lg:order-2">
                  <h2
                    className="font-bold leading-snug"
                    style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                  >
                    {section.headline}
                  </h2>
                  <div className="mt-6 space-y-4 prose-content">
                    {section.body.map((para, pi) => (
                      <p
                        key={pi}
                        className="text-base leading-relaxed whitespace-pre-line"
                        style={{ color: 'var(--color-neutral-600)' }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : section.eyebrow ? (
            /* Section 1: Mission section (Two-column with Rocket illustration on Right) */
            <div className="container-wide">
              <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
                {/* Text column */}
                <div className="lg:col-span-3">
                  <span
                    className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {section.eyebrow}
                  </span>
                  <h2
                    className="font-bold leading-snug"
                    style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                  >
                    {section.headline}
                  </h2>
                  <div className="mt-6 space-y-4 prose-content">
                    {section.body.map((para, pi) => (
                      <p
                        key={pi}
                        className="text-base leading-relaxed whitespace-pre-line"
                        style={{ color: 'var(--color-neutral-600)' }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Rocket illustration column */}
                <div className="lg:col-span-2 flex justify-center">
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 flex items-center justify-center">
                    <Image
                      src="/images/about-mission-rocket-transparent.png"
                      alt="Rocket launching — Our mission to make trust effortless"
                      width={320}
                      height={320}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Section 2: "But we were not done." — AI & Human Hand illustration on Left, Content on Right */
            <div className="container-wide">
              <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
                {/* Left column: AI + Human expert hand connection illustration */}
                <div className="lg:col-span-2 flex justify-center order-2 lg:order-1">
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 flex items-center justify-center">
                    <Image
                      src="/images/about-saas-plus-hands.png"
                      alt="AI and human expert collaboration — 26Sunday SaaS+"
                      width={320}
                      height={320}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Right column: Content writings */}
                <div className="lg:col-span-3 order-1 lg:order-2">
                  <h2
                    className="font-bold leading-snug"
                    style={{ color: 'var(--color-primary)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                  >
                    {section.headline}
                  </h2>
                  <div className="mt-6 space-y-4 prose-content">
                    {section.body.map((para, pi) => (
                      <p
                        key={pi}
                        className="text-base leading-relaxed whitespace-pre-line"
                        style={{ color: 'var(--color-neutral-600)' }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      ))}

      {/* CTA strip */}
      <section className="section-pad-sm" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container-wide text-center">
          <p className="text-xl font-semibold mb-6" style={{ color: 'white' }}>
            Ready to see it in action?
          </p>
          <Button href="/company/contact" variant="primary" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
