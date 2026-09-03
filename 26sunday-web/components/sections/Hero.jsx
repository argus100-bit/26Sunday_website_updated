'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import TypewriterText from '@/components/ui/TypewriterText';
import RotatingWord from '@/components/ui/RotatingWord';

/**
 * Hero component — two-column layout with synchronized headline and subtext word rotation
 */
export default function Hero({
  headline,
  subtext,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  eyebrow,
  badgeVariant = 'navy',
  badgeIcon,
  image,
  imageAlt,
  prefix = "We steady the ",
  words = ['bridge.', 'trust.', 'foundation.', 'course.'],
  subtextWords = ['Sales', 'Compliance', 'Security', 'Legal', 'Procurement', 'Vendor Risk'],
  showTrustSignals = true,
  trustSignals = ['SOC 2', 'ISO 27001', 'ISO 42001', 'NIST AI RMF'],
  enableTyping = true,
}) {
  const [syncIndex, setSyncIndex] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(!enableTyping);

  // Master clock: rotates both headline and subtext words simultaneously every 2800ms
  useEffect(() => {
    if (!isTypingDone) return;

    const timer = setInterval(() => {
      setSyncIndex((prev) => prev + 1);
    }, 2800);

    return () => clearInterval(timer);
  }, [isTypingDone]);

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-neutral-100)' }}
      aria-labelledby="hero-heading"
    >
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,87,87,0.06) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-28 pb-20 lg:pt-36 lg:pb-28">

          {/* Text block */}
          <div className="animate-fade-in-up">
            {eyebrow && (
              <Badge label={eyebrow} variant={badgeVariant || "navy"} icon={badgeIcon} className="mb-6" />
            )}

            <h1
              id="hero-heading"
              className="font-bold leading-[1.1] tracking-tight"
              style={{ color: 'var(--color-primary)' }}
            >
              <TypewriterText
                prefix={prefix}
                words={words}
                speed={55}
                delay={500}
                rotateInterval={2800}
                externalWordIndex={syncIndex}
                enableTyping={enableTyping}
                onTypingComplete={() => setIsTypingDone(true)}
              />
            </h1>

            <div
              className="mt-6 text-lg leading-relaxed max-w-xl"
              style={{ color: 'var(--color-neutral-600)' }}
            >
              {typeof subtext === 'string' && subtext.includes('{rotating}') ? (() => {
                const parts = subtext.split('{rotating}');
                return (
                  <p>
                    {parts[0]}
                    <RotatingWord 
                      words={subtextWords} 
                      interval={2800}
                      externalWordIndex={syncIndex}
                    />
                    {parts[1]}
                  </p>
                );
              })() : (
                <p>{subtext}</p>
              )}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={ctaHref} variant="primary" size="lg" showArrow>
                {ctaLabel}
              </Button>
              {secondaryCtaLabel && secondaryCtaHref && (
                <Button href={secondaryCtaHref} variant="outline" size="lg">
                  {secondaryCtaLabel}
                </Button>
              )}
            </div>

            {/* Trust signals */}
            {showTrustSignals && trustSignals && trustSignals.length > 0 && (
              <div className="mt-10 flex flex-wrap items-center gap-6">
                {trustSignals.map(signal => (
                  <span
                    key={signal}
                    className="text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full border"
                    style={{
                      color: 'var(--color-neutral-600)',
                      borderColor: 'var(--color-neutral-200)',
                      backgroundColor: 'var(--color-white)',
                    }}
                  >
                    {signal}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Image / visual block */}
          <div className="relative animate-fade-in">
            {image ? (
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl border transition-all duration-300 hover:shadow-3xl"
                style={{
                  backgroundColor: 'white',
                  borderColor: 'var(--color-neutral-200)',
                }}
              >
                {/* Browser bar */}
                <div
                  className="px-4 py-3 flex items-center justify-between border-b"
                  style={{
                    backgroundColor: '#FAF7F2',
                    borderColor: 'var(--color-neutral-200)',
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FF5F56' }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FFBD2E' }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#27C93F' }} />
                  </div>
                  <div
                    className="px-3 py-1 rounded-md text-[11px] font-mono border flex items-center gap-1.5 shadow-inner"
                    style={{
                      backgroundColor: 'white',
                      borderColor: 'var(--color-neutral-200)',
                      color: 'var(--color-neutral-600)',
                    }}
                  >
                    <span style={{ color: 'var(--color-success)' }}>https://</span>
                    <span>app.26sunday.com/dashboard</span>
                  </div>
                  <div className="w-10" />
                </div>

                {/* Dashboard Image */}
                <div className="relative w-full overflow-hidden bg-white">
                  <Image
                    src={image}
                    alt={imageAlt || '26Sunday Platform Dashboard'}
                    width={1200}
                    height={675}
                    priority
                    className="w-full h-auto object-cover block"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            ) : (
              /* Placeholder visual when no image provided */
              <div
                className="rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, #1a3d6e 60%, var(--color-accent) 100%)',
                  aspectRatio: '16/10',
                  minHeight: '360px',
                }}
                role="img"
                aria-label="26Sunday platform dashboard preview — image coming soon"
              >
                <div className="text-center p-8">
                  {/* Decorative dashboard wireframe */}
                  <div className="space-y-3 opacity-40">
                    <div className="h-3 rounded-full bg-white w-3/4 mx-auto" />
                    <div className="h-3 rounded-full bg-white w-1/2 mx-auto" />
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="h-16 rounded-lg bg-white/30" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-6 text-white/60 text-xs font-medium">Dashboard Preview</p>
                </div>
              </div>
            )}

            {/* Floating accent card */}
            <div
              className="absolute -bottom-5 -left-5 rounded-xl p-4 shadow-xl border"
              style={{
                backgroundColor: 'white',
                borderColor: 'var(--color-neutral-200)',
              }}
              aria-hidden="true"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-success)' }}
                >
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: 'var(--color-primary)' }}>All systems operational</p>
                  <p className="text-xs" style={{ color: 'var(--color-neutral-600)' }}>Real-time trust monitoring</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
