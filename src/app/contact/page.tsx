import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Search } from "lucide-react";
import SiteHero from "../_components/site-hero";
import styles from "../homepage2.module.css";
import JsonLd from "@/components/json-ld";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import section from "@/components/page-sections.module.css";
import { FaqSection } from "@/components/page-sections";

export const metadata: Metadata = createPageMetadata({
  title: "Request a Roof Assessment",
  description: "Request a roofing assessment for a property in Cloverdale or the surrounding service area.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1}>
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
          <div className={section.article}><h2>Prefer to write an email?</h2><p>Email <a href={`mailto:${site.email}`}>{site.email}</a> with your property address, roofing concern, and a way to reach you. This is the current website inquiry address.</p><h3>What happens next</h3><p>The form prepares an email for you to send. After you send it, we can discuss coverage, access, the assessment scope, and availability. The website does not confirm a visit or provide an instant quote.</p><p>If the email app does not open, use the copy-request option in the form and paste the details into your preferred email service.</p><h3>Help us understand the property</h3><p>Mention shared roofs, unit numbers, gate access, or time-sensitive requirements. Ground-level photos and any previous roof reports can be added to your email. There is no need to climb onto the roof.</p></div>
          <div className={styles.contactSupportGrid}>
            <article><Search aria-hidden="true" /><h2>Not sure what the roof needs?</h2><p>Request an inspection and tell us what you can see. We will identify the right next step.</p><Link className={styles.textLink} href="/services/roof-inspection">View roof inspection<ArrowRight aria-hidden="true" /></Link></article>
            <article><MapPin aria-hidden="true" /><h2>Need service outside Cloverdale?</h2><p>Check the surrounding communities we serve, or send your location with the request.</p><Link className={styles.textLink} href="/locations">View service areas<ArrowRight aria-hidden="true" /></Link></article>
          </div>
        </div>
      </section>
      <FaqSection title="Before sending your request." items={[
        {question:"Does this book an appointment?",answer:"No. Your email starts an inquiry. Coverage, scope, fees where applicable, and visit availability need to be confirmed before an appointment is agreed."},
        {question:"Can I request urgent help?",answer:"Explain that your concern is time-sensitive in the email. This website does not promise emergency or same-day attendance; do not rely on the form as confirmation of an urgent visit."},
        {question:"Do I have to know which service I need?",answer:"No. Choose roof inspection or Other, then describe the concern. The assessment can help establish whether repair, replacement, or further investigation is appropriate."},
      ]} />
    </main>
  );
}
