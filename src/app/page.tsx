import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  FileText,
  LineChart,
  Salad,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";
import { SKOOL_URL } from "@/lib/links";
import { MEDIA } from "@/lib/media";

const heroPillars = [
  { label: "Protocolos basados en evidencia", Icon: ClipboardList },
  { label: "Evaluación nutricional estructurada", Icon: ClipboardCheck },
  { label: "Remisión profesional", Icon: UserRoundCheck },
  { label: "Actualización científica continua", Icon: LineChart },
];

const includeCards = [
  {
    title: "Evaluación integral",
    body: "Análisis clínico-nutricional personalizado para identificar tus necesidades específicas.",
    Icon: ClipboardCheck,
  },
  {
    title: "Planes alimentarios basados en evidencia",
    body: "Diseñados con metodología científica y adaptados a tu contexto y objetivos.",
    Icon: Salad,
  },
  {
    title: "Educación clínica",
    body: "Contenido actualizado sobre nutrición, metabolismo, patologías y suplementación.",
    Icon: BookOpen,
  },
  {
    title: "Monitoreo y ajustes",
    body: "Seguimiento profesional con indicadores objetivos y ajustes basados en datos.",
    Icon: BarChart3,
  },
  {
    title: "Recursos profesionales",
    body: "Guías, protocolos y herramientas basadas en la mejor evidencia disponible.",
    Icon: FileText,
  },
];

const pricingBullets = [
  "Acceso completo a la plataforma",
  "Planes y protocolos basados en evidencia",
  "Educación clínica exclusiva",
  "Herramientas de evaluación profesional",
  "Comunidad profesional y soporte continuo",
];

const testimonials = [
  {
    name: "Mariana, 34 años",
    role: "Mamá y profesional",
    quote:
      "Antes comía lo que podía y siempre estaba cansada. Ahora organizo mis comidas, tengo más energía y me siento mucho mejor conmigo misma.",
    image:
      MEDIA.testimonials.mariana,
    imageAlt: "Retrato casual de Mariana",
  },
  {
    name: "Carlos, 41 años",
    role: "Gerente de operaciones",
    quote:
      "Tenía mucha información, pero me sentía más confundido. Aquí encontré claridad, estructura y un plan que sí puedo seguir.",
    image:
      MEDIA.testimonials.carlos,
    imageAlt: "Retrato casual de Carlos",
  },
  {
    name: "Lucía, 38 años",
    role: "Emprendedora",
    quote:
      "Como mamá de dos niños, necesitaba algo práctico y realista. Este programa me ayudó a mejorar la alimentación de toda mi familia.",
    image:
      MEDIA.testimonials.lucia,
    imageAlt: "Retrato casual de Lucía",
  },
];


function ClinicalSeal({ className = "" }: { className?: string }) {
  return (
    <div
      className={[
        "grid h-[104px] w-[104px] place-items-center rounded-full border border-gold/45 bg-white/95 p-2 text-center text-gold shadow-[0_12px_32px_rgb(28_29_32/0.1)] ring-4 ring-white/70 backdrop-blur sm:h-[134px] sm:w-[134px] sm:p-3",
        className,
      ].join(" ")}
    >
      <div>
        <BadgeCheck className="mx-auto h-7 w-7" strokeWidth={1.5} />
        <p className="mt-2 text-[9px] font-black uppercase leading-[1.35] tracking-[0.16em] sm:text-[11px] sm:tracking-[0.18em]">
          Nutrición clínica
        </p>
        <p className="mt-1 text-[8px] font-black uppercase leading-[1.35] tracking-[0.14em] sm:text-[10px] sm:tracking-[0.16em]">
          Basada en evidencia
        </p>
      </div>
    </div>
  );
}

