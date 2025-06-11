import React, { useState, useEffect } from "react";
import Button from "./Button";
import "../style/Header.css";
import Navbar from "../components/Navbar";

function Header() {
  const [scrolling, setScrolling] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 500) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <div className="nav-banner">
        <Navbar />
        <div className="banner">
          <div className="banner-left">
            <h1>L'effort d'aujourd'hui, la force de demain</h1>
            <p>
              Dans notre salle, chaque séance te rapproche un peu plus de ton
              potentiel.
            </p>
            <div className="btn-both">
              <Button variant="subscribe">S'inscrire</Button>
              <Button variant="join">Rejoindre la communauté</Button>
            </div>
          </div>
          <div className="banner-right">
            <div className="infos">
              <p>90%</p>
              <span>de satisfaction</span>
            </div>
            <div className="infos">
              <p>16</p>
              <span>ans d'expérience</span>
            </div>
            <div className="infos">
              <p>150</p>
              <span>tasse de café</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
