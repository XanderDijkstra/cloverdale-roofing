import Link from "next/link";
import { House } from "lucide-react";
import { site, services } from "@/lib/site";
import { locations } from "@/app/site-data";
import styles from "@/app/homepage2.module.css";
import footer from "./site-footer.module.css";

export default function SiteFooter() {
  return <footer className={footer.footer}>
    <div className={footer.grid}>
      <div><Link href="/" className={styles.footerBrand}><span className={styles.brandMark} aria-hidden="true"><House /></span><span>{site.name}</span></Link><p>Residential roof repair, replacement, cedar conversion, and inspections in Cloverdale and surrounding communities.</p><Link className={footer.contact} href="/contact">Request a roof assessment</Link><a href={`mailto:${site.email}`}>{site.email}</a></div>
      <nav aria-label="Footer services"><h2>Roofing services</h2>{services.map((service) => <Link href={`/services/${service.slug}`} key={service.slug}>{service.title}</Link>)}<Link href="/services">All services</Link></nav>
      <nav aria-label="Footer service areas"><h2>Service areas</h2>{locations.map((location) => <Link href={`/locations/${location.slug}`} key={location.slug}>{location.title}</Link>)}<Link href="/locations">Check your area</Link></nav>
      <nav aria-label="Footer information"><h2>Helpful information</h2><Link href="/roofing-guide">Homeowner guide</Link><Link href="/roofing-guide#compare-quotes">Compare roofing quotes</Link><Link href="/about">Our approach</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy & inquiries</Link></nav>
    </div><div className={footer.bottom}><small>© {new Date().getFullYear()} {site.name}</small><small>Coverage and appointment availability confirmed with your request.</small></div>
  </footer>;
}
