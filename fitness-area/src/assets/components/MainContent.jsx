import React from "react";
import "../style/MainContent.css";
import InscriptionSection from "./InscriptionSection";
import Button from "./Button";

const boxes = [
  "Boxe training",
  "Cardio intense",
  "Yoga détente",
  "Musculation avancée",
  "Cours collectif",
  "Aqua fitness",
];

// Array con URLs de sitios fitness válidos (puedes cambiarlos si quieres)
const fitnessLinks = [
  "https://www.bodybuilding.com/",
  "https://www.menshealth.com/",
  "https://www.yogajournal.com/",
  "https://www.fitnessmagazine.com/",
  "https://www.shape.com/",
  "https://www.acefitness.org/",
];

function MainContent() {
  return (
    <>
      {/* SECTION COACHS SPORTIFS */}
      <section className="coachs-section">
        <div className="coachs-header">
          <h2><span className="coachs-title-bold">Nos</span> <span className="coachs-title-italic">coachs sportifs</span></h2>
          <a href="/coaching" style={{textDecoration: 'none'}}>
            <Button variant="member">Découvrez nos coachs</Button>
          </a>
        </div>
        <div className="coachs-grid">
          <div className="coach-card">
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" alt="Coach Thomas" />
            <div className="coach-info">
              <span className="coach-name">THOMAS</span>
              <span className="coach-role">Coach sportif</span>
              <span className="coach-exp">3 ans d'expériences</span>
            </div>
          </div>
          <div className="coach-card">
            <img src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg" alt="Coach Sarah" />
            <div className="coach-info">
              <span className="coach-name">SARAH</span>
              <span className="coach-role">Nutritionniste</span>
              <span className="coach-exp">3 ans d'expériences</span>
            </div>
          </div>
          <div className="coach-card">
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" alt="Coach Thomas 2" />
            <div className="coach-info">
              <span className="coach-name">THOMAS</span>
              <span className="coach-role">Coach sportif</span>
              <span className="coach-exp">3 ans d'expériences</span>
            </div>
          </div>
          <div className="coach-card coach-card-empty"></div>
          <div className="coach-card coach-card-empty"></div>
        </div>
      </section>

      {/* SECTION INSCRIPTION SIMPLE déplacée en bas */}
      <InscriptionSection />
    </>
  );
}

export default MainContent;
