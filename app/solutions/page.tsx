import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/Header";
import { SolutionGuide } from "@/components/SolutionGuide";
import { SolutionPackageCard } from "@/components/SolutionPackageCard";
import { getCategory, getPackagesForCategory, solutionCategories, solutionPackages } from "@/data/commercial";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Digital Product Solutions and Service Packages",
  description: "Explore complete Deumatic solutions for websites, online stores, web and mobile products, automation, AI, data and Saudi Arabia POS implementation.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    type: "website",
    url: `${site.url}/solutions`,
    title: "Digital Product Solutions and Service Packages | Deumatic",
    description: "Choose a practical starting point for a website, product, automation, AI, data or Saudi POS requirement.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Deumatic digital product solutions" }]
  }
};

const solutionsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Deumatic digital product solutions",
  numberOfItems: solutionPackages.length,
  itemListElement: solutionPackages.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: item.title,
      description: item.summary,
      provider: { "@id": `${site.url}/#organization` },
      areaServed: item.geography === "Saudi Arabia" ? { "@type": "Country", name: "Saudi Arabia" } : "Worldwide",
      url: `${site.url}/solutions?category=${item.categoryId}#package-${item.id}`
    }
  }))
};

type SolutionsPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

export default async function SolutionsPage({ searchParams }: SolutionsPageProps) {
  const params = await searchParams;
  const categoryParam = Array.isArray(params.category) ? params.category[0] : params.category;
  const activeCategory = getCategory(categoryParam);
  const packages = getPackagesForCategory(activeCategory.id);

  return (
    <div className="solutions-page-v2">
      <section className="solutions-hero-v2 container">
        <div className="solutions-hero-copy-v2">
          <span className="v2-kicker">Solutions &amp; Packages</span>
          <h1>From your first website to your <span>next business system.</span></h1>
          <p>Choose the outcome you need. We bring together design, development, AI and implementation around a clear scope, with the option to start small or build a complete solution.</p>
          <div className="v2-actions">
            <Link className="v2-primary-button" href="#solution-guide"><span>Find my solution</span><span className="v2-button-icon"><ArrowIcon /></span></Link>
            <Link className="v2-secondary-button" href="/services"><span>Browse individual services</span><ArrowIcon /></Link>
          </div>
        </div>
        <SolutionsDeliveryVisual />
      </section>

      <section className="services-section-v2 container services-choice-v2" aria-labelledby="choice-entry-title">
        <div className="services-section-heading-v2">
          <span className="v2-kicker">Choose your path</span>
          <h2 id="choice-entry-title">Choose a complete solution or <span>get help with one part.</span></h2>
        </div>
        <div className="services-choice-board-v2">
          <a className="current" href="#outcome-categories"><div><span>01</span><i aria-hidden="true" /></div><h3>I need a complete solution.</h3><p>Start with the business outcome and review a defined package scope.</p></a>
          <Link href="/services"><div><span>02</span><i aria-hidden="true" /></div><h3>I need a specific service.</h3><p>Choose design, development, integration, testing or another focused capability.</p></Link>
          <a href="#solution-guide"><div><span>03</span><i aria-hidden="true" /></div><h3>Help me choose.</h3><p>Answer four short questions and receive a useful starting recommendation.</p></a>
        </div>
      </section>

      <section className="solutions-section-v2 container solutions-categories-v2" id="outcome-categories">
          <div className="solutions-heading-v2">
            <div><span className="v2-kicker">Start with what you need</span><h2>One clear outcome before the <span>technical details.</span></h2></div>
            <p>From a personal website to a complex business system, choose a starting point that fits your goal. We will confirm the scope, delivery plan and cost before work begins.</p>
          </div>
          <div className="solutions-category-grid-v2">
            {solutionCategories.map((category) => (
              <Link
                className={category.id === activeCategory.id ? "active" : ""}
                href={`/solutions?category=${category.id}#packages`}
                aria-current={category.id === activeCategory.id ? "true" : undefined}
                key={category.id}
              >
                <div><span>{category.number}</span><i aria-hidden="true" /></div>
                <h3>{category.title}</h3>
                <p>{category.summary}</p>
                <b>{category.action} <i aria-hidden="true" /></b>
              </Link>
            ))}
          </div>
      </section>

      <section className="solutions-section-v2 container package-catalogue package-catalogue-v2" id="packages">
        <div className="package-catalogue-heading solutions-heading-v2">
          <div>
            <span className="v2-kicker">Selected outcome</span>
            <h2>{activeCategory.title}</h2>
            {activeCategory.id === "pos" ? <Link className="text-link package-pos-link" href="/solutions/pos-saudi-arabia">Open the complete Saudi POS page <ArrowIcon /></Link> : null}
          </div>
          <p>{activeCategory.summary} Review the starting scopes below, then request a written proposal for your actual requirements.</p>
        </div>
        <div className="package-price-policy">
          <strong>Pricing approach</strong>
          <p>Public numerical prices are shown only after their scope and commercial terms are approved. Until then, each option uses an honest quotation label. Actual invoice currency, third-party costs, applicable taxes and the final delivery schedule are confirmed in the proposal.</p>
        </div>
        <div className="solution-package-list">
          {packages.map((item) => <SolutionPackageCard item={item} key={item.id} />)}
        </div>
      </section>

      <section className="solutions-section-v2 container solution-guide-shell-v2"><SolutionGuide /></section>

      <section className="services-section-v2 container services-cta-section-v2">
        <div className="services-cta-v2">
          <span className="v2-kicker">Need a different combination?</span>
          <i className="services-cta-signal-v2" aria-hidden="true" />
          <div><h2>Start with the outcome. We will shape the <span>right scope around it.</span></h2><Link className="v2-primary-button" href="/contact?selection=Not%20sure%20yet"><span>Discuss your requirement</span><span className="v2-button-icon"><ArrowIcon /></span></Link></div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsSchema) }} />
    </div>
  );
}

function SolutionsDeliveryVisual() {
  const steps = ["Clear starting scope", "Written assumptions and exclusions", "Phased delivery for complex systems"];
  return (
    <div className="solutions-delivery-visual-v2">
      <aside className="solutions-delivery-card-v2">
        <div><span>How delivery works</span><p>Deumatic manages your project and coordinates the specialists required for the agreed scope.</p></div>
        <ol>{steps.map((step, index) => <li key={step}><span>0{index + 1}</span><b>{step}</b><i aria-hidden="true" /></li>)}</ol>
      </aside>
      <span className="solutions-delivery-signal-v2" aria-hidden="true" />
    </div>
  );
}
