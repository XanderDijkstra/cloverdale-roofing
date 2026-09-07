import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { services } from "@/lib/site";
import { locations } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/services",
    ...services.map((service) => `/services/${service.slug}`),
    "/locations",
    ...locations.map((location) => `/locations/${location.slug}`),
    "/about",
    "/contact",
    "/roofing-guide",
    "/privacy",
  ];

  // Editorial dates, not the build date: only change when page content changes.
  const updated = new Set(["/", "/roofing-guide", ...services.map((service) => `/services/${service.slug}`), ...locations.map((location) => `/locations/${location.slug}`)]);
  return routes.map((path) => ({ url: absoluteUrl(path), ...(updated.has(path) ? { lastModified: "2026-09-07" } : {}) }));
}
