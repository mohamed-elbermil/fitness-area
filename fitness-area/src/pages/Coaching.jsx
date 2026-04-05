import React from "react";
import { motion } from "framer-motion";
import { Mail, Award, Target, Brain, Dumbbell, Heart, Zap } from "lucide-react";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/Footer";
import banner1 from "../assets/images/banner-1.jpg";

/* ── DATA ────────────────────────────────── */
const coaches = [
  {
    name: "Camille Dupont",
    role: "Coach Fitness & Bien-être",
    cert: "BPJEPS AF",
    exp: "7 ans d'expérience",
    specialty: "Prise en main débutants, cours collectifs, yoga",
    image:
      "https://images.pexels.com/photos/6740049/pexels-photo-6740049.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "camille@fitness-area.fr",
  },
  {
    name: "Lucas Martin",
    role: "Coach Nutrition & Performance",
    cert: "Diététicien sportif",
    exp: "5 ans d'expérience",
    specialty: "Plans nutritionnels, prise de masse, sèche",
    image:
      "https://images.pexels.com/photos/8611938/pexels-photo-8611938.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "lucas@fitness-area.fr",
  },
  {
    name: "Thomas Renaud",
    role: "Coach Musculation & Force",
    cert: "DEJEPS Performance",
    exp: "8 ans d'expérience",
    specialty: "Powerlifting, hypertrophie, programmes sur-mesure",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "thomas@fitness-area.fr",
  },
  {
    name: "Sarah Meillet",
    role: "Coach Cardio & HIIT",
    cert: "BPJEPS AF",
    exp: "4 ans d'expérience",
    specialty: "Running, cardio-training, perte de poids",
    image:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600",
    email: "sarah@fitness-area.fr",
  },
];

const programs = [
  {
    title: "YOGA & MOBILITÉ",
    img: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Heart size={18} />,
    tag: "Bien-être",
  },
  {
    title: "MUSCULATION",
    img: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Dumbbell size={18} />,
    tag: "Force",
  },
  {
    title: "PERTE DE POIDS",
    img: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Zap size={18} />,
    tag: "Cardio",
  },
  {
    title: "MOBILITÉ & RÉCUP",
    img: "https://images.pexels.com/photos/2261482/pexels-photo-2261482.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: <Brain size={18} />,
    tag: "Récupération",
  },
];

