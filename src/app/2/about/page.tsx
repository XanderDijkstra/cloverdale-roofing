import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Search, ShieldCheck } from "lucide-react";
import SiteHero from "../_components/site-hero";
import styles from "../homepage2.module.css";

export const metadata: Metadata = {
  title: "Our Roofing Approach",
  description: "A practical, inspection-led approach to roofing decisions in Cloverdale and Surrey, BC.",
};

export default function AboutPage() {
  return (
    <main>
      <SiteHero
        inner
        eyebrow="Our roofing approach"
        title="Clear roofing advice for Cloverdale homes."
        text="Start with the condition, make the problem visible, and compare sensible options."
        image="/images/homepage2/roof-detail.webp"
        imageAlt="Wet roof shingles, valley, flashing, and gutter details"
        formTitle="Tell us about your roof"
      />

      <section className={styles.detailSection}>
        <div className={styles.sectionShell}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/2">Home</Link><span>/</span><span>About</span></nav>
          <div className={styles.approachGrid}>
            <article><Search aria-hidden="true" /><h2>Inspect before prescribing</h2><p>A visible symptom is a starting point. The surrounding roof details determine whether the answer is focused or system-wide.</p></article>
            <article><ClipboardCheck aria-hidden="true" /><h2>Explain the scope</h2><p>Photos, exclusions, assumptions, and next steps make the proposed work easier to evaluate.</p></article>
            <article><ShieldCheck aria-hidden="true" /><h2>Plan the property</h2><p>Access, protection, debris, weather, and cleanup belong in the roofing plan from the start.</p></article>
          </div>
          <div className={styles.relatedBand}>
            <div><h2>See the complete service structure.</h2><p>Each service and location has its own page instead of hiding inside one long homepage.</p></div>
            <Link className={styles.textLink} href="/2/services">View roofing services<ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
