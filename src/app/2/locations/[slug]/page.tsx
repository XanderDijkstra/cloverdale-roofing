import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, CloudRain, MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import SiteHero from "../../_components/site-hero";
import styles from "../../homepage2.module.css";
import { locations } from "../../site-data";
import { services } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);
  if (!location) return {};
  return {
    title: `Roofing in ${location.title}`,
    description: `${location.intro} Explore roofing services for ${location.title}.`,
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);
  if (!location) notFound();

  return (
    <main>
      <SiteHero
        inner
        eyebrow={`Roofing in ${location.title}`}
        title={`Roof repair and replacement in ${location.title}.`}
        text={location.intro}
        image="/images/homepage2/cloverdale-roof-hero.webp"
        imageAlt={`Rain-wet home representing roofing service in ${location.title}`}
        formTitle={`Request a roof assessment in ${location.title}`}
        formText="Tell us what you have noticed and we will help you plan the next step."
      />

      <section className={styles.detailSection}>
        <div className={styles.sectionShell}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/2">Home</Link><span>/</span><Link href="/2/locations">Locations</Link><span>/</span><span>{location.title}</span>
          </nav>
          <div className={styles.detailGrid}>
            <div className={styles.detailCopy}>
              <MapPin aria-hidden="true" />
              <h2>Roofing for homes in {location.title}.</h2>
              <p>{location.short}</p>
              <Link className={styles.primaryButton} href="/2/contact">Request assessment<ArrowRight aria-hidden="true" /></Link>
            </div>
            <div className={styles.scopePanel}>
              <CloudRain aria-hidden="true" />
              <h2>Local planning considerations</h2>
              <ul>{location.considerations.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
            </div>
          </div>

          <div className={styles.relatedServices}>
            <h2>How we can help with your roof</h2>
            <div>
              {services.map((service) => (
                <Link href={`/2/services/${service.slug}`} key={service.slug}>
                  <span>{service.title}</span><ArrowRight aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
