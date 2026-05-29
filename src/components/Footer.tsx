import Link from "next/link";
import { Disclaimer } from "@/components/Disclaimer";
import { BrandLogo } from "@/components/BrandLogo";
import { CTAButton } from "@/components/CTAButton";
import { SKOOL_URL } from "@/lib/links";

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-white">
      <div className="container-shell grid gap-8 py-9 md:grid-cols-[1.1fr_1fr_0.8fr] md:items-start md:py-10">
        <div>
          <BrandLogo className="text-[24px] sm:text-[26px]" />
          <p className="mt-4 max-w-md leading-7 text-muted copy-justify">
            Nutrición clínica basada en evidencia para tu vida real.
          </p>
        </div>
        <div className="grid gap-3 text-sm font-semibold text-deep-blue sm:grid-cols-2">
          <Link href="/">Inicio</Link>
          <Link href="/recursos">Recursos</Link>
          <Link href="/membresia">Membresía</Link>
        </div>
        <div className="grid gap-4">
          <CTAButton href={SKOOL_URL} variant="secondary" icon>
            Entrar a la membresía
          </CTAButton>
          <Disclaimer compact />
        </div>
      </div>
      <div className="border-t border-navy/10 py-4">
        <div className="container-shell flex flex-col gap-2 text-xs font-medium text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Nutriología. Todos los derechos reservados.</p>
          <p>nutriologia.org</p>
        </div>
      </div>
    </footer>
  );
}
