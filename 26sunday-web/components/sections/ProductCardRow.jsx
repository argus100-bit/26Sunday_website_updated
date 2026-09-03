import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import DotMatrix from '@/components/ui/DotMatrix';

/**
 * ProductCardRow — Horizontal card row showcasing the four 26Sunday products
 * @param {Object} props
 * @param {Array<{title: string, description: string, href: string, icon?: React.ComponentType}>} props.cards
 * @param {string} [props.heading]
 * @param {string} [props.subheading]
 */
export default function ProductCardRow({ cards, heading, subheading }) {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-white)' }}
      aria-labelledby={heading ? 'product-row-heading' : undefined}
    >
      <DotMatrix variant="light" spacing={30} dotSize={1} opacity={0.1} fade="top-fade" />
      <div className="container-wide">
        {heading && (
          <div className="text-center mb-14">
            <h2
              id="product-row-heading"
              className="font-bold"
              style={{ color: 'var(--color-primary)' }}
            >
              {heading}
            </h2>
            {subheading && (
              <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-neutral-600)' }}>
                {subheading}
              </p>
            )}
          </div>
        )}

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="product-card group flex flex-col rounded-2xl border p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
              style={{
                borderColor: 'var(--color-neutral-200)',
                backgroundColor: 'var(--color-neutral-100)',
                transition: 'all 0.2s ease',
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                style={{ backgroundColor: 'var(--color-accent-soft)' }}
                aria-hidden="true"
              >
                {card.icon ? (
                  <card.icon size={22} style={{ color: 'var(--color-accent)' }} />
                ) : (
                  <span className="text-sm font-bold" style={{ color: 'var(--color-accent)' }}>
                    {card.title.charAt(0)}
                  </span>
                )}
              </div>

              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: 'var(--color-primary)' }}
              >
                {card.title}
              </h3>

              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: 'var(--color-neutral-600)' }}
              >
                {card.description}
              </p>

              <div
                className="mt-5 flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: 'var(--color-accent)' }}
              >
                Learn more
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
