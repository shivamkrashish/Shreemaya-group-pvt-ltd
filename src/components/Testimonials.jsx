import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import shivam from "../branches/shivam.jpeg"

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Retail Customer",
    img: "https://images.unsplash.com/photo-1548251147-dda09867567a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Absolutely amazing quality! The dairy products are fresh and taste incredible. Highly recommended!",
    rating: 5,
  },
  {
    name: "Mrs. Taniya Mittal",
    role: "Ice Cream Franchise Head",
    img: "https://knowlepedia.org/images/0/0e/Tanya_Mittal.jpg",
    review:
      "Shreemaya Group provides consistent quality. Their service and delivery are top-notch!",
    rating: 4.8,
  },
  {
  name: "Mr. Shivam Ashish",
  role: "Franchise Owner - Shreemaya Packaged Foods",
  img: shivam,
  review:
  "Premium quality snacks with consistent taste and packaging. Boosted my sales with reliable supply and strong brand trust.",
  rating: 4.9,
},
  {
    name: "Neha Singh",
    role: "Customer",
    img: "https://images.unsplash.com/photo-1608539095410-2a415fde9d75?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "The ice cream range is just wow! Premium taste and quality like never before.",
    rating: 5,
  },
  {
    name: "Vikas Yadav",
    role: "Retail Partner",
    img: "https://plus.unsplash.com/premium_photo-1734611549078-7ce962c0330b?q=80&w=702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "Fast delivery and trusted products. Customers love Shreemaya products!",
    rating: 4.7,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // 🔥 AUTO PLAY
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 px-6 bg-gray-50 dark:bg-black text-center transition-colors duration-500">

      {/* 🔥 HEADING */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        What Our Customers Say 💬
      </h2>

      <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        Trusted by thousands — here’s what people say about Shreemaya Group
        and our commitment to quality.
      </p>

      {/* 🔥 CARD */}
      <div className="mt-12 flex justify-center">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            {/* IMAGE */}
            <img
              src={testimonials[index].img}
              alt="user"
              className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-green-500"
            />

            {/* NAME */}
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              {testimonials[index].name}
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonials[index].role}
            </p>

            {/* ⭐ RATING */}
            <div className="flex justify-center mt-3 text-yellow-400">
              {"⭐".repeat(Math.floor(testimonials[index].rating))}
              <span className="ml-2 text-gray-600 dark:text-gray-300 text-sm">
                {testimonials[index].rating}
              </span>
            </div>

            {/* REVIEW */}
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              “{testimonials[index].review}”
            </p>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* 🔥 DOT INDICATOR */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-green-500" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>

    </div>
  );
};

export default Testimonials;