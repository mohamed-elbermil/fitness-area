import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from "./assets/components/Header";
import Bubble from "./assets/components/Bubble";
import MainContent from "./assets/components/MainContent";
import TabSwitcher from "./assets/components/TabSwitcher";
import ServicesPromotion from "./assets/components/ServicesPromotion";
import Video from "./assets/components/Video";
import Formule from "./pages/Formule";

function Layout({ children }) {
  const location = useLocation();
  // Liste des routes où tu ne veux PAS afficher le Header, etc.
  const noLayoutRoutes = ["/formules"];

  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && (
        <>
          <Bubble />
          <TabSwitcher />
          <MainContent />
          <ServicesPromotion />
          <Video />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<h2>Accueil</h2>} />
                <Route path="/formules" element={<Formule />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
