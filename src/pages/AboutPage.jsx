import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Footer from "../components/Footer"

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

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white">

      {/* ================= HERO ================= */}
      <section className="py-24 text-center bg-gradient-to-r from-green-100 to-blue-100 dark:from-gray-900 dark:to-black">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold"
        >
          About Shreemaya Group
        </motion.h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A multi-sector company delivering excellence from Dairy to Dining,
          Retail to Logistics.
        </p>
      </section>

      {/* ================= ABOUT ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="py-24 px-6 text-center"
      >
        <motion.p
          variants={fadeUp}
          className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg"
        >
          Shreemaya Group Pvt. Ltd. is a fast-growing enterprise focused on
          delivering high-quality products and services across multiple
          industries. Our goal is to maintain trust, hygiene, and innovation
          while expanding our presence across India.
        </motion.p>

        {/* 🔥 BUSINESS CARDS */}
        <motion.div
          variants={stagger}
          className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {[
            { title: "🥛 Dairy", desc: "Fresh & hygienic milk products." },
            { title: "🍨 Ice Cream", desc: "Premium & delicious flavors." },
            { title: "🍽️ Restaurant", desc: "Luxury dining experience." },
            { title: "🍱 Foods", desc: "Healthy packaged food." },
            { title: "🛒 Retail", desc: "Wide distribution network." },
            { title: "🚚 Logistics", desc: "Fast & reliable delivery." },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          
          <div>
            <h2 className="text-2xl font-bold mb-3">🎯 Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Deliver high-quality, hygienic and trustworthy products to every home.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">🚀 Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Become India’s most trusted multi-sector brand.
            </p>
          </div>

        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="py-24 px-6"
      >
        <motion.h2
          variants={fadeUp}
          className="text-center text-4xl font-bold mb-14"
        >
          Our Leadership
        </motion.h2>

        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.02 }}
          className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10"
        >
          {/* IMAGE */}
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://plus.unsplash.com/premium_photo-1661508620175-3ae20da61cda?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D"
            alt="chairman"
            className="w-44 h-44 rounded-full object-cover border-4 border-white dark:border-gray-700"
          />

          {/* DETAILS */}
          <div>
            <h3 className="text-2xl font-bold text-green-600">
              Mr. Subodh Kr Yadav
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mt-3">
              🎓 IMS Ghaziabad <br />
              💼 5+ Years Experience <br />
              🏆 Built Multi-sector Company
            </p>

            <p className="mt-4 italic text-gray-500">
              “Delivering trust & quality in every product.”
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* ================= COUNTERS ================= */}
      <section
        ref={ref}
        className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our Impact 🚀
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">

          <div>
            <h2 className="text-4xl font-bold">
              {inView && <CountUp end={50000} duration={3} />}+
            </h2>
            <p className="text-green-100">Customers</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              {inView && <CountUp end={6} duration={2} />}+
            </h2>
            <p className="text-green-100">Sectors</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              {inView && <CountUp end={5} duration={2} />}+
            </h2>
            <p className="text-green-100">Years</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              {inView && <CountUp end={100} duration={3} />}%
            </h2>
            <p className="text-green-100">Quality</p>
          </div>

        </div>
      </section>
    <Footer/>
    </div>
  );
};

export default About;