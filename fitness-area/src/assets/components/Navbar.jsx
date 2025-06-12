import React, { useState } from "react";
import "../style/Header.css";
import Button from "./Button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  const navLinks = (
    <>
      <a href="#">Accueil</a>
      <a href="#">Formules</a>
      <a href="#">Coaching</a>
      <a href="#">Concept</a>
    </>
  );

  return (
    <>
      <nav className="nav">
        {/* Burger menu (mobile) */}
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        {/* Left: Nav links (desktop) */}
        <div className="nav-left">{navLinks}</div>

        {/* Center: Logo */}
        <img src="/logo.png" alt="Logo Fitness-Area" className="logo" />

        {/* Right: Member button */}
        <div className="nav-right">
          <Button variant="member">Espace membre</Button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="mobile-nav-dropdown">
          {navLinks}
          <Button variant="member">Espace membre</Button>
        </div>
      )}
    </>
  );
}
