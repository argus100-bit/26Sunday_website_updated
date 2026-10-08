import { Inter, Caveat, Space_Mono } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-handwriting',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://26sunday.com'),
  title: {
    default: '26Sunday — Trust is Foundation. We Automate the Rest.',
    template: '%s | 26Sunday',
  },
  description:
    'The AI-powered GRC platform for Trust Centers, Security Questionnaires, Status Pages, and Readiness Assessments — one connected system to prove your security posture.',
  keywords: [
    'GRC platform',
    'trust center',
    'security questionnaire automation',
    'SOC 2',
    'ISO 27001',
    'compliance readiness',
    'security posture',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://26sunday.com',
    siteName: '26Sunday',
    title: '26Sunday — Trust Operations Platform',
    description:
      'Automate trust operations. One platform for Trust Centers, Questionnaires, Status Pages, and Readiness Assessments.',
  },
  twitter: {
    card: 'summary_large_image',
    title: '26Sunday — Trust Operations Platform',
    description: 'AI-powered GRC platform. Prove security. Close deals faster.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

/**
 * Root layout — wraps every page with SiteHeader, SiteFooter, and fonts.
 * Content area has padding-top matching header height to prevent content sitting under the fixed header.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable} ${spaceMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SiteHeader />
        <div className="site-content">
          <main id="main-content">
            {children}
          </main>
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