function HeroChartCard() {
  return (
    <div className="absolute left-4 top-8 w-[172px] rounded-xl border border-navy/10 bg-white/96 p-3 shadow-[0_14px_30px_rgb(28_29_32/0.08)] backdrop-blur-md sm:left-[10%] sm:top-[11%] sm:w-[230px] sm:p-4">
      <p className="text-center text-[10px] font-bold text-deep-blue/45">Progreso del bienestar</p>
      <svg viewBox="0 0 220 92" className="mt-2 h-[60px] w-full text-deep-blue/36 sm:h-[88px]" aria-hidden="true" shapeRendering="geometricPrecision">
        <path d="M16 72H204M16 52H204M16 32H204" stroke="currentColor" strokeWidth="1" opacity="0.45" />
        <path d="M30 68V76M58 58V76M86 60V76M114 42V76M142 53V76M170 43V76M198 28V76" stroke="currentColor" strokeWidth="7" opacity="0.16" />
        <path d="M30 62L58 48L86 50L114 34L142 44L170 34L198 19" fill="none" stroke="currentColor" strokeWidth="3" />
        {[30, 58, 86, 114, 142, 170, 198].map((x, index) => (
          <circle key={x} cx={x} cy={[62, 48, 50, 34, 44, 34, 19][index]} r="4" fill="#0D8484" />
        ))}
      </svg>
    </div>
  );
}

