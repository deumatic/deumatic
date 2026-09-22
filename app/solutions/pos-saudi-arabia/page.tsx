import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/Header";
import { individualServices, solutionPackages } from "@/data/commercial";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "POS Software, Hardware and Setup in Saudi Arabia",
  description: "Deumatic coordinates POS software, compatible hardware, installation, payment integration, staff training and support for businesses in Saudi Arabia.",
  alternates: { canonical: "/solutions/pos-saudi-arabia" },
  openGraph: {
    type: "website",
    url: `${site.url}/solutions/pos-saudi-arabia`,
    title: "POS Software, Hardware and Setup in Saudi Arabia | Deumatic",
    description: "Plan a new POS setup, upgrade an existing system or coordinate a multi-branch rollout in Saudi Arabia.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Deumatic Saudi Arabia POS solutions" }]
  }
};

const posPackages = solutionPackages.filter((item) => item.categoryId === "pos");
const posServices = individualServices.filter((item) => item.categoryId === "pos");

const posSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "POS software, hardware and implementation in Saudi Arabia",
  description: "Requirements-led POS software, hardware, installation, payment integration, training and support coordination.",
  provider: { "@id": `${site.url}/#organization` },
  areaServed: { "@type": "Country", name: "Saudi Arabia" },
  url: `${site.url}/solutions/pos-saudi-arabia`
};

export default function SaudiPosPage() {
  return (
    <div className="pos-page-v2">
      <section className="pos-hero dark-section">
        <div className="container pos-hero-grid">
          <div>
            <span className="section-kicker light">POS Solutions / Saudi Arabia</span>
            <h1>Your POS software, hardware and setup, managed together.</h1>
            <p>Set up or upgrade the system your team uses to sell, take payments and manage daily operations. Deumatic coordinates software, hardware, installation, payment integration, staff training and support around your business requirements.</p>
            <div className="hero-actions">
              <Link className="button button-light" href="/contact?selection=New%20POS%20Setup">Plan my POS setup <ArrowIcon /></Link>
              <a className="text-link ai-hero-work-link" href="#pos-options">Compare options <ArrowIcon /></a>
            </div>
          </div>
          <aside className="pos-availability-card">
            <span>Service area</span>
            <strong>Available in Saudi Arabia</strong>
            <p>City coverage, travel, delivery and installation scheduling are confirmed during quotation.</p>
          </aside>
        </div>
      </section>

      <section className="section container pos-options" id="pos-options">
        <div className="package-catalogue-heading">
          <div>
            <span className="section-kicker">Choose a starting point</span>
            <h2>One system plan, itemized around your location.</h2>
          </div>
          <p>Every quotation separates software, equipment, implementation, payment-provider work, training and support. No universal bundle is assumed.</p>
        </div>

        <div className="pos-option-grid">
          {posPackages.map((item, index) => (
            <article className="pos-option-card" id={`package-${item.id}`} key={item.id}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <strong>{item.pricing.label}</strong>
              <details>
                <summary>Review possible scope <i aria-hidden="true" /></summary>
                <ul>{item.scope.map((scopeItem) => <li key={scopeItem}>{scopeItem}</li>)}</ul>
                <p><b>Important:</b> {item.exclusions.join(" ")}</p>
              </details>
              <Link className="text-link" href={`/contact?selection=${encodeURIComponent(item.title)}`}>{item.cta} <ArrowIcon /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section pos-quote-section">
        <div className="container pos-quote-grid">
          <div>
            <span className="section-kicker light">A transparent POS quotation</span>
            <h2>Eight items kept separate and reviewable.</h2>
          </div>
          <ol>
            <li><span>01</span>Hardware models, quantities and warranty terms</li>
            <li><span>02</span>Software subscription and billing period</li>
            <li><span>03</span>Installation and configuration</li>
            <li><span>04</span>Payment-integration work and provider charges</li>
            <li><span>05</span>Data migration or catalogue preparation</li>
            <li><span>06</span>Staff training</li>
            <li><span>07</span>Maintenance and support</li>
            <li><span>08</span>Travel, delivery and applicable taxes</li>
          </ol>
        </div>
      </section>

      <section className="section container pos-individual-services">
        <div className="principles-heading">
          <span className="section-kicker">Need only one item?</span>
          <h2>Choose only the POS service your business requires.</h2>
        </div>
        <div className="pos-service-list">
          {posServices.map((item) => (
            <article id={`service-${item.id}`} key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <span>{item.pricing.label}</span>
              <Link className="text-link" href={`/contact?selection=${encodeURIComponent(item.title)}`}>Request this item <ArrowIcon /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section container pos-boundaries">
        <div>
          <span className="section-kicker">Before we quote</span>
          <h2>Compatibility and provider approval come first.</h2>
        </div>
        <ul>
          <li>Hardware prices are confirmed against supplier quotations.</li>
          <li>Device and payment-provider compatibility is assessed for the selected system.</li>
          <li>Deumatic coordinates integration work but is not the payment processor.</li>
          <li>Merchant onboarding remains with the selected payment provider.</li>
          <li>E-invoicing requirements are assessed against the selected system and customer context.</li>
          <li>Licences, warranties, service coverage and response targets are written into the proposal.</li>
        </ul>
      </section>

      <section className="page-cta container">
        <span className="section-kicker">Ready to define your POS requirement?</span>
        <h2>Tell us the city, business type, branches and terminals you are planning.</h2>
        <Link className="button" href="/contact?selection=New%20POS%20Setup">Request an itemized POS quote <ArrowIcon /></Link>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(posSchema) }} />
    </div>
  );
}
