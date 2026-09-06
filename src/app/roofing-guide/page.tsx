import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import JsonLd from "@/components/json-ld";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";
import { FinalCta } from "@/components/page-sections";
import styles from "../homepage2.module.css";
import section from "@/components/page-sections.module.css";

export const metadata: Metadata = createPageMetadata({ title: "Homeowner Roofing Guide: Repairs, Quotes & Assessments", description: "Prepare for a roof assessment, compare repair and replacement scopes, and know what to ask before agreeing to roofing work in Cloverdale and Surrey.", path: "/roofing-guide" });

export default function RoofingGuide() {
  return <main id="main-content" tabIndex={-1}><JsonLd data={breadcrumbSchema([{name:"Home",path:"/"},{name:"Homeowner guide",path:"/roofing-guide"}])} />
    <div className={`${styles.sectionShell} ${section.section}`}><nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Homeowner guide</span></nav>
      <article className={section.article}>
        <p>For homeowners in Cloverdale & Surrey</p><h1>Make a clearer decision about your roof.</h1><p>You do not need to know roofing terminology to ask useful questions. Start with the problem, compare the work included, and agree how surprises will be handled.</p>
        <nav className={section.jumpLinks} aria-label="In this guide"><a href="#repair-or-replace">Repair or replace</a><a href="#compare-quotes">Compare quotes</a><a href="#prepare">Prepare for a visit</a><a href="#handover">After the work</a></nav>
        <section id="repair-or-replace"><h2>Repair or replacement?</h2><p>The decision depends on how widespread the problem is and the condition of the remaining roof. Age helps provide context, but it should not be the only reason given for a replacement.</p>
          <table className={section.comparison}><caption>Questions to discuss during an assessment</caption><thead><tr><th scope="col">What you notice</th><th scope="col">What to ask</th></tr></thead><tbody><tr><th scope="row">One recurring leak</th><td>Has the actual entry point been identified? Is the surrounding roof still serviceable?</td></tr><tr><th scope="row">Wear in several areas</th><td>Would repairs address the wider deterioration, or only the symptoms?</td></tr><tr><th scope="row">An aging cedar roof</th><td>What condition is the deck in, and what preparation would a conversion require?</td></tr><tr><th scope="row">Unknown roof history</th><td>What can an inspection establish, and what will remain concealed or uncertain?</td></tr></tbody></table>
          <p><Link href="/services/roof-repair">Read about roof repair</Link> or <Link href="/services/roof-replacement">see what a replacement involves</Link>.</p>
        </section>
        <section id="compare-quotes"><h2>Compare what the quote covers.</h2><p>A lower total can reflect a different scope. Ask each contractor to make these items explicit so you can compare like for like.</p><ol>
          <li><strong>The work area.</strong> Which roof sections, additions, garages, or other buildings are included?</li>
          <li><strong>Removal and preparation.</strong> What is being removed, retained, inspected, and disposed of?</li>
          <li><strong>The roof system.</strong> Which materials, underlayment, flashing, and ventilation work are specified?</li>
          <li><strong>Concealed damage.</strong> What deck repairs are allowed for, and how will extra work be documented, priced, and approved?</li>
          <li><strong>Access and protection.</strong> Where will materials and waste be placed, and how will entrances, landscaping, and neighbouring property be protected?</li>
          <li><strong>Timing and payment.</strong> What is the estimated schedule, what might change it, and when are payments due?</li>
          <li><strong>Warranty and follow-up.</strong> Which product and workmanship terms apply, who provides them, and how do you report a concern?</li>
          <li><strong>Exclusions and total.</strong> Are disposal, taxes, gutters, interior repairs, or other related items included or excluded?</li>
        </ol><p>Ask for clarification before agreeing to work. A product brochure, verbal promise, and written project scope serve different purposes.</p></section>
        <section id="prepare"><h2>Make the assessment more useful.</h2><p>Have the address and building details ready. Note when the problem began, where it appears, and whether it changes with rain or wind. Include previous reports or repair records if you have them.</p><ul><li>Take photos only from a safe position on the ground or indoors.</li><li>Identify the affected building if the property has more than one roof.</li><li>Mention gates, shared driveways, limited parking, pets, and access restrictions.</li><li>Confirm any owner, strata, or property-manager authorization needed for access.</li><li>State a purchase deadline or timing constraint before arranging the visit.</li></ul><p className={section.note}>You do not need to climb onto the roof to prepare a request. Describe what you can see and let the assessment establish safe access.</p><Link className={styles.textLink} href="/services/roof-inspection">What a roof inspection can cover<ArrowRight size={18} aria-hidden="true" /></Link></section>
        <section id="handover"><h2>Keep the details after the work.</h2><p>Keep the agreed scope, any approved changes, product information, invoices, and applicable warranty documents together. Ask about maintenance, what was left outside the scope, and how to raise a follow-up question.</p><p>If an issue returns, record when it appeared and where it is visible. That information is more useful than guessing at the cause.</p></section>
      </article>
    </div><FinalCta title="Put your roof questions to us." /></main>;
}
