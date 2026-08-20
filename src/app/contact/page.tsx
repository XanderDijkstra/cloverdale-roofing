import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import QuoteForm from "@/components/quote-form";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Request a Roof Inspection", description: "Tell us about your Cloverdale roof repair or replacement project." };
export default function ContactPage() { return <section className="contact-page shell page-content"><div className="contact-copy"><p className="eyebrow dark">Request an inspection</p><h1>What is your roof telling you?</h1><p>Tell us what you can see, where you see it, and when it started. You do not need to diagnose it yourself.</p><div className="contact-detail"><MapPin />Cloverdale, Surrey, British Columbia</div><div className="contact-detail"><Mail />{site.email}</div><p className="pending-note">This is a launch concept. Business credentials and direct Canadian contact details will be added after verification.</p></div><QuoteForm /></section>; }
