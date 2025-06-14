import React from "react";
import "../style/MainContent.css";

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
    <div className="presentation">
      <div className="right-presentation">
        <h3>Salle de fitness, musculation</h3>
        <span>Salle de sport Lyon 2</span>
        <p>
          Quel que soit votre objectif (mincir, se galber, prendre du muscle,
          devenir plus endurant, être en forme…), choisissez le meilleur du
          fitness à Lyon ! La salle de Lyon Confluence dans le 2e arrondissement
          vous accueille dans un cadre sportif tendance dévoilant 2 000 m²
          d'espaces d'entraînement high-tech. À seulement quelques minutes de
          Perrache, profitez d'un club en all inclusive et d'un abonnement sans
          engagement vous donnant accès à un parc machines haut de gamme, à un
          bassin aquatique (piscine d'aquabike) et à plus de 160 cours
          collectifs chaque semaine. Rendez-vous au 134 cours Charlemagne pour
          la visite des installations !
        </p>

        <div className="box-presentation">
          <div className="all-box">
            {boxes.map((name, i) => {
              const imageUrls = [
                "https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=400",
                "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400",
                "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400",
                "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400",
                "https://images.pexels.com/photos/3757956/pexels-photo-3757956.jpeg?auto=compress&cs=tinysrgb&w=400",
                "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400",
              ];

              return (
                <div
                  className="box rounded-2xl overflow-hidden shadow-lg bg-white"
                  key={i}
                >
                  <a
                    href={fitnessLinks[i]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src={imageUrls[i]}
                      alt={`Image de sport ${i + 1}`}
                      className="w-full h-48 object-cover"
                    />
                  </a>
                  <div className="p-4 flex flex-col justify-between h-full">
                    <p className="text-lg font-bold text-gray-800 mb-2">
                      {name}
                    </p>
                    <span className="text-sm text-orange-600 hover:underline cursor-pointer">
                      En savoir +
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
