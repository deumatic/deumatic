import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/services/ai-ml-engineering", "/solutions", "/solutions/pos-saudi-arabia", "/work", "/about", "/contact", "/privacy"];
  const lastModified = new Date("2026-09-19");
  return routes.map((route, index) => ({
    url: `${site.url}${route}`,
    lastModified,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/solutions" || route === "/services/ai-ml-engineering" ? 0.9 : route === "/contact" || route === "/solutions/pos-saudi-arabia" ? 0.8 : 0.7
  }));
}
