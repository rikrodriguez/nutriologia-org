import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Download,
  Heart,
  LibraryBig,
  Sparkles,
  Star,
} from "lucide-react";
import { ResourceLibrary } from "@/components/resources/ResourceLibrary";
import { guideCategories, resourceGuideCards } from "@/data/resourceGuides";
import { SKOOL_URL } from "@/lib/links";
import { MEDIA } from "@/lib/media";

export const metadata: Metadata = {
  title: "Biblioteca clínica de recursos",
  description:
    "Guías extensas, artículos clínicos y PDFs descargables de Nutriología para educación nutricional basada en evidencia.",
  alternates: {
    canonical: "/recursos",
  },
  openGraph: {
    title: "Biblioteca clínica de recursos",
    description:
      "Guías extensas, artículos clínicos y PDFs descargables de Nutriología para educación nutricional basada en evidencia.",
    url: "/recursos",
    siteName: "Nutriología",
    locale: "es",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biblioteca clínica de recursos",
    description:
      "Guías extensas, artículos clínicos y PDFs descargables de Nutriología para educación nutricional basada en evidencia.",
  },
};

const heroItems = [
  { label: "Basado en evidencia", Icon: Sparkles },
  { label: "Artículos extensos", Icon: BookOpen },
  { label: "PDFs descargables", Icon: Download },
  { label: "Actualizado con criterio clínico", Icon: CalendarDays },
];

