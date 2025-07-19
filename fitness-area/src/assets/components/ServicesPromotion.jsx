import React from "react";
import { motion } from "framer-motion";
import "../style/variables.css";
import styles from "../style/ServicesPromotion.module.css";

function ServicesPromotion() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className={styles.title}>
        <h3>La musculation : force et bien-être</h3>
        <p>
          La musculation est une discipline qui consiste à développer la force
          et la masse musculaire grâce à des exercices ciblés. Elle améliore non
          seulement l’apparence physique, mais aussi la santé globale, en
          renforçant les os et en stimulant le métabolisme. Que ce soit avec des
          poids libres, des machines ou le poids du corps, la régularité et la
          bonne technique sont essentielles pour progresser en toute sécurité.
        </p>
      </div>
      <div className={styles.all_bloc}>
        <div className={styles.bloc}>
          <i class="fa-solid fa-chart-simple"></i> <span>Performance</span>
          <p>
            Atteignez vos objectifs grâce à un encadrement personnalisé et un
            matériel de pointe, idéal pour progresser rapidement.
          </p>
        </div>
        <div className={styles.bloc}>
          <i class="fa-solid fa-power-off"></i> <span>Énergie</span>
          <p>
            Boostez votre vitalité avec nos cours collectifs variés et
            motivants, adaptés à tous les niveaux.
          </p>
        </div>
        <div className={styles.bloc}>
          <i class="fa-solid fa-heart"></i> <span>Bien-être</span>
          <p>
            Détendez-vous et améliorez votre souplesse avec nos séances de yoga
            et stretching, dans un cadre convivial.
          </p>
        </div>
        <div className={styles.bloc}>
          <i class="fa-solid fa-hand-fist"></i> <span>Force</span>
          <p>
            Développez votre musculature avec notre équipement haut de gamme et
            nos programmes spécifiques.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ServicesPromotion;
