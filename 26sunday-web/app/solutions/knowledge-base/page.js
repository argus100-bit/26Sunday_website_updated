import Link from 'next/link';
import { ArrowRight, Cpu, Database, Network, Shield, Terminal } from 'lucide-react';
import BinaryBrainSphere from '@/components/ui/BinaryBrainSphere';
import DotMatrix from '@/components/ui/DotMatrix';
import KnowledgeBaseContentsScroll from '@/components/sections/KnowledgeBaseContentsScroll';
import KnowledgeBaseTrustPower from '@/components/sections/KnowledgeBaseTrustPower';
import KnowledgeBaseLifecycle from '@/components/sections/KnowledgeBaseLifecycle';

export const metadata = {
  title: 'Knowledge Base | 26Sunday',
  description: 'Know Your Knowledge Base. The brain behind the operations that build the trust and take the load off you.',
};

export default function KnowledgeBasePage() {
  const blueprintItems = [
    {
      step: '01',
      icon: Database,
      title: 'Vectorized Trust Ingestion',
      description:
        'Continuously parses SOC 2, ISO 27001, HIPAA, and GDPR policies, vendor agreements, and audit evidence into high-dimensional vector embeddings.',
    },
    {
      step: '02',
      icon: Cpu,
      title: 'Multi-Modal Reasoning Engine',
      description:
        'When questionnaires arrive or audit gap-checks run, the reasoning engine synthesizes exact evidence matches with verifiable citations in milliseconds.',
    },
    {
      step: '03',
      icon: Network,
      title: 'Cross-Framework Memory',
      description:
        'Answers mapped once are permanently committed to memory and automatically populated across every connected compliance framework and security portal.',
    },
    {
      step: '04',
      icon: Shield,
      title: 'Air-Gapped Privacy Isolation',
      description:
        'Dedicated customer tenant boundaries. Your proprietary security architecture and evidence never train public models or leak across organizations.',
    },
  ];

  return (
    <div
      className="min-h-screen text-white selection:bg-[#FF5757] selection:text-white relative"
      style={{
        backgroundColor: '#050B14',
        backgroundImage: `
          radial-gradient(ellipse 90% 70% at 50% -10%, #0F233D 0%, #081324 45%, #050B14 100%)
        `,
      }}
    >
      
      {/* Background Matrix Grid */}
      <DotMatrix
        variant="dark"
        spacing={24}
        dotSize={1}
        opacity={0.08}
        className="fixed inset-0 pointer-events-none z-0"
      />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 sm:pt-40 pb-20 lg:pb-28">
        <div className="container-wide">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Big Headline & Editorial Copy */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Big Written Headline */}
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] mb-6"
                style={{ color: '#FFFFFF' }}
              >
                <span style={{ color: '#FFFFFF' }}>Know Your</span> <br />
                <span style={{ color: '#FF5757' }}>
                  Knowledge Base.
                </span>
              </h1>

              {/* High-Contrast Supporting Subtext */}
              <p 
                className="text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mb-5 text-white"
                style={{ color: '#FFFFFF' }}
              >
                The brain behind the operations that build the trust and take the load off you. Every policy, control, evidence artifact, and security answer dynamically indexed in real-time.
              </p>

              <p 
                className="text-base sm:text-lg font-normal leading-relaxed max-w-2xl mb-10 text-white"
                style={{ color: '#FFFFFF' }}
              >
                It&apos;s a version of the organizational collective memory. Every policy you upload, every questionnaire you fill out, every control you map, goes into a living library that AI draws from in real time. The more you use 26Sunday, the smarter your Knowledge Base gets, and the less manual work your people need to do.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/company/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-none bg-[#FF5757] text-white font-bold text-sm tracking-tight hover:bg-black transition-all duration-200 shadow-xl active:scale-[0.98]"
                >
                  <span>Request Architecture Demo</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

            </div>

            {/* Right Column: 3D Binary Brain Sphere Visualization */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <BinaryBrainSphere size={460} className="w-full max-w-[460px] aspect-square" />
            </div>

          </div>

        </div>
      </section>

      {/* What Lives Inside the Knowledge Base? (Scroll-driven fluid taxonomy) */}
      <KnowledgeBaseContentsScroll />

      {/* Powering your trust with Knowledge Base */}
      <KnowledgeBaseTrustPower />

      {/* Knowledge Base Lifecycle — Constructivist Stepped Architecture */}
      <KnowledgeBaseLifecycle />

      {/* Blueprint Architecture Grid */}
      <section
        className="py-20 border-t border-white/10 relative z-10"
        style={{
          backgroundColor: '#040810',
          backgroundImage: 'linear-gradient(180deg, #060E1A 0%, #03060C 100%)',
        }}
      >
        <div className="container-wide">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF5757] block mb-2">
              SYSTEM CAPABILITIES
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight"
              style={{ color: '#FFFFFF' }}
            >
              How the Brain Operates
            </h2>
            <p className="mt-3 text-slate-300 text-base font-normal leading-relaxed">
              Designed as the centralized neural backbone across your Trust Center, Questionnaires, Status Pages, and Readiness Audits.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {blueprintItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="p-6 rounded-none bg-white/[0.03] border border-white/10 hover:border-[#FF5757]/50 hover:bg-white/[0.05] transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-sm text-[#FF5757] font-bold">
                        {item.step}
                      </span>
                      <Icon size={20} className="text-white/90" />
                    </div>
                    <h3
                      className="text-lg font-bold mb-2 leading-snug"
                      style={{ color: '#FFFFFF' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Work In Progress Banner Callout */}
      <section
        className="py-16 border-t border-white/10 relative z-10"
        style={{ backgroundColor: '#020408' }}
      >
        <div className="container-wide">
          <div className="p-8 sm:p-10 rounded-none bg-white/[0.02] border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-none bg-[#FF5757]/10 border border-[#FF5757]/30 text-[11px] font-mono font-bold uppercase text-[#FF8A8A]">
                <Terminal size={12} className="text-[#FF5757]" />
                <span>WORK IN PROGRESS · PUBLIC PREVIEW</span>
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold mb-2"
                style={{ color: '#FFFFFF' }}
              >
                Knowledge Base Architecture &amp; Integration Blueprint
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Full schema documentation, ingestion pipelines, and interactive policy vector search will be unlocked prior to platform launch. Early access is available for enterprise partners.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-none bg-white text-[#0B1F3A] font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-lg"
              >
                <span>Talk to Engineering</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
