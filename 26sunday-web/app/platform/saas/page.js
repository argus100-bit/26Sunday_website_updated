import Image from 'next/image';
import Button from '@/components/ui/Button';
import MovingFeaturePill from '@/components/ui/MovingFeaturePill';
import SisyphusReliefCTA from '@/components/sections/SisyphusReliefCTA';
import { saasContent } from '@/content/platform/saas';

export const metadata = {
  title: saasContent.meta.title,
  description: saasContent.meta.description,
};

export default function SaaSPage() {
  const { hero, sectionLabel, valueProps } = saasContent;

  const featureHighlights = [
    { icon: '◆', text: '4 Connected Solutions' },
    { icon: '⚡', text: '26Sunday AI Engine' },
    { icon: '→', text: 'Fully Self-Serve Platform' },
  ];

  return (
    <>
      {/* Platform Hero */}
      <section
        className="platform-hero-gradient relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
        aria-labelledby="saas-hero-heading"
      >
        {/* Diagonal grid overlay */}
        <div className="absolute inset-0 diagonal-grid pointer-events-none" aria-hidden="true" />

        {/* Ambient atmospheric glow orbs */}
        <div
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(47,111,237,0.18) 0%, transparent 65%)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(26,61,110,0.5) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Eyebrow */}
              <span
                className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                {hero.eyebrow}
              </span>

              {/* Headline */}
              <h1
                id="saas-hero-heading"
                className="font-bold tracking-tight"
                style={{ color: 'white', fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
              >
                {hero.headline}
              </h1>

              {/* Subtitle */}
              <p
                className="mt-6 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                {hero.subtext}
              </p>

              {/* Moving Feature Highlights */}
              <div className="mt-8 flex justify-center lg:justify-start">
                <MovingFeaturePill items={featureHighlights} interval={2600} />
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start items-center gap-4">
                <Button href={hero.ctaHref} variant="primary" size="lg" showArrow>
                  {hero.ctaLabel}
                </Button>
                <Button
                  href={hero.secondaryCtaHref}
                  size="lg"
                  className="border border-white/20 text-white hover:bg-white/10 hover:border-white/40"
                >
                  {hero.secondaryCtaLabel}
                </Button>
              </div>
            </div>

            {/* Right Visual Artwork Column — Pure artwork blended into background */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-sm aspect-[4/5] max-h-[440px] flex items-center justify-center">
                {/* Subtle soft ambient blue aura behind the sketch */}
                <div 
                  className="absolute inset-0 rounded-full blur-3xl opacity-40 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(47,111,237,0.25) 0%, rgba(30,58,138,0.2) 50%, transparent 70%)' }}
                />
                <Image
                  src="/images/saas-ai-brain-white.png"
                  alt="26Sunday AI Neural Engine and Autonomous Automation"
                  width={340}
                  height={712}
                  priority
                  className="w-auto h-full max-h-[400px] object-contain relative z-10 drop-shadow-[0_8px_32px_rgba(47,111,237,0.2)]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="gradient-divider" />

      {/* Value Props Section */}
      <section
        className="section-pad relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-white)' }}
        aria-labelledby="saas-why-heading"
      >
        {/* Subtle accent dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(11,31,58,0.05) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Ambient watermark illustration */}
        <div
          className="absolute -right-20 bottom-10 w-96 h-96 opacity-[0.025] pointer-events-none select-none hidden xl:block"
          aria-hidden="true"
        >
          <Image
            src="/images/saas-ai-brain-dark.png"
            alt=""
            width={384}
            height={800}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="container-wide relative z-10">
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: 'var(--color-accent)' }}
            >
              {sectionLabel}
            </span>
            <h2
              id="saas-why-heading"
              className="font-bold"
              style={{ color: 'var(--color-primary)' }}
            >
              Everything you need. Nothing you don&apos;t.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {valueProps.map((vp, i) => (
              <article
                key={vp.title}
                className="glass-card rounded-2xl p-8 card-enter"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start gap-4">
                  <span className="number-badge">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {vp.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-neutral-600)' }}>
                      {vp.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center flex flex-wrap justify-center gap-4">
            <Button href="/get-started" variant="primary" size="lg" showArrow>
              Get Started with SaaS
            </Button>
            <Button href="/platform" variant="outline" size="lg">
              Compare SaaS vs SaaS+
            </Button>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <SisyphusReliefCTA
        title="Ready to operationalize trust?"
        subtitle="Start with the AI-powered platform. Upgrade to SaaS+ anytime."
        primaryCtaText="Get Started"
        primaryCtaHref="/get-started"
        secondaryCtaText="Talk to Sales"
        secondaryCtaHref="/company/contact"
      />
    </>
  );
}
