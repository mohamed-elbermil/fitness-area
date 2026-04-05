import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Button";
import InscriptionSection from "./InscriptionSection";

const coaches = [
  {
    name: "THOMAS",
    role: "Coach Musculation & Force",
    exp: "8 ans d'expérience",
    cert: "BPJEPS AF",
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "SARAH",
    role: "Nutritionniste Sportive",
    exp: "6 ans d'expérience",
    cert: "Diététicienne certifiée",
    img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "MARC",
    role: "Coach Cardio & HIIT",
    exp: "5 ans d'expérience",
    cert: "DEJEPS Performance",
    img: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function MainContent() {
  return (
    <>
      {/* COACHES SECTION */}
      <section
        style={{
          background: "#080808",
          padding: "7rem 2rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Header row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginBottom: "3rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  color: "#FF693A",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                EXPERTISE
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 900,
                  color: "#fff",
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                Nos{" "}
                <span style={{ color: "#FF693A", fontStyle: "italic", fontWeight: 500 }}>
                  coachs certifiés
                </span>
              </h2>
            </div>
            <Link to="/coaching" style={{ textDecoration: "none" }}>
              <Button variant="member">Découvrez nos coachs</Button>
            </Link>
          </div>

          {/* Coach cards */}
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.4rem",
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {coaches.map((coach, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "22px",
                  overflow: "hidden",
                  position: "relative",
                  minHeight: "340px",
                }}
              >
                <img
                  src={coach.img}
                  alt={`Coach ${coach.name}`}
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    display: "block",
                    filter: "brightness(0.9) contrast(1.05)",
                  }}
                />
                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "65%",
                    background:
                      "linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)",
                  }}
                />
                {/* Cert badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    background: "rgba(255,105,58,0.88)",
                    color: "#000",
                    fontSize: "10.5px",
                    fontWeight: 800,
                    padding: "4px 11px",
                    borderRadius: "50px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {coach.cert}
                </div>
                {/* Info */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1.4rem",
                  }}
                >
                  <div
                    style={{
                      color: "#fff",
                      fontWeight: 900,
                      fontSize: "1.1rem",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    {coach.name}
                  </div>
                  <div
                    style={{
                      color: "#FF693A",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      marginTop: "3px",
                    }}
                  >
                    {coach.role}
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: "0.82rem",
                      marginTop: "2px",
                    }}
                  >
                    {coach.exp}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA INSCRIPTION */}
      <InscriptionSection />
    </>
  );
}

export default MainContent;
