import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap { const routes = ["", "/services", "/service-areas", "/about", "/contact", ...services.map(s => `/services/${s.slug}`)]; return routes.map(path => ({ url: `${site.url}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : 0.8 })); }
