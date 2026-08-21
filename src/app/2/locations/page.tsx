import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import SiteHero from "../_components/site-hero";
import styles from "../homepage2.module.css";
import { locations } from "../site-data";

export const metadata: Metadata = {
  title: "Roofing Locations",
  description: "Roofing service areas across Cloverdale, Clayton Heights, South Surrey, and nearby Langley.",
};

export default function LocationsPage() {
  return (
    <main>
      <SiteHero
        inner
        eyebrow="Roofing locations"
        title="Local roofing centred on Cloverdale."
        text="Explore the genuine areas covered and the roofing considerations that matter there."
        image="/images/homepage2/cloverdale-roof-hero.webp"
        imageAlt="Cloverdale home with a dark roof after rainfall"
        formTitle="Check your property area"
        formText="Share the neighbourhood and roof concern to confirm the right next step."
      />

      <section className={styles.directorySection}>
        <div className={styles.sectionShell}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/2">Home</Link><span>/</span><span>Locations</span>
          </nav>
          <div className={styles.directoryIntro}>
            <h2>Each location has a useful destination.</h2>
            <p>Location pages explain real coverage and link visitors to the roofing services available.</p>
          </div>
          <div className={styles.locationPageGrid}>
            {locations.map((location) => (
              <article key={location.slug}>
                <MapPin aria-hidden="true" />
                <h2>{location.title}</h2>
                <p>{location.short}</p>
                <Link className={styles.textLink} href={`/2/locations/${location.slug}`}>
                  View location page<ArrowRight aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
