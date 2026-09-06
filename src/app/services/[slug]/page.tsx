import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ClipboardCheck, House } from "lucide-react";
import { notFound } from "next/navigation";
import SiteHero from "../../_components/site-hero";
import styles from "../../homepage2.module.css";
import JsonLd from "@/components/json-ld";
import { breadcrumbSchema, createPageMetadata, serviceSchema } from "@/lib/seo";
import { services } from "@/lib/site";
import { serviceContent } from "@/lib/service-content";
import { FaqSection, ServiceAreas, GuideTeaser, FinalCta } from "@/components/page-sections";
import section from "@/components/page-sections.module.css";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return createPageMetadata({
    title: `${service.title} in Cloverdale`,
    description: serviceContent[service.slug].description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const content = serviceContent[service.slug];

  return (
    <main id="main-content" tabIndex={-1}>
      <JsonLd data={[
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]),
        serviceSchema(service),
      ]} />
      <SiteHero
        inner
        eyebrow={`${service.title} in Cloverdale`}
        title={`${service.title} for Cloverdale homes.`}
        text={service.short}
        image={service.image}
        imageAlt={service.imageAlt}
        formTitle={`Request a ${service.title.toLowerCase()} assessment`}
        formText="Tell us what you have noticed and where your property is located."
        service={service.title}
        secondaryHref="#service-details"
        secondaryLabel="Scope, process & common questions"
      />

      <section className={styles.detailSection} id="service-details">
        <div className={styles.sectionShell}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span><span>{service.title}</span>
          </nav>
          <div className={styles.detailGrid}>
            <div className={styles.detailCopy}>
              <h2>{content.heading}</h2>
              <p>{content.overview}</p>
              <Link className={styles.primaryButton} href="#assessment-form">
                Request assessment<ArrowRight aria-hidden="true" />
              </Link>
            </div>
            <div className={styles.scopePanel}>
              <ClipboardCheck aria-hidden="true" />
              <h2>When to ask about {service.title.toLowerCase()}</h2>
              <ul>{content.signs.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
            </div>
          </div>

          <section className={section.section}>
            <div className={section.heading}><p>From the first question to the next step</p><h2>What the work involves.</h2></div>
            <ol className={section.steps}>{content.steps.map((step, index) => <li key={step.title}><span>Step {index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
          </section>
          <div className={styles.contactSupportGrid}>{content.decisions.map((item) => <article key={item.title}><h2>{item.title}</h2><p>{item.text}</p></article>)}</div>
          <section className={section.section}><div className={section.article}><h2>What should your quote include?</h2><p>{content.quote}</p><ul>{service.includes.map((item) => <li key={item}>{item}</li>)}</ul><h3>Agree the limits before work starts</h3><p>{content.limitations}</p><Link className={styles.textLink} href="/roofing-guide#compare-quotes">Use the quote checklist<ArrowRight size={18} aria-hidden="true" /></Link></div></section>

          <div className={styles.relatedBand}>
            <House aria-hidden="true" />
            <div>
              <h2>Not sure what your roof needs?</h2>
              <p>We can inspect the roof, find the cause of the problem, and recommend the right repair or replacement.</p>
            </div>
            <Link className={styles.textLink} href={service.slug === "roof-inspection" ? "/services/roof-repair" : "/services/roof-inspection"}>{service.slug === "roof-inspection" ? "Read about roof repairs" : "View roof inspection"}<ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
      <FaqSection title={`Questions about ${service.title.toLowerCase()}.`} items={content.faqs} />
      <ServiceAreas />
      <GuideTeaser />
      <FinalCta href="#assessment-form" title={`Ask about ${service.title.toLowerCase()}.`} />
    </main>
  );
}
