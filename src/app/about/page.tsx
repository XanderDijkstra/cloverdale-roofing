import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Search, ShieldCheck } from "lucide-react";
import SiteHero from "../_components/site-hero";
import styles from "../homepage2.module.css";
import JsonLd from "@/components/json-ld";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Roofing Approach",
  description: "Careful roof inspections, repairs, and replacements for homeowners in Cloverdale and Surrey, BC.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <SiteHero
        inner
        eyebrow="Our roofing approach"
        title="Careful roofing work for Cloverdale homes."
        text="We inspect the complete roof, explain what we find, and complete the work your home needs."
        image="/images/homepage2/roof-detail.webp"
        imageAlt="Wet roof shingles, valley, flashing, and gutter details"
        formTitle="Tell us about your roof"
      />

      <section className={styles.detailSection}>
        <div className={styles.sectionShell}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>About</span></nav>
          <div className={styles.approachGrid}>
            <article><Search aria-hidden="true" /><h2>We inspect the complete roof</h2><p>We trace the visible problem and check the surrounding roof details before recommending a repair or replacement.</p></article>
            <article><ClipboardCheck aria-hidden="true" /><h2>We explain the work</h2><p>You get a clear scope with photos, assumptions, and next steps before roofing work begins.</p></article>
            <article><ShieldCheck aria-hidden="true" /><h2>We protect your property</h2><p>Access, landscaping, debris, weather, and cleanup are part of our plan from the start.</p></article>
          </div>
          <div className={styles.relatedBand}>
            <div><h2>Roofing help for every stage of your roof.</h2><p>We handle inspections, leak repairs, complete replacements, and cedar roof conversions.</p></div>
            <Link className={styles.textLink} href="/services">View roofing services<ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
