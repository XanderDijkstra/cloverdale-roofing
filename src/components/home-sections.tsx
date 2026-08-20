import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  CloudRain,
  FileText,
  Hammer,
  MapPin,
  Search,
  ShieldCheck,
} from "lucide-react";
import QuoteForm from "@/components/quote-form";
import { services } from "@/lib/site";

const areas = [
  ["Cloverdale", "Town centre, established neighbourhoods, and rural properties"],
  ["Clayton Heights", "Homes and townhouses north of Highway 10"],
  ["South Surrey", "Residential roofing from Grandview to Panorama"],
  ["Langley border", "Properties along Cloverdale's eastern edge"],
];

const faqs = [
  ["Can a leaking roof be repaired without replacing it?", "Often, yes. The sensible answer depends on the age of the roof, the source of the leak, and the condition of the surrounding shingles and deck."],
  ["How do I know when my roof needs an inspection?", "Interior staining, missing shingles, loose flashing, visible moss, granules in gutters, and an aging cedar roof are all good reasons to arrange an assessment."],
  ["What happens during the first visit?", "The visit starts with what you have noticed. The roof surface and common failure points are then checked, documented, and explained in plain language."],
  ["Do you work outside Cloverdale?", "The core area includes Cloverdale, Clayton Heights, South Surrey, and nearby Langley. Send your address and we will confirm coverage before booking."],
];

export default function HomeSections() {
  return (
    <>
      <section className="home-hero">
        <Image
          src="/images/cloverdale-roof-hero-no-person.png"
          alt="Rain-covered shingle roof on a Cloverdale home"
          fill
          priority
          sizes="100vw"
          className="home-hero-image"
        />
        <div className="home-hero-overlay" />
        <div className="home-hero-grid shell">
          <div className="home-hero-copy">
            <p className="eyebrow">Roofing in Cloverdale, BC</p>
            <h1>Cloverdale roofing, done right.</h1>
            <p>Roof repairs, replacements, and inspections with clear explanations before the work starts.</p>
            <div className="home-hero-actions">
              <Link href="/services" className="button">View roofing services <ArrowRight size={18} /></Link>
              <Link href="/service-areas" className="home-secondary-link"><MapPin size={18} /> See our service area</Link>
            </div>
          </div>
          <div className="home-form-wrap">
            <div className="home-form-heading"><span>Free roof assessment request</span><h2>Tell us what is happening</h2><p>Send the basics. Your email opens with the request ready to send.</p></div>
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="proof-bar">
        <div className="shell proof-grid">
          <div><Search /><span><strong>Inspection first</strong>Understand the cause</span></div>
          <div><FileText /><span><strong>Clear scope</strong>Know what is included</span></div>
          <div><ShieldCheck /><span><strong>Repair-first advice</strong>Replace only when needed</span></div>
          <div><CloudRain /><span><strong>Local conditions</strong>Built around West Coast rain</span></div>
        </div>
      </section>

      <section className="home-about shell home-section">
        <div className="home-about-photo">
          <Image src="/images/cloverdale-roofer-hero.png" alt="Roof inspection on a shingle home" fill sizes="(max-width: 900px) 100vw, 48vw" />
        </div>
        <div className="home-about-copy">
          <p className="section-kicker">A practical roofing partner</p>
          <h2>Start with the roof you have, not the roof someone wants to sell you.</h2>
          <p>A ceiling stain does not automatically mean a full replacement. We begin with the symptoms, look at the details that fail first in this climate, and separate urgent work from work that can wait.</p>
          <ul>
            <li><Check /> Photo-supported findings</li>
            <li><Check /> Repair and replacement options explained</li>
            <li><Check /> Attention to flashing, valleys, vents, and drainage</li>
          </ul>
          <Link href="/about" className="text-link">How we approach roofing <ArrowRight size={17} /></Link>
        </div>
      </section>

      <section className="home-services">
        <div className="shell home-section">
          <div className="home-section-title"><p className="section-kicker">Roofing services</p><h2>From the first leak to a complete new roof</h2><p>Choose the closest match or start with an inspection if you are unsure.</p></div>
          <div className="contractor-service-grid">
            {services.map((service, index) => (
              <Link href={`/services/${service.slug}`} className={`contractor-service-card service-${index + 1}`} key={service.slug}>
                {index < 2 && <Image src={index === 0 ? "/images/cloverdale-roofer-hero.png" : "/images/cloverdale-roof-hero-no-person.png"} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" />}
                <div className="service-card-shade" />
                <div className="service-card-content"><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.short}</p><strong>View service <ArrowRight size={17} /></strong></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-areas shell home-section">
        <div className="home-section-title"><p className="section-kicker">Service area</p><h2>Local roofing centred on Cloverdale</h2><p>Focused coverage keeps site visits practical and recommendations grounded in the homes found here.</p></div>
        <div className="area-rows">{areas.map(([name, detail]) => <Link href="/service-areas" key={name}><MapPin /><h3>{name}</h3><p>{detail}</p><ArrowRight /></Link>)}</div>
      </section>

      <section className="home-process">
        <div className="shell home-section">
          <div className="home-section-title centered"><p className="section-kicker">What to expect</p><h2>A straightforward roofing process</h2></div>
          <div className="process-grid">
            <article><span>1</span><Search /><h3>Tell us the concern</h3><p>Share the symptoms, location, and timing so the visit starts with useful context.</p></article>
            <article><span>2</span><ClipboardCheck /><h3>Inspect the roof</h3><p>Check the roof surface and the details most likely to let water through.</p></article>
            <article><span>3</span><FileText /><h3>Review the options</h3><p>See what needs attention, what can wait, and what each route involves.</p></article>
            <article><span>4</span><Hammer /><h3>Complete the work</h3><p>Protect the property, address the cause, clean the site, and review the result.</p></article>
          </div>
          <div className="process-action"><Link href="/contact" className="button">Request your inspection <ArrowRight size={18} /></Link></div>
        </div>
      </section>

      <section className="home-faq shell home-section">
        <div className="faq-intro"><p className="section-kicker">Common questions</p><h2>Before you book a roof visit</h2><p>You do not need to know the roofing terminology. Start with what you can see.</p></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="home-final-cta">
        <Image src="/images/cloverdale-roof-hero-no-person.png" alt="Cloverdale home roof after rainfall" fill sizes="100vw" />
        <div className="home-final-overlay" />
        <div className="shell home-final-content"><h2>Protect the home before the next heavy rain.</h2><p>Start with a clear roof assessment and a practical next step.</p><Link href="/contact" className="button">Request an inspection <ArrowRight size={18} /></Link></div>
      </section>
    </>
  );
}
