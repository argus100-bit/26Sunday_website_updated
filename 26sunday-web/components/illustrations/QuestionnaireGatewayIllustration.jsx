'use client';

/**
 * QuestionnaireGatewayIllustration
 * 
 * Visualizes the smooth hand-off from Trust Center to the Questionnaire solution —
 * shows a document upload flow, AI processing animation, and draft reply output.
 */
export default function QuestionnaireGatewayIllustration() {
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
      aria-label="Questionnaire Gateway — seamless hand-off from Trust Center to AI-powered responses"
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
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
        }}
      />

      {/* Flow direction arrow (decorative path) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <path
          d="M 15% 50% Q 35% 48%, 50% 50% Q 65% 52%, 85% 50%"
          fill="none"
          stroke="rgba(11, 31, 58, 0.06)"
          strokeWidth="2"
          strokeDasharray="6 6"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="2s" repeatCount="indefinite" />
        </path>
        {/* Flow chevrons */}
        <polygon points="46,47 50,50 46,53" fill="rgba(255, 87, 87, 0.15)">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite" />
        </polygon>
        <polygon points="54,47 58,50 54,53" fill="rgba(255, 87, 87, 0.15)">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" begin="0.3s" repeatCount="indefinite" />
        </polygon>
      </svg>

      {/* Step 1: Upload Card — left */}
      <div
        className="absolute"
        style={{
          top: '50%',
          left: '4%',
          transform: 'translateY(-50%)',
          animation: 'qCardFloat 6s ease-in-out infinite',
        }}
      >
        <div
          className="rounded-xl p-4 shadow-lg"
          style={{
            backgroundColor: 'white',
            border: '1px solid rgba(11, 31, 58, 0.06)',
            width: '135px',
          }}
        >
          {/* Step label */}
          <div className="flex items-center gap-1.5 mb-3">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
              style={{ backgroundColor: '#ff5757' }}
            >
              1
            </div>
            <span className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: '#0B1F3A' }}>Upload</span>
          </div>
          {/* File icon */}
          <div
            className="rounded-lg p-3 flex items-center gap-2 mb-2"
            style={{
              backgroundColor: 'rgba(11, 31, 58, 0.03)',
              border: '1px dashed rgba(11, 31, 58, 0.12)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5B6472" strokeWidth="1.5">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <div>
              <div className="text-[8px] font-semibold" style={{ color: '#0B1F3A' }}>DDQ_v3.xlsx</div>
              <div className="text-[7px]" style={{ color: '#5B6472' }}>142 questions</div>
            </div>
          </div>
          {/* Upload progress */}
          <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(11, 31, 58, 0.06)' }}>
            <div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #ff5757 0%, #1C8A5A 100%)',
                animation: 'uploadProgress 3s ease-out infinite',
              }}
            />
          </div>
        </div>
      </div>

      {/* Step 2: AI Processing — center */}
      <div
        className="absolute"
        style={{
          top: '22%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <div
          className="rounded-xl px-4 py-3 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #0B1F3A 0%, #1a3d6e 100%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            width: '130px',
          }}
        >
          <div className="flex items-center gap-1.5 mb-2">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: 'white' }}
            >
              2
            </div>
            <span className="text-[9px] font-semibold uppercase tracking-wider text-white/80">AI Processing</span>
          </div>
          {/* Processing animation */}
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[0, 1, 2].map(i => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: '#ff5757',
                    animation: `aiBlink 1.2s ease-in-out ${i * 0.2}s infinite`,
                  }}
                />
              ))}
            </div>
            <span className="text-[8px] text-white/50">Drafting replies</span>
          </div>
          {/* Typing lines */}
          <div className="mt-2 space-y-1">
            <div
              className="h-1 rounded-full"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                animation: 'typingLine 2s ease-out infinite',
              }}
            />
            <div
              className="h-1 rounded-full"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                width: '70%',
                animation: 'typingLine 2s ease-out 0.3s infinite',
              }}
            />
          </div>
        </div>
      </div>

      {/* Step 3: Draft Response — right */}
      <div
        className="absolute"
        style={{
          top: '50%',
          right: '4%',
          transform: 'translateY(-50%)',
          animation: 'qCardFloat 6s ease-in-out 1s infinite',
        }}
      >
        <div
          className="rounded-xl p-4 shadow-lg"
          style={{
            backgroundColor: 'white',
            border: '1px solid rgba(11, 31, 58, 0.06)',
            width: '135px',
          }}
        >
          <div className="flex items-center gap-1.5 mb-3">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
              style={{ backgroundColor: '#1C8A5A' }}
            >
              3
            </div>
            <span className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: '#0B1F3A' }}>Draft Ready</span>
          </div>
          {/* Response preview */}
          <div className="space-y-1.5">
            {[
              { q: 'Encryption at rest?', status: 'done' },
              { q: 'SOC 2 scope?', status: 'done' },
              { q: 'Custom DPA?', status: 'review' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div
                  className="w-3 h-3 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: item.status === 'done' ? '#1C8A5A' : '#D97706',
                  }}
                >
                  {item.status === 'done' ? (
                    <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  ) : (
                    <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <circle cx="12" cy="12" r="1" />
                    </svg>
                  )}
                </div>
                <span className="text-[8px]" style={{ color: '#5B6472' }}>{item.q}</span>
              </div>
            ))}
          </div>
          {/* Completion badge */}
          <div
            className="mt-3 rounded-md py-1 px-2 text-center"
            style={{
              backgroundColor: 'rgba(28, 138, 90, 0.08)',
              border: '1px solid rgba(28, 138, 90, 0.15)',
            }}
          >
            <span className="text-[8px] font-semibold" style={{ color: '#1C8A5A' }}>93% auto-drafted</span>
          </div>
        </div>
      </div>

      {/* Bottom status bar */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
        style={{ animation: 'qCardFloat 5s ease-in-out 0.5s infinite' }}
      >
        <div
          className="rounded-lg px-4 py-2 flex items-center gap-3 shadow-md"
          style={{
            backgroundColor: 'white',
            border: '1px solid rgba(11, 31, 58, 0.06)',
          }}
        >
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1C8A5A', animation: 'statusPulse 2s ease-in-out infinite' }} />
            <span className="text-[8px] font-medium" style={{ color: '#5B6472' }}>Avg. response: 6.5 hrs</span>
          </div>
          <div className="w-px h-3" style={{ backgroundColor: 'rgba(11, 31, 58, 0.1)' }} />
          <span className="text-[8px] font-medium" style={{ color: '#5B6472' }}>One-click submit</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes qCardFloat {
          0%, 100% { transform: translateY(-50%); }
          50% { transform: translateY(calc(-50% - 5px)); }
        }
        @keyframes aiBlink {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes typingLine {
          0% { width: 0%; opacity: 0; }
          30% { width: 100%; opacity: 1; }
          60% { width: 100%; opacity: 0.3; }
          100% { width: 0%; opacity: 0; }
        }
        @keyframes uploadProgress {
          0% { width: 0%; }
          70% { width: 100%; }
          100% { width: 100%; }
        }
        @keyframes statusPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
