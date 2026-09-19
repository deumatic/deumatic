import Link from "next/link";
import { ArrowIcon } from "@/components/Header";
import { getIndividualService, type SolutionPackage } from "@/data/commercial";

export function SolutionPackageCard({ item }: { item: SolutionPackage }) {
  const enquiryHref = `/contact?selection=${encodeURIComponent(item.title)}&context=${encodeURIComponent(`Interested in the ${item.title} solution.`)}`;

  return (
    <article className="solution-package-card" id={`package-${item.id}`}>
      <div className="solution-package-summary">
        <div>
          <span className="solution-package-fit">Best for</span>
          <p>{item.audience}</p>
        </div>
        <h3>{item.title}</h3>
        <p className="solution-customer-need">“{item.customerNeed}”</p>
        <p>{item.summary}</p>
        <ul>
          {item.scope.slice(0, 4).map((scopeItem) => <li key={scopeItem}>{scopeItem}</li>)}
        </ul>
        <div className="solution-package-meta">
          <span>{item.pricing.label}</span>
          <span>{item.timeline}</span>
          {item.geography === "Saudi Arabia" ? <strong>Available in Saudi Arabia</strong> : null}
        </div>
      </div>

      <details className="solution-package-details">
        <summary>View complete starting scope <i aria-hidden="true" /></summary>
        <div className="solution-package-detail-grid">
          <DetailBlock title="What you receive" items={item.scope} />
          <DetailBlock title="What we need from you" items={item.clientInputs} />
          <DetailBlock title="Not included" items={item.exclusions} />
          <DetailBlock title="What affects scope and schedule" items={item.priceFactors} />
          <DetailBlock title="Optional additions" items={item.addOns} />
          <div className="solution-detail-block">
            <h4>What happens after launch</h4>
            <p>{item.afterLaunch}</p>
          </div>
        </div>
        <div className="solution-related-services">
          <span>Related individual services</span>
          <div>
            {item.relatedServiceIds.map((id) => {
              const relatedService = getIndividualService(id);
              return relatedService ? (
                <Link href={`/services?category=${relatedService.categoryId}#service-${relatedService.id}`} key={id}>
                  {relatedService.title}
                </Link>
              ) : null;
            })}
          </div>
        </div>
        <Link className="button" href={enquiryHref}>{item.cta} <ArrowIcon /></Link>
      </details>
    </article>
  );
}

function DetailBlock({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="solution-detail-block">
      <h4>{title}</h4>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}
