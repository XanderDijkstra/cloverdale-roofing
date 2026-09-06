import type { Metadata } from "next";
import Link from "next/link";
import { Archivo } from "next/font/google";
import { House } from "lucide-react";
import SiteHeader from "@/components/site-header";
import JsonLd from "@/components/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";
import styles from "./homepage2.module.css";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-homepage2", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Cloverdale Roofing Co.", template: "%s | Cloverdale Roofing Co." },
  description: "Roof repair, replacement, cedar conversion, and roof inspections for homeowners in Cloverdale and Surrey, BC.",
  applicationName: site.name,
  openGraph: { siteName: site.name, locale: "en_CA", type: "website" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA">
      <body>
        <JsonLd data={[websiteSchema(), organizationSchema()]} />
        <div id="homepage2" className={`${styles.page} ${archivo.variable}`}>
          <SiteHeader />

          {children}

          <footer className={styles.footer}>
            <div className={styles.footerBrand}>
              <span className={styles.brandMark} aria-hidden="true"><House strokeWidth={2} /></span>
              <span>Cloverdale Roofing Co.</span>
            </div>
            <p>Roof repair, replacement, cedar conversion, and inspections for Cloverdale and Surrey, BC.</p>
            <div className={styles.footerLinks}>
              <Link href="/services">Services</Link>
              <Link href="/locations">Locations</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <small>© 2026 Cloverdale Roofing Co.</small>
          </footer>
        </div>
      </body>
    </html>
  );
}
