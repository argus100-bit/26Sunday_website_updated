import { Check, X } from 'lucide-react';

/**
 * ComparisonTable — SaaS vs SaaS+ feature comparison
 * @param {Object} props
 * @param {Array<{label: string, saas: string, saasPlus: string}>} props.rows
 * @param {string} [props.closingStatement]
 */
export default function ComparisonTable({ rows, closingStatement }) {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: 'var(--color-neutral-100)' }}
      aria-labelledby="comparison-heading"
    >
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2
            id="comparison-heading"
            className="font-bold"
            style={{ color: 'var(--color-primary)' }}
          >
            SaaS vs SaaS+
          </h2>
          <p className="mt-4 text-lg" style={{ color: 'var(--color-neutral-600)' }}>
            Same AI engine. Different levels of human support.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--color-neutral-200)' }}>
          <table className="w-full" role="table" aria-label="SaaS vs SaaS+ comparison">
            <thead>
              <tr style={{ backgroundColor: 'var(--color-primary)' }}>
                <th
                  className="text-left px-6 py-5 text-sm font-semibold w-1/3"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                  scope="col"
                >
                  Feature
                </th>
                <th
                  className="text-left px-6 py-5 text-sm font-bold"
                  style={{ color: 'white' }}
                  scope="col"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full text-xs"
                      style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                    >
                      SaaS
                    </span>
                    You run it
                  </div>
                </th>
                <th
                  className="text-left px-6 py-5 text-sm font-bold"
                  style={{ color: 'white' }}
                  scope="col"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full text-xs"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    >
                      SaaS+
                    </span>
                    We run it
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  style={{
                    backgroundColor: i % 2 === 0 ? 'white' : 'var(--color-neutral-100)',
                    borderTop: '1px solid var(--color-neutral-200)',
                  }}
                >
                  <td
                    className="px-6 py-5 text-sm font-semibold"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {row.label}
                  </td>
                  <td className="px-6 py-5 text-sm" style={{ color: 'var(--color-neutral-600)' }}>
                    {row.saas}
                  </td>
                  <td className="px-6 py-5 text-sm" style={{ color: 'var(--color-neutral-600)' }}>
                    <span
                      className="inline-flex items-start gap-1.5"
                    >
                      <Check
                        size={14}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: 'var(--color-success)' }}
                        aria-hidden="true"
                      />
                      {row.saasPlus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {closingStatement && (
          <p
            className="mt-8 text-center text-base leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--color-neutral-600)' }}
          >
            {closingStatement}
          </p>
        )}
      </div>
    </section>
  );
}
