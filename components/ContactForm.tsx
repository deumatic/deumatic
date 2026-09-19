"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";

type OptionGroup = { label: string; options: readonly string[] };

type ContactFormProps = {
  initialSelection?: string;
  initialContext?: string;
  packageOptions: readonly string[];
  serviceGroups: readonly OptionGroup[];
};

export function ContactForm({ initialSelection = "", initialContext = "", packageOptions, serviceGroups }: ContactFormProps) {
  const [need, setNeed] = useState(initialSelection);
  const [validationError, setValidationError] = useState("");
  const isPosEnquiry = need.toLowerCase().includes("pos");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");

    if (!email && !phone) {
      setValidationError("Please provide an email address or phone number so we can respond.");
      return;
    }

    setValidationError("");
    const company = String(data.get("company") || "Not provided");
    const message = String(data.get("message") || "");
    const timeline = String(data.get("timeline") || "Not specified");
    const budget = String(data.get("budget") || "Not specified");
    const subject = `Project enquiry: ${need || "Not sure yet"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email || "Not provided"}`,
      `Phone: ${phone || "Not provided"}`,
      `Company: ${company}`,
      `Selected service or solution: ${need || "Not sure yet"}`,
      `Timeline: ${timeline}`,
      `Budget context: ${budget}`,
      ...(isPosEnquiry ? [
        `Saudi city: ${String(data.get("city") || "Not provided")}`,
        `Business type: ${String(data.get("businessType") || "Not provided")}`,
        `Branches: ${String(data.get("branches") || "Not provided")}`,
        `Terminals: ${String(data.get("terminals") || "Not provided")}`,
        `POS status: ${String(data.get("posStatus") || "Not provided")}`,
        `POS requirement: ${String(data.get("posRequirement") || "Not provided")}`
      ] : []),
      "",
      message
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Name *</span>
          <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
        </label>
        <label>
          <span>Company <small>Optional for individuals</small></span>
          <input name="company" type="text" autoComplete="organization" placeholder="Company name" />
        </label>
      </div>
      <div className="form-grid">
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@company.com" />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="Your contact number" />
        </label>
      </div>
      <label>
        <span>Selected service or solution</span>
        <select name="need" value={need} onChange={(event) => setNeed(event.target.value)}>
          <option value="">Not sure yet</option>
          <optgroup label="Complete solutions">
            {packageOptions.map((option) => <option key={option}>{option}</option>)}
          </optgroup>
          {serviceGroups.map((group) => (
            <optgroup label={group.label} key={group.label}>
              {group.options.map((option) => <option key={option}>{option}</option>)}
            </optgroup>
          ))}
        </select>
      </label>
      <div className="form-grid">
        <label>
          <span>Target timeline <small>Optional</small></span>
          <select name="timeline" defaultValue="">
            <option value="">Not decided yet</option>
            <option>As soon as the scope is ready</option>
            <option>This quarter</option>
            <option>Planning for a later phase</option>
          </select>
        </label>
        <label>
          <span>Budget context <small>Optional</small></span>
          <select name="budget" defaultValue="">
            <option value="">Not decided yet</option>
            <option>Focused engagement</option>
            <option>Complete product build</option>
            <option>Multi-phase programme</option>
          </select>
        </label>
      </div>

      {isPosEnquiry ? (
        <fieldset className="pos-enquiry-fields">
          <legend>Saudi POS requirements</legend>
          <div className="form-grid">
            <label><span>Saudi city</span><input name="city" type="text" placeholder="City" /></label>
            <label><span>Business type</span><input name="businessType" type="text" placeholder="Shop, cafe, restaurant or service" /></label>
          </div>
          <div className="form-grid">
            <label><span>Branch count</span><input name="branches" type="number" inputMode="numeric" min="1" placeholder="Number of branches" /></label>
            <label><span>Terminal count</span><input name="terminals" type="number" inputMode="numeric" min="1" placeholder="Number of terminals" /></label>
          </div>
          <div className="form-grid">
            <label>
              <span>Current status</span>
              <select name="posStatus" defaultValue="">
                <option value="">Select one</option>
                <option>New setup</option>
                <option>Existing system</option>
              </select>
            </label>
            <label>
              <span>What do you need?</span>
              <select name="posRequirement" defaultValue="">
                <option value="">Select one</option>
                <option>Complete setup</option>
                <option>Software only</option>
                <option>Hardware only</option>
                <option>Installation or training</option>
                <option>Support or upgrade</option>
              </select>
            </label>
          </div>
        </fieldset>
      ) : null}

      <label>
        <span>Tell us about the requirement *</span>
        <textarea name="message" required rows={7} defaultValue={initialContext} placeholder="What are you trying to build, improve or automate?" />
      </label>
      <div className="form-submit-row">
        <button className="button" type="submit">Prepare enquiry email <SubmitArrow /></button>
        <p>This prepares an email in your device&apos;s email app. Your enquiry is not delivered until you review and send that email.</p>
      </div>
      <p className="form-error" role="alert" aria-live="polite">{validationError}</p>
    </form>
  );
}

function SubmitArrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20">
      <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
