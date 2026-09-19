import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/Header";
import { ServiceCatalogue } from "@/components/ServiceCatalogue";
import { individualServices } from "@/data/commercial";
import { engagementModels, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Individual Design, Software, AI and Data Services",
  description: "Choose focused Deumatic services for product planning, UI/UX, frontend, backend, mobile apps, integrations, AI, automation, data, cloud, testing and Saudi POS implementation.",
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: `${site.url}/services`,
    title: "Individual Design, Software, AI and Data Services | Deumatic",
    description: "Request one specialist capability or combine services around a defined digital product requirement.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Deumatic digital product services" }]
  }
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Deumatic individual digital product services",
  numberOfItems: individualServices.length,
  itemListElement: individualServices.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${site.url}/services#service-${service.id}`,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.summary,
      provider: { "@id": `${site.url}/#organization` },
      areaServed: service.geography === "Saudi Arabia" ? { "@type": "Country", name: "Saudi Arabia" } : "Worldwide"
    }
  }))
};

type ServicesPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

export default async function ServicesPage({ searchParams }: ServicesPageProps) {
  const params = await searchParams;
  const initialCategory = Array.isArray(params.category) ? params.category[0] : params.category;

  return (
    <>
      <section className="page-hero container services-page-hero">
        <span className="section-kicker">Individual services</span>
        <h1>Choose the capability your next decision needs.</h1>
        <p>Bring us one defined requirement or combine design, development, AI, data and implementation services around a larger product outcome.</p>
      </section>

      <section className="choice-entry container" aria-labelledby="service-choice-title">
        <div>
          <span className="section-kicker">Choose your path</span>
          <h2 id="service-choice-title">Choose a complete solution or get help with one part.</h2>
        </div>
        <div className="choice-entry-grid">
          <Link href="/solutions"><span>01</span><h3>I need a complete solution.</h3><p>Start with a website, store, product, automation, data or POS outcome.</p></Link>
          <a href="#service-catalogue"><span>02</span><h3>I need a specific service.</h3><p>Search and filter the individual capability catalogue below.</p></a>
          <Link href="/solutions#solution-guide"><span>03</span><h3>Help me choose.</h3><p>Use four short questions to find a practical starting point.</p></Link>
        </div>
      </section>

      <section className="section container">
        <ServiceCatalogue initialCategory={initialCategory} />
      </section>

      <section className="section dark-section services-ai-bridge">
        <div className="container services-ai-bridge-grid">
          <div>
            <span className="section-kicker light">Advanced AI &amp; ML Engineering</span>
            <h2>Need the deeper technical catalogue?</h2>
          </div>
          <div>
            <p>Explore technical discovery, LLM and RAG engineering, AI agents, computer vision, model serving, inference optimization, cloud architecture, GPU workloads and evaluation.</p>
            <Link className="button button-light" href="/services/ai-ml-engineering">Explore AI &amp; ML Engineering <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="section dark-section services-models-section">
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
        <Link className="button" href="/contact?selection=Not%20sure%20yet">Start a conversation <ArrowIcon /></Link>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
    </>
  );
}
