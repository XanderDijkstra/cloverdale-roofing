import Link from "next/link";
import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div><div className="brand footer-brand"><span className="brand-mark">CR</span><span>Cloverdale<br />Roofing Co.</span></div><p>Practical roof repair and replacement guidance for homes across Cloverdale and South Surrey.</p></div>
        <div><h2>Roofing</h2><Link href="/services/roof-repair">Roof repair</Link><Link href="/services/roof-replacement">Roof replacement</Link><Link href="/services/cedar-roof-conversion">Cedar conversion</Link><Link href="/services/roof-inspection">Roof inspections</Link></div>
        <div><h2>Company</h2><Link href="/about">Our approach</Link><Link href="/service-areas">Service area</Link><Link href="/contact">Contact</Link></div>
        <div><h2>Service area</h2><p>{site.region}<br />Clayton Heights<br />South Surrey<br />Langley border</p></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><span>Concept launch. Company credentials pending verification.</span></div>
    </footer>
  );
}
