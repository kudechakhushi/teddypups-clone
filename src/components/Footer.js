import Link from "next/link";
import { FOOTER_LINKS, SITE, YEAR, wa } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Home, at last.</h3>
          <p>TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies, offering premium services and worldwide shipping.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            {FOOTER_LINKS.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Say hello</h4>
          <ul>
            <li><a href={wa()} target="_blank" rel="noopener noreferrer">WhatsApp {SITE.phone}</a></li>
            <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li>{SITE.address}</li>
          </ul>
          <div className="socials">
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {YEAR} {SITE.name}</span>
        <span className="hand">every puppy is family</span>
      </div>
    </footer>
  );
}