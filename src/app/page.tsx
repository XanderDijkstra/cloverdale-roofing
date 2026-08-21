import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  ClipboardCheck,
  CloudRain,
  Droplets,
  Hammer,
  House,
  Search,
  ShieldCheck,
  Trees,
  Wrench,
} from "lucide-react";
import SiteHero from "./_components/site-hero";
import styles from "./homepage2.module.css";
import { locations } from "./site-data";
import { createPageMetadata } from "@/lib/seo";
import { services } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Roof Repair & Replacement in Cloverdale, BC | Cloverdale Roofing Co.",
  description: "Roof repair, replacement, cedar conversion, and roof inspections for homeowners in Cloverdale and Surrey, BC.",
  path: "/",
  absoluteTitle: true,
});

const process = [
  {
    title: "Inspect the whole system",
    text: "Look beyond the visible symptom to the roof surface, penetrations, flashings, drainage, and vulnerable transitions.",
    icon: Search,
  },
  {
    title: "Make the problem visible",
    text: "Photos and plain language keep the condition clear before a scope or material choice is discussed.",
    icon: ClipboardCheck,
  },
  {
    title: "Recommend the right work",
    text: "We explain what needs attention now, what can wait, and whether a repair or replacement offers better value.",
    icon: Hammer,
  },
  {
    title: "Plan around the property",
    text: "Access, protection, debris, weather, and cleanup belong in the plan before work starts.",
    icon: ShieldCheck,
  },
] as const;

const faqs = [
  {
    question: "When should I request a roof inspection?",
    answer:
      "Request an inspection after a leak, visible damage, severe weather, or when the roof history is unclear. We will identify what needs attention and explain the next step.",
  },
  {
    question: "When does a roof need replacement instead of repair?",
    answer:
      "We recommend repair when the failure is isolated and the surrounding roof remains serviceable. Replacement makes more sense when age or recurring problems make another repair poor value.",
  },
  {
    question: "Can an older cedar roof be converted?",
    answer:
      "Yes, but the new surface is only part of the scope. Removal, deck condition, ventilation, flashings, disposal, and the selected replacement system should be planned together.",
  },
  {
    question: "What should a roofing estimate make clear?",
    answer:
      "It should identify the problem, the proposed work, material assumptions, exclusions, property protection, cleanup, and what could change after concealed areas are opened.",
  },
] as const;

