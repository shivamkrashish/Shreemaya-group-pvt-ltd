import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Tracking = () => {
  const [trackingId, setTrackingId] = useState("");
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Idle");

  // ================= FAKE LIVE TRACKING =================
  useEffect(() => {
    let interval;

    if (active) {
      setStatus("On Route");

      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setStatus("Delivered ✅");
            return 100;
          }
          return prev + 2;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [active]);

  // ================= START TRACK =================
  const startTracking = () => {
    if (!trackingId) {
      alert("Enter Tracking ID first!");
      return;
    }

    setProgress(0);
    setActive(true);
  };

  return (
    <div className="pt-28 px-6 min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white transition-all duration-300">

      {/* ================= TITLE ================= */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        📍 Live Tracking System
      </motion.h1>

      {/* ================= SEARCH BOX ================= */}
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border dark:border-gray-700">

        <h2 className="text-xl font-bold mb-4">
          🔍 Track Your Bus / Parcel
        </h2>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter Tracking ID (e.g. SHREE123)"
            className="flex-1 p-3 rounded border dark:bg-gray-800 dark:border-gray-600"
            onChange={(e) => setTrackingId(e.target.value)}
          />

          <button
            onClick={startTracking}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 rounded-xl"
          >
            Track
          </button>
        </div>
      </div>

      {/* ================= TRACK RESULT ================= */}
      {active && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mt-10 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border dark:border-gray-700"
        >

          {/* STATUS */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">
              🚚 Status: {status}
            </h2>

            <span className="text-sm text-gray-500">
              Tracking ID: {trackingId}
            </span>
          </div>

          {/* PROGRESS BAR */}
          <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
            <motion.div
              className="bg-green-500 h-4"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* ROUTE */}
          <div className="flex justify-between mt-3 text-sm text-gray-500 dark:text-gray-400">
            <span>📍 Pickup</span>
            <span>🏁 Destination</span>
          </div>

          {/* LIVE BUS ICON */}
          <div className="relative mt-6 h-10">

            <motion.div
              className="absolute text-2xl"
              animate={{ left: `${progress}%` }}
              transition={{ duration: 0.5 }}
            >
              🚌
            </motion.div>

          </div>

          {/* INFO GRID */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-xl text-center">
              <h3 className="font-bold">⏱ ETA</h3>
              <p>{Math.max(0, 60 - progress)} mins</p>
            </div>

            <div className="bg-green-100 dark:bg-green-900 p-4 rounded-xl text-center">
              <h3 className="font-bold">📦 Type</h3>
              <p>Parcel / Bus</p>
            </div>

            <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-xl text-center">
              <h3 className="font-bold">👨 Driver</h3>
              <p>Active</p>
            </div>

          </div>

        </motion.div>
      )}

      {/* ================= EXTRA FEATURES ================= */}
      <div className="mt-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {[
          {
            title: "📍 Real-Time Tracking",
            desc: "Live location updates of your bus or parcel.",
          },
          {
            title: "🔔 Notifications",
            desc: "Get alerts when your parcel is near.",
          },
          {
            title: "🛡 Safe Delivery",
            desc: "Secure and monitored transport system.",
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

    </div>
  );
};

export default Tracking;