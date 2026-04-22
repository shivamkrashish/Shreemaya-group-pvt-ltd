import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* ================= COMPANY ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {/* 🔥 LOGO + TEXT */}
          <div className="flex items-center gap-3">
            
            <motion.img
              src={logo}
              alt="logo"
              className="w-10 h-10 object-contain drop-shadow-[0_0_8px_#10b981]"
              whileHover={{ scale: 1.1, rotate: 5 }}
            />

            <h2 className="text-2xl font-bold text-white">
              Shreemaya Group
            </h2>

          </div>

          <p className="mt-4 text-sm leading-relaxed">
            A multi-sector enterprise delivering excellence in Dairy, Food,
            Restaurant, Retail & Logistics. Trusted by thousands for quality
            and freshness.
          </p>
        </motion.div>

        {/* ================= QUICK LINKS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>

          <ul className="space-y-3">
            {["Home", "About", "Business", "Contact"].map((item, i) => (
              <li key={i}>
                <Link
                  to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  className="relative inline-block hover:text-green-400 group transition"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ================= SERVICES ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Our Business</h3>
          <ul className="space-y-2 text-sm">
            <li>🥛 Dairy Products</li>
            <li>🍨 Ice Cream</li>
            <li>🍽️ Restaurant</li>
            <li>🍱 Foods</li>
            <li>🛒 Retail</li>
            <li>🚚 Logistics</li>
          </ul>
        </motion.div>

        {/* ================= CONTACT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>

          <p className="text-sm">📍 Madhubani, Bihar, India</p>
          <p className="text-sm mt-2">📞 +91 7654267227</p>
          <p className="text-sm mt-2">📧 subodhkumaryadav4444@gmail.com</p>

          {/* 🔥 SOCIAL ICONS */}
          <div className="flex gap-4 mt-5">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="p-3 bg-gray-800 rounded-full text-white hover:bg-green-500 transition"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ================= NEWSLETTER ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-16 text-center px-6"
      >
        <h3 className="text-xl text-white font-semibold">
          Subscribe to our Newsletter
        </h3>

        <div className="mt-5 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-64 rounded-l-full outline-none bg-gray-800 text-white placeholder-gray-400"
          />
          <button className="px-6 py-2 bg-green-600 text-white rounded-r-full hover:bg-green-700 transition">
            Subscribe
          </button>
        </div>
      </motion.div>

      {/* ================= BOTTOM ================= */}
      <div className="mt-16 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Shreemaya Group Pvt. Ltd. | All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;