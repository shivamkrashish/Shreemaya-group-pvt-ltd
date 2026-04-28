import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import shivam from "../branches/shivam.jpeg"

/* ================== PRODUCTS (PACKAGED FOODS) ================== */
const productsData = [
  // ================= PASTA =================
  {
    id: 1,
    name: "Creamy White Sauce Pasta",
    price: 120,
    discountPrice: 99,
    category: "Pasta",
    img: "https://m.media-amazon.com/images/I/61X+5ppcj0L._AC_UF1000,1000_QL80_.jpg",
    desc: "Delicious creamy white sauce pasta with herbs & cheese.",
    rating: 4.7,
    reviews: 1200,
    badge: "BESTSELLER"
  },
  {
    id: 2,
    name: "Red Sauce Pasta",
    price: 110,
    discountPrice: 89,
    category: "Pasta",
    img: "https://5.imimg.com/data5/SELLER/Default/2022/1/CU/RA/LS/68283200/smith-jones-23-gm-red-pasta-sauce-mix-500x500.jpg",
    desc: "Tangy tomato pasta with rich Italian spices.",
    rating: 4.5,
    reviews: 980
  },
  {
    id: 3,
    name: "Cheese Loaded Pasta",
    price: 140,
    discountPrice: 119,
    category: "Pasta",
    img: "https://m.media-amazon.com/images/I/81tlHVxV8BL._AC_UF894,1000_QL80_.jpg",
    desc: "Extra cheesy pasta for ultimate taste lovers.",
    rating: 4.8,
    reviews: 1500,
    badge: "HOT"
  },

  // ================= CHIPS =================
  {
    id: 4,
    name: "Masala Chips",
    price: 30,
    discountPrice: 25,
    category: "Chips",
    img: "https://www.bbassets.com/media/uploads/p/l/40202282_13-lays-potato-chips-indian-masala-magic-flavour-best-quality-crunchy.jpg",
    desc: "Spicy masala flavored crispy chips.",
    rating: 4.6,
    reviews: 2000
  },
  {
    id: 5,
    name: "Cream & Onion Chips",
    price: 35,
    discountPrice: 28,
    category: "Chips",
    img: "https://www.balajiwafers.com/cdn/shop/files/Crunchem_Cream_Onion_Wafers_Default_4a89e1e3-54a9-4089-92de-c1ad75b11156.png?v=1746173853&width=1500",
    desc: "Creamy onion flavored crunchy chips.",
    rating: 4.5,
    reviews: 1400
  },
  {
    id: 6,
    name: "Salted Classic Chips",
    price: 25,
    discountPrice: 20,
    category: "Chips",
    img: "https://i5.walmartimages.com/asr/a8544e68-f832-4d85-8df1-9c6725a737b0.dbb322197c2ba57feb962cd045ff6156.jpeg?odnHeight=328&odnWidth=328&odnBg=FFFFFF",
    desc: "Simple salted chips with perfect crunch.",
    rating: 4.3,
    reviews: 900
  },

  // ================= CHATORE =================
  {
    id: 7,
    name: "Spicy Namkeen Mix",
    price: 50,
    discountPrice: 40,
    category: "Chatore",
    img: "https://5.imimg.com/data5/LC/TG/LJ/SELLER-15276330/pooja-assarted-namkeen.jpg",
    desc: "Traditional Indian spicy namkeen mix.",
    rating: 4.7,
    reviews: 1700,
    badge: "POPULAR"
  },
  {
    id: 8,
    name: "Aloo Bhujia",
    price: 45,
    discountPrice: 35,
    category: "Chatore",
    img: "https://bhikharamchandmal.in/pub/media/catalog/product/cache/ef57649359a15d7eca263b8363bcd76b/a/l/aloo__bhujia_200g_front_2025.png",
    desc: "Crispy aloo bhujia snack for tea time.",
    rating: 4.6,
    reviews: 1300
  },
  {
    id: 9,
    name: "Moong Dal Snack",
    price: 55,
    discountPrice: 45,
    category: "Chatore",
    img: "https://cpimg.tistatic.com/10899595/b/4/400gm-Moong-Dal-Namkeen..jpg",
    desc: "Healthy roasted moong dal snack.",
    rating: 4.4,
    reviews: 800
  },

  // ================= TUNCH =================
  {
    id: 10,
    name: "Chocolate Tunch",
    price: 60,
    discountPrice: 49,
    category: "Tunch",
    img: "https://www.bulkmart.co.za/wp-content/uploads/2022/01/CADBURY-LARGE-LUNCH-BAR-40X48G-scaled.jpg",
    desc: "Crunchy chocolate coated tunch snack.",
    rating: 4.8,
    reviews: 2100,
    badge: "NEW"
  },
  {
    id: 11,
    name: "Caramel Tunch",
    price: 65,
    discountPrice: 55,
    category: "Tunch",
    img: "https://www.kroger.com/product/images/large/front/0006414410236",
    desc: "Sweet caramel crunchy bites.",
    rating: 4.6,
    reviews: 1100
  },
  {
    id: 12,
    name: "Crunchy Peanut Tunch",
    price: 50,
    discountPrice: 42,
    category: "Tunch",
    img: "https://ayodhyafirst.com/wp-content/uploads/2024/01/crunchy-peanut-40-gm.png",
    desc: "Peanut crunchy sweet snack.",
    rating: 4.5,
    reviews: 900
  },
  {
  id: 13,
  name: "Kurkure Masala Munch",
  price: 20,
  discountPrice: 15,
  category: "Kurkure",
  img: "https://m.media-amazon.com/images/I/71uGU7evScL._AC_UF894,1000_QL80_.jpg",
  desc: "Spicy masala Kurkure with crunchy texture and bold flavor.",
  rating: 4.6,
  reviews: 2100,
  badge: "POPULAR"
},
{
  id: 14,
  name: "Kurkure Chilli Chatka",
  price: 25,
  discountPrice: 18,
  category: "Kurkure",
  img: "https://www.bbassets.com/media/uploads/p/xl/102764_17-kurkure-namkeen-chilli-chatka.jpg",
  desc: "Hot & spicy chilli flavored Kurkure for spicy lovers.",
  rating: 4.5,
  reviews: 1700
},
{
  id: 15,
  name: "Kurkure Solid Masti",
  price: 30,
  discountPrice: 22,
  category: "Kurkure",
  img: "https://www.bbassets.com/media/uploads/p/l/294294_14-kurkure-namkeen-solid-masti-twisteez.jpg",
  desc: "Classic Kurkure taste with perfect crunch and masala mix.",
  rating: 4.7,
  reviews: 2500,
  badge: "BESTSELLER"
}
];

