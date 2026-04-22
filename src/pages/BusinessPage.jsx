import React from "react";
import { branches } from "../data/businessData";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const BusinessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen pt-24">

      {/* ✅ CONTENT WRAPPER (padding only here) */}
      <div className="px-4 md:px-10">

        {/* 🔥 HERO SECTION */}
        <section className="text-center mb-16 dark:text-white">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Shreemaya Group Businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base"
          >
            From Dairy to Dining 🍽️ — We deliver premium quality, hygiene, and
            trust across multiple industries with excellence.
          </motion.p>
        </section>

        {/* 🔥 STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Branches", value: "6+" },
            { label: "Customers", value: "10K+" },
            { label: "Products", value: "500+" },
            { label: "Experience", value: "10+ Years" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white dark:bg-gray-900 p-5 rounded-xl text-center shadow"
            >
              <h2 className="text-xl md:text-2xl font-bold text-green-600">
                {item.value}
              </h2>
              <p className="text-gray-500 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </section>

        {/* 🔥 BRANCH CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        >
          {branches.map((b) => (
            <motion.div
              key={b.id}
              variants={card}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate(`/business/${b.id}`)}
              className="group cursor-pointer rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition 
                         bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={b.image}
                  alt={b.title}
                  className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

                <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition">
                  <p className="text-sm">Explore Now →</p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h2 className="text-lg md:text-xl font-bold dark:text-white">
                  {b.title}
                </h2>

                <p className="text-gray-500 dark:text-gray-300 text-sm mt-2 line-clamp-2">
                  {b.desc}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/business/${b.id}`);
                  }}
                  className="mt-4 px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition"
                >
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 🔥 EXTRA SECTION */}
        <section className="mt-20 text-center max-w-3xl mx-auto dark:text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-bold"
          >
            Why Choose Shreemaya Group?
          </motion.h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm md:text-base">
            We focus on innovation, hygiene, and customer satisfaction. Our
            multi-business ecosystem ensures that you get everything — from fresh
            dairy to delicious meals — under one trusted brand.
          </p>
        </section>

      </div>

      {/* ✅ FOOTER (FULL WIDTH — NO GAP) */}
      <Footer />

    </div>
  );
};

export default BusinessPage;