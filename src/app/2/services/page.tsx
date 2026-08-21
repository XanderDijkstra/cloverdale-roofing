import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SiteHero from "../_components/site-hero";
import styles from "../homepage2.module.css";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Roofing Services",
  description: "Roof repair, replacement, inspections, and cedar conversion in Cloverdale and Surrey, BC.",
};

export default function ServicesPage() {
  return (
    <main>
      <SiteHero
        inner
        eyebrow="Roofing services in Cloverdale"
        title="The right work for your Cloverdale roof."
        text="Start with the condition, then choose the service that fits the roof."
        image="/images/homepage2/cloverdale-roof-hero.webp"
        imageAlt="Rain-wet Cloverdale home with a dark architectural-shingle roof"
        formTitle="Request a roof assessment"
      />

      <section className={styles.directorySection}>
        <div className={styles.sectionShell}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/2">Home</Link><span>/</span><span>Services</span>
          </nav>
          <div className={styles.directoryIntro}>
            <h2>Every core service gets its own page.</h2>
            <p>Compare the problem, scope, and next step before requesting an assessment.</p>
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
                  <Link className={styles.textLink} href={`/2/services/${service.slug}`}>
                    View service page<ArrowRight aria-hidden="true" />
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
