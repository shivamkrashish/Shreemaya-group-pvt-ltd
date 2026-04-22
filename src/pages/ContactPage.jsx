import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer"
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaRobot,
  FaTrash,
} from "react-icons/fa";

const Contact = () => {
  const [openAI, setOpenAI] = useState(false);
  const [input, setInput] = useState("");

  const defaultMsg = {
    from: "bot",
    text: "👋 Hi! I am Shreemaya AI Assistant. Ask me anything!",
  };

  const [messages, setMessages] = useState([defaultMsg]);

  const chatRef = useRef(null);

  // auto scroll
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, openAI]);

  // AI reply logic
  const getReply = (msg) => {
    const text = msg.toLowerCase();

    if (text.includes("hello") || text.includes("hi"))
      return "Hello 😊 कैसे help कर सकता हूँ?";
    if (text.includes("price"))
      return "We provide best quality at affordable price 💰";
    if (text.includes("food") || text.includes("dairy"))
      return "We deal in Dairy, Ice Cream, Food & Restaurant 🍦🥛";
    if (text.includes("contact"))
      return "Call / WhatsApp anytime 📞";

    return "I will forward this to our team 🤖";
  };

  const sendMsg = () => {
    if (!input.trim()) return;

    const userText = input;

    setMessages((prev) => [...prev, { from: "user", text: userText }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: "typing..." }]);
    }, 500);

    setTimeout(() => {
      setMessages((prev) =>
        prev
          .filter((m) => m.text !== "typing...")
          .concat({ from: "bot", text: getReply(userText) })
      );
    }, 1200);
  };

  const clearChat = () => {
    setMessages([defaultMsg]);
  };

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden">

      {/* HERO */}
      <section className="relative py-28 text-center bg-gradient-to-r from-green-100 via-white to-blue-100 dark:from-gray-900 dark:text-gray-700">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-green-400/20 blur-3xl rounded-full"></div>

        <h1 className="text-4xl md:text-6xl font-bold">
          Let’s Connect With Us
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-800">
          24/7 Support + AI Assistant 🤖
        </p>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <a href="tel:+917654267227" className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl text-center">
            <FaPhoneAlt className="text-blue-500 text-4xl mx-auto animate-bounce" />
            <h2 className="mt-4 font-bold">Call Now</h2>
          </a>

          <a href="https://wa.me/917654267227" className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl text-center">
            <FaWhatsapp className="text-green-500 text-4xl mx-auto animate-bounce" />
            <h2 className="mt-4 font-bold">WhatsApp</h2>
          </a>

          <a href="mailto:subodhkumaryadav4444@gmail.com" className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl text-center">
            <FaEnvelope className="text-red-500 text-4xl mx-auto animate-pulse" />
            <h2 className="mt-4 font-bold">Email</h2>
          </a>

        </div>
      </section>

      {/* AI SECTION */}
      <section className="py-24 text-center bg-green-600 text-white">
        <h2 className="text-4xl font-bold">24/7 Smart Support</h2>

        <button
          onClick={() => setOpenAI(true)}
          className="mt-8 px-8 py-3 bg-white text-green-600 rounded-full font-semibold flex items-center gap-2 mx-auto hover:scale-105 transition"
        >
          <FaRobot /> Live AI Chat
        </button>
      </section>

      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50 max-md:flex-row max-md:left-1/2 max-md:-translate-x-1/2">
        <a href="https://wa.me/917654267227" className="bg-green-500 p-4 rounded-full text-white animate-bounce">
          <FaWhatsapp />
        </a>

        <a href="tel:+917654267227" className="bg-blue-500 p-4 rounded-full text-white animate-bounce">
          <FaPhoneAlt />
        </a>
      </div>

      {/* CHAT POPUP */}
      <AnimatePresence>
        {openAI && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={() => setOpenAI(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="w-[92%] max-w-md bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            >

              {/* HEADER */}
              <div className="bg-green-600 text-white p-4 flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <FaRobot /> AI Assistant
                </span>

                <button
                  onClick={clearChat}
                  className="flex items-center gap-1 text-sm bg-red-500 px-2 py-1 rounded hover:bg-red-600"
                >
                  <FaTrash /> Clear
                </button>
              </div>

              {/* CHAT BOX */}
              <div ref={chatRef} className="h-80 overflow-y-auto p-4 space-y-2 bg-gray-100 dark:bg-gray-800">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`p-2 rounded-lg max-w-[80%] text-sm ${
                      m.from === "bot"
                        ? "bg-gray-300 dark:bg-gray-700"
                        : "bg-green-500 text-white ml-auto"
                    }`}
                  >
                    {m.text}
                  </div>
                ))}
              </div>

              {/* INPUT */}
              <div className="flex p-3 gap-2 border-t">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
                  placeholder="Type message..."
                />
                <button
                  onClick={sendMsg}
                  className="bg-green-600 text-white px-4 rounded-lg"
                >
                  Send
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* LOCATION */}
<section className="py-20 text-center">
  <FaMapMarkerAlt className="text-5xl text-green-600 mx-auto animate-bounce" />

  <h2 className="text-xl font-bold mt-4">Madhubani, Bihar</h2>

  <p className="text-gray-600 dark:text-gray-300 mt-2">
    Visit us at our location
  </p>

  {/* MAP */}
  <div className="mt-6 flex justify-center">
    <iframe
      title="location-map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.236!2d86.0760!3d26.3480!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eddbf3a5b7d7b7%3A0x7a7b7b7b7b7b7b7b!2sMadhubani%2C%20Bihar!5e0!3m2!1sen!2sin!4v0000000000"
      width="90%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      className="rounded-xl shadow-xl"
    ></iframe>
  </div>
</section>

      {/* SOCIAL */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
        <h2 className="text-2xl font-bold mb-6">Follow Us</h2>

        <div className="flex justify-center gap-6 text-2xl">
          {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.3, rotate: 10 }}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </section>
    <Footer/>
    </div>
  );
};

export default Contact;