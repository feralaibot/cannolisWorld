import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { SITE_LINKS, tradingCardSlots } from '../lib/site';
import { ComingSoonModal } from '../components/ComingSoonModal';
import { NeonFrame } from '../components/site-ui';

export function TradingCardsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="px-4 py-6 sm:px-6 md:px-10 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 space-y-2 md:mb-10 md:space-y-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--text-muted)]">Vault Access</p>
            <h1 className="font-display max-w-4xl text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl"><span className="text-[color:var(--text-headline)]">Collector stash.</span> <span className="text-[color:var(--text-headline)]">Locked shelf.</span> <span className="bg-[linear-gradient(90deg,rgba(250,204,21,0.82)_0%,rgba(255,244,180,0.96)_18%,rgba(250,204,21,0.82)_36%,rgba(250,204,21,0.82)_100%)] bg-[length:220%_100%] bg-clip-text text-transparent animate-[header-shimmer_7s_ease-in-out_infinite]">Still Baking…</span></h1>
          </div>

          <NeonFrame className="p-4 md:p-10">
            <div className="grid gap-5 md:gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start xl:grid-cols-[0.76fr_1.24fr]">
              <div>
                <h2 className="text-2xl font-black leading-tight text-[color:var(--text-headline)] md:text-4xl">The vault door stays shut until the family says otherwise.</h2>
                <p className="mt-2.5 max-w-2xl text-base leading-relaxed text-[color:var(--text-body)] md:mt-4 md:text-lg">Dark shelves. Locked crates. Future pulls waiting behind the vault door.</p>
                <div className="mt-4 flex flex-wrap gap-3 md:mt-7 md:gap-4">
                  <a
                    href={SITE_LINKS.x}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-4 py-2.5 font-semibold text-[color:var(--text-primary)] shadow-[0_0_0_rgba(255,191,73,0)] transition duration-200 hover:-translate-y-0.5 hover:border-amber-200/18 hover:shadow-[0_0_16px_rgba(255,191,73,0.1)] md:px-5 md:py-3"
                  >
                    Follow for Drop News <ExternalLink className="h-4 w-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2.5 font-semibold text-[color:var(--text-body)] shadow-[0_0_0_rgba(255,255,255,0)] transition duration-200 hover:-translate-y-0.5 hover:border-white/16 hover:bg-white/[0.06] hover:text-[color:var(--text-primary)] hover:shadow-[0_0_14px_rgba(255,255,255,0.06)] md:px-5 md:py-3"
                  >
                    Trading card store link
                  </button>
                </div>
              </div>

              <div className="grid gap-2.5 md:gap-4 sm:grid-cols-3 lg:gap-5 xl:gap-6">
                {tradingCardSlots.map(([title, subtitle], index) => (
                  <div
                    key={title}
                    className={`group rounded-[26px] border p-2.5 transition duration-300 hover:-translate-y-1 md:p-4 lg:p-[1.125rem] xl:p-5 ${
                      index === 0
                        ? 'border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.075),rgba(255,255,255,0.03))] shadow-[0_10px_30px_rgba(0,0,0,0.22),0_0_34px_rgba(255,196,90,0.1)] hover:border-amber-200/24 hover:shadow-[0_14px_38px_rgba(0,0,0,0.28),0_0_44px_rgba(255,196,90,0.18)]'
                        : 'border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.022))] shadow-[0_10px_24px_rgba(0,0,0,0.2),0_0_22px_rgba(255,255,255,0.04)] hover:border-white/18 hover:shadow-[0_14px_32px_rgba(0,0,0,0.26),0_0_30px_rgba(255,255,255,0.08)]'
                    }`}
                  >
                    {index === 0 ? (
                      <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] border border-amber-200/26 bg-[radial-gradient(circle_at_50%_18%,rgba(255,214,102,0.16),transparent_28%),linear-gradient(180deg,rgba(10,10,12,0.6),rgba(10,10,12,0.26))] p-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),inset_0_-10px_24px_rgba(0,0,0,0.18),0_0_26px_rgba(255,196,90,0.14)] transition duration-300 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.09),inset_0_-10px_24px_rgba(0,0,0,0.22),0_0_36px_rgba(255,196,90,0.2)] md:aspect-auto md:rounded-[22px] md:p-0.5 lg:p-1 xl:p-1.5">
                        <img
                          src="/trading-card-chef.avif"
                          alt="The Chef trading card art"
                          className="absolute inset-0.5 h-[calc(100%-0.25rem)] w-[calc(100%-0.25rem)] rounded-[16px] border border-white/8 bg-[linear-gradient(180deg,rgba(8,8,10,0.4),rgba(8,8,10,0.16))] object-contain object-center md:static md:h-48 md:w-full md:rounded-[17px] lg:h-56 xl:h-60"
                          loading="eager"
                        />
                      </div>
                    ) : index === 1 ? (
                      <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] border border-white/14 bg-[linear-gradient(180deg,rgba(10,10,12,0.6),rgba(10,10,12,0.26))] p-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-10px_24px_rgba(0,0,0,0.16),0_0_20px_rgba(255,255,255,0.04)] transition duration-300 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-10px_24px_rgba(0,0,0,0.2),0_0_30px_rgba(255,255,255,0.09)] md:aspect-auto md:rounded-[22px] md:p-0.5 lg:p-1 xl:p-1.5">
                        <img
                          src="/holy cannoli card.png"
                          alt="Laser Pup trading card"
                          className="absolute inset-0.5 h-[calc(100%-0.25rem)] w-[calc(100%-0.25rem)] rounded-[16px] border border-white/7 object-contain object-center md:static md:h-48 md:w-full md:rounded-[17px] lg:h-56 xl:h-60"
                        />
                      </div>
                    ) : (
                      <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] border border-white/14 bg-[linear-gradient(180deg,rgba(10,10,12,0.6),rgba(10,10,12,0.26))] p-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-10px_24px_rgba(0,0,0,0.16),0_0_20px_rgba(255,255,255,0.04)] transition duration-300 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-10px_24px_rgba(0,0,0,0.2),0_0_30px_rgba(255,255,255,0.09)] md:aspect-auto md:rounded-[22px] md:p-0.5 lg:p-1 xl:p-1.5">
                        <img
                          src="/trashcannoli card.png"
                          alt="Don of Dessert trading card"
                          className="absolute inset-0.5 h-[calc(100%-0.25rem)] w-[calc(100%-0.25rem)] rounded-[16px] border border-white/7 object-contain object-center md:static md:h-48 md:w-full md:rounded-[17px] lg:h-56 xl:h-60"
                        />
                      </div>
                    )}
                    <h3 className="mt-1.5 text-lg font-bold leading-snug text-[color:var(--text-primary)] md:mt-3 md:text-xl">{title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-[color:var(--text-muted)] md:mt-1.5">{subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </NeonFrame>
        </div>
      </section>
      <ComingSoonModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