function CtaLink({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "secondary" | "gold" }) {
  const classes = {
    primary:
      "bg-navy !text-white shadow-[0_16px_36px_rgb(28_29_32/0.24)] hover:bg-deep-blue",
    secondary:
      "border border-gold bg-white !text-navy hover:bg-cream",
    gold: "bg-gradient-to-r from-[#7BC4BE] to-gold !text-white shadow-[0_16px_32px_rgb(13_132_132/0.28)] hover:brightness-105",
  }[variant];
  const textStyle = { color: variant === "secondary" ? "#1C1D20" : "#ffffff" };

  return (
    <a
      href={SKOOL_URL}
      className={[
        "inline-flex min-h-12 items-center justify-center gap-3 rounded-lg px-7 py-3 text-sm font-bold transition",
        classes,
      ].join(" ")}
      style={textStyle}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="bg-white text-navy">
      <section className="banner-crisp relative overflow-hidden bg-[#fafafa]">
        <div className="pointer-events-none absolute left-0 top-16 hidden h-[460px] w-24 opacity-30 lg:block">
          <div className="h-full border-l border-navy/10" />
          <div className="absolute left-3 top-0 h-full w-14 rounded-full border border-navy/10" />
          <div className="absolute left-10 top-0 h-full w-px bg-navy/10" />
        </div>
        <div className="mx-auto grid w-full max-w-[1440px] items-stretch lg:grid-cols-[minmax(440px,0.82fr)_minmax(620px,1.18fr)]">
          <div className="relative z-10 flex px-6 py-9 sm:px-10 md:px-12 lg:min-h-[610px] lg:items-center lg:py-8 lg:pl-[clamp(56px,8vw,128px)] lg:pr-6">
            <div className="max-w-[560px]">
            <h1 className="font-display text-[40px] font-semibold leading-[0.98] text-navy sm:text-[52px] md:text-[66px]">
              Nutrición clínica basada en evidencia.
              <span className="block text-gold">Enfoque profesional y personalizado.</span>
            </h1>
            <p className="mt-6 text-lg font-semibold text-deep-blue">
              Ciencia aplicada al bienestar real.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {heroPillars.map(({ label, Icon }) => (
                <div key={label} className="border-r border-navy/12 pr-3 last:border-r-0">
                  <Icon className="mx-auto h-9 w-9 text-deep-blue" strokeWidth={1.6} />
                  <p className="mt-3 text-center text-xs font-bold leading-4 text-deep-blue">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid max-w-[360px] gap-3">
              <CtaLink>
                <Sparkles className="h-4 w-4 text-gold" />
                Únete por US$29/mes
              </CtaLink>
              <a
                href="#incluye"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-gold bg-white px-7 py-3 text-sm font-bold text-navy transition hover:bg-cream"
              >
                <ArrowDown className="h-5 w-5 text-gold" />
                Ver lo que incluye
              </a>
            </div>
            </div>
          </div>
          <div className="relative min-h-[430px] sm:min-h-[470px] lg:min-h-[610px]">
            <Image
              src={MEDIA.homeHero}
              alt="Bowl clínico Nutriología con alimentos frescos"
              fill
              priority
              sizes="(min-width: 1280px) 900px, (min-width: 1024px) 64vw, 100vw"
              quality={95}
              className="object-cover object-[52%_50%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#fafafa] via-white/20 to-white/0" />
            <div className="absolute left-0 top-0 hidden h-[210px] w-[360px] bg-white/55 blur-2xl sm:block" />
            <HeroChartCard />
            <ClinicalSeal className="absolute right-4 top-5 sm:right-[7.5%] sm:top-[8%]" />
            <div className="absolute bottom-5 left-4 right-4 rounded-xl border border-navy/10 bg-white/92 p-3 shadow-xl backdrop-blur sm:bottom-7 sm:left-8 sm:right-10 sm:p-4 lg:left-[7%] lg:right-[8%]">
              <p className="text-center text-sm font-semibold text-deep-blue">
                Avalado por la evidencia. Guiado por la ciencia.
              </p>
              <div className="mt-4 grid gap-3 text-[11px] font-semibold text-deep-blue sm:grid-cols-4">
                {["Rigurosidad científica", "Enfoque profesional", "Enfoque individual", "Resultados medibles"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-gold" /> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="incluye" className="bg-white py-12 md:py-14">
        <div className="mx-auto w-[min(1080px,calc(100%-32px))]">
          <h2 className="font-display text-center text-4xl font-semibold text-navy">
            Qué incluye tu membresía
          </h2>
          <div className="gold-rule mx-auto mt-3" />
          <div className="mt-8 grid gap-5 md:grid-cols-5">
            {includeCards.map(({ title, body, Icon }) => (
              <article key={title} className="rounded-xl border border-navy/10 bg-white p-6 text-center shadow-[0_14px_40px_rgb(28_29_32/0.06)]">
                <Icon className="mx-auto h-14 w-14 text-deep-blue" strokeWidth={1.5} />
                <h3 className="font-display mt-5 min-h-14 text-xl font-semibold leading-6 text-navy">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-deep-blue/78">{body}</p>
              </article>
            ))}
          </div>
          <div className="mt-7 grid gap-4 rounded-xl border border-gold/35 bg-white px-6 py-4 md:grid-cols-3">
            {["Contenido desarrollado por profesionales de la salud", "Basado en guías clínicas internacionales", "Actualización continua con la mejor evidencia científica"].map((item) => (
              <div key={item} className="flex items-center justify-center gap-4 border-gold/25 md:border-r md:last:border-r-0">
                <BadgeCheck className="h-9 w-9 shrink-0 text-deep-blue" strokeWidth={1.4} />
                <p className="text-sm font-bold leading-5 text-deep-blue">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="banner-crisp overflow-hidden bg-[#1C1D20] text-white">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="relative min-h-[260px] overflow-hidden bg-[#1C1D20] sm:min-h-[340px] lg:aspect-[2172/724] lg:min-h-0">
            <Image
              src="/images/home-assets/methodology-clinical-results.jpg"
              alt="Metodología clínica Nutriología con evaluación, biomarcadores y resultados medibles"
              fill
              sizes="(min-width: 1440px) 1440px, 100vw"
              quality={95}
              className="object-cover object-[50%_50%]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/20" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F0F7F4] py-10 md:py-12">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr_0.9fr] lg:items-center lg:gap-8">
          <div className="relative min-h-[300px] overflow-hidden rounded-xl">
            <Image
              src={MEDIA.salmonPlate}
              alt="Plato balanceado Nutriología"
              fill
              sizes="(min-width: 1024px) 460px, 100vw"
              quality={95}
              className="object-cover object-center"
            />
          </div>
          <article className="rounded-xl bg-navy p-7 text-center text-white shadow-[0_18px_45px_rgb(28_29_32/0.24)] ring-1 ring-gold/35">
            <p className="font-display text-xl uppercase tracking-wide text-white/90">
              Membresía Premium
            </p>
            <div className="mt-2 flex items-end justify-center gap-2">
              <span className="font-display text-5xl font-semibold text-gold">US$29</span>
              <span className="pb-2 text-xl">/mes</span>
            </div>
            <ul className="mx-auto mt-6 grid max-w-sm gap-3 text-left text-sm leading-5 text-white/88">
              {pricingBullets.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CtaLink variant="gold">
                Quiero entrar <ArrowRight className="h-4 w-4" />
              </CtaLink>
            </div>
            <p className="mt-4 text-xs leading-5 text-white/75">
              Cancela cuando quieras.<br />Sin contratos. Sin permanencia.
            </p>
          </article>
          <article className="rounded-xl border border-gold/45 bg-white p-7 shadow-[0_14px_40px_rgb(28_29_32/0.06)]">
            <ClipboardCheck className="h-14 w-14 text-deep-blue" strokeWidth={1.5} />
            <h3 className="font-display mt-4 text-2xl font-semibold leading-tight text-navy">
              Tu progreso, respaldado por datos.
            </h3>
            <p className="mt-3 font-semibold leading-6 text-deep-blue">
              Indicadores claros para decisiones nutricionales precisas.
            </p>
            <div className="mt-8 h-28 rounded-lg border border-navy/10 bg-[#FAFAFA] p-4">
              <svg viewBox="0 0 220 80" className="h-full w-full text-deep-blue" aria-hidden="true" shapeRendering="geometricPrecision">
                <path d="M5 62 L38 48 L70 56 L100 38 L132 44 L164 28 L202 18" fill="none" stroke="currentColor" strokeWidth="3" />
                {[5,38,70,100,132,164,202].map((x, i) => (
                  <circle key={x} cx={x} cy={[62,48,56,38,44,28,18][i]} r="4" fill="#0D8484" />
                ))}
              </svg>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white py-10 md:py-12">
        <div className="mx-auto w-[min(1080px,calc(100%-32px))]">
          <h2 className="font-display text-center text-4xl font-semibold text-navy">
            Lo que dicen nuestros miembros
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="border-gold/20 md:border-r md:pr-8 md:last:border-r-0">
                <p className="font-display text-6xl leading-none text-gold">“</p>
                <p className="min-h-28 text-sm font-semibold leading-6 text-deep-blue">
                  {item.quote}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-cream ring-2 ring-gold/25">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="64px"
                      quality={95}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy">{item.name}</p>
                    <p className="text-xs font-semibold text-deep-blue/70">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="banner-crisp relative overflow-hidden bg-navy py-10 text-center text-white md:py-12">
        <div className="absolute right-10 top-6 hidden h-40 w-56 opacity-35 lg:block">
          <div className="clinical-grid h-full w-full" />
        </div>
        <div className="mx-auto w-[min(1080px,calc(100%-32px))]">
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
            Tu salud merece <span className="text-gold">ciencia.</span>
            <span className="block">Tu vida, bienestar real.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-white/82">
            Entra a Nutriología y transforma tu relación con la alimentación.
          </p>
          <div className="mt-7 flex flex-col items-center gap-6">
            <div className="flex w-full flex-wrap items-center justify-center gap-5 text-center text-xs font-bold uppercase tracking-wide text-white/70">
              <span>Basado en evidencia</span>
              <span>Educación clínica</span>
              <span>Actualización continua</span>
            </div>
            <CtaLink variant="gold">
              Empieza ahora <ArrowRight className="h-5 w-5" />
            </CtaLink>
          </div>
        </div>
      </section>
    </main>
  );
}
