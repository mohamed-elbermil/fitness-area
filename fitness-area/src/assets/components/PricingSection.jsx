import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Crown } from "lucide-react";
import { Link } from "react-router-dom";

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
    desc: "Accès illimité à toute heure. La liberté totale pour s'entraîner quand vous voulez.",
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

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function PricingSection() {
  return (
    <section
      style={{
        background: "#080808",
        padding: "7rem 2rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: "920px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          style={{ textAlign: "center", marginBottom: "4rem" }}
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
            TARIFS & FORMULES
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 900,
              color: "#fff",
              textTransform: "uppercase",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Un investissement.
            <br />
            <span style={{ color: "#FF693A" }}>Des résultats qui durent.</span>
          </h2>
          <p style={{ color: "#6B7280", fontSize: "0.95rem" }}>
            Sans engagement · Résiliez à tout moment
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "1.5rem",
            alignItems: "start",
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.key}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.25 },
              }}
              style={{
                background: plan.highlighted
                  ? "linear-gradient(145deg, rgba(255,105,58,0.07) 0%, rgba(255,105,58,0.02) 100%)"
                  : "rgba(255,255,255,0.03)",
                border: plan.highlighted
                  ? "1px solid rgba(255,105,58,0.38)"
                  : "1px solid rgba(255,255,255,0.07)",
                borderRadius: "26px",
                padding: "2.5rem",
                position: "relative",
                overflow: "hidden",
                boxShadow: plan.highlighted
                  ? "0 0 60px rgba(255,105,58,0.12)"
                  : "none",
              }}
            >
              {/* Top gradient bar */}
              {plan.highlighted && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background:
                      "linear-gradient(90deg, #FF693A, #ff9c63, #FF693A)",
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
                  border: `1px solid ${
                    plan.highlighted
                      ? "rgba(255,105,58,0.32)"
                      : "rgba(107,114,128,0.28)"
                  }`,
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

              {/* Title row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.7rem",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{
                    color: plan.highlighted ? "#FF693A" : "#6B7280",
                  }}
                >
                  {plan.icon}
                </span>
                <h3
                  style={{
                    color: "#fff",
                    fontSize: "1.6rem",
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
                  fontSize: "0.88rem",
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
                    fontSize: "3.8rem",
                    fontWeight: 900,
                    color: plan.highlighted ? "#FF693A" : "#fff",
                    lineHeight: 1,
                    letterSpacing: "-2px",
                  }}
                >
                  {plan.price}€
                </span>
                <span
                  style={{
                    color: "#6B7280",
                    fontSize: "1rem",
                    marginLeft: "6px",
                  }}
                >
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
                  background: plan.highlighted
                    ? "#FF693A"
                    : "rgba(255,255,255,0.07)",
                  color: plan.highlighted ? "#000" : "#fff",
                  fontWeight: 800,
                  fontSize: "0.92rem",
                  padding: "14px 24px",
                  borderRadius: "50px",
                  textDecoration: "none",
                  marginBottom: "2rem",
                  border: plan.highlighted
                    ? "none"
                    : "1px solid rgba(255,255,255,0.12)",
                  transition: "all 0.25s",
                  boxShadow: plan.highlighted
                    ? "0 0 32px rgba(255,105,58,0.38)"
                    : "none",
                  letterSpacing: "0.2px",
                }}
              >
                {plan.cta}
              </a>

              {/* Features list */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
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
                      fontSize: "0.88rem",
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

        {/* Reassurance row */}
        <motion.div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            padding: "1.5rem 2rem",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "14px",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p style={{ color: "#6B7280", fontSize: "0.88rem" }}>
            🔒 Paiement sécurisé · Sans engagement · Résiliation en 1 clic ·{" "}
            <Link
              to="/formules"
              style={{
                color: "#FF693A",
                fontWeight: 600,
                marginLeft: "4px",
              }}
            >
              Voir toutes les formules →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