export default function HomepageTwo() {
  return (
    <main>
      <SiteHero
        eyebrow="Roofing in Cloverdale, BC"
        title="Roof repair and replacement in Cloverdale, BC."
        text="We inspect, repair, and replace residential roofs for Cloverdale's wet Lower Mainland weather."
        image="/images/homepage2/cloverdale-roof-hero.webp"
        imageAlt="Rain-wet Cloverdale home with a dark architectural-shingle roof"
        secondaryHref="/services"
        secondaryLabel="View roofing services"
      />

      <nav className={styles.serviceRail} aria-label="Roofing services">
        <Link href="/services/roof-repair"><Wrench aria-hidden="true" />Repair</Link>
        <Link href="/services/roof-replacement"><House aria-hidden="true" />Replace</Link>
        <Link href="/services/cedar-roof-conversion"><Trees aria-hidden="true" />Convert cedar</Link>
        <Link href="/services/roof-inspection"><Search aria-hidden="true" />Inspect</Link>
      </nav>

      <section className={styles.decisionSection}>
        <div className={styles.sectionShell}>
          <div className={styles.decisionIntro}>
            <h2>Repair or replace? We will show you why.</h2>
            <p>We inspect the complete roof, explain what we find, and recommend work that fits its actual condition.</p>
          </div>

          <div className={styles.decisionGrid}>
            <article>
              <span className={styles.decisionIcon} aria-hidden="true"><Wrench /></span>
              <h3>We repair isolated roof problems</h3>
              <p>When the surrounding roof is still sound, we fix the source of the problem without pushing an unnecessary replacement.</p>
              <ul>
                <li><Check aria-hidden="true" />Leak or flashing problem with a clear source</li>
                <li><Check aria-hidden="true" />Limited missing or damaged material</li>
                <li><Check aria-hidden="true" />Sound roof areas around the failure</li>
              </ul>
            </article>

            <article>
              <span className={styles.decisionIcon} aria-hidden="true"><House /></span>
              <h3>We replace worn-out roof systems</h3>
              <p>When age or recurring failures make another repair poor value, we plan a complete replacement built around your home.</p>
              <ul>
                <li><Check aria-hidden="true" />Problems across several roof areas</li>
                <li><Check aria-hidden="true" />Recurring repairs with short-lived results</li>
                <li><Check aria-hidden="true" />Deck, ventilation, or drainage needs a full scope</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.sectionShell}>
          <div className={styles.stackHeading}>
            <div>
              <h2>Roofing services for Cloverdale homes.</h2>
              <p>From a single leak to a complete roof replacement, we take care of the work your home needs.</p>
            </div>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service, index) => {
              const icons = [Wrench, House, Trees, Search] as const;
              const classes = [styles.serviceRepair, styles.serviceReplace, styles.serviceCedar, styles.serviceInspect];
              const Icon = icons[index];
              const image = index === 0
                ? "/images/homepage2/roof-detail.webp"
                : index === 2
                  ? "/images/homepage2/cedar-roof.webp"
                  : null;
              const imageAlt = index === 0
                ? "Close view of wet shingles, a roof valley, flashing, and gutter details"
                : "Weathered cedar-shake roof on a Pacific Northwest home";
              return (
                <article className={`${styles.serviceCard} ${classes[index]}`} key={service.slug}>
                  {image ? (
                    <Image className={styles.serviceImage} src={image} alt={imageAlt} fill sizes="(max-width: 767px) 100vw, 56vw" />
                  ) : null}
                  <div className={styles.serviceOverlay} aria-hidden="true" />
                  <div className={styles.serviceContent}>
                    <Icon strokeWidth={1.8} aria-hidden="true" />
                    <h3>{service.title}</h3>
                    <p>{service.short}</p>
                    <Link href={`/services/${service.slug}`}>
                      Learn about {service.title.toLowerCase()}
                      <ChevronRight strokeWidth={2} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.locationDirectory}>
        <div className={styles.sectionShell}>
          <div className={styles.directoryHeading}>
            <h2>Roofing across Cloverdale and nearby communities.</h2>
            <p>See where we provide roof inspections, repairs, replacements, and cedar roof conversions.</p>
            <Link className={styles.textLink} href="/locations">
              View all locations
              <ArrowRight strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.locationLinks}>
            {locations.map((location) => (
              <Link href={`/locations/${location.slug}`} key={location.slug}>
                <span>{location.title}</span>
                <p>{location.short}</p>
                <ArrowRight strokeWidth={1.8} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.sectionShell}>
          <div className={styles.stackHeading}>
            <div>
              <h2>What to expect from our roofing process.</h2>
              <p>We inspect carefully, explain the work, protect your property, and clean up when the job is complete.</p>
            </div>
          </div>

          <div className={styles.processGrid}>
            {process.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <Icon strokeWidth={1.7} aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.areaSection}>
        <div className={styles.areaMedia}>
          <Image src="/images/homepage2/roof-detail.webp" alt="Architectural-shingle roof details in wet Lower Mainland weather" fill sizes="(max-width: 767px) 100vw, 46vw" />
        </div>

        <div className={styles.areaCopy}>
          <p className={styles.eyebrow}>Cloverdale and Surrey, BC</p>
          <h2>Plan for the weather the roof actually sees.</h2>
          <p>Long wet periods put extra attention on water paths, flashing, drainage, ventilation, and the time a roof has to dry.</p>
          <div className={styles.weatherPoints}>
            <div><CloudRain aria-hidden="true" /><span>Rain paths and vulnerable transitions</span></div>
            <div><Droplets aria-hidden="true" /><span>Drainage, gutters, valleys, and eaves</span></div>
            <div><Trees aria-hidden="true" /><span>Shade, debris, and slower drying areas</span></div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.sectionShell}>
          <div className={styles.faqLayout}>
            <div className={styles.faqHeading}>
              <h2>Questions about your roof?</h2>
              <p>Tell us what you have noticed and we will help you determine the right next step.</p>
              <Link className={styles.textLink} href="/contact">
                Request assessment
                <ArrowRight strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div>
          <h2>Need a roofer in Cloverdale?</h2>
          <p>Tell us what is happening and request an assessment for your home.</p>
        </div>
        <Link className={styles.finalButton} href="/contact">
          Request assessment
          <ArrowRight strokeWidth={2} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
