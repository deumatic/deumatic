"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-shell">
        <Link className="brand-logo-frame" href="/" aria-label="Deumatic home">
          <Image
            className="brand-logo-image"
            src="/brand/deumatic-logo.png"
            alt="Deumatic"
            fill
            priority
            sizes="172px"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link className={pathname === item.href ? "nav-link active" : "nav-link"} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="button button-small header-cta" href="/contact">
          Start a project
          <ArrowIcon />
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <nav id="mobile-navigation" className={open ? "mobile-nav open" : "mobile-nav"} aria-label="Mobile navigation">
        {navItems.map((item, index) => (
          <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
            <span>0{index + 1}</span>
            {item.label}
          </Link>
        ))}
        <Link className="button" href="/contact" onClick={() => setOpen(false)}>Start a project <ArrowIcon /></Link>
      </nav>
    </header>
  );
}

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20">
      <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
