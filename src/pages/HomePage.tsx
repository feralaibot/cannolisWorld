import { ChevronRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gatewayCards, ROUTES } from '../lib/site';
import { NeonFrame } from '../components/site-ui';

export function HomePage() {
  return (
    <section className="px-4 pb-12 pt-3 sm:px-6 md:px-10 md:pb-16 md:pt-10">
      <div className="mx-auto grid max-w-7xl gap-1 md:gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="max-w-[17.25rem] space-y-3 md:max-w-none md:space-y-8">
          <div className="space-y-2 md:space-y-5">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[color:var(--text-muted)] sm:text-[11px] sm:tracking-[0.28em]">Archive Entry</p>
            <h1 className="font-display max-w-[8.5ch] text-[1.64rem] font-black leading-[0.82] tracking-[-0.04em] sm:text-5xl sm:leading-[0.9] sm:tracking-tight md:max-w-4xl md:text-7xl">
              <span className="block font-medium leading-[0.93] tracking-[0.08em] text-[color:var(--text-headline)] sm:tracking-[0.12em]">The Night the</span>
              <span className="mt-0.5 block bg-[linear-gradient(90deg,rgba(250,204,21,0.82)_0%,rgba(255,244,180,0.96)_18%,rgba(250,204,21,0.82)_36%,rgba(250,204,21,0.82)_100%)] bg-[length:220%_100%] bg-clip-text text-[1.18em] leading-[0.9] text-transparent animate-[header-shimmer_7s_ease-in-out_infinite] drop-shadow-[0_6px_18px_rgba(255,200,120,0.25)]">Cannolis</span>
              <span className="mt-0.5 block text-[0.8em] font-extrabold uppercase tracking-[0.03em] text-[color:var(--text-headline)] sm:mt-1 sm:text-[0.68em] sm:tracking-[0.06em]">Woke Up</span>
            </h1>
            <p className="max-w-[16.75rem] bg-[linear-gradient(90deg,rgba(250,204,21,0.82)_0%,rgba(255,244,180,0.96)_18%,rgba(250,204,21,0.82)_36%,rgba(250,204,21,0.82)_100%)] bg-[length:240%_100%] bg-clip-text text-[0.88rem] font-semibold leading-snug text-transparent animate-[header-shimmer_3.4s_ease-in-out_infinite] sm:text-xl md:max-w-none">Before the posse. Before the war.</p>
            <p className="max-w-[17rem] text-[14px] leading-[1.45] text-[color:var(--text-body)] sm:text-lg md:max-w-2xl md:leading-7">
              A dessert-mob universe where comic prophecy, NFT heat, and trading-card chaos share one neon roof.
            </p>
          </div>

          <div className="flex flex-col gap-1.5 pt-0 sm:flex-row sm:flex-wrap sm:gap-3 md:pt-0">
            <Link
              to={ROUTES.community}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-amber-200/20 bg-[linear-gradient(135deg,rgba(255,214,102,0.18),rgba(255,255,255,0.06))] px-5 py-3 text-sm font-semibold text-amber-50 shadow-[0_0_26px_rgba(255,191,73,0.14)] transition duration-200 hover:-translate-y-0.5 hover:border-amber-200/32 hover:bg-[linear-gradient(135deg,rgba(255,214,102,0.24),rgba(255,255,255,0.08))] hover:text-white hover:shadow-[0_0_30px_rgba(255,191,73,0.2)] sm:w-auto md:px-6 md:py-4 md:text-base"
            >
              Join the Posse <MessageCircle className="h-5 w-5" />
            </Link>
            <Link
              to={ROUTES.draw}
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-[color:var(--text-primary)] shadow-[0_0_18px_rgba(255,255,255,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-white/16 hover:bg-white/[0.06] hover:shadow-[0_0_24px_rgba(255,255,255,0.08)] sm:w-auto md:px-6 md:py-4 md:text-base"
            >
              Draw Your Own Cannoli
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[84%] aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_0_40px_rgba(255,180,80,0.15)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_52px_rgba(255,180,80,0.22)] md:mx-0 md:max-w-none md:min-h-[520px] md:aspect-auto md:rounded-[28px]">
          <div className="absolute inset-0 overflow-hidden rounded-2xl bg-black md:rounded-[28px]">
            <img
              src="/the-posse.jpeg"
              alt="The Posse poster"
              className="w-full h-full object-cover object-[center_30%] scale-[0.82] -translate-y-8 md:h-full md:w-full md:scale-100 md:translate-y-0 md:object-cover md:object-center md:hidden"
            />
            <div
              className="absolute inset-0 hidden bg-black bg-[length:88%_auto] bg-[position:center_-123px] bg-no-repeat md:block"
              style={{
                backgroundImage: "url('/the-posse.jpeg')",
              }}
            />
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,214,102,0.18),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(255,110,110,0.08),transparent_34%),linear-gradient(180deg,rgba(6,4,10,0.1),rgba(5,4,9,0.5))]" />
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_18%,rgba(255,224,160,0.1),transparent_26%),linear-gradient(180deg,rgba(0,0,0,0.01)_0%,rgba(0,0,0,0.05)_40%,rgba(0,0,0,0.18)_64%,rgba(0,0,0,0.46)_100%)]" />
            <div className="absolute inset-0 z-[11] bg-[radial-gradient(circle_at_50%_32%,transparent_20%,rgba(0,0,0,0.1)_68%,rgba(0,0,0,0.28)_100%)]" />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
              style={{
                height: '46%',
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.54) 26%, rgba(184,132,52,0.18) 48%, rgba(255,210,140,0.14) 67%, rgba(255,232,190,0.08) 78%, transparent 100%)',
              }}
            />
            <div
              className="pointer-events-none absolute bottom-[7%] left-[32%] z-10 h-[11%] w-[32%] -translate-x-1/2 blur-[7px] md:hidden"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(255, 224, 170, 0.28) 0%, rgba(255, 210, 140, 0.18) 20%, rgba(140, 92, 24, 0.14) 40%, rgba(0,0,0,0.22) 60%, transparent 75%)',
              }}
            />
            <div
              className="pointer-events-none absolute bottom-[7%] left-[71%] z-10 h-[10%] w-[24%] -translate-x-1/2 blur-[7px] md:hidden"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(255, 224, 170, 0.22) 0%, rgba(255, 210, 140, 0.14) 22%, rgba(140, 92, 24, 0.12) 42%, rgba(0,0,0,0.2) 62%, transparent 75%)',
              }}
            />
            <div
              className="pointer-events-none absolute bottom-[6.5%] left-[28.5%] z-10 hidden -translate-x-1/2 md:block"
              style={{
                width: '22%',
                height: '6.5%',
                background:
                  'radial-gradient(ellipse at center, rgba(255,224,170,0.2) 0%, rgba(255,210,140,0.14) 24%, rgba(126,84,26,0.12) 44%, rgba(0,0,0,0.18) 62%, transparent 78%)',
                filter: 'blur(8px)',
              }}
            />
            <div
              className="pointer-events-none absolute bottom-[6.2%] left-[76%] z-10 hidden -translate-x-1/2 md:block"
              style={{
                width: '18%',
                height: '5.5%',
                background:
                  'radial-gradient(ellipse at center, rgba(255,224,170,0.16) 0%, rgba(255,210,140,0.1) 24%, rgba(126,84,26,0.1) 42%, rgba(0,0,0,0.17) 60%, transparent 78%)',
                filter: 'blur(7px)',
              }}
            />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 flex translate-y-[-2px] scale-[0.94] items-end justify-center gap-3 px-5 pb-5 sm:gap-4 sm:px-6 md:translate-y-0 md:scale-100 md:justify-between md:px-8">
              <img
                src="/cannoli-hero.png"
                alt="Holy Cannoli hero art"
                className="w-[37%] -translate-x-[40px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] sm:w-[30%] md:w-[27%] md:translate-x-0"
              />
              <div className="relative flex translate-x-[-7px] items-end justify-center">
                <div
                  className="pointer-events-none absolute bottom-[-2px] left-1/2 h-[28px] w-[104px] -translate-x-1/2 rounded-full opacity-100 blur-[12px] sm:h-[34px] sm:w-[120px] md:h-[40px] md:w-[138px]"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(255, 232, 170, 0.72) 0%, rgba(255, 214, 120, 0.42) 36%, rgba(255, 196, 92, 0.2) 58%, transparent 80%)',
                  }}
                />
                <img
                  src="/OGcannoli.png"
                  alt="OG Cannoli character art"
                  className="relative z-[1] h-[141px] w-auto object-contain brightness-90 drop-shadow-[0_10px_20px_rgba(0,0,0,0.28)] sm:h-[167px] md:h-[188px] md:translate-y-[2px]"
                />
              </div>
              <img
                src="/cannoli4.png"
                alt="Holy Cannoli character 4"
                className="h-[133px] w-auto translate-x-1 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] sm:h-[155px] md:h-[173px] md:translate-x-[-28px]"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-br from-amber-300/7 via-transparent to-pink-400/7" />
            <div className="pointer-events-none absolute inset-x-[16%] top-[7%] z-30 h-[22%] rounded-full bg-[radial-gradient(circle,rgba(255,205,120,0.12),transparent_70%)] blur-3xl sm:inset-x-[20%]" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:mt-14 md:grid-cols-3">
        {gatewayCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link key={card.title} to={card.href} className="group">
              <NeonFrame className="h-full overflow-hidden p-6 shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition duration-300 ease-out group-hover:-translate-y-1 group-hover:border-white/20 group-hover:bg-white/[0.07] group-hover:shadow-[0_14px_30px_rgba(0,0,0,0.24)]">
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 transition duration-300 group-hover:opacity-100 ${card.glow}`} />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-amber-300/25 via-red-400/20 to-fuchsia-500/20 shadow-[0_0_20px_rgba(255,133,80,0.08)]">
                    <Icon className="h-6 w-6 text-red-200" />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold">{card.title}</h2>
                  <p className="mt-3 leading-relaxed text-[color:var(--text-body)]">{card.text}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-200">
                    {card.cta} <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                </div>
              </NeonFrame>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
