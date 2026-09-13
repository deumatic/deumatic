import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/Header";
import { principles, team } from "@/data/site";

export const metadata: Metadata = {
  title: "About Our Digital Product and Software Team",
  description: "Learn about Deumatic, a global software and digital product team connecting strategy, UX design, engineering, AI automation, cloud platforms and growth.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero container">
        <span className="section-kicker">About Deumatic</span>
        <h1>Technology is most valuable when the whole product makes sense.</h1>
        <p>Established in May 2026, Deumatic brings different disciplines around the same table so product decisions remain connected from first conversation to production release.</p>
      </section>

      <section className="about-statement dark-section">
        <div className="container about-statement-grid">
          <span className="section-kicker light">Why we exist</span>
          <div>
            <h2>Good ideas often lose strength between strategy, design, development and growth.</h2>
            <p>We built Deumatic around a simpler model: one focused team, shared context and direct responsibility for turning business requirements into useful digital experiences.</p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="principles-heading">
          <span className="section-kicker">Operating principles</span>
          <h2>The standards behind how we make decisions.</h2>
        </div>
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <article key={principle.title}><span>0{index + 1}</span><h3>{principle.title}</h3><p>{principle.text}</p></article>
          ))}
        </div>
      </section>

      <section className="section team-page" id="team">
        <div className="container">
          <div className="principles-heading">
            <span className="section-kicker">Team</span>
            <h2>Four perspectives around one product outcome.</h2>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <article className="team-card" key={member.name}>
                <div className={`team-monogram tone-${index + 1}`} aria-hidden="true"><span>{member.initials}</span></div>
                <div className="team-card-copy">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p>{member.bio}</p>
                  <a className="text-link" href={member.linkedIn} target="_blank" rel="noreferrer">View LinkedIn <ArrowIcon /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta container">
        <span className="section-kicker">Work with Deumatic</span>
        <h2>Bring the ambition. We will help turn it into a focused build.</h2>
        <Link className="button" href="/contact">Start a conversation <ArrowIcon /></Link>
      </section>
    </>
  );
}
