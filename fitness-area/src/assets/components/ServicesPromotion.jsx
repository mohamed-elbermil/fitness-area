import React, { useState } from "react";
import "../style/variables.css";
import styles from "../style/ServicesPromotion.module.css";

function ServicesPromotion() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Test</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          sequi praesentium, quam dolor accusamus quia obcaecati voluptatum,
          facilis dolore ipsa tenetur culpa quos! Excepturi, non.
        </p>
      </div>
      <div className={styles.all_bloc}>
        <div className={styles.bloc}>
          <i class="fa-solid fa-star"></i>
          <span>Performance</span>
          <p>
            Atteignez vos objectifs grâce à un encadrement personnalisé et un
            matériel de pointe, idéal pour progresser rapidement.
          </p>
        </div>
        <div className={styles.bloc}>
          <i class="fa-solid fa-star"></i>
          <span>Énergie</span>
          <p>
            Boostez votre vitalité avec nos cours collectifs variés et
            motivants, adaptés à tous les niveaux.
          </p>
        </div>
        <div className={styles.bloc}>
          <i class="fa-solid fa-star"></i>
          <span>Bien-être</span>
          <p>
            Détendez-vous et améliorez votre souplesse avec nos séances de yoga
            et stretching, dans un cadre convivial.
          </p>
        </div>
        <div className={styles.bloc}>
          <i class="fa-solid fa-star"></i>
          <span>Force</span>
          <p>
            Développez votre musculature avec notre équipement haut de gamme et
            nos programmes spécifiques.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesPromotion;
