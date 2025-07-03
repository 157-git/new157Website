import { useState } from 'react';
import "../../styles/Header.css";
import rgLogo from '../../assets/logo/rgLogo.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="header">
      {/* Left: Logo + Title */}
      <div className="header-title">
        <img
          src={rgLogo}
          alt="Logo"
          className="site-logo"
        />
        <div className="title-text">
          <a className="home" href="#home">157 Industries</a>
          <h6 className="subtitle">Symbol Of Uniqueness</h6>
        </div>
      </div>

      {/* Toggle Button (Visible on Mobile) */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Right: Nav Items */}
      <div className={`nav-wrapper ${menuOpen ? 'open' : ''}`}>
        <ul className="navbar">
          {["home", "features", "buildfor", "whyweare", "about", "footer"].map((section) => (
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
