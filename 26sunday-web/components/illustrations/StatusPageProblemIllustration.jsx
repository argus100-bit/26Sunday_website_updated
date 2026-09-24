'use client';

/**
 * StatusPageProblemIllustration
 *
 * Visualizes the chaos of handling manual status questions during outages —
 * flooded support channels, distracted engineers, delayed communications —
 * transitioning to automated broadcast, proactive subscriber updates, and
 * full focus on incident resolution.
 */
export default function StatusPageProblemIllustration() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{
        aspectRatio: '4/3',
        minHeight: '340px',
        background: 'linear-gradient(160deg, #F8F5F0 0%, #F0EBE3 40%, #FAF7F2 100%)',
        border: '1px solid rgba(11, 31, 58, 0.08)',
      }}
      role="img"
      aria-label="Stop answering status questions during outages — manual chaos transformed to automated transparency"
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

      {/* ---- LEFT HALF: "The Chaos" (Manual Outage Inquiries) ---- */}

      {/* Flooded support inquiries card — top left */}
      <div
        className="absolute"
        style={{
          top: '5%',
          left: '4%',
          animation: 'probCardFloat 6s ease-in-out infinite',
        }}
      >
        <div
          className="rounded-xl p-3.5 shadow-md"
          style={{
            backgroundColor: 'white',
            border: '1px solid rgba(11, 31, 58, 0.06)',
            width: '162px',
          }}
        >
          <div className="flex items-center gap-2 mb-2.5">
            <div
              className="w-5 h-5 rounded-md flex items-center justify-center"
              style={{ backgroundColor: 'rgba(255, 87, 87, 0.1)' }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ff5757" strokeWidth="2.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <span className="text-[10px] font-semibold" style={{ color: '#0B1F3A' }}>
              Support Surge
            </span>
          </div>

          {/* Incoming noisy messages (compact single-row cards) */}
          <div className="space-y-1.5">
            {[
              { channel: 'Slack', msg: '“Is API down?”' },
              { channel: 'Email', msg: '“Error 502 in app”' },
            ].map((inquiry, i) => (
              <div
                key={i}
                className="rounded-md px-2 py-1.5 flex items-center justify-between gap-1"
                style={{
                  backgroundColor: 'rgba(255, 87, 87, 0.04)',
                  border: '1px solid rgba(255, 87, 87, 0.12)',
                }}
              >
                <div className="truncate">
                  <div className="text-[8px] font-medium leading-none" style={{ color: '#0B1F3A' }}>
                    {inquiry.msg}
                  </div>
                  <div className="text-[7px] mt-0.5" style={{ color: '#5B6472' }}>
                    via {inquiry.channel}
                  </div>
                </div>
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: '#ff5757',
                    animation: `stallPulse 1.8s ease-in-out ${i * 0.4}s infinite`,
                  }}
                />
              </div>
            ))}
          </div>

          <div
            className="mt-2 rounded-md py-1 px-2 text-center"
            style={{
              backgroundColor: 'rgba(255, 87, 87, 0.08)',
              border: '1px solid rgba(255, 87, 87, 0.15)',
            }}
          >
            <span className="text-[7.5px] font-bold" style={{ color: '#ff5757' }}>
              +84 unread status DMs
            </span>
          </div>
        </div>
      </div>

      {/* Manual distraction & context switching — bottom left */}
      <div
        className="absolute"
        style={{
          bottom: '5%',
          left: '5%',
          animation: 'probCardFloat 6s ease-in-out 1.5s infinite',
        }}
      >
        <div
          className="rounded-xl p-3.5 shadow-md"
          style={{
            backgroundColor: 'white',
            border: '1px solid rgba(11, 31, 58, 0.06)',
            width: '155px',
          }}
        >
          <div className="flex items-center gap-2 mb-2.5">
            <div
              className="w-5 h-5 rounded-md flex items-center justify-center"
              style={{ backgroundColor: 'rgba(11, 31, 58, 0.05)' }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5B6472" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <span className="text-[10px] font-semibold" style={{ color: '#0B1F3A' }}>
              Manual Comms
            </span>
          </div>

          {/* Time drain & distraction bars */}
          <div className="space-y-2">
            <div>
              <div className="flex justify-between mb-0.5">
                <span className="text-[8px] font-medium" style={{ color: '#5B6472' }}>Answering DMs</span>
                <span className="text-[7px] font-bold uppercase" style={{ color: '#ff5757' }}>Distracted</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(11, 31, 58, 0.05)' }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    width: '80%',
                    backgroundColor: '#ff5757',
                    animation: 'stallPulse 2.2s ease-in-out infinite',
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-0.5">
                <span className="text-[8px] font-medium" style={{ color: '#5B6472' }}>Drafting updates</span>
                <span className="text-[7px] font-semibold" style={{ color: '#D97706' }}>Delayed</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(11, 31, 58, 0.05)' }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    width: '55%',
                    backgroundColor: '#D97706',
                  }}
                />
              </div>
            </div>
          </div>

          <div className="text-[7.5px] mt-2 text-center font-medium" style={{ color: '#ff5757' }}>
            ~45m delay to notify users
          </div>
        </div>
      </div>

      {/* ---- CENTER DIVIDER: Transformation arrow ---- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #0B1F3A 0%, #1a3d6e 100%)',
            boxShadow: '0 4px 16px rgba(11, 31, 58, 0.25)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </div>
        {/* Pulse ring */}
        <div
          className="absolute -inset-2.5 rounded-full"
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

      {/* ---- RIGHT HALF: "The Solution" (Automated Status Transparency) ---- */}

      {/* Automated status broadcast card — top right */}
      <div
        className="absolute"
        style={{
          top: '5%',
          right: '4%',
          animation: 'probCardFloat 6s ease-in-out 0.8s infinite',
        }}
      >
        <div
          className="rounded-xl p-3.5 shadow-md"
          style={{
            backgroundColor: 'white',
            border: '1px solid rgba(28, 138, 90, 0.12)',
            width: '162px',
          }}
        >
          <div className="flex items-center gap-2 mb-2.5">
            <div
              className="w-5 h-5 rounded-md flex items-center justify-center"
              style={{ backgroundColor: 'rgba(28, 138, 90, 0.1)' }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1C8A5A" strokeWidth="2.5">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>
            <span className="text-[10px] font-semibold" style={{ color: '#0B1F3A' }}>
              Auto-Broadcast
            </span>
          </div>

          {/* Automatic multichannel broadcast items */}
          <div className="space-y-1.5">
            {[
              { ch: 'Subscribers alerted', detail: 'Email & SMS' },
              { ch: 'Slack & Teams sync', detail: 'Webhook instant' },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-md px-2 py-1.5 flex items-center gap-2"
                style={{
                  backgroundColor: 'rgba(28, 138, 90, 0.04)',
                  border: '1px solid rgba(28, 138, 90, 0.12)',
                }}
              >
                <div
                  className="w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: '#1C8A5A',
                    animation: `checkAppear 0.4s ease-out ${0.8 + i * 0.3}s both`,
                  }}
                >
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div className="truncate">
                  <div className="text-[8px] font-medium leading-none" style={{ color: '#0B1F3A' }}>
                    {item.ch}
                  </div>
                  <div className="text-[7px] mt-0.5" style={{ color: '#5B6472' }}>
                    {item.detail}
                  </div>
                </div>
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
            <span className="text-[7.5px] font-semibold" style={{ color: '#1C8A5A' }}>
              Zero manual clicks ✓
            </span>
          </div>
        </div>
      </div>

      {/* Time & focus saved — bottom right */}
      <div
        className="absolute"
        style={{
          bottom: '5%',
          right: '5%',
          animation: 'probCardFloat 6s ease-in-out 2s infinite',
        }}
      >
        <div
          className="rounded-xl p-3.5 shadow-md"
          style={{
            backgroundColor: 'white',
            border: '1px solid rgba(28, 138, 90, 0.12)',
            width: '155px',
          }}
        >
          <div className="flex items-center gap-2 mb-2.5">
            <div
              className="w-5 h-5 rounded-md flex items-center justify-center"
              style={{ backgroundColor: 'rgba(28, 138, 90, 0.1)' }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1C8A5A" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span className="text-[10px] font-semibold" style={{ color: '#0B1F3A' }}>
              Resolution Focus
            </span>
          </div>

          {/* Before / After comparison */}
          <div className="space-y-2">
            <div>
              <div className="flex justify-between mb-0.5">
                <span className="text-[8px]" style={{ color: '#5B6472' }}>Support tickets</span>
                <span className="text-[8px] font-bold" style={{ color: '#ff5757' }}>120+ DMs</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ backgroundColor: 'rgba(255, 87, 87, 0.15)' }}>
                <div className="h-full rounded-full w-full" style={{ backgroundColor: 'rgba(255, 87, 87, 0.4)' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-0.5">
                <span className="text-[8px]" style={{ color: '#5B6472' }}>With 26Sunday</span>
                <span className="text-[8px] font-bold" style={{ color: '#1C8A5A' }}>Self-Serve</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ backgroundColor: 'rgba(28, 138, 90, 0.1)' }}>
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

          <div className="mt-2 flex items-center gap-1.5 justify-center">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1C8A5A" strokeWidth="2.5">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
            <span className="text-[7.5px] font-bold" style={{ color: '#1C8A5A' }}>
              100% focus on fixing
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes probCardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes stallPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
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
          to { width: 10%; }
        }
      `}</style>
    </div>
  );
}
