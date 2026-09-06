import type { Metadata } from "next";
import SiteFooter from "@/components/site-footer";
import MobileAssessment from "@/components/mobile-assessment";
import { Archivo } from "next/font/google";

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
  icons: { icon: "/icon", apple: "/icon" },
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
          <a className="skip-link" href="#main-content">Skip to content</a>
          <SiteHeader />

          {children}

          <SiteFooter />
          <MobileAssessment />
        </div>
      </body>
    </html>
  );
}
