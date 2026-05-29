import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Bell,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Crown,
  Download,
  Heart,
  LibraryBig,
  MessageCircle,
  MessageSquare,
  MoreHorizontal,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  UsersRound,
  Video,
} from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { SKOOL_URL } from "@/lib/links";
import { MEDIA } from "@/lib/media";

export const metadata: Metadata = {
  title: "Membresía clínica",
  description:
    "Preview de la comunidad Nutriología: recursos, aula, calendario y acompañamiento semanal dentro de Skool.",
  alternates: {
    canonical: "/membresia",
  },
  openGraph: {
    title: "Membresía clínica",
    description:
      "Preview de la comunidad Nutriología: recursos, aula, calendario y acompañamiento semanal dentro de Skool.",
    url: "/membresia",
    siteName: "Nutriología",
    locale: "es",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Membresía clínica",
    description:
      "Preview de la comunidad Nutriología: recursos, aula, calendario y acompañamiento semanal dentro de Skool.",
  },
};

const navItems = [
  { label: "Comunidad", Icon: UsersRound, href: "/membresia", active: true },
  { label: "Aula", Icon: BookOpen, href: SKOOL_URL },
  { label: "Calendario", Icon: CalendarDays, href: SKOOL_URL },
  { label: "Recursos", Icon: LibraryBig, href: "/recursos" },
  { label: "Miembros", Icon: UsersRound, href: SKOOL_URL },
];

const composerActions = [
  { label: "Publicación", Icon: CalendarDays },
  { label: "Pregunta", Icon: MessageSquare },
  { label: "Recurso", Icon: ClipboardList },
  { label: "Encuesta", Icon: BarChart3 },
];

const feedFilters = ["Todos", "Progreso", "Preguntas", "Recetas", "Motivación", "Anuncios"];

const posts = [
  {
    author: "María González",
    avatar: "maria",
    badge: "4",
    meta: "Hace 2 h · Diabetes tipo 2",
    title: "Glucosa estable y más energía",
    body: "Llevo 6 semanas usando las guías de alimentación para diabetes tipo 2 y ahora entiendo mejor mis comidas. Me siento con más claridad y menos improvisación. Gracias a esta comunidad.",
    image: MEDIA.membershipPosts.diabetes,
    likes: 24,
    comments: 8,
    link: "Ver los 12 comentarios",
  },
  {
    author: "Laura Pérez",
    avatar: "laura",
    badge: "3",
    meta: "Hace 4 h · Embarazo",
    title: "Nutrición en embarazo: me siento segura y tranquila",
    body: "Las guías y menús me han ayudado a organizar mejor mis comidas sin dejar de disfrutar. Me siento más tranquila y acompañada en esta etapa.",
    image: MEDIA.membershipPosts.embarazo,
    likes: 18,
    comments: 6,
    link: "Ver los 9 comentarios",
  },
  {
    author: "José Martínez",
    avatar: "jose",
    badge: "2",
    meta: "Hace 6 h · Salud renal",
    title: "Comer rico y cuidar mis riñones es posible",
    body: "Gracias a las recetas bajas en sodio y potasio entiendo mejor mis decisiones diarias. Estas ideas me han facilitado mucho el día a día.",
    image: MEDIA.membershipPosts.renal,
    likes: 16,
    comments: 7,
    link: "Ver los 6 comentarios",
  },
  {
    author: "Ana Beltrán",
    avatar: "ana",
    badge: "2",
    meta: "Hace 8 h · Inflamación",
    title: "Menú antiinflamatorio que puedo sostener",
    body: "Desde que sigo las recomendaciones me siento más organizada con mis comidas y registro mejor cómo responde mi cuerpo. Pequeños cambios, mucha claridad.",
    image: MEDIA.membershipPosts.inflamacion,
    likes: 21,
    comments: 5,
    link: "Ver los 7 comentarios",
  },
  {
    author: "Ricardo Sánchez",
    avatar: "ricardo",
    badge: "2",
    meta: "Hace 10 h · Digestión",
    title: "Menos confusión con digestión y antojos",
    body: "Los tips de digestión y el plan de comidas me han ayudado a ordenar mis hábitos. Me siento más ligero y con menos antojos constantes.",
    image: MEDIA.membershipPosts.digestion,
    likes: 22,
    comments: 9,
    link: "Ver los 11 comentarios",
  },
];

