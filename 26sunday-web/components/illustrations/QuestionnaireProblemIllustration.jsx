'use client';

/**
 * QuestionnaireProblemIllustration
 *
 * Visualizes the chaos of manual security questionnaire processes —
 * scattered spreadsheets, stalled deals, time drain — with a subtle
 * transformation toward order via 26Sunday.
 */
export default function QuestionnaireProblemIllustration() {
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
      aria-label="Security questionnaires blocking deals — scattered manual process"
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

      {/* ---- LEFT HALF: "The Chaos" ---- */}

      {/* Stalled deal pipeline bar — top left */}
      <div
        className="absolute"
        style={{
          top: '8%',
          left: '5%',
          animation: 'probCardFloat 6s ease-in-out infinite',
        }}
      >
        <div
          className="rounded-xl p-4 shadow-md"
          style={{
            backgroundColor: 'white',
            border: '1px solid rgba(11, 31, 58, 0.06)',
            width: '165px',
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 87, 87, 0.1)' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff5757" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <span className="text-[10px] font-semibold" style={{ color: '#0B1F3A' }}>Deal Pipeline</span>
          </div>
          {/* Stalled progress bars */}
          <div className="space-y-2">
            {[
              { label: 'Acme Corp', pct: 72, stuck: true },
              { label: 'NovaTech', pct: 45, stuck: true },
              { label: 'FinServe', pct: 30, stuck: false },
            ].map((deal, i) => (
              <div key={i}>
                <div className="flex justify-between mb-0.5">
                  <span className="text-[8px] font-medium" style={{ color: '#5B6472' }}>{deal.label}</span>
                  {deal.stuck && (
                    <span className="text-[7px] font-bold uppercase tracking-wider" style={{ color: '#ff5757' }}>Stalled</span>
                  )}
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(11, 31, 58, 0.05)' }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${deal.pct}%`,
                      backgroundColor: deal.stuck ? '#ff5757' : 'rgba(11, 31, 58, 0.15)',
                      animation: deal.stuck ? `stallPulse 2s ease-in-out ${i * 0.4}s infinite` : 'none',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scattered spreadsheet — bottom left */}
      <div
        className="absolute"
        style={{
          bottom: '12%',
          left: '4%',
          animation: 'probCardFloat 6s ease-in-out 1.5s infinite',
        }}
      >
        <div
          className="rounded-xl p-4 shadow-md"
          style={{
            backgroundColor: 'white',
            border: '1px solid rgba(11, 31, 58, 0.06)',
            width: '155px',
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: 'rgba(11, 31, 58, 0.05)' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#5B6472" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="3" y1="15" x2="21" y2="15" />
                <line x1="9" y1="3" x2="9" y2="21" />
              </svg>
            </div>
            <span className="text-[10px] font-semibold" style={{ color: '#0B1F3A' }}>Manual Entry</span>
          </div>
          {/* Mini spreadsheet grid */}
          <div className="rounded-md overflow-hidden" style={{ border: '1px solid rgba(11, 31, 58, 0.08)' }}>
            {[0, 1, 2, 3].map(row => (
              <div key={row} className="flex" style={{ borderBottom: row < 3 ? '1px solid rgba(11, 31, 58, 0.05)' : 'none' }}>
                {[0, 1, 2].map(col => (
                  <div
                    key={col}
                    className="flex-1 h-4"
                    style={{
                      borderRight: col < 2 ? '1px solid rgba(11, 31, 58, 0.05)' : 'none',
                      backgroundColor: row === 0
                        ? 'rgba(11, 31, 58, 0.04)'
                        : col === 2 && row > 0
                          ? 'rgba(255, 87, 87, 0.04)'
                          : 'transparent',
                    }}
                  >
                    {row > 0 && col < 2 && (
                      <div
                        className="h-1 rounded-full mx-1 mt-1"
                        style={{
                          backgroundColor: 'rgba(11, 31, 58, 0.08)',
                          width: `${40 + Math.random() * 40}%`,
                        }}
                      />
                    )}
                    {row > 0 && col === 2 && (
                      <div className="flex items-center justify-center h-full">
                        <span className="text-[6px] font-bold" style={{ color: '#ff5757' }}>?</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="text-[8px] mt-2 text-center font-medium" style={{ color: '#ff5757' }}>12 unanswered fields</div>
        </div>
      </div>

      {/* ---- CENTER DIVIDER: Transformation arrow ---- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #0B1F3A 0%, #1a3d6e 100%)',
            boxShadow: '0 4px 16px rgba(11, 31, 58, 0.25)',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </div>
        {/* Pulse ring */}
        <div
          className="absolute -inset-3 rounded-full"
          style={{
            border: '1.5px solid rgba(11, 31, 58, 0.1)',
            animation: 'transformPulse 3s ease-in-out infinite',
          }}
        />
      </div>

      {/* Connecting flow line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.1 }}>
        <line x1="35%" y1="50%" x2="65%" y2="50%" stroke="#0B1F3A" strokeWidth="1.5" strokeDasharray="5 5">
          <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite" />
        </line>
      </svg>

      {/* ---- RIGHT HALF: "The Solution" ---- */}

      {/* Automated response card — top right */}
      <div
        className="absolute"
        style={{
          top: '8%',
          right: '5%',
          animation: 'probCardFloat 6s ease-in-out 0.8s infinite',
        }}
      >
        <div
          className="rounded-xl p-4 shadow-md"
          style={{
            backgroundColor: 'white',
            border: '1px solid rgba(28, 138, 90, 0.12)',
            width: '165px',
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: 'rgba(28, 138, 90, 0.1)' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1C8A5A" strokeWidth="2.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="text-[10px] font-semibold" style={{ color: '#0B1F3A' }}>AI Auto-Fill</span>
          </div>
          {/* Completed response items */}
          <div className="space-y-2">
            {[
              { q: 'Encryption standards', done: true },
              { q: 'Access control policy', done: true },
              { q: 'Incident response plan', done: true },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div
                  className="w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: '#1C8A5A',
                    animation: `checkAppear 0.4s ease-out ${1 + i * 0.3}s both`,
                  }}
                >
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <span className="text-[9px]" style={{ color: '#5B6472' }}>{item.q}</span>
              </div>
            ))}
          </div>
          <div
            className="mt-2 rounded-md py-1 px-2 text-center"
            style={{
              backgroundColor: 'rgba(28, 138, 90, 0.06)',
              border: '1px solid rgba(28, 138, 90, 0.12)',
            }}
          >
            <span className="text-[8px] font-semibold" style={{ color: '#1C8A5A' }}>90% auto-drafted ✓</span>
          </div>
        </div>
      </div>

      {/* Time saved metric — bottom right */}
      <div
        className="absolute"
        style={{
          bottom: '12%',
          right: '6%',
          animation: 'probCardFloat 6s ease-in-out 2s infinite',
        }}
      >
        <div
          className="rounded-xl p-4 shadow-md"
          style={{
            backgroundColor: 'white',
            border: '1px solid rgba(28, 138, 90, 0.12)',
            width: '155px',
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: 'rgba(28, 138, 90, 0.1)' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1C8A5A" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <span className="text-[10px] font-semibold" style={{ color: '#0B1F3A' }}>Time Saved</span>
          </div>
          {/* Before / After comparison */}
          <div className="space-y-2">
            <div>
              <div className="flex justify-between mb-0.5">
                <span className="text-[8px]" style={{ color: '#5B6472' }}>Before</span>
                <span className="text-[8px] font-bold" style={{ color: '#ff5757' }}>2 weeks</span>
              </div>
              <div className="h-2 rounded-full" style={{ backgroundColor: 'rgba(255, 87, 87, 0.15)' }}>
                <div className="h-full rounded-full w-full" style={{ backgroundColor: 'rgba(255, 87, 87, 0.4)' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-0.5">
                <span className="text-[8px]" style={{ color: '#5B6472' }}>After</span>
                <span className="text-[8px] font-bold" style={{ color: '#1C8A5A' }}>2 hours</span>
              </div>
              <div className="h-2 rounded-full" style={{ backgroundColor: 'rgba(28, 138, 90, 0.1)' }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    backgroundColor: '#1C8A5A',
                    animation: 'shrinkBar 2.5s ease-out 0.5s both',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mt-2.5 flex items-center gap-1.5 justify-center">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1C8A5A" strokeWidth="2.5">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
            <span className="text-[8px] font-bold" style={{ color: '#1C8A5A' }}>80% faster</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes probCardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes stallPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes transformPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.3); opacity: 0; }
        }
        @keyframes checkAppear {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes shrinkBar {
          from { width: 100%; }
          to { width: 12%; }
        }
      `}</style>
    </div>
  );
}
