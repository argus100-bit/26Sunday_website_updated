/**
 * ScrollStatement — Full-width centered pacing element (Vanta "One Roof" style)
 * @param {Object} props
 * @param {string} props.statement - Bold large headline
 * @param {string} props.subtext - Supporting sentence
 */
export default function ScrollStatement({ statement, subtext }) {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ backgroundColor: 'var(--color-primary)' }}
      aria-label="Platform statement"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,87,87,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="container-wide relative text-center">
        <h2
          className="font-bold leading-tight"
          style={{
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            letterSpacing: '-0.03em',
          }}
        >
          {statement}
        </h2>
        {subtext && (
          <p
            className="mt-6 text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            {subtext}
          </p>
        )}
      </div>
    </section>
  );
}
