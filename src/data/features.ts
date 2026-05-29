import {
  Apple,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  ClipboardList,
  CookingPot,
  FileDown,
  HeartPulse,
  MessageCircle,
  NotebookTabs,
  Pill,
  Salad,
  ShieldCheck,
  ShoppingBasket,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const conditions: FeatureItem[] = [
  {
    title: "Diabetes tipo 2",
    description: "Educación para organizar comidas, porciones y decisiones diarias con más claridad.",
    icon: HeartPulse,
  },
  {
    title: "Salud renal",
    description: "Recursos para entender nutrientes que suelen requerir especial cuidado clínico.",
    icon: ShieldCheck,
  },
  {
    title: "Embarazo",
    description: "Guías prácticas para etapas donde la alimentación necesita más estructura y seguridad.",
    icon: Stethoscope,
  },
  {
    title: "Digestión",
    description: "Contenido educativo para observar hábitos, tolerancias y patrones alimentarios.",
    icon: Salad,
  },
  {
    title: "Hipertensión",
    description: "Orientación general sobre sodio, organización de comidas y lectura de etiquetas.",
    icon: ClipboardList,
  },
  {
    title: "Resistencia a la insulina",
    description: "Herramientas para comprender combinaciones, horarios y consistencia alimentaria.",
    icon: Apple,
  },
  {
    title: "SOP",
    description: "Recursos educativos sobre alimentación, planificación y hábitos sostenibles.",
    icon: NotebookTabs,
  },
  {
    title: "Inflamación",
    description: "Rutas para identificar patrones y construir una alimentación menos improvisada.",
    icon: Sparkles,
  },
];

export const membershipFeatures: FeatureItem[] = [
  {
    title: "Recetas basadas en evidencia",
    description: "Ideas claras, aplicables y pensadas para condiciones reales sin lenguaje confuso.",
    icon: CookingPot,
  },
  {
    title: "Guías clínicas prácticas",
    description: "Documentos simples para entender prioridades nutricionales y tomar mejores decisiones.",
    icon: ClipboardCheck,
  },
  {
    title: "Menús y listas de compra",
    description: "Estructura semanal para reducir improvisación y comprar con intención.",
    icon: ShoppingBasket,
  },
  {
    title: "Cursos básicos",
    description: "Lecciones introductorias para aprender nutrición clínica sin tecnicismos innecesarios.",
    icon: BookOpen,
  },
  {
    title: "Comunidad privada",
    description: "Un espacio serio para preguntas generales, avances y acompañamiento entre miembros.",
    icon: Users,
  },
  {
    title: "Llamadas semanales",
    description: "Sesiones de educación y preguntas para mantener claridad y continuidad.",
    icon: CalendarDays,
  },
  {
    title: "Recursos descargables",
    description: "Checklists, planificadores y materiales pensados para uso diario.",
    icon: FileDown,
  },
  {
    title: "Soporte en comunidad",
    description: "Acompañamiento educativo para sostener mejores hábitos con apoyo real.",
    icon: MessageCircle,
  },
];

export const moreThanRecipes: FeatureItem[] = [
  {
    title: "Aprender qué comer",
    description: "Entender el porqué detrás de las decisiones para depender menos de reglas sueltas.",
    icon: BookOpen,
  },
  {
    title: "Organizar tu alimentación",
    description: "Convertir la información en menús, compras y rutinas que sí caben en tu semana.",
    icon: ClipboardList,
  },
  {
    title: "Sostener el cambio",
    description: "Repetir lo que funciona con estructura, flexibilidad y seguimiento educativo.",
    icon: Pill,
  },
  {
    title: "Tener apoyo real",
    description: "No hacerlo en aislamiento: comunidad, llamadas y recursos para avanzar con criterio.",
    icon: Users,
  },
];

export const pricingBullets = [
  "Acceso completo en Skool",
  "Biblioteca de recetas",
  "Recursos por condición",
  "Cursos básicos",
  "Llamadas semanales",
  "Comunidad privada",
  "Cancelas cuando quieras",
];
