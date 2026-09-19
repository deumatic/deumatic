import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";
import { solutionCategories } from "@/data/commercial";
import { engagementModels, faqs, process, services, team } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <span className="section-kicker">Digital product and technology partner</span>
          <h1>We turn ambitious ideas into digital products people rely on.</h1>
          <p>
            Deumatic brings product strategy, experience design, software engineering, AI automation and digital growth into one focused team, helping companies launch new products, modernize existing systems and create better digital experiences.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/contact">Start a project <ArrowIcon /></Link>
            <Link className="text-link" href="/work">Explore our work <ArrowIcon /></Link>
          </div>
        </div>
        <HeroSystem />
      </section>

      <div className="capability-rail" aria-label="Core capabilities">
        <div>
          {Array.from({ length: 2 }).map((_, group) => (
            <span className="rail-group" key={group} aria-hidden={group === 1}>
              <span>Strategy</span><i />
              <span>Experience</span><i />
              <span>Software</span><i />
              <span>AI & Automation</span><i />
              <span>Growth</span><i />
            </span>
          ))}
        </div>
      </div>

      <section className="section container value-section">
        <SectionHeading
          kicker="One connected partner"
          title="The disciplines your product needs, working as one system."
          intro="Strong products are not created by strategy, design or engineering in isolation. We connect the decisions across all three, then support adoption and continuous improvement."
        />
        <div className="value-grid">
          <article className="value-lead">
            <span className="value-index">01 / 03</span>
            <h3>Less translation. More progress.</h3>
            <p>Product thinking stays connected to the design and code, reducing avoidable handoffs and keeping delivery focused on the original business need.</p>
          </article>
          <article>
            <span className="value-index">02 / 03</span>
            <h3>Senior thinking where it matters.</h3>
            <p>We bring the right discipline into each decision instead of forcing every problem through the same technical solution.</p>
          </article>
          <article>
            <span className="value-index">03 / 03</span>
            <h3>Built for the next release.</h3>
            <p>We make deliberate experience and architecture choices so the product can evolve without unnecessary rework.</p>
          </article>
        </div>
      </section>

      <section className="section home-outcomes">
        <div className="container">
          <SectionHeading
            kicker="Solutions"
            title="What would you like to build or improve?"
            intro="Choose a complete solution, get help with one part, or let us help you define the right starting point."
          />
          <div className="home-outcome-grid">
            {solutionCategories.map((category) => (
              <Link href={`/solutions?category=${category.id}#packages`} key={category.id}>
                <span>{category.number}</span>
                <h3>{category.title}</h3>
                <p>{category.summary}</p>
                <b>Explore solution <ArrowIcon /></b>
              </Link>
            ))}
          </div>
          <div className="home-outcome-footer">
            <Link className="text-link" href="/services">Already know what you need? Browse individual services <ArrowIcon /></Link>
            <Link className="text-link" href="/solutions#solution-guide">Not sure? Use the solution guide <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="section dark-section" id="services">
        <div className="container">
          <SectionHeading
            kicker="Capabilities"
            title="From first decision to production release."
            intro="Engage Deumatic for one focused capability or bring the full team together around a complete product outcome."
            inverted
          />
          <div className="service-list">
            {services.map((service) => (
              <Link className="service-row" href={`/services#${service.slug}`} key={service.slug}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.homeDescription ?? service.short}</p>
                <span className="service-arrow"><ArrowIcon /></span>
              </Link>
            ))}
          </div>
          <div className="ai-capability-callout">
            <p>From RAG applications and AI agents to computer vision, model deployment and inference optimization, we build AI as part of a complete product and operational system.</p>
            <Link className="text-link" href="/services/ai-ml-engineering">Explore AI &amp; ML Engineering <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="section container work-feature">
        <SectionHeading
          kicker="Selected work"
          title="A real system, shown with honest context."
          intro="We only publish work the team can explain and defend. Additional case studies will be added after their evidence and presentation assets are ready."
        />
        <article className="case-card">
          <div className="case-visual case-visual-supportos">
            <span className="case-label">AI-assisted support operations</span>
            <Image
              src="/work/supportos/supportos-review-queue.png"
              alt="SupportOS human review workspace"
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
            />
            <div className="case-visual-caption"><span>HUMAN CONTROL</span><b>ON</b></div>
          </div>
          <div className="case-copy">
            <span className="case-meta">Deumatic product / Working MVP</span>
            <h3>SupportOS</h3>
            <p>An evidence-grounded support operations system where AI prepares the work and a human retains every customer-facing decision.</p>
            <div className="case-facts">
              <div><span>Challenge</span><p>Reduce repetitive support preparation without introducing autonomous reply risk.</p></div>
              <div><span>System</span><p>Durable intake, AI triage, approved-source RAG, human review and controlled delivery.</p></div>
            </div>
            <ul className="tag-list" aria-label="SupportOS technologies">
              {['Next.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Gemini', 'Chatwoot'].map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            <Link className="text-link" href="/work#supportos">Read the case study <ArrowIcon /></Link>
          </div>
        </article>
      </section>

      <section className="section process-section">
        <div className="container">
          <SectionHeading
            kicker="How we work"
            title="Clear decisions at every stage."
            intro="A structured delivery path keeps the team aligned while leaving enough room to learn and improve."
          />
          <ol className="process-list">
            {process.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section container">
        <SectionHeading
          kicker="Ways to work together"
          title="An engagement shaped around the decision in front of you."
          intro="Start with a focused sprint, deliver a complete project or extend your team with the capability you need."
        />
        <div className="engagement-grid">
          {engagementModels.map((model, index) => (
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

      <section className="section team-preview" id="team">
        <div className="container">
          <SectionHeading
            kicker="The team"
            title="Different disciplines. Shared responsibility."
            intro="A focused team spanning product strategy, experience design, software architecture, intelligent automation and advanced AI engineering."
          />
          <div className="team-grid">
            {team.map((member, index) => (
              <article className="team-card" key={member.name}>
                <div className={`team-monogram tone-${index + 1}`} aria-hidden="true"><span>{member.initials}</span></div>
                <div className="team-card-copy">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p>{member.bio}</p>
                  <a className="text-link" href={member.linkedIn} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container faq-section">
        <SectionHeading kicker="Common questions" title="A few useful answers before we talk." />
        <div className="faq-list">
          {faqs.map((item, index) => (
            <details key={item.question}>
              <summary><span>0{index + 1}</span>{item.question}<i aria-hidden="true" /></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

function HeroSystem() {
  return (
    <div className="hero-system" aria-label="Deumatic capabilities connect strategy, design, engineering and growth">
      <div className="system-topline"><span>DEUMATIC / DELIVERY SYSTEM</span><span>01.00</span></div>
      <div className="system-orbit">
        <span className="orbit-label label-one">Strategy</span>
        <span className="orbit-label label-two">Experience</span>
        <span className="orbit-label label-three">Engineering</span>
        <span className="orbit-label label-four">Growth</span>
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit-core"><span>Build</span><b>What<br />matters</b></div>
      </div>
      <div className="system-footer"><span>Ideas enter here</span><i /><span>Products leave ready to evolve</span></div>
    </div>
  );
}
