"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";

export function ContactForm() {
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "Not provided");
    const need = String(data.get("need") || "Not selected");
    const message = String(data.get("message") || "");
    const subject = `Project enquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Project need: ${need}`,
      "",
      message
    ].join("\n");

    setPrepared(true);
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
          <span>Work email *</span>
          <input name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
        </label>
      </div>
      <div className="form-grid">
        <label>
          <span>Company</span>
          <input name="company" type="text" autoComplete="organization" placeholder="Company name" />
        </label>
        <label>
          <span>What do you need?</span>
          <select name="need" defaultValue="">
            <option value="" disabled>Select a service</option>
            <optgroup label="AI and machine learning">
              <option>AI discovery or feasibility</option>
              <option>LLM, RAG or AI agent</option>
              <option>Computer vision</option>
              <option>Model deployment or optimization</option>
              <option>AI architecture review</option>
              <option>Cloud AI infrastructure</option>
              <option>Research prototype or simulation</option>
            </optgroup>
            <optgroup label="Digital products">
              <option>Product strategy and discovery</option>
              <option>Experience design</option>
              <option>Web or software development</option>
              <option>Mobile application development</option>
              <option>Cloud and platform engineering</option>
              <option>Digital growth</option>
              <option>Other digital product</option>
            </optgroup>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>
      <label>
        <span>Tell us about the opportunity *</span>
        <textarea name="message" required rows={7} placeholder="What are you trying to build, improve or automate?" />
      </label>
      <div className="form-submit-row">
        <button className="button" type="submit">Prepare email <SubmitArrow /></button>
        <p>{prepared ? "Your email app is opening with the project details." : "Your email app will open. This website does not store your message."}</p>
      </div>
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
