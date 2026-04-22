import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";

import chairm from "../assets/Chairman.jpeg"
import bg1 from "../assets/2.jpeg";
import bg2 from "../assets/3.jpeg";
import bg3 from "../assets/4.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const images = [bg1, bg2, bg3];

const Home = () => {
  const [index, setIndex] = useState(0);

  // 🔥 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">

        {/* 🔥 BACKGROUND SLIDER */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={images[index]}
              alt="bg"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* 🔥 OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* 🔥 CONTENT */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="relative z-10 text-center px-4 text-white"
        >
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold">
            Shreemaya Group Pvt. Ltd.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg md:text-2xl text-gray-200"
          >
            From Dairy to Dining – Delivering Quality in Every Bite ⭐
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex gap-4 justify-center">

            <Link to="/business">
              <button className="px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:scale-105 transition">
                Explore Business
              </button>
            </Link>

            <Link to="/contact">
              <button className="px-6 py-3 border border-white text-white rounded-full hover:bg-white/20 transition">
                Contact Us
              </button>
            </Link>

          </motion.div>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
<motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={stagger}
  className="py-24 px-6 text-center bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900"
>
  {/* HEADING */}
  <motion.h2
    variants={fadeUp}
    className="text-3xl md:text-5xl font-bold mb-6"
  >
    About Shreemaya Group
  </motion.h2>

  {/* SUBTEXT */}
  <motion.p
    variants={fadeUp}
    className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg"
  >
    Shreemaya Group Pvt. Ltd. is a rapidly growing multi-sector enterprise
    committed to delivering excellence across diverse industries. From fresh
    dairy production to premium dining experiences, we focus on quality,
    innovation, and customer trust in every service we provide.
  </motion.p>

  {/* FEATURES GRID */}
  <motion.div
    variants={stagger}
    className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
  >
    {[
      {
        title: "🥛 Shreemaya Dairy Product",
        desc: "We ensure farm-fresh dairy products with high hygiene standards and unmatched quality.",
      },
      {
        title: "🍨 Premium Ice Cream",
        desc: "Delicious, rich, and innovative flavors crafted with the finest ingredients.",
      },
      {
        title: "🍽️ Dining Experience",
        desc: "Luxury restaurants offering unforgettable taste and world-class hospitality.",
      },
      {
        title: "🍱 Packaged Foods",
        desc: "Safe, nutritious, and high-quality food products for everyday consumption.",
      },
      {
        title: "🛒 Retail Network",
        desc: "Wide distribution network bringing products closer to customers.",
      },
      {
        title: "🚚 Shreemaya Express",
        desc: "Shreemaya express  offers fast, reliable, and secure logistics, tour & travel, and door-to-door delivery services across India.",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        variants={fadeUp}
        whileHover={{ scale: 1.05, rotate: 1 }}
        className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition"
      >
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {item.desc}
        </p>
      </motion.div>
    ))}
  </motion.div>

  {/* EXTRA LINE */}
  <motion.p
    variants={fadeUp}
    className="mt-16 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 italic"
  >
    “Our mission is simple — to deliver purity, taste, and trust in every
    product that reaches your home.”
  </motion.p>
</motion.section>

      {/* ================= LEADERSHIP ================= */}
<motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={stagger}
  className="py-24 px-6 relative"
>

  {/* 🔥 Background Glow Effect */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full"></div>

  <motion.h2
    variants={fadeUp}
    className="text-center text-4xl font-bold mb-14"
  >
    Our Leadership
  </motion.h2>

  <motion.div
    variants={fadeUp}
    whileHover={{ scale: 1.02 }}
    className="relative max-w-5xl mx-auto bg-white/70 dark:bg-gray-800/60 backdrop-blur-xl shadow-2xl rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 border border-white/20 dark:border-gray-700"
  >

    {/* 🔥 IMAGE SECTION */}
    <motion.div
      whileHover={{ rotate: 3, scale: 1.05 }}
      className="relative"
    >
      {/* Glow Ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 blur-xl opacity-40"></div>

      <img
        src={chairm}
        alt="Chairman"
        className="relative w-44 h-44 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
      />
    </motion.div>

    {/* 🔥 DETAILS */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center md:text-left"
    >
      <h3 className="text-3xl font-bold text-green-600">
        Mr. Subodh Kr Yadav
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
        🎓 Educated from Institute of Management Studies GZB <br />
        💼 5+ Years Experience in Management and Leadership <br />
        🏆 Built a Multi-Sector Enterprise across Dairy, Food & Retail
      </p>

      {/* 🔥 QUOTE BOX */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="mt-6 p-4 bg-green-50 dark:bg-green-900/30 border-l-4 border-green-600 rounded-lg shadow-sm"
      >
        <p className="text-gray-700 dark:text-gray-300 italic">
          “Our vision is to deliver trust, purity, and quality in every product
          we serve.”
        </p>
      </motion.div>

      {/* 🔥 STATS */}
      <div className="flex gap-6 mt-6 justify-center md:justify-start">
        <div>
          <h4 className="text-xl font-bold text-green-600">5+</h4>
          <p className="text-sm text-gray-500">Years Experience</p>
        </div>

        <div>
          <h4 className="text-xl font-bold text-green-600">50K+</h4>
          <p className="text-sm text-gray-500">Happy Customers</p>
        </div>

        <div>
          <h4 className="text-xl font-bold text-green-600">6+</h4>
          <p className="text-sm text-gray-500">Business Sectors</p>
        </div>
      </div>
    </motion.div>
  </motion.div>
</motion.section>
<Gallery/>
<Testimonials/>
{/* ================= CTA ================= */}
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="relative py-28 px-6 text-center overflow-hidden"
>

  {/* 🔥 Animated Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 animate-gradient-x"></div>

  {/* 🔥 Glow Effect */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full"></div>

  {/* 🔥 Content */}
  <motion.div
    initial="hidden"
    whileInView="show"
    variants={stagger}
    className="relative z-10 max-w-3xl mx-auto text-white"
  >

    <motion.h2
      variants={fadeUp}
      className="text-4xl md:text-5xl font-bold leading-tight"
    >
      Ready to Experience Premium Quality?
    </motion.h2>

    <motion.p
      variants={fadeUp}
      className="mt-4 text-lg text-green-100"
    >
      Join thousands of happy customers who trust Shreemaya Group for
      purity, freshness, and excellence in every product.
    </motion.p>

    {/* 🔥 Buttons */}
    <motion.div
      variants={fadeUp}
      className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
    >

      {/* ✅ CONTACT BUTTON FIX */}
      <Link to="/contact">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-white text-green-700 font-semibold rounded-full shadow-xl hover:bg-gray-100 transition"
        >
          🚀 Contact Now
        </motion.button>
      </Link>

      {/* SECONDARY BUTTON */}
      <Link to="/business">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 border border-white text-white rounded-full hover:bg-white/20 transition"
        >
          📞 Explore Services
        </motion.button>
      </Link>

    </motion.div>

    {/* 🔥 TRUST BADGES */}
    <motion.div
      variants={fadeUp}
      className="mt-10 flex justify-center gap-8 text-sm text-green-100 flex-wrap"
    >
      <span>✔ 100% Quality Assured</span>
      <span>✔ Trusted by Thousands</span>
      <span>✔ Fast Delivery</span>
    </motion.div>

  </motion.div>
</motion.section>
<Footer/>
    </div>
  );
};

export default Home;