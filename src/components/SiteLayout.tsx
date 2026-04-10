import { ExternalLink, Menu, X } from 'lucide-react';
import { useEffect, useState, type ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navItems, ROUTES, SITE_LINKS } from '../lib/site';
import { GlowOrb } from './site-ui';
import { WalletConnectButton } from './WalletConnectButton';

export function SiteLayout({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#080510] text-[color:var(--text-body)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,211,92,0.13),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(255,74,74,0.16),transparent_22%),linear-gradient(180deg,#050309_0%,#110814_45%,#050309_100%)]" />
      <div className="absolute inset-0 bg-noise-grid bg-[length:36px_36px] opacity-[0.08]" />
      <GlowOrb className="left-8 top-16 h-64 w-64" />
      <GlowOrb className="right-8 top-40 h-72 w-72" />
      <GlowOrb className="bottom-24 left-1/3 h-80 w-80" />

      <header className="relative z-20 px-4 py-3 sm:px-6 md:px-10 md:py-5">
        <div className="relative mx-auto flex max-w-7xl flex-col gap-2.5 rounded-[24px] border border-white/10 bg-black/25 px-3 py-2.5 backdrop-blur-md sm:px-5 md:flex-row md:items-center md:justify-between md:gap-3 md:rounded-full md:px-4 md:py-3">
          <NavLink to={ROUTES.home} className="group flex w-full min-w-0 items-center gap-2.5 sm:gap-5 md:w-auto">
            <div className="relative h-8 w-14 shrink-0 overflow-visible sm:h-10 sm:w-20 md:h-10 md:w-16">
              <img
                src="/logo-cannoli-header.png"
                alt="Holy Cannoli logo"
                className="absolute left-1/2 top-1/2 h-[3rem] w-auto -translate-x-[56%] -translate-y-1/2 object-contain drop-shadow-[0_0_14px_rgba(255,200,90,0.4)] transition duration-200 group-hover:drop-shadow-[0_0_18px_rgba(255,210,110,0.5)] sm:h-[4.35rem] md:h-[3.8rem]"
                style={{ imageRendering: 'auto' }}
              />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] uppercase tracking-[0.18em] text-[#5448c9] [text-shadow:0_0_6px_rgba(138,118,255,0.35),0_0_14px_rgba(138,118,255,0.25),0_0_20px_rgba(138,118,255,0.12)] sm:text-sm sm:tracking-[0.3em] md:text-[10px] md:tracking-[0.22em]">The Family Archive</p>
              <p className="truncate bg-[linear-gradient(90deg,rgba(250,204,21,0.82)_0%,rgba(255,244,180,0.96)_18%,rgba(250,204,21,0.82)_36%,rgba(250,204,21,0.82)_100%)] bg-[length:220%_100%] bg-clip-text text-sm font-semibold text-transparent animate-[header-shimmer_7s_ease-in-out_infinite] md:text-base">
                Holy Cannoli
              </p>
            </div>
          </NavLink>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] text-[color:var(--text-primary)] shadow-[0_0_20px_rgba(255,191,73,0.08)] transition duration-200 hover:border-amber-200/18 hover:text-amber-100 hover:shadow-[0_0_24px_rgba(255,191,73,0.14)] md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <nav className="hidden items-center gap-7 text-sm text-[color:var(--text-muted)] lg:flex">
            {navItems.map(([href, label]) => (
              <NavLink
                key={href}
                to={href}
                className={({ isActive }) =>
                  `transition hover:text-amber-200 ${isActive ? 'text-[color:var(--text-primary)]' : ''}`
                }
                end={href === ROUTES.home}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="relative z-30 flex w-full flex-col gap-1.5 sm:flex-row md:w-auto md:flex-none md:gap-3">
            <a
              href={SITE_LINKS.magicEden}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-red-400 to-fuchsia-500 px-4 py-1.5 text-[13px] font-semibold text-black shadow-lg shadow-red-500/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(255,191,73,0.28)] sm:w-auto md:px-4 md:py-2 md:text-sm"
            >
              Magic Eden <ExternalLink className="h-4 w-4" />
            </a>
            <WalletConnectButton />
          </div>
        </div>

        {isMobileMenuOpen ? (
          <div className="fixed inset-0 z-40 md:hidden" aria-modal="true" role="dialog">
            <button
              type="button"
              aria-label="Close navigation menu"
              className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute left-4 right-4 top-[5.75rem] overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,10,14,0.94),rgba(9,8,15,0.9))] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.45),0_0_28px_rgba(255,191,73,0.08)]">
              <nav className="flex flex-col gap-1.5">
                {navItems.map(([href, label]) => (
                  <NavLink
                    key={href}
                    to={href}
                    end={href === ROUTES.home}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `rounded-2xl border px-4 py-3 text-base font-semibold transition ${
                        isActive
                          ? 'border-amber-200/16 bg-[linear-gradient(135deg,rgba(255,214,102,0.12),rgba(255,255,255,0.04))] text-[color:var(--text-primary)]'
                          : 'border-white/8 bg-white/[0.03] text-[color:var(--text-body)] hover:border-white/12 hover:bg-white/[0.05] hover:text-[color:var(--text-primary)]'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        ) : null}
      </header>

      <main className="relative z-10">{children}</main>
    </div>
  );
}
