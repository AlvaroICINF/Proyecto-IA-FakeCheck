import React, { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbarContainer">
      <div className="navbarWrapper">
        {/* Logo Section */}
        <div className="logoSection">
          <div className="logoIcon">
            <div className="logoCircle"></div>
            <div className="logoText">DeepGuard</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="desktopNavigation">
          <ul className="navigationList">
            <li className="navigationItem">
              <a href="#home" className="navigationLink">
                Home
              </a>
            </li>
            <li className="navigationItem">
              <a href="#detector" className="navigationLink">
                Detector
              </a>
            </li>
            <li className="navigationItem">
              <a href="#about" className="navigationLink">
                About
              </a>
            </li>
            <li className="navigationItem">
              <a href="#contact" className="navigationLink">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="ctaSection">
          <button className="ctaButton">
            <span className="ctaText">Try Detector</span>
            <div className="ctaGlow"></div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobileMenuButton" onClick={toggleMenu}>
          <span
            className={`hamburgerLine ${isMenuOpen ? "hamburgerActive" : ""}`}
          ></span>
          <span
            className={`hamburgerLine ${isMenuOpen ? "hamburgerActive" : ""}`}
          ></span>
          <span
            className={`hamburgerLine ${isMenuOpen ? "hamburgerActive" : ""}`}
          ></span>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobileMenu ${isMenuOpen ? "mobileMenuOpen" : ""}`}>
        <div className="mobileMenuContent">
          <ul className="mobileNavigationList">
            <li className="mobileNavigationItem">
              <a
                href="#home"
                className="mobileNavigationLink"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li className="mobileNavigationItem">
              <a
                href="#detector"
                className="mobileNavigationLink"
                onClick={toggleMenu}
              >
                Detector
              </a>
            </li>
            <li className="mobileNavigationItem">
              <a
                href="#about"
                className="mobileNavigationLink"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li className="mobileNavigationItem">
              <a
                href="#contact"
                className="mobileNavigationLink"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
          <button className="mobileCtaButton" onClick={toggleMenu}>
            <span className="mobileCtaText">Try Detector</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
