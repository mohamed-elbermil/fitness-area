import React, { useState } from "react";

export default function SubscriptionBanner() {
  const [location, setLocation] = useState("hors_paris");
  const [selectedPlan, setSelectedPlan] = useState("liberte");

  return (
    <section className="w-full font-sans">
      <div className="grid lg:grid-cols-2">
        {/* Left Section */}
        <div className="relative h-[700px]">
          <img
            src="https://www.wellness-sportclub.fr/wp-content/uploads/2025/04/ruddy-aspect-ratio-900-700-1.jpg"
            alt="Abonnement"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent text-white p-8 flex flex-col justify-center">
            <p className="text-sm uppercase mb-2">Abonnements & offres</p>
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              Découvrez nos formules<br />d’abonnement
            </h1>
            <p className="text-base max-w-md">
              Des formules <strong>tout inclus et sans engagement</strong> pour accéder au sport premium et à des services incomparables.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-[#111] text-white px-6 py-10 lg:rounded-bl-[20px] lg:rounded-tl-[20px]">
          {/* Tabs */}
          <div className="flex justify-center mb-6 gap-2">
            <button
              className={`px-5 py-2 text-sm rounded-full border transition ${
                location === "hors_paris"
                  ? "bg-white text-black"
                  : "text-white border-white"
              }`}
              onClick={() => setLocation("hors_paris")}
            >
              HORS PARIS
            </button>
            <button
              className={`px-5 py-2 text-sm rounded-full border transition ${
                location === "paris"
                  ? "bg-white text-black"
                  : "text-white border-white"
              }`}
              onClick={() => setLocation("paris")}
            >
              PARIS
            </button>
          </div>

          {/* Pricing Summary */}
          <div className="text-center mb-6">
            <p className="text-sm uppercase">À partir de</p>
            <div className="text-5xl font-bold">11.50€<span className="text-lg font-light"> /semaine</span></div>
            <p className="mt-2 font-semibold bg-white text-black inline-block px-4 py-1 rounded-full text-sm">soit 49€/mois**</p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-2 text-sm gap-y-2 mb-4 px-2">
            <p>✔️ + de 160 cours collectifs par semaine</p>
            <p>✔️ Espace bien-être avec hammam et sauna</p>
            <p>✔️ Activités : boxing, aquabiking, yoga, LesMills...</p>
            <p>✔️ Studio de cycling</p>
            <p>✔️ Club avec piscine et cours aquatiques</p>
            <p>✔️ Équipements high-tech & connectés</p>
            <p className="col-span-2">✔️ Un cadre d'entraînement design et convivial</p>
          </div>

          <p className="text-center text-sm italic mt-4 mb-8">
            “Élue meilleure enseigne 2024 par le magazine Capital”
          </p>

          {/* Offers */}
          <div className="text-white text-center text-lg font-semibold mb-4">2 FORMULES AU CHOIX</div>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {/* Liberté */}
            <label
              className={`p-4 rounded-xl border ${
                selectedPlan === "liberte" ? "bg-white text-black shadow-xl" : "bg-[#222] border-gray-600"
              } cursor-pointer`}
              onClick={() => setSelectedPlan("liberte")}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-bold uppercase mb-1 text-red-600">Formule Liberté</p>
                  <p className="text-sm">Accès illimité durant les horaires d'ouverture du club</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold">12.50€</div>
                  <div className="text-xs">soit 54€/mois**</div>
                </div>
              </div>
              <div className="text-xs mt-2 text-red-600 font-semibold">Offre exclusive : Votre été offert (1)</div>
            </label>

            {/* Express */}
            <label
              className={`p-4 rounded-xl border ${
                selectedPlan === "express" ? "bg-white text-black shadow-xl" : "bg-[#222] border-gray-600"
              } cursor-pointer`}
              onClick={() => setSelectedPlan("express")}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-bold uppercase mb-1 text-red-600">Formule Express</p>
                  <p className="text-sm">Accès soumis à des horaires spécifiques*</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold">11.50€</div>
                  <div className="text-xs">soit 49€/mois**</div>
                </div>
              </div>
              <div className="text-xs mt-2 text-red-600 font-semibold">Offre exclusive : Votre été offert (2)</div>
            </label>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-red-700 transition"
            >
              JE VEUX M'INSCRIRE
            </a>
            <p className="text-xs text-gray-400 mt-2">
              **Par prélèvement mensuel + licence à partir de 29€ + dépôt de garantie de 2 mois.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              * Formule express : <a href="#" className="underline">découvrez les horaires spécifiques ici</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
