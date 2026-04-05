import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./assets/components/Header";
import ServicesPromotion from "./assets/components/ServicesPromotion";
import TabSwitcher from "./assets/components/TabSwitcher";
import Testimonials from "./assets/components/Testimonials";
import PricingSection from "./assets/components/PricingSection";
import MainContent from "./assets/components/MainContent";
import FAQ from "./assets/components/FAQ";
import Footer from "./assets/components/Footer";

import Formule from "./pages/Formule";
import Coaching from "./pages/Coaching";
import Contact from "./pages/Contact";

function Layout() {
  const location = useLocation();
  const noLayoutRoutes = ["/formules", "/coaching", "/contact"];
  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Header />}
      <Routes>
        <Route path="/" element={<span />} />
        <Route path="/formules" element={<Formule />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!hideLayout && (
        <>
          {/* 1. Bénéfices clients — glassmorphism dark */}
          <ServicesPromotion />

          {/* 2. Activités / Coaching / Suivi — tabs animés */}
          <TabSwitcher />

          {/* 3. Témoignages — social proof + carousel */}
          <Testimonials />

          {/* 4. Tarifs — pricing cards avec "Recommandé" */}
          <PricingSection />

          {/* 5. Coachs certifiés */}
          <MainContent />

          {/* 6. FAQ — accordion animé */}
          <FAQ />

          {/* Footer */}
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
