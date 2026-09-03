'use client';

const useCases = [
  {
    index: '01',
    area: 'QUESTIONNAIRE AUTOMATION',
    title: 'For questionnaire responses',
    description:
      'When a new security questionnaire is received, the AI scans the Knowledge Base for relevant answers. It takes policies, previous responses, and control evidence – then drafts a full answer for you to review. The more approvals you give, the more right the AI will be next time.',
    result: 'Result: 80%+ autofill rate. Hours of review become weeks of work.',
  },
  {
    index: '02',
    area: 'TRUST CENTER SELF-SERVICE',
    title: 'For self-service at the Trust Center',
    description:
      'The Knowledge Base is the engine behind every answer when a prospect enters your Trust Center and interacts with the smart search bar or Q&A widget. Visitors type “encryption” and immediately get relevant snippets from your policies and reports. No chat. No wait. No tickets.',
    result: '40-70% reduction in inbound security questionnaire.',
  },
  {
    index: '03',
    area: 'CONTINUOUS COMPLIANCE AUDIT',
    title: 'For Readiness Assessment',
    description:
      'When you run a readiness check against SOC 2 or ISO 42001, the Knowledge Base maps your existing controls and evidence to framework requirements. It finds gaps, recommends solutions, and measures your closure rate. As you close gaps, the platform will automatically update your readiness score.',
    result: 'Go from zero to audit-ready in weeks, not months.',
  },
  {
    index: '04',
    area: 'INCIDENT & RUNBOOK DISPATCH',
    title: 'Status Page Communication',
    description:
      'When an outage strikes, every second counts. The Knowledge Base contains your pre-approved incident templates, runbooks, and previous post-mortems, so when a service goes down, the AI writes up a clear, accurate incident update in seconds. Your team will review, make any necessary tweaks, and publish. No more looking at a blank screen with customers waiting.',
    result: 'Result: Incident updates issued in minutes, not hours. Consistently professional in communication.',
  },
];

export default function KnowledgeBaseTrustPower() {
  return (
    <section
      className="py-24 lg:py-32 relative z-10"
      style={{ backgroundColor: '#050B14' }}
      aria-labelledby="kb-trust-heading"
    >
      <div className="container-wide">

        {/* Section Header — restrained, editorial typographic hierarchy */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <h2
            id="kb-trust-heading"
            className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.15]"
            style={{
              color: '#FFFFFF',
              WebkitTextStroke: '0.5px #FFFFFF',
            }}
          >
            How the Knowledge Base Can Help Your Work
          </h2>
        </div>

        {/* Architectural 2x2 Ledger Grid — hairline boundaries, quiet hover depth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-white/[0.08] divide-y lg:divide-y-0 divide-white/[0.08]">
          {useCases.map((item, idx) => {
            const isTopRow = idx < 2;
            const isLeftCol = idx % 2 === 0;

            return (
              <div
                key={item.index}
                className={`p-8 sm:p-10 lg:p-12 flex flex-col justify-between transition-colors duration-200 hover:bg-white/[0.015] ${
                  isTopRow ? 'lg:border-b lg:border-white/[0.08]' : ''
                } ${isLeftCol ? 'lg:border-r lg:border-white/[0.08]' : ''}`}
              >
                <div>
                  {/* Top Domain Stamp */}
                  <div className="mb-6">
                    <span
                      className="text-[11px] font-mono tracking-[0.16em] uppercase font-semibold"
                      style={{ color: '#FF7A7A' }}
                    >
                      {item.area}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl sm:text-2xl font-bold tracking-tight mb-4 leading-snug"
                    style={{ color: '#FFFFFF' }}
                  >
                    {item.title}
                  </h3>

                  {/* Body description */}
                  <p
                    className="text-[15px] sm:text-base leading-relaxed font-normal mb-8"
                    style={{ color: '#FFFFFF' }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Measured Result / Impact */}
                <div className="pt-5 border-t border-white/[0.12] mt-auto">
                  <span
                    className="text-[11px] font-mono tracking-widest uppercase block mb-2 font-semibold"
                    style={{ color: '#CBD5E1' }}
                  >
                    OPERATIONAL RESULT
                  </span>
                  <p
                    className="text-sm sm:text-[15px] font-medium leading-relaxed"
                    style={{ color: '#FFFFFF' }}
                  >
                    {item.result}
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