const statsData = [
  { value: "100%", label: "Coachs diplômés d'État" },
  { value: "4", label: "Spécialités couvertes" },
  { value: "16", label: "ans d'expertise collective" },
  { value: "500+", label: "membres accompagnés" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

/* ── PAGE ────────────────────────────────── */
const Coaching = () => {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "#fff" }}>
      <Navbar />

      {/* ── HERO ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "420px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "80px",
        }}
      >
        <img
          src={banner1}
          alt="Coaching"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            filter: "brightness(0.4) saturate(1.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(8,8,8,0.65) 0%, rgba(8,8,8,0.94) 100%)",
            zIndex: 2,
          }}
        />
        <motion.div
          style={{
            position: "relative",
            zIndex: 3,
            textAlign: "center",
            maxWidth: "700px",
            padding: "0 2rem",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255,105,58,0.1)",
              border: "1px solid rgba(255,105,58,0.3)",
              color: "#FF693A",
              fontSize: "12px",
              fontWeight: 700,
              padding: "6px 16px",
              borderRadius: "50px",
              marginBottom: "1.2rem",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            <Award size={14} />
            Coachs certifiés d'État
          </div>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-1px",
              lineHeight: 1.05,
              marginBottom: "1rem",
            }}
          >
            Coaching <span style={{ color: "#FF693A" }}>Premium</span>
          </h1>
          <p style={{ color: "#9CA3AF", fontSize: "1.05rem", lineHeight: 1.6 }}>
            Atteignez vos objectifs avec l'encadrement de nos coachs certifiés
            et leurs programmes sur-mesure.
          </p>
        </motion.div>
      </div>

      {/* ── STATS ── */}
      <section
        style={{
          background: "#0a0a0a",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "3.5rem 2rem",
        }}
      >
        <motion.div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1rem",
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              style={{
                textAlign: "center",
                padding: "1.5rem 1rem",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "16px",
              }}
            >
              <div
                style={{
                  fontSize: "2.2rem",
                  fontWeight: 900,
                  color: "#FF693A",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: "#6B7280", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.8px" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── PROGRAMMES ── */}
      <section
        style={{
          background: "#080808",
          padding: "7rem 2rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "3rem",
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p
                style={{
                  color: "#FF693A",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  marginBottom: "0.7rem",
                }}
              >
                PROGRAMMES
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                Entraînements pour{" "}
                <span style={{ color: "#FF693A" }}>chaque objectif</span>
              </h2>
            </div>
            <a
              href="#all-coach"
              style={{
                color: "#FF693A",
                fontWeight: 600,
                fontSize: "0.92rem",
                textDecoration: "none",
                border: "1px solid rgba(255,105,58,0.3)",
                padding: "10px 20px",
                borderRadius: "50px",
                background: "rgba(255,105,58,0.06)",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              Voir tous les coachs →
            </a>
          </motion.div>

          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.4rem",
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {programs.map((prog, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                style={{
                  position: "relative",
                  height: "320px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  backgroundImage: `url(${prog.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "default",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                  }}
                />
                {/* Tag */}
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    background: "rgba(255,105,58,0.88)",
                    color: "#000",
                    fontSize: "10.5px",
                    fontWeight: 800,
                    padding: "4px 12px",
                    borderRadius: "50px",
                    textTransform: "uppercase",
                    letterSpacing: "0.6px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    zIndex: 2,
                  }}
                >
                  {prog.icon}
                  {prog.tag}
                </div>
                {/* Title */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.5rem",
                    left: "1.5rem",
                    zIndex: 2,
                    color: "#fff",
                    fontSize: "1.2rem",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    textShadow: "0 2px 12px rgba(0,0,0,0.3)",
                  }}
                >
                  {prog.title}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── COACHS ── */}
      <section
        id="all-coach"
        style={{
          background: "#0a0a0a",
          padding: "7rem 2rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Header */}
          <motion.div
            style={{ textAlign: "center", marginBottom: "4rem" }}
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
                marginBottom: "0.8rem",
              }}
            >
              NOTRE ÉQUIPE
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 1.1,
                marginBottom: "0.8rem",
              }}
            >
              Nos formateurs{" "}
              <span style={{ color: "#FF693A" }}>certifiés</span>
            </h2>
            <p style={{ color: "#6B7280", fontSize: "0.95rem", maxWidth: "480px", margin: "0 auto" }}>
              Des experts diplômés d'État qui vous accompagnent pas à pas vers
              vos objectifs.
            </p>
          </motion.div>

          {/* Coach cards */}
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {coaches.map((coach, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Photo */}
                <div style={{ position: "relative", height: "280px" }}>
                  <img
                    src={coach.image}
                    alt={coach.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      filter: "brightness(0.88) contrast(1.05)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(0deg, rgba(0,0,0,0.88) 0%, transparent 55%)",
                    }}
                  />
                  {/* Cert badge */}
                  <div
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
                      letterSpacing: "0.5px",
                    }}
                  >
                    {coach.cert}
                  </div>
                  {/* Mail button */}
                  <a
                    href={`mailto:${coach.email}`}
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      width: "36px",
                      height: "36px",
                      background: "rgba(8,8,8,0.7)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    title={`Envoyer un mail à ${coach.name}`}
                  >
                    <Mail size={15} />
                  </a>
                  {/* Name overlay */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "1.2rem 1.4rem",
                    }}
                  >
                    <div
                      style={{
                        color: "#fff",
                        fontWeight: 800,
                        fontSize: "1.05rem",
                        letterSpacing: "0.3px",
                      }}
                    >
                      {coach.name}
                    </div>
                    <div style={{ color: "#FF693A", fontSize: "0.85rem", fontWeight: 600, marginTop: "2px" }}>
                      {coach.role}
                    </div>
                  </div>
                </div>

                {/* Info block */}
                <div style={{ padding: "1.2rem 1.4rem 1.4rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#6B7280",
                      fontSize: "0.82rem",
                      marginBottom: "0.6rem",
                    }}
                  >
                    <Target size={13} style={{ color: "#FF693A", flexShrink: 0 }} />
                    {coach.exp}
                  </div>
                  <p
                    style={{
                      color: "#9CA3AF",
                      fontSize: "0.85rem",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {coach.specialty}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section
        style={{
          background: "#080808",
          padding: "6rem 2rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          textAlign: "center",
        }}
      >
        <motion.div
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
              marginBottom: "1rem",
            }}
          >
            PRÊT À VOUS LANCER ?
          </p>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Rencontrez votre coach.
            <br />
            <span style={{ color: "#FF693A" }}>La séance est offerte.</span>
          </h2>
          <p
            style={{
              color: "#6B7280",
              fontSize: "1rem",
              maxWidth: "480px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.6,
            }}
          >
            Venez échanger avec notre équipe, visiter la salle et démarrer
            votre parcours sans engagement.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <motion.a
              href="/contact"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 60px rgba(255,105,58,0.55)",
              }}
              style={{
                display: "inline-block",
                background: "#FF693A",
                color: "#000",
                fontWeight: 900,
                fontSize: "1rem",
                padding: "16px 40px",
                borderRadius: "50px",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                boxShadow: "0 0 40px rgba(255,105,58,0.38)",
              }}
            >
              Prendre rendez-vous →
            </motion.a>
            <a
              href="/formules"
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.06)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "1rem",
                padding: "16px 40px",
                borderRadius: "50px",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              Voir les formules
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Coaching;
