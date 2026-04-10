import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { ComingSoonModal } from '../components/ComingSoonModal';
import { NeonFrame } from '../components/site-ui';

export function ComicPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const loreParagraphs = [
    'In the flickering glow of a kitchen that never sleeps, the line between culinary craft and ancient magic has finally blurred. Cannoli, a baker by blood and a mobster by legacy, has spent his life mastering the secret recipes of the “Flavor Bosses”—where every ingredient holds power and every contract is etched in dough.',
    'But when he steps into the high-tech NFT Laboratory to fuse traditional heat with digital code, he stirs up more than just a masterpiece. From the ovens rise the Holy Cannoli Posse, a crew of sweet, drip-heavy guardians born of honor and light. Yet, perfection is a dangerous ingredient; one slip of the spice rack turns the heat too high, birthing the scorched and bitter Burnt Crust Crew.',
    'Now, caught between his creations and his consequences, Cannoli must navigate a world where flavor has come to life—and some of it is looking for revenge.',
  ];

  return (
    <>
      <section className="px-4 py-8 sm:px-6 md:px-10 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 space-y-3 md:mb-10">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--text-muted)]">Relic Record</p>
            <h1 className="font-display max-w-4xl text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl"><span className="text-[color:var(--text-headline)]">Issue #1 gets the</span> <span className="bg-[linear-gradient(90deg,rgba(250,204,21,0.82)_0%,rgba(255,244,180,0.96)_18%,rgba(250,204,21,0.82)_36%,rgba(250,204,21,0.82)_100%)] bg-[length:220%_100%] bg-clip-text text-transparent animate-[header-shimmer_7s_ease-in-out_infinite]">relic treatment.</span></h1>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
            <NeonFrame className="border-amber-200/15 p-5 shadow-[0_0_50px_rgba(250,204,21,0.08)] md:p-6">
              <div className="grid gap-3">
                <div className="overflow-hidden rounded-[22px] border border-amber-200/20 bg-amber-100/5 shadow-[0_0_40px_rgba(250,204,21,0.14)]">
                  <img
                    src="/comic-cover.png"
                    alt="Holy Cannoli Comics Issue #1 cover"
                    className="block h-auto w-full object-contain scale-[1.01]"
                    loading="eager"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-amber-100/30 bg-[linear-gradient(135deg,#fde68a_0%,#fbbf24_52%,#f59e0b_100%)] px-5 py-3 font-semibold text-black shadow-[0_0_28px_rgba(250,204,21,0.18)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(250,204,21,0.26)]"
                >
                  Claim Issue #1 <ShoppingBag className="h-4 w-4" />
                </button>
              </div>
            </NeonFrame>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <NeonFrame className="border-amber-100/10 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_12px_28px_rgba(0,0,0,0.2),0_0_26px_rgba(250,204,21,0.05)] md:p-10">
                <h2 className="text-3xl font-black text-[color:var(--text-headline)] md:text-4xl">The Night the Cannolis Woke Up</h2>
                <p className="mt-2 bg-[linear-gradient(90deg,rgba(250,204,21,0.82)_0%,rgba(255,244,180,0.96)_18%,rgba(250,204,21,0.82)_36%,rgba(250,204,21,0.82)_100%)] bg-[length:240%_100%] bg-clip-text text-lg font-semibold text-transparent animate-[header-shimmer_3.4s_ease-in-out_infinite]">Before the posse. Before the war.</p>
                <div className="mt-6 max-w-[580px] text-[17px] leading-[1.7] tracking-[0.01em] text-[color:var(--text-body)]">
                  {loreParagraphs.map((paragraph) => (
                    <p key={paragraph} className="mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </NeonFrame>
            </motion.div>
          </div>
        </div>
      </section>
      <ComingSoonModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
