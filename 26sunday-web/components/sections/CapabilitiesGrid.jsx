/**
 * CapabilitiesGrid — 3×2 icon+title+description capability cards (Trust Center)
 * @param {Object} props
 * @param {string} [props.heading]
 * @param {string} [props.subheading]
 * @param {Array<{icon?: React.ComponentType, title: string, description: string}>} props.items
 */
export default function CapabilitiesGrid({ heading, subheading, items }) {
  const iconFallbacks = ['🔐', '🚀', '🎨', '🔔', '📁', '🔍'];

  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(160deg, #061324 0%, #0B1F3A 40%, #0F2A4D 75%, #05101F 100%)' 
      }}
      aria-labelledby={heading ? 'cap-grid-heading' : undefined}
    >
      {/* Subtle Ambient Radial Glow Orbs */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none opacity-40 blur-3xl z-0"
        style={{ background: 'radial-gradient(circle, rgba(255, 87, 87, 0.25) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full pointer-events-none opacity-30 blur-3xl z-0"
        style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)' }}
      />

      <div className="container-wide relative z-10">
        {heading && (
          <div className="text-center mb-14">
            <h2
              id="cap-grid-heading"
              className="font-bold text-3xl sm:text-4xl"
              style={{ color: 'white' }}
            >
              {heading}
            </h2>
            {subheading && (
              <p
                className="mt-4 text-lg max-w-2xl mx-auto"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                {subheading}
              </p>
            )}
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <article
              key={item.title}
              className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-white/20 group"
              style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-xl transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: 'rgba(255, 87, 87, 0.15)', border: '1px solid rgba(255, 87, 87, 0.25)' }}
                aria-hidden="true"
              >
                {item.icon ? (
                  <item.icon size={20} style={{ color: '#FF5757' }} />
                ) : (
                  iconFallbacks[i % iconFallbacks.length]
                )}
              </div>

              <h3
                className="text-base font-semibold mb-2 group-hover:text-[#FF5757] transition-colors duration-200"
                style={{ color: 'white' }}
              >
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
