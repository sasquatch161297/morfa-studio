"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  ["Collections", "/collections"],
  ["Objects", "/objects"],
  ["Journal", "/journal"],
  ["Studio", "/studio"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const overlaysDarkMedia = pathname === "/" || /^\/collections\/[^/]+$/.test(pathname) || pathname === "/objects" || pathname === "/editions";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${overlaysDarkMedia && !scrolled && !open ? "on-dark" : ""} ${scrolled || open ? "is-solid" : ""}`}>
      <Link className="wordmark" href="/" aria-label="MORFA Studio home">MORFA<span>Studio</span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, href]) => <Link className={pathname.startsWith(href) ? "active" : ""} key={href} href={href}>{label}</Link>)}
      </nav>
      <Link className="contact-link" href="/contact">Contact <span aria-hidden="true">↗</span></Link>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu">
        <span>{open ? "Close" : "Menu"}</span>
      </button>
      <div className={`mobile-menu ${open ? "is-open" : ""}`} id="mobile-menu">
        <nav aria-label="Mobile navigation">
          {links.map(([label, href], index) => <Link key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</Link>)}
          <Link href="/contact" onClick={() => setOpen(false)}><span>05</span>Contact</Link>
        </nav>
        <p>Design studio — Costa Rica</p>
      </div>
    </header>
  );
}
