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
    <>
      <section className="solutions-hero dark-section">
        <div className="container solutions-hero-grid">
          <div>
            <span className="section-kicker light">Solutions &amp; Packages</span>
            <h1>From your first website to your next business system.</h1>
            <p>Choose the outcome you need. We bring together design, development, AI and implementation around a clear scope, with the option to start small or build a complete solution.</p>
            <div className="hero-actions">
              <Link className="button button-light" href="#solution-guide">Find my solution <ArrowIcon /></Link>
              <Link className="text-link ai-hero-work-link" href="/services">Browse individual services <ArrowIcon /></Link>
            </div>
          </div>
          <aside className="solutions-delivery-note">
            <span>How delivery works</span>
            <p>Deumatic manages your project and coordinates the specialists required for the agreed scope.</p>
            <ul>
              <li>Clear starting scope</li>
              <li>Written assumptions and exclusions</li>
              <li>Phased delivery for complex systems</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="choice-entry container" aria-labelledby="choice-entry-title">
        <div>
          <span className="section-kicker">Choose your path</span>
          <h2 id="choice-entry-title">Choose a complete solution or get help with one part.</h2>
        </div>
        <div className="choice-entry-grid">
          <a href="#outcome-categories"><span>01</span><h3>I need a complete solution.</h3><p>Start with the business outcome and review a defined package scope.</p></a>
          <Link href="/services"><span>02</span><h3>I need a specific service.</h3><p>Choose design, development, integration, testing or another focused capability.</p></Link>
          <a href="#solution-guide"><span>03</span><h3>Help me choose.</h3><p>Answer four short questions and receive a useful starting recommendation.</p></a>
        </div>
      </section>

      <section className="section solution-category-section" id="outcome-categories">
        <div className="container">
          <div className="solution-category-heading">
            <span className="section-kicker">Start with what you need</span>
            <h2>One clear outcome before the technical details.</h2>
            <p>From a personal website to a complex business system, choose a starting point that fits your goal. We will confirm the scope, delivery plan and cost before work begins.</p>
          </div>
          <div className="solution-category-grid">
            {solutionCategories.map((category) => (
              <Link
                className={category.id === activeCategory.id ? "solution-category-card active" : "solution-category-card"}
                href={`/solutions?category=${category.id}#packages`}
                aria-current={category.id === activeCategory.id ? "true" : undefined}
                key={category.id}
              >
                <span>{category.number}</span>
                <h3>{category.title}</h3>
                <p>{category.summary}</p>
                <b>{category.action} <ArrowIcon /></b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section container package-catalogue" id="packages">
        <div className="package-catalogue-heading">
          <div>
            <span className="section-kicker">Selected outcome</span>
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

      <div className="dark-section solution-guide-shell">
        <div className="container"><SolutionGuide /></div>
      </div>

      <section className="page-cta container">
        <span className="section-kicker">Need a different combination?</span>
        <h2>Start with the outcome. We will shape the right scope around it.</h2>
        <Link className="button" href="/contact?selection=Not%20sure%20yet">Discuss your requirement <ArrowIcon /></Link>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsSchema) }} />
    </>
  );
}
