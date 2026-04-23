import React, { useState } from "react";
import { motion } from "framer-motion";

const Parcel = () => {
  const [form, setForm] = useState({
    pickup: "",
    delivery: "",
    weight: "",
    vehicle: "Tempo",
  });

  const [price, setPrice] = useState(null);
  const [error, setError] = useState("");

  // ================= PRICE CALCULATOR =================
  const calculatePrice = () => {
    if (!form.pickup || !form.delivery || !form.weight) {
      setError("⚠️ Please fill all fields first!");
      setPrice(null);
      return;
    }

    setError("");

    let base = 50;
    let weightCost = Number(form.weight) * 10;

    let vehicleCost = 0;
    if (form.vehicle === "Truck") vehicleCost = 200;
    if (form.vehicle === "Pickup") vehicleCost = 100;

    const total = base + weightCost + vehicleCost;
    setPrice(total);
  };

  // ================= WHATSAPP =================
  const handleWhatsApp = () => {
    if (!price) return;

    const msg = `🚚 Shreemaya Parcel Booking

📍 Pickup: ${form.pickup}
📍 Delivery: ${form.delivery}
⚖️ Weight: ${form.weight}kg
🚛 Vehicle: ${form.vehicle}
💰 Price: ₹${price}

Please confirm booking.`;

    window.open(`https://wa.me/917654267227?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div className="pt-28 px-6 min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white transition-all duration-300">

      {/* ================= TITLE ================= */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        📦 Smart Parcel Booking System
      </motion.h1>

      {/* ================= MAIN GRID ================= */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* ================= FORM ================= */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl space-y-4 border dark:border-gray-700"
        >
          <h2 className="text-xl font-bold">📋 Booking Details</h2>

          <input
            type="text"
            placeholder="📍 Pickup Location"
            className="w-full p-3 rounded border focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600"
            onChange={(e) => setForm({ ...form, pickup: e.target.value })}
          />

          <input
            type="text"
            placeholder="📍 Delivery Location"
            className="w-full p-3 rounded border focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600"
            onChange={(e) => setForm({ ...form, delivery: e.target.value })}
          />

          <input
            type="number"
            placeholder="⚖️ Weight (kg)"
            className="w-full p-3 rounded border focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600"
            onChange={(e) => setForm({ ...form, weight: e.target.value })}
          />

          <select
            className="w-full p-3 rounded border dark:bg-gray-800 dark:border-gray-600"
            onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
          >
            <option>Tempo</option>
            <option>Pickup</option>
            <option>Truck</option>
          </select>

          {/* ERROR */}
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            onClick={calculatePrice}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold"
          >
            Calculate Price 💰
          </button>
        </motion.div>

        {/* ================= INFO ================= */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border dark:border-gray-700"
        >
          <h2 className="text-xl font-bold mb-4">
            🚚 Why Choose Us?
          </h2>

          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li>✔ 24-48 hrs Fast Delivery</li>
            <li>✔ Doorstep Pickup & Drop</li>
            <li>✔ Live Tracking System</li>
            <li>✔ Safe & Secure Handling</li>
            <li>✔ Affordable Pricing</li>
          </ul>

          {/* PRICE */}
          {price && (
            <div className="mt-6 p-5 bg-green-100 dark:bg-green-900 rounded-xl text-center animate-pulse">
              <h3 className="text-xl font-bold text-green-600 dark:text-green-300">
                💰 Estimated Price: ₹{price}
              </h3>
            </div>
          )}

          {/* BOOK */}
          {price && (
            <button
              onClick={handleWhatsApp}
              className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold"
            >
              💬 Confirm Booking on WhatsApp
            </button>
          )}
        </motion.div>
      </div>

      {/* ================= EXTRA FEATURES ================= */}
      <div className="mt-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {[
          {
            title: "📍 Live Tracking",
            desc: "Track parcel real-time with GPS updates.",
          },
          {
            title: "⚡ Fast Delivery",
            desc: "Quick dispatch with minimum delay.",
          },
          {
            title: "🔒 100% Secure",
            desc: "Your parcel is fully protected.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08 }}
            className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-lg border dark:border-gray-700"
          >
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
     <br />
    </div>
  );
};

export default Parcel;