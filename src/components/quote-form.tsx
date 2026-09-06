"use client";

import { FormEvent, useState } from "react";
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

export default function QuoteForm({ submitLabel = "Request assessment", location }: { compact?: boolean; submitLabel?: string; location?: string }) {
  const [screen, setScreen] = useState<"service" | "details">("service");
  const [selectedService, setSelectedService] = useState("");
  const [ready, setReady] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Roofing inquiry from ${data.get("name")}`);
    const body = encodeURIComponent([
      `Service: ${selectedService}`,
      ...(location ? [`Service area: ${location}`] : []),
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Address: ${data.get("address")}`,
    ].join("\n"));

    setReady(true);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="quote-form quote-quiz" onSubmit={submit}>
      <div className="quiz-progress" aria-label="Assessment progress">
        <span className={screen === "service" ? "active" : "complete"}>Roofing need</span>
        <span className={screen === "details" ? "active" : ""}>Your details</span>
      </div>

      {screen === "service" ? (
        <fieldset className="quiz-screen">
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
            onClick={() => setScreen("details")}
          >
            Continue <ArrowRight size={18} aria-hidden="true" />
          </button>
          <p className="form-note">Choose the option that best matches what your roof needs.</p>
        </fieldset>
      ) : (
        <div className="quiz-screen">
          <div className="quiz-details-heading">
            <button type="button" className="quiz-back" onClick={() => setScreen("service")}>
              <ArrowLeft size={16} aria-hidden="true" /> Back
            </button>
            <p><Check size={15} aria-hidden="true" /> {selectedService}</p>
          </div>
          <div className="field-row">
            <label>
              Name
              <input name="name" autoComplete="name" required placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
            </label>
          </div>
          <div className="field-row">
            <label>
              Phone
              <input name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="(604) 555-0123" />
            </label>
            <label>
              Property address
              <input name="address" autoComplete="street-address" required placeholder={`Street address, ${location ?? "Cloverdale"}`} />
            </label>
          </div>
          <button className="button form-submit" type="submit">
            {submitLabel} <ArrowUpRight size={18} aria-hidden="true" />
          </button>
          <p className="form-note" aria-live="polite">
            {ready ? <><Check size={15} /> Your email app should open with the request ready to send.</> : "We use these details only to respond to your roofing request."}
          </p>
        </div>
      )}
    </form>
  );
}
