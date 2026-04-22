import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const location = useLocation();

  // ================= SCROLL =================
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress((scrollTop / docHeight) * 100);
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ================= LOAD THEME =================
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // ================= UPDATE THEME =================
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Business", path: "/business" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ========= SCROLL BAR ========= */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[999]">
        <motion.div
          className="h-full bg-emerald-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ========= NAVBAR ========= */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md shadow-lg"
            : "bg-black/60 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
              
              <motion.img
                src={logo}
                alt="logo"
                className="w-10 h-10"
                animate={{
                  filter: [
                    "drop-shadow(0 0 5px #10b981)",
                    "drop-shadow(0 0 15px #10b981)",
                    "drop-shadow(0 0 5px #10b981)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <span className="text-2xl font-bold text-white">
                Shreemaya Group
              </span>
            </motion.div>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 font-medium">
            {menuItems.map((item, i) => {
              const isActive = location.pathname === item.path;

              return (
                <motion.li key={i} whileHover={{ scale: 1.1 }}>
                  <Link
                    to={item.path}
                    className={`relative ${
                      isActive
                        ? "text-emerald-400"
                        : "text-white hover:text-emerald-400"
                    }`}
                  >
                    {item.name}

                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 -bottom-1 w-full h-[2px] bg-emerald-400"
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            {/* DARK MODE */}
            <button
              onClick={() => setDark(prev => !prev)}
              className="text-xl text-white"
            >
              {dark ? "☀️" : "🌙"}
            </button>

            {/* MOBILE MENU */}
            <div
              className="md:hidden text-3xl text-white cursor-pointer"
              onClick={() => setOpen(true)}
            >
              ☰
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ========= MOBILE SIDEBAR ========= */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 top-0 h-full w-72 bg-black text-white z-50 p-6"
            >
              <h2 className="text-xl font-bold mb-6 text-emerald-400">
                Menu
              </h2>

              {menuItems.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="block py-3 hover:text-emerald-400"
                >
                  {item.name}
                </Link>
              ))}

              <button
                onClick={() => setOpen(false)}
                className="mt-6 px-4 py-2 bg-emerald-600 rounded"
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;