import type { Metadata } from "next";
import Image from "next/image";
import {
  BookOpen,
  Check,
  ClipboardList,
  Dna,
  FileText,
  FlaskConical,
  GraduationCap,
  Lock,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  UsersRound,
  Utensils,
} from "lucide-react";
import { SKOOL_URL } from "@/lib/links";
import { MEDIA } from "@/lib/media";

export const metadata: Metadata = {
  title: "Salud y nutrición clínica",
  description:
    "Membresía Nutriología con educación nutricional, recursos clínicos, comunidad y acompañamiento dentro de Skool.",
  alternates: {
    canonical: "/salud",
  },
  openGraph: {
    title: "Salud y nutrición clínica",
    description:
      "Membresía Nutriología con educación nutricional, recursos clínicos, comunidad y acompañamiento dentro de Skool.",
    url: "/salud",
    siteName: "Nutriología",
    locale: "es",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salud y nutrición clínica",
    description:
      "Membresía Nutriología con educación nutricional, recursos clínicos, comunidad y acompañamiento dentro de Skool.",
  },
};

const checklist = [
  "Entender tu azúcar sin vivir a base de restricciones.",
  "Cuidar tus riñones con decisiones alimentarias informadas.",
  "Apoyar tu presión arterial con estructura y hábitos sostenibles.",
  "Mejorar tu digestión, organización y energía percibida.",
  "Vivir el embarazo con más claridad y acompañamiento.",
  "Aprender de por vida y tomar decisiones con confianza.",
];

const pillars = [
  { label: "Basado en EVIDENCIA", Icon: Dna },
  { label: "Enfoque CLÍNICO", Icon: FlaskConical },
  { label: "Comunidad que te apoya", Icon: UsersRound },
  { label: "Resultados SOSTENIBLES", Icon: TrendingUp },
];

const benefits = [
  {
    title: "RECETAS CLÍNICAS",
    body: "Recetas diseñadas para etapas y condiciones que necesitan estructura práctica.",
    Icon: ClipboardList,
  },
  {
    title: "PLANES DE ALIMENTACIÓN",
    body: "Menús y guías para organizar tu semana con más claridad.",
    Icon: Utensils,
  },
  {
    title: "FORMACIÓN CONTINUA",
    body: "Cursos, clases y guías con respaldo científico.",
    Icon: GraduationCap,
  },
  {
    title: "COMUNIDAD PRIVADA",
    body: "Apoyo real de personas que están en el mismo camino que tú.",
    Icon: UsersRound,
  },
  {
    title: "SOPORTE DE EXPERTOS",
    body: "Resuelve dudas educativas con profesionales en nutrición.",
    Icon: MessageCircle,
  },
  {
    title: "RECURSOS CLÍNICOS",
    body: "Guías, protocolos y herramientas prácticas para tu día a día.",
    Icon: FileText,
  },
];

const stories = [
  {
    title: "Diabetes tipo 2",
    quote:
      "Aprendí a combinar mis comidas y a sentirme menos confundida. Ahora tengo una estructura que sí puedo sostener.",
    name: "Claudia, 52 años",
    image: MEDIA.healthStories.claudia,
  },
  {
    title: "Salud renal",
    quote:
      "Entender sodio, potasio y porciones me ayudó a conversar mejor con mi equipo de salud y ordenar mis comidas.",
    name: "Roberto, 64 años",
    image: MEDIA.healthStories.roberto,
  },
  {
    title: "Embarazo saludable",
    quote:
      "Las guías y el acompañamiento me dieron tranquilidad para comer mejor durante esta etapa.",
    name: "Daniela, 29 años",
    image: MEDIA.healthStories.daniela,
  },
  {
    title: "Hipertensión",
    quote:
      "Aprendí a identificar el sodio oculto y a planificar comidas más simples sin sentir que todo era prohibición.",
    name: "Laura, 47 años",
    image: MEDIA.healthStories.laura,
  },
];

const trust = [
  {
    title: "Contenido revisado",
    body: "por profesionales de la salud",
    Icon: ShieldCheck,
  },
  {
    title: "Basado en guías",
    body: "clínicas y evidencia científica",
    Icon: BookOpen,
  },
  {
    title: "Acceso seguro",
    body: "y 100% privado en Skool",
    Icon: Lock,
  },
];

