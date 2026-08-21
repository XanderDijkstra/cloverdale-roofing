import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ClipboardCheck, House } from "lucide-react";
import { notFound } from "next/navigation";
import SiteHero from "../../_components/site-hero";
import styles from "../../homepage2.module.css";
import { services } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} in Cloverdale`,
    description: `${service.intro} Learn about ${service.title.toLowerCase()} in Cloverdale and Surrey, BC.`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <main>
      <SiteHero
        inner
        eyebrow={`${service.title} in Cloverdale`}
        title={`${service.title} for Cloverdale homes.`}
        text={service.short}
        image={service.image}
        imageAlt={service.imageAlt}
        formTitle={`Request a ${service.title.toLowerCase()} assessment`}
        formText="Tell us what you have noticed and where your property is located."
      />

      <section className={styles.detailSection}>
        <div className={styles.sectionShell}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/2">Home</Link><span>/</span><Link href="/2/services">Services</Link><span>/</span><span>{service.title}</span>
          </nav>
          <div className={styles.detailGrid}>
            <div className={styles.detailCopy}>
              <h2>Roofing work built around your home.</h2>
              <p>{service.intro}</p>
              <Link className={styles.primaryButton} href="/2/contact">
                Request assessment<ArrowRight aria-hidden="true" />
              </Link>
            </div>
            <div className={styles.scopePanel}>
              <ClipboardCheck aria-hidden="true" />
              <h2>What the assessment can cover</h2>
              <ul>{service.includes.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
            </div>
          </div>

          <div className={styles.relatedBand}>
            <House aria-hidden="true" />
            <div>
              <h2>Not sure what your roof needs?</h2>
              <p>We can inspect the roof, find the cause of the problem, and recommend the right repair or replacement.</p>
            </div>
            <Link className={styles.textLink} href="/2/services/roof-inspection">View roof inspection<ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
