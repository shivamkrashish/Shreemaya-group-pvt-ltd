import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/5.jpeg";
import img2 from "../assets/ice.jpeg";
import img3 from "../assets/restu.jpeg";
import img4 from "../assets/food.jpeg";
import img5 from "../assets/net.jpeg";
import img6 from "../assets/logis.jpeg";

const images = [
  { src: img1, title: "Fresh Dairy Excellence", desc: "Pure & hygienic milk products delivered daily." },
  { src: img2, title: "Delicious Ice Cream", desc: "Premium taste crafted with love & quality." },
  { src: img3, title: "Luxury Dining", desc: "Experience fine dining with top-class service." },
  { src: img4, title: "Packaged Foods", desc: "Safe, fresh & quality food products." },
  { src: img5, title: "Retail Network", desc: "Serving thousands of happy customers." },
  { src: img6, title: "Smart Logistics", desc: "Fast & reliable delivery across regions." },
];

const Gallery = () => {
  const sliderRef = useRef(null);
  const [selected, setSelected] = useState(null);

  // 🔥 SMOOTH AUTO SCROLL (FIXED)
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame;
    let speed = 0.5;

    const scroll = () => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += speed;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white py-20 overflow-hidden transition-colors duration-500">

      {/* ================= HEADER ================= */}
      <div className="text-center mb-14 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          📸 Shreemaya Visual Showcase
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Discover the journey of excellence at Shreemaya Group — from fresh dairy
          production to premium dining experiences, powered by innovation,
          hygiene, and customer trust.
        </p>
      </div>

      {/* ================= SLIDER ================= */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-hidden px-6 cursor-pointer"
      >
        {[...images, ...images].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="min-w-[260px] h-[180px] rounded-xl overflow-hidden relative group shadow-lg"
            onClick={() => setSelected(item)}
          >
            {/* IMAGE */}
            <img
              src={item.src}
              alt="gallery"
              className="w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= LIGHTBOX ================= */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()} // 🔥 FIX close issue
            >
              <img
                src={selected.src}
                alt="preview"
                className="w-full max-h-[70vh] object-cover rounded-2xl"
              />

              <div className="mt-4 text-center">
                <h2 className="text-2xl font-bold text-white">
                  {selected.title}
                </h2>
                <p className="text-gray-400 mt-2">{selected.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Gallery;