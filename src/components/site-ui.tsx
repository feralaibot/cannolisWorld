import type { HTMLAttributes, ReactNode } from 'react';

export function GlowOrb({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full bg-gradient-to-br from-red-500 via-amber-300 to-yellow-200 opacity-35 blur-3xl ${className ?? ''}`}
    />
  );
}

export function NeonFrame({
  children,
  className = '',
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div
      {...props}
      className={`relative rounded-[28px] border border-white/10 bg-white/[0.045] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_70px_rgba(0,0,0,0.48)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionEyebrow({ children, tone = 'gold' }: { children: ReactNode; tone?: 'gold' | 'red' }) {
  const toneClass =
    tone === 'gold'
      ? 'border-amber-300/25 bg-amber-300/10 text-amber-100'
      : 'border-red-400/30 bg-red-500/10 text-red-100';

  return (
    <div className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm uppercase tracking-[0.22em] ${toneClass}`}>
      {children}
    </div>
  );
}

export function AssetPlaceholder({
  title,
  hint,
  className = '',
}: {
  title: string;
  hint: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-[22px] border border-dashed border-white/15 bg-black/20 p-4 ${className}`}>
      <div className="absolute inset-0 bg-noise-grid bg-[size:20px_20px] opacity-[0.08]" />
      <div className="relative flex h-full flex-col justify-between gap-3">
        <span className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--text-muted)]">Asset placeholder</span>
        <div>
          <p className="text-sm font-semibold text-[color:var(--text-primary)]">{title}</p>
          <p className="mt-2 max-w-[16rem] text-xs leading-relaxed text-[color:var(--text-muted)]">{hint}</p>
        </div>
      </div>
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  tone = 'gold',
}: {
  eyebrow: ReactNode;
  title: string;
  description: string;
  tone?: 'gold' | 'red';
}) {
  return (
    <div className="mb-8 space-y-4 md:mb-10">
      <SectionEyebrow tone={tone}>{eyebrow}</SectionEyebrow>
      <div className="space-y-3">
        <h1 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-tight text-[color:var(--text-headline)] sm:text-5xl md:text-6xl">{title}</h1>
        <p className="max-w-3xl text-base leading-relaxed text-[color:var(--text-body)] sm:text-lg">{description}</p>
      </div>
    </div>
  );
}
