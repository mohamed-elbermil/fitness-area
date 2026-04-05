import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../style/Header.css";

function AnimatedNumber({ value, duration = 1600, suffix = "" }) {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started) return;
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
  }, [value, duration, started]);

  return (
    <span className="stat-number">
      {display}
      {suffix}
    </span>
  );
}

function Header() {
  return (
    <header>
      <div className="nav-banner">
        <Navbar />
        <div className="banner">
          <div className="banner-overlay" />

          {/* Hero Content */}
          <motion.div
            className="banner-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.div
              className="banner-badge"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="badge-dot" />
              Séance de découverte offerte pour tout nouveau membre
            </motion.div>

            <h1>
              Transforme ton corps.
              <br />
              <span className="h1-accent">Dépasse tes limites.</span>
            </h1>

            <p className="banner-sub">
              16 ans d'expertise · Coachs certifiés · +160 cours/semaine
              <br />
              Tes résultats commencent aujourd'hui.
            </p>

            <motion.div
              className="btn-both"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link to="/contact" className="btn-primary-hero">
                Séance découverte OFFERTE →
              </Link>
              <Link to="/formules" className="btn-secondary-hero">
                Voir les formules
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Bar */}
          <div className="banner-stats">
            {[
              { value: 90, suffix: "%", label: "de satisfaction" },
              { value: 16, suffix: "", label: "ans d'expertise" },
              { value: 500, suffix: "+", label: "membres actifs" },
            ].map((stat, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="stat-divider" />}
                <motion.div
                  className="stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.15, duration: 0.6 }}
                >
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={1600}
                  />
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
