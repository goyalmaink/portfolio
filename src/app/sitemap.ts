import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/data/projects";
import { SITE } from "@/lib/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    { url: SITE.url, changeFrequency: "monthly", priority: 1 },
  ];
  const projects: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
    url: `${SITE.url}/work/${p.slug}`,
    changeFrequency: "yearly",
    priority: 0.8,
  }));
  return [...routes, ...projects];
}
