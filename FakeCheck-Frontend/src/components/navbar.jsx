import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <div className="logoText">FakeCheck</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="desktopNavigation">
          <ul className="navigationList">
            <li className="navigationItem">
              <Link to="/" className="navigationLink">
                Inicio
              </Link>
            </li>
            <li className="navigationItem">
              <Link to="/fakeCheck" className="navigationLink">
                Detector
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA Button 
        <div className="ctaSection">
          <Link to="/fakeCheck" className="ctaButton">
            <span className="ctaText">Try Detector</span>
            <div className="ctaGlow"></div>
          </Link>
        </div>*/}
        <div></div>

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
                Inicio
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
                Acerca de
              </a>
            </li>
            <li className="mobileNavigationItem">
              <a
                href="#contact"
                className="mobileNavigationLink"
                onClick={toggleMenu}
              >
                Contacto
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
