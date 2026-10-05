import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nimatullah.com";
  const locales = ["en", "ar"];
  const pages = ["", "/about", "/missions", "/stories", "/principles", "/verification", "/transparency", "/privacy", "/institutional"];

  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: base + "/" + locale + page,
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1 : 0.7,
    })),
  );
}
