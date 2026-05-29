export type Resource = {
  title: string;
  category: string;
  description: string;
  pages: number;
  type: "PDF" | "Checklist" | "Planificador" | "Guía";
};

export const filters = [
  "Todas",
  "Diabetes",
  "Salud renal",
  "Embarazo",
  "Digestión",
  "Hipertensión",
  "SOP",
  "Prediabetes",
];

export const resources: Resource[] = [
  {
    title: "Guía de alimentación para diabetes tipo 2",
    category: "Diabetes",
    description: "Estrategias prácticas para organizar comidas con mejor comprensión glucémica.",
    pages: 24,
    type: "Guía",
  },
  {
    title: "Checklist renal: alimentos que cuidar",
    category: "Salud renal",
    description: "Lista educativa para conversar mejor tus prioridades con tu profesional de salud.",
    pages: 8,
    type: "Checklist",
  },
  {
    title: "Nutrición en embarazo: guía práctica",
    category: "Embarazo",
    description: "Principios de alimentación segura, suficiente y aplicable en el día a día.",
    pages: 28,
    type: "PDF",
  },
  {
    title: "Menú para resistencia a la insulina",
    category: "Prediabetes",
    description: "Ideas de comidas equilibradas para reducir improvisación semanal.",
    pages: 21,
    type: "Planificador",
  },
  {
    title: "Guía de digestión y salud intestinal",
    category: "Digestión",
    description: "Hábitos, registro de tolerancias y señales para ordenar tus conversaciones clínicas.",
    pages: 22,
    type: "Guía",
  },
  {
    title: "Protocolo nutricional para inflamación",
    category: "Inflamación",
    description: "Marco educativo para identificar patrones y construir comidas menos reactivas.",
    pages: 20,
    type: "PDF",
  },
  {
    title: "Lista de compras para síndrome metabólico",
    category: "SOP",
    description: "Alimentos base para planificar compras con intención y variedad.",
    pages: 12,
    type: "Checklist",
  },
  {
    title: "Guía de meriendas para embarazo",
    category: "Embarazo",
    description: "Opciones simples para resolver hambre, horarios y energía percibida.",
    pages: 16,
    type: "Guía",
  },
  {
    title: "Planificador de comidas para salud renal",
    category: "Salud renal",
    description: "Estructura visual para organizar comidas y preguntas para consulta personalizada.",
    pages: 18,
    type: "Planificador",
  },
  {
    title: "Guía básica para hipertensión y sodio",
    category: "Hipertensión",
    description: "Lectura de etiquetas, sodio oculto y decisiones prácticas para conversar en consulta.",
    pages: 12,
    type: "Guía",
  },
  {
    title: "Recursos para prediabetes",
    category: "Prediabetes",
    description: "Base educativa para entender hábitos, porciones y continuidad.",
    pages: 15,
    type: "PDF",
  },
  {
    title: "Menús para control glucémico",
    category: "Diabetes",
    description: "Menús diarios para practicar combinaciones y planificación semanal.",
    pages: 24,
    type: "Planificador",
  },
];

export const popularResources = resources.slice(0, 5);
export const newResources = resources.slice(5, 10);
