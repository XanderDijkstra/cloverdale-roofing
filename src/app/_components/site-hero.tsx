import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import QuoteForm from "@/components/quote-form";
import styles from "../homepage2.module.css";

type SiteHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  formTitle?: string;
  formText?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  inner?: boolean;
  location?: string;
};

export default function SiteHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  formTitle = "Tell us what your roof needs",
  formText = "Send the basics and we will follow up about your roof assessment.",
  secondaryHref,
  secondaryLabel,
  inner = false,
  location,
}: SiteHeroProps) {
  return (
    <section className={`${styles.hero} ${inner ? styles.innerHero : ""}`}>
      <div className={styles.heroMedia}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
        />
      </div>
      <div className={styles.heroScrim} aria-hidden="true" />

      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1>{title}</h1>
          <p className={styles.heroText}>{text}</p>
          {secondaryHref && secondaryLabel ? (
            <Link className={styles.heroTextLink} href={secondaryHref}>
              {secondaryLabel}
              <ArrowRight strokeWidth={2} aria-hidden="true" />
            </Link>
          ) : null}
        </div>

        <aside id="assessment-form" className={styles.leadPanel} aria-label="Roof assessment request">
          <div className={styles.leadPanelHeading}>
            <h2>{formTitle}</h2>
            <p>{formText}</p>
          </div>
          <QuoteForm compact submitLabel="Request assessment" location={location} />
        </aside>
      </div>
    </section>
  );
}
