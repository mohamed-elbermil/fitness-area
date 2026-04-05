import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Flame, Dumbbell, Zap, Heart,
  Star, Quote, ChevronLeft, ChevronRight,
  Check, Crown, Shield, Clock, Smartphone,
  Activity, Target, TrendingUp, ChevronDown,
  Award, Medal, Users,
} from "lucide-react";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/Footer";
import banner1 from "../assets/images/banner-1.jpg";
import "../assets/style/Header.css";

/* ═══════════════════════════════════════════
   UTILS
═══════════════════════════════════════════ */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

function SectionLabel({ children }) {
  return (
    <p style={{ color: "#FF693A", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "2.8px", textTransform: "uppercase", marginBottom: "0.9rem" }}>
      {children}
    </p>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900, color: "#fff", textTransform: "uppercase", lineHeight: 1.08, margin: 0 }}>
      {children}
    </h2>
  );
}

function AnimatedNumber({ value, duration = 1600, suffix = "" }) {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setStarted(true), 700); return () => clearTimeout(t); }, []);
  useEffect(() => {
    if (!started) return;
    let n = 0;
    const step = value / (duration / 16);
    let raf;
    const tick = () => { n += step; if (n < value) { setDisplay(Math.floor(n)); raf = requestAnimationFrame(tick); } else setDisplay(value); };
    tick();
    return () => cancelAnimationFrame(raf);
  }, [started, value, duration]);
  return <span className="stat-number">{display}{suffix}</span>;
}

/* ═══════════════════════════════════════════
   DATA
═══════════════════════════════════════════ */
const services = [
  { icon: <Flame size={26} />, title: "Brûlez les graisses", sub: "Cardio & HIIT", desc: "Équipements cardio dernière génération et programmes HIIT pour brûler jusqu'à 800 kcal par séance. Résultats visibles dès 30 jours.", metric: "−800 kcal / séance" },
  { icon: <Dumbbell size={26} />, title: "Forgez votre corps", sub: "Musculation Premium", desc: "Machines de pointe, poids libres et programmes personnalisés pour sculpter et développer votre musculature en toute sécurité.", metric: "+12 kg de muscle en moyenne" },
  { icon: <Zap size={26} />, title: "Rechargez l'énergie", sub: "+160 Cours / semaine", desc: "Boxing, aquabiking, yoga, cycling, LesMills… +160 cours animés par des coachs certifiés pour ne jamais vous ennuyer.", metric: "160+ cours / semaine" },
  { icon: <Heart size={26} />, title: "Détendez corps & esprit", sub: "Espace Bien-être Premium", desc: "Hammam, sauna, piscine et yoga pour récupérer et vous ressourcer dans notre espace bien-être haut de gamme.", metric: "Hammam · Sauna · Piscine" },
];

const whyUs = [
  { num: "01", title: "Coachs certifiés d'État", desc: "Chaque coach est titulaire d'un diplôme d'État (BPJEPS/DEJEPS) et suit des formations continues. Vous êtes entre de vraies mains expertes." },
  { num: "02", title: "Programmes 100 % sur-mesure", desc: "Pas de programme générique. Votre coach construit un plan adapté à votre morphologie, vos objectifs et votre rythme de vie." },
  { num: "03", title: "Résultats visibles en 30 jours", desc: "Notre méthode combine entraînement, nutrition et récupération pour des résultats rapides, durables et sans blessure." },
];

