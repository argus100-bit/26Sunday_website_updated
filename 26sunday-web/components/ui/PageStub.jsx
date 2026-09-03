import Button from '@/components/ui/Button';
import GraphGrid from '@/components/ui/GraphGrid';

/**
 * Reusable page stub for sections awaiting content from the content team.
 * @param {Object} props
 * @param {string} props.section - e.g. "Resources — Documentation"
 * @param {string} props.title - Page heading
 * @param {string} props.description - Page subtext
 * @param {string} [props.note] - Content team note to display
 * @param {boolean} [props.withGraph=true] - Whether to render minimal engineering graph grid
 */
export default function PageStub({ section, title, description, note, withGraph = true }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FAF7F2' }}>
      {/* Header Hero with Minimal Graph Grid */}
      <section
        className="pt-28 pb-20 lg:pt-36 lg:pb-28 relative overflow-hidden border-b"
        style={{ 
          backgroundColor: '#0B1F3A',
          borderColor: 'rgba(255, 255, 255, 0.1)'
        }}
        aria-labelledby="stub-heading"
      >
        {withGraph && (
          <GraphGrid variant="dark" gridSize={32} majorRatio={4} opacity={1} fade="full" />
        )}
        <div className="container-narrow text-center relative z-10 px-4">
          <span
            className="inline-block text-xs sm:text-[13px] font-bold tracking-widest uppercase mb-4 text-[#7EB5FF]"
          >
            {section}
          </span>
          <h1
            id="stub-heading"
            className="font-extrabold tracking-tight text-white"
            style={{ color: '#FFFFFF', fontSize: 'clamp(1.85rem, 4vw, 3rem)' }}
          >
            {title}
          </h1>
          <p 
            className="mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-normal"
            style={{ color: '#E2E8F0' }}
          >
            {description}
          </p>
        </div>
      </section>

      {/* Content Area */}
      <section className="section-pad flex-grow" style={{ backgroundColor: '#FAF7F2' }}>
        <div className="container-narrow text-center px-4">
          <div
            className="rounded-2xl border-2 border-dashed p-12 sm:p-16 mx-auto bg-white/70 shadow-xs"
            style={{ borderColor: 'rgba(11, 31, 58, 0.15)' }}
            role="note"
            aria-label="Content coming soon"
          >
            <p className="text-sm font-bold mb-3 text-[#0B1F3A]">
              Full Content Coming Soon
            </p>
            {note && (
              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                {note}
              </p>
            )}
            <div className="mt-8">
              <Button href="/company/contact" variant="primary" size="sm">
                Get in touch in the meantime
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
