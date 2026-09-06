"use client";

import { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleEllipsis,
  House,
  Search,
  Trees,
  Wrench,
} from "lucide-react";
import { site } from "@/lib/site";

const serviceOptions = [
  { value: "Roof repair", label: "Roof repair", icon: Wrench },
  { value: "Roof replacement", label: "Roof replacement", icon: House },
  { value: "Cedar conversion", label: "Cedar conversion", icon: Trees },
  { value: "Roof inspection", label: "Roof inspection", icon: Search },
  { value: "Other", label: "Other", icon: CircleEllipsis },
] as const;

export default function QuoteForm({ submitLabel = "Open email draft", location, initialService }: { compact?: boolean; submitLabel?: string; location?: string; initialService?: string }) {
  const initial = initialService === "Cedar roof conversion" ? "Cedar conversion" : initialService ?? "";
  const [screen, setScreen] = useState<"service" | "details">(initial ? "details" : "service");
  const [selectedService, setSelectedService] = useState(initial);
  const [ready, setReady] = useState(false);
  const [requestText, setRequestText] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const details = useRef<HTMLDivElement>(null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedService || screen !== "details") return;
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Roofing inquiry from ${data.get("name")}`);
    const campaign = new URLSearchParams(window.location.search);
    const request = [
      `Service: ${selectedService}`,
      ...(location ? [`Service area: ${location}`] : []),
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Address: ${data.get("address")}`,
      `Page: ${window.location.origin}${window.location.pathname}`,
      ...["utm_source", "utm_medium", "utm_campaign"].flatMap((key) => campaign.get(key) ? [`${key}: ${campaign.get(key)!.slice(0, 150)}`] : []),
    ].join("\n");
    const body = encodeURIComponent(request);

    setReady(true);
    setRequestText(request);
    setCopyStatus("");
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="quote-form quote-quiz" onSubmit={submit}>
      <div className="quiz-progress" aria-label="Assessment progress">
        <span className={screen === "service" ? "active" : "complete"}>Roofing need</span>
        <span className={screen === "details" ? "active" : ""}>Your details</span>
      </div>

        <fieldset className="quiz-screen" hidden={screen !== "service"}>
          <legend>What can we help with?</legend>
          <div className="service-choice-grid">
            {serviceOptions.map((option) => {
              const Icon = option.icon;
              const checked = selectedService === option.value;

              return (
                <label className={`service-choice ${option.value === "Other" ? "other" : ""}`} key={option.value}>
                  <input
                    type="radio"
                    name="service-choice"
                    value={option.value}
                    checked={checked}
                    onChange={() => setSelectedService(option.value)}
                  />
                  <span className="service-choice-content">
                    <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
                    <span>{option.label}</span>
                    <span className="choice-check" aria-hidden="true"><Check size={14} strokeWidth={2.5} /></span>
                  </span>
                </label>
              );
            })}
          </div>
          <button
            className="button form-submit quiz-continue"
            type="button"
            disabled={!selectedService}
            onClick={() => { setScreen("details"); requestAnimationFrame(() => details.current?.querySelector("input")?.focus()); }}
          >
            Continue <ArrowRight size={18} aria-hidden="true" />
          </button>
          <p className="form-note">Choose the option that best matches what your roof needs.</p>
        </fieldset>
        <div ref={details} className="quiz-screen" hidden={screen !== "details"}>
          <div className="quiz-details-heading">
            <button type="button" className="quiz-back" onClick={() => { setScreen("service"); setReady(false); }}>
              <ArrowLeft size={16} aria-hidden="true" /> Back
            </button>
            <p><Check size={15} aria-hidden="true" /> {selectedService}</p>
          </div>
          <div className="field-row">
            <label>
              Name
              <input name="name" autoComplete="name" required={screen === "details"} maxLength={120} placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required={screen === "details"} maxLength={254} placeholder="you@example.com" />
            </label>
          </div>
          <div className="field-row">
            <label>
              Phone
              <input name="phone" type="tel" inputMode="tel" autoComplete="tel" required={screen === "details"} maxLength={40} placeholder="Your phone number" />
            </label>
            <label>
              Property address
              <input name="address" autoComplete="street-address" required={screen === "details"} maxLength={240} placeholder={`Street address, ${location ?? "Cloverdale"}`} />
            </label>
          </div>
          <button className="button form-submit" type="submit">
            {submitLabel} <ArrowUpRight size={18} aria-hidden="true" />
          </button>
          <p className="form-note" aria-live="polite">
            {ready ? <><Check size={15} /> Your request is ready. Review and send it in your email app; it has not been sent by this website.</> : "Opens an email draft for you to review and send. This does not book an appointment."}
          </p>
          {ready && <div className="request-fallback"><p>Email app did not open? Copy your request and email it to <a href={`mailto:${site.email}`}>{site.email}</a>.</p><textarea aria-label="Your request to copy" readOnly value={requestText} rows={6} /><button className="quiz-back" type="button" onClick={async () => {
            try { await navigator.clipboard.writeText(requestText); setCopyStatus("Request copied."); }
            catch { setCopyStatus("Select the request text above and copy it manually."); }
          }}>Copy request</button><p role="status">{copyStatus}</p></div>}
          <p className="form-privacy">Your details go to {site.email} when you send the email. <Link href="/privacy">Privacy & inquiries</Link></p>
        </div>
    </form>
  );
}
