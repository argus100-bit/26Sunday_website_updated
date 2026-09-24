'use client';

/**
 * UnifiedControlPlaneIllustration
 * 
 * Shows a centralized control interface with policy cards, compliance
 * status indicators, and a clean dashboard layout — all animated subtly.
 */
export default function UnifiedControlPlaneIllustration() {
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
      aria-label="Unified Control Plane — centralized trust management interface"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(11,31,58,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(11,31,58,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />

      {/* Center hub — pulsing control node */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Outer ring pulse */}
          <div
            className="absolute -inset-8 rounded-full"
            style={{
              border: '1.5px solid rgba(255, 87, 87, 0.12)',
              animation: 'controlPulseOuter 4s ease-in-out infinite',
            }}
          />
          {/* Middle ring pulse */}
          <div
            className="absolute -inset-5 rounded-full"
            style={{
              border: '1px solid rgba(255, 87, 87, 0.18)',
              animation: 'controlPulseOuter 4s ease-in-out 0.5s infinite',
            }}
          />
          {/* Core hub */}
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #0B1F3A 0%, #1a3d6e 100%)',
              boxShadow: '0 4px 20px rgba(11, 31, 58, 0.2)',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating policy cards — top left */}
      <div
        className="absolute"
        style={{
          top: '12%',
          left: '8%',
          animation: 'cardFloat 6s ease-in-out infinite',
        }}
      >
        <div
          className="rounded-xl p-3 shadow-md"
          style={{
            backgroundColor: 'white',
            border: '1px solid rgba(11, 31, 58, 0.06)',
            width: '140px',
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: 'rgba(28, 138, 90, 0.1)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1C8A5A" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span className="text-[10px] font-semibold" style={{ color: '#0B1F3A' }}>Policies</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#1C8A5A' }} />
              <div className="h-1.5 rounded-full flex-1" style={{ backgroundColor: 'rgba(11, 31, 58, 0.06)' }} />
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#1C8A5A' }} />
              <div className="h-1.5 rounded-full" style={{ backgroundColor: 'rgba(11, 31, 58, 0.06)', width: '70%' }} />
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#1C8A5A' }} />
              <div className="h-1.5 rounded-full" style={{ backgroundColor: 'rgba(11, 31, 58, 0.06)', width: '55%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Compliance card — top right */}
      <div
        className="absolute"
        style={{
          top: '10%',
          right: '8%',
          animation: 'cardFloat 6s ease-in-out 1s infinite',
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
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 87, 87, 0.1)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ff5757" strokeWidth="2.5">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
            <span className="text-[10px] font-semibold" style={{ color: '#0B1F3A' }}>Compliance</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="h-5 rounded-full"
              style={{
                width: '85%',
                background: 'linear-gradient(90deg, #1C8A5A 0%, #22c55e 100%)',
                animation: 'progressGrow 3s ease-out 1s both',
              }}
            />
            <span className="text-[9px] font-bold" style={{ color: '#1C8A5A' }}>85%</span>
          </div>
        </div>
      </div>

      {/* Evidence card — bottom left */}
      <div
        className="absolute"
        style={{
          bottom: '14%',
          left: '10%',
          animation: 'cardFloat 6s ease-in-out 2s infinite',
        }}
      >
        <div
          className="rounded-xl p-3 shadow-md"
          style={{
            backgroundColor: 'white',
            border: '1px solid rgba(11, 31, 58, 0.06)',
            width: '120px',
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: 'rgba(11, 31, 58, 0.06)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6" />
              </svg>
            </div>
            <span className="text-[10px] font-semibold" style={{ color: '#0B1F3A' }}>Evidence</span>
          </div>
          <div className="text-[20px] font-bold" style={{ color: '#0B1F3A' }}>12</div>
          <div className="text-[8px]" style={{ color: '#5B6472' }}>Documents fresh</div>
        </div>
      </div>

      {/* Team activity card — bottom right */}
      <div
        className="absolute"
        style={{
          bottom: '12%',
          right: '6%',
          animation: 'cardFloat 6s ease-in-out 0.5s infinite',
        }}
      >
        <div
          className="rounded-xl p-3 shadow-md"
          style={{
            backgroundColor: 'white',
            border: '1px solid rgba(11, 31, 58, 0.06)',
            width: '135px',
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: 'rgba(217, 119, 6, 0.1)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <span className="text-[10px] font-semibold" style={{ color: '#0B1F3A' }}>Teams</span>
          </div>
          <div className="flex gap-1">
            {['#FF5757', '#1C8A5A', '#0B1F3A', '#D97706'].map((color, i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center text-[7px] text-white font-bold"
                style={{ backgroundColor: color, marginLeft: i > 0 ? '-4px' : 0 }}
              >
                {['S', 'C', 'L', 'E'][i]}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Connecting lines (decorative) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.15 }}>
        <line x1="50%" y1="50%" x2="18%" y2="28%" stroke="#0B1F3A" strokeWidth="1" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="50%" y1="50%" x2="82%" y2="25%" stroke="#0B1F3A" strokeWidth="1" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="50%" y1="50%" x2="20%" y2="75%" stroke="#0B1F3A" strokeWidth="1" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="50%" y1="50%" x2="80%" y2="78%" stroke="#0B1F3A" strokeWidth="1" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" />
        </line>
      </svg>

      <style jsx>{`
        @keyframes controlPulseOuter {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.15); opacity: 0.1; }
        }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes progressGrow {
          from { width: 0%; }
          to { width: 85%; }
        }
      `}</style>
    </div>
  );
}
