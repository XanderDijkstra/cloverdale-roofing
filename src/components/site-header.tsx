"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="top-note">Roofing built for wet West Coast seasons</div>
      <div className="nav-wrap">
        <Link href="/" className="brand" aria-label="Cloverdale Roofing Co. home"><span className="brand-mark">CR</span><span>Cloverdale<br />Roofing Co.</span></Link>
        <nav className="desktop-nav" aria-label="Primary navigation"><Link href="/services">Services</Link><Link href="/service-areas">Service area</Link><Link href="/about">Our approach</Link></nav>
        <Link href="/contact" className="button button-small desktop-cta">Request an inspection</Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation"><Link href="/services" onClick={() => setOpen(false)}>Services</Link><Link href="/service-areas" onClick={() => setOpen(false)}>Service area</Link><Link href="/about" onClick={() => setOpen(false)}>Our approach</Link><Link href="/contact" className="button" onClick={() => setOpen(false)}>Request an inspection</Link></nav>}
    </header>
  );
}
