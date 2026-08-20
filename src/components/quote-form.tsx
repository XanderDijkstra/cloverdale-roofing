"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { site } from "@/lib/site";

export default function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [ready, setReady] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Roofing inquiry from ${data.get("name")}`);
    const body = encodeURIComponent([`Name: ${data.get("name")}`, `Email: ${data.get("email")}`, `Neighbourhood: ${data.get("area")}`, `Project: ${data.get("project")}`, `Details: ${data.get("details") || "Not provided"}`].join("\n"));
    setReady(true);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }
  return (
    <form className={`quote-form ${compact ? "compact" : ""}`} onSubmit={submit}>
      <div className="field-row"><label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label></div>
      <div className="field-row"><label>Neighbourhood<input name="area" autoComplete="address-level2" required placeholder="Cloverdale" /></label><label>What do you need?<select name="project" defaultValue="Roof inspection"><option>Roof inspection</option><option>Leak repair</option><option>Roof replacement</option><option>Cedar conversion</option><option>Not sure yet</option></select></label></div>
      {!compact && <label>What is happening?<textarea name="details" rows={4} placeholder="Tell us what you have noticed and when it started." /></label>}
      <button className="button form-submit" type="submit">Prepare my request <ArrowUpRight size={18} /></button>
      <p className="form-note">{ready ? <><Check size={15} /> Your email app should open with the details ready to send.</> : "No pressure. Start with the roof, the concern, and your timeline."}</p>
    </form>
  );
}
