import React, { useState } from "react";
import { Check, Star, MapPin, Clock, Users, Waves, Dumbbell, Heart, Sparkles } from "lucide-react";
import "../assets/style/Formule.css";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/Footer";

export default function Formule() {
  const [location, setLocation] = useState("hors_paris");
  const [selectedPlan, setSelectedPlan] = useState("liberte");

  const pricing = {
    hors_paris: {
      liberte: { weekly: 12.5, monthly: 54 },
      express: { weekly: 11.5, monthly: 49 },
    },
    paris: {
      liberte: { weekly: 14.5, monthly: 62 },
      express: { weekly: 13.0, monthly: 55 },
    },
  };

  const benefits = [
    { icon: Users, text: "+ de 160 cours collectifs par semaine" },
    { icon: Waves, text: "Espace bien-être avec hammam et sauna" },
    { icon: Dumbbell, text: "Activités : boxing, aquabiking, yoga, LesMills..." },
    { icon: Heart, text: "Studio de cycling" },
    { icon: Waves, text: "Club avec piscine et cours aquatiques" },
    { icon: Dumbbell, text: "Équipements high-tech & connectés" },
    { icon: Heart, text: "Un cadre d'entraînement design et convivial" },
  ];

  const currentPricing = pricing[location][selectedPlan];

  return (
    <>
    <Navbar/>
    <section className="formule-section">
      {/* Background decorative elements */}
      <div className="background-top-right"></div>
      <div className="background-bottom-left"></div>



      {/* Main Content Section */}
      <div className="form-content max-width">
        <div className="form-container">
          {/* Location Tabs */}
          <div className="location-tabs" role="tablist" aria-label="Choix de la localisation">
            <div className="location-tabs-inner">
              {["hors_paris", "paris"].map((loc) => (
                <button
                  key={loc}
                  role="tab"
                  aria-selected={location === loc}
                  aria-controls={`${loc}-panel`}
                  id={`${loc}-tab`}
                  className={`location-tab ${location === loc ? "active" : ""}`}
                  onClick={() => setLocation(loc)}
                >
                  {loc === "hors_paris" ? "Lyon" : "PARIS"}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Hero */}
          <div
            className="pricing-hero"
            id={`${location}-panel`}
            role="tabpanel"
            aria-labelledby={`${location}-tab`}
          >
            <p className="pricing-subtitle">À partir de</p>
            <div className="weekly-price">
              <span className="price-amount">{currentPricing.weekly.toFixed(2)}€</span>
              <span className="price-period"> /semaine</span>
            </div>
            <div className="monthly-price">
              <Check className="icon check" />
              soit {currentPricing.monthly}€/mois**
            </div>
          </div>

          {/* Benefits Section */}
          <div className="benefits-section">
            <h3 className="benefits-title">Tout ce qui est inclus dans votre abonnement</h3>
            <div className="benefits-grid">
              {benefits.map(({ icon: Icon, text }, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon-wrapper">
                    <Icon className="icon benefit-icon" />
                  </div>
                  <p className="benefit-text">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Plans Section */}
          <div className="plans-section">
            <h3 className="plans-title">2 FORMULES AU CHOIX</h3>

            <div className="plans-grid">
              {["liberte", "express"].map((plan) => {
                const isSelected = selectedPlan === plan;
                const price = pricing[location][plan];
                return (
                  <label
                    key={plan}
                    htmlFor={plan}
                    className={`plan-card ${isSelected ? "selected" : ""}`}
                  >
                    <input
                      type="radio"
                      id={plan}
                      name="plan"
                      className="plan-input"
                      checked={isSelected}
                      onChange={() => setSelectedPlan(plan)}
                    />
                    <div className="plan-header">
                      <div className={`plan-label ${isSelected ? "selected-label" : ""}`}>
                        <div className={`plan-dot ${isSelected ? "selected-dot" : ""}`}></div>
                        {plan === "liberte" ? "Formule Liberté" : "Formule Express"}
                      </div>
                      <div className={`plan-weekly-price ${isSelected ? "selected-price" : ""}`}>
                        {price.weekly.toFixed(2)}€
                      </div>
                      <div className={`plan-monthly-price ${isSelected ? "selected-monthly" : ""}`}>
                        soit {price.monthly}€/mois**
                      </div>
                    </div>

                    <p className={`plan-description ${isSelected ? "selected-desc" : ""}`}>
                      {plan === "liberte"
                        ? "Accès illimité durant les horaires d'ouverture du club"
                        : "Accès soumis à des horaires spécifiques*"}
                    </p>

                    {plan === "express" && (
                      <div className="express-hours">
                        <Clock className={`icon clock-icon ${isSelected ? "selected-desc" : ""}`} />
                        <p className={`express-text ${isSelected ? "selected-desc" : ""}`}>
                          Accès soumis à des horaires spécifiques*
                        </p>
                      </div>
                    )}

                    <div className={`exclusive-offer ${isSelected ? "selected-offer" : ""}`}>
                      🎁 Offre exclusive : Votre été offert
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <button
              type="button"
              className="cta-button"
              onClick={() => alert("Inscription en cours...")}
            >
              <Check className="icon check cta-icon" />
              JE VEUX M'INSCRIRE
              <Sparkles className="icon sparkles cta-icon" />
            </button>

            <div className="cta-info">
              <p>**Par prélèvement mensuel + licence à partir de 29€ + dépôt de garantie de 2 mois.</p>
              <p>
                * Formule express :{" "}
                <button
                  className="link-button"
                  onClick={() => alert("Horaires spécifiques disponibles")}
                >
                  découvrez les horaires spécifiques ici
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
