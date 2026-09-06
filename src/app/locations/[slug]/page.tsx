import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, CloudRain, MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import SiteHero from "../../_components/site-hero";
import styles from "../../homepage2.module.css";
import { locations } from "../../site-data";
import JsonLd from "@/components/json-ld";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";
import { services } from "@/lib/site";
import { site } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";
import { locationContent } from "../location-content";
import local from "../location.module.css";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);
  if (!location) return {};
  return createPageMetadata({
    title: `Roofing in ${location.title}`,
    description: `${location.intro} Explore roofing services for ${location.title}.`,
    path: `/locations/${location.slug}`,
  });
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);
  if (!location) notFound();
  const content = locationContent[slug];

  return (
    <main>
      <JsonLd data={[breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Locations", path: "/locations" },
        { name: location.title, path: `/locations/${location.slug}` },
      ]), {
        "@context": "https://schema.org", "@type": "Service",
        name: `Residential roofing in ${location.title}`,
        description: location.intro,
        url: absoluteUrl(`/locations/${location.slug}`),
        provider: { "@id": `${site.url}/#organization` },
        areaServed: { "@type": "Place", name: location.title === "Nearby Langley" ? "Cloverdale–Langley border area, BC" : `${location.title}, BC` },
        hasOfferCatalog: { "@type": "OfferCatalog", name: "Roofing services", itemListElement: services.map((service) => ({ "@type": "OfferCatalog", name: service.title, url: absoluteUrl(`/services/${service.slug}`) })) },
      }]} />
      <SiteHero
        inner
        eyebrow={`Roofing in ${location.title}`}
        title={`Roof repair and replacement in ${location.title}.`}
        text={location.intro}
        image="/images/homepage2/cloverdale-roof-hero.webp"
        imageAlt={`Rain-wet home representing roofing service in ${location.title}`}
        formTitle={`Request a roof assessment in ${location.title}`}
        formText="Tell us what you have noticed and we will help you plan the next step."
        location={location.title}
        secondaryHref="#roofing-guide"
        secondaryLabel={`Roofing advice for ${location.title}`}
      />

      <section className={styles.detailSection} id="roofing-guide">
        <div className={styles.sectionShell}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span><Link href="/locations">Locations</Link><span>/</span><span>{location.title}</span>
          </nav>
          <div className={styles.detailGrid}>
            <div className={styles.detailCopy}>
              <MapPin aria-hidden="true" />
              <h2>{content.heading}</h2>
              {content.paragraphs.map((text) => <p key={text}>{text}</p>)}
              <Link className={styles.primaryButton} href="/contact">Request assessment<ArrowRight aria-hidden="true" /></Link>
            </div>
            <div className={styles.scopePanel}>
              <CloudRain aria-hidden="true" />
              <h2>Local planning considerations</h2>
              <ul>{location.considerations.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
            </div>
          </div>
          <div className={local.section}>
            <div className={local.heading}><p>Before work begins</p><h2>What matters at your property.</h2></div>
            <div className={local.planning}>{content.planning.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          </div>
          <div className={local.section}>
            <div className={local.heading}><p>Repairs, replacements & assessments</p><h2>Roofing services in {location.title}.</h2></div>
            <div className={local.services}>{services.map((service, index) => <article key={service.slug}><h3>{service.title}</h3><p>{content.services[index]}</p><Link className={styles.textLink} href={`/services/${service.slug}`}>About {service.title.toLowerCase()}<ArrowRight size={18} aria-hidden="true" /></Link></article>)}</div>
          </div>
          <div className={`${local.section} ${local.quote}`}>
            <div><p className={local.label}>Your assessment</p><h2>Know what happens next.</h2><p>{content.preparation}</p><Link className={styles.primaryButton} href="#assessment-form">Start your request<ArrowRight aria-hidden="true" /></Link></div>
            <ol>
              <li><h3>Share the property details</h3><p>Choose the service that best matches your concern and add your contact details and address. The form opens an email draft for you to send.</p></li>
              <li><h3>Confirm the visit and scope</h3><p>We follow up to confirm coverage, access, and availability. Your request is an inquiry, not a confirmed appointment.</p></li>
              <li><h3>Review the proposed work</h3><p>Discuss the findings and the repair or replacement options before agreeing to any roofing work.</p></li>
            </ol>
          </div>
          <div className={`${local.section} ${local.pricing}`}><h2>What affects a roofing quote?</h2><p>{content.pricing}</p></div>
          <div className={`${local.section} ${styles.faqLayout}`}>
            <div className={local.heading}><p>Questions from homeowners</p><h2>Roofing in {location.title}: your questions.</h2></div>
            <div className={styles.faqList}>{content.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>
          </div>
          <div className={styles.relatedServices}>
            <h2>Looking for another area?</h2>
            <div>{locations.filter((item) => item.slug !== slug).map((item) => <Link href={`/locations/${item.slug}`} key={item.slug}>{item.title}<ArrowRight aria-hidden="true" /></Link>)}<Link href="/locations">All service areas<ArrowRight aria-hidden="true" /></Link></div>
          </div>
        </div>
      </section>
      <section className={styles.finalCta}><div><h2>Tell us about your roof.</h2><p>Start with your {location.title} property and the problem you have noticed.</p></div><Link className={styles.finalButton} href="#assessment-form">Request assessment<ArrowRight aria-hidden="true" /></Link></section>
    </main>
  );
}
