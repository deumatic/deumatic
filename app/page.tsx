import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/Header";
import { solutionCategories } from "@/data/commercial";
import { engagementModels, faqs, process, services, team } from "@/data/site";

const ArrowButton = () => <span className="v2-button-icon"><ArrowIcon /></span>;

export default function HomePage() {
  return (
    <div className="home-page-v2">
      <section className="home-hero-v2 container">
        <div className="home-hero-copy-v2">
          <span className="v2-kicker">Digital product and technology partner</span>
          <h1>We turn ambitious ideas into <span>digital products</span> people rely on.</h1>
          <p>Deumatic brings product strategy, experience design, software engineering, AI automation and digital growth into one focused team, helping companies launch new products, modernize existing systems and create better digital experiences.</p>
          <div className="v2-actions">
            <Link className="v2-primary-button" href="/contact"><span>Start a project</span><ArrowButton /></Link>
            <Link className="v2-secondary-button" href="/work"><span>Explore our work</span><ArrowIcon /></Link>
          </div>
        </div>
        <HeroVisual />
      </section>

      <div className="capability-rail-v2" aria-label="Core capabilities">
        <div className="capability-track-v2">
          {Array.from({ length: 4 }).map((_, group) => (
            <span className="capability-group-v2" key={group} aria-hidden={group > 0}>
              <span>Strategy</span><i /><span>Experience</span><i /><span>Software</span><i /><span>AI &amp; Automation</span><i /><span>Growth</span><i />
            </span>
          ))}
        </div>
      </div>

      <section className="home-section-v2 container value-section-v2">
        <div className="v2-section-heading">
          <div><span className="v2-kicker">One connected partner</span><h2>The disciplines your product needs, <span>working as one system.</span></h2></div>
          <p>Strong products are not created by strategy, design or engineering in isolation. We connect the decisions across all three, then support adoption and continuous improvement.</p>
        </div>
        <div className="value-system-v2">
          <div className="value-track-v2" aria-hidden="true" />
          <div className="value-grid-v2">
            <article className="value-card-v2"><span className="value-index-v2">01 / 03</span><i aria-hidden="true" /><h3>Less translation. More progress.</h3><p>Product thinking stays connected to the design and code, reducing avoidable handoffs and keeping delivery focused on the original business need.</p></article>
            <article className="value-card-v2"><span className="value-index-v2">02 / 03</span><i aria-hidden="true" /><h3>Senior thinking where it matters.</h3><p>We bring the right discipline into each decision instead of forcing every problem through the same technical solution.</p></article>
            <article className="value-card-v2"><span className="value-index-v2">03 / 03</span><i aria-hidden="true" /><h3>Built for the next release.</h3><p>We make deliberate experience and architecture choices so the product can evolve without unnecessary rework.</p></article>
          </div>
        </div>
      </section>

      <section className="home-section-v2 container solutions-section-v2">
        <div className="v2-section-heading">
          <div><span className="v2-kicker">Solutions</span><h2>What would you like to <span>build or improve?</span></h2></div>
          <p>Choose a complete solution, get help with one part, or let us help you define the right starting point.</p>
        </div>
        <div className="solutions-board-v2">
          {solutionCategories.map((category) => (
            <Link className="solution-card-v2" href={`/solutions?category=${category.id}#packages`} key={category.id}>
              <span className="solution-number-v2">{category.number}</span>
              <div><h3>{category.title}</h3><p>{category.summary}</p></div>
              <ArrowButton />
            </Link>
          ))}
        </div>
        <div className="solutions-footer-v2">
          <Link href="/services">Already know what you need? Browse individual services <ArrowIcon /></Link>
          <Link href="/solutions#solution-guide">Not sure? Use the solution guide <ArrowIcon /></Link>
        </div>
      </section>

      <section className="home-section-v2 container capabilities-section-v2" id="services">
        <div className="v2-section-heading">
          <div><span className="v2-kicker">Capabilities</span><h2>From first decision to <span>production release.</span></h2></div>
          <p>Engage Deumatic for one focused capability or bring the full team together around a complete product outcome.</p>
        </div>
        <div className="capabilities-list-v2">
          {services.map((service) => (
            <Link className="capability-row-v2" href={`/services#${service.slug}`} key={service.slug}>
              <span>{service.number}</span><h3>{service.title}</h3><p>{service.homeDescription ?? service.short}</p><ArrowButton />
            </Link>
          ))}
        </div>
        <div className="ai-callout-v2">
          <p>From RAG applications and AI agents to computer vision, model deployment and inference optimization, we build AI as part of a complete product and operational system.</p>
          <Link className="v2-primary-button" href="/services/ai-ml-engineering"><span>Explore AI &amp; ML Engineering</span><ArrowButton /></Link>
        </div>
      </section>

      <section className="home-section-v2 container work-section-v2">
        <div className="v2-section-heading">
          <div><span className="v2-kicker">Selected work</span><h2>A real system, shown with <span>honest context.</span></h2></div>
          <p>We only publish work the team can explain and defend. Additional case studies will be added after their evidence and presentation assets are ready.</p>
        </div>
        <article className="work-case-v2">
          <div className="work-visual-v2">
            <span className="work-label-v2">AI-assisted support operations</span>
            <div className="work-browser-v2">
              <div className="work-browser-bar-v2"><i /><i /><i /><span>SupportOS review workspace</span></div>
              <div className="work-image-v2"><Image src="/work/supportos/supportos-review-queue.png" alt="SupportOS human review workspace" fill sizes="(max-width: 980px) 100vw, 58vw" /></div>
            </div>
            <div className="work-control-v2"><span>Human control</span><b>On</b></div>
          </div>
          <div className="work-copy-v2">
            <span className="work-meta-v2">Deumatic product / Working MVP</span><h3>SupportOS</h3>
            <p className="work-lead-v2">An evidence-grounded support operations system where AI prepares the work and a human retains every customer-facing decision.</p>
            <div className="work-facts-v2"><div><span>Challenge</span><p>Reduce repetitive support preparation without introducing autonomous reply risk.</p></div><div><span>System</span><p>Durable intake, AI triage, approved-source RAG, human review and controlled delivery.</p></div></div>
            <ul className="work-tags-v2" aria-label="SupportOS technologies">{["Next.js", "FastAPI", "PostgreSQL", "Redis", "Gemini", "Chatwoot"].map((tag) => <li key={tag}>{tag}</li>)}</ul>
            <Link className="work-link-v2" href="/work#supportos"><span>Read the case study</span><ArrowButton /></Link>
          </div>
        </article>
      </section>

      <section className="home-section-v2 container process-section-v2">
        <div className="v2-section-heading"><div><span className="v2-kicker">How we work</span><h2>Clear decisions at <span>every stage.</span></h2></div><p>A structured delivery path keeps the team aligned while leaving enough room to learn and improve.</p></div>
        <ol className="process-board-v2">{process.map((step) => <li key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p><i aria-hidden="true" /></li>)}</ol>
      </section>

      <section className="home-section-v2 container engagement-section-v2">
        <div className="v2-section-heading"><div><span className="v2-kicker">Ways to work together</span><h2>An engagement shaped around the <span>decision in front of you.</span></h2></div><p>Start with a focused sprint, deliver a complete project or extend your team with the capability you need.</p></div>
        <div className="engagement-grid-v2">{engagementModels.map((model, index) => <article key={model.title}><div><span>0{index + 1}</span><p>{model.label}</p></div><h3>{model.title}</h3><i /><p>{model.text}</p><b aria-hidden="true" /></article>)}</div>
      </section>

      <section className="home-section-v2 container team-section-v2" id="team">
        <div className="v2-section-heading"><div><span className="v2-kicker">The team</span><h2>Different disciplines. <span>Shared responsibility.</span></h2></div><p>A focused team spanning product strategy, experience design, software architecture, intelligent automation and advanced AI engineering.</p></div>
        <div className="team-grid-v2">{team.map((member) => <article key={member.name}><div className="team-monogram-v2" aria-hidden="true"><span>{member.initials}</span></div><h3>{member.name}</h3><p className="team-role-v2">{member.role}</p><p>{member.bio}</p><a href={member.linkedIn} target="_blank" rel="noreferrer"><span>LinkedIn</span><ArrowButton /></a></article>)}</div>
      </section>

      <section className="home-section-v2 container faq-section-v2">
        <div className="faq-heading-v2"><span className="v2-kicker">Common questions</span><h2>A few useful answers <span>before we talk.</span></h2></div>
        <div className="faq-list-v2">{faqs.map((item, index) => <details key={item.question} open={index === 0 ? true : undefined}><summary><span>0{index + 1}</span><b>{item.question}</b><i aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div>
      </section>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual-v2" aria-hidden="true">
      <div className="hero-motion-orbit-v3" />
      <div className="hero-motion-board-v3">
        <div className="hero-motion-header-v3"><span>DEUMATIC / PRODUCT SYSTEM</span><i /><i /><i /></div>
        <div className="hero-motion-content-v3">
          <span className="hero-motion-label-v3">CONNECTED DELIVERY</span>
          <div className="hero-motion-stages-v3">
            <span><b>01</b>Strategy</span>
            <span><b>02</b>Experience</span>
            <span><b>03</b>Software</span>
            <span><b>04</b>AI &amp; automation</span>
          </div>
          <div className="hero-motion-progress-v3"><i /></div>
          <strong>Digital product</strong>
        </div>
      </div>
      <span className="hero-motion-signal-v3" />
    </div>
  );
}
