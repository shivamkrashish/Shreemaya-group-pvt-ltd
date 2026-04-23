import React from "react";
import { motion } from "framer-motion";
import info from "../logistics/info.jpg"

const About = () => {
  return (
    <div className="pt-28 px-6 min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white transition-all duration-300">

      {/* ================= HERO ================= */}
      <section className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          About Shreemaya Group 🚀
        </motion.h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Shreemaya Group is a multi-service business organization delivering excellence
          in travel, logistics, hospitality, and customer satisfaction across India.
        </p>
      </section>

      {/* ================= COMPANY INFO ================= */}
      <section className="mt-16 grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

        <img
          src={info}
          className="rounded-2xl shadow-xl"
        />

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Who We Are
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-7">
            Shreemaya Group is a growing enterprise with 6 major business branches.
            Our focus is to deliver trusted, fast, and reliable services to customers
            across multiple industries including travel booking, parcel delivery,
            and logistics management.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
            Our Shreemaya Express division specializes in bus tour booking, parcel
            delivery systems, and real-time vehicle tracking with a modern digital platform.
          </p>
        </div>

      </section>

      {/* ================= SERVICES ================= */}
      <section className="mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              title: "🚌 Tour Booking",
              desc: "Book buses with real-time availability, seat selection, and smooth booking experience.",
            },
            {
              title: "📦 Parcel Delivery",
              desc: "Send parcels using trucks, tempo, and pickups with fast and safe delivery.",
            },
            {
              title: "📍 Live Tracking",
              desc: "Track your bus or parcel in real-time with accurate location updates.",
            },
            {
              title: "🚚 Fleet Management",
              desc: "Manage all vehicles including buses, trucks, and drivers in one system.",
            },
            {
              title: "💳 Easy Payments",
              desc: "Secure and easy payment system with multiple options.",
            },
            {
              title: "📞 Customer Support",
              desc: "24/7 support system for customer help and assistance.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-lg font-bold">
                {item.title}
              </h3>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="mt-20 bg-blue-500 text-white py-12 rounded-2xl max-w-6xl mx-auto">

        <div className="grid md:grid-cols-4 text-center gap-6">

          <div>
            <h1 className="text-3xl font-bold">50+</h1>
            <p>Buses</p>
          </div>

          <div>
            <h1 className="text-3xl font-bold">10K+</h1>
            <p>Happy Customers</p>
          </div>

          <div>
            <h1 className="text-3xl font-bold">500+</h1>
            <p>Daily Parcels</p>
          </div>

          <div>
            <h1 className="text-3xl font-bold">24/7</h1>
            <p>Support</p>
          </div>

        </div>

      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="mt-20 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold mb-3">🎯 Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300">
            To provide fast, reliable, and affordable travel and logistics services
            using modern technology and customer-first approach.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold mb-3">🚀 Our Vision</h2>
          <p className="text-gray-600 dark:text-gray-300">
            To become India's leading smart transport and logistics platform with
            innovation, automation, and high customer satisfaction.
          </p>
        </div>

      </section>
<br />
    </div>
  );
};

export default About;