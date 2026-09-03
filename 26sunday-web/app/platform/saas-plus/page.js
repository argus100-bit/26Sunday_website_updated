import Image from 'next/image';
import Button from '@/components/ui/Button';
import MovingFeaturePill from '@/components/ui/MovingFeaturePill';
import SisyphusReliefCTA from '@/components/sections/SisyphusReliefCTA';
import { saasPlusContent } from '@/content/platform/saasPlus';

export const metadata = {
  title: saasPlusContent.meta.title,
  description: saasPlusContent.meta.description,
};

export default function SaaSPlusPage() {
  const { hero, sectionLabel, valueProps } = saasPlusContent;

  const featureHighlights = [
    { icon: '🛡', text: '24/7 Human Support' },
    { icon: '⚡', text: '6-hr SLA Guarantee' },
    { icon: '✦', text: '100% Expert-Backed Operations' },
  ];

  return (
    <>
      {/* Platform Hero */}
      <section
        className="platform-hero-gradient relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
        aria-labelledby="saas-plus-hero-heading"
      >
        {/* Diagonal grid overlay */}
        <div className="absolute inset-0 diagonal-grid pointer-events-none" aria-hidden="true" />

        {/* Accent glow — shifted right for SaaS+ differentiation */}
        <div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(47,111,237,0.2) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        {/* Secondary glow — bottom left */}
        <div
          className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full pointer-events-none"
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
                id="saas-plus-hero-heading"
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
                {/* Subtle soft ambient cyan/blue aura behind the sketch */}
                <div 
                  className="absolute inset-0 rounded-full blur-3xl opacity-40 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.2) 0%, rgba(47,111,237,0.2) 50%, transparent 70%)' }}
                />
                <Image
                  src="/images/saas-plus-ai-human-white.png"
                  alt="26Sunday SaaS+ AI Speed and Human Judgment Integration"
                  width={400}
                  height={521}
                  priority
                  className="w-auto h-full max-h-[400px] object-contain relative z-10 drop-shadow-[0_8px_32px_rgba(34,211,238,0.2)]"
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
        aria-labelledby="saas-plus-why-heading"
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
            src="/images/saas-plus-ai-human-dark.png"
            alt=""
            width={384}
            height={500}
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
              id="saas-plus-why-heading"
              className="font-bold"
              style={{ color: 'var(--color-primary)' }}
            >
              AI speed. Human judgment. Always.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
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

          {/* Demo video placeholder */}
          <div
            className="glass-card rounded-2xl flex items-center justify-center mx-auto mb-14"
            style={{
              aspectRatio: '16/9',
              maxWidth: '720px',
            }}
            role="img"
            aria-label="SaaS+ demo video — coming soon"
          >
            <div className="text-center p-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--color-accent-soft)' }}
                aria-hidden="true"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="var(--color-accent)" strokeWidth="1.5" />
                  <path d="M9.5 8.5l7 3.5-7 3.5V8.5z" fill="var(--color-accent)" />
                </svg>
              </div>
              <p className="font-semibold text-sm" style={{ color: 'var(--color-primary)' }}>Demo Video Coming Soon</p>
              <p className="text-xs mt-1" style={{ color: 'var(--color-neutral-600)' }}>A walkthrough of SaaS+ in action will be added here.</p>
            </div>
          </div>

          <div className="text-center flex flex-wrap justify-center gap-4">
            <Button href="/get-started" variant="primary" size="lg" showArrow>
              Get Started with SaaS+
            </Button>
            <Button href="/platform" variant="outline" size="lg">
              Compare SaaS vs SaaS+
            </Button>
          </div>
        </div>
      </section>

      <SisyphusReliefCTA
        title="Let our experts handle the heavy lifting."
        subtitle="Same AI engine as SaaS, plus certified GRC specialists working alongside you."
        primaryCtaText="Get Started"
        primaryCtaHref="/get-started"
        secondaryCtaText="Talk to Sales"
        secondaryCtaHref="/company/contact"
        hoverHintText="26Sunday certified GRC analyst + software handles it now"
      />
    </>
  );
}
