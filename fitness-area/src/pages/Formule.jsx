import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Crown, Shield, Clock, Smartphone, Users } from "lucide-react";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/Footer";
import banner1 from "../assets/images/banner-1.jpg";

/* ── DATA ────────────────────────────────── */
const plans = [
  {
    key: "express",
    label: "Express",
    badge: "Économique",
    price: 49,
    perWeek: "≈ 11.50",
    desc: "Accès optimisé aux heures creuses — idéal pour les lève-tôt ou les horaires flexibles.",
    highlighted: false,
    icon: <Zap size={22} />,
    services: [
      "Accès selon horaires spécifiques",
      "+160 cours collectifs / semaine",
      "Espace bien-être hammam & sauna",
      "Boxing, yoga, aquabiking, LesMills",
      "Studio de cycling",
      "Piscine & cours aquatiques",
      "Équipements high-tech",
    ],
    cta: "Commencer avec Express",
    ctaUrl: "https://buy.stripe.com/test_aFa7sKaA69VM9Wx4oCes000",
  },
  {
    key: "liberte",
    label: "Liberté",
    badge: "⭐ Recommandé",
    price: 54,
    perWeek: "≈ 12.50",
    desc: "Accès illimité, 7j/7, à toute heure. La liberté totale pour s'entraîner quand tu veux.",
    highlighted: true,
    icon: <Crown size={22} />,
    services: [
      "Accès illimité 7j/7 — sans restriction",
      "+160 cours collectifs / semaine",
      "Espace bien-être hammam & sauna",
      "Boxing, yoga, aquabiking, LesMills",
      "Studio de cycling",
      "Piscine & cours aquatiques",
      "Équipements high-tech",
      "Application mobile incluse",
    ],
    cta: "Je m'inscris — Liberté",
    ctaUrl: "https://buy.stripe.com/test_aFa7sKaA69VM9Wx4oCes000",
  },
];

