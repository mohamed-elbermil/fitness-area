import React, { useState } from "react";
import "../style/Header.css";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  const navLinks = (
    <>
      <Link to="/">Accueil</Link>
      <Link to="/formules">Formules</Link>
      <Link to="/coaching">Coaching</Link>
      <Link to="/concept">Concept</Link>
    </>
  );

  return (
    <>
      <nav className="nav">
        <div
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === "Enter" && toggleMobileMenu()}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <div className="nav-left">{navLinks}</div>
        <a href="#">
          <img src="/logo.png" alt="Logo Fitness-Area" className="logo" />
        </a>
        <div className="nav-right">
          <Button variant="member">Contact</Button>
        </div>
      </nav>

      {isOpen && (
        <div className="mobile-nav-dropdown">
          {navLinks}
          <Button variant="member">Contact</Button>
        </div>
      )}
    </>
  );
}
