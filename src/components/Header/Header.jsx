import { useEffect, useState } from 'react';
import "../../styles/Header.css";
import rgLogo from '../../assets/logo/rgLogo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Close menu on mobile after click
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Section becomes active when 50% visible
      }
    );

    sections.forEach((section) => {
      if (section.id) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.id) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <nav className="header">
      {/* Logo and Title */}
      <div className="header-title">
        <img src={rgLogo} alt="Logo" className="site-logo" />
        <div className="title-text">
          <a className="home" href="#home">Recruiter's Gear</a>
        </div>
      </div>

      {/* Mobile Toggle */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <div className={`nav-wrapper ${menuOpen ? 'open' : ''}`}>
        <ul className="navbar">
          {["home", "features", "WhoWeServe", "WhyUs", "about", "contact"].map((section) => (
            <li className="navitem" key={section}>
              <button
                className={`navlink ${activeSection === section ? "active" : ""}`}
                onClick={() => handleNavClick(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
