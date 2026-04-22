import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BusinessPage from "./pages/BusinessPage";
import BranchDetails from "./pages/BranchDetails";
import Dairy from "./branches/Dairy"
import IceCream from"./branches/IceCream";
import Restaurant from "./branches/Restaurant";
import Packaged from "./branches/Packaged";
import Retail from "./branches/Retail";
import Logistics from "./branches/Logistics";

function App() {
  const location = useLocation();

  return (
    <div className="font-sans bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/business/:id" element={<BranchDetails />} />
          <Route path="/business/dairy" element={<Dairy />} />
          <Route path="/business/icecream" element={<IceCream />} />
          <Route path="/business/restaurant" element={<Restaurant />} />
          <Route path="/business/packaged" element={<Packaged />} />
          <Route path="/business/retail" element={<Retail />} />
          <Route path="/business/logistics" element={<Logistics />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;