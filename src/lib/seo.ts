import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageMetadata = { title: string; description: string; path: string; absoluteTitle?: boolean };

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}

export function createPageMetadata({ title, description, path, absoluteTitle = false }: PageMetadata): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: site.name, locale: "en_CA", type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Cloverdale Roofing Co. — residential roofing in Cloverdale and Surrey" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    inLanguage: "en-CA",
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    areaServed: "Cloverdale and Surrey, British Columbia",
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(service: { title: string; short: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.short,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: { "@id": `${site.url}/#organization` },
    areaServed: "Cloverdale and Surrey, British Columbia",
  };
}
