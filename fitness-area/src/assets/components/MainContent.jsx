import React from 'react';
import '../style/MainContent.css'
import OldManImage from '../images/old-man.png'
import {motion} from "framer-motion"

function MainContent() {
    return(
        <div className="presentation">
            <img src={OldManImage} alt="sportif agé" />
            <div className="right-presentation">
                <h3>Salle de fitness, musculation</h3>
                <span>Salle de sport Lyon 2</span>
                <p>Quel que soit votre objectif (mincir, se galber, prendre du muscle, devenir plus endurant, être en forme…), choisissez le meilleur du fitness à Lyon ! La salle de Lyon Confluence dans le 2e arrondissement vous accueille dans un cadre sportif tendance dévoilant 2 000 m² d’espaces d’entraînement high-tech. À seulement quelques minutes de Perrache, profitez d’un club en all inclusive et d’un abonnement sans engagement vous donnant accès à un parc machines haut de gamme, à un bassin aquatique (piscine d’aquabike) et à plus de 160 cours collectifs chaque semaine. Rendez-vous au 134 cours Charlemagne pour la visite des installations !</p>
            <div className="box-presentation">
                <div className="all-box">
                    <motion.div className="box" initial={{x: 500}} animate={{x: 0}}>
                        <p>Boxe training</p>
                        <span>En savoir +</span>
                    </motion.div>
                    <motion.div className="box" initial={{x: 500}} animate={{x: 0}}>
                        <p>Boxe training</p>
                        <span>En savoir +</span>
                    </motion.div>
                    <motion.div className="box" initial={{x: 500}} animate={{x: 0}}>
                        <p>Boxe training</p>
                        <span>En savoir +</span>
                    </motion.div>
                    <motion.div className="box" initial={{x: 500}} animate={{x: 0}}>
                        <p>Boxe training</p>
                        <span>En savoir +</span>
                    </motion.div>
                    <motion.div className="box" initial={{x: 500}} animate={{x: 0}}>
                        <p>Boxe training</p>
                        <span>En savoir +</span>
                    </motion.div>
                    <motion.div className="box" initial={{x: 500}} animate={{x: 0}}>
                        <p>Boxe training</p>
                        <span>En savoir +</span>
                    </motion.div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default MainContent
