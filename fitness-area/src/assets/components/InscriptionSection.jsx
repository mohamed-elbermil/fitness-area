import React from "react";

export default function InscriptionSection() {
  return (
    <section className="inscription-section">
      <h2 className="inscription-title">
        <span className="inscription-bold">S’inscrire</span> <span className="inscription-italic">n’a jamais été aussi simple</span>
      </h2>
      <div className="inscription-cards">
        <div className="inscription-card">
          <div className="inscription-icon-square">
            <i className="fa-solid fa-link"></i>
          </div>
          <div className="inscription-card-title">UN ABONNEMENT</div>
          <div className="inscription-card-desc">sans engagement annuel</div>
        </div>
        <div className="inscription-card">
          <div className="inscription-icon-square">
            <i className="fa-solid fa-children"></i>
          </div>
          <div className="inscription-card-title">LE PARTAGE DE TA CARTE</div>
          <div className="inscription-card-desc">avec un membre du domicile*<br/><span className='inscription-card-desc-mini'>*sous réserve d’un abonnement FITPRO</span></div>
        </div>
        <div className="inscription-card">
          <div className="inscription-icon-square">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="inscription-card-title">UN ACCÈS AU CLUB</div>
          <div className="inscription-card-desc">de façon illimitée</div>
        </div>
        <div className="inscription-card">
          <div className="inscription-icon-square">
            <i className="fa-solid fa-mobile-screen-button"></i>
          </div>
          <div className="inscription-card-title">UNE APPLICATION MOBILE</div>
          <div className="inscription-card-desc">pour tes programmes d’entraînement et ton suivi</div>
        </div>
      </div>
      <a href="/contact" className="inscription-btn">JE M’INSCRIS</a>
    </section>
  );
} 