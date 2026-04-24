import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const productsData = [
  {
    id: 1,
    name: "Vanilla Bliss",
    price: 100,
    discountPrice: 85,
    category: "Classic",
    img: "https://images.unsplash.com/photo-1560008581-09826d1de69e",
    desc: "Creamy vanilla ice cream with rich flavor.",
    rating: 4.6,
    reviews: 1243,
    badge: "BESTSELLER"
  },
  {
    id: 2,
    name: "Chocolate Dream",
    price: 120,
    discountPrice: 99,
    category: "Chocolate",
    img: "https://www.foodnetwork.com/content/dam/images/food/fullset/2021/08/06/WU2812_No-Churn-Chocolate-Dream-Ice-Cream_s4x3.jpg",
    desc: "Rich dark chocolate ice cream scoop.",
    rating: 4.8,
    reviews: 2100,
    badge: "HOT"
  },
  {
    id: 3,
    name: "Strawberry Love",
    price: 110,
    discountPrice: 90,
    category: "Fruit",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjy_CmG8FnqFOoKjY--1OFKGb4ZnXEq1hNCg&s",
    desc: "Fresh strawberry flavored ice cream.",
    rating: 4.5,
    reviews: 980
  },
  {
    id: 4,
    name: "Mango Magic",
    price: 130,
    discountPrice: 105,
    category: "Fruit",
    img: "https://punjabflavours.com/wp-content/uploads/al_opt_content/IMAGE/punjabflavours.com/wp-content/uploads/2024/07/mango-icecream-768x768.png.bv_resized_mobile.png.bv.webp",
    desc: "Real mango pulp creamy ice cream.",
    rating: 4.7,
    reviews: 1500,
    badge: "SEASONAL"
  },
  {
    id: 5,
    name: "Butterscotch Crunch",
    price: 140,
    discountPrice: 119,
    category: "Premium",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHGJCVn2g2a0BMlc2MmJyrcP-dCaUysLb62Q&s",
    desc: "Crunchy caramel butterscotch delight.",
    rating: 4.9,
    reviews: 3200,
    badge: "TOP"
  },
  {
    id: 6,
    name: "Blueberry Blast",
    price: 150,
    discountPrice: 125,
    category: "Fruit",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExP0zXPcz4Vi-iNLkBgE4zpz5Z8Sunttv5A&s",
    desc: "Tangy blueberry ice cream scoop.",
    rating: 4.6,
    reviews: 1100
  },
  {
    id: 7,
    name: "Pista Royale",
    price: 160,
    discountPrice: 135,
    category: "Premium",
    img: "https://images.jdmagicbox.com/quickquotes/images_main/shri-nivas-pista-ice-cream-f94h7g75.jpg",
    desc: "Rich pistachio royal flavor.",
    rating: 4.7,
    reviews: 900
  },
  {
    id: 8,
    name: "Black Currant",
    price: 135,
    discountPrice: 110,
    category: "Fruit",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQN6Twg5OHP0LhlQxkAzn9ibwOh9GoJTG6g&s",
    desc: "Tangy black currant ice cream.",
    rating: 4.4,
    reviews: 700
  },
  {
    id: 9,
    name: "Coffee Crunch",
    price: 145,
    discountPrice: 120,
    category: "Coffee",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkh1GFmxt-hgVUVdbDxcIlNjEO63VUZ6U5vQ&s",
    desc: "Strong coffee flavored ice cream.",
    rating: 4.5,
    reviews: 850
  },
  {
    id: 10,
    name: "Oreo Blast",
    price: 155,
    discountPrice: 129,
    category: "Chocolate",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTibm7UoT5p7j_4nQxQJxWWnv_B-NprVjRdVA&s",
    desc: "Oreo cookies loaded ice cream.",
    rating: 4.8,
    reviews: 3000,
    badge: "NEW"
  },
  {
    id: 11,
    name: "Kesar Pista",
    price: 170,
    discountPrice: 145,
    category: "Premium",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJzN5IYivvXtAeyBTos9JIsUu9GWCsbfAIoA&s",
    desc: "Royal saffron pista ice cream.",
    rating: 4.9,
    reviews: 1800
  },
  {
    id: 12,
    name: "Bubblegum Pop",
    price: 90,
    discountPrice: 75,
    category: "Kids",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmP-U1Yc1afq9OzUcr1y_hhq7KgMeTrB2KqA&s",
    desc: "Colorful bubblegum ice cream.",
    rating: 4.3,
    reviews: 500
  },
  {
    id: 13,
    name: "Mint Choco",
    price: 150,
    discountPrice: 125,
    category: "Chocolate",
    img: "https://icecreamfromscratch.com/wp-content/uploads/2023/02/Andes-Ice-Cream-1.2-720x720.jpg",
    desc: "Mint chocolate refreshing ice cream.",
    rating: 4.6,
    reviews: 1200
  },
  {
    id: 14,
    name: "Honey Almond",
    price: 165,
    discountPrice: 140,
    category: "Premium",
    img: "https://honey.com/images/default/_thumbnail/honey-and-almond-butter-ice-cream.png",
    desc: "Honey almond premium ice cream.",
    rating: 4.7,
    reviews: 1100
  },
  {
    id: 15,
    name: "Caramel Swirl",
    price: 140,
    discountPrice: 115,
    category: "Classic",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQ4YFfqVw0K44VuDWQY0DwajxKBjiiayluA&s",
    desc: "Sweet caramel swirl ice cream.",
    rating: 4.6,
    reviews: 900
  }
];
/* ================== CATEGORIES ================== */
const categories = ["All", "Classic", "Chocolate", "Fruit", "Premium", "Coffee", "Kids"];

