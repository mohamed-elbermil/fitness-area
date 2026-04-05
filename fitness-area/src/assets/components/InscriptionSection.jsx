import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: "fa-solid fa-link",
    title: "UN ABONNEMENT",
    desc: "sans engagement annuel",
  },
  {
    icon: "fa-solid fa-children",
    title: "LE PARTAGE DE TA CARTE",
    desc: "avec un membre du domicile*",
    mini: "*sous réserve d'un abonnement FITPRO",
  },
  {
    icon: "fa-solid fa-location-dot",
    title: "UN ACCÈS AU CLUB",
    desc: "de façon illimitée",
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "UNE APPLICATION MOBILE",
    desc: "pour tes programmes d'entraînement et ton suivi",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function InscriptionSection() {
  return (
    <section
      style={{
        background: "#0d0d0d",
        padding: "7rem 2rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Header */}
      <motion.div
        style={{ textAlign: "center", marginBottom: "3.5rem" }}
        initial={{ opacity: 0, y: 24 }}
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
          REJOINS-NOUS
        </p>
        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 900,
            color: "#fff",
            textTransform: "uppercase",
            lineHeight: 1.1,
          }}
        >
          S'inscrire{" "}
          <span
            style={{
              color: "#FF693A",
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            n'a jamais été aussi simple
          </span>
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          marginBottom: "3rem",
          flexWrap: "wrap",
          maxWidth: "1000px",
          width: "100%",
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "200px",
              minWidth: "160px",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "#111",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.1rem",
              }}
            >
              <i
                className={card.icon}
                style={{
                  color: "#FF693A",
                  fontSize: "1.8rem",
                }}
              />
            </div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: 800,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                textAlign: "center",
                marginBottom: "0.4rem",
              }}
            >
              {card.title}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#9CA3AF",
                textAlign: "center",
                lineHeight: 1.5,
              }}
            >
              {card.desc}
              {card.mini && (
                <>
                  <br />
                  <span style={{ fontSize: "10.5px", opacity: 0.6 }}>
                    {card.mini}
                  </span>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.a
        href="/contact"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        whileHover={{ scale: 1.04, boxShadow: "0 0 60px rgba(255,105,58,0.55)" }}
        style={{
          display: "inline-block",
          background: "#FF693A",
          color: "#000",
          fontWeight: 900,
          fontSize: "1rem",
          padding: "17px 48px",
          borderRadius: "50px",
          textDecoration: "none",
          letterSpacing: "0.8px",
          textTransform: "uppercase",
          boxShadow: "0 0 40px rgba(255,105,58,0.38)",
          transition: "all 0.25s",
        }}
      >
        Je m'inscris maintenant
      </motion.a>
    </section>
  );
}
