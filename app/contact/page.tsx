import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Contact Deumatic to discuss a digital product, software platform, mobile application, AI automation opportunity or digital growth initiative.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero container">
        <div>
          <span className="section-kicker">Start a project</span>
          <h1>Tell us what needs to change.</h1>
          <p>Share the product opportunity, business requirement or workflow challenge. We will respond with focused questions and a sensible next step.</p>
        </div>
        <aside>
          <span>Prefer direct email?</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>Worldwide collaboration<br />Remote-first delivery</p>
        </aside>
      </section>
      <section className="contact-form-section container">
        <ContactForm />
      </section>
    </>
  );
}
