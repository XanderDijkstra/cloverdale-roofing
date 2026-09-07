"use client";

import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, House, MapPin, Menu, Wrench, X } from "lucide-react";
import { services } from "@/lib/site";
import { locations } from "@/app/site-data";
import styles from "@/app/homepage2.module.css";
import nav from "./site-header.module.css";

export default function SiteHeader() {
  const pathname = usePathname();
  return <HeaderNavigation key={pathname} pathname={pathname} />;
}

function HeaderNavigation({ pathname }: { pathname: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const hoverClose = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelHoverClose = useCallback(() => {
    if (hoverClose.current) clearTimeout(hoverClose.current);
    hoverClose.current = null;
  }, []);

  function supportsHover() {
    return window.matchMedia("(min-width: 1051px) and (hover: hover) and (pointer: fine)").matches;
  }

  const closeGroups = useCallback(() => {
    cancelHoverClose();
    header.current?.querySelectorAll("details[open]").forEach((item) => item.removeAttribute("open"));
  }, [cancelHoverClose]);

  useEffect(() => {
    function outside(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) {
        closeGroups();
        setMobileOpen(false);
      }
    }
    function escape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      const open = header.current?.querySelector<HTMLDetailsElement>("details[open]");
      if (open) {
        const focusWasInHeader = header.current?.contains(document.activeElement);
        closeGroups();
        if (focusWasInHeader) open.querySelector("summary")?.focus();
      } else if (mobileOpen) {
        setMobileOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", outside); document.removeEventListener("keydown", escape); cancelHoverClose(); };
  }, [cancelHoverClose, closeGroups, mobileOpen]);

  const groups = [
    { title: "Services", href: "/services", intro: "Find the right next step for your roof.", note: "From a single leak to a complete replacement, start with the condition of your roof.", items: services.map((s) => ({ title: s.title, text: s.short, href: `/services/${s.slug}` })) },
    { title: "Locations", href: "/locations", intro: "Roofing help close to home.", note: "Cloverdale and surrounding communities. For properties near Langley, confirm coverage with your address.", items: locations.map((l) => ({ title: l.title, text: l.short, href: `/locations/${l.slug}` })) },
  ];

  return (
    <header className={styles.header} ref={header}>
      <div className={styles.headerInner}>
        <Link className={styles.brand} href="/" aria-label="Cloverdale Roofing Co. homepage">
          <span className={styles.brandMark} aria-hidden="true"><House strokeWidth={2} /></span>
          <span>Cloverdale<strong>Roofing Co.</strong></span>
        </Link>
        <button ref={toggle} type="button" className={nav.mobileToggle} aria-expanded={mobileOpen} aria-controls="primary-navigation" onClick={() => { closeGroups(); setMobileOpen(!mobileOpen); }}>
          {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}{mobileOpen ? "Close" : "Menu"}
        </button>
        <nav id="primary-navigation" className={`${nav.navigation} ${mobileOpen ? nav.expanded : ""}`} aria-label="Website navigation" onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) closeGroups();
        }} onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) { closeGroups(); setMobileOpen(false); }
        }}>
          {groups.map((group) => (
            <details className={nav.group} key={group.href} onPointerEnter={(event) => {
              if (event.pointerType !== "mouse" || !supportsHover()) return;
              cancelHoverClose();
              event.currentTarget.open = true;
            }} onPointerLeave={(event) => {
              if (event.pointerType !== "mouse" || !supportsHover()) return;
              const details = event.currentTarget;
              cancelHoverClose();
              // Allow the pointer to cross the space between the trigger and panel.
              hoverClose.current = setTimeout(() => {
                if (!details.contains(document.activeElement)) details.open = false;
              }, 220);
            }} onToggle={(event) => {
              if (event.currentTarget.open) header.current?.querySelectorAll("details").forEach((item) => { if (item !== event.currentTarget) item.open = false; });
            }}>
              <summary className={pathname.startsWith(group.href) ? nav.active : undefined}>{group.title}<ChevronDown size={15} aria-hidden="true" /></summary>
              <div className={nav.panel} onPointerEnter={cancelHoverClose}>
                <div className={nav.panelIntro}>
                  <p>{group.title === "Services" ? "How we can help" : "Our service areas"}</p>
                  <h2>{group.intro}</h2><p>{group.note}</p>
                  <Link href={group.href}>View all {group.title.toLowerCase()}<ArrowRight size={18} aria-hidden="true" /></Link>
                </div>
                <div className={nav.links}>
                  {group.items.map((item) => <Link href={item.href} key={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                    {group.title === "Services" ? <Wrench size={21} aria-hidden="true" /> : <MapPin size={21} aria-hidden="true" />}
                    <span><strong>{item.title}</strong><small>{item.text}</small></span><ArrowRight size={17} aria-hidden="true" />
                  </Link>)}
                </div>
              </div>
            </details>
          ))}
          <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined}>About</Link>
          <Link href="/roofing-guide" aria-current={pathname === "/roofing-guide" ? "page" : undefined}>Homeowner guide</Link>
          <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>Contact</Link>
          <Link className={nav.mobileCta} href="/contact">Request assessment<ArrowRight size={18} aria-hidden="true" /></Link>
        </nav>
        <Link className={styles.headerCta} href="/contact">Request assessment<ArrowRight strokeWidth={2} aria-hidden="true" /></Link>
      </div>
    </header>
  );
}
