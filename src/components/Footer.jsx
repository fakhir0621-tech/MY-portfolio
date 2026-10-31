import { navLinks, site } from "../data/config";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="brand">{site.name}<span className="brand__dot" /></p>
          <p className="footer__muted">{site.role}<br />{site.location}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="footer__links">
            {navLinks.map((l) => <li key={l.id}><a href={`#${l.id}`}>{l.label}</a></li>)}
          </ul>
        </nav>
        <div className="footer__social">
          <a className="icon-btn" href={site.mailto} aria-label="Email"><Icon name="mail" /></a>
          <a className="icon-btn" href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><Icon name="whatsapp" /></a>
          <a className="icon-btn" href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /></a>
          {site.linkedin && <a className="icon-btn" href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>}
        </div>
      </div>
      <p className="footer__copy container">&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}
