import type { Metadata } from "next";
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  FileText,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { Disclaimer } from "@/components/Disclaimer";
import { SKOOL_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Oferta de membresía",
  description:
    "Nutriología te ayuda a entender qué comer con guías clínicas, recetas prácticas, comunidad y acompañamiento semanal.",
  alternates: {
    canonical: "/sales",
  },
  openGraph: {
    title: "Oferta de membresía",
    description:
      "Nutriología te ayuda a entender qué comer con guías clínicas, recetas prácticas, comunidad y acompañamiento semanal.",
    url: "/sales",
    siteName: "Nutriología",
    locale: "es",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oferta de membresía",
    description:
      "Nutriología te ayuda a entender qué comer con guías clínicas, recetas prácticas, comunidad y acompañamiento semanal.",
  },
};

const structureItems = [
  "Entender mejor tu alimentación",
  "Organizar tus comidas",
  "Tener recursos prácticos",
  "Resolver dudas en comunidad",
  "Acceder a clases y llamadas",
];

const cards = [
  { title: "Recetas clínicas", icon: ClipboardList },
  { title: "Planes de alimentación", icon: FileText },
  { title: "Formación continua", icon: BookOpen },
  { title: "Comunidad privada", icon: Users },
  { title: "Recursos clínicos", icon: ShieldCheck },
];

export default function SalesPage() {
  return (
    <main className="bg-white">
      <section className="bg-navy py-3 text-sm font-semibold leading-6 text-white">
        <div className="container-shell">
          Atención: si tienes diabetes, problemas digestivos, hipertensión,
          salud renal delicada, SOP o estás embarazada, necesitas información
          clara antes de improvisar.
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-14 md:py-20">
        <div className="absolute inset-0 clinical-grid opacity-60" />
        <div className="container-shell relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-white px-4 py-2 text-sm font-semibold text-deep-blue">
              <ShieldCheck className="h-4 w-4 text-gold" />
              Membresía clínica en Skool
            </p>
            <h1 className="font-display mt-6 text-[42px] font-semibold leading-[1.03] text-navy text-balance sm:text-5xl md:text-7xl">
              La comida correcta empieza con la información correcta.
            </h1>
            <p className="copy-justify mt-6 max-w-2xl text-lg leading-8 text-ink/75 md:text-xl">
              Nutriología te ayuda a entender qué comer con guías clínicas,
              recetas prácticas, comunidad y acompañamiento semanal.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={SKOOL_URL} icon>
                Entrar por US$29/mes
              </CTAButton>
              <CTAButton href="/recursos" variant="secondary">
                Ver biblioteca
              </CTAButton>
            </div>
          </div>
          <aside className="hairline rounded-lg bg-white p-7 soft-shadow">
            <p className="text-sm font-semibold uppercase text-gold">
              Membresía Premium
            </p>
            <div className="mt-4 flex items-end gap-2 text-navy">
              <span className="font-display text-6xl font-semibold">US$29</span>
              <span className="pb-3 text-lg text-muted">/mes</span>
            </div>
            <ul className="mt-6 grid gap-3">
              {structureItems.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-ink/74">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-sage" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <CTAButton href={SKOOL_URL} className="mt-7 w-full" icon>
              Entrar a Nutriología
            </CTAButton>
          </aside>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell grid gap-6 md:grid-cols-2">
          <article className="hairline rounded-lg bg-cream p-8">
            <h2 className="font-display text-4xl font-semibold text-navy">
              No necesitas otra dieta de moda.
            </h2>
            <p className="copy-justify mt-4 leading-8 text-ink/72">
              Las reglas aisladas suelen generar más ruido. Nutriología organiza
              educación nutricional para que puedas entender prioridades,
              adaptar tu semana y conversar mejor tus dudas clínicas.
            </p>
          </article>
          <article className="hairline rounded-lg bg-white p-8 soft-shadow">
            <h2 className="font-display text-4xl font-semibold text-navy">
              Necesitas estructura.
            </h2>
            <p className="mt-4 leading-8 text-ink/72">
              Recursos, clases y comunidad hacen que el cambio sea menos
              improvisado. La membresía no promete resultados médicos; te da
              claridad, práctica y acompañamiento educativo.
            </p>
          </article>
        </div>
      </section>

      <section className="navy-band section-pad text-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-gold">
              Dentro de Nutriología
            </p>
            <h2 className="font-display mt-3 text-4xl font-semibold leading-tight md:text-6xl">
              Una membresía para aprender y aplicar, semana a semana.
            </h2>
            <p className="copy-justify mt-5 max-w-xl leading-8 text-white/72">
              Entras a Skool, revisas recursos, participas en comunidad y sigues
              sesiones temáticas con enfoque clínico y práctico.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map(({ title, icon: Icon }) => (
              <div key={title} className="rounded-lg border border-white/15 bg-white/8 p-6">
                <Icon className="h-7 w-7 text-gold" />
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              </div>
            ))}
            <div className="rounded-lg border border-gold/40 bg-gold p-6 text-white">
              <CalendarDays className="h-7 w-7" />
              <h3 className="mt-5 text-xl font-semibold">Llamadas semanales</h3>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/8 p-6">
              <MessageCircle className="h-7 w-7 text-gold" />
              <h3 className="mt-5 text-xl font-semibold">Preguntas en comunidad</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-semibold text-navy md:text-6xl">
              Empieza con una estructura seria por US$29/mes.
            </h2>
            <p className="copy-justify mt-5 max-w-2xl leading-8 text-ink/72">
              Si buscas una membresía clara, práctica y sin exageraciones,
              Nutriología concentra recursos clínicos, recetas y acompañamiento
              educativo en un solo lugar.
            </p>
          </div>
          <div className="grid gap-4">
            <CTAButton href={SKOOL_URL} variant="gold" className="w-full" icon>
              Entrar a la membresía
            </CTAButton>
            <Disclaimer />
          </div>
        </div>
      </section>
    </main>
  );
}
