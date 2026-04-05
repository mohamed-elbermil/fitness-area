import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Y a-t-il un engagement minimum ?",
    a: "Non, aucun. Nos abonnements sont sans engagement annuel. Vous pouvez vous inscrire et résilier à tout moment, sans frais ni pénalité. Votre liberté est notre priorité.",
  },
  {
    q: "Comment fonctionne la séance de découverte offerte ?",
    a: "Contactez-nous via le formulaire ou par téléphone. Nous vous accueillerons pour une visite complète de la salle, suivie d'une séance guidée par l'un de nos coachs certifiés. C'est 100 % gratuit et sans aucun engagement.",
  },
  {
    q: "Les coachs sont-ils certifiés ?",
    a: "Absolument. Tous nos coachs sont titulaires de diplômes d'État (BPJEPS, DEJEPS ou équivalent) et suivent des formations continues. Vous êtes entre de bonnes mains.",
  },
  {
    q: "Quels sont les horaires d'ouverture ?",
    a: "Avec la formule Liberté, vous accédez à la salle 24h/24 et 7j/7 grâce à votre badge. La formule Express donne accès aux créneaux hors heures de pointe (matins en semaine et week-ends).",
  },
  {
    q: "Puis-je suspendre mon abonnement (vacances, blessure) ?",
    a: "Oui. En cas de blessure médicalement justifiée ou de congés prolongés, nous pouvons mettre votre abonnement en pause. Parlez-en simplement à l'accueil, on trouve une solution ensemble.",
  },
  {
    q: "Je suis grand débutant, puis-je venir ?",
    a: "Le fitness est fait pour tout le monde. Nos coachs accueillent les débutants avec bienveillance et construisent un programme adapté à votre niveau pour progresser en sécurité, sans risque de blessure.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div
      style={{
        border: `1px solid ${
          isOpen ? "rgba(255,105,58,0.25)" : "rgba(255,255,255,0.07)"
        }`,
        borderRadius: "16px",
        overflow: "hidden",
        background: isOpen
          ? "rgba(255,105,58,0.04)"
          : "rgba(255,255,255,0.02)",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          padding: "1.4rem 1.8rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontFamily: "inherit",
        }}
      >
        <span
          style={{
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.97rem",
            lineHeight: 1.4,
          }}
        >
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.28 }}
          style={{
            flexShrink: 0,
            color: isOpen ? "#FF693A" : "#6B7280",
          }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                padding: "0 1.8rem 1.4rem",
                color: "#9CA3AF",
                fontSize: "0.92rem",
                lineHeight: 1.7,
                borderTop: "1px solid rgba(255,255,255,0.05)",
                paddingTop: "1rem",
              }}
            >
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      style={{
        background: "#0a0a0a",
        padding: "7rem 2rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>
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
            FAQ
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
            Vos questions.
            <br />
            <span style={{ color: "#FF693A" }}>Nos réponses.</span>
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <FAQItem
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          style={{ textAlign: "center", marginTop: "3.5rem" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p style={{ color: "#6B7280", marginBottom: "1.2rem", fontSize: "0.92rem" }}>
            Vous n'avez pas trouvé votre réponse ?
          </p>
          <a
            href="/contact"
            style={{
              display: "inline-block",
              background: "rgba(255,105,58,0.08)",
              border: "1px solid rgba(255,105,58,0.28)",
              color: "#FF693A",
              fontWeight: 700,
              padding: "13px 30px",
              borderRadius: "50px",
              textDecoration: "none",
              fontSize: "0.92rem",
              transition: "all 0.22s",
              letterSpacing: "0.2px",
            }}
          >
            Contactez-nous →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
