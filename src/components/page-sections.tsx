import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { locations } from "@/app/site-data";
import styles from "@/app/homepage2.module.css";
import section from "./page-sections.module.css";

export function FaqSection({ title, items }: { title: string; items: readonly { question: string; answer: string }[] }) {
  return <section className={section.section}><div className={`${styles.sectionShell} ${styles.faqLayout}`}><div className={section.heading}><p>Before you decide</p><h2>{title}</h2><Link className={styles.textLink} href="/contact">Ask about your roof<ArrowRight size={18} aria-hidden="true" /></Link></div><div className={styles.faqList}>{items.map((item) => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></div></section>;
}

export function ServiceAreas() {
  return <section className={section.section}><div className={styles.sectionShell}><div className={section.heading}><p>Cloverdale & surrounding communities</p><h2>Roofing help where you live.</h2><p>For properties near the Langley border, send your full address to confirm coverage.</p></div><div className={styles.locationLinks}>{locations.map((location) => <Link href={`/locations/${location.slug}`} key={location.slug}><span>{location.title}</span><p>{location.short}</p><ArrowRight aria-hidden="true" /></Link>)}</div></div></section>;
}

export function GuideTeaser() {
  return <section className={section.section}><div className={`${styles.sectionShell} ${section.guide}`}><div className={section.heading}><p>A little preparation goes a long way</p><h2>Know what to ask before roof work begins.</h2><p>Compare the scope, understand the allowances, and prepare for the assessment.</p><Link className={styles.primaryButton} href="/roofing-guide">Read the homeowner guide<ArrowRight aria-hidden="true" /></Link></div><ul>{["Repair or replacement: what changes the decision", "What a written roofing quote should explain", "Property access, hidden damage, and scheduling", "Questions to bring to your assessment"].map((text) => <li key={text}><Check size={20} aria-hidden="true" />{text}</li>)}</ul></div></section>;
}

export function FinalCta({ title = "Ready to talk about your roof?", text = "Choose your roofing need and share the property details. We will confirm the next step.", href = "/contact" }: { title?: string; text?: string; href?: string }) {
  return <section className={styles.finalCta}><div><h2>{title}</h2><p>{text}</p></div><Link className={styles.finalButton} href={href}>Request assessment<ArrowRight aria-hidden="true" /></Link></section>;
}
