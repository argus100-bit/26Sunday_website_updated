'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import DotMatrix from '@/components/ui/DotMatrix';

/**
 * FAQAccordion — expand/collapse accordion, one open at a time
 * @param {Object} props
 * @param {Array<{question: string, answer: string}>} props.items
 * @param {string} [props.heading]
 */
export default function FAQAccordion({ items, heading }) {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-white)' }}
      aria-labelledby={heading ? 'faq-heading' : undefined}
    >
      <DotMatrix variant="light" spacing={26} dotSize={1} opacity={0.12} fade="bottom-fade" />
      <div className="container-narrow">
        {heading && (
          <h2
            id="faq-heading"
            className="text-center font-bold mb-12"
            style={{ color: 'var(--color-primary)' }}
          >
            {heading}
          </h2>
        )}

        <div
          className="rounded-2xl overflow-hidden border"
          style={{ borderColor: 'var(--color-neutral-200)' }}
          role="list"
        >
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            const id = `faq-item-${i}`;
            const panelId = `faq-panel-${i}`;

            return (
              <div
                key={i}
                role="listitem"
                style={{
                  borderTop: i > 0 ? '1px solid var(--color-neutral-200)' : 'none',
                }}
              >
                <button
                  id={id}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[var(--color-neutral-100)]"
                  onClick={() => toggle(i)}
                >
                  <span
                    className="text-base font-semibold leading-snug"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    style={{ color: 'var(--color-accent)' }}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={id}
                  hidden={!isOpen}
                  className="px-6 pb-5"
                  style={{ borderTop: '1px solid var(--color-neutral-200)' }}
                >
                  <p
                    className="pt-4 text-sm leading-relaxed"
                    style={{ color: 'var(--color-neutral-600)' }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
