import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Roofing Services",
  description:
    "Roof repair, replacement, inspections, and cedar conversion in Cloverdale and South Surrey.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero shell">
        <p className="eyebrow dark">Roofing services</p>
        <h1>The right work for the roof you actually have.</h1>
        <p>
          From one failed flashing detail to a complete tear-off, the scope
          starts with a clear inspection.
        </p>
      </section>
      <section className="shell page-content service-cards">
        {services.map((service, index) => (
          <article key={service.slug} className="service-card">
            <div className="service-card-media">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="service-card-body">
              <span>0{index + 1}</span>
              <h2>{service.title}</h2>
              <p>{service.intro}</p>
              <ul>
                {service.includes.slice(0, 3).map((item) => (
                  <li key={item}>
                    <Check size={17} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={`/services/${service.slug}`} className="text-link">
                Explore {service.title.toLowerCase()} <ArrowRight size={17} />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
