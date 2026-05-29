import Link from "next/link";
import { ArrowRight, Home, LibraryBig } from "lucide-react";
import { SKOOL_URL } from "@/lib/links";

export default function NotFound() {
  return (
    <main className="bg-[#FAFAFA] px-4 py-16 text-navy md:py-24">
      <section className="mx-auto max-w-2xl rounded-[14px] border border-[#E5E5E5] bg-white p-8 text-center shadow-[0_14px_34px_rgb(28_29_32/0.06)] md:p-10">
        <p className="text-[12px] font-black uppercase tracking-wide text-gold">Página no encontrada</p>
        <h1 className="mt-3 font-display text-[42px] font-semibold leading-tight text-navy md:text-[56px]">
          Esta ruta no existe o cambió de lugar.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[16px] font-medium leading-7 text-[#666666]">
          Puedes volver al inicio, revisar la biblioteca de recursos o continuar directamente en la comunidad de Nutriología en Skool.
        </p>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          <Link href="/" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-navy/20 bg-white px-4 text-sm font-black text-navy transition hover:bg-cream">
            <Home className="h-4 w-4" /> Inicio
          </Link>
          <Link href="/recursos" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-navy/20 bg-white px-4 text-sm font-black text-navy transition hover:bg-cream">
            <LibraryBig className="h-4 w-4" /> Recursos
          </Link>
          <a href={SKOOL_URL} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-navy px-4 text-sm font-black text-white transition hover:bg-deep-blue" style={{ color: "#ffffff" }}>
            Skool <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
