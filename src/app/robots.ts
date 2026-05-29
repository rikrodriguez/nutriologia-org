import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://nutriologia.org/sitemap.xml",
    host: "https://nutriologia.org",
  };
}
