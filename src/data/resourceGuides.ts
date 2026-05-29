import guides from "./resourceGuides.json";

export type GuideReference = {
  label: string;
  url: string;
};

export type GuideSection = {
  heading: string;
  body: string[];
};

export type GuidePdfPage = {
  title: string;
  subtitle: string;
  bullets: string[];
};

export type ResourceGuide = {
  slug: string;
  title: string;
  category: string;
  accent: string;
  image: string;
  description: string;
  audience: string;
  lead: string;
  promise: string;
  type: string;
  readTime: string;
  quickWins: string[];
  framework: string[];
  sections: GuideSection[];
  downloadBullets: string[];
  references: GuideReference[];
  pdfPages: GuidePdfPage[];
  pdfPath: string;
};

export type ResourceGuideCard = Pick<
  ResourceGuide,
  "slug" | "title" | "category" | "accent" | "image" | "description" | "type" | "readTime"
> & {
  pages: number;
};

export const resourceGuides = guides as ResourceGuide[];

export const resourceGuideCards: ResourceGuideCard[] = resourceGuides.map((guide) => ({
  slug: guide.slug,
  title: guide.title,
  category: guide.category,
  accent: guide.accent,
  image: guide.image,
  description: guide.description,
  type: guide.type,
  readTime: guide.readTime,
  pages: guide.pdfPages.length,
}));

export const guideCategories = [
  "Todas",
  ...Array.from(new Set(resourceGuides.map((guide) => guide.category))),
];

export function getGuideBySlug(slug: string) {
  return resourceGuides.find((guide) => guide.slug === slug);
}
