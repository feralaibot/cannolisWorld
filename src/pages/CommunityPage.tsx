import { ExternalLink } from 'lucide-react';
import { familyCards, SITE_LINKS } from '../lib/site';
import { NeonFrame } from '../components/site-ui';

export function CommunityPage() {
  return (
    <section className="px-4 py-8 sm:px-6 md:px-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 space-y-3 md:mb-10">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--text-muted)]">Family Channel</p>
          <h1 className="font-display max-w-4xl text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl"><span className="text-[color:var(--text-headline)]">Memes, rumors, polls, and</span> <span className="bg-[linear-gradient(90deg,rgba(250,204,21,0.82)_0%,rgba(255,244,180,0.96)_18%,rgba(250,204,21,0.82)_36%,rgba(250,204,21,0.82)_100%)] bg-[length:220%_100%] bg-clip-text text-transparent animate-[header-shimmer_7s_ease-in-out_infinite]">collector chatter</span> <span className="text-[color:var(--text-headline)]">live here.</span></h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <NeonFrame className="border-amber-200/15 p-8 shadow-[0_0_40px_rgba(255,196,90,0.08)]">
            <div className="space-y-4">
              <a href={SITE_LINKS.discord} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-amber-200/24 bg-[linear-gradient(135deg,rgba(255,214,102,0.14),rgba(255,255,255,0.06))] p-5 shadow-[0_0_28px_rgba(255,196,90,0.12)] transition hover:-translate-y-0.5 hover:border-amber-300/34 hover:bg-black/30 hover:shadow-[0_0_34px_rgba(255,196,90,0.16)]">
                <span className="font-semibold">Join the Posse on Discord</span>
                <ExternalLink className="h-4 w-4 text-amber-200" />
              </a>
              <a href={SITE_LINKS.x} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(0,0,0,0.12))] p-5 shadow-[0_0_18px_rgba(255,255,255,0.04)] transition hover:border-white/16 hover:bg-black/30 hover:shadow-[0_0_22px_rgba(255,255,255,0.06)]">
                <span className="font-semibold text-[color:var(--text-primary)]">Follow the Family on X</span>
                <ExternalLink className="h-4 w-4 text-amber-200" />
              </a>
            </div>
          </NeonFrame>

          <NeonFrame className="p-8 opacity-90">
            <div className="grid gap-4 sm:grid-cols-2">
              {familyCards.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(0,0,0,0.06))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.025),0_10px_20px_rgba(0,0,0,0.14)] transition duration-300 ease-out hover:-translate-y-[2px] hover:border-white/12 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_14px_24px_rgba(0,0,0,0.18)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/6">
                      <Icon className="h-5 w-5 text-red-200" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-[color:var(--text-primary)]">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-[color:var(--text-muted)]">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </NeonFrame>
        </div>
      </div>
    </section>
  );
}
