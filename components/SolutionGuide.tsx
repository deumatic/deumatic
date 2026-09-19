"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowIcon } from "@/components/Header";

type Answers = {
  goal?: string;
  stage?: string;
  scope?: string;
  requirement?: string;
};

type Recommendation = {
  title: string;
  reason: string;
  scope: string;
  quote: string;
  href: string;
  alternative: { title: string; href: string };
};

const questions = [
  {
    key: "goal" as const,
    title: "What are you trying to achieve?",
    options: [
      ["portfolio", "Show my CV and work"],
      ["website", "Build or improve a company website"],
      ["store", "Sell products online"],
      ["product", "Launch a web or mobile product"],
      ["enterprise", "Replace or connect company-wide systems"],
      ["automation", "Reduce manual work or use AI"],
      ["data", "Organize reporting or business data"],
      ["pos", "Set up or improve a cashier system"],
      ["service", "Buy one technical service"]
    ]
  },
  {
    key: "stage" as const,
    title: "Is this new or an improvement to an existing system?",
    options: [["new", "A new project"], ["existing", "Improve an existing system"], ["unsure", "Not sure yet"]]
  },
  {
    key: "scope" as const,
    title: "Do you need a complete solution or one part?",
    options: [["complete", "A complete solution"], ["part", "One specific part"], ["unsure", "Help me define that"]]
  },
  {
    key: "requirement" as const,
    title: "Is there an important requirement?",
    options: [
      ["bilingual", "Arabic and English"],
      ["payments", "Payments or checkout"],
      ["branches", "Multiple branches"],
      ["existing-data", "Existing data or migration"],
      ["designs-ready", "Approved designs are ready"],
      ["none", "Nothing specific yet"]
    ]
  }
] as const;

export function SolutionGuide() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const complete = step >= questions.length;
  const recommendation = useMemo(() => recommend(answers), [answers]);

  function answer(value: string) {
    const question = questions[step];
    if (!question) return;
    setAnswers((current) => ({ ...current, [question.key]: value }));
    setStep((current) => current + 1);
  }

  function restart() {
    setAnswers({});
    setStep(0);
  }

  const enquiryHref = `/contact?selection=${encodeURIComponent(recommendation.title)}&context=${encodeURIComponent("Recommended by the solution guide.")}`;

  return (
    <section className="solution-guide" id="solution-guide" aria-labelledby="solution-guide-title">
      <div className="solution-guide-header">
        <div>
          <span className="section-kicker light">Help me choose</span>
          <h2 id="solution-guide-title">A useful starting point in four short questions.</h2>
        </div>
        <p>No email is required. This guide recommends a starting point, not a binding quotation.</p>
      </div>

      {!complete ? (
        <div className="solution-guide-panel">
          <div className="solution-guide-progress" aria-label={`Question ${step + 1} of ${questions.length}`}>
            <span>0{step + 1} / 0{questions.length}</span>
            <div><i style={{ width: `${((step + 1) / questions.length) * 100}%` }} /></div>
          </div>
          <fieldset>
            <legend>{questions[step].title}</legend>
            <div className="solution-guide-options">
              {questions[step].options.map(([value, label]) => (
                <button type="button" onClick={() => answer(value)} key={value}>{label}<ArrowIcon /></button>
              ))}
            </div>
          </fieldset>
          <div className="solution-guide-controls">
            <button type="button" disabled={step === 0} onClick={() => setStep((current) => Math.max(0, current - 1))}>Back</button>
            <button type="button" onClick={() => setStep((current) => current + 1)}>Skip this question</button>
          </div>
        </div>
      ) : (
        <div className="solution-guide-result" aria-live="polite">
          <div>
            <span className="solution-package-fit">Recommended starting point</span>
            <h3>{recommendation.title}</h3>
            <p>{recommendation.reason}</p>
          </div>
          <div className="solution-guide-result-detail">
            <span>Relevant scope</span>
            <p>{recommendation.scope}</p>
            <strong>{recommendation.quote}</strong>
          </div>
          <div className="solution-guide-result-actions">
            <Link className="button button-light" href={recommendation.href}>View details <ArrowIcon /></Link>
            <Link className="text-link ai-hero-work-link" href={enquiryHref}>Enquire about this <ArrowIcon /></Link>
          </div>
          <p className="solution-guide-alternative">Alternative: <Link href={recommendation.alternative.href}>{recommendation.alternative.title}</Link></p>
          <button className="solution-guide-restart" type="button" onClick={restart}>Start again</button>
        </div>
      )}
    </section>
  );
}

function recommend(answers: Answers): Recommendation {
  if (answers.scope === "part" || answers.goal === "service") {
    if (answers.requirement === "designs-ready") return serviceRecommendation("Frontend Development", "Approved designs make focused frontend implementation the clearest starting point.", "Responsive implementation, reusable components and browser validation.", "engineering", "frontend-development", "QA Test Cycle", "platform", "qa-test-cycle");
    if (answers.requirement === "payments") return serviceRecommendation("Supported Payment Integration", "You need one defined technical connection rather than a complete product package.", "Provider review, integration and payment-flow testing.", "engineering", "payment-integration", "Third-Party Integration", "engineering", "third-party-integration");
    if (answers.goal === "data" || answers.requirement === "existing-data") return serviceRecommendation("Data Integration", "A bounded source-to-destination workflow is a practical first step for existing business data.", "Source mapping, pipeline implementation and validation.", "data", "data-integration", "Data-Quality Review", "data", "data-quality-review");
    if (answers.goal === "automation") return serviceRecommendation("Workflow Assessment", "A short workflow review will show what can be automated safely before tools are selected.", "Current-state map, opportunities and recommendation report.", "ai", "workflow-assessment", "Single Automation", "ai", "single-automation");
    if (answers.goal === "enterprise") return serviceRecommendation("Software Architecture Review", "A focused architecture review can clarify the highest-risk technical decision before a larger programme begins.", "System review, technical risk register and modernization roadmap.", "platform", "architecture-review", "Enterprise Platforms & Modernization", "products", "enterprise-platform", true);
    if (answers.goal === "pos") return serviceRecommendation("POS Software Supply & Licensing", "You can request only the POS component you need while keeping compatibility visible.", "Requirement matching, licence options and configuration plan.", "pos", "pos-software", "New POS Setup", "pos", "new-pos-setup", true);
    return serviceRecommendation("UX Review", "A focused review is a low-friction way to improve an existing experience without buying a complete rebuild.", "Key-screen review, prioritized findings and recommendations.", "design", "ux-review", "Product Blueprint", "products", "product-blueprint", true);
  }

  if (answers.goal === "portfolio") return packageRecommendation("Personal Portfolio", "A focused portfolio directly supports your goal of presenting experience and selected work.", "One responsive site with core profile, work and contact content.", "websites", "personal-portfolio", "Business Website", "websites", "business-website");
  if (answers.goal === "website") {
    if (answers.requirement === "bilingual") return packageRecommendation("Bilingual Business Website", "Arabic and English need deliberate RTL and LTR design from the beginning.", "Bilingual layouts, language navigation, metadata and editor handover.", "websites", "bilingual-business-website", "Business Website", "websites", "business-website");
    return packageRecommendation("Business Website", "This gives your company a clear, credible path from services to enquiry.", "Responsive company pages, enquiry flow, technical SEO and deployment.", "websites", "business-website", "Landing Page", "websites", "landing-page");
  }
  if (answers.goal === "store") return packageRecommendation("Platform Store Launch", "A hosted-commerce launch is the clearest starting point for selling products online.", "Store configuration, catalogue, supported payment and shipping setup, and handover.", "commerce", "platform-store-launch", "Integrated Online Store", "commerce", "integrated-online-store");
  if (answers.goal === "product") {
    if (answers.stage === "existing") return packageRecommendation("Web Product MVP", "A focused implementation phase fits an existing product direction with a defined primary workflow.", "Frontend, backend, database, testing and deployment for a bounded first release.", "products", "web-product-mvp", "Product Blueprint", "products", "product-blueprint");
    return packageRecommendation("Product Blueprint", "A blueprint reduces product and engineering uncertainty before a larger build begins.", "Discovery, prioritized requirements, prototype and phased technical plan.", "products", "product-blueprint", "Web Product MVP", "products", "web-product-mvp");
  }
  if (answers.goal === "enterprise") return packageRecommendation("Enterprise Platforms & Modernization", "A phased discovery is the responsible starting point for multiple systems, integrations or departments.", "Architecture and operational discovery, dependency mapping and a phased implementation proposal.", "products", "enterprise-platform", "Product Blueprint", "products", "product-blueprint");
  if (answers.goal === "automation") return packageRecommendation("Workflow Automation", "A bounded workflow can remove repetitive work without introducing AI where it is not needed.", "Workflow mapping, supported integrations, failure handling and handover.", "automation-ai", "workflow-automation", "AI Opportunity Assessment", "automation-ai", "ai-opportunity-assessment");
  if (answers.goal === "data") {
    if (answers.requirement === "existing-data") return packageRecommendation("Business Reporting Dashboard", "Accessible existing data makes focused reporting a useful first outcome.", "Source definition, agreed preparation, dashboard views and handover.", "data", "reporting-dashboard", "Data Foundation & Governance", "data", "data-foundation");
    return packageRecommendation("Data Foundation & Governance", "Ownership and quality need to be clear before larger reporting or AI investments.", "Inventory, ownership, quality rules and a prioritized roadmap.", "data", "data-foundation", "Business Reporting Dashboard", "data", "reporting-dashboard");
  }
  if (answers.goal === "pos") {
    if (answers.requirement === "branches") return packageRecommendation("Multi-Branch POS", "Multiple locations need coordinated terminal, reporting and rollout planning.", "Branch planning, central configuration, rollout and an itemized proposal.", "pos", "multi-branch-pos", "New POS Setup", "pos", "new-pos-setup");
    if (answers.stage === "existing") return packageRecommendation("Upgrade My Existing POS", "Your current system should be reviewed for compatibility before replacement or migration work is promised.", "System review, compatibility options and a separately itemized upgrade plan.", "pos", "upgrade-pos", "New POS Setup", "pos", "new-pos-setup");
    return packageRecommendation("New POS Setup", "This combines the software, compatible hardware and implementation path a new Saudi location needs.", "Assessment, itemized equipment, configuration, installation, training and support planning.", "pos", "new-pos-setup", "Upgrade My Existing POS", "pos", "upgrade-pos");
  }

  return packageRecommendation("Product Blueprint", "When the goal is still forming, a focused blueprint establishes the smallest sensible next step.", "Discovery, prioritized requirements, prototype and technical direction.", "products", "product-blueprint", "Product Discovery", "design", "product-discovery", true);
}

function packageRecommendation(title: string, reason: string, scope: string, category: string, id: string, alternativeTitle: string, alternativeCategory: string, alternativeId: string, alternativeIsService = false): Recommendation {
  return {
    title,
    reason,
    scope,
    quote: title.includes("AI") ? "Quoted after technical assessment" : title.includes("Enterprise") ? "Phased scope and proposal" : title.includes("POS") ? "Itemized quote" : "Request a scoped quote",
    href: `/solutions?category=${category}#package-${id}`,
    alternative: { title: alternativeTitle, href: alternativeIsService ? `/services?category=${alternativeCategory}#service-${alternativeId}` : `/solutions?category=${alternativeCategory}#package-${alternativeId}` }
  };
}

function serviceRecommendation(title: string, reason: string, scope: string, category: string, id: string, alternativeTitle: string, alternativeCategory: string, alternativeId: string, alternativeIsPackage = false): Recommendation {
  return {
    title,
    reason,
    scope,
    quote: title.includes("AI") ? "Quoted after technical assessment" : title.includes("POS") ? "Itemized quote" : "Request a scoped quote",
    href: `/services?category=${category}#service-${id}`,
    alternative: { title: alternativeTitle, href: alternativeIsPackage ? `/solutions?category=${alternativeCategory}#package-${alternativeId}` : `/services?category=${alternativeCategory}#service-${alternativeId}` }
  };
}
