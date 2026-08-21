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
  ];

  return routes.map((path) => ({ url: absoluteUrl(path) }));
}
