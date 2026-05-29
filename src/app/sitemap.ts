import type { MetadataRoute } from "next";
import { resourceGuides } from "@/data/resourceGuides";

const baseUrl = "https://nutriologia.org";
const lastModified = new Date("2026-05-27");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: baseUrl + "/salud",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: baseUrl + "/sales",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: baseUrl + "/recursos",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...resourceGuides.map((guide) => ({
      url: baseUrl + "/recursos/" + guide.slug,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.76,
    })),
    {
      url: baseUrl + "/membresia",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
