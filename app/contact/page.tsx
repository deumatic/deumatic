import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { enquiryPackageOptions, enquiryServiceGroups } from "@/data/commercial";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Our Software and Product Team",
  description: "Contact Deumatic to discuss custom software, a web or mobile application, AI automation, product design, cloud engineering or digital growth.",
  alternates: { canonical: "/contact" }
};

type ContactPageProps = {
  searchParams: Promise<{ selection?: string | string[]; context?: string | string[] }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const selection = Array.isArray(params.selection) ? params.selection[0] : params.selection;
  const context = Array.isArray(params.context) ? params.context[0] : params.context;

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
        <ContactForm
          initialSelection={selection}
          initialContext={context}
          packageOptions={enquiryPackageOptions}
          serviceGroups={enquiryServiceGroups}
        />
      </section>
    </>
  );
}
