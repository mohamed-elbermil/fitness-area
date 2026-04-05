import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophie M.",
    age: 34,
    city: "Lyon 3e",
    avatar:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150",
    result: "−18 kg en 5 mois",
    tag: "Perte de poids",
    stars: 5,
    quote:
      "Avant Fitness Area, j'avais essayé plusieurs salles sans résultat. Mon coach m'a donné un programme sur-mesure et m'a suivi chaque semaine. En 5 mois, j'ai perdu 18 kg. C'est la meilleure décision de ma vie.",
  },
  {
    name: "Karim B.",
    age: 28,
    city: "Villeurbanne",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
    result: "+12 kg de muscle en 8 mois",
    tag: "Prise de masse",
    stars: 5,
    quote:
      "Les équipements sont top, les coachs maîtrisent vraiment leur sujet. J'ai pris 12 kg de muscle en 8 mois grâce au programme personnalisé et au suivi nutritionnel. Je recommande à 100 % !",
  },
  {
    name: "Marie-Laure T.",
    age: 45,
    city: "Bron",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    result: "Je me sens 10 ans de moins",
    tag: "Bien-être",
    stars: 5,
    quote:
      "J'avais arrêté le sport depuis 12 ans. L'équipe m'a accueillie sans jugement et accompagnée pas à pas. Le hammam après chaque séance, c'est un vrai plus. Je n'aurais jamais cru retrouver autant d'énergie.",
  },
  {
    name: "Antoine D.",
    age: 32,
    city: "Lyon 8e",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    result: "Marathon bouclé en 3h45",
    tag: "Performance",
    stars: 5,
    quote:
      "Objectif marathon accompli ! Le coaching cardio et les plans d'entraînement personnalisés m'ont permis de boucler mon premier marathon en 3h45. L'équipe Fitness Area a vraiment fait la différence.",
  },
];

const socialStats = [
  { value: "500+", label: "membres satisfaits" },
  { value: "4.9/5", label: "note moyenne" },
  { value: "96%", label: "recommandent" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section
      style={{
        background: "#0d0d0d",
        padding: "7rem 2rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
            TÉMOIGNAGES
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
            Ils ont transformé leur vie.
            <br />
            <span style={{ color: "#FF693A" }}>Toi aussi, tu peux.</span>
          </h2>
        </motion.div>

        {/* Social stats */}
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "3.5rem",
            marginBottom: "4.5rem",
            flexWrap: "wrap",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {socialStats.map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2.4rem",
                  fontWeight: 900,
                  color: "#FF693A",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.82rem",
                  color: "#6B7280",
                  marginTop: "5px",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonial card */}
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.38, ease: "easeInOut" }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "26px",
                padding: "3rem",
                position: "relative",
                overflow: "hidden",
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

              <Quote
                size={36}
                style={{
                  color: "#FF693A",
                  opacity: 0.28,
                  marginBottom: "1.4rem",
                }}
              />

              {/* Stars */}
              <div
                style={{ display: "flex", gap: "4px", marginBottom: "1.2rem" }}
              >
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={18} fill="#FF693A" color="#FF693A" />
                ))}
              </div>

              {/* Result badge */}
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(255, 105, 58, 0.1)",
                  border: "1px solid rgba(255, 105, 58, 0.3)",
                  color: "#FF693A",
                  fontSize: "12.5px",
                  fontWeight: 700,
                  padding: "6px 16px",
                  borderRadius: "50px",
                  marginBottom: "1.5rem",
                }}
              >
                🏆 {t.result}
              </div>

              {/* Quote text */}
              <p
                style={{
                  color: "#D1D5DB",
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                  marginBottom: "2rem",
                }}
              >
                "{t.quote}"
              </p>

              {/* Author */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid #FF693A",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "0.98rem",
                    }}
                  >
                    {t.name}, {t.age} ans
                  </div>
                  <div style={{ color: "#6B7280", fontSize: "0.85rem" }}>
                    {t.city} · {t.tag}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <button
              onClick={prev}
              aria-label="Précédent"
              style={{
                width: "42px",
                height: "42px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "50%",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
                fontFamily: "inherit",
              }}
            >
              <ChevronLeft size={18} />
            </button>

            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Témoignage ${i + 1}`}
                style={{
                  width: i === current ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  border: "none",
                  background:
                    i === current
                      ? "#FF693A"
                      : "rgba(255,255,255,0.2)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}

            <button
              onClick={next}
              aria-label="Suivant"
              style={{
                width: "42px",
                height: "42px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "50%",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
                fontFamily: "inherit",
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
