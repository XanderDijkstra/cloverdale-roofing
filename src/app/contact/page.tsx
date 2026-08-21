import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Search } from "lucide-react";
import SiteHero from "../_components/site-hero";
import styles from "../homepage2.module.css";
import JsonLd from "@/components/json-ld";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Request a Roof Assessment",
  description: "Request a roofing assessment for a property in Cloverdale or the surrounding service area.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <SiteHero
        inner
        eyebrow="Request roofing help"
        title="Get help with your Cloverdale roof."
        text="Tell us what you have noticed and we will arrange the right roof assessment."
        image="/images/homepage2/cloverdale-roof-hero.webp"
        imageAlt="Rain-wet Cloverdale home with a dark architectural-shingle roof"
        formTitle="Request your roof assessment"
        formText="Complete the short form and your email app opens with the details ready to send."
      />
      <section className={styles.contactSupport}>
        <div className={styles.sectionShell}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Contact</span></nav>
          <div className={styles.contactSupportGrid}>
            <article><Search aria-hidden="true" /><h2>Not sure what the roof needs?</h2><p>Request an inspection and tell us what you can see. We will identify the right next step.</p><Link className={styles.textLink} href="/services/roof-inspection">View roof inspection<ArrowRight aria-hidden="true" /></Link></article>
            <article><MapPin aria-hidden="true" /><h2>Need service outside Cloverdale?</h2><p>Check the surrounding communities we serve, or send your location with the request.</p><Link className={styles.textLink} href="/locations">View service areas<ArrowRight aria-hidden="true" /></Link></article>
          </div>
        </div>
      </section>
    </main>
  );
}
