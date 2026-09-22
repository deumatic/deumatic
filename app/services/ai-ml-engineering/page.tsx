import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/Header";
import { aiDeliveryProcess, aiEngagementModels, aiServiceGroups, aiTrustPoints, site } from "@/data/site";

export const metadata: Metadata = {
  title: "AI and Machine Learning Engineering Services",
  description: "Deumatic designs LLM, RAG, AI agent, computer vision and machine-learning systems, from technical feasibility and prototyping to deployment, optimization and cloud architecture.",
  keywords: [
    "AI development company",
    "AI engineering services",
    "LLM application development",
    "RAG development",
    "AI agent development",
    "computer vision development",
    "machine-learning deployment",
    "LLM inference optimization",
    "AI architecture consulting",
    "cloud architecture for AI workloads"
  ],
  alternates: { canonical: "/services/ai-ml-engineering" },
  openGraph: {
    type: "website",
    url: `${site.url}/services/ai-ml-engineering`,
    title: "AI and Machine Learning Engineering Services | Deumatic",
    description: "Design, build, evaluate and improve practical AI systems with Deumatic's product, software, machine-learning and cloud engineering capability.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Deumatic AI and machine learning engineering services" }]
  }
};

const aiServices = aiServiceGroups.reduce<Array<{ title: string; description: string }>>(
  (allServices, group) => [...allServices, ...group.services],
  []
);

const aiServicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${site.url}/services/ai-ml-engineering#webpage`,
      url: `${site.url}/services/ai-ml-engineering`,
      name: "AI and Machine Learning Engineering Services",
      description: "Applied AI engineering services covering discovery, intelligent applications, deployment, optimization and evaluation.",
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#organization` },
      inLanguage: "en"
    },
    {
      "@type": "ItemList",
      name: "Deumatic AI and machine learning engineering services",
      numberOfItems: aiServices.length,
      itemListElement: aiServices.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: { "@id": `${site.url}/#organization` },
          areaServed: "Worldwide",
          url: `${site.url}/services/ai-ml-engineering`
        }
      }))
    }
  ]
};

export default function AiMlEngineeringPage() {
  return (
    <div className="ai-page-v2">
      <section className="ai-page-hero dark-section">
        <div className="container ai-page-hero-grid">
          <div>
            <span className="section-kicker light">AI &amp; ML Engineering</span>
            <h1>Applied AI systems designed around real business outcomes.</h1>
            <p>Deumatic helps organizations evaluate, design, build and improve AI-enabled products and workflows. We connect product thinking, software engineering, machine learning and cloud infrastructure so AI becomes part of a dependable operational system rather than an isolated experiment.</p>
            <div className="hero-actions">
              <Link className="button button-light" href="/contact">Discuss an AI project <ArrowIcon /></Link>
              <Link className="text-link ai-hero-work-link" href="/work">Explore our work <ArrowIcon /></Link>
            </div>
          </div>
          <aside className="ai-capability-map" aria-label="AI engineering capability groups">
            <span>Capability map</span>
            <ol>
              {aiServiceGroups.map((group, index) => (
                <li key={group.slug}><a href={`#${group.slug}`}><b>0{index + 1}</b>{group.title}</a></li>
              ))}
            </ol>
            <p>We bring together the product, software, AI and infrastructure specialists each engagement requires.</p>
          </aside>
        </div>
      </section>

      <section className="ai-catalog-intro container">
        <span className="section-kicker">Detailed capabilities</span>
        <h2>One connected path from technical question to operating system.</h2>
        <p>Start with a focused review or assemble a cross-functional delivery team. Scope, controls and specialist capability are defined around the needs of each engagement.</p>
      </section>

      <div className="ai-service-catalog container">
        {aiServiceGroups.map((group, groupIndex) => (
          <section className="ai-service-group" id={group.slug} key={group.slug}>
            <header>
              <span>0{groupIndex + 1}</span>
              <div><h2>{group.title}</h2><p>{group.intro}</p></div>
            </header>
            <div className="ai-service-grid">
              {group.services.map((service) => (
                <article className="ai-service-card" key={service.number}>
                  <div className="ai-service-card-heading"><span>{service.number}</span><h3>{service.title}</h3></div>
                  <p>{service.description}</p>
                  <details>
                    <summary>Potential deliverables <i aria-hidden="true" /></summary>
                    <ul>{service.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}</ul>
                  </details>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="section dark-section ai-process-section">
        <div className="container">
          <div className="ai-process-heading">
            <span className="section-kicker light">Delivery approach</span>
            <h2>From opportunity to dependable AI system.</h2>
          </div>
          <ol className="ai-process-list">
            {aiDeliveryProcess.map((step) => (
              <li key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section container ai-trust-section">
        <div className="ai-trust-copy">
          <span className="section-kicker">Responsible positioning</span>
          <h2>AI with evidence, controls and clear boundaries.</h2>
          <p>We do not begin with a model and search for a problem. We define the operational need, identify the evidence the system requires and design the appropriate level of human control. Performance claims are established through project-specific evaluation rather than assumed in advance.</p>
        </div>
        <ul>{aiTrustPoints.map((point) => <li key={point}>{point}</li>)}</ul>
      </section>

      <section className="section container ai-engagement-section">
        <div className="principles-heading">
          <span className="section-kicker">Ways to work together</span>
          <h2>AI capability shaped around the decision in front of you.</h2>
        </div>
        <div className="engagement-grid">
          {aiEngagementModels.map((model, index) => (
            <article key={model.title}>
              <span>0{index + 1}</span>
              <p>{model.label}</p>
              <h3>{model.title}</h3>
              <div className="engagement-rule" />
              <p>{model.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-cta container">
        <span className="section-kicker">Have an AI opportunity or technical question?</span>
        <h2>Start with the problem, the evidence and the decision that needs to improve.</h2>
        <Link className="button" href="/contact">Discuss an AI project <ArrowIcon /></Link>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aiServicesSchema) }} />
    </div>
  );
}