const sessions = [
  ["Diabetes tipo 2", "Plan de alimentación y control glucémico", "MAY", "20"],
  ["Nutrición en embarazo", "Para ti y tu bebé", "MAY", "23"],
  ["Salud renal", "Organiza tus comidas con enfoque renal", "MAY", "27"],
  ["Digestión e inflamación", "Estrategias para sentirte mejor", "MAY", "30"],
];

const progressItems = [
  ["Planes de alimentación", "4/5", "78%"],
  ["Hidratación diaria", "6/7", "86%"],
  ["Pasos diarios", "5/7", "71%"],
  ["Registro de síntomas", "3/5", "60%"],
];

const evidenceItems = [
  "Guías clínicas internacionales",
  "Estudios científicos actualizados",
  "Recomendaciones personalizadas",
  "Aplicadas a tu vida real",
];

const courses = [
  {
    title: "Diabetes tipo 2",
    body: "Ruta educativa para entender el control glucémico.",
    image: MEDIA.resources.diabetes,
    kind: "Ruta clínica",
    lessons: "12 lecciones",
    progress: "72%",
  },
  {
    title: "Embarazo saludable",
    body: "Nutrición segura para ti y tu bebé.",
    image: MEDIA.resources.embarazo,
    kind: "Ruta de vida",
    lessons: "10 lecciones",
    progress: "64%",
  },
  {
    title: "Salud renal",
    body: "Alimentación educativa con enfoque renal.",
    image: MEDIA.resources.insulina,
    kind: "Ruta clínica",
    lessons: "10 lecciones",
    progress: "68%",
  },
  {
    title: "Digestión y salud intestinal",
    body: "Organiza hábitos de digestión y alimentación.",
    image: MEDIA.resources.digestion,
    kind: "Ruta clínica",
    lessons: "9 lecciones",
    progress: "68%",
  },
  {
    title: "Inflamación",
    body: "Alimentos y estrategias antiinflamatorias.",
    image: MEDIA.resources.inflamacion,
    kind: "Ruta clínica",
    lessons: "9 lecciones",
    progress: "71%",
  },
  {
    title: "Presión arterial y sodio",
    body: "Reduce el sodio y cuida tu corazón.",
    image: MEDIA.resources.hipertension,
    kind: "Ruta clínica",
    lessons: "9 lecciones",
    progress: "65%",
  },
];


const memberAvatarStyles: Record<string, { bg: string; hair: string; skin: string; shirt: string; accent: string }> = {
  maria: { bg: "#F0F7F4", hair: "#4a2c22", skin: "#d8a27a", shirt: "#c95f85", accent: "#f3c7a5" },
  laura: { bg: "#F0F7F4", hair: "#5a3428", skin: "#e1ad83", shirt: "#6f8f78", accent: "#f7d7b8" },
  ana: { bg: "#E8F4F3", hair: "#2f2420", skin: "#c98d68", shirt: "#0D8484", accent: "#f0c6a6" },
  jose: { bg: "#E8F4F3", hair: "#26384b", skin: "#c58a62", shirt: "#0A6B6B", accent: "#e9b78d" },
  ricardo: { bg: "#F0F7F4", hair: "#2f2a28", skin: "#d39a72", shirt: "#437d96", accent: "#f0c4a2" },
  doctor: { bg: "#E8F4F3", hair: "#25364b", skin: "#c99068", shirt: "#ffffff", accent: "#0A6B6B" },
};

