import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Download,
  ExternalLink,
  FileText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Disclaimer } from "@/components/Disclaimer";
import { LeadMagnetForm } from "@/components/resources/LeadMagnetForm";
import { getGuideBySlug, resourceGuides } from "@/data/resourceGuides";
import { SKOOL_URL } from "@/lib/links";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resourceGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: "/recursos/" + guide.slug,
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: "/recursos/" + guide.slug,
      siteName: "Nutriología",
      locale: "es",
      type: "article",
      images: [{ url: guide.image, width: 1200, height: 720, alt: guide.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: [guide.image],
    },
  };
}

function SidebarBox({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-[12px] border border-[#E5E5E5] bg-white p-5 shadow-[0_8px_24px_rgb(28_29_32/0.04)]">
      {children}
    </section>
  );
}

function GuideHeroImage({
  title,
  category,
  image,
}: {
  title: string;
  category: string;
  image: string;
}) {
  return (
    <figure className="relative min-h-[220px] overflow-hidden rounded-[12px] border border-white/60 bg-navy shadow-[0_18px_42px_rgb(28_29_32/0.13)] sm:min-h-[260px] lg:min-h-[300px]">
      <Image
        src={image}
        alt={"Imagen principal de la guía: " + title}
        fill
        priority
        sizes="(min-width: 1140px) 720px, calc(100vw - 32px)"
        quality={95}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D20]/84 via-[#1C1D20]/16 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1C1D20]/42 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-[11px] font-black uppercase text-white ring-1 ring-white/20 backdrop-blur">
          <ShieldCheck className="h-3.5 w-3.5 text-gold" /> {category}
        </span>
        <figcaption className="mt-3 max-w-[620px] font-display text-[28px] font-semibold leading-[1.04] text-white sm:text-[38px] md:text-[44px]">
          {title}
        </figcaption>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-[12px] font-bold text-white/84">
          <span className="inline-flex items-center gap-1.5"><FileText className="h-4 w-4 text-gold" /> PDF 10 págs.</span>
          <span className="inline-flex items-center gap-1.5"><BookOpen className="h-4 w-4 text-gold" /> Artículo completo</span>
          <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-gold" /> Misma guía de la biblioteca</span>
        </div>
      </div>
    </figure>
  );
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const relatedGuides = resourceGuides
    .filter((item) => item.category === guide.category && item.slug !== guide.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-navy">
      <div className="mx-auto max-w-[1140px] px-4 py-6 md:py-8">
        <Link href="/recursos" className="inline-flex items-center gap-2 text-[13px] font-black text-navy transition hover:text-gold">
          <ArrowLeft className="h-4 w-4" /> Volver a recursos
        </Link>

        <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div className="grid gap-5">
            <div className="overflow-hidden rounded-[14px] border border-[#E5E5E5] bg-white shadow-[0_14px_34px_rgb(28_29_32/0.06)]">
              <GuideHeroImage title={guide.title} category={guide.category} image={guide.image} />
            </div>

            <article className="rounded-[14px] border border-[#E5E5E5] bg-white p-6 shadow-[0_14px_34px_rgb(28_29_32/0.05)] sm:p-8">
            <div className="flex flex-wrap items-center gap-3 text-[12px] font-black uppercase tracking-wide text-[#666666]">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F4F3] px-3 py-1 text-gold"><ShieldCheck className="h-4 w-4" /> {guide.category}</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> {guide.readTime}</span>
              <span className="inline-flex items-center gap-2"><FileText className="h-4 w-4" /> PDF de 10 páginas</span>
            </div>

            <h1 className="mt-5 font-display text-[36px] font-semibold leading-[1.05] text-navy sm:text-[48px] md:text-[56px]">
              {guide.title}
            </h1>
            <p className="copy-justify mt-5 text-[19px] font-semibold leading-8 text-[#0A6B6B]">
              {guide.lead}
            </p>
            <p className="copy-justify mt-4 text-[16px] leading-8 text-[#4A4A4A]">
              {guide.promise}
            </p>

            <div className="mt-8 rounded-[12px] border border-gold/30 bg-[#F0F7F4] p-5">
              <h2 className="text-[20px] font-black text-navy">Puntos clave para empezar</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {guide.quickWins.map((item) => (
                  <p key={item} className="flex gap-2 text-[14px] font-semibold leading-6 text-[#4A4A4A]">
                    <Sparkles className="mt-1 h-4 w-4 shrink-0 text-gold" /> {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-9">
              {guide.sections.map((section, index) => (
                <section key={section.heading} id={"seccion-" + index} className="scroll-mt-28">
                  <h2 className="font-display text-[30px] font-semibold leading-tight text-navy">
                    {section.heading}
                  </h2>
                  <div className="copy-justify mt-4 grid gap-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-[16px] leading-8 text-[#4A4A4A]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-10 rounded-[12px] bg-navy p-6 text-white">
              <h2 className="font-display text-[30px] font-semibold">Marco de decisión clínica</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {guide.framework.map((item) => (
                  <p key={item} className="flex gap-2 text-[14px] font-semibold leading-6 text-white/88">
                    <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {item}
                  </p>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <h2 className="font-display text-[30px] font-semibold text-navy">Fuentes consultadas</h2>
              <div className="mt-4 grid gap-3">
                {guide.references.map((reference) => (
                  <a
                    key={reference.url}
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 rounded-[10px] border border-[#E5E5E5] bg-white px-4 py-3 text-[14px] font-bold text-navy transition hover:border-gold/45 hover:bg-[#F0F7F4]"
                  >
                    {reference.label}
                    <ExternalLink className="h-4 w-4 shrink-0 text-gold" />
                  </a>
                ))}
              </div>
            </section>

            <div className="mt-8">
              <Disclaimer />
            </div>
            </article>
          </div>

          <aside className="grid content-start gap-5 lg:sticky lg:top-24">
            <LeadMagnetForm guideSlug={guide.slug} guideTitle={guide.title} />
            <SidebarBox>
              <h2 className="text-[18px] font-black text-navy">Qué incluye el PDF</h2>
              <ul className="mt-4 grid gap-3">
                {guide.downloadBullets.map((item) => (
                  <li key={item} className="flex gap-2 text-[13px] font-semibold leading-5 text-[#4A4A4A]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {item}
                  </li>
                ))}
              </ul>
            </SidebarBox>
            <SidebarBox>
              <h2 className="text-[18px] font-black text-navy">Índice</h2>
              <div className="mt-4 grid gap-3">
                {guide.sections.map((section, index) => (
                  <a key={section.heading} href={"#seccion-" + index} className="text-[13px] font-bold leading-5 text-[#666666] hover:text-gold">
                    {section.heading}
                  </a>
                ))}
              </div>
              <a href="#descargar" className="mt-5 flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-navy px-5 py-3 text-sm font-black text-white" style={{ color: "#ffffff" }}>
                Descargar PDF <Download className="h-4 w-4" />
              </a>
            </SidebarBox>

            <SidebarBox>
              <h2 className="text-[18px] font-black text-navy">También te puede servir</h2>
              <div className="mt-4 grid gap-3">
                {(relatedGuides.length ? relatedGuides : resourceGuides.filter((item) => item.slug !== guide.slug).slice(0, 3)).map((item) => (
                  <Link key={item.slug} href={"/recursos/" + item.slug} className="group rounded-[10px] border border-[#E5E5E5] p-3 transition hover:border-gold/45">
                    <span className="block text-[13px] font-black leading-5 text-navy group-hover:text-gold">{item.title}</span>
                    <span className="mt-1 block text-[11px] font-semibold text-[#888888]">{item.category}</span>
                  </Link>
                ))}
              </div>
            </SidebarBox>

            <SidebarBox>
              <h2 className="text-[18px] font-black text-navy">Continuar en comunidad</h2>
              <p className="mt-3 text-[13px] font-medium leading-6 text-[#666666]">
                En Skool encuentras biblioteca completa, clases y acompañamiento semanal.
              </p>
              <a href={SKOOL_URL} className="mt-4 flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-navy px-5 py-3 text-sm font-black text-navy transition hover:bg-cream">
                Entrar a la membresía <ArrowRight className="h-4 w-4" />
              </a>
            </SidebarBox>
          </aside>
        </div>
      </div>
    </main>
  );
}
