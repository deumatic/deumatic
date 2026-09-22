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
    <div className="services-page-v2">
      <section className="services-hero-v2 container">
        <div className="services-hero-copy-v2">
          <span className="v2-kicker">Individual services</span>
          <h1>Choose the <span>capability</span> your next decision needs.</h1>
          <p>Bring us one defined requirement or combine design, development, AI, data and implementation services around a larger product outcome.</p>
          <a className="services-hero-jump-v2" href="#service-catalogue"><span>Explore the service catalogue</span><i aria-hidden="true">↓</i></a>
        </div>
        <ServicesHeroVisual />
      </section>

      <section className="services-section-v2 container services-choice-v2" aria-labelledby="service-choice-title">
        <div className="services-section-heading-v2">
          <span className="v2-kicker">Choose your path</span>
          <h2 id="service-choice-title">Choose a complete solution or <span>get help with one part.</span></h2>
        </div>
        <div className="services-choice-board-v2">
          <Link href="/solutions"><div><span>01</span><i aria-hidden="true" /></div><h3>I need a complete solution.</h3><p>Start with a website, store, product, automation, data or POS outcome.</p></Link>
          <a className="current" href="#service-catalogue"><div><span>02</span><i aria-hidden="true" /></div><h3>I need a specific service.</h3><p>Search and filter the individual capability catalogue below.</p></a>
          <Link href="/solutions#solution-guide"><div><span>03</span><i aria-hidden="true" /></div><h3>Help me choose.</h3><p>Use four short questions to find a practical starting point.</p></Link>
        </div>
      </section>

      <section className="services-section-v2 container services-catalogue-section-v2">
        <ServiceCatalogue initialCategory={initialCategory} />
      </section>

      <section className="services-section-v2 container services-ai-section-v2">
        <div className="services-ai-bridge-v2">
          <div className="services-ai-copy-v2">
            <span className="v2-kicker">Advanced AI &amp; ML Engineering</span>
            <h2>Need the deeper <span>technical catalogue?</span></h2>
          </div>
          <AiPipelineVisual />
          <div className="services-ai-detail-v2">
            <p>Explore technical discovery, LLM and RAG engineering, AI agents, computer vision, model serving, inference optimization, cloud architecture, GPU workloads and evaluation.</p>
            <Link className="v2-primary-button" href="/services/ai-ml-engineering"><span>Explore AI &amp; ML Engineering</span><span className="v2-button-icon"><ArrowIcon /></span></Link>
          </div>
        </div>
      </section>

      <section className="services-section-v2 container services-models-v2">
        <div className="services-section-heading-v2">
          <span className="v2-kicker">Engagement models</span>
          <h2>Start at the <span>scale</span> the problem requires.</h2>
        </div>
        <div className="services-model-list-v2">
            {engagementModels.map((model, index) => (
              <article key={model.title}>
                <span className="services-model-number-v2">0{index + 1}</span>
                <span className="services-model-label-v2">{model.label}</span>
                <h3>{model.title}</h3>
                <p>{model.text}</p>
                <i aria-hidden="true">↗</i>
              </article>
            ))}
        </div>
      </section>

      <section className="services-section-v2 container services-cta-section-v2">
        <div className="services-cta-v2">
          <span className="v2-kicker">Not sure where to begin?</span>
          <i className="services-cta-signal-v2" aria-hidden="true" />
          <div><h2>Bring us the problem. We will help define the <span>next useful step.</span></h2><Link className="v2-primary-button" href="/contact?selection=Not%20sure%20yet"><span>Start a conversation</span><span className="v2-button-icon"><ArrowIcon /></span></Link></div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
    </div>
  );
}

function ServicesHeroVisual() {
  const rows = [
    ["01", "Product strategy"],
    ["02", "Experience design"],
    ["03", "Software engineering"],
    ["04", "AI and automation"],
    ["05", "Data and cloud"],
    ["06", "Digital growth"]
  ];

  return (
    <div className="services-hero-visual-v2" aria-hidden="true">
      <div className="services-index-v2">
        <div className="services-index-head-v2"><span>Capability index</span><span>Available worldwide</span></div>
        <div className="services-index-rows-v2">
          {rows.map(([number, title], index) => (
            <div className={index === 2 ? "active" : ""} key={number}>
              <span>{number}</span><b>{title}</b><i />
              {index === 2 ? <p><em>Web platforms</em><em>Mobile apps</em><em>APIs</em></p> : null}
            </div>
          ))}
        </div>
      </div>
      <span className="services-index-signal-v2" />
    </div>
  );
}

function AiPipelineVisual() {
  return (
    <div className="services-pipeline-card-v2" aria-hidden="true">
      <div className="services-pipeline-head-v2"><span>AI delivery system</span><span>Validated flow</span></div>
      <div className="services-pipeline-v2">
        <svg viewBox="0 0 396 190" preserveAspectRatio="none"><path d="M49 90H340" /><path d="M98 155C118 142 127 129 145 118M198 155C208 140 226 133 243 118M303 155C318 140 330 132 340 118" /><path className="flow" d="M49 90H340" /></svg>
        <span className="context" data-index="01">Context</span><span className="model" data-index="02">Model</span><span className="evaluate" data-index="03">Evaluate</span><span className="serve" data-index="04">Serve</span>
        <em>RAG</em><em>Vision</em><em>GPU + Cloud</em>
      </div>
    </div>
  );
}