function MemberAvatar({
  variant = "maria",
  size = 39,
  label = "Miembro Nutriología",
  ring = false,
}: {
  variant?: string;
  size?: number;
  label?: string;
  ring?: boolean;
}) {
  const style = memberAvatarStyles[variant] || memberAvatarStyles.maria;

  return (
    <span
      className={["inline-grid shrink-0 place-items-center overflow-hidden rounded-full bg-white", ring ? "ring-2 ring-white" : ""].join(" ")}
      style={{ width: size, height: size }}
      role="img"
      aria-label={label}
    >
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
        <rect width="64" height="64" rx="32" fill={style.bg} />
        <circle cx="32" cy="29" r="14" fill={style.skin} />
        <path d="M16 29C17 17 24 10 34 10C45 10 51 18 49 31C43 23 34 23 24 27C22 28 19 29 16 29Z" fill={style.hair} />
        <path d="M19 55C21 43 26 38 32 38C39 38 45 43 47 55H19Z" fill={style.shirt} />
        <path d="M26 34C29 37 35 37 38 34" stroke="#7a4a34" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        <circle cx="27" cy="28" r="1.8" fill="#172033" />
        <circle cx="38" cy="28" r="1.8" fill="#172033" />
        <path d="M22 42C26 45 38 45 43 42" stroke={style.accent} strokeWidth="3" strokeLinecap="round" opacity="0.72" />
        <circle cx="45" cy="20" r="4" fill="#ffffff" opacity="0.72" />
      </svg>
    </span>
  );
}

const membershipHeroItems = [
  { label: "Ciencia que guía", Icon: BookOpen },
  { label: "Evidencia que respalda", Icon: ClipboardList },
  { label: "Aplicación práctica", Icon: ShieldCheck },
  { label: "Comunidad que acompaña", Icon: UsersRound },
];

function ClinicalHeroSeal({ className = "" }: { className?: string }) {
  return (
    <div
      className={[
        "grid h-[104px] w-[104px] place-items-center rounded-full border border-gold/45 bg-white/96 p-2 text-center text-gold shadow-[0_12px_28px_rgb(28_29_32/0.12)] ring-4 ring-white/60 backdrop-blur sm:h-[118px] sm:w-[118px]",
        className,
      ].join(" ")}
    >
      <div>
        <ShieldCheck className="mx-auto h-6 w-6" strokeWidth={1.45} />
        <p className="mt-2 text-[9px] font-black uppercase leading-[1.35] tracking-[0.16em] sm:text-[10px]">
          Nutrición clínica
        </p>
        <p className="mt-1 text-[8px] font-black uppercase leading-[1.35] tracking-[0.14em] sm:text-[9px]">
          Basada en evidencia
        </p>
      </div>
    </div>
  );
}

