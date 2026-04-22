import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import bus1 from "../assets/bus1.jpeg"

const ShreemayaExpress = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState("home");
  const [dark, setDark] = useState(false);
  const [selected, setSelected] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const theme = dark ? "bg-[#0b0f1a] text-white" : "bg-[#f5f7ff] text-black";

  const cardTheme =
    "bg-white/70 dark:bg-gray-900/70 backdrop-blur shadow-lg rounded-2xl p-5 cursor-pointer hover:scale-105 transition";

  // ================= NAVBAR =================
const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white dark:bg-black/60 backdrop-blur border-b dark:border-gray-800 px-4 md:px-10 py-4 text-black dark:text-white transition-colors duration-300">

    <div className="flex justify-between items-center">

      {/* LOGO */}
      <h1
        onClick={() => navigate("/")}   // localhost:5173
        className="font-bold text-xl cursor-pointer text-blue-500 dark:text-white"
      >
        🚚 Shreemaya Express
      </h1>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex items-center gap-6 font-medium text-black dark:text-white">

        <input
          type="text"
          placeholder="Search services..."
          className="px-3 py-1 border rounded w-56 bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />

        {/* HOME */}
        <button onClick={() => goTo("home")} className="hover:text-blue-500">
          Home
        </button>

        {/* GROUP -> ROOT (localhost:5173) */}
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Shreemaya Group
        </button>

        {/* ROUTES */}
        <button onClick={() => goTo("tours")} className="hover:text-blue-500">
          Tours
        </button>

        <button onClick={() => goTo("parcel")} className="hover:text-blue-500">
          Parcel
        </button>

        <button onClick={() => goTo("about")} className="hover:text-blue-500">
          About
        </button>

        {/* DARK MODE */}
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 rounded bg-blue-500 text-white"
        >
          {dark ? "☀️" : "🌙"}
        </button>

      </div>

      {/* MOBILE BUTTON */}
      <button
        className="md:hidden text-2xl text-black dark:text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

    </div>

    {/* ================= MOBILE MENU ================= */}
    {menuOpen && (
      <div className="md:hidden flex flex-col gap-4 mt-4 font-medium text-black dark:text-white">

        <input
          type="text"
          placeholder="Search services..."
          className="px-3 py-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
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
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
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

 // ================= TOUR PAGE (MODERN UI) =================
const Tours = () => {
  const [selectedBus, setSelectedBus] = useState(null);
  const [dark, setDark] = useState(false);

  // ================= DARK MODE FIX =================
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const buses = [
    {
      name: "Shreemaya Luxury Bus",
      route: "Delhi → Bhopal",
      price: "₹999",
      time: "10:00 AM",
      rating: 4.8,
      reviews: 2100,
      users: "Raj, Amit, Priya, Mohan",
      desc: "Ultra luxury AC sleeper bus with full comfort seats, WiFi, charging ports and smooth travel experience.",
      img: bus1,
    },
    {
      name: "Express AC Bus",
      route: "Mumbai → Indore",
      price: "₹1299",
      time: "08:30 PM",
      rating: 4.6,
      reviews: 1500,
      users: "Neha, Rohit, Suresh",
      desc: "Fast express AC bus with premium seating and night travel comfort.",
      img: "https://s1.rdbuz.com/bo-images/IND/WM/30426/1709/FR/DS/webp/nF7HmN.webp",
    },
    {
      name: "Sleeper Coach",
      route: "Kolkata → Patna",
      price: "₹899",
      time: "09:00 PM",
      rating: 4.4,
      reviews: 980,
      users: "Aman, Rahul, Sita",
      desc: "Comfort sleeper coach with privacy curtains and long route travel comfort.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5CmVhdMV0gUG5pkbSPxVDqPxTUhaErfhIA&s",
    },
  ];

  const handleWhatsApp = (bus) => {
    const msg = `Hi, I want to book ${bus.name} (${bus.route}) at ${bus.price}`;
    window.open(`https://wa.me/917654267227?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div className="pt-28 px-6 min-h-screen bg-gray-100 dark:bg-gray-950 transition-all duration-300">

      {/* DARK TOGGLE */}
      <button
        onClick={() => setDark(!dark)}
        className="fixed top-4 right-4 z-50 bg-blue-500 text-white px-3 py-2 rounded"
      >
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        🚌 Tour Booking
      </h1>

      {/* LIST */}
      {!selectedBus && (
        <div className="grid md:grid-cols-3 gap-6">

          {buses.map((bus, i) => (
            <div
              key={i}
              onClick={() => setSelectedBus(bus)}
              className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <img src={bus.img} className="w-full h-44 object-cover" />

              <div className="p-4">
                <h2 className="text-lg font-bold">{bus.name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {bus.route}
                </p>

                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-green-500 font-semibold">
                    {bus.price}
                  </span>
                  <span className="text-blue-400">{bus.time}</span>
                </div>
              </div>
            </div>
          ))}

        </div>
      )}

      {/* DETAIL VIEW */}
      {selectedBus && (
        <div className="flex justify-center">
          <div className="w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">

            <img src={selectedBus.img} className="w-full h-80 object-cover" />

            <div className="p-6 text-gray-900 dark:text-white">

              <h1 className="text-2xl font-bold">{selectedBus.name}</h1>

              <p className="text-gray-500 dark:text-gray-300 mt-1">
                {selectedBus.route}
              </p>

              <p className="mt-4 text-gray-700 dark:text-gray-300">
                {selectedBus.desc}
              </p>

              <div className="flex justify-between mt-5">
                <span className="text-green-500 font-bold text-lg">
                  {selectedBus.price}
                </span>
                <span className="text-blue-400">{selectedBus.time}</span>
              </div>

              <div className="mt-4">
                <p className="text-yellow-500 text-lg">
                  ⭐ {selectedBus.rating}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {selectedBus.reviews}+ reviews
                </p>
                <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                  👥 Users: {selectedBus.users}
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setSelectedBus(null)}
                  className="flex-1 bg-gray-500 text-white py-3 rounded-xl"
                >
                  ← Back
                </button>

                <button
                  onClick={() => handleWhatsApp(selectedBus)}
                  className="flex-1 bg-green-500 text-white py-3 rounded-xl"
                >
                  💬 Book on WhatsApp
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};
// ================= PARCEL PAGE =================
const Parcel = () => (
  <div className="pt-28 px-6">
    <h1 className="text-3xl font-bold">📦 Parcel Booking</h1>

    {/* TODO:
      - Pickup location
      - Delivery location
      - Weight calculator
      - Vehicle type (Tempo / Truck / Pickup)
      - Live cost estimate
      - Booking confirmation
    */}
  </div>
);


// ================= ABOUT PAGE =================
const About = () => (
  <div className="pt-28 px-6 text-center">
    <h1 className="text-3xl font-bold">About Shreemaya Group</h1>

    {/* TODO:
      - Company history
      - 6 branches info
      - Mission & Vision
      - Contact details
      - Trust badges
    */}
  </div>
);


// ================= LIVE TRACKING PAGE =================
const Tracking = () => (
  <div className="pt-28 px-6">
    <h1 className="text-3xl font-bold">📍 Live Tracking</h1>

    {/* TODO:
      - Live bus location map (Google Maps / Leaflet)
      - Parcel tracking ID system
      - ETA (Estimated Time of Arrival)
      - Driver status (Active / Idle)
    */}
  </div>
);


// ================= FLEET MANAGEMENT =================
const Fleet = () => (
  <div className="pt-28 px-6">
    <h1 className="text-3xl font-bold">🚚 Fleet System</h1>

    {/* TODO:
      - Bus list (All vehicles)
      - Truck / Tempo management
      - Availability status
      - Maintenance tracking
      - Driver assignment system
    */}
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

      <Footer />
    </div>
  );
};

export default ShreemayaExpress;