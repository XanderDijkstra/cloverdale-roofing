import type { Metadata } from "next";
import Link from "next/link";
import { Archivo } from "next/font/google";
import { ArrowRight, House } from "lucide-react";
import styles from "./homepage2.module.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-homepage2",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cloverdale Roofing Co.",
    template: "%s | Cloverdale Roofing Co.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function HomepageTwoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="homepage2" className={`${styles.page} ${archivo.variable}`}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={styles.brand} href="/2" aria-label="Cloverdale Roofing Co. homepage concept">
            <span className={styles.brandMark} aria-hidden="true">
              <House strokeWidth={2} />
            </span>
            <span>
              Cloverdale
              <strong>Roofing Co.</strong>
            </span>
          </Link>

          <nav className={styles.nav} aria-label="Concept website navigation">
            <Link href="/2/services">Services</Link>
            <Link href="/2/locations">Locations</Link>
            <Link href="/2/about">About</Link>
            <Link href="/2/contact">Contact</Link>
          </nav>

          <Link className={styles.headerCta} href="/2/contact">
            Request assessment
            <ArrowRight strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </header>

      {children}

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <span className={styles.brandMark} aria-hidden="true"><House strokeWidth={2} /></span>
          <span>Cloverdale Roofing Co.</span>
        </div>
        <p>Roof repair, replacement, cedar conversion, and inspections for Cloverdale and Surrey, BC.</p>
        <div className={styles.footerLinks}>
          <Link href="/2/services">Services</Link>
          <Link href="/2/locations">Locations</Link>
          <Link href="/2/about">About</Link>
          <Link href="/2/contact">Contact</Link>
        </div>
        <small>© 2026 Cloverdale Roofing Co.</small>
      </footer>
    </div>
  );
}