export default function HealthPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-[720px] border-x border-[#E5E5E5] bg-white shadow-[0_0_35px_rgb(28_29_32/0.06)]">
        <section className="banner-crisp bg-navy px-5 py-4 text-center text-[16px] font-black leading-tight text-white sm:text-[18px] md:text-[22px]" style={{ color: "#ffffff" }}>
          Atención: si tienes diabetes, problemas de riñón, hipertensión, SOP, problemas digestivos o estás embarazada...
        </section>

        <section className="px-7 pb-9 pt-10 md:px-12 md:pb-10 md:pt-12">
          <h1 className="text-center text-[34px] font-black leading-[1.05] sm:text-[42px] md:text-[58px]">
            La comida correcta puede darte claridad.
            <span className="mt-3 block text-navy">
              La información correcta puede guiar tus decisiones.
            </span>
          </h1>
          <div className="mx-auto mt-3 h-[5px] w-[230px] rounded-full bg-navy" />

          <div className="copy-justify mt-8 space-y-4 text-[20px] leading-[1.38] md:text-[23px]">
            <p>No necesitas otra dieta de moda.</p>
            <p>
              Necesitas un sistema basado en ciencia y diseñado para personas reales con problemas reales.
            </p>
          </div>

          <p className="mt-5 inline bg-[#B8E0DB] px-2 text-[20px] font-black leading-[1.35] sm:text-[22px] md:text-[25px]">
            En NUTRIOLOGÍA te damos exactamente eso.
          </p>

          <section className="mt-7 rounded-[4px] bg-[#F0F7F4] px-7 py-7 shadow-[inset_0_0_38px_rgb(28_29_32/0.04)]">
            <h2 className="text-[28px] font-black text-navy md:text-[31px]">Imagina poder...</h2>
            <div className="mt-5 grid gap-4">
              {checklist.map((item) => (
                <p key={item} className="grid grid-cols-[26px_1fr] gap-4 text-[18px] leading-[1.35] md:text-[20px]">
                  <Check className="mt-0.5 h-6 w-6 text-navy" strokeWidth={3} />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </section>

          <div className="copy-justify mt-7 space-y-4 text-[20px] leading-[1.42] md:text-[22px]">
            <p>Miles de personas ya lo están logrando.</p>
            <p>Y tú puedes ser la próxima.</p>
            <p>Esto no es suerte. Es información correcta aplicada con método.</p>
          </div>

          <div className="mt-7 space-y-3 text-[22px] font-black leading-tight md:text-[25px]">
            <p>Bienvenido a <span className="text-navy">NUTRIOLOGÍA.</span></p>
            <p className="text-navy">Ciencia. Educación. Comunidad. Hábitos sostenibles.</p>
          </div>
        </section>

        <section>
          <Image
            src={MEDIA.healthFoodRow}
            alt="Comidas saludables de Nutriología"
            width={497}
            height={202}
            priority
            sizes="(min-width: 720px) 720px, 100vw"
            quality={95}
            className="h-auto w-full object-cover"
          />
          <div className="banner-crisp grid grid-cols-2 bg-navy px-4 py-7 text-white md:grid-cols-4" style={{ color: "#ffffff" }}>
            {pillars.map(({ label, Icon }) => (
              <div key={label} className="flex flex-col items-center border-white/15 px-3 text-center md:border-r md:last:border-r-0">
                <Icon className="h-9 w-9 text-white" strokeWidth={1.7} />
                <p className="mt-3 text-[14px] font-black leading-tight md:text-[16px]">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 py-9 md:px-12 md:py-10">
          <div className="text-center">
            <h2 className="text-[34px] font-black leading-tight md:text-[42px]">Membresía NUTRIOLOGÍA</h2>
            <p className="mt-2 text-[21px] leading-tight md:text-[25px]">
              Tu centro de nutrición clínica y educación continua
            </p>
          </div>

          <div className="mt-7 overflow-hidden rounded-[4px] border border-[#E5E5E5]">
            {benefits.map(({ title, body, Icon }) => (
              <div key={title} className="grid grid-cols-[58px_1fr] gap-4 border-b border-[#E5E5E5] px-5 py-5 last:border-b-0 sm:grid-cols-[74px_1fr] sm:gap-5 sm:px-6">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-navy text-white sm:h-14 sm:w-14" style={{ color: "#ffffff" }}>
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="text-[19px] font-black leading-tight md:text-[21px]">{title}</h3>
                  <p className="mt-1 text-[17px] leading-[1.35] md:text-[19px]">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <section className="mt-9">
            <h2 className="text-center text-[24px] font-black leading-tight md:text-[28px]">
              Historias reales de personas reales
            </h2>
            <div className="mt-4 overflow-hidden rounded-[4px] border border-[#E5E5E5]">
              {stories.map((story) => (
                <article key={story.name} className="grid grid-cols-[72px_1fr] gap-5 border-b border-[#E5E5E5] px-5 py-4 last:border-b-0">
                  <Image
                    src={story.image}
                    alt={story.name}
                    width={58}
                    height={76}
                    quality={95}
                    className="h-[64px] w-[58px] rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-[17px] font-black md:text-[19px]">{story.title}</h3>
                    <p className="mt-1 text-[16px] leading-[1.4] md:text-[18px]">“{story.quote}”</p>
                    <p className="mt-1 text-[16px] font-bold md:text-[18px]">– {story.name}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-[4px] border border-[#E5E5E5] bg-white px-5 py-6">
            <h2 className="text-[17px] font-black md:text-[20px]">
              Información seria. Profesionales reales. Educación basada en evidencia.
            </h2>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {trust.map(({ title, body, Icon }) => (
                <div key={title} className="grid grid-cols-[38px_1fr] gap-3 border-[#E5E5E5] md:border-r md:pr-4 md:last:border-r-0">
                  <Icon className="h-9 w-9 text-navy" strokeWidth={1.8} />
                  <p className="text-[13px] leading-tight md:text-[14px]">
                    <span className="font-black">{title}</span><br />{body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-9 text-center">
            <h2 className="text-[28px] font-black leading-tight md:text-[33px]">Tu salud es tu mejor inversión.</h2>
            <p className="mt-3 text-[18px] leading-tight md:text-[21px]">
              Únete hoy a NUTRIOLOGÍA y empieza con una guía clara.
            </p>
            <a
              href={SKOOL_URL}
              className="mx-auto mt-7 flex h-[62px] max-w-[470px] items-center justify-center rounded-[5px] bg-navy px-6 text-center text-[19px] font-black uppercase text-white shadow-[0_12px_26px_rgb(28_29_32/0.18)] sm:text-[22px] md:text-[26px]"
              style={{ color: "#ffffff" }}
            >
              Quiero unirme ahora
            </a>
            <p className="mt-5 inline-flex items-center justify-center gap-2 text-[15px] text-[#4A4A4A] md:text-[18px]">
              <Lock className="h-4 w-4" /> Acceso inmediato en Skool
            </p>
          </section>
        </section>
      </div>
    </main>
  );
}