function ResourcesHero() {
  return (
    <section className="banner-crisp relative overflow-hidden rounded-[12px] border border-[#E5E5E5] bg-navy text-white shadow-[0_12px_32px_rgb(28_29_32/0.08)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(13,132,132,0.15),transparent_28%),linear-gradient(135deg,#1C1D20_0%,#0A6B6B_56%,#1C1D20_100%)]" />
      <div className="absolute right-0 top-0 hidden h-full w-[52%] bg-gradient-to-l from-white/24 via-white/8 to-transparent md:block" />
      <div className="relative grid min-h-[300px] lg:min-h-[320px] lg:grid-cols-[1fr_0.78fr]">
        <div className="relative z-10 px-6 py-8 sm:px-8 lg:px-9 lg:py-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[12px] font-black uppercase tracking-wide text-gold ring-1 ring-white/15">
            <LibraryBig className="h-4 w-4" /> Biblioteca pública
          </span>
          <h1 className="mt-5 font-display text-[38px] font-semibold leading-[1.03] text-white sm:text-[46px] lg:text-[54px]">
            Biblioteca clínica de <span className="text-gold">recursos</span>
          </h1>
          <p className="mt-4 max-w-[650px] text-[17px] font-medium leading-[1.58] text-white/90 sm:text-[19px]">
            Artículos extensos y guías descargables para entender nutrición clínica con claridad, estructura y criterio profesional.
          </p>
          <div className="mt-8 grid max-w-[720px] grid-cols-2 gap-4 sm:grid-cols-4">
            {heroItems.map(({ label, Icon }) => (
              <div key={label} className="flex items-center gap-3 text-[12px] font-black leading-[1.25] text-white">
                <Icon className="h-8 w-8 shrink-0 text-gold" strokeWidth={1.55} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[260px] overflow-hidden lg:min-h-full">
          <Image
            src={MEDIA.resources.hero}
            alt="Guías clínicas de Nutriología junto a plato saludable"
            fill
            priority
            sizes="(min-width: 1140px) 450px, calc(100vw - 32px)"
            quality={95}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/55 via-navy/10 to-transparent lg:from-navy/36" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/18 via-transparent to-white/10" />
        </div>
      </div>
    </section>
  );
}

function SidebarCard({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-[12px] border border-[#E5E5E5] bg-white p-5 shadow-[0_8px_24px_rgb(28_29_32/0.04)]">
      {children}
    </section>
  );
}

export default function ResourcesPage() {
  const featured = resourceGuideCards[0];
  const popular = resourceGuideCards.slice(0, 5);
  const newGuides = resourceGuideCards.slice(5, 10);

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-navy">
      <div className="mx-auto max-w-[1140px] px-4 py-6 md:py-7">
        <ResourcesHero />

        <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_352px]">
          <ResourceLibrary guides={resourceGuideCards} categories={guideCategories} />

          <aside className="grid content-start gap-5">
            <SidebarCard>
              <div className="flex items-center gap-3">
                <Star className="h-6 w-6 text-gold" strokeWidth={1.8} />
                <h2 className="text-[18px] font-black text-navy">Recurso destacado</h2>
              </div>
              <div className="mt-5">
                <span className="inline-flex rounded-[5px] bg-gold px-2 py-1 text-[10px] font-black uppercase text-white">
                  Destacado
                </span>
                <div className="relative mt-4 h-[132px] overflow-hidden rounded-[9px] bg-[#F0F7F4]">
                  <Image
                    src={featured.image}
                    alt={"Imagen del recurso destacado: " + featured.title}
                    fill
                    sizes="352px"
                    quality={95}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/18 via-transparent to-transparent" />
                </div>
                <h3 className="mt-4 text-[20px] font-black leading-[1.16] text-navy">
                  {featured.title}
                </h3>
                <p className="mt-3 text-[13px] font-medium leading-[1.55] text-[#4A4A4A]">
                  {featured.description}
                </p>
                <p className="mt-3 text-[12px] font-semibold text-[#666666]">PDF <span className="mx-2">•</span> 10 págs. <span className="mx-2">•</span> {featured.readTime}</p>
                <Link
                  href={"/recursos/" + featured.slug}
                  className="mt-5 flex h-11 items-center justify-center gap-3 rounded-[7px] border border-navy bg-white text-[14px] font-black text-navy transition hover:bg-cream"
                >
                  Ver guía <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </SidebarCard>

            <SidebarCard>
              <h2 className="text-[18px] font-black text-navy">Más consultadas</h2>
              <ol className="mt-5 grid gap-4">
                {popular.map((guide, index) => (
                  <li key={guide.slug} className="grid grid-cols-[24px_1fr_18px] items-start gap-3">
                    <span className="text-[18px] font-black text-navy">{index + 1}</span>
                    <Link href={"/recursos/" + guide.slug} className="group">
                      <span className="block text-[13px] font-black leading-[1.16] text-navy group-hover:text-gold">{guide.title}</span>
                      <span className="mt-1 block text-[11px] font-semibold text-[#888888]">{guide.category}</span>
                    </Link>
                    <Download className="h-4 w-4 text-navy" />
                  </li>
                ))}
              </ol>
            </SidebarCard>

            <SidebarCard>
              <div className="flex items-center justify-between">
                <h2 className="text-[18px] font-black text-navy">Nuevas guías</h2>
                <a href={SKOOL_URL} className="text-[12px] font-bold text-navy">Skool</a>
              </div>
              <div className="mt-5 grid gap-4">
                {newGuides.map((guide) => (
                  <Link key={guide.slug} href={"/recursos/" + guide.slug} className="grid grid-cols-[58px_1fr] gap-3">
                    <span className="mt-1 inline-flex h-7 w-[58px] items-center justify-center rounded-[5px] border border-gold/50 bg-[#E8F4F3] px-0 text-center text-[10px] font-black uppercase leading-none text-gold">
                      Nuevo
                    </span>
                    <p>
                      <span className="block text-[13px] font-black leading-[1.18] text-navy">{guide.title}</span>
                      <span className="mt-1 block text-[11px] font-semibold text-[#888888]">PDF <span className="mx-1">•</span> 10 págs.</span>
                    </p>
                  </Link>
                ))}
              </div>
            </SidebarCard>

            <SidebarCard>
              <h2 className="text-[18px] font-black text-navy">Tu biblioteca preview</h2>
              <div className="mt-5 grid grid-cols-[74px_1fr] items-center gap-4">
                <div className="grid h-[70px] w-[70px] place-items-center rounded-full bg-[conic-gradient(#1C1D20_0_72%,#E8F4F3_72%_100%)]">
                  <div className="grid h-[52px] w-[52px] place-items-center rounded-full bg-white text-[15px] font-black text-navy">72%</div>
                </div>
                <div>
                  <p className="text-[17px] font-black text-navy">Recursos disponibles</p>
                  <p className="mt-1 text-[15px] font-black text-navy">12 guías públicas</p>
                </div>
              </div>
              <a href={SKOOL_URL} className="mt-4 flex h-11 items-center justify-center rounded-[7px] border border-navy bg-white text-[14px] font-black text-navy">
                Acceder a la biblioteca completa
              </a>
            </SidebarCard>
          </aside>
        </div>

        <section className="mt-6 overflow-hidden rounded-[10px] bg-navy text-white shadow-[0_14px_34px_rgb(28_29_32/0.16)]">
          <div className="grid min-h-[64px] items-center gap-4 px-8 py-4 md:grid-cols-[1fr_1fr]">
            <div className="flex items-center gap-5">
              <span className="font-display text-4xl leading-none text-gold">“</span>
              <p className="text-[15px] font-semibold leading-5">
                La claridad empieza con educación seria.<br />
                <span className="text-gold">Tu comunidad te acompaña.</span>
              </p>
            </div>
            <div className="flex items-center justify-between gap-5 md:justify-end">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold text-lg font-semibold text-gold">N</span>
              <p className="text-[13px] font-semibold leading-5 text-white/90">
                Guías públicas para empezar.<br />Skool para continuar con acompañamiento.
              </p>
              <Heart className="hidden h-16 w-16 text-gold/35 sm:block" strokeWidth={1.2} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
