'use client';

/**
 * EcosystemIntegrationIllustration
 * 
 * Visualizes real-time data sync between Trust Center and the 26Sunday ecosystem —
 * shows data streams, KPIs, and a Trust Health Score gauge, all with subtle animations
 * in the unified warm-cream enterprise theme.
 */
export default function EcosystemIntegrationIllustration() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{
        aspectRatio: '4/3',
        minHeight: '320px',
        background: 'linear-gradient(160deg, #F8F5F0 0%, #F0EBE3 40%, #FAF7F2 100%)',
        border: '1px solid rgba(11, 31, 58, 0.08)',
      }}
      role="img"
      aria-label="Intelligent Ecosystem Integration — real-time data synchronization"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(11,31,58,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(11,31,58,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />

      {/* Subtle orbit paths */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <ellipse cx="50%" cy="50%" rx="38%" ry="28%" fill="none" stroke="rgba(11, 31, 58, 0.06)" strokeWidth="1" strokeDasharray="4 4" />
        <ellipse cx="50%" cy="50%" rx="28%" ry="20%" fill="none" stroke="rgba(11, 31, 58, 0.06)" strokeWidth="1" />
      </svg>

      {/* Trust Health Score — center gauge */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Outer glow ring */}
          <div
            className="absolute -inset-3 rounded-full"
            style={{
              border: '1.5px solid rgba(255, 87, 87, 0.12)',
              animation: 'gaugeGlow 3.5s ease-in-out infinite',
            }}
          />

          {/* Central card disc */}
          <div
            className="absolute inset-1 rounded-full shadow-lg"
            style={{
              backgroundColor: 'white',
              border: '1px solid rgba(11, 31, 58, 0.06)',
            }}
          />

          {/* Gauge ring */}
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 relative z-10 p-1">
            <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(11, 31, 58, 0.08)" strokeWidth="5.5" />
            <circle
              cx="50" cy="50" r="42" fill="none"
              stroke="url(#gaugeGradLight)"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeDasharray="264"
              strokeDashoffset="66"
              style={{ animation: 'gaugeStroke 2s ease-out both' }}
            />
            <defs>
              <linearGradient id="gaugeGradLight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff5757" />
                <stop offset="50%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#1C8A5A" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <span className="text-[24px] font-bold leading-none" style={{ color: '#0B1F3A' }}>78</span>
            <span className="text-[7.5px] font-semibold uppercase tracking-wider mt-1" style={{ color: '#5B6472' }}>
              Trust Score
            </span>
          </div>
        </div>
      </div>

      {/* KPI card — top left: Page Visits */}
      <div
        className="absolute"
        style={{
          top: '8%',
          left: '6%',
          animation: 'ecosystemCardFloat 5s ease-in-out infinite',
        }}
      >
        <div
          className="rounded-xl p-3 shadow-md"
          style={{
            backgroundColor: 'white',
            border: '1px solid rgba(11, 31, 58, 0.06)',
            width: '125px',
          }}
        >
          <div className="text-[8px] font-semibold uppercase tracking-wider mb-1" style={{ color: '#5B6472' }}>
            Page Visits
          </div>
          <div className="flex items-end justify-between">
            <span className="text-[18px] font-bold leading-none" style={{ color: '#0B1F3A' }}>247</span>
            <span
              className="text-[8px] font-bold px-1.5 py-0.5 rounded"
              style={{
                color: '#1C8A5A',
                backgroundColor: 'rgba(28, 138, 90, 0.08)',
              }}
            >
              +12%
            </span>
          </div>
          {/* Mini spark line */}
          <svg className="w-full h-4 mt-1.5" viewBox="0 0 80 16">
            <polyline
              points="0,14 10,10 20,12 30,6 40,8 50,4 60,7 70,2 80,5"
              fill="none"
              stroke="#1C8A5A"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <animate attributeName="stroke-dashoffset" from="200" to="0" dur="2s" fill="freeze" />
              <animate attributeName="stroke-dasharray" from="0 200" to="200 0" dur="2s" fill="freeze" />
            </polyline>
          </svg>
        </div>
      </div>

      {/* KPI card — top right: Downloads */}
      <div
        className="absolute"
        style={{
          top: '7%',
          right: '6%',
          animation: 'ecosystemCardFloat 5s ease-in-out 1.2s infinite',
        }}
      >
        <div
          className="rounded-xl p-3 shadow-md"
          style={{
            backgroundColor: 'white',
            border: '1px solid rgba(11, 31, 58, 0.06)',
            width: '125px',
          }}
        >
          <div className="text-[8px] font-semibold uppercase tracking-wider mb-1" style={{ color: '#5B6472' }}>
            Downloads
          </div>
          <div className="flex items-end justify-between">
            <span className="text-[18px] font-bold leading-none" style={{ color: '#0B1F3A' }}>89</span>
            <span
              className="text-[8px] font-bold px-1.5 py-0.5 rounded"
              style={{
                color: '#1C8A5A',
                backgroundColor: 'rgba(28, 138, 90, 0.08)',
              }}
            >
              +8%
            </span>
          </div>
          <svg className="w-full h-4 mt-1.5" viewBox="0 0 80 16">
            <polyline
              points="0,12 12,9 24,11 36,5 48,7 60,3 72,6 80,4"
              fill="none"
              stroke="#ff5757"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <animate attributeName="stroke-dashoffset" from="200" to="0" dur="2.5s" fill="freeze" />
              <animate attributeName="stroke-dasharray" from="0 200" to="200 0" dur="2.5s" fill="freeze" />
            </polyline>
          </svg>
        </div>
      </div>

      {/* KPI card — bottom left: Visitor Trends */}
      <div
        className="absolute"
        style={{
          bottom: '8%',
          left: '7%',
          animation: 'ecosystemCardFloat 5s ease-in-out 0.6s infinite',
        }}
      >
        <div
          className="rounded-xl p-3 shadow-md"
          style={{
            backgroundColor: 'white',
            border: '1px solid rgba(11, 31, 58, 0.06)',
            width: '130px',
          }}
        >
          <div className="text-[8px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#5B6472' }}>
            Visitor Trends
          </div>
          <div className="flex gap-1 items-end h-6">
            {[4, 7, 5, 9, 6, 11, 8, 13, 10, 14].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-xs"
                style={{
                  height: `${(h / 14) * 100}%`,
                  backgroundColor: h > 10 ? '#1C8A5A' : 'rgba(11, 31, 58, 0.12)',
                  animation: `barGrow 1.5s ease-out ${i * 0.1}s both`,
                  transformOrigin: 'bottom',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* KPI card — bottom right: Revenue Impact */}
      <div
        className="absolute"
        style={{
          bottom: '9%',
          right: '6%',
          animation: 'ecosystemCardFloat 5s ease-in-out 1.8s infinite',
        }}
      >
        <div
          className="rounded-xl p-3 shadow-md"
          style={{
            backgroundColor: 'white',
            border: '1px solid rgba(11, 31, 58, 0.06)',
            width: '125px',
          }}
        >
          <div className="text-[8px] font-semibold uppercase tracking-wider mb-1" style={{ color: '#5B6472' }}>
            Revenue Impact
          </div>
          <div className="flex items-end gap-1">
            <span className="text-[9px] font-bold" style={{ color: '#5B6472' }}>$</span>
            <span className="text-[18px] font-bold leading-none" style={{ color: '#0B1F3A' }}>42K</span>
          </div>
          <div className="text-[7.5px] mt-1 font-medium" style={{ color: '#5B6472' }}>
            Deals influenced
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gaugeGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.04); }
        }
        @keyframes gaugeStroke {
          from { stroke-dashoffset: 264; }
          to { stroke-dashoffset: 66; }
        }
        @keyframes ecosystemCardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes barGrow {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}
