import React, { useState } from "react";
import { Check, Users, Waves, Dumbbell, Heart } from "lucide-react";
import "../assets/style/Formule.css";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/Footer";
import banner1 from "../assets/images/banner-1.jpg";

const plans = [
  {
    key: "liberte",
    label: "Liberté",
    badge: "Populaire",
    price: 54,
    pricePeriod: "/mois",
    priceWeek: 12.5,
    desc: "Idéal pour un accès illimité à toutes les installations et cours.",
    services: [
      "Accès illimité au club",
      "+ de 160 cours collectifs/semaine",
      "Espace bien-être hammam/sauna",
      "Boxing, aquabiking, yoga, LesMills...",
      "Studio de cycling",
      "Piscine & cours aquatiques",
      "Équipements high-tech",
      "Cadre design & convivial"
    ],
    cta: "Souscrire",
    highlight: true
  },
  {
    key: "express",
    label: "Express",
    badge: "Économique",
    price: 49,
    pricePeriod: "/mois",
    priceWeek: 11.5,
    desc: "Accès soumis à des horaires spécifiques, idéal pour les matinaux ou les horaires creux.",
    services: [
      "Accès selon horaires spécifiques",
      "+ de 160 cours collectifs/semaine",
      "Espace bien-être hammam/sauna",
      "Boxing, aquabiking, yoga, LesMills...",
      "Studio de cycling",
      "Piscine & cours aquatiques",
      "Équipements high-tech",
      "Cadre design & convivial"
    ],
    cta: "Souscrire",
    highlight: false
  }
];

export default function Formule() {
  const [selectedPeriod, setSelectedPeriod] = useState("mois");

  return (
    <>
      <Navbar />
      {/* Nouvelle bannière immersive */}
      <div className="formule-hero-banner">
        <img src={banner1} alt="Salle de sport" className="formule-hero-img" />
        <div className="formule-hero-overlay" />
        <div className="formule-hero-content">
          <h1 className="formule-hero-title">Nos forfaits</h1>
          <p className="formule-hero-subtitle">Trouvez le forfait sport qui vous correspond</p>
        </div>
      </div>
      <section className="formule-gradient-bg">
        <div className="formule-center-block">
          <h1 className="formule-main-title">Choisissez votre formule idéale !</h1>
          <p className="formule-main-subtitle">
            Sélectionnez la formule qui vous correspond le mieux et profitez du meilleur du fitness à Lyon.
          </p>
          {/* Retrait du toggle group */}
          <div className="formule-cards-row">
            {plans.map((plan) => (
              <div key={plan.key} className={`formule-pricing-card${plan.highlight ? " highlight" : ""}`}>
                <div className="formule-card-badge">{plan.badge}</div>
                <div className="formule-card-title">{plan.label}</div>
                <div className="formule-card-desc">{plan.desc}</div>
                <div className="formule-card-price-block">
                  <span className="formule-card-price">
                    {plan.price}
                  </span>
                  <span className="formule-card-price-period">
                    {plan.pricePeriod}
                  </span>
                </div>
                <ul className="formule-card-services">
                  {plan.services.map((s, i) => (
                    <li key={i} className="formule-card-service">
                      <Check size={18} className="formule-card-service-icon" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <button className="formule-card-cta">{plan.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
