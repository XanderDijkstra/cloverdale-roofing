import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SiteHero from "../_components/site-hero";
import styles from "../homepage2.module.css";
import JsonLd from "@/components/json-ld";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";
import { services } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Roofing Services",
  description: "Roof repair, replacement, inspections, and cedar conversion in Cloverdale and Surrey, BC.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <SiteHero
        inner
        eyebrow="Roofing services in Cloverdale"
        title="Roofing services for Cloverdale homes."
        text="We inspect, repair, replace, and convert residential roofs throughout Cloverdale and the surrounding area."
        image="/images/homepage2/cloverdale-roof-hero.webp"
        imageAlt="Rain-wet Cloverdale home with a dark architectural-shingle roof"
        formTitle="Request a roof assessment"
      />

      <section className={styles.directorySection}>
        <div className={styles.sectionShell}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span><span>Services</span>
          </nav>
          <div className={styles.directoryIntro}>
            <h2>How we can help with your roof.</h2>
            <p>Choose the type of work you need, or request an inspection if you are not sure where to start.</p>
          </div>
          <div className={styles.directoryGrid}>
            {services.map((service) => (
              <article className={styles.directoryCard} key={service.slug}>
                <div className={styles.directoryMedia}>
                  <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 767px) 100vw, 50vw" />
                </div>
                <div className={styles.directoryBody}>
                  <h2>{service.title}</h2>
                  <p>{service.intro}</p>
                  <ul>
                    {service.includes.slice(0, 3).map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
                  </ul>
                  <Link className={styles.textLink} href={`/services/${service.slug}`}>
                    Learn about {service.title.toLowerCase()}<ArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
