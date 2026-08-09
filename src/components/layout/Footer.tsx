import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link className="footer-mark" href="/">MORFA</Link>
        <p className="footer-tagline">Formed by nature.<br />Made for living.</p>
      </div>
      <div className="footer-links">
        <div><span>Navigate</span><Link href="/collections">Collections</Link><Link href="/objects">Objects</Link><Link href="/journal">Journal</Link><Link href="/studio">Studio</Link><Link href="/contact">Contact</Link></div>
        <div><span>Follow</span><a href="#">Instagram</a><a href="#">Pinterest</a></div>
      </div>
      <div className="footer-bottom"><p>Designed in Costa Rica.</p><p>© {new Date().getFullYear()} MORFA Studio</p></div>
    </footer>
  );
}
