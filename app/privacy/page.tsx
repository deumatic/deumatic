import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Deumatic website privacy information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true }
};

export default function PrivacyPage() {
  return (
    <section className="legal-page container">
      <span className="section-kicker">Privacy</span>
      <h1>A simple website with a simple data approach.</h1>
      <div>
        <h2>Contact enquiries</h2>
        <p>The project form prepares an email in your own email application. Deumatic does not store the form contents on this website.</p>
        <h2>External links</h2>
        <p>Links to LinkedIn and email services are governed by the privacy practices of those services.</p>
        <h2>Questions</h2>
        <p>For privacy questions, email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </div>
    </section>
  );
}