/* ================== COMPONENT ================== */
const Icecrem = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [ordersOpen, setOrdersOpen] = useState(false);
  const [orders, setOrders] = useState([]);

  const [payment, setPayment] = useState("UPI");
  const [upi, setUpi] = useState("");

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ================== LOAD ================== */
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }

    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  /* ================== FILTER ================== */
const filtered = productsData.filter((p) => {
  const searchText = search.toLowerCase();

  return (
    (category === "All" || p.category === category) &&
    (
      p.name?.toLowerCase().includes(searchText) ||
      p.desc?.toLowerCase().includes(searchText)
    )
  );
});

  /* ================== CART ================== */
  const addToCart = (item) => {
    const exist = cart.find((i) => i.id === item.id);
    if (exist) {
      setCart(cart.map((i) =>
        i.id === item.id ? { ...i, qty: i.qty + 1 } : i
      ));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(cart.map((i) =>
      i.id === id ? { ...i, qty: i.qty + 1 } : i
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart
      .map((i) =>
        i.id === id ? { ...i, qty: i.qty - 1 } : i
      )
      .filter((i) => i.qty > 0)
    );
  };

  const total = cart.reduce((a, b) => a + b.price * b.qty, 0);
  

  /* ================== ORDER ================== */
const placeOrder = () => {
  if (!customer.name || !customer.address || !customer.phone) {
    alert("Fill all details ❗");
    return;
  }

  if (payment === "UPI" && !upi) {
    alert("Enter UPI ID ❗");
    return;
  }

  if (cart.length === 0) {
    alert("Cart empty ❗");
    return;
  }

  const newOrder = {
    id: Date.now(),
    items: cart,
    total,
    payment,
    upi,
    customer,
    status: "Placed",
    date: new Date().toLocaleString(),
  };

  const updated = [newOrder, ...orders];
  setOrders(updated);
  localStorage.setItem("orders", JSON.stringify(updated));

  setCart([]);
  setCheckoutOpen(false);
  setCartOpen(false);

  alert("Order Placed 🎉");

  // Auto status update (safe version)
  setTimeout(() => {
    setOrders((prev) => {
      const updatedOrders = prev.map((o) =>
        o.id === newOrder.id ? { ...o, status: "Delivered" } : o
      );

      localStorage.setItem("orders", JSON.stringify(updatedOrders));
      return updatedOrders;
    });
  }, 3000);
};

/* ================== DELETE ORDER ================== */
const deleteOrder = (id) => {
  const filtered = orders.filter((o) => o.id !== id);
  setOrders(filtered);
  localStorage.setItem("orders", JSON.stringify(filtered));
};
  

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">

      {/* ================= NAVBAR ================= */}
<nav className="fixed  top-0 w-full bg-white dark:bg-gray-900 shadow z-50 px-4 md:px-10 py-5">
  <div className="flex justify-between items-center">

    {/* LOGO */}
    <h1 className="text-lg md:text-xl font-bold dark:text-white">
      🍨 Premium Ice Cream
    </h1>

    {/* DESKTOP MENU */}
    <div className="hidden md:flex items-center gap-4">

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-3 py-1 border rounded w-64 dark:bg-gray-800 dark:text-white"
      />

      <button
        onClick={() => navigate("/")}
        className="bg-pink-500 text-white px-3 py-1 rounded"
      >
        Home
      </button>

      <button
        onClick={() => setOrdersOpen(true)}
        className="dark:text-white"
      >
        📦 Orders
      </button>

      <button
        onClick={() => setCartOpen(true)}
        className="dark:text-white"
      >
        🛍️ {cart.length}
      </button>

      <button onClick={toggleTheme}>
        {dark ? "🌙" : "☀️"}
      </button>

    </div>

    {/* MOBILE MENU BUTTON */}
    <button
      className="md:hidden"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <X /> : <Menu />}
    </button>
  </div>

  {/* MOBILE DROPDOWN */}
  {menuOpen && (
    <div className="md:hidden mt-4 flex flex-col gap-3">

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-3 py-2 border rounded dark:bg-gray-800 dark:text-white"
      />

      <button
        onClick={() => {
          navigate("/");
          setMenuOpen(false);
        }}
        className="bg-pink-500 text-white py-2 rounded"
      >
        Home
      </button>

      <button
        onClick={() => {
          setOrdersOpen(true);
          setMenuOpen(false);
        }}
        className="dark:text-white py-2"
      >
        📦 Orders
      </button>

      <button
        onClick={() => {
          setCartOpen(true);
          setMenuOpen(false);
        }}
        className="dark:text-white py-2"
      >
        🛍️ Cart ({cart.length})
      </button>

      <button
        onClick={toggleTheme}
        className="py-2"
      >
        {dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

    </div>
  )}
</nav>

  {/* ================= HERO ================= */}
<div className="pt-24 px-4 md:px-10">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative bg-gradient-to-r from-pink-500 via-pink-400 to-rose-500 text-white rounded-2xl p-6 md:p-12 mb-12 shadow-2xl overflow-hidden"
  >

    {/* Glow Effects */}
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
    <div className="absolute bottom-0 left-0 w-52 h-52 bg-white/10 rounded-full blur-2xl"></div>

    <div className="relative z-10">

      {/* TITLE */}
      <h1 className="text-2xl md:text-5xl font-bold leading-tight">
        🍦 Welcome to Shreemaya Ice Cream World
      </h1>

      <h2 className="mt-2 text-lg md:text-2xl font-semibold text-pink-100">
        Scoop Happiness. Taste Love. Feel Premium.
      </h2>

      <p className="mt-4 text-sm md:text-base max-w-2xl text-pink-50 leading-relaxed">
        Premium handcrafted ice creams made with real milk, natural flavors, and rich ingredients.
        Every scoop delivers pure joy and unforgettable taste.
      </p>

      {/* FRANCHISE PROFILE */}
      <div className="mt-6 bg-white/10 p-4 rounded-xl flex flex-col md:flex-row items-center gap-4">

        <img
          src="https://knowlepedia.org/images/0/0e/Tanya_Mittal.jpg"
          className="w-20 h-20 rounded-full border-2 border-white"
          alt="franchise"
        />

        <div>
          <h3 className="text-xl font-bold">Mrs. Taniya Mittal</h3>
          <p className="text-pink-100 text-sm">Ice Cream Franchise Head</p>

          <p className="text-xs mt-2 text-pink-50">
            Manages Shreemaya Ice Cream operations across India ensuring premium quality,
            hygiene, and customer satisfaction in every scoop.
          </p>

          {/* RATING */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-300">⭐⭐⭐⭐⭐</span>
            <span className="text-sm text-white/90">
              4.9 / 5.0 Trusted Franchise Leader
            </span>
          </div>
        </div>

      </div>

      {/* HIGHLIGHTS */}
      <div className="flex flex-wrap gap-3 mt-6 text-sm">

        <div className="bg-white/20 px-3 py-1 rounded-full">
          🍨 100+ Flavours
        </div>

        <div className="bg-white/20 px-3 py-1 rounded-full">
          🥛 Real Milk Base
        </div>

        <div className="bg-white/20 px-3 py-1 rounded-full">
          ❄ Cold Chain Delivery
        </div>

        <div className="bg-white/20 px-3 py-1 rounded-full">
          🏆 Premium Quality
        </div>

      </div>

      {/* CTA */}
      <div className="flex flex-wrap gap-3 mt-6">

        <button
          onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
          className="px-6 py-2 bg-white text-pink-600 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          🍦 Explore Ice Creams
        </button>

        <button
          onClick={() => setOrdersOpen(true)}
          className="px-6 py-2 border border-white rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition"
        >
          📦 View Orders
        </button>

      </div>

    </div>
  </motion.div>

  {/* ================= CATEGORY ================= */}
  <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
    {categories.map((c, i) => (
      <button
        key={i}
        onClick={() => setCategory(c)}
        className={`px-4 py-1 rounded-full border whitespace-nowrap transition ${
          category === c
            ? "bg-pink-600 text-white"
            : "bg-white dark:bg-gray-800 dark:text-white"
        }`}
      >
        {c}
      </button>
    ))}
  </div>

 {/* ================= PRODUCTS ================= */}
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

  {filtered.map((p) => {
    const discountPercent = p.discountPrice
      ? Math.round(((p.price - p.discountPrice) / p.price) * 100)
      : 0;

    return (
      <motion.div
        key={p.id}
        whileHover={{ scale: 1.05 }}
        className="bg-white dark:bg-gray-900 rounded-xl shadow overflow-hidden relative border border-gray-200 dark:border-gray-700"
      >

        {/* IMAGE */}
        <img
          src={p.img}
          className="h-32 md:h-40 w-full object-cover"
          alt={p.name}
        />

        {/* BADGE */}
        {p.badge && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded shadow">
            {p.badge}
          </span>
        )}

        {/* DISCOUNT BADGE */}
        {p.discountPrice && (
          <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded shadow">
            {discountPercent}% OFF
          </span>
        )}

        {/* CONTENT */}
        <div className="p-3 md:p-4">

          {/* NAME */}
          <h2 className="dark:text-white text-sm md:text-base font-semibold line-clamp-1">
            {p.name}
          </h2>

          {/* PRICE SECTION */}
          <div className="flex items-center gap-2 mt-1">

            {/* FINAL PRICE */}
            <span className="text-green-600 font-bold text-sm md:text-base">
              ₹{p.discountPrice || p.price}
            </span>

            {/* ORIGINAL PRICE */}
            {p.discountPrice && (
              <span className="line-through text-gray-400 text-xs">
                ₹{p.price}
              </span>
            )}

          </div>

          {/* DESCRIPTION */}
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
            {p.desc}
          </p>

          {/* RATING */}
          <div className="flex items-center gap-2 mt-2 text-xs md:text-sm">
            <span className="bg-green-600 text-white px-2 py-[2px] rounded">
              ⭐ {p.rating}
            </span>
            <span className="text-gray-500">
              ({p.reviews})
            </span>
          </div>

          {/* BUTTON */}
          <button
            onClick={() => addToCart(p)}
            className="mt-3 w-full py-1 md:py-2  bg-pink-600 hover:bg-indigo-400 active:bg-gray-900 text-white rounded text-sm hover:opacity-90 active:scale-95 transition"
          >
            🛒 Add to Cart
          </button>

        </div>

      </motion.div>
    );
  })}
</div>
</div>

   {/* ================= CART ================= */}
{cartOpen && (
  <div className="fixed inset-0 flex z-50">

    <div
      className="flex-1 bg-black/60 backdrop-blur-sm"
      onClick={() => setCartOpen(false)}
    />

    <div className="w-80 md:w-96 bg-gradient-to-br from-pink-700 via-puple-500 to-blue-600 text-white p-5 overflow-y-auto shadow-2xl">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">🛒 Your Cart</h2>
        <button onClick={() => setCartOpen(false)} className="bg-white/20 px-2 py-1 rounded">
          ✖
        </button>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-10">
          <p>Your cart is empty 😢</p>
        </div>
      ) : (
        cart.map((i) => (
          <div key={i.id} className="flex gap-3 mb-4 bg-white/10 p-3 rounded-xl">

            <img src={i.img} className="w-14 h-14 rounded-lg object-cover" />

            <div className="flex-1">
              <p className="text-sm font-semibold">{i.name}</p>

              {/* PRICE */}
              <div className="text-xs mt-1">
                <span className="text-yellow-300 font-bold">
                  ₹{i.discountPrice || i.price}
                </span>
                {i.discountPrice && (
                  <span className="line-through text-gray-300 ml-2">
                    ₹{i.price}
                  </span>
                )}
              </div>

              {/* QTY */}
              <div className="flex items-center gap-2 mt-2">
                <button onClick={() => decreaseQty(i.id)} className="bg-white/20 px-2">-</button>
                <span>{i.qty}</span>
                <button onClick={() => increaseQty(i.id)} className="bg-white/20 px-2">+</button>
              </div>
            </div>

            {/* TOTAL ITEM PRICE */}
            <div className="font-bold text-yellow-200">
              ₹{(i.discountPrice || i.price) * i.qty}
            </div>

          </div>
        ))
      )}

      {/* TOTAL */}
      {cart.length > 0 && (
        <div className="mt-5 border-t border-white/30 pt-4">

          <div className="flex justify-between">
            <span>MRP</span>
            <span className="line-through">
              ₹{cart.reduce((sum, i) => sum + i.price * i.qty, 0)}
            </span>
          </div>

          <div className="flex justify-between text-green-300 text-sm">
            <span>You Saved</span>
            <span>
              ₹{cart.reduce((sum, i) => sum + (i.price - (i.discountPrice || i.price)) * i.qty, 0)}
            </span>
          </div>

          <div className="flex justify-between text-lg font-bold mt-2">
            <span>Total</span>
            <span className="text-yellow-200">
              ₹{cart.reduce((sum, i) => sum + (i.discountPrice || i.price) * i.qty, 0)}
            </span>
          </div>

          <button
            onClick={() => {
              setCartOpen(false);
              setCheckoutOpen(true);
            }}
            className="mt-4 w-full py-2 bg-white text-purple-700 font-bold rounded-lg"
          >
            Checkout Now 🚀
          </button>

        </div>
      )}

    </div>
  </div>
)}
     {/* ================= CHECKOUT ================= */}
{checkoutOpen && (
  <div
    className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 backdrop-blur-sm"
    onClick={() => setCheckoutOpen(false)}
  >
    <div
      className="bg-gradient-to-br from-pink-700 via-puple-500 to-blue-600 text-white p-6 rounded-2xl w-80 max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20"
      onClick={(e) => e.stopPropagation()}
    >

      {/* HEADER */}
      <h2 className="text-xl font-bold mb-4">🍦 Checkout Details</h2>

      {/* INPUTS */}
      <div className="space-y-3">

        <input
          placeholder="👤 Name"
          className="w-full p-2 rounded bg-white/20 placeholder-white/80 outline-none"
          onChange={(e) =>
            setCustomer({ ...customer, name: e.target.value })
          }
        />

        <input
          placeholder="📞 Phone"
          className="w-full p-2 rounded bg-white/20 placeholder-white/80 outline-none"
          onChange={(e) =>
            setCustomer({ ...customer, phone: e.target.value })
          }
        />

        <textarea
          placeholder="🏠 Address"
          className="w-full p-2 rounded bg-white/20 placeholder-white/80 outline-none"
          onChange={(e) =>
            setCustomer({ ...customer, address: e.target.value })
          }
        />

        <input
          placeholder="📍 City"
          className="w-full p-2 rounded bg-white/20 placeholder-white/80 outline-none"
          onChange={(e) =>
            setCustomer({ ...customer, city: e.target.value })
          }
        />

        <input
          placeholder="📮 Pincode"
          className="w-full p-2 rounded bg-white/20 placeholder-white/80 outline-none"
          onChange={(e) =>
            setCustomer({ ...customer, pincode: e.target.value })
          }
        />

        {/* PAYMENT METHOD */}
        <select
          value={payment}
          className="w-full p-2 rounded bg-white/20 text-white outline-none"
          onChange={(e) => setPayment(e.target.value)}
        >
          <option value="UPI" className="text-black">UPI</option>
          <option value="COD" className="text-black">Cash on Delivery</option>
        </select>

        {/* UPI INPUT */}
        {payment === "UPI" && (
          <input
            placeholder="💳 Enter UPI ID"
            className="w-full p-2 rounded bg-white/20 placeholder-white/80 outline-none"
            onChange={(e) => setUpi(e.target.value)}
          />
        )}

      </div>

      {/* PRICE SUMMARY */}
      <div className="mt-5 bg-white/10 p-4 rounded-xl">

        {/* MRP TOTAL */}
        <div className="flex justify-between text-sm line-through text-white/70">
          <span>MRP Total</span>
          <span>
            ₹{cart.reduce((sum, i) => sum + i.price * i.qty, 0)}
          </span>
        </div>

        {/* SAVINGS */}
        <div className="flex justify-between text-sm text-green-300">
          <span>You Saved</span>
          <span>
            ₹{cart.reduce(
              (sum, i) =>
                sum + ((i.price - (i.discountPrice || i.price)) * i.qty),
              0
            )}
          </span>
        </div>

        {/* FINAL TOTAL */}
        <div className="flex justify-between text-lg font-bold mt-2">
          <span>Total</span>
          <span className="text-yellow-200">
            ₹{cart.reduce(
              (sum, i) =>
                sum + ((i.discountPrice || i.price) * i.qty),
              0
            )}
          </span>
        </div>

      </div>

      {/* BUTTON */}
      <button
        onClick={() => {
          if (
            !customer.name ||
            !customer.phone ||
            !customer.address ||
            !customer.city ||
            !customer.pincode
          ) {
            alert("⚠️ Please fill all details");
            return;
          }

          if (payment === "UPI" && !upi) {
            alert("⚠️ Please enter UPI ID");
            return;
          }

          placeOrder();
        }}
        className="w-full mt-5 py-2 bg-white text-pink-600 font-bold rounded-lg hover:bg-gray-100 transition"
      >
        🚀 Place Order
      </button>

    </div>
  </div>
)}
     {/* ================= ORDER HISTORY ================= */}
{ordersOpen && (
  <div
    className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
    onClick={() => setOrdersOpen(false)}
  >
    <div
      className="bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 text-white p-5 rounded-2xl w-80 md:w-96 max-h-[80vh] overflow-y-auto shadow-2xl border border-white/20"
      onClick={(e) => e.stopPropagation()}
    >

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">📦 Your Orders</h2>

        <button
          onClick={() => setOrdersOpen(false)}
          className="text-white bg-white/20 px-2 py-1 rounded hover:bg-white/30 transition"
        >
          ✖
        </button>
      </div>

      {/* EMPTY STATE */}
      {orders.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-white/80">No Orders Yet 😢</p>
          <p className="text-xs text-white/60 mt-1">
            Start shopping delicious ice creams 🍦
          </p>
        </div>
      ) : (
        orders.map((o) => (
          <div
            key={o.id}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-4 mb-4 rounded-xl relative shadow-lg"
          >

            {/* DELETE BUTTON */}
            <button
              onClick={() => {
                const updated = orders.filter((item) => item.id !== o.id);
                setOrders(updated);
                localStorage.setItem("orders", JSON.stringify(updated));
              }}
              className="absolute top-2 right-2 text-xs bg-red-500/80 px-2 py-1 rounded hover:bg-red-600 transition"
            >
              ❌
            </button>

            {/* DATE + STATUS */}
            <div className="flex justify-between items-center">
              <p className="text-xs text-white/80">{o.date}</p>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                {o.status}
              </span>
            </div>

            {/* TOTAL */}
            <p className="text-xl font-bold text-yellow-200 mt-2">
              ₹{o.total}
            </p>

            {/* CUSTOMER */}
            <div className="text-xs mt-3 text-white/90 space-y-1">
              <p>👤 {o.customer?.name}</p>
              <p>📞 {o.customer?.phone}</p>
              <p>🏠 {o.customer?.address}</p>
              <p>📍 {o.customer?.city} - {o.customer?.pincode}</p>
            </div>

            {/* ITEMS */}
            <div className="mt-3 text-sm bg-white/10 p-2 rounded-lg">
              {o.items.map((i) => (
                <p key={i.id} className="flex justify-between">
                  <span>{i.name}</span>
                  <span>x {i.qty}</span>
                </p>
              ))}
            </div>

            {/* PAYMENT */}
            <p className="text-xs mt-3 text-white/80">
              💳 Payment: {o.payment}
            </p>

          </div>
        ))
      )}
    </div>
  </div>
)}
      <Footer />
    </div>
  );
};

export default Icecrem;