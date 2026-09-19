"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowIcon } from "@/components/Header";
import { individualServices, serviceCategories, solutionPackages } from "@/data/commercial";

export function ServiceCatalogue({ initialCategory = "design" }: { initialCategory?: string }) {
  const validInitialCategory = serviceCategories.some((category) => category.id === initialCategory) ? initialCategory : serviceCategories[0].id;
  const [activeCategory, setActiveCategory] = useState(validInitialCategory);
  const [query, setQuery] = useState("");

  const visibleServices = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return individualServices.filter((item) => item.categoryId === activeCategory);

    return individualServices.filter((item) => {
      const haystack = [item.title, item.summary, ...item.deliverables, ...item.searchTerms].join(" ").toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [activeCategory, query]);

  const activeCategoryData = serviceCategories.find((category) => category.id === activeCategory) ?? serviceCategories[0];

  return (
    <div className="service-catalogue" id="service-catalogue">
      <div className="service-catalogue-tools">
        <label className="service-search">
          <span>Search services</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try portfolio, frontend, cashier or AI assistant"
          />
        </label>
        <div className="service-category-tabs" aria-label="Service categories">
          {serviceCategories.map((category) => (
            <button
              className={category.id === activeCategory && !query ? "active" : ""}
              type="button"
              aria-pressed={category.id === activeCategory && !query}
              onClick={() => { setActiveCategory(category.id); setQuery(""); }}
              key={category.id}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      <div className="service-catalogue-heading" aria-live="polite">
        <div>
          <span className="section-kicker">{query ? "Search results" : activeCategoryData.title}</span>
          <h2>{query ? `${visibleServices.length} matching services` : activeCategoryData.summary}</h2>
        </div>
        <p>Only need one part? Every service can be scoped separately or combined where the work overlaps.</p>
      </div>

      {visibleServices.length ? (
        <div className="individual-service-grid">
          {visibleServices.map((item) => {
            const relatedSolution = solutionPackages.find((solution) => solution.id === item.relatedSolutionId);
            const enquiryHref = `/contact?selection=${encodeURIComponent(item.title)}&context=${encodeURIComponent(`Interested in the ${item.title} service.`)}`;
            return (
              <article className="individual-service-card" id={`service-${item.id}`} key={item.id}>
                <div className="individual-service-topline">
                  <span>{serviceCategories.find((category) => category.id === item.categoryId)?.title}</span>
                  {item.geography === "Saudi Arabia" ? <strong>Saudi Arabia only</strong> : null}
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <details>
                  <summary>Typical deliverables <i aria-hidden="true" /></summary>
                  <ul>{item.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}</ul>
                </details>
                <div className="individual-service-footer">
                  <span>{item.pricing.label}</span>
                  {relatedSolution ? (
                    <Link href={`/solutions?category=${relatedSolution.categoryId}#package-${relatedSolution.id}`}>
                      Related: {relatedSolution.title}
                    </Link>
                  ) : null}
                  <Link className="text-link" href={enquiryHref}>Request this service <ArrowIcon /></Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="service-empty-state">
          <h3>No exact match yet.</h3>
          <p>Try a broader term or tell us what outcome you need.</p>
          <Link className="button" href="/contact?selection=Not%20sure%20yet">Help me choose <ArrowIcon /></Link>
        </div>
      )}
    </div>
  );
}
