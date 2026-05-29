import { CheckCircle2, Crown } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { pricingBullets } from "@/data/features";
import { SKOOL_URL } from "@/lib/links";

export function PricingCard() {
  return (
    <article className="relative overflow-hidden rounded-lg bg-navy p-7 text-white soft-shadow md:p-9">
      <div className="absolute inset-0 clinical-grid opacity-10" />
      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-white/8 px-4 py-2 text-sm font-semibold text-gold">
          <Crown className="h-4 w-4" />
          Membresía Premium
        </div>
        <div className="mt-6 flex items-end gap-2">
          <span className="font-display text-6xl font-semibold text-gold">US$29</span>
          <span className="pb-3 text-lg text-white/75">/mes</span>
        </div>
        <ul className="mt-7 grid gap-3">
          {pricingBullets.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-white/84">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <CTAButton href={SKOOL_URL} variant="gold" className="mt-8 w-full" icon>
          Entrar a Nutriología
        </CTAButton>
        <p className="mt-4 text-center text-xs leading-5 text-white/62">
          Pago y acceso gestionados en Skool. Cancelas cuando quieras.
        </p>
      </div>
    </article>
  );
}
