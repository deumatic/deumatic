import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/work", "/about", "/contact", "/privacy"];
  const lastModified = new Date("2026-09-14");
  return routes.map((route, index) => ({
    url: `${site.url}${route}`,
    lastModified,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/contact" ? 0.8 : 0.7
  }));
}
