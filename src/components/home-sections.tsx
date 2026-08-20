import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, CloudRain, Home, Search, ShieldCheck } from "lucide-react";
import { services } from "@/lib/site";
import QuoteForm from "@/components/quote-form";

export default function HomeSections() {
  return (
    <>
      <section className="hero">
        <Image src="/images/cloverdale-roofer-hero.png" alt="Roofer inspecting a shingle roof in a wet Cloverdale neighbourhood" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content shell">
          <p className="eyebrow">Cloverdale and South Surrey</p>
          <h1>A roof that is ready for the next week of rain.</h1>
          <p className="hero-copy">Clear inspections, sensible repairs, and complete roof replacements for Lower Mainland homes.</p>
          <div className="hero-actions"><Link href="/contact" className="button">Request a roof inspection <ArrowRight size={18} /></Link><Link href="/services" className="text-link light">Explore roofing services <ArrowRight size={17} /></Link></div>
        </div>
        <div className="hero-detail"><CloudRain size={20} /><span><strong>Built around local conditions</strong>Rain, moss, wind, cedar, and aging shingles</span></div>
      </section>
      <section className="intro shell section-pad">
        <div className="intro-lead"><p className="eyebrow dark">Start with the right question</p><h2>Does it need replacing, or does it need one good repair?</h2></div>
        <div className="intro-copy"><p>That is the first thing we help you answer. A stain on the ceiling does not automatically mean a new roof, and a clean-looking roof is not always a healthy one.</p><p>We focus the inspection on the details that fail first in our climate, then give you a practical route forward.</p></div>
      </section>
      <section className="services-section"><div className="shell section-pad">
        <div className="section-heading"><div><p className="eyebrow dark">Roofing services</p><h2>Everything your roof needs. Nothing it does not.</h2></div><Link href="/services" className="text-link">View all services <ArrowRight size={17} /></Link></div>
        <div className="service-list">{services.map((service, index) => <Link href={`/services/${service.slug}`} className="service-row" key={service.slug}><span className="service-number">0{index + 1}</span><h3>{service.title}</h3><p>{service.short}</p><ArrowRight className="service-arrow" /></Link>)}</div>
      </div></section>
      <section className="process shell section-pad">
        <div className="process-title"><p className="eyebrow dark">A straightforward process</p><h2>Know what happens before anyone steps on the roof.</h2></div>
        <div className="process-steps"><article><Search /><span>01</span><h3>Inspect</h3><p>We start with the symptoms, then assess the roof surface and failure points.</p></article><article><Home /><span>02</span><h3>Explain</h3><p>You see the issue, the options, and what can wait. The scope is written in plain language.</p></article><article><ShieldCheck /><span>03</span><h3>Protect</h3><p>The work is completed around the actual cause, with cleanup and a final walkthrough.</p></article></div>
      </section>
      <section className="local-section shell"><div className="local-panel">
        <div><p className="eyebrow">Local roof knowledge</p><h2>Cloverdale homes are not all built the same.</h2><p>Heritage character near the town centre, older cedar roofs, 1990s subdivisions, townhomes, and exposed rural properties each need a different eye.</p><Link href="/service-areas" className="text-link light">See where we work <ArrowRight size={17} /></Link></div>
        <ul><li><CheckCircle2 /> Asphalt shingle systems</li><li><CheckCircle2 /> Cedar-to-shingle conversions</li><li><CheckCircle2 /> Flashing and ventilation details</li><li><CheckCircle2 /> Moss and moisture concerns</li></ul>
      </div></section>
      <section className="quote-section shell section-pad" id="quote"><div className="quote-copy"><p className="eyebrow dark">Request an inspection</p><h2>Tell us what you are seeing.</h2><p>A leak, missing shingles, moss, an aging cedar roof, or simply uncertainty. Send the basics and start with an honest assessment.</p></div><QuoteForm compact /></section>
    </>
  );
}
