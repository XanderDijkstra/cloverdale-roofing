import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Search } from "lucide-react";
import SiteHero from "../_components/site-hero";
import styles from "../homepage2.module.css";

export const metadata: Metadata = {
  title: "Request a Roof Assessment",
  description: "Request a roofing assessment for a property in Cloverdale or the surrounding service area.",
};

export default function ContactPage() {
  return (
    <main>
      <SiteHero
        inner
        eyebrow="Request an assessment"
        title="Tell us about your Cloverdale roof."
        text="Share the concern, property area, and service you think you may need."
        image="/images/homepage2/cloverdale-roof-hero.webp"
        imageAlt="Rain-wet Cloverdale home with a dark architectural-shingle roof"
        formTitle="Start your roof assessment request"
        formText="Complete the short form and your email app opens with the details ready to send."
      />
      <section className={styles.contactSupport}>
        <div className={styles.sectionShell}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/2">Home</Link><span>/</span><span>Contact</span></nav>
          <div className={styles.contactSupportGrid}>
            <article><Search aria-hidden="true" /><h2>Not sure which service?</h2><p>Start with a roof inspection and describe what you can see.</p><Link className={styles.textLink} href="/2/services/roof-inspection">View roof inspection<ArrowRight aria-hidden="true" /></Link></article>
            <article><MapPin aria-hidden="true" /><h2>Check the service area</h2><p>Review the location pages before submitting a property outside Cloverdale.</p><Link className={styles.textLink} href="/2/locations">View locations<ArrowRight aria-hidden="true" /></Link></article>
          </div>
        </div>
      </section>
    </main>
  );
}
