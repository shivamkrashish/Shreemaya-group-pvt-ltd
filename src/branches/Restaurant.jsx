import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const products = [
  { name: "Pizza", price: 250 },
  { name: "Burger", price: 150 },
  { name: "Biryani", price: 200 },
  { name: "Paneer Butter Masala", price: 280 },
];

const Restaurant = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 dark:bg-black">

      {/* ✅ CONTENT WRAPPER */}
      <div className="px-4 md:px-10">

        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold">
            🍽️ Restaurant
          </h1>
          <p className="text-gray-500 dark:text-gray-300 mt-3">
            Delicious food & dining experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/70 dark:bg-gray-900/70 p-5 rounded-2xl shadow"
            >
              <h2 className="font-bold">{p.name}</h2>
              <p className="text-green-600">₹{p.price}</p>

              <button className="mt-4 w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                Order Now
              </button>
            </motion.div>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Restaurant;