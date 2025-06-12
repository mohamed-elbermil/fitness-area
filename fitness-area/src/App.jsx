import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./assets/components/Header";
import Bubble from "./assets/components/Bubble";
import MainContent from "./assets/components/MainContent";
import TabSwitcher from "./assets/components/TabSwitcher";
import ServicesPromotion from "./assets/components/ServicesPromotion";
import Video from "./assets/components/Video";
import Formule from "./pages/Formule";
import Coaching from "./pages/Coaching";

// Ce Layout est à l'intérieur d'une Route
function Layout() {
  const location = useLocation();
  const noLayoutRoutes = ["/formules", "/coaching"];
  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Header />}
      <Routes>
        <Route path="/" element={<h2></h2>} />
        <Route path="/formules" element={<Formule />} />
        <Route path="/coaching" element={<Coaching />} />
      </Routes>
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
      <Layout />
    </Router>
  );
}

export default App;
