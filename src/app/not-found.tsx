import Link from "next/link";

export default function NotFound() { return <section className="page-hero dark"><p className="kicker">404 — Unobserved</p><div className="page-hero-grid"><h1>Not found.</h1><p>This object has not entered the archive. <Link className="text-link" href="/">Return to MORFA <span>↗</span></Link></p></div></section>; }
