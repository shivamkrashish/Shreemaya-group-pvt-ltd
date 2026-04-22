import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const products = [
  { name: "Rice", price: 60 },
  { name: "Oil", price: 150 },
  { name: "Sugar", price: 45 },
  { name: "Flour", price: 50 },
];

const Retail = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 dark:bg-black">

      {/* ✅ CONTENT WRAPPER (padding only here) */}
      <div className="px-4 md:px-10">

        <h1 className="text-3xl md:text-5xl text-center font-bold mb-10">
          🛒 Retail Store
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/70 dark:bg-gray-900/70 p-5 rounded-2xl shadow"
            >
              <h2 className="font-semibold">{p.name}</h2>
              <p className="text-green-600 font-medium">₹{p.price}</p>

              <button className="mt-4 w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>

      </div>
      <Footer />

    </div>
  );
};

export default Retail;