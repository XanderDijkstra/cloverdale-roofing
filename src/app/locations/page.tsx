import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import SiteHero from "../_components/site-hero";
import styles from "../homepage2.module.css";
import { locations } from "../site-data";
import JsonLd from "@/components/json-ld";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Roofing Locations",
  description: "Roofing service areas across Cloverdale, Clayton Heights, South Surrey, and nearby Langley.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Locations", path: "/locations" }])} />
      <SiteHero
        inner
        eyebrow="Roofing locations"
        title="Roofing services near Cloverdale."
        text="We inspect, repair, and replace roofs throughout Cloverdale and the surrounding communities we serve."
        image="/images/homepage2/cloverdale-roof-hero.webp"
        imageAlt="Cloverdale home with a dark roof after rainfall"
        formTitle="Check your property area"
        formText="Share the neighbourhood and roof concern to confirm the right next step."
      />

      <section className={styles.directorySection}>
        <div className={styles.sectionShell}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span><span>Locations</span>
          </nav>
          <div className={styles.directoryIntro}>
            <h2>Roofing services where you live.</h2>
            <p>Find your area below, then tell us what is happening with your roof.</p>
          </div>
          <div className={styles.locationPageGrid}>
            {locations.map((location) => (
              <article key={location.slug}>
                <MapPin aria-hidden="true" />
                <h2>{location.title}</h2>
                <p>{location.short}</p>
                <Link className={styles.textLink} href={`/locations/${location.slug}`}>
                  Roofing in {location.title}<ArrowRight aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
