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
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Cloverdale Roofing Concept | Cloverdale Roofing Co.",
  },
  description:
    "An independent website concept for roof repair, replacement, cedar conversion, and roof inspections in Cloverdale and Surrey, BC.",
  alternates: {
    canonical: "/",
  },
};

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
    title: "Compare workable paths",
    text: "Separate repair, replacement, and conversion into clear options instead of forcing every roof toward one answer.",
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
      "An inspection is useful after a leak, visible material damage, a severe weather event, or when the roof history is unclear. It gives the repair or replacement decision a factual starting point.",
  },
  {
    question: "How is a repair decision different from replacement?",
    answer:
      "A repair targets a defined failure while the surrounding roof remains serviceable. Replacement becomes the stronger path when age, repeated failures, or system-wide concerns make isolated work poor value.",
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
        title="Cloverdale roofing made clear."
        text="Understand the problem, compare your options, and choose the right next step for your home."
        image="/images/homepage2/cloverdale-roof-hero.webp"
        imageAlt="Rain-wet Cloverdale home with a dark architectural-shingle roof"
        secondaryHref="/2/services"
        secondaryLabel="View roofing services"
      />

      <nav className={styles.serviceRail} aria-label="Roofing services">
        <Link href="/2/services/roof-repair"><Wrench aria-hidden="true" />Repair</Link>
        <Link href="/2/services/roof-replacement"><House aria-hidden="true" />Replace</Link>
        <Link href="/2/services/cedar-roof-conversion"><Trees aria-hidden="true" />Convert cedar</Link>
        <Link href="/2/services/roof-inspection"><Search aria-hidden="true" />Inspect</Link>
      </nav>

      <section className={styles.decisionSection}>
        <div className={styles.sectionShell}>
          <div className={styles.decisionIntro}>
            <h2>Start with the roof you have.</h2>
            <p>The useful question is what the current roof needs, and why.</p>
          </div>

          <div className={styles.decisionGrid}>
            <article>
              <span className={styles.decisionIcon} aria-hidden="true"><Wrench /></span>
              <h3>Repair the defined problem</h3>
              <p>A focused repair can make sense when the failure is isolated and the surrounding roof remains serviceable.</p>
              <ul>
                <li><Check aria-hidden="true" />Leak or flashing problem with a clear source</li>
                <li><Check aria-hidden="true" />Limited missing or damaged material</li>
                <li><Check aria-hidden="true" />Sound roof areas around the failure</li>
              </ul>
            </article>

            <article>
              <span className={styles.decisionIcon} aria-hidden="true"><House /></span>
              <h3>Replace when the system is tired</h3>
              <p>Replacement deserves consideration when age, repeated failures, or wider condition issues change the value of another repair.</p>
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
              <h2>Four services. Four dedicated pages.</h2>
              <p>Choose the service that matches the decision in front of you.</p>
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
                    <Link href={`/2/services/${service.slug}`}>
                      View service page
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
            <h2>Roofing locations around Cloverdale.</h2>
            <p>Each genuine service area has its own page, local context, and route back to the relevant roofing services.</p>
            <Link className={styles.textLink} href="/2/locations">
              View all locations
              <ArrowRight strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.locationLinks}>
            {locations.map((location) => (
              <Link href={`/2/locations/${location.slug}`} key={location.slug}>
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
              <h2>A useful scope removes surprises.</h2>
              <p>Good roofing work starts before material reaches the roof.</p>
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
              <h2>Questions before the quote.</h2>
              <p>A clearer first conversation leads to a more useful roofing scope.</p>
              <Link className={styles.textLink} href="/2/contact">
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
          <h2>Know what your Cloverdale roof needs next.</h2>
          <p>Start with an assessment and turn the condition into a clear decision.</p>
        </div>
        <Link className={styles.finalButton} href="/2/contact">
          Request assessment
          <ArrowRight strokeWidth={2} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
