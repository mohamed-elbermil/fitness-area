import React from "react";
import "../style/MainContent.css";
import OldManImage from "../images/old-man.png";
import { motion } from "framer-motion";

const boxes = [
  "Boxe training",
  "Cardio intense",
  "Yoga détente",
  "Musculation avancée",
  "Cours collectif",
  "Aqua fitness",
];

function MainContent() {
  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
        type: "spring",
        stiffness: 50,
      },
    },
  };

  const boxVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="presentation">
      <motion.img
        src={OldManImage}
        alt="sportif agé"
        initial={{ opacity: 0, x: -100, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
      <motion.div
        className="right-presentation"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h3>Salle de fitness, musculation</h3>
        <span>Salle de sport Lyon 2</span>
        <p>
          Quel que soit votre objectif (mincir, se galber, prendre du muscle,
          devenir plus endurant, être en forme…), choisissez le meilleur du
          fitness à Lyon ! La salle de Lyon Confluence dans le 2e arrondissement
          vous accueille dans un cadre sportif tendance dévoilant 2 000 m²
          d’espaces d’entraînement high-tech. À seulement quelques minutes de
          Perrache, profitez d’un club en all inclusive et d’un abonnement sans
          engagement vous donnant accès à un parc machines haut de gamme, à un
          bassin aquatique (piscine d’aquabike) et à plus de 160 cours
          collectifs chaque semaine. Rendez-vous au 134 cours Charlemagne pour
          la visite des installations !
        </p>
        <div className="box-presentation">
          <motion.div
            className="all-box"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {boxes.map((name, i) => (
              <motion.div
                className="box"
                key={i}
                variants={boxVariants}
                whileHover="hover"
              >
                <p>{name}</p>
                <span>En savoir +</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default MainContent;
