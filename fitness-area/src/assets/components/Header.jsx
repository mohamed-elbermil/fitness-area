import React, { useState, useEffect } from "react";
import Button from "./Button";
import "../style/Header.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function AnimatedNumber({ value, duration = 1200, suffix = "" }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);
    let frame;
    function animate() {
      start += increment;
      if (start < value) {
        setDisplay(Math.floor(start));
        frame = requestAnimationFrame(animate);
      } else {
        setDisplay(value);
      }
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, [value, duration]);
  return <p>{display}{suffix}</p>;
}

function Header() {
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
              <Link to="/formules" className="btn btn-subscribe">S'inscrire</Link>
              <a
                href="https://www.instagram.com/fitnessarea8/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-join"
              >
                Rejoindre la communauté
              </a>
            </div>
          </div>
          <div className="banner-right">
            <div className="infos">
              <AnimatedNumber value={90} duration={1200} suffix="%" />
              <span>de satisfaction</span>
            </div>
            <div className="infos">
              <AnimatedNumber value={16} duration={1200} />
              <span>ans d'expérience</span>
            </div>
            <div className="infos">
              <AnimatedNumber value={150} duration={1200} />
              <span>tasse de café</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