const benefits = [
  { icon: <Shield size={24} />, label: "Sans engagement annuel" },
  { icon: <Clock size={24} />, label: "Résiliez en 1 clic" },
  { icon: <Smartphone size={24} />, label: "App mobile incluse" },
  { icon: <Users size={24} />, label: "Partage de carte famille" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

/* ── PAGE ────────────────────────────────── */
export default function Formule() {
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
          alt="Nos formules"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            filter: "brightness(0.45) saturate(1.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(8,8,8,0.7) 0%, rgba(8,8,8,0.92) 100%)",
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
            <span
              style={{
                width: "7px",
                height: "7px",
                background: "#FF693A",
                borderRadius: "50%",
              }}
            />
            Sans engagement · Résiliez à tout moment
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
            Nos <span style={{ color: "#FF693A" }}>Formules</span>
          </h1>
          <p style={{ color: "#9CA3AF", fontSize: "1.05rem", lineHeight: 1.6 }}>
            Trouvez le forfait qui correspond à votre rythme et à vos objectifs.
          </p>
        </motion.div>
      </div>

      {/* ── PRICING ── */}
      <section style={{ padding: "7rem 2rem", background: "#080808" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto" }}>
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
              TARIFS & FORMULES
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
              Un investissement.{" "}
              <span style={{ color: "#FF693A" }}>Des résultats qui durent.</span>
            </h2>
            <p style={{ color: "#6B7280", fontSize: "0.95rem" }}>
              Deux formules, zéro engagement — commencez dès aujourd'hui.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "1.6rem",
              alignItems: "start",
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.key}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                style={{
                  background: plan.highlighted
                    ? "linear-gradient(145deg, rgba(255,105,58,0.08) 0%, rgba(255,105,58,0.02) 100%)"
                    : "rgba(255,255,255,0.03)",
                  border: plan.highlighted
                    ? "1px solid rgba(255,105,58,0.38)"
                    : "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "26px",
                  padding: "2.8rem",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: plan.highlighted
                    ? "0 0 70px rgba(255,105,58,0.13)"
                    : "none",
                }}
              >
                {plan.highlighted && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: "linear-gradient(90deg, #FF693A, #ff9c63, #FF693A)",
                    }}
                  />
                )}

                {/* Badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: plan.highlighted
                      ? "rgba(255,105,58,0.1)"
                      : "rgba(107,114,128,0.1)",
                    border: `1px solid ${plan.highlighted ? "rgba(255,105,58,0.32)" : "rgba(107,114,128,0.28)"}`,
                    color: plan.highlighted ? "#FF693A" : "#6B7280",
                    fontSize: "11.5px",
                    fontWeight: 700,
                    padding: "5px 14px",
                    borderRadius: "50px",
                    marginBottom: "1.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {plan.badge}
                </div>

                {/* Title */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.7rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <span style={{ color: plan.highlighted ? "#FF693A" : "#6B7280" }}>
                    {plan.icon}
                  </span>
                  <h3
                    style={{
                      color: "#fff",
                      fontSize: "1.7rem",
                      fontWeight: 900,
                      margin: 0,
                    }}
                  >
                    {plan.label}
                  </h3>
                </div>

                <p
                  style={{
                    color: "#6B7280",
                    fontSize: "0.9rem",
                    marginBottom: "1.8rem",
                    lineHeight: 1.55,
                  }}
                >
                  {plan.desc}
                </p>

                {/* Price */}
                <div style={{ marginBottom: "0.4rem" }}>
                  <span
                    style={{
                      fontSize: "4rem",
                      fontWeight: 900,
                      color: plan.highlighted ? "#FF693A" : "#fff",
                      lineHeight: 1,
                      letterSpacing: "-2px",
                    }}
                  >
                    {plan.price}€
                  </span>
                  <span style={{ color: "#6B7280", fontSize: "1rem", marginLeft: "6px" }}>
                    /mois
                  </span>
                </div>
                <p
                  style={{
                    color: "#4B5563",
                    fontSize: "0.82rem",
                    marginBottom: "2rem",
                  }}
                >
                  {plan.perWeek}€ / semaine · Sans engagement
                </p>

                {/* CTA */}
                <a
                  href={plan.ctaUrl}
                  style={{
                    display: "block",
                    textAlign: "center",
                    background: plan.highlighted ? "#FF693A" : "rgba(255,255,255,0.07)",
                    color: plan.highlighted ? "#000" : "#fff",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    padding: "15px 24px",
                    borderRadius: "50px",
                    textDecoration: "none",
                    marginBottom: "2rem",
                    border: plan.highlighted
                      ? "none"
                      : "1px solid rgba(255,255,255,0.12)",
                    boxShadow: plan.highlighted
                      ? "0 0 35px rgba(255,105,58,0.38)"
                      : "none",
                    transition: "all 0.25s",
                  }}
                >
                  {plan.cta}
                </a>

                {/* Features */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.65rem",
                  }}
                >
                  {plan.services.map((s, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        color: "#D1D5DB",
                        fontSize: "0.9rem",
                      }}
                    >
                      <Check
                        size={15}
                        style={{
                          color: plan.highlighted ? "#FF693A" : "#6B7280",
                          flexShrink: 0,
                        }}
                      />
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS STRIP ── */}
      <section
        style={{
          background: "#0a0a0a",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "4rem 2rem",
        }}
      >
        <motion.div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1.5rem",
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.8rem",
                textAlign: "center",
                padding: "1.5rem",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "18px",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  background: "rgba(255,105,58,0.1)",
                  border: "1px solid rgba(255,105,58,0.18)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FF693A",
                }}
              >
                {b.icon}
              </div>
              <span
                style={{
                  color: "#D1D5DB",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                  lineHeight: 1.3,
                }}
              >
                {b.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
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
            PRÊT À COMMENCER ?
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
            Ta séance de découverte
            <br />
            <span style={{ color: "#FF693A" }}>est offerte.</span>
          </h2>
          <p
            style={{
              color: "#6B7280",
              marginBottom: "2.5rem",
              fontSize: "1rem",
              maxWidth: "500px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.6,
            }}
          >
            Viens tester la salle, rencontrer un coach et découvrir tes
            formules — sans engagement.
          </p>
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
              padding: "17px 44px",
              borderRadius: "50px",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.8px",
              boxShadow: "0 0 40px rgba(255,105,58,0.38)",
            }}
          >
            Réserver ma séance découverte →
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