/* ================== CATEGORIES ================== */
const categories = ["All", "Pasta", "Chips", "Chatore", "Tunch", "Kurkure"];
/* ================== COMPONENT ================== */
const Packeged = () => {
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
      🍱 Shreemaya Packaged Foods
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
        className="bg-gray-900 text-white px-3 py-1 rounded"
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
        className="bg-gray-900 text-white py-2 rounded"
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
    className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white rounded-2xl p-6 md:p-12 mb-12 shadow-2xl overflow-hidden border border-gray-800"
  >

    {/* GLOW EFFECT */}
    <div className="absolute -top-10 -right-10 w-52 h-52 bg-indigo-600/20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-600/20 rounded-full blur-3xl"></div>

    <div className="relative z-10">

      {/* TITLE */}
      <h1 className="text-2xl md:text-5xl font-bold leading-tight">
        🍱 Shreemaya Packaged Foods
      </h1>

      <h2 className="mt-2 text-lg md:text-2xl font-semibold text-gray-300">
        Taste Quality. Feel Trust. Experience Premium Snacks.
      </h2>

      <p className="mt-4 text-sm md:text-base max-w-2xl text-gray-400 leading-relaxed">
        From crispy chips to delicious pasta and traditional namkeen, Shreemaya brings you 
        a wide range of hygienic, high-quality packaged foods made with premium ingredients 
        and modern processing standards. Every bite reflects purity, taste, and trust.
      </p>

      {/* ================= FRANCHISE PROFILE ================= */}
      <div className="mt-6 bg-gray-900/70 backdrop-blur-md p-4 rounded-xl flex flex-col md:flex-row items-center gap-4 border border-gray-700">

        <img
          src={shivam}
          className="w-20 h-20 rounded-full border-2 border-indigo-500"
          alt="shivam"
        />

        <div>
          <h3 className="text-xl font-bold">Mr. Shivam Ashish</h3>
          <p className="text-indigo-400 text-sm">Franchise Owner - Shreemaya Packaged Foods</p>

          <p className="text-xs mt-2 text-gray-400 leading-relaxed">
            Proud franchise partner of Shreemaya Group, leading packaged food operations with 
            a strong focus on quality, hygiene, and customer satisfaction across Bihar & nearby regions.
          </p>

          {/* RATING */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
            <span className="text-sm text-gray-300">
              4.9 / 5.0 Rated Franchise Partner
            </span>
          </div>
        </div>

      </div>

      {/* ================= FEEDBACK ================= */}
      <div className="mt-6 bg-gray-800 p-4 rounded-xl border border-gray-700">
        <h4 className="font-semibold text-indigo-400 mb-2">
          💬 Feedback to Shreemaya Group
        </h4>

        <p className="text-sm text-gray-300 leading-relaxed">
          "Partnering with Shreemaya Group has been a game-changer. Their product quality, 
          supply chain system, and brand value are truly outstanding. Customers love the taste 
          and consistency, and the business support provided is exceptional. Proud to be part of 
          such a trusted and fast-growing brand."
        </p>
      </div>

      {/* ================= HIGHLIGHTS ================= */}
      <div className="flex flex-wrap gap-3 mt-6 text-sm">

        <div className="bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
          🍝 Premium Pasta Range
        </div>

        <div className="bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
          🍟 Crispy Chips Collection
        </div>

        <div className="bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
          🥜 Traditional Namkeen
        </div>

        <div className="bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
          🏆 High Quality & Hygiene
        </div>

      </div>

      {/* ================= CTA ================= */}
      <div className="flex flex-wrap gap-3 mt-6">

        <button
          onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
          className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition"
        >
          🛍️ Explore Products
        </button>

        <button
          onClick={() => setOrdersOpen(true)}
          className="px-6 py-2 border border-gray-600 rounded-lg font-semibold hover:bg-gray-800 transition"
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
      className={`px-4 py-1 rounded-full border whitespace-nowrap text-sm font-medium transition-all duration-300
        ${
          category === c
            ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-transparent shadow-md"
            : "bg-[#1f2937] text-gray-300 border-gray-700 hover:bg-gray-700 hover:text-white"
        }`}
    >
      {c}
    </button>
  ))}

