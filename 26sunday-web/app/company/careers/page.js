import Image from 'next/image';

export const metadata = {
  title: 'Careers at 26Sunday',
  description:
    'Join the team building the infrastructure of trust for modern businesses. Explore open roles at 26Sunday.',
};

export default function CareersPage() {
  const principles = [
    {
      index: '01',
      label: 'Precision',
      tagline: 'Respect for reality in every detail',
      body: 'We believe precision is the respect for reality. In security and governance, assumptions are liabilities. Every control, every line of automation, and every audit trail is engineered with zero tolerance for ambiguity.',
      image: '/images/careers-precision-compass-raw.png',
      alt: 'Precision — geometric compass drafting',
      tenets: [
        'Evidence verified at the source',
        'Zero-compromise security standards',
        'Respect for operational edge cases',
      ],
    },
    {
      index: '02',
      label: 'Transparency',
      tagline: 'Radical clarity without workarounds',
      body: 'We operate openly with each other and with our customers. No surprises, no hidden black boxes, and no convenient shortcuts. Clear truth enables velocity and makes true compliance effortless.',
      image: '/images/careers-transparency-clover-raw.png',
      alt: 'Transparency — four-leaf clover reflection in clear water',
      tenets: [
        'Open audit trails and direct communication',
        'No artificial complexity or black boxes',
        'Clarity over comfort in every decision',
      ],
    },
    {
      index: '03',
      label: 'Trust',
      tagline: 'The foundation of enterprise velocity',
      body: 'We are building the infrastructure of trust for modern enterprises. That begins internally with trusting each other through high autonomy, shared accountability, and relentless follow-through.',
      image: '/images/careers-trust-hands-raw.png',
      alt: 'Trust — interlocking hand grip and mutual trust',
      tenets: [
        'High autonomy backed by ownership',
        'Long-term alignment over short-term gains',
        'Reliability in every single commitment',
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden"
        style={{ backgroundColor: 'var(--color-primary)' }}
        aria-labelledby="careers-heading"
      >
        {/* Subtle decorative watermark */}
        <div
          className="absolute -left-20 -bottom-20 w-96 h-96 opacity-[0.03] pointer-events-none select-none hidden lg:block"
          aria-hidden="true"
        >
          <Image
            src="/images/careers-handshake-white.png"
            alt=""
            width={384}
            height={384}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="container-narrow text-center relative z-10">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Careers
          </span>
          <h1
            id="careers-heading"
            className="font-bold"
            style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            Build the infrastructure of trust.
          </h1>
          <p
            className="mt-6 text-lg max-w-xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            We&apos;re a team that believes the most powerful enterprise tools are the ones that feel effortless. Come help us build them.
          </p>
        </div>
      </section>

      {/* How We Work — Architectural Editorial Showcase */}
      <section className="section-pad relative overflow-hidden bg-white" aria-labelledby="how-we-work-heading">
        <div className="container-wide">
          {/* Section Header */}
          <div className="max-w-2xl mb-16 lg:mb-20">
            <span
              className="inline-block text-xs font-mono font-bold tracking-widest uppercase mb-3 text-[#FF5757]"
            >
              // OPERATING PRINCIPLES
            </span>
            <h2
              id="how-we-work-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
              style={{ color: 'var(--color-primary)' }}
            >
              How we work.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              We believe elite enterprise software isn&apos;t built through shortcuts. Our culture is governed by three non-negotiable principles.
            </p>
          </div>

          {/* Unboxed 3-Pillar Architectural Showcase with Centered Symmetrical Dividers */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {principles.map((item, idx) => (
              <div
                key={item.label}
                className={`flex flex-col justify-between py-10 lg:py-0 border-b lg:border-b-0 border-neutral-200/80 ${
                  idx === 0
                    ? 'lg:pr-10 xl:pr-14 lg:border-r'
                    : idx === 1
                    ? 'lg:px-10 xl:px-14 lg:border-r'
                    : 'lg:pl-10 xl:pl-14 border-b-0'
                }`}
              >
                <div>
                  {/* Monospace Header Index */}
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-200/70 mb-8">
                    <span className="font-mono text-xs font-semibold text-neutral-400">
                      [ {item.index} ]
                    </span>
                    <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400">
                      PILLAR // {item.label.toUpperCase()}
                    </span>
                  </div>

                  {/* Free-Floating Artwork Showcase */}
                  <div className="relative w-full aspect-square max-w-[260px] sm:max-w-[300px] mx-auto mb-8 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={320}
                      height={320}
                      className="w-full h-full object-contain relative z-10"
                    />
                  </div>

                  {/* Title & Tagline */}
                  <h3 
                    className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {item.label}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#FF5757] mb-4">
                    {item.tagline}
                  </p>

                  {/* Core Philosophy Paragraph */}
                  <p className="text-sm sm:text-base leading-relaxed text-neutral-700 font-normal mb-8">
                    {item.body}
                  </p>
                </div>

                {/* Practical Tenets Checklist */}
                <div className="pt-6 border-t border-neutral-200/70 space-y-2.5">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400 block mb-3">
                    IN PRACTICE
                  </span>
                  {item.tenets.map((tenet, ti) => (
                    <div key={ti} className="flex items-center gap-2 text-xs font-medium text-neutral-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B1F3A] flex-shrink-0" />
                      <span>{tenet}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles — placeholder */}
      <section className="section-pad" style={{ backgroundColor: 'var(--color-neutral-100)' }}>
        <div className="container-narrow">
          <h2 className="font-bold text-center mb-10" style={{ color: 'var(--color-primary)' }}>
            Open roles
          </h2>
          <div
            className="rounded-2xl border-2 border-dashed p-16 text-center"
            style={{ borderColor: 'var(--color-neutral-200)' }}
            role="note"
            aria-label="Open roles coming soon"
          >
            <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-neutral-400)' }}>
              Role Listings Coming Soon
            </p>
            <p className="text-sm" style={{ color: 'var(--color-neutral-400)' }}>
              Open positions will appear here once confirmed by the hiring team. Check back soon, or reach out at{' '}
              <a href="mailto:careers@26sunday.com" className="underline" style={{ color: 'var(--color-accent)' }}>
                careers@26sunday.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
