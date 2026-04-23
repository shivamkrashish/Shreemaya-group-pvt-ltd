import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Tours from "../branches/logistics/TourPage";
import About from "../branches/logistics/About";
import Parcel from "../branches/logistics/Parcel";
import Tracking from "../branches/logistics/Tracking";
import Fleet from "../branches/logistics/Fleet";

const ShreemayaExpress = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState("home");
  const [dark, setDark] = useState(false);
  const [selected, setSelected] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ DARK MODE GLOBAL FIX
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const goTo = (pageName) => {
    setPage(pageName);
    setSelected(null);
    setMenuOpen(false);
  };

  const features = [
    { title: "Tour Booking System", desc: "Book trips with real-time availability.", icon: "🚌", page: "tours" },
    { title: "Parcel Delivery", desc: "Send parcels via truck/tempo/pickup.", icon: "📦", page: "parcel" },
    { title: "Live Tracking", desc: "Track vehicles in real-time system.", icon: "📍", page: "tracking" },
    { title: "Fleet System", desc: "Multiple buses, trucks & vehicles.", icon: "🚚", page: "fleet" },
  ];

  const theme = dark
    ? "bg-[#0b0f1a] text-white"
    : "bg-[#f5f7ff] text-black";

  const cardTheme =
    "bg-white/70 dark:bg-gray-900/70 backdrop-blur shadow-lg rounded-2xl p-5 cursor-pointer hover:scale-105 transition";

  // ================= NAVBAR =================
  const Navbar = () => (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-black/60 backdrop-blur border-b dark:border-gray-800 px-4 md:px-10 py-5 text-black dark:text-white transition-all">

      <div className="flex justify-between items-center">

        <h1
          className="font-bold text-xl cursor-pointer text-blue-500 dark:text-white"
        >
          🚚 Shreemaya Express
        </h1>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-6 font-medium">

          <input
            type="text"
            placeholder="Search services..."
            className="px-3 py-1 border rounded w-56 bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />

          <button onClick={() => goTo("home")}>Home</button>

          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Shreemaya Group
          </button>

          <button onClick={() => goTo("tours")}>Tours</button>
          <button onClick={() => goTo("parcel")}>Parcel</button>
          <button onClick={() => goTo("about")}>About</button>

          {/* DARK BUTTON */}
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 rounded bg-blue-500 text-white"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* MOBILE */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4">

          <input
            type="text"
            placeholder="Search services..."
            className="px-3 py-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white"
          />

          <button onClick={() => goTo("home")}>Home</button>

          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 text-white py-2 rounded"
          >
            Shreemaya Group
          </button>

          <button onClick={() => goTo("tours")}>Tours</button>
          <button onClick={() => goTo("parcel")}>Parcel</button>
          <button onClick={() => goTo("about")}>About</button>

          <button
            onClick={() => setDark(!dark)}
            className="bg-blue-500 text-white px-3 py-2 rounded"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      )}
    </nav>
  );

  // ================= HOME =================
  const Home = () => (
    <div className="pt-28 text-center px-6">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Smart Travel & Logistics Platform
      </motion.h1>

      <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
        Book tours, send parcels, track vehicles and manage everything in one system.
      </p>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => goTo("tours")}
          className="bg-blue-500 text-white px-5 py-3 rounded-xl"
        >
          Explore Tours
        </button>

        <button
          onClick={() => goTo("parcel")}
          className="border border-blue-500 px-5 py-3 rounded-xl"
        >
          Send Parcel
        </button>
      </div>

      {/* FEATURE CARDS */}
      <div className="grid md:grid-cols-4 gap-6 mt-16 px-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={cardTheme}
            onClick={() => goTo(f.page)}
          >
            <div className="text-3xl">{f.icon}</div>
            <h2 className="font-bold mt-2">{f.title}</h2>
            <p className="text-sm text-gray-500">{f.desc}</p>
          </motion.div>
        ))}
      </div>

    </div>
  );

  const Detail = () => (
    <div className="pt-28 px-6">
      <button onClick={() => setSelected(null)}>← Back</button>
      <h1 className="text-3xl font-bold mt-4">{selected} Details</h1>
    </div>
  );

  return (
    <div className={theme}>
      <Navbar />

      {/* ROUTING */}
      {selected ? (
        <Detail />
      ) : page === "home" ? (
        <Home />
      ) : page === "tours" ? (
        <Tours />
      ) : page === "parcel" ? (
        <Parcel />
      ) : page === "tracking" ? (
        <Tracking />
      ) : page === "fleet" ? (
        <Fleet />
      ) : (
        <About />
      )}
<br />
      <Footer />
    </div>
  );
};

export default ShreemayaExpress;