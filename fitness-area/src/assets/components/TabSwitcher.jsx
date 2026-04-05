import React, { useState } from "react";
import { Activity, Target, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tabsData = [
  {
    id: "activity",
    label: "Activités",
    icon: <Activity size={18} />,
    title: "Découvrez nos activités fitness",
    description:
      "Une gamme complète d'exercices adaptés à tous les niveaux pour atteindre vos objectifs.",
    cards: [
      {
        image:
          "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Musculation",
        description:
          "Développez votre force et sculptez votre corps avec nos équipements de pointe.",
        category: "Force",
      },
      {
        image:
          "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Cardio Training",
        description:
          "Améliorez votre endurance cardiovasculaire avec nos programmes dynamiques.",
        category: "Endurance",
      },
      {
        image:
          "https://images.pexels.com/photos/3984340/pexels-photo-3984340.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Yoga & Pilates",
        description:
          "Trouvez l'équilibre parfait entre flexibilité, force et sérénité.",
        category: "Bien-être",
      },
    ],
  },
  {
    id: "coaching",
    label: "Coaching",
    icon: <Target size={18} />,
    title: "Coaching personnalisé premium",
    description:
      "Bénéficiez d'un accompagnement sur-mesure avec nos coachs certifiés.",
    cards: [
      {
        image:
          "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Coach Personnel",
        description:
          "Un accompagnement individuel pour maximiser vos résultats en toute sécurité.",
        category: "Premium",
      },
      {
        image:
          "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Coaching Nutrition",
        description:
          "Optimisez votre alimentation avec nos experts en nutrition sportive.",
        category: "Nutrition",
      },
      {
        image:
          "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Suivi Mental",
        description:
          "Développez votre mental de champion avec nos coachs spécialisés.",
        category: "Mental",
      },
    ],
  },
  {
    id: "tracking",
    label: "Suivi",
    icon: <TrendingUp size={18} />,
    title: "Suivez vos progrès en temps réel",
    description:
      "Analysez vos performances et célébrez chaque victoire sur votre parcours fitness.",
    cards: [
      {
        image:
          "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Analytics Avancés",
        description:
          "Visualisez vos progrès avec des graphiques détaillés et des métriques précises.",
        category: "Data",
      },
      {
        image:
          "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Objectifs Personnalisés",
        description:
          "Définissez et atteignez vos objectifs avec notre système de suivi intelligent.",
        category: "Goals",
      },
      {
        image:
          "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Communauté",
        description:
          "Partagez vos succès et motivez-vous avec notre communauté active.",
        category: "Social",
      },
    ],
  },
];

const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState("activity");
  const activeTabData = tabsData.find((tab) => tab.id === activeTab);

  return (
    <section
      style={{
        background: "#0a0a0a",
        padding: "7rem 2rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          style={{ textAlign: "center", marginBottom: "3rem" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            style={{
              color: "#FF693A",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              marginBottom: "0.9rem",
            }}
          >
            PROGRAMMES
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 900,
              color: "#fff",
              textTransform: "uppercase",
              lineHeight: 1.1,
            }}
          >
            Des activités pour{" "}
            <span style={{ color: "#FF693A" }}>chaque objectif</span>
          </h2>
        </motion.div>

        {/* Tab buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.6rem",
            marginBottom: "3.5rem",
            flexWrap: "wrap",
          }}
        >
          {tabsData.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "11px 26px",
                  borderRadius: "50px",
                  border: isActive
                    ? "none"
                    : "1px solid rgba(255,255,255,0.1)",
                  background: isActive
                    ? "#FF693A"
                    : "rgba(255,255,255,0.04)",
                  color: isActive ? "#000" : "#9CA3AF",
                  fontWeight: isActive ? 700 : 500,
                  cursor: "pointer",
                  fontSize: "0.88rem",
                  transition: "all 0.2s ease",
                  fontFamily: "inherit",
                  letterSpacing: "0.2px",
                  boxShadow: isActive
                    ? "0 0 24px rgba(255,105,58,0.35)"
                    : "none",
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Cards with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.32, ease: "easeInOut" }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.4rem",
            }}
          >
            {activeTabData.cards.map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  cursor: "default",
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", height: "210px" }}>
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  {/* Gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(0deg, rgba(0,0,0,0.72) 0%, transparent 55%)",
                    }}
                  />
                  {/* Category badge */}
                  <span
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      background: "rgba(255,105,58,0.9)",
                      color: "#000",
                      fontSize: "10.5px",
                      fontWeight: 800,
                      padding: "4px 11px",
                      borderRadius: "50px",
                      textTransform: "uppercase",
                      letterSpacing: "0.6px",
                    }}
                  >
                    {card.category}
                  </span>
                </div>

                {/* Text */}
                <div style={{ padding: "1.4rem 1.6rem 1.6rem" }}>
                  <h3
                    style={{
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      color: "#9CA3AF",
                      fontSize: "0.88rem",
                      lineHeight: 1.55,
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TabSwitcher;
