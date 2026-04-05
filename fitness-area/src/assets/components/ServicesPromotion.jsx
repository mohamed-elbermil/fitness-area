import React from "react";
import { motion } from "framer-motion";
import { Flame, Dumbbell, Zap, Heart } from "lucide-react";

const services = [
  {
    icon: <Flame size={28} />,
    title: "Brûlez les graisses",
    subtitle: "Cardio & HIIT",
    description:
      "Nos équipements cardio dernière génération et programmes HIIT brûlent jusqu'à 800 kcal par séance. Résultats visibles dès 30 jours.",
    metric: "−800 kcal / séance",
  },
  {
    icon: <Dumbbell size={28} />,
    title: "Forgez votre corps",
    subtitle: "Musculation Premium",
    description:
      "Machines de pointe, poids libres et programmes personnalisés pour sculpter et développer votre musculature en toute sécurité.",
    metric: "+12 kg de muscle en moyenne",
  },
  {
    icon: <Zap size={28} />,
    title: "Rechargez votre énergie",
    subtitle: "+160 Cours collectifs/semaine",
    description:
      "Boxing, aquabiking, yoga, cycling, LesMills… +160 cours animés par nos coachs certifiés pour ne jamais vous ennuyer.",
    metric: "160+ cours / semaine",
  },
  {
    icon: <Heart size={28} />,
    title: "Détendez corps & esprit",
    subtitle: "Espace Bien-être Premium",
    description:
      "Hammam, sauna, piscine et yoga pour récupérer et vous ressourcer dans notre espace bien-être haut de gamme.",
    metric: "Hammam · Sauna · Piscine",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesPromotion() {
  return (
    <section
      style={{
        background: "#080808",
        padding: "7rem 2rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <motion.div
        style={{ maxWidth: "1200px", margin: "0 auto" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Section header */}
        <motion.div
          variants={cardVariants}
          style={{ textAlign: "center", marginBottom: "4.5rem" }}
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
            NOS SERVICES
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.1,
              textTransform: "uppercase",
            }}
          >
            Tout ce dont tu as besoin
            <br />
            <span style={{ color: "#FF693A" }}>pour transformer ta vie</span>
          </h2>
        </motion.div>

        {/* Service cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(258px, 1fr))",
            gap: "1.4rem",
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "22px",
                padding: "2rem",
                backdropFilter: "blur(12px)",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background:
                    "linear-gradient(90deg, transparent, #FF693A, transparent)",
                }}
              />

              {/* Icon box */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  background: "rgba(255, 105, 58, 0.1)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FF693A",
                  marginBottom: "1.2rem",
                  border: "1px solid rgba(255,105,58,0.18)",
                }}
              >
                {service.icon}
              </div>

              {/* Metric badge */}
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(255, 105, 58, 0.07)",
                  border: "1px solid rgba(255, 105, 58, 0.2)",
                  color: "#FF693A",
                  fontSize: "11px",
                  fontWeight: 700,
                  padding: "4px 11px",
                  borderRadius: "50px",
                  marginBottom: "0.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                {service.metric}
              </div>

              <p
                style={{
                  color: "#4B5563",
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1.2px",
                  marginBottom: "0.45rem",
                }}
              >
                {service.subtitle}
              </p>

              <h3
                style={{
                  color: "#fff",
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  marginBottom: "0.75rem",
                  lineHeight: 1.2,
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#9CA3AF",
                  fontSize: "0.92rem",
                  lineHeight: 1.65,
                }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
