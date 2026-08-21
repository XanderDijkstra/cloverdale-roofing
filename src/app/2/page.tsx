import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Archivo } from "next/font/google";
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
import styles from "./homepage2.module.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-homepage2",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    absolute: "Homepage Concept | Cloverdale Roofing Co.",
  },
  description:
    "An independent homepage concept for roof repair, replacement, cedar conversion, and roof inspections in Cloverdale and Surrey, BC.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const services = [
  {
    title: "Roof repair",
    text: "Trace the problem, define the affected area, and decide whether a focused repair is the sensible path.",
    icon: Wrench,
    className: styles.serviceRepair,
  },
  {
    title: "Roof replacement",
    text: "Plan the roof as one complete system, from the deck and drainage details to the finished surface.",
    icon: House,
    className: styles.serviceReplace,
  },
  {
    title: "Cedar conversion",
    text: "Move from aging cedar to a new roofing system with the removal, deck condition, and ventilation considered together.",
    icon: Trees,
    className: styles.serviceCedar,
  },
  {
    title: "Roof inspection",
    text: "Get a documented starting point before choosing a repair, replacement, or conversion scope.",
    icon: Search,
    className: styles.serviceInspect,
  },
] as const;

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
    <div id="homepage2" className={`${styles.page} ${archivo.variable}`}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={styles.brand} href="/2" aria-label="Cloverdale Roofing Co. homepage concept">
            <span className={styles.brandMark} aria-hidden="true">
              <House strokeWidth={2.2} />
            </span>
            <span>
              Cloverdale
              <strong>Roofing Co.</strong>
            </span>
          </Link>

          <nav className={styles.nav} aria-label="Homepage concept navigation">
            <a href="#services">Services</a>
            <a href="#decision">Repair or replace</a>
            <a href="#process">Process</a>
            <a href="#area">Cloverdale</a>
          </nav>

          <Link className={styles.headerCta} href="/contact">
            Request assessment
            <ArrowRight strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroMedia}>
            <Image
              src="/images/homepage2/cloverdale-roof-hero.webp"
              alt="Rain-wet suburban home with a dark architectural-shingle roof"
              fill
              preload
              fetchPriority="high"
              sizes="(max-width: 767px) 100vw, 48vw"
            />
          </div>
          <div className={styles.heroScrim} aria-hidden="true" />

          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Roofing for Cloverdale and Surrey</p>
              <h1>Roof decisions made clear.</h1>
              <p className={styles.heroText}>
                Start with the roof you have. Understand the problem, compare the options, and choose the right next step.
              </p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} href="/contact">
                  Request assessment
                  <ArrowRight strokeWidth={2} aria-hidden="true" />
                </Link>
                <a className={styles.secondaryButton} href="#services">
                  Explore services
                </a>
              </div>
            </div>
          </div>
        </section>

        <nav className={styles.serviceRail} aria-label="Roofing services">
          <a href="#services"><Wrench aria-hidden="true" />Repair</a>
          <a href="#services"><House aria-hidden="true" />Replace</a>
          <a href="#services"><Trees aria-hidden="true" />Convert cedar</a>
          <a href="#services"><Search aria-hidden="true" />Inspect</a>
        </nav>

        <section id="decision" className={styles.decisionSection}>
          <div className={styles.sectionShell}>
            <div className={styles.decisionIntro}>
              <h2>Start with the roof you have.</h2>
              <p>
                The useful question is not which roof to buy. It is what the current roof needs, and why.
              </p>
            </div>

            <div className={styles.decisionGrid}>
              <article>
                <span className={styles.decisionIcon} aria-hidden="true"><Wrench /></span>
                <h3>Repair the defined problem</h3>
                <p>
                  A focused repair can make sense when the failure is isolated and the surrounding roof remains serviceable.
                </p>
                <ul>
                  <li><Check aria-hidden="true" />Leak or flashing problem with a clear source</li>
                  <li><Check aria-hidden="true" />Limited missing or damaged material</li>
                  <li><Check aria-hidden="true" />Sound roof areas around the failure</li>
                </ul>
              </article>

              <article>
                <span className={styles.decisionIcon} aria-hidden="true"><House /></span>
                <h3>Replace when the system is tired</h3>
                <p>
                  Replacement deserves consideration when age, repeated failures, or wider condition issues change the value of another repair.
                </p>
                <ul>
                  <li><Check aria-hidden="true" />Problems across several roof areas</li>
                  <li><Check aria-hidden="true" />Recurring repairs with short-lived results</li>
                  <li><Check aria-hidden="true" />Deck, ventilation, or drainage needs a full scope</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="services" className={styles.servicesSection}>
          <div className={styles.sectionShell}>
            <div className={styles.stackHeading}>
              <h2>Four ways to move forward.</h2>
              <p>Choose the service that matches the decision in front of you.</p>
            </div>

            <div className={styles.serviceGrid}>
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article className={`${styles.serviceCard} ${service.className}`} key={service.title}>
                    {index === 0 ? (
                      <Image
                        className={styles.serviceImage}
                        src="/images/homepage2/roof-detail.webp"
                        alt="Close view of wet shingles, roof valley, flashing, and gutter detail"
                        fill
                        sizes="(max-width: 767px) 100vw, 56vw"
                      />
                    ) : null}
                    {index === 2 ? (
                      <Image
                        className={styles.serviceImage}
                        src="/images/homepage2/cedar-roof.webp"
                        alt="Weathered cedar-shake roof on a Pacific Northwest home"
                        fill
                        sizes="(max-width: 767px) 100vw, 40vw"
                      />
                    ) : null}
                    <div className={styles.serviceOverlay} aria-hidden="true" />
                    <div className={styles.serviceContent}>
                      <Icon strokeWidth={1.8} aria-hidden="true" />
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                      <Link href="/contact" aria-label={`Request an assessment for ${service.title.toLowerCase()}`}>
                        Request assessment
                        <ChevronRight strokeWidth={2} aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="process" className={styles.processSection}>
          <div className={styles.sectionShell}>
            <div className={styles.stackHeading}>
              <h2>A useful scope removes surprises.</h2>
              <p>Good roofing work starts before material reaches the roof.</p>
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

        <section id="area" className={styles.areaSection}>
          <div className={styles.areaMedia}>
            <Image
              src="/images/homepage2/roof-detail.webp"
              alt="Architectural-shingle roof details in wet Lower Mainland weather"
              fill
              sizes="(max-width: 767px) 100vw, 46vw"
            />
          </div>

          <div className={styles.areaCopy}>
            <p className={styles.eyebrow}>Cloverdale and Surrey, BC</p>
            <h2>Plan for the weather the roof actually sees.</h2>
            <p>
              Long wet periods put extra attention on water paths, flashing, drainage, ventilation, and the time a roof has to dry.
            </p>
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
                <Link className={styles.textLink} href="/contact">
                  Ask about your roof
                  <ArrowRight strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>

              <div className={styles.faqList}>
                {faqs.map((faq) => (
                  <details key={faq.question}>
                    <summary>
                      {faq.question}
                      <span aria-hidden="true">+</span>
                    </summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div>
            <h2>Know what your roof needs next.</h2>
            <p>Start with an assessment and turn the condition into a clear decision.</p>
          </div>
          <Link className={styles.finalButton} href="/contact">
            Request assessment
            <ArrowRight strokeWidth={2} aria-hidden="true" />
          </Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <span className={styles.brandMark} aria-hidden="true"><House /></span>
          <span>Cloverdale Roofing Co.</span>
        </div>
        <p>Roof repair, replacement, cedar conversion, and inspections for Cloverdale and Surrey, BC.</p>
        <div className={styles.footerLinks}>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <Link href="/contact">Contact</Link>
        </div>
        <small>© 2026 Cloverdale Roofing Co.</small>
      </footer>

      <Link className={styles.mobileAction} href="/contact">
        Request assessment
        <ArrowRight strokeWidth={2} aria-hidden="true" />
      </Link>
    </div>
  );
}
