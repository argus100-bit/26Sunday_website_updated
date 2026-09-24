'use client';

import { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Lock, 
  UserCheck, 
  Clock, 
  Baby, 
  Globe2, 
  CheckCircle2, 
  Building2,
  Printer
} from 'lucide-react';

const navItems = [
  { id: 'introduction', label: '1. Introduction', icon: FileText },
  { id: 'personal-information', label: '2. Personal Information Collected', icon: Lock },
  { id: 'use-of-data', label: '3. Use of Personal Data', icon: UserCheck },
  { id: 'data-rights', label: '4. Data Protection Rights', icon: ShieldCheck },
  { id: 'data-retention', label: '5. Data Retention', icon: Clock },
  { id: 'children-privacy', label: '6. Children’s Privacy', icon: Baby },
  { id: 'global-compliance', label: '7. Data Protection & Laws', icon: Globe2 },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('introduction');

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
            Privacy Policy
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 max-w-3xl leading-relaxed">
            This Privacy Policy explains how 26Sunday LLC collects, uses, and protects personal information provided through our website 26sunday.com and associated trust operations services.
          </p>

          {/* Compliance Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
            {['GDPR Compliant', 'CCPA / CPRA Ready', 'ISO 27001 Aligned', 'US Entity'].map((badge) => (
              <span 
                key={badge}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-md"
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
                  Document Sections
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
                  Questions regarding Privacy?
                </div>
                <p className="text-[11px] text-neutral-500 mb-2 leading-relaxed">
                  For privacy inquiries or data rights requests, contact our Data Protection team.
                </p>
                <a 
                  href="mailto:privacy@26sunday.com" 
                  className="text-xs font-semibold text-[#FF5757] hover:underline inline-flex items-center gap-1"
                >
                  privacy@26sunday.com &rarr;
                </a>
              </div>
            </div>
          </aside>

          {/* Policy Document Content */}
          <main className="lg:col-span-8 space-y-12 print:w-full print:space-y-6">

            {/* Print-Only Cover Header */}
            <div className="hidden print:block border-b-2 border-black pb-4 mb-6 text-center">
              <div className="text-xs font-bold uppercase tracking-widest text-neutral-700">26Sunday LLC — Legal Documentation</div>
              <h1 className="text-2xl font-bold text-black mt-1 mb-1" style={{ color: '#000000' }}>Privacy Policy</h1>
              <p className="text-xs text-neutral-600">Official Legal Record | Website: 26sunday.com | Entity: 26Sunday LLC</p>
            </div>

            {/* 1. Introduction */}
            <section id="introduction" className="pb-10 border-b border-neutral-200/60">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-4">
                1. Introduction
              </h2>

              <div className="text-sm leading-relaxed text-neutral-700 space-y-4">
                <p className="font-medium text-neutral-900">
                  This privacy policy (“Policy”) is applicable to “26Sunday LLC” and this Privacy Policy explains how 26Sunday collects, uses and protects any personal information you provide to us when using our website, 26sunday.com (“Website” or “Site”) and services. We reserve the right to change or update this policy at any time, and the same will be updated here.
                </p>
                <p>
                  We firmly believe that you should always know what data we collect from you, the purposes for which such data is used, and have the ability to make informed decisions about what you want to share with us. Therefore we want to be clear about how and why we collect, store and use your personal data in the various ways in which you interact with us and the rights that you have to determine the forms of this interaction.
                </p>
              </div>
            </section>

            {/* 2. Personal Information We Collect */}
            <section id="personal-information" className="pb-10 border-b border-neutral-200/60">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-4">
                2. Personal Information We Collect
              </h2>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <p className="font-semibold text-neutral-900">
                  We collect the following categories of Personal Data:
                </p>

                <ul className="space-y-3 pl-1">
                  {[
                    { label: 'Identifiers', text: 'name, email address, username, IP address, and online identifiers.' },
                    { label: 'Account information', text: 'password hashes, company name, job title, and account preferences.' },
                    { label: 'Payment information', text: 'We gather credit card numbers, account information, and other payment details whenever you make a purchase or engage in any other financial activity.' },
                    { label: 'Internet or network activity', text: 'browser type, device identifiers, timestamps, referring URLs, pages viewed, and features utilized.' },
                    { label: 'Geolocation information', text: 'When you use the Service, we collect geolocation information based on your device and browser settings.' },
                    { label: 'Inferences', text: 'analytics derived from the previously mentioned data to comprehend customer preferences and enhance the services.' },
                    { label: 'Professional or employment-related information', text: 'only where you provide it in connection with sales inquiries, employment applications, or partner onboarding.' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5757] mt-2 flex-shrink-0" />
                      <div>
                        <strong className="text-neutral-900 font-semibold">{item.label}:</strong>{' '}
                        <span>{item.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <p className="text-xs sm:text-sm text-neutral-600 border-l-2 border-amber-400 pl-4 py-1 mt-4 italic">
                  Through our services, we do not intentionally gather sensitive personal information (as defined by the CCPA) or specific categories of personal data (as defined by GDPR Article 9).
                </p>
              </div>
            </section>

            {/* 3. Use of Your Personal Data */}
            <section id="use-of-data" className="pb-10 border-b border-neutral-200/60">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-4">
                3. Use of Your Personal Data
              </h2>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <p className="font-semibold text-neutral-900">
                  We use the personal information we gather for a number of commercial objectives, including:
                </p>

                <ul className="space-y-3 pl-1">
                  {[
                    { title: 'Delivery of goods and services:', body: 'To offer and deliver our services, including troubleshooting, enhancement, and customization.' },
                    { title: 'Service Development and Improvement:', body: 'We collect personal information in order to maintain user-friendly interfaces, improve company management, collect feedback, and improve services.' },
                    { title: 'Maintaining a Secure and Safe Environment:', body: 'To improve the platform\'s safety and security, we use personal data to identify and stop fraud, abuse, and security incidents.' },
                    { title: 'Personalized Content, Advertising, and Marketing:', body: 'By matching users\' requirements and interests with data, we optimize content and offer tailored experiences.' },
                    { title: 'Delivering the Services Requested:', body: 'We collect personal data to enable authorised users to operate the platform, facilitate services for customers, and assist in inquiries.' },
                    { title: 'Improvement and Development of Services:', body: 'We gather personal data to enhance services, gather feedback, maintain user-friendly interfaces, and improve business management.' },
                  ].map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B1F3A] mt-2 flex-shrink-0" />
                      <div>
                        <strong className="text-neutral-900 font-semibold">{obj.title}</strong>{' '}
                        <span>{obj.body}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <p className="text-xs sm:text-sm text-neutral-600 border-l-2 border-blue-400 pl-4 py-1 mt-4">
                  We will process your personal information when we have a valid legal basis to do so and in order to offer our services and complete our commitments to you. This includes where you have given us clear consent to do so, where we need to process your data to enter into or perform a contract with you, where we are required to do so to comply with a legal obligation or where we have a legitimate business interest in processing your data.
                </p>
              </div>
            </section>

            {/* 4. Your Data Protection Rights */}
            <section id="data-rights" className="pb-10 border-b border-neutral-200/60">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-4">
                4. Your Data Protection Rights
              </h2>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <p className="font-semibold text-neutral-900">
                  You may have the following rights about your personal data, depending on where you live and the laws that apply:
                </p>

                <ul className="space-y-3 pl-1">
                  {[
                    { title: 'Right of access:', desc: 'You have the right to request access to the personal information you have given us.' },
                    { title: 'Right to erasure:', desc: 'You have the right to request us to delete your personal information.' },
                    { title: 'Right to rectification:', desc: 'You have the right to ask us to fix any errors in your personal information.' },
                    { title: 'Right to object:', desc: 'Based on our legitimate interests or for direct marketing reasons, you have the right to object to the processing of your personal data.' },
                    { title: 'Right to revoke consent:', desc: 'You may revoke your consent at any moment if we are processing your personal data in accordance with your consent.' },
                  ].map((right, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5757] mt-2 flex-shrink-0" />
                      <div>
                        <strong className="text-neutral-900 font-semibold">{right.title}</strong>{' '}
                        <span>{right.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 5. Data Retention */}
            <section id="data-retention" className="pb-10 border-b border-neutral-200/60">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-4">
                5. Data Retention
              </h2>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <p>
                  In compliance with applicable laws, rules, and contractual agreements, we shall keep your personal information. In general, we only keep personal information for as long as is required to deliver our services and to meet legitimate business and legal requirements.
                </p>
                <p>
                  Your personal data will be deleted, anonymized, or aggregated when we have no legitimate business need or legal basis to process it. If this is not feasible (for instance, because your data is stored in backup archives), we will securely store your data and keep it separate from any additional processing until deletion is feasible.
                </p>
              </div>
            </section>

            {/* 6. Children’s Privacy */}
            <section id="children-privacy" className="pb-10 border-b border-neutral-200/60">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-4">
                6. Children’s Privacy
              </h2>

              <div className="text-sm text-neutral-700 leading-relaxed">
                <p>
                  People under the age of sixteen are not supposed to use our services. Without confirmed parental consent, we do not intentionally gather children&apos;s personal information. Please get in touch with us right away if you think we may have unintentionally gathered a child&apos;s personal information, and we&apos;ll take the necessary action to delete it from our systems.
                </p>
              </div>
            </section>

            {/* 7. Data Protection & Laws */}
            <section id="global-compliance" className="pb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-4">
                7. Data Protection & Laws
              </h2>

              <div className="text-sm text-neutral-700 leading-relaxed space-y-4">
                <p>
                  26Sunday is a United States based company but we recognize that privacy laws may be applicable to individuals in other jurisdictions. Where applicable, we are committed to complying with applicable data protection and privacy regulations, including but not limited to the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA/CPRA) and other applicable privacy laws. If your personal information is subject to such regulations we will process, protect and manage your data in accordance with the rights and obligations set forth under the applicable law.
                </p>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
