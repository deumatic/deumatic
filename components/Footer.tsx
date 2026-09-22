import Image from "next/image";
import Link from "next/link";
import { navItems, site } from "@/data/site";
import { ArrowIcon } from "@/components/Header";

export function Footer() {
  return (
    <footer className="site-footer footer-v2">
      <div className="footer-top container">
        <div className="footer-intro">
          <span className="v2-kicker">Have something worth building?</span>
          <h2>Let&apos;s make the <span>next decision count.</span></h2>
          <Link className="v2-primary-button" href="/contact"><span>Start a project</span><span className="v2-button-icon"><ArrowIcon /></span></Link>
        </div>
        <div className="footer-links">
          <div>
            <p>Navigate</p>
            {navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </div>
          <div>
            <p>Connect</p>
            <a className="footer-email-v2" href={`mailto:${site.email}`}>{site.email}</a>
            <Link href="/about#team">Team on LinkedIn</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <Link className="brand-logo-frame footer-brand-logo" href="/" aria-label="Deumatic home">
          <Image
            className="brand-logo-image"
            src="/brand/deumatic-logo.png"
            alt="Deumatic"
            fill
            sizes="160px"
          />
        </Link>
        <p>Digital products, engineered with purpose.</p>
        <p>© {new Date().getFullYear()} Deumatic</p>
      </div>
    </footer>
  );
}
