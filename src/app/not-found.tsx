import Link from "next/link";
import styles from "./homepage2.module.css";
import section from "@/components/page-sections.module.css";

export default function NotFound() {
  return <main id="main-content" tabIndex={-1} className={`${styles.sectionShell} ${section.section}`}><div className={section.article}><p>Page not found</p><h1>Let’s get you to the right place.</h1><p>This address does not match a page on the site. Find roofing services, check your area, or tell us about your roof.</p><div className={section.contactLinks}><Link className={styles.primaryButton} href="/services">Roofing services</Link><Link className={styles.primaryButton} href="/locations">Service areas</Link><Link className={styles.primaryButton} href="/contact">Contact</Link></div></div></main>;
}
