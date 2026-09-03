'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavDropdown, solutionItems, platformItems, resourceItems, companyItems } from './MegaMenu';
import Button from '@/components/ui/Button';

/**
 * Floating site header that adaptively matches the native theme of each page
 */
export default function SiteHeader() {
  const pathname = usePathname() || '';
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);

  // Identify pages with dark navy hero backgrounds
  const darkPages = [
    '/platform',
    '/platform/saas',
    '/platform/saas-plus',
    '/resources/reports',
    '/reports',
    '/resources/product-updates',
    '/resources/documentation',
    '/company/about',
    '/about',
    '/company/careers',
    '/company/contact',
    '/infrastructure',
    '/legal',
    '/solutions/knowledge-base',
  ];

  const isDarkTheme = darkPages.some((page) => pathname === page || pathname.startsWith(page + '/'));

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 16);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change / resize
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const headerStyle = {
    height: 'var(--header-height)',
    background: isDarkTheme
      ? scrolled
        ? 'rgba(6, 20, 39, 0.92)'
        : 'rgba(11, 31, 58, 0.78)'
      : scrolled
        ? 'rgba(255, 255, 255, 0.92)'
        : 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(20px) saturate(1.5)',
    WebkitBackdropFilter: 'blur(20px) saturate(1.5)',
    border: isDarkTheme
      ? scrolled
        ? '1px solid rgba(255, 255, 255, 0.15)'
        : '1px solid rgba(255, 255, 255, 0.1)'
      : scrolled
        ? '1px solid rgba(11, 31, 58, 0.08)'
        : '1px solid rgba(11, 31, 58, 0.06)',
    transition: 'all 350ms cubic-bezier(0.16, 1, 0.3, 1)',
    boxShadow: isDarkTheme
      ? scrolled
        ? '0 12px 40px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(255, 87, 87, 0.12)'
        : '0 6px 24px rgba(0, 0, 0, 0.25)'
      : scrolled
        ? '0 8px 40px rgba(11, 31, 58, 0.08), 0 1px 3px rgba(11, 31, 58, 0.04)'
        : '0 4px 24px rgba(11, 31, 58, 0.04), 0 1px 2px rgba(11, 31, 58, 0.02)',
    borderRadius: '16px',
  };

  return (
    <>
      <header
        className="fixed top-3 left-3 right-3 sm:left-4 sm:right-4 lg:left-6 lg:right-6 z-50"
        style={headerStyle}
        role="banner"
      >
        <div className="container-wide h-full flex items-center justify-between gap-6">

          {/* Logo — collapses to icon on scroll */}
          <Link
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0 group"
            aria-label="26Sunday — home"
          >
            <span
              className="inline-flex items-center justify-center rounded-[10px] text-white flex-shrink-0 transition-all duration-300 p-1 shadow-sm"
              style={{
                backgroundColor: '#000000',
                width: scrolled ? '40px' : '46px',
                height: scrolled ? '40px' : '46px',
              }}
              aria-hidden="true"
            >
              <img src="/logo.svg" alt="26Sunday Logo" className="w-full h-full object-contain rounded-[8px]" />
            </span>
            <span
              className="font-bold tracking-tight overflow-hidden transition-all duration-400 flex items-center"
              style={{
                maxWidth: scrolled ? '0px' : '150px',
                opacity: scrolled ? 0 : 1,
                fontSize: '1.25rem',
              }}
              aria-hidden={scrolled}
            >
              <span style={{ color: isDarkTheme ? '#FFFFFF' : 'var(--color-primary)' }}>26</span>
              <span style={{ color: 'var(--color-accent)' }}>Sunday</span>
            </span>
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
            <NavDropdown
              label="Solutions"
              items={solutionItems}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
              darkMode={isDarkTheme}
            />
            <NavDropdown
              label="Platform"
              items={platformItems}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
              darkMode={isDarkTheme}
            />
            <NavDropdown
              label="Resources"
              items={resourceItems}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
              darkMode={isDarkTheme}
            />
            <NavDropdown
              label="Company"
              items={companyItems}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
              darkMode={isDarkTheme}
            />
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href="/get-started"
              variant="accent"
              size="sm"
            >
              Book a Demo
            </Button>
            <Button
              href="https://app.26sunday.com"
              variant={isDarkTheme ? 'outline' : 'secondary'}
              size="sm"
              external
              className={isDarkTheme ? '!text-white !border-white/30 hover:!bg-white/10' : ''}
            >
              Log In
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${isDarkTheme ? 'hover:bg-white/10' : 'hover:bg-[var(--color-neutral-100)]'
              }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={24} style={{ color: isDarkTheme ? '#FFFFFF' : 'var(--color-primary)' }} />
            ) : (
              <Menu size={24} style={{ color: isDarkTheme ? '#FFFFFF' : 'var(--color-primary)' }} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{
            backgroundColor: isDarkTheme ? '#061427' : 'white',
            paddingTop: 'calc(var(--header-height) + 16px)'
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav className="h-full overflow-y-auto pb-8" aria-label="Mobile navigation">
            <div className="container-wide py-6 space-y-1">

              {/* Mobile Solutions accordion */}
              {[
                { label: 'Solutions', items: solutionItems },
                { label: 'Platform', items: platformItems },
                { label: 'Resources', items: resourceItems },
                { label: 'Company', items: companyItems },
              ].map(({ label, items }) => (
                <div key={label} className={`border-b ${isDarkTheme ? 'border-white/10' : 'border-[var(--color-neutral-200)]'}`}>
                  <button
                    className="w-full flex items-center justify-between py-4 text-base font-semibold"
                    style={{ color: isDarkTheme ? '#FFFFFF' : 'var(--color-primary)' }}
                    onClick={() => setMobileSection(mobileSection === label ? null : label)}
                    aria-expanded={mobileSection === label}
                  >
                    {label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${mobileSection === label ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  {mobileSection === label && (
                    <div className="pb-4 space-y-1">
                      {items.map(({ icon: Icon, title, href }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isDarkTheme ? 'hover:bg-white/10' : 'hover:bg-[var(--color-neutral-100)]'
                            }`}
                        >
                          <Icon size={18} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                          <span className="text-sm font-medium" style={{ color: isDarkTheme ? '#FFFFFF' : 'var(--color-primary)' }}>{title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Actions */}
              <div className="pt-6 space-y-3">
                <Button
                  href="/get-started"
                  variant="accent"
                  size="md"
                  className="w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Demo
                </Button>
                <Button
                  href="https://app.26sunday.com"
                  variant={isDarkTheme ? 'outline' : 'primary'}
                  size="md"
                  className={`w-full justify-center ${isDarkTheme ? '!text-white !border-white/30' : ''}`}
                  external
                >
                  Log In
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