const tabsData = [
  {
    id: "activity", label: "Activités", icon: <Activity size={17} />,
    cards: [
      { image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Musculation", desc: "Développez votre force et sculptez votre corps avec nos équipements de pointe.", cat: "Force" },
      { image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Cardio Training", desc: "Améliorez votre endurance cardiovasculaire avec nos programmes dynamiques.", cat: "Endurance" },
      { image: "https://images.pexels.com/photos/3984340/pexels-photo-3984340.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Yoga & Pilates", desc: "Trouvez l'équilibre parfait entre flexibilité, force et sérénité.", cat: "Bien-être" },
    ],
  },
  {
    id: "coaching", label: "Coaching", icon: <Target size={17} />,
    cards: [
      { image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Coach Personnel", desc: "Un accompagnement individuel pour maximiser vos résultats en toute sécurité.", cat: "Premium" },
      { image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Coaching Nutrition", desc: "Optimisez votre alimentation avec nos experts en nutrition sportive.", cat: "Nutrition" },
      { image: "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Suivi Mental", desc: "Développez votre mental de champion avec nos coachs spécialisés.", cat: "Mental" },
    ],
  },
  {
    id: "tracking", label: "Suivi", icon: <TrendingUp size={17} />,
    cards: [
      { image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Analytics Avancés", desc: "Visualisez vos progrès avec des graphiques détaillés et des métriques précises.", cat: "Data" },
      { image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Objectifs Personnalisés", desc: "Définissez et atteignez vos objectifs avec notre système de suivi intelligent.", cat: "Goals" },
      { image: "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Communauté", desc: "Partagez vos succès et motivez-vous avec notre communauté active.", cat: "Social" },
    ],
  },
];

const testimonials = [
  { name: "Sophie M.", age: 34, city: "Lyon 3e", avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150", result: "−18 kg en 5 mois", tag: "Perte de poids", stars: 5, quote: "Avant Fitness Area, j'avais essayé plusieurs salles sans résultat. Mon coach m'a donné un programme sur-mesure et m'a suivi chaque semaine. En 5 mois, j'ai perdu 18 kg. C'est la meilleure décision de ma vie." },
  { name: "Karim B.", age: 28, city: "Villeurbanne", avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150", result: "+12 kg de muscle en 8 mois", tag: "Prise de masse", stars: 5, quote: "Les équipements sont top, les coachs maîtrisent vraiment leur sujet. J'ai pris 12 kg de muscle en 8 mois grâce au programme personnalisé et au suivi nutritionnel. Je recommande à 100 % !" },
  { name: "Marie-Laure T.", age: 45, city: "Bron", avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150", result: "Je me sens 10 ans de moins", tag: "Bien-être", stars: 5, quote: "J'avais arrêté le sport depuis 12 ans. L'équipe m'a accueillie sans jugement et accompagnée pas à pas. Le hammam après chaque séance, c'est un vrai plus. Je n'aurais jamais cru retrouver autant d'énergie." },
  { name: "Antoine D.", age: 32, city: "Lyon 8e", avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150", result: "Marathon bouclé en 3h45", tag: "Performance", stars: 5, quote: "Objectif marathon accompli ! Le coaching cardio et les plans d'entraînement personnalisés m'ont permis de boucler mon premier marathon en 3h45. L'équipe Fitness Area a vraiment fait la différence." },
];

const plans = [
  { key: "express", label: "Express", badge: "Économique", price: 49, perWeek: "≈ 11.50", desc: "Accès aux heures creuses — idéal pour les lève-tôt ou les horaires flexibles.", highlighted: false, icon: <Zap size={20} />, services: ["Accès selon horaires spécifiques", "+160 cours collectifs / semaine", "Hammam & sauna", "Boxing, yoga, aquabiking, LesMills", "Studio de cycling", "Piscine & cours aquatiques", "Équipements high-tech"], cta: "Commencer avec Express", url: "https://buy.stripe.com/test_aFa7sKaA69VM9Wx4oCes000" },
  { key: "liberte", label: "Liberté", badge: "⭐ Recommandé", price: 54, perWeek: "≈ 12.50", desc: "Accès illimité 7j/7, à toute heure. La liberté totale pour s'entraîner quand vous voulez.", highlighted: true, icon: <Crown size={20} />, services: ["Accès illimité 7j/7 — sans restriction", "+160 cours collectifs / semaine", "Hammam & sauna", "Boxing, yoga, aquabiking, LesMills", "Studio de cycling", "Piscine & cours aquatiques", "Équipements high-tech", "Application mobile incluse"], cta: "Je m'inscris — Liberté", url: "https://buy.stripe.com/test_aFa7sKaA69VM9Wx4oCes000" },
];

const coaches = [
  { name: "THOMAS", role: "Musculation & Force", cert: "DEJEPS", exp: "8 ans", img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "SARAH", role: "Nutrition & Bien-être", cert: "Diét. sportive", exp: "6 ans", img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "MARC", role: "Cardio & HIIT", cert: "BPJEPS AF", exp: "5 ans", img: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

const faqs = [
  { q: "Y a-t-il un engagement minimum ?", a: "Non, aucun. Nos abonnements sont sans engagement annuel. Vous pouvez vous inscrire et résilier à tout moment, sans frais ni pénalité." },
  { q: "Comment fonctionne la séance de découverte offerte ?", a: "Contactez-nous via le formulaire. Nous vous accueillerons pour une visite complète et une séance guidée par un coach certifié. 100 % gratuit, sans engagement." },
  { q: "Les coachs sont-ils certifiés ?", a: "Absolument. Tous nos coachs sont titulaires de diplômes d'État (BPJEPS, DEJEPS ou équivalent) et suivent des formations continues." },
  { q: "Quels sont les horaires d'ouverture ?", a: "Avec la formule Liberté, accédez à la salle 24h/24 et 7j/7 grâce à votre badge. La formule Express donne accès aux créneaux hors heures de pointe." },
  { q: "Je suis grand débutant, puis-je venir ?", a: "Bien sûr. Nos coachs accueillent les débutants avec bienveillance et construisent un programme adapté à votre niveau pour progresser en sécurité." },
];

const marqueeItems = ["MUSCULATION", "CARDIO TRAINING", "YOGA", "HIIT", "BOXING", "CYCLING", "AQUABIKING", "NUTRITION", "LESMILLS", "PILATES", "WELL-BEING", "STRETCHING"];

/* ═══════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════ */
export default function Home() {
  const [activeTab, setActiveTab] = useState("activity");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const activeTabData = tabsData.find((t) => t.id === activeTab);
  const prevT = () => setCurrentTestimonial((c) => (c - 1 + testimonials.length) % testimonials.length);
  const nextT = () => setCurrentTestimonial((c) => (c + 1) % testimonials.length);
  const t = testimonials[currentTestimonial];

  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "#fff" }}>
      <Navbar />

      {/* ══════════════════════════════════
          1 · HERO
      ══════════════════════════════════ */}
      <header>
        <div className="nav-banner">
          <div className="banner">
            <div className="banner-overlay" />

            <motion.div
              className="banner-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <motion.div className="banner-badge" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
                <span className="badge-dot" />
                Séance de découverte offerte pour tout nouveau membre
              </motion.div>

              <h1>
                Transforme ton corps.
                <br />
                <span className="h1-accent">Dépasse tes limites.</span>
              </h1>

              <p className="banner-sub">
                16 ans d'expertise · Coachs certifiés · +160 cours/semaine
                <br />
                Tes résultats commencent aujourd'hui.
              </p>

              <motion.div className="btn-both" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
                <Link to="/contact" className="btn-primary-hero">Séance découverte OFFERTE →</Link>
                <Link to="/formules" className="btn-secondary-hero">Voir les formules</Link>
              </motion.div>
            </motion.div>

            <div className="banner-stats">
              {[{ value: 90, suffix: "%", label: "de satisfaction" }, { value: 16, suffix: "", label: "ans d'expertise" }, { value: 500, suffix: "+", label: "membres actifs" }].map((s, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="stat-divider" />}
                  <motion.div className="stat-item" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.15, duration: 0.6 }}>
                    <AnimatedNumber value={s.value} suffix={s.suffix} />
                    <span className="stat-label">{s.label}</span>
                  </motion.div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════
          2 · MARQUEE STRIP
      ══════════════════════════════════ */}
      <div style={{ background: "#FF693A", padding: "14px 0", overflow: "hidden", borderTop: "none" }}>
        <style>{`
          @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .marquee-track { display: flex; width: max-content; animation: marquee 28s linear infinite; }
          .marquee-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{ color: "#000", fontWeight: 900, fontSize: "0.78rem", letterSpacing: "2px", textTransform: "uppercase", padding: "0 2.2rem", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "2.2rem" }}>
              {item}
              <span style={{ opacity: 0.4, fontSize: "0.5rem" }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════
          3 · SERVICES — BÉNÉFICES
      ══════════════════════════════════ */}
      <section style={{ background: "#080808", padding: "7rem 2rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <motion.div style={{ maxWidth: "1200px", margin: "0 auto" }} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }}>
          <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "4.5rem" }}>
            <SectionLabel>NOS SERVICES</SectionLabel>
            <SectionTitle>Tout ce dont tu as besoin<br /><span style={{ color: "#FF693A" }}>pour transformer ta vie</span></SectionTitle>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(255px, 1fr))", gap: "1.4rem" }}>
            {services.map((s, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -8, transition: { duration: 0.24 } }}
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "22px", padding: "2rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #FF693A, transparent)" }} />
                <div style={{ width: "54px", height: "54px", background: "rgba(255,105,58,0.1)", border: "1px solid rgba(255,105,58,0.18)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#FF693A", marginBottom: "1.1rem" }}>{s.icon}</div>
                <div style={{ display: "inline-block", background: "rgba(255,105,58,0.07)", border: "1px solid rgba(255,105,58,0.2)", color: "#FF693A", fontSize: "10.5px", fontWeight: 700, padding: "3px 10px", borderRadius: "50px", marginBottom: "0.7rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>{s.metric}</div>
                <p style={{ color: "#4B5563", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.2px", marginBottom: "0.4rem" }}>{s.sub}</p>
                <h3 style={{ color: "#fff", fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.7rem" }}>{s.title}</h3>
                <p style={{ color: "#9CA3AF", fontSize: "0.9rem", lineHeight: 1.65 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════
          4 · POURQUOI NOUS CHOISIR (NEW)
      ══════════════════════════════════ */}
      <section style={{ background: "#0a0a0a", padding: "7rem 2rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          {/* Left — text */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <SectionLabel>POURQUOI NOUS CHOISIR</SectionLabel>
            <SectionTitle>Une approche<br /><span style={{ color: "#FF693A" }}>qui fait la différence.</span></SectionTitle>
            <p style={{ color: "#6B7280", fontSize: "0.95rem", lineHeight: 1.7, margin: "1.5rem 0 3rem" }}>
              Chez Fitness Area, chaque détail est pensé pour maximiser vos résultats : de la qualité des équipements à l'expertise de nos coachs.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
              {whyUs.map((w, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }}
                  style={{ display: "flex", gap: "1.4rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "2.8rem", fontWeight: 900, color: "rgba(255,105,58,0.18)", lineHeight: 1, flexShrink: 0, fontFeatureSettings: '"tnum"' }}>{w.num}</span>
                  <div>
                    <h4 style={{ color: "#fff", fontWeight: 800, fontSize: "1rem", marginBottom: "0.35rem" }}>{w.title}</h4>
                    <p style={{ color: "#9CA3AF", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>{w.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Right — image */}
          <motion.div initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.75 }}
            style={{ position: "relative", borderRadius: "26px", overflow: "hidden", height: "520px" }}>
            <img src="https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Coach personnalisé"
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.75) contrast(1.1)" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,105,58,0.15) 0%, transparent 60%)" }} />
            {/* Floating stat card */}
            <div style={{ position: "absolute", bottom: "2rem", left: "2rem", background: "rgba(8,8,8,0.88)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,105,58,0.28)", borderRadius: "18px", padding: "1.2rem 1.6rem" }}>
              <div style={{ fontSize: "2rem", fontWeight: 900, color: "#FF693A", lineHeight: 1 }}>96%</div>
              <div style={{ color: "#9CA3AF", fontSize: "0.82rem", marginTop: "4px" }}>de nos membres<br />recommandent</div>
            </div>
          </motion.div>
        </div>

        {/* Responsive override */}
        <style>{`
          @media (max-width: 900px) {
            .why-grid { grid-template-columns: 1fr !important; }
            .why-img { display: none !important; }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════
          5 · ACTIVITÉS (TABS)
      ══════════════════════════════════ */}
      <section style={{ background: "#080808", padding: "7rem 2rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div style={{ textAlign: "center", marginBottom: "3rem" }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionLabel>PROGRAMMES</SectionLabel>
            <SectionTitle>Des activités pour <span style={{ color: "#FF693A" }}>chaque objectif</span></SectionTitle>
          </motion.div>
          {/* Tab buttons */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.6rem", marginBottom: "3.5rem", flexWrap: "wrap" }}>
            {tabsData.map((tab) => {
              const on = activeTab === tab.id;
              return (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "11px 26px", borderRadius: "50px", border: on ? "none" : "1px solid rgba(255,255,255,0.1)", background: on ? "#FF693A" : "rgba(255,255,255,0.04)", color: on ? "#000" : "#9CA3AF", fontWeight: on ? 700 : 500, cursor: "pointer", fontSize: "0.88rem", fontFamily: "inherit", transition: "all 0.2s", boxShadow: on ? "0 0 24px rgba(255,105,58,0.35)" : "none" }}>
                  {tab.icon} {tab.label}
                </button>
              );
            })}
          </div>
          {/* Cards */}
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.32 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.4rem" }}>
              {activeTabData.cards.map((card, i) => (
                <motion.div key={i} whileHover={{ y: -6, transition: { duration: 0.24 } }}
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", overflow: "hidden" }}>
                  <div style={{ position: "relative", height: "210px" }}>
                    <img src={card.image} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.72) 0%, transparent 55%)" }} />
                    <span style={{ position: "absolute", top: "1rem", right: "1rem", background: "rgba(255,105,58,0.9)", color: "#000", fontSize: "10.5px", fontWeight: 800, padding: "4px 11px", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "0.6px" }}>{card.cat}</span>
                  </div>
                  <div style={{ padding: "1.4rem 1.6rem 1.6rem" }}>
                    <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.5rem" }}>{card.title}</h3>
                    <p style={{ color: "#9CA3AF", fontSize: "0.88rem", lineHeight: 1.55 }}>{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════════════════════════
          6 · TÉMOIGNAGES
      ══════════════════════════════════ */}
      <section style={{ background: "#0d0d0d", padding: "7rem 2rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.div style={{ textAlign: "center", marginBottom: "4rem" }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionLabel>TÉMOIGNAGES</SectionLabel>
            <SectionTitle>Ils ont transformé leur vie.<br /><span style={{ color: "#FF693A" }}>Toi aussi, tu peux.</span></SectionTitle>
          </motion.div>
          {/* Stats */}
          <div style={{ display: "flex", justifyContent: "center", gap: "3.5rem", marginBottom: "4.5rem", flexWrap: "wrap" }}>
            {[{ v: "500+", l: "membres satisfaits" }, { v: "4.9/5", l: "note moyenne" }, { v: "96%", l: "recommandent" }].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.3rem", fontWeight: 900, color: "#FF693A", lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontSize: "0.8rem", color: "#6B7280", marginTop: "5px", textTransform: "uppercase", letterSpacing: "0.8px" }}>{s.l}</div>
              </div>
            ))}
          </div>
          {/* Carousel */}
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <AnimatePresence mode="wait">
              <motion.div key={currentTestimonial} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.38 }}
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "26px", padding: "3rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #FF693A, transparent)" }} />
                <Quote size={34} style={{ color: "#FF693A", opacity: 0.28, marginBottom: "1.3rem" }} />
                <div style={{ display: "flex", gap: "4px", marginBottom: "1.1rem" }}>
                  {Array.from({ length: t.stars }).map((_, i) => <Star key={i} size={17} fill="#FF693A" color="#FF693A" />)}
                </div>
                <div style={{ display: "inline-block", background: "rgba(255,105,58,0.1)", border: "1px solid rgba(255,105,58,0.28)", color: "#FF693A", fontSize: "12px", fontWeight: 700, padding: "5px 15px", borderRadius: "50px", marginBottom: "1.4rem" }}>🏆 {t.result}</div>
                <p style={{ color: "#D1D5DB", fontSize: "1.03rem", lineHeight: 1.75, fontStyle: "italic", marginBottom: "1.8rem" }}>"{t.quote}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <img src={t.avatar} alt={t.name} style={{ width: "52px", height: "52px", borderRadius: "50%", objectFit: "cover", border: "2px solid #FF693A", flexShrink: 0 }} />
                  <div>
                    <div style={{ color: "#fff", fontWeight: 700 }}>{t.name}, {t.age} ans</div>
                    <div style={{ color: "#6B7280", fontSize: "0.84rem" }}>{t.city} · {t.tag}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            {/* Nav */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", marginTop: "2rem" }}>
              <button onClick={prevT} style={{ width: "42px", height: "42px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "50%", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "inherit" }}>
                <ChevronLeft size={18} />
              </button>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrentTestimonial(i)} style={{ width: i === currentTestimonial ? "24px" : "8px", height: "8px", borderRadius: "4px", border: "none", background: i === currentTestimonial ? "#FF693A" : "rgba(255,255,255,0.2)", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
              ))}
              <button onClick={nextT} style={{ width: "42px", height: "42px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "50%", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "inherit" }}>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          7 · TARIFS
      ══════════════════════════════════ */}
      <section style={{ background: "#080808", padding: "7rem 2rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <motion.div style={{ textAlign: "center", marginBottom: "4rem" }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionLabel>TARIFS & FORMULES</SectionLabel>
            <SectionTitle>Un investissement.<br /><span style={{ color: "#FF693A" }}>Des résultats qui durent.</span></SectionTitle>
            <p style={{ color: "#6B7280", fontSize: "0.93rem", marginTop: "1rem" }}>Sans engagement · Résiliez à tout moment</p>
          </motion.div>
          <motion.div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem", alignItems: "start" }} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
            {plans.map((plan) => (
              <motion.div key={plan.key} variants={fadeUp} whileHover={{ y: -6, transition: { duration: 0.24 } }}
                style={{ background: plan.highlighted ? "linear-gradient(145deg, rgba(255,105,58,0.08) 0%, rgba(255,105,58,0.02) 100%)" : "rgba(255,255,255,0.03)", border: `1px solid ${plan.highlighted ? "rgba(255,105,58,0.38)" : "rgba(255,255,255,0.07)"}`, borderRadius: "26px", padding: "2.6rem", position: "relative", overflow: "hidden", boxShadow: plan.highlighted ? "0 0 64px rgba(255,105,58,0.12)" : "none" }}>
                {plan.highlighted && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #FF693A, #ff9c63, #FF693A)" }} />}
                <div style={{ display: "inline-flex", alignItems: "center", background: plan.highlighted ? "rgba(255,105,58,0.1)" : "rgba(107,114,128,0.1)", border: `1px solid ${plan.highlighted ? "rgba(255,105,58,0.32)" : "rgba(107,114,128,0.28)"}`, color: plan.highlighted ? "#FF693A" : "#6B7280", fontSize: "11px", fontWeight: 700, padding: "5px 14px", borderRadius: "50px", marginBottom: "1.4rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>{plan.badge}</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.4rem" }}>
                  <span style={{ color: plan.highlighted ? "#FF693A" : "#6B7280" }}>{plan.icon}</span>
                  <h3 style={{ color: "#fff", fontSize: "1.6rem", fontWeight: 900, margin: 0 }}>{plan.label}</h3>
                </div>
                <p style={{ color: "#6B7280", fontSize: "0.88rem", marginBottom: "1.6rem", lineHeight: 1.55 }}>{plan.desc}</p>
                <div style={{ marginBottom: "0.3rem" }}>
                  <span style={{ fontSize: "3.8rem", fontWeight: 900, color: plan.highlighted ? "#FF693A" : "#fff", lineHeight: 1, letterSpacing: "-2px" }}>{plan.price}€</span>
                  <span style={{ color: "#6B7280", fontSize: "1rem", marginLeft: "6px" }}>/mois</span>
                </div>
                <p style={{ color: "#4B5563", fontSize: "0.82rem", marginBottom: "1.8rem" }}>{plan.perWeek}€ / semaine · Sans engagement</p>
                <a href={plan.url} style={{ display: "block", textAlign: "center", background: plan.highlighted ? "#FF693A" : "rgba(255,255,255,0.07)", color: plan.highlighted ? "#000" : "#fff", fontWeight: 800, fontSize: "0.92rem", padding: "14px 24px", borderRadius: "50px", textDecoration: "none", marginBottom: "1.8rem", border: plan.highlighted ? "none" : "1px solid rgba(255,255,255,0.12)", boxShadow: plan.highlighted ? "0 0 32px rgba(255,105,58,0.38)" : "none" }}>{plan.cta}</a>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {plan.services.map((s, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.7rem", color: "#D1D5DB", fontSize: "0.88rem" }}>
                      <Check size={14} style={{ color: plan.highlighted ? "#FF693A" : "#6B7280", flexShrink: 0 }} />{s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
          <motion.div style={{ textAlign: "center", marginTop: "2.5rem", padding: "1.4rem 2rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <p style={{ color: "#6B7280", fontSize: "0.87rem" }}>🔒 Paiement sécurisé · Sans engagement · Résiliation en 1 clic · <Link to="/formules" style={{ color: "#FF693A", fontWeight: 600, marginLeft: "4px" }}>Voir toutes les formules →</Link></p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════
          8 · COACHS
      ══════════════════════════════════ */}
      <section style={{ background: "#0a0a0a", padding: "7rem 2rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <SectionLabel>EXPERTISE</SectionLabel>
              <SectionTitle>Nos <span style={{ color: "#FF693A", fontStyle: "italic", fontWeight: 500 }}>coachs certifiés</span></SectionTitle>
            </motion.div>
            <Link to="/coaching" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,105,58,0.07)", border: "1px solid rgba(255,105,58,0.28)", color: "#FF693A", fontWeight: 700, padding: "12px 24px", borderRadius: "50px", textDecoration: "none", fontSize: "0.9rem", alignSelf: "center" }}>Voir l'équipe complète →</Link>
          </div>
          <motion.div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.4rem" }} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
            {coaches.map((c, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -6, transition: { duration: 0.24 } }}
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "22px", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "relative", height: "280px" }}>
                  <img src={c.img} alt={`Coach ${c.name}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.88)" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, transparent 55%)" }} />
                  <div style={{ position: "absolute", top: "1rem", right: "1rem", background: "rgba(255,105,58,0.9)", color: "#000", fontSize: "10.5px", fontWeight: 800, padding: "4px 11px", borderRadius: "50px", textTransform: "uppercase" }}>{c.cert}</div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.2rem 1.4rem" }}>
                    <div style={{ color: "#fff", fontWeight: 900, fontSize: "1.05rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>{c.name}</div>
                    <div style={{ color: "#FF693A", fontSize: "0.85rem", fontWeight: 600, marginTop: "2px" }}>{c.role}</div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", marginTop: "2px" }}>{c.exp} d'expérience</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════
          9 · FAQ
      ══════════════════════════════════ */}
      <section style={{ background: "#080808", padding: "7rem 2rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <motion.div style={{ textAlign: "center", marginBottom: "4rem" }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionLabel>FAQ</SectionLabel>
            <SectionTitle>Vos questions.<br /><span style={{ color: "#FF693A" }}>Nos réponses.</span></SectionTitle>
          </motion.div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.4 }}
                style={{ border: `1px solid ${openFaq === i ? "rgba(255,105,58,0.25)" : "rgba(255,255,255,0.07)"}`, borderRadius: "16px", overflow: "hidden", background: openFaq === i ? "rgba(255,105,58,0.04)" : "rgba(255,255,255,0.02)", transition: "background 0.3s, border-color 0.3s" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", padding: "1.35rem 1.8rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", background: "none", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}>
                  <span style={{ color: "#fff", fontWeight: 600, fontSize: "0.96rem", lineHeight: 1.4 }}>{faq.q}</span>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.28 }} style={{ flexShrink: 0, color: openFaq === i ? "#FF693A" : "#6B7280" }}>
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32 }} style={{ overflow: "hidden" }}>
                      <div style={{ padding: "0 1.8rem 1.4rem", color: "#9CA3AF", fontSize: "0.91rem", lineHeight: 1.7, borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1rem" }}>{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          10 · FINAL CTA
      ══════════════════════════════════ */}
      <section style={{ background: "#0a0a0a", padding: "7rem 2rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          {/* Benefits row */}
          <motion.div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem", marginBottom: "5rem" }} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            {[{ icon: <Shield size={22} />, l: "Sans engagement" }, { icon: <Clock size={22} />, l: "Résiliation en 1 clic" }, { icon: <Smartphone size={22} />, l: "App mobile incluse" }, { icon: <Users size={22} />, l: "Partage de carte famille" }].map((b, i) => (
              <motion.div key={i} variants={fadeUp} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", textAlign: "center", padding: "1.4rem 1rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "18px" }}>
                <div style={{ width: "50px", height: "50px", background: "rgba(255,105,58,0.1)", border: "1px solid rgba(255,105,58,0.18)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#FF693A" }}>{b.icon}</div>
                <span style={{ color: "#D1D5DB", fontWeight: 600, fontSize: "0.88rem", lineHeight: 1.3 }}>{b.l}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA block */}
          <motion.div style={{ textAlign: "center" }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
            <SectionLabel>PRÊT À COMMENCER ?</SectionLabel>
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.05, marginBottom: "1.2rem" }}>
              Ta séance de découverte
              <br /><span style={{ color: "#FF693A" }}>est offerte.</span>
            </h2>
            <p style={{ color: "#6B7280", fontSize: "1rem", maxWidth: "480px", margin: "0 auto 2.8rem", lineHeight: 1.7 }}>
              Viens tester la salle, rencontrer un coach et découvrir nos formules — sans engagement, sans carte bleue.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <motion.a href="/contact" whileHover={{ scale: 1.04, boxShadow: "0 0 64px rgba(255,105,58,0.58)" }}
                style={{ display: "inline-block", background: "#FF693A", color: "#000", fontWeight: 900, fontSize: "1rem", padding: "17px 44px", borderRadius: "50px", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.8px", boxShadow: "0 0 40px rgba(255,105,58,0.38)" }}>
                Je réserve ma séance →
              </motion.a>
              <Link to="/formules"
                style={{ display: "inline-block", background: "rgba(255,255,255,0.06)", color: "#fff", fontWeight: 600, fontSize: "1rem", padding: "17px 44px", borderRadius: "50px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.14)" }}>
                Voir les formules
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
