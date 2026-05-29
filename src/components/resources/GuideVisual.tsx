import type { CSSProperties } from "react";
import { Activity, BookOpen, CheckCircle2, FileText, LineChart, ShieldCheck } from "lucide-react";

type GuideVisualProps = {
  title: string;
  category: string;
  accent: string;
  variant?: "card" | "hero";
};

export function GuideVisual({ title, category, accent, variant = "card" }: GuideVisualProps) {
  const style = { "--guide-accent": accent } as CSSProperties;
  const isHero = variant === "hero";

  return (
    <div
      className={[
        "relative overflow-hidden rounded-[10px] border border-white/45 bg-navy text-white shadow-[0_18px_42px_rgb(28_29_32/0.16)]",
        isHero ? "min-h-[280px] sm:min-h-[320px]" : "h-[150px]",
      ].join(" ")}
      style={style}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(255,255,255,0.26),transparent_28%),linear-gradient(135deg,#1C1D20_0%,#0A6B6B_54%,#1C1D20_100%)]" />
      <div className="clinical-grid absolute inset-0 opacity-[0.16]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 320" aria-hidden="true" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
        <path d="M338 55C390 31 458 54 487 109C516 164 492 233 438 263C384 293 317 272 286 220C255 168 286 79 338 55Z" fill={accent} opacity="0.18" />
        <circle cx="404" cy="154" r="78" fill="white" opacity="0.92" />
        <path d="M361 160C384 117 440 114 461 158C443 197 383 204 361 160Z" fill={accent} opacity="0.82" />
        <path d="M385 136L433 188M442 136L391 190" stroke="#1C1D20" strokeOpacity="0.36" strokeWidth="7" strokeLinecap="round" />
        <path d="M60 238L118 198L176 212L234 158L292 174" stroke={accent} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="118" cy="198" r="10" fill="#fff" />
        <circle cx="234" cy="158" r="10" fill="#fff" />
        <path d="M60 252H304" stroke="#ffffff" strokeOpacity="0.34" strokeWidth="3" />
      </svg>
      <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-[11px] font-black uppercase text-white ring-1 ring-white/18">
            <ShieldCheck className="h-3.5 w-3.5 text-[var(--guide-accent)]" /> {category}
          </span>
          <BookOpen className="h-7 w-7 text-[var(--guide-accent)]" strokeWidth={1.5} />
        </div>
        <div>
          <p className={isHero ? "max-w-[440px] font-display text-[32px] font-semibold leading-[1.04] sm:text-[46px] md:text-[52px]" : "max-w-[250px] text-[18px] font-black leading-[1.15]"}>
            {title}
          </p>
          <div className="mt-4 flex items-center gap-3 text-[12px] font-bold text-white/80">
            <span className="inline-flex items-center gap-1.5"><FileText className="h-4 w-4 text-[var(--guide-accent)]" /> PDF 10 págs.</span>
            <span className="inline-flex items-center gap-1.5"><LineChart className="h-4 w-4 text-[var(--guide-accent)]" /> Gráficos</span>
            {isHero ? <span className="hidden items-center gap-1.5 sm:inline-flex"><CheckCircle2 className="h-4 w-4 text-[var(--guide-accent)]" /> Guía práctica</span> : null}
          </div>
        </div>
      </div>
      <Activity className="absolute bottom-5 right-5 h-12 w-12 text-white/16" strokeWidth={1.25} />
    </div>
  );
}
