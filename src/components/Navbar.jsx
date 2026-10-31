import { useEffect, useState } from "react";
import { navLinks, site } from "../data/config";
import Icon from "./Icon";

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach((l) => { const el = document.getElementById(l.id); if (el) obs.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); obs.disconnect(); };
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <nav className="navbar__inner container" aria-label="Main">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          {site.name}<span className="brand__dot" />
        </a>
        <ul className={`navbar__links ${open ? "is-open" : ""}`} id="nav-links">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={active === l.id ? "is-active" : ""} aria-current={active === l.id ? "page" : undefined} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar__actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            <Icon name={theme === "dark" ? "sun" : "moon"} />
          </button>
          <button className="icon-btn navbar__toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="nav-links" aria-label={open ? "Close menu" : "Open menu"}>
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>
    </header>
  );
}
