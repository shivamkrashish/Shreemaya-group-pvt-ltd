import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const products = [
  { name: "Kurkure", price: 20 },
  { name: "Pasta", price: 60 },
  { name: "Chips", price: 30 },
  { name: "Namkeen", price: 50 },
];

const Packaged = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 dark:bg-black">

      {/* ✅ CONTENT WRAPPER */}
      <div className="px-4 md:px-10">

        <h1 className="text-3xl md:text-5xl text-center font-bold mb-10">
          🍱 Packaged Foods
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/70 dark:bg-gray-900/70 p-5 rounded-2xl shadow"
            >
              <h2 className="font-semibold">{p.name}</h2>
              <p className="text-green-600">₹{p.price}</p>

              <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
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

export default Packaged;