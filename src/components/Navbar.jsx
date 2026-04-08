import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const hashLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Packages", href: "#packages" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname]);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          ONRAI STUDIO
          <span className="navbar__logo-dot" aria-hidden="true" />
        </Link>

        <nav className="navbar__links" aria-label="Main navigation">
          {isHome && hashLinks.map((l) => (
            <a key={l.label} href={l.href} className="navbar__link">
              {l.label}
            </a>
          ))}
          <Link to="/about" className="navbar__link">About</Link>
          {isHome ? (
            <a href="#contact">
              <button className="navbar__cta">Get a Quote</button>
            </a>
          ) : (
            <Link to="/#contact">
              <button className="navbar__cta">Get a Quote</button>
            </Link>
          )}
        </nav>

        <button
          className={`navbar__hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        className={`navbar__mobile${menuOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        {isHome && hashLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <Link to="/about" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        {isHome ? (
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            <button className="navbar__mobile-cta">Get a Quote</button>
          </a>
        ) : (
          <Link to="/#contact" onClick={() => setMenuOpen(false)}>
            <button className="navbar__mobile-cta">Get a Quote</button>
          </Link>
        )}
      </nav>
    </header>
  );
}
