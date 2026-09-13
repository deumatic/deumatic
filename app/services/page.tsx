import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/Header";
import { engagementModels, services, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Software Development and AI Automation Services",
  description: "Explore Deumatic services for custom software, web and mobile applications, AI automation, product strategy, UX design, cloud platforms and digital growth.",
  alternates: { canonical: "/services" }
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Deumatic software and digital product services",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${site.url}/services#${service.slug}`,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: { "@id": `${site.url}/#organization` },
      areaServed: "Worldwide"
    }
  }))
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero container">
        <span className="section-kicker">Services</span>
        <h1>One team for the product decisions that need to connect.</h1>
        <p>Bring us a defined brief, an early opportunity or a system that no longer serves the business. We will help determine the clearest path forward.</p>
      </section>

      <section className="service-detail-section container">
        {services.map((service) => (
          <article className="service-detail" id={service.slug} key={service.slug}>
            <div className="service-detail-title">
              <span>{service.number}</span>
              <h2>{service.title}</h2>
            </div>
            <div className="service-detail-copy">
              <p className="service-lead">{service.short}</p>
              <p>{service.description}</p>
              <ul>
                {service.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="section dark-section">
        <div className="container services-engagement">
          <div>
            <span className="section-kicker light">Engagement models</span>
            <h2>Start at the scale the problem requires.</h2>
          </div>
          <div className="services-engagement-list">
            {engagementModels.map((model, index) => (
              <article key={model.title}>
                <span>0{index + 1}</span>
                <div><h3>{model.title}</h3><p>{model.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta container">
        <span className="section-kicker">Not sure where to begin?</span>
        <h2>Bring us the problem. We will help define the next useful step.</h2>
        <Link className="button" href="/contact">Start a conversation <ArrowIcon /></Link>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
    </>
  );
}