function MembershipHero() {
  return (
    <section className="banner-crisp relative overflow-hidden rounded-[12px] border border-[#E5E5E5] bg-navy text-white shadow-[0_12px_32px_rgb(28_29_32/0.08)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(13,132,132,0.16),transparent_28%),linear-gradient(135deg,#1C1D20_0%,#0A6B6B_58%,#1C1D20_100%)]" />
      <div className="relative grid min-h-[286px] lg:grid-cols-[1fr_0.9fr]">
        <div className="relative z-10 px-6 py-8 sm:px-8 lg:px-9 lg:py-10">
          <h1 className="font-display text-[34px] font-semibold leading-[1.04] text-white sm:text-[46px] lg:text-[50px]">
            Membresía clínica <span className="text-gold">Nutriología</span>
          </h1>
          <p className="mt-4 max-w-[560px] text-[17px] font-medium leading-[1.58] text-white/90 sm:text-[19px]">
            Nutrición basada en evidencia para condiciones reales y etapas de vida que importan.
          </p>
          <div className="mt-8 grid max-w-[610px] grid-cols-2 gap-4 sm:grid-cols-4">
            {membershipHeroItems.map(({ label, Icon }) => (
              <div key={label} className="flex items-center gap-3 text-[12px] font-black leading-[1.25] text-white">
                <Icon className="h-8 w-8 shrink-0 text-gold" strokeWidth={1.55} />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href={SKOOL_URL}
              className="inline-flex min-h-12 w-full max-w-full items-center justify-center gap-3 rounded-[8px] bg-gradient-to-r from-[#7BC4BE] to-gold px-5 py-3 text-center text-[14px] font-black leading-5 text-white shadow-[0_16px_34px_rgb(13_132_132/0.28)] transition hover:brightness-105 sm:w-auto sm:px-7"
              style={{ color: "#ffffff" }}
            >
              <Crown className="h-4 w-4" strokeWidth={1.8} />
              Entrar a la membresía — US$29/mes
            </a>
            <p className="text-[12px] font-semibold text-white/72">Acceso directo en Skool. Cancelas cuando quieras.</p>
          </div>
        </div>
        <div className="relative min-h-[230px] overflow-hidden lg:min-h-full">
          <Image
            src={MEDIA.membershipHero}
            alt="Plato clínico Nutriología con alimentos frescos"
            fill
            priority
            sizes="(min-width: 1140px) 560px, calc(100vw - 32px)"
            quality={95}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/18 to-transparent" />
          <ClinicalHeroSeal className="absolute right-5 top-5" />
        </div>
      </div>
    </section>
  );
}

function AppHeader() {
  return (
    <header className="border-b border-[#E5E5E5] bg-white">
      <div className="mx-auto flex h-[58px] max-w-[1140px] items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <BrandLogo className="text-[24px] sm:text-[28px]" />
          <a
            href={SKOOL_URL}
            className="hidden items-center gap-2 rounded-md border border-gold/35 bg-[#E8F4F3] px-3 py-2 text-[12px] font-black uppercase text-gold sm:flex"
          >
            <Crown className="h-3.5 w-3.5" /> Miembro Premium
          </a>
        </div>
        <div className="flex items-center gap-5 text-navy">
          <Search className="hidden h-5 w-5 sm:block" />
          <MessageCircle className="hidden h-5 w-5 sm:block" />
          <Bell className="hidden h-5 w-5 sm:block" />
          <MemberAvatar variant="maria" size={34} label="Miembro Nutriología" />
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
      <nav className="mx-auto flex h-[58px] max-w-[1140px] items-center gap-11 overflow-x-auto px-4 text-[13px] font-bold text-[#666666]">
        {navItems.map(({ label, Icon, href, active }) => (
          <Link
            key={label}
            href={href}
            aria-current={active ? "page" : undefined}
            className={["relative flex h-full shrink-0 items-center gap-2", active ? "text-navy" : ""].join(" ")}
          >
            <Icon className="h-5 w-5" strokeWidth={1.8} />
            {label}
            {active ? <span className="absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-navy" /> : null}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function Composer() {
  return (
    <section className="rounded-[12px] border border-[#E5E5E5] bg-white p-4 shadow-[0_8px_24px_rgb(28_29_32/0.04)]">
      <div className="flex items-center gap-4">
        <MemberAvatar variant="maria" size={47} label="Miembro de Nutriología" />
        <p className="text-[16px] font-medium text-[#888888]">
          Comparte tu progreso, haz una pregunta o inspira a la comunidad...
        </p>
      </div>
      <div className="mt-4 border-t border-[#E5E5E5] pt-4">
        <div className="flex flex-wrap gap-7 text-[12px] font-bold text-[#666666]">
          {composerActions.map(({ label, Icon }) => (
            <span key={label} className="inline-flex items-center gap-2">
              <Icon className="h-4 w-4 text-navy" strokeWidth={1.8} /> {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function PostCard({ post }: { post: (typeof posts)[number] }) {
  return (
    <article className="rounded-[12px] border border-[#E5E5E5] bg-white p-5 shadow-[0_8px_24px_rgb(28_29_32/0.035)]">
      <div className="grid gap-4 md:grid-cols-[1fr_122px]">
        <div>
          <div className="flex items-start gap-3">
            <MemberAvatar variant={post.avatar} size={39} label={post.author} />
            <div>
              <div className="flex items-center gap-2">
                <p className="text-[13px] font-black text-navy">{post.author}</p>
                <span className="grid h-4 w-4 place-items-center rounded-full bg-navy text-[10px] font-black text-white">
                  {post.badge}
                </span>
              </div>
              <p className="mt-1 text-[11px] font-semibold text-[#666666]">{post.meta}</p>
            </div>
            <MoreHorizontal className="ml-auto h-5 w-5 text-navy" />
          </div>

          <h2 className="mt-4 text-[20px] font-black leading-tight text-navy">{post.title}</h2>
          <p className="mt-3 max-w-[560px] text-[13px] font-medium leading-[1.65] text-[#0A6B6B]">
            {post.body}
          </p>
        </div>
        <Image
          src={post.image}
          alt=""
          width={120}
          height={112}
          quality={95}
          className="hidden h-[112px] w-[120px] rounded-[10px] object-cover md:block"
        />
      </div>
      <div className="mt-4 flex items-center gap-6 text-[12px] font-semibold text-[#666666]">
        <span className="inline-flex items-center gap-2"><Heart className="h-4 w-4" /> {post.likes}</span>
        <span className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4" /> {post.comments}</span>
        <a href={SKOOL_URL} className="text-navy">{post.link}</a>
      </div>
    </article>
  );
}

function SidebarCard({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-[12px] border border-[#E5E5E5] bg-white p-5 shadow-[0_8px_24px_rgb(28_29_32/0.04)]">
      {children}
    </section>
  );
}

function CourseCard({ course }: { course: (typeof courses)[number] }) {
  const numericProgress = Number(course.progress.replace("%", ""));

  return (
    <a
      href={SKOOL_URL}
      className="group block overflow-hidden rounded-[9px] border border-[#E5E5E5] bg-white shadow-[0_8px_22px_rgb(28_29_32/0.04)] transition hover:-translate-y-0.5 hover:border-gold/45 hover:shadow-[0_16px_30px_rgb(28_29_32/0.09)]"
      aria-label={"Abrir en Skool: " + course.title}
    >
      <div className="relative h-[90px] overflow-hidden bg-cream">
        <Image src={course.image} alt="" fill sizes="240px" quality={95} className="object-cover transition duration-300 group-hover:scale-[1.03]" />
        <span className="absolute bottom-2 left-2 rounded-[4px] bg-navy px-2 py-1 text-[8px] font-black uppercase leading-none text-white">{course.kind}</span>
      </div>
      <div className="p-3">
        <h3 className="text-[13px] font-black leading-tight text-navy group-hover:text-gold">{course.title}</h3>
        <p className="mt-2 min-h-[34px] text-[11px] font-medium leading-[1.35] text-[#4A4A4A]">
          {course.body}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3 text-[10px] font-bold text-[#666666]">
          <span>{course.lessons}</span>
          <div className="h-[3px] flex-1 rounded-full bg-[#E5E5E5]">
            <div className="h-[3px] rounded-full bg-navy" style={{ width: String(numericProgress) + "%" }} />
          </div>
          <span>{course.progress}</span>
        </div>
      </div>
    </a>
  );
}

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-navy">
      <AppHeader />

      <div className="mx-auto max-w-[1140px] px-4 py-6 md:py-7">
        <MembershipHero />

        <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_352px]">
          <section className="grid content-start gap-4">
            <Composer />

            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-wrap gap-3">
                {feedFilters.map((filter, index) => (
                  <span
                    key={filter}
                    className={
                      index === 0
                        ? "rounded-full bg-navy px-5 py-2.5 text-[12px] font-black text-white shadow-[0_8px_18px_rgb(28_29_32/0.18)]"
                        : "rounded-full border border-[#E5E5E5] bg-white px-5 py-2.5 text-[12px] font-bold text-[#666666]"
                    }
                  >
                    {filter}
                  </span>
                ))}
              </div>
              <SlidersHorizontal className="h-5 w-5 shrink-0 text-navy" />
            </div>

            {posts.map((post) => (
              <PostCard key={post.author} post={post} />
            ))}

            <button className="mx-auto inline-flex items-center gap-2 py-1 text-[13px] font-bold text-navy" type="button">
              Cargar más publicaciones <ChevronDown className="h-4 w-4" />
            </button>
          </section>

          <aside className="grid content-start gap-5">
            <SidebarCard>
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#E8F4F3] text-gold">
                  <ShieldCheck className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <h2 className="text-[17px] font-black text-navy">Tu comunidad Nutriología</h2>
              </div>
              <div className="mt-5 grid grid-cols-3 divide-x divide-[#E5E5E5] text-center">
                <div>
                  <p className="text-[24px] font-black text-navy">1,248</p>
                  <p className="text-[11px] font-bold text-[#666666]">Miembros</p>
                </div>
                <div>
                  <p className="text-[24px] font-black text-navy">238</p>
                  <p className="text-[11px] font-bold text-[#666666]"><span className="mr-1 inline-block h-2 w-2 rounded-full bg-[#22a447]" />En línea</p>
                </div>
                <div>
                  <p className="text-[24px] font-black text-navy">12</p>
                  <p className="text-[11px] font-bold text-[#666666]">Expertos</p>
                </div>
              </div>
              <p className="mt-5 text-[14px] font-medium leading-[1.55] text-[#0A6B6B]">
                Comunidad clínica para aprender nutrición basada en evidencia con apoyo real.
              </p>
              <a href={SKOOL_URL} className="mt-4 flex h-10 items-center justify-center gap-2 rounded-[7px] bg-navy text-[13px] font-black text-white" style={{ color: "#ffffff" }}>
                <Video className="h-4 w-4" /> Entrar a la sala de Q&A en vivo
              </a>
              <div className="mt-4 flex items-center gap-1.5">
                {["maria", "jose", "laura", "ricardo"].map((variant) => (
                  <MemberAvatar key={variant} variant={variant} size={26} label="Miembro activo" ring />
                ))}
                <span className="rounded-full bg-[#E8F4F3] px-2 py-1 text-[10px] font-black text-[#666666]">+237</span>
              </div>
              <p className="mt-4 text-[12px] font-medium text-[#666666]">Activa <span className="mx-3">·</span> Basada en evidencia <span className="mx-3">·</span> Para ti</p>
            </SidebarCard>

            <SidebarCard>
              <div className="flex items-center justify-between">
                <h2 className="text-[16px] font-black text-navy">Próxima Q&A clínica en vivo</h2>
                <a href={SKOOL_URL} className="text-[11px] font-bold text-navy">Ver todas</a>
              </div>
              <div className="mt-5 flex gap-3">
                <MemberAvatar variant="doctor" size={36} label="Dr. Alejandro Torres" />
                <div>
                  <p className="text-[13px] font-black text-navy">Dr. Alejandro Torres</p>
                  <p className="text-[11px] font-medium text-[#666666]">Especialista en Nutrición Clínica</p>
                </div>
              </div>
              <h3 className="mt-4 text-[17px] font-black leading-tight text-navy">
                Preguntas y respuestas en vivo sobre Diabetes tipo 2
              </h3>
              <div className="mt-4 grid grid-cols-[54px_1fr] items-center gap-3">
                <div className="rounded-[7px] border border-[#E5E5E5] p-2 text-center">
                  <p className="text-[10px] font-black text-navy">MAY</p>
                  <p className="text-[20px] font-black text-navy">16</p>
                </div>
                <p className="text-[13px] font-bold text-navy">Hoy, 7:00 PM (CDMX)</p>
              </div>
              <a href={SKOOL_URL} className="mt-4 flex h-9 items-center justify-center rounded-[6px] border border-navy bg-white text-[13px] font-black text-navy">
                Unirme a la sala
              </a>
            </SidebarCard>

            <SidebarCard>
              <div className="flex items-center justify-between">
                <h2 className="text-[16px] font-black text-navy">Próximas sesiones temáticas</h2>
                <a href={SKOOL_URL} className="text-[11px] font-bold text-navy">Ver calendario</a>
              </div>
              <div className="mt-4 grid gap-3">
                {sessions.map(([title, body, month, day]) => (
                  <div key={title} className="grid grid-cols-[34px_1fr_38px] items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-[7px] bg-[#E8F4F3] text-gold">
                      <ClipboardList className="h-4 w-4" strokeWidth={1.7} />
                    </span>
                    <p>
                      <span className="block text-[13px] font-black leading-tight text-navy">{title}</span>
                      <span className="mt-1 block text-[11px] font-medium leading-tight text-[#666666]">{body}</span>
                    </p>
                    <span className="rounded-[7px] border border-[#E5E5E5] p-1 text-center">
                      <span className="block text-[9px] font-black text-[#666666]">{month}</span>
                      <span className="block text-[17px] font-black text-navy">{day}</span>
                    </span>
                  </div>
                ))}
              </div>
            </SidebarCard>

            <SidebarCard>
              <div className="flex items-center justify-between">
                <h2 className="text-[16px] font-black text-navy">Tu progreso esta semana</h2>
                <a href={SKOOL_URL} className="text-[11px] font-bold text-navy">Ver detalle</a>
              </div>
              <div className="mt-4 grid grid-cols-[74px_1fr] items-center gap-4">
                <div className="grid h-[70px] w-[70px] place-items-center rounded-full bg-[conic-gradient(#1C1D20_0_78%,#E8F4F3_78%_100%)]">
                  <div className="grid h-[52px] w-[52px] place-items-center rounded-full bg-white text-[15px] font-black text-navy">78%</div>
                </div>
                <p className="text-[13px] font-black leading-[1.35] text-navy">
                  ¡Vas por buen camino!<br />
                  <span className="font-semibold text-[#666666]">Sigue así, cada hábito suma.</span>
                </p>
              </div>
              <div className="mt-4 grid gap-2.5">
                {progressItems.map(([label, score, width]) => (
                  <div key={label} className="grid grid-cols-[1fr_82px_28px] items-center gap-3 text-[11px] font-semibold text-[#666666]">
                    <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-navy" /> {label}</span>
                    <div className="h-[4px] rounded-full bg-[#E5E5E5]"><div className="h-[4px] rounded-full bg-navy" style={{ width }} /></div>
                    <span>{score}</span>
                  </div>
                ))}
              </div>
            </SidebarCard>

            <SidebarCard>
              <h2 className="text-[16px] font-black text-navy">Evidencia que te respalda</h2>
              <div className="mt-4 grid gap-3">
                {evidenceItems.map((item) => (
                  <p key={item} className="inline-flex items-center gap-3 text-[13px] font-semibold text-[#666666]">
                    <Download className="h-4 w-4 text-navy" /> {item}
                  </p>
                ))}
              </div>
            </SidebarCard>
          </aside>
        </div>

        <section className="mt-7">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-end gap-4">
              <h2 className="text-[18px] font-black text-navy">Aula</h2>
              <p className="text-[13px] font-medium text-[#666666]">Continúa aprendiendo</p>
            </div>
            <a href={SKOOL_URL} className="text-[12px] font-bold text-navy">Ver todo</a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {courses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
        </section>

        <section className="mt-7 overflow-hidden rounded-[12px] border border-gold/35 bg-white shadow-[0_14px_34px_rgb(28_29_32/0.08)]">
          <div className="grid items-center gap-5 px-6 py-6 md:grid-cols-[1fr_auto] md:px-8">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.18em] text-gold">Membresía Premium</p>
              <h2 className="mt-2 font-display text-[30px] font-semibold leading-tight text-navy md:text-[38px]">
                Únete a Nutriología y continúa dentro de Skool.
              </h2>
              <p className="copy-justify mt-3 max-w-[660px] text-[14px] font-medium leading-6 text-[#666666]">
                Accede a la comunidad, guías clínicas, cursos básicos, recursos descargables y llamadas semanales por US$29/mes.
              </p>
            </div>
            <a
              href={SKOOL_URL}
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-[8px] bg-gradient-to-r from-[#7BC4BE] to-gold px-6 py-3 text-center text-[14px] font-black leading-5 text-white shadow-[0_16px_34px_rgb(13_132_132/0.28)] transition hover:brightness-105 md:w-auto md:px-7"
              style={{ color: "#ffffff" }}
            >
              <Crown className="h-4 w-4" strokeWidth={1.8} />
              Unirme ahora — US$29/mes
            </a>
          </div>
        </section>

        <section className="mt-6 overflow-hidden rounded-[10px] bg-navy text-white shadow-[0_14px_34px_rgb(28_29_32/0.16)]">
          <div className="grid min-h-[64px] items-center gap-4 px-8 py-4 md:grid-cols-[1fr_1fr]">
            <div className="flex items-center gap-5">
              <span className="font-display text-4xl leading-none text-gold">“</span>
              <p className="text-[15px] font-semibold leading-5">
                La ciencia te da claridad, los hábitos te dan libertad.<br />
                <span className="text-gold">Tu comunidad te da impulso.</span>
              </p>
            </div>
            <div className="flex items-center justify-between gap-5 md:justify-end">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold text-lg font-semibold text-gold">N</span>
              <p className="text-[13px] font-semibold leading-5 text-white/90">
                Estás en el lugar correcto.<br />Sigue construyendo tu mejor versión.
              </p>
              <SlidersHorizontal className="hidden h-16 w-16 text-gold/35 sm:block" strokeWidth={1.2} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
