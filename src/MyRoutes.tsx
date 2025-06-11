import { Route, Routes } from "react-router-dom";
import Tarification from "./pages/Tarification";
import FaqSection from "./pages/FaqSection";
import Acceuil from "./pages/Acceuil";
import MainLayout from "./layout/MainLayout";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Acceuil />} />

        <Route path="faqSection" element={<FaqSection />} />

        <Route path="tarification" element={<Tarification />} />
      </Route>
    </Routes>
  );
}

export default MyRoutes;
