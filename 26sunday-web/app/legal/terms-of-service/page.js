'use client';

import { useState, useEffect } from 'react';
import { 
  FileText, 
  BookOpen, 
  CreditCard, 
  RefreshCw, 
  CheckCircle2, 
  Building2,
  Printer
} from 'lucide-react';

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState('agreement');

  const navItems = [
    { id: 'agreement', label: '1. Agreement & Acceptance', icon: FileText },
    { id: 'definitions', label: '2. Definitions', icon: BookOpen },
    { id: 'fees-payment', label: '3. Fees and Payment', icon: CreditCard },
    { id: 'renewals-termination', label: '4. Renewals & Termination', icon: RefreshCw },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enterprise Legal Web Header */}
      <section 
        className="pt-28 pb-14 px-4 relative overflow-hidden print:hidden"
        style={{ backgroundColor: '#0B1F3A' }}
      >
        {/* Subtle Background Glow */}
        <div 
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none blur-3xl opacity-20"
          style={{ background: '#2F6FED' }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-end gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-neutral-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                Entity: 26Sunday LLC
              </span>
              <button 
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors border border-white/10"
              >
                <Printer size={13} />
                <span>Print Document</span>
              </button>
            </div>
          </div>

          <h1 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: '#FFFFFF' }}
          >
            Master Terms of Service
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 max-w-3xl leading-relaxed">
            This Subscription Agreement governs access to and use of 26Sunday LLC&apos;s software, platforms, tools, and trust operation services.
          </p>

          {/* Compliance Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
            {['Master Services Agreement', 'SaaS & SaaS+ Tiers', 'Net 30 Invoicing', 'Enterprise Standards'].map((badge) => (
              <span 
                key={badge}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 bg-blue-950/40 border border-blue-500/30 px-3 py-1 rounded-md"
              >
                <CheckCircle2 size={12} />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Layout: Unboxed Clean Document */}
      <div className="max-w-6xl mx-auto px-4 py-12 print:py-0 print:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Table of Contents Sidebar */}
          <aside className="lg:col-span-4 print:hidden">
            <div className="sticky top-24 pr-4">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200/80">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Agreement Sections
                </span>
                <Building2 size={14} className="text-neutral-400" />
              </div>

              <nav className="space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-all text-left ${
                        isActive
                          ? 'bg-neutral-100 text-[#0B1F3A] font-semibold'
                          : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                      }`}
                    >
                      <span className="line-clamp-1">{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              <div className="mt-8 pt-4 border-t border-neutral-200/80">
                <div className="text-[11px] font-bold text-neutral-800 mb-1">
                  Legal & Order Inquiries
                </div>
                <p className="text-[11px] text-neutral-500 mb-2 leading-relaxed">
                  For master agreement questions or custom order summaries, reach out to our legal desk.
                </p>
                <a 
                  href="mailto:legal@26sunday.com" 
                  className="text-xs font-semibold text-[#FF5757] hover:underline inline-flex items-center gap-1"
                >
                  legal@26sunday.com &rarr;
                </a>
              </div>
            </div>
          </aside>

          {/* Policy Document Content */}
          <main className="lg:col-span-8 space-y-12 print:w-full print:space-y-6">

            {/* Print-Only Cover Header */}
            <div className="hidden print:block border-b-2 border-black pb-4 mb-6 text-center">
              <div className="text-xs font-bold uppercase tracking-widest text-neutral-700">26Sunday LLC — Legal Documentation</div>
              <h1 className="text-2xl font-bold text-black mt-1 mb-1" style={{ color: '#000000' }}>Master Terms of Service</h1>
              <p className="text-xs text-neutral-600">Official Legal Record | Website: 26sunday.com | Entity: 26Sunday LLC</p>
            </div>

            {/* 1. Agreement & Acceptance */}
            <section id="agreement" className="pb-10 border-b border-neutral-200/60">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-4">
                1. Agreement & Acceptance
              </h2>

              <div className="text-sm leading-relaxed text-neutral-700 space-y-4">
                <p className="font-medium text-neutral-900">
                  This Agreement is entered into between 26Sunday and the individual or entity accessing or using the Services (&quot;Customer&quot;). By accessing, downloading, installing, or otherwise making use of any software, tool, or service offered by 26Sunday — including but not limited to the Platform — or by explicitly indicating your acceptance, you acknowledge and agree to be legally bound by the terms and conditions set forth in this Agreement.
                </p>
                <p>
                  This Agreement takes effect on the earliest of the following: the date you first access or use any 26Sunday software or service, the date of installation or download, or the date on which you provide your express acceptance — whichever comes first.
                </p>
                <p>
                  Where an Order Summary has been executed in connection with your subscription or purchase of any 26Sunday software or services, such Order Summary is incorporated into and forms an integral part of this Agreement. In the event of any inconsistency or conflict between the terms of this Agreement and those of an Order Summary, the Order Summary shall take precedence to the extent of that conflict.
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 border-l-2 border-amber-400 pl-4 py-1 mt-4 italic">
                  If you are accepting this Agreement on behalf of a company, employer, or other legal entity, you represent and warrant that you possess the requisite authority to bind that entity to these terms and to act on its behalf in entering into this Agreement. Should you lack such authority, or should you choose not to accept the terms herein, you are not permitted to access, install, download, or use any part of 26Sunday&apos;s software or services.
                </p>
              </div>
            </section>

            {/* 2. Definitions */}
            <section id="definitions" className="pb-10 border-b border-neutral-200/60">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-4">
                2. Definitions
              </h2>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <p className="font-semibold text-neutral-900 mb-2">
                  Capitalized terms used throughout this Agreement that are not defined within a specific Section shall carry the meaning given to them here:
                </p>

                <div className="space-y-4 pt-1">
                  {[
                    { 
                      term: '"Governing Regulations"', 
                      def: 'means the body of applicable legal and regulatory requirements — including statutes, ordinances, administrative rules, and governmental directives — that govern the access to, use of, or delivery of the Services. Without limiting the foregoing, this includes the California Consumer Privacy Act (CCPA, 2018) and the European Union\'s General Data Protection Regulation (GDPR, Regulation (EU) 2016/679), as each may be amended or supplemented from time to time.' 
                    },
                    { 
                      term: '"Proprietary Information"', 
                      def: 'means any information, data, or material disclosed by one party (the "Disclosing Party") to the other (the "Receiving Party") that is either explicitly labeled as confidential or proprietary, or that a reasonable person in the same circumstances would understand to be non-public in nature. Proprietary Information includes, without limitation, Order Summaries, Customer Data, and any non-public details relating to business strategy, technology architecture, product development, financial projections, pricing structures, and marketing plans.' 
                    },
                    { 
                      term: '"Service Materials"', 
                      def: 'means the technical guides, user manuals, onboarding resources, API references, and any other written or digital materials that 26Sunday makes available in connection with the Services.' 
                    },
                    { 
                      term: '"Downloadable Software"', 
                      def: 'means any standalone or companion software application provided by 26Sunday that a Customer or its Permitted Users may install on their own devices or systems, solely for the purpose of accessing or enhancing the Services.' 
                    },
                    { 
                      term: '"Proprietary Rights"', 
                      def: 'means all forms of intellectual property protection recognized anywhere in the world, whether registered or unregistered, including rights arising under patent law, copyright law, trademark and service mark law, trade secret law, database protection legislation, and any equivalent or analogous rights or protections.' 
                    },
                    { 
                      term: '"Order Summary"', 
                      def: 'means any quote, purchase order, subscription form, or equivalent commercial document prepared by 26Sunday, agreed to by the Customer, and countersigned or accepted by 26Sunday, which sets out the specific Services to be provided.' 
                    },
                    { 
                      term: '"Platform"', 
                      def: 'means the full suite of products, tools, and services made available by 26Sunday to the Customer under this Agreement, including proprietary software, Downloadable Software, Service Materials, and associated updates.' 
                    },
                    { 
                      term: '"Subscription Period"', 
                      def: 'means the duration for which 26Sunday grants the Customer authorized access to the Platform, as established in the applicable Order Summary.' 
                    },
                  ].map((item, i) => (
                    <div key={i} className="pl-4 border-l-2 border-neutral-200">
                      <div className="font-bold text-neutral-900 text-xs uppercase tracking-wider mb-0.5">
                        {item.term}
                      </div>
                      <div className="text-neutral-700 leading-relaxed text-xs sm:text-sm">
                        {item.def}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. Fees and Payment */}
            <section id="fees-payment" className="pb-10 border-b border-neutral-200/60">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-4">
                3. Fees and Payment
              </h2>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-neutral-900 text-base mb-1">3.1 Fees</h3>
                  <p>
                    All fees listed in the relevant Order Summary (&quot;Fees&quot;) are payable by the Customer. Unless otherwise specified in the Order Summary, all fees are quoted in United States dollars. Pricing set in an active order summary remains locked until the next renewal term starts.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 text-base mb-1">3.2 Invoicing and Payment</h3>
                  <p>
                    At the beginning of each billing cycle, 26Sunday will invoice the Customer unless otherwise stated in the Order Summary. Payment for each invoice must be made no later than thirty (30) days after the date of the invoice (Net 30).
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 text-base mb-1">3.3 Taxes</h3>
                  <p>
                    Prices do not include any government assessments, levies, or taxes (collectively, &quot;Taxes&quot;). Taxes incurred by the Customer as a result of its acquisition or utilization of the Services are entirely its responsibility, with the exception of taxes imposed on 26Sunday&apos;s net profits.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 text-base mb-1">3.4 Overdue Payments</h3>
                  <p>
                    Interest on any payments not received by 26Sunday by the due date will calculate at 1.5% per month or the maximum rate allowed by applicable law. If any undisputed payment remains overdue fifteen (15) days after its due date, 26Sunday reserves the right to suspend access upon written notice.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Renewals & Termination */}
            <section id="renewals-termination" className="pb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-4">
                4. Renewals, Cancellation and Termination
              </h2>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-neutral-900 text-base mb-1">4.1 Automatic Renewal</h3>
                  <p>
                    Unless either party provides written notice of non-renewal as specified in Section 4.2, subscriptions automatically renew for successive terms equal to the initial Subscription Period.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 text-base mb-1">4.2 Notice of Non-Renewal</h3>
                  <p>
                    To prevent automatic renewal, either party must provide written notice of non-renewal at least thirty (30) days prior to the end of the current Subscription Period or Renewal Term.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 text-base mb-1">4.3 Cancellation</h3>
                  <p>
                    Customers may submit written notice of cancellation at any time. Cancellation takes effect at the end of the current active Subscription Period. Cancellation does not entitle the Customer to refunds of prepaid Fees.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-900 text-base mb-1">4.4 Termination for Cause</h3>
                  <p>
                    Either party may terminate this Agreement immediately upon written notice if the other party materially breaches any provision and fails to cure such breach within thirty (30) days after written notification, or becomes subject to insolvency or bankruptcy proceedings.
                  </p>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
