import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Search, ShieldCheck } from "lucide-react";
import SiteHero from "../_components/site-hero";
import styles from "../homepage2.module.css";
import JsonLd from "@/components/json-ld";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";
import { FinalCta, ServiceAreas } from "@/components/page-sections";
import section from "@/components/page-sections.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Our Roofing Approach",
  description: "Careful roof inspections, repairs, and replacements for homeowners in Cloverdale and Surrey, BC.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1}>
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
      <section className={section.section}><div className={`${styles.sectionShell} ${section.article}`}><h2>A clear conversation before a commitment.</h2><p>We start with the roof problem and your priorities. A localized repair, a planned replacement, and an inspection before a purchase need different scopes. The recommendation should explain the condition of your roof and the work that addresses it.</p><h3>Know what you are agreeing to</h3><p>Before work begins, review the materials, access arrangements, exclusions, payment terms, and estimated schedule. Ask how concealed damage will be documented and how additional work will be authorized.</p><h3>Understand the practical limits</h3><p>Weather, safe access, and concealed construction can limit an assessment or change the work plan. We discuss those limits alongside the findings rather than presenting an inspection as a guarantee about areas that cannot be seen.</p><h3>Keep the handover useful</h3><p>Retain your agreed scope, product details, and any warranty documents. Know which items were completed, which items remain outside the scope, and where to raise a follow-up concern.</p><Link className={styles.textLink} href="/roofing-guide">Questions to ask before choosing roofing work<ArrowRight size={18} aria-hidden="true" /></Link></div></section>
      <ServiceAreas /><FinalCta href="#assessment-form" />
    </main>
  );
}
