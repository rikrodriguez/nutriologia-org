import { MEDIA } from "@/lib/media";

export const testimonials = [
  {
    quote:
      "Tenía demasiada información guardada y poca estructura. Ahora sé por dónde empezar cada semana sin sentir que todo depende de fuerza de voluntad.",
    name: "Mariana",
    detail: "34 años, mamá y profesional",
    image: MEDIA.testimonials.mariana,
    imageAlt: "Retrato casual ficticio de Mariana",
  },
  {
    quote:
      "Me ayudó a ordenar comidas, compras y dudas. Lo valioso fue tener explicaciones claras y una comunidad seria, no otra lista de prohibiciones.",
    name: "Carlos",
    detail: "41 años, gerente de operaciones",
    image: MEDIA.testimonials.carlos,
    imageAlt: "Retrato casual ficticio de Carlos",
  },
  {
    quote:
      "Por fin encontré recursos que puedo aplicar con mi rutina real. Me siento con más claridad y menos confusión al decidir qué comer.",
    name: "Lucía",
    detail: "38 años, emprendedora",
    image: MEDIA.testimonials.lucia,
    imageAlt: "Retrato casual ficticio de Lucía",
  },
];

export const faqs = [
  {
    question: "¿Esto reemplaza una consulta médica?",
    answer:
      "No. Nutriología ofrece educación nutricional, recursos y comunidad. Para condiciones clínicas específicas necesitas evaluación personalizada con un profesional de salud.",
  },
  {
    question: "¿Dónde está alojada la comunidad?",
    answer:
      "La membresía vive en Skool. Desde esta web entras al espacio externo donde se gestionan comunidad, pagos y acceso.",
  },
  {
    question: "¿Cómo se paga?",
    answer:
      "El pago se procesa directamente en Skool. Nutriología.org no implementa checkout propio, Stripe ni almacenamiento de pagos.",
  },
  {
    question: "¿Puedo cancelar?",
    answer:
      "Sí. La membresía está pensada como acceso mensual y la gestión de cancelación se realiza dentro de Skool.",
  },
  {
    question: "¿Qué incluye Skool?",
    answer:
      "Incluye comunidad privada, recursos, clases, cursos básicos, calendario de llamadas y biblioteca organizada de materiales educativos.",
  },
  {
    question: "¿Sirve si estoy embarazada o tengo una condición clínica?",
    answer:
      "Puede ayudarte a entender conceptos y organizar preguntas, pero no sustituye indicaciones personalizadas. En embarazo o condiciones clínicas, consulta con tu profesional tratante.",
  },
];