</div>
  {/* ================= PRODUCTS ================= */}
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

  {filtered.map((p) => (
    <motion.div
      key={p.id}
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow overflow-hidden relative"
    >

      {/* IMAGE */}
      <div className="relative">
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

        {/* DISCOUNT % */}
        {p.discountPrice && (
          <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded shadow">
            {Math.round(((p.price - p.discountPrice) / p.price) * 100)}% OFF
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-3 md:p-4">

        <h2 className="dark:text-white text-sm md:text-base font-semibold line-clamp-1">
          {p.name}
        </h2>

      {/* PRICE SECTION */}
<div className="flex items-center gap-2 mt-1">

  {/* DISCOUNT PRICE (MAIN) */}
  <span className="text-lg font-bold text-amber-400">
    ₹{p.discountPrice || p.price}
  </span>

  {/* ORIGINAL PRICE */}
  {p.discountPrice && (
    <span className="line-through text-gray-400 text-xs">
      ₹{p.price}
    </span>
  )}

  {/* DISCOUNT % BADGE */}
  {p.discountPrice && (
    <span className="text-[10px] bg-green-500 text-white px-2 py-[2px] rounded">
      {Math.round(((p.price - p.discountPrice) / p.price) * 100)}% OFF
    </span>
  )}

</div>

{/* DESCRIPTION */}
<p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
  {p.desc}
</p>
        {/* RATING */}
        <div className="flex items-center gap-2 mt-2 text-xs md:text-sm">
          <span className="bg-gray-800 text-white px-2 py-[2px] rounded">
            ⭐ {p.rating}
          </span>
          <span className="text-gray-500">
            ({p.reviews})
          </span>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => addToCart(p)}
          className="mt-2 w-full py-1 md:py-2 active:bg-amber-200 bg-black text-white rounded text-sm hover:bg-gray-800 active:scale-95 transition"
        >
          Add to Cart
        </button>

      </div>

    </motion.div>
  ))}
</div>

</div>

 {/* ================= CART ================= */}
{cartOpen && (
  <div className="fixed inset-0 flex z-50">

    {/* BACKDROP */}
    <div
      className="flex-1 bg-black/60 backdrop-blur-sm"
      onClick={() => setCartOpen(false)}
    />

    {/* CART PANEL */}
    <div className="w-80 md:w-96 bg-[#111827] text-white p-5 overflow-y-auto shadow-2xl border-l border-gray-800">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">🛒 Your Cart</h2>

        <button
          onClick={() => setCartOpen(false)}
          className="bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 transition"
        >
          ✖
        </button>
      </div>

      {/* EMPTY STATE */}
      {cart.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-300">Your cart is empty 😢</p>
          <p className="text-xs text-gray-500 mt-1">
            Add some tasty snacks 🍝🍟
          </p>
        </div>
      ) : (
        cart.map((i) => (
          <div
            key={i.id}
            className="flex gap-3 mb-4 bg-gray-900 p-3 rounded-xl border border-gray-700"
          >

            {/* IMAGE */}
            <img
              src={i.img}
              className="w-14 h-14 rounded-lg object-cover"
            />

            {/* DETAILS */}
            <div className="flex-1">
              <p className="text-sm font-semibold">{i.name}</p>

              {/* PRICE */}
              <p className="text-xs text-gray-400">
                ₹{i.discountPrice || i.price}
              </p>

              {/* QUANTITY */}
              <div className="flex items-center gap-2 mt-2">

                <button
                  onClick={() => decreaseQty(i.id)}
                  className="bg-gray-700 px-2 rounded hover:bg-gray-600"
                >
                  -
                </button>

                <span className="font-bold">{i.qty}</span>

                <button
                  onClick={() => increaseQty(i.id)}
                  className="bg-gray-700 px-2 rounded hover:bg-gray-600"
                >
                  +
                </button>

              </div>
            </div>

            {/* TOTAL PRICE */}
            <div className="font-bold text-amber-400">
              ₹{(i.discountPrice) * i.qty}
            </div>

          </div>
        ))
      )}

      {/* TOTAL */}
{cart.length > 0 && (
  <div className="mt-5 border-t border-gray-700 pt-4">

    <div className="flex justify-between text-lg font-bold">
      <span>Total</span>
      <span className="text-amber-400">
        ₹{cart.reduce(
          (sum, i) => sum + (i.discountPrice || i.price) * i.qty,
          0
        )}
      </span>
    </div>

    <button
      onClick={() => {
        setCartOpen(false);
        setCheckoutOpen(true);
      }}
      className="mt-4 w-full py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-semibold hover:opacity-90 transition"
    >
      🛍️ Checkout Now
    </button>

  </div>
)}
    </div>
  </div>
)}
 {/* ================= CHECKOUT ================= */}
{checkoutOpen && (
  <div
    className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 backdrop-blur-sm"
    onClick={() => setCheckoutOpen(false)}
  >
    <div
      className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white p-6 rounded-2xl w-80 md:w-96 max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20"
      onClick={(e) => e.stopPropagation()}
    >

      <h2 className="text-xl font-bold mb-4 text-center">
        🧾 Checkout Details
      </h2>

      {/* INPUTS */}
      <div className="space-y-3">

        <input placeholder="👤 Name" className="w-full p-2 rounded bg-white/20 outline-none"
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
        />

        <input placeholder="📞 Phone" className="w-full p-2 rounded bg-white/20 outline-none"
          onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
        />

        <textarea placeholder="🏠 Address" className="w-full p-2 rounded bg-white/20 outline-none"
          onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
        />

        <input placeholder="📍 City" className="w-full p-2 rounded bg-white/20 outline-none"
          onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
        />

        <input placeholder="📮 Pincode" className="w-full p-2 rounded bg-white/20 outline-none"
          onChange={(e) => setCustomer({ ...customer, pincode: e.target.value })}
        />

        <select
          className="w-full p-2 rounded bg-white/20"
          onChange={(e) => setPayment(e.target.value)}
        >
          <option className="text-black">UPI</option>
          <option className="text-black">COD</option>
        </select>

        {payment === "UPI" && (
          <input
            placeholder="💳 Enter UPI ID"
            className="w-full p-2 rounded bg-white/20 outline-none"
            onChange={(e) => setUpi(e.target.value)}
          />
        )}
      </div>

      {/* PRICE SUMMARY */}
      <div className="mt-5 bg-white/10 p-4 rounded-xl">

        {/* MRP */}
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
                sum + ((i.price) - (i.discountPrice || i.price)) * i.qty,
              0
            )}
          </span>
        </div>

        {/* FINAL */}
        <div className="flex justify-between text-lg font-bold mt-2">
          <span>Total</span>
          <span className="text-yellow-300">
            ₹{cart.reduce(
              (sum, i) =>
                sum + (i.discountPrice || i.price) * i.qty,
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
            alert("⚠️ Fill all details");
            return;
          }

          if (payment === "UPI" && !upi) {
            alert("⚠️ Enter UPI ID");
            return;
          }

          placeOrder();
        }}
        className="w-full mt-5 py-2 bg-white text-purple-700 font-bold rounded-lg hover:bg-gray-100"
      >
        🚀 Place Order
      </button>

    </div>
  </div>
)}
 {/* ================= ORDER HISTORY ================= */}
{ordersOpen && (
  <div
    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
    onClick={() => setOrdersOpen(false)}
  >
    <div
      className="bg-[#111827] text-white p-5 rounded-2xl w-80 md:w-96 max-h-[85vh] overflow-y-auto shadow-2xl border border-gray-800"
      onClick={(e) => e.stopPropagation()}
    >

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">📦 Your Orders</h2>

        <button
          onClick={() => setOrdersOpen(false)}
          className="bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 transition"
        >
          ✖
        </button>
      </div>

      {/* EMPTY STATE */}
      {orders.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-300">No Orders Yet 😢</p>
          <p className="text-xs text-gray-500 mt-1">
            Start ordering your snacks 🍝🍟
          </p>
        </div>
      ) : (
        orders.map((o) => (
          <div
            key={o.id}
            className="bg-gray-900 border border-gray-700 p-4 mb-4 rounded-xl shadow-lg relative"
          >

            {/* DELETE BUTTON */}
            <button
              onClick={() => {
                const updated = orders.filter((item) => item.id !== o.id);
                setOrders(updated);
                localStorage.setItem("orders", JSON.stringify(updated));
              }}
              className="absolute top-2 right-2 text-xs bg-red-600 px-2 py-1 rounded hover:bg-red-700 transition"
            >
              ❌
            </button>

            {/* DATE + STATUS */}
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-400">{o.date}</p>

              <span className="text-xs px-2 py-1 rounded-full bg-indigo-600">
                {o.status}
              </span>
            </div>

            {/* TOTAL */}
            <p className="text-xl font-bold text-amber-400 mt-2">
              ₹{o.total}
            </p>

            {/* CUSTOMER */}
            <div className="text-xs mt-3 text-gray-300 space-y-1">
              <p>👤 {o.customer?.name}</p>
              <p>📞 {o.customer?.phone}</p>
              <p>🏠 {o.customer?.address}</p>
              <p>📍 {o.customer?.city} - {o.customer?.pincode}</p>
            </div>

            {/* ITEMS */}
            <div className="mt-3 text-sm bg-gray-800 p-2 rounded-lg">
              {o.items.map((i) => (
                <p key={i.id} className="flex justify-between text-gray-200">
                  <span>{i.name}</span>
                  <span>x {i.qty}</span>
                </p>
              ))}
            </div>

            {/* PAYMENT */}
            <p className="text-xs mt-3 text-gray-400">
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

export default Packeged;