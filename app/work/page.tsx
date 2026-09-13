import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/Header";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Software Projects and Product Case Studies",
  description: "Explore Deumatic software and AI projects, including SupportOS, with product context, architecture, technology choices and real interface captures.",
  alternates: { canonical: "/work" }
};

const workSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareSourceCode",
      name: "SupportOS",
      description: "A human-controlled AI support operations system with approved-source retrieval, operator review and controlled Chatwoot delivery.",
      codeRepository: "https://github.com/datawithusman/deumatic-supportos",
      programmingLanguage: ["TypeScript", "Python"],
      runtimePlatform: "Web",
      license: "https://opensource.org/license/mit",
      creator: { "@id": `${site.url}/#organization` }
    },
    {
      "@type": "CreativeWork",
      name: "Camsort AI",
      description: "A team-built multimodal surveillance prioritization prototype for identifying camera feeds that may require operator attention.",
      creator: { "@id": `${site.url}/#organization` },
      keywords: ["Multimodal AI", "Gemini API", "FastAPI", "Vultr"]
    }
  ]
};

export default function WorkPage() {
  return (
    <>
      <section className="page-hero container">
        <span className="section-kicker">Selected work</span>
        <h1>Work we can explain, demonstrate and stand behind.</h1>
        <p>Our case studies focus on the problem, the system and the decisions behind the build. We do not publish invented outcomes or unsupported metrics.</p>
      </section>

      <section className="product-case container" id="supportos">
        <div className="product-case-hero">
          <div className="product-case-title">
            <span className="section-kicker light">Deumatic product / AI-assisted operations</span>
            <h2>SupportOS</h2>
            <p>Human-controlled AI support operations that help teams classify conversations, retrieve approved knowledge and prepare cited responses without allowing AI to contact customers on its own.</p>
            <a
              className="product-case-link"
              href="https://github.com/datawithusman/deumatic-supportos"
              target="_blank"
              rel="noreferrer"
            >
              Explore the source code <ArrowIcon />
            </a>
          </div>
          <div className="product-case-brief">
            <div><span>Problem</span><p>Slow, repetitive support preparation and risky unsupported automation.</p></div>
            <div><span>Response</span><p>A review-first workflow with evidence, auditability and controlled delivery.</p></div>
            <div><span>Product stage</span><p>Working MVP with a tested operator workflow.</p></div>
          </div>
        </div>

        <div className="product-case-story">
          <article><span>01</span><h3>Prioritize the queue</h3><p>Incoming Chatwoot conversations are classified by intent, urgency, sentiment and operational signals so operators can focus attention deliberately.</p></article>
          <article><span>02</span><h3>Ground every draft</h3><p>Hybrid retrieval searches only approved knowledge. Generated responses carry the exact evidence excerpts an operator needs to verify the answer.</p></article>
          <article><span>03</span><h3>Keep people in control</h3><p>Operators can edit, save, approve or reject. Approval records the decision but sending still requires a separate explicit confirmation.</p></article>
          <article><span>04</span><h3>Fail safely</h3><p>Durable events, bounded retries and provider receipts prevent silent loss. Ambiguous delivery results are blocked from blind retry.</p></article>
        </div>

        <figure className="product-shot product-shot-lead">
          <Image
            src="/work/supportos/supportos-review-queue.png"
            alt="SupportOS review queue showing AI triage, an editable response and its evidence trail"
            width={1440}
            height={1263}
            priority
          />
          <figcaption><span>01 / Review workspace</span><p>One decision surface connects customer context, AI triage, response preparation and source verification.</p></figcaption>
        </figure>

        <div className="product-shot-grid">
          <figure className="product-shot">
            <Image
              src="/work/supportos/supportos-approved-delivery.png"
              alt="SupportOS approved response with a separate Chatwoot delivery confirmation"
              width={1440}
              height={1450}
            />
            <figcaption><span>02 / Controlled delivery</span><p>An approved response still needs destination verification before it can be sent.</p></figcaption>
          </figure>
          <figure className="product-shot">
            <Image
              src="/work/supportos/supportos-evidence-gap.png"
              alt="SupportOS state showing that no approved source was found"
              width={1440}
              height={1199}
            />
            <figcaption><span>03 / Evidence boundary</span><p>When approved knowledge is missing, the system stops and directs the case to human research.</p></figcaption>
          </figure>
        </div>

        <div className="product-case-stack">
          <div><span className="section-kicker">System architecture</span><h3>Designed as a complete operational path, not an isolated AI feature.</h3></div>
          <ul className="tag-list" aria-label="SupportOS technologies">
            {['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'pgvector', 'Redis Streams', 'Gemini', 'Chatwoot'].map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
        <p className="case-note">Screens show labeled demo records created for product presentation. No customer adoption or performance metrics are claimed.</p>
      </section>

      <section className="case-study container">
        <div className="case-study-hero">
          <div>
            <span className="section-kicker light">Team-built prototype / Multimodal AI</span>
            <h2>Camsort AI</h2>
            <p>A surveillance prioritization prototype designed to help operators identify camera feeds that may deserve attention first.</p>
          </div>
          <div className="case-tech">
            <span>Technology</span>
            <p>Gemini API, Python, FastAPI, PostgreSQL, JavaScript and Vultr</p>
          </div>
        </div>

        <div className="case-study-grid">
          <article><span>01</span><h3>The problem</h3><p>Monitoring several camera feeds at once can create attention overload. The team explored how multimodal analysis could support prioritization without presenting the model as a replacement for human judgment.</p></article>
          <article><span>02</span><h3>The response</h3><p>The prototype analyzes camera snapshots with Gemini, assigns a risk level and surfaces the feeds that may require operator review.</p></article>
          <article><span>03</span><h3>The system</h3><p>A FastAPI service coordinates analysis and application workflows, while the frontend presents camera status, priorities and review signals in an operational interface.</p></article>
          <article><span>04</span><h3>The delivery</h3><p>The project included coordinated delivery planning, frontend work, Vultr integration and a working product demonstration prepared by the team.</p></article>
        </div>

        <div className="case-interface" aria-label="Conceptual representation of the Camsort AI operator interface">
          <div className="interface-header"><span>CAMSORT / REVIEW QUEUE</span><span>PROTOTYPE</span></div>
          <div className="interface-layout">
            <div className="interface-cameras">
              {[
                ["CAMERA 01", "Review", "high"],
                ["CAMERA 02", "Normal", "low"],
                ["CAMERA 03", "Monitor", "medium"],
                ["CAMERA 04", "Normal", "low"]
              ].map(([name, status, tone]) => (
                <div className={`interface-camera ${tone}`} key={name}><span>{name}</span><b>{status}</b><i /></div>
              ))}
            </div>
            <div className="interface-queue">
              <span>PRIORITY ORDER</span>
              <ol><li><b>01</b><span>Camera 01</span><em>Review</em></li><li><b>02</b><span>Camera 03</span><em>Monitor</em></li><li><b>03</b><span>Camera 02</span><em>Normal</em></li></ol>
            </div>
          </div>
        </div>

        <p className="case-note">Interface shown above is a designed representation for the case study, not a claim about production deployment.</p>
      </section>

      <section className="page-cta container">
        <span className="section-kicker">Have a product or workflow challenge?</span>
        <h2>Let&apos;s understand the decision before choosing the technology.</h2>
        <Link className="button" href="/contact">Start a project <ArrowIcon /></Link>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workSchema) }} />
    </>
  );
}
