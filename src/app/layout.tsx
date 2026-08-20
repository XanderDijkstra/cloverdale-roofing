import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { site } from "@/lib/site";
import "./globals.css";

const display = Barlow_Condensed({ variable: "--font-display", subsets: ["latin"], weight: ["600", "700"] });
const body = Manrope({ variable: "--font-body", subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Roofing in Cloverdale, BC | Cloverdale Roofing Co.", template: "%s | Cloverdale Roofing Co." },
  description: "Roof repair, roof replacement, cedar conversion, and practical roof inspections for Cloverdale and South Surrey homes.",
  openGraph: { title: "Cloverdale Roofing Co.", description: "A roof ready for the next week of rain.", type: "website", locale: "en_CA" },
  alternates: { canonical: "/" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en-CA" className={`${display.variable} ${body.variable}`}><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>; }
