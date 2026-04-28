import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import shivam from "../branches/shivam.jpeg"
import track from "../branches/Resturent/Tracking"

/* ================== PRODUCTS (RESTAURANT MENU) ================== */
const productsData = [

  // ================= PIZZA =================
  {
    id: 1,
    name: "Cheese Burst Pizza",
    price: 320,
    discountPrice: 249,
    category: "Pizza",
    img: "https://images.unsplash.com/photo-1601924582975-7e6f7c1e9f9c",
    desc: "Loaded cheese burst pizza with extra toppings.",
    rating: 4.8,
    reviews: 2500,
    badge: "BESTSELLER"
  },
  {
    id: 2,
    name: "Farmhouse Pizza",
    price: 350,
    discountPrice: 279,
    category: "Pizza",
    img: "https://images.unsplash.com/photo-1594007654729-407eedc4fe24",
    desc: "Fresh veggie loaded farmhouse pizza.",
    rating: 4.7,
    reviews: 1800
  },

  // ================= BURGER =================
  {
    id: 3,
    name: "Veg Burger",
    price: 150,
    discountPrice: 120,
    category: "Burger",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    desc: "Crispy veg patty with fresh veggies.",
    rating: 4.5,
    reviews: 1200
  },
  {
    id: 4,
    name: "Cheese Burger",
    price: 180,
    discountPrice: 140,
    category: "Burger",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    desc: "Juicy burger with melted cheese.",
    rating: 4.6,
    reviews: 1500,
    badge: "HOT"
  },

  // ================= BIRYANI =================
  {
    id: 5,
    name: "Chicken Biryani",
    price: 250,
    discountPrice: 199,
    category: "Biryani",
    img: "https://images.unsplash.com/photo-1604908176997-4316c2880325",
    desc: "Authentic spicy chicken biryani.",
    rating: 4.8,
    reviews: 3000,
    badge: "TOP RATED"
  },
  {
    id: 6,
    name: "Veg Biryani",
    price: 200,
    discountPrice: 159,
    category: "Biryani",
    img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
    desc: "Flavorful veg biryani with spices.",
    rating: 4.5,
    reviews: 1400
  },

  // ================= MAIN COURSE =================
  {
    id: 7,
    name: "Paneer Butter Masala",
    price: 280,
    discountPrice: 229,
    category: "Main Course",
    img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
    desc: "Rich creamy paneer gravy.",
    rating: 4.7,
    reviews: 1700
  },
  {
    id: 8,
    name: "Dal Makhani",
    price: 220,
    discountPrice: 179,
    category: "Main Course",
    img: "https://images.unsplash.com/photo-1628294895950-9805252327bc",
    desc: "Slow cooked dal with butter.",
    rating: 4.6,
    reviews: 1300
  },

  // ================= SNACKS =================
  {
    id: 9,
    name: "French Fries",
    price: 120,
    discountPrice: 90,
    category: "Snacks",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5",
    desc: "Crispy golden fries.",
    rating: 4.4,
    reviews: 900
  },
  {
    id: 10,
    name: "Garlic Bread",
    price: 150,
    discountPrice: 119,
    category: "Snacks",
    img: "https://images.unsplash.com/photo-1573140401552-3fab0b24306f",
    desc: "Cheesy garlic bread slices.",
    rating: 4.5,
    reviews: 1100
  },

  // ================= DRINKS =================
  {
    id: 11,
    name: "Cold Coffee",
    price: 120,
    discountPrice: 99,
    category: "Drinks",
    img: "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    desc: "Chilled creamy coffee drink.",
    rating: 4.5,
    reviews: 800
  },
  {
    id: 12,
    name: "Chocolate Shake",
    price: 140,
    discountPrice: 110,
    category: "Drinks",
    img: "https://images.unsplash.com/photo-1577805947697-89e18249d767",
    desc: "Thick chocolate milkshake.",
    rating: 4.7,
    reviews: 1000
  },

  // ================= DESSERT =================
  {
    id: 13,
    name: "Chocolate Ice Cream",
    price: 100,
    discountPrice: 79,
    category: "Desserts",
    img: "https://images.unsplash.com/photo-1560008581-09826d1de69e",
    desc: "Rich chocolate ice cream scoop.",
    rating: 4.8,
    reviews: 2000
  },
  {
    id: 14,
    name: "Brownie with Ice Cream",
    price: 180,
    discountPrice: 149,
    category: "Desserts",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    desc: "Hot brownie with vanilla ice cream.",
    rating: 4.9,
    reviews: 2200,
    badge: "BESTSELLER"
  },

  // ================= COMBO =================
  {
    id: 15,
    name: "Burger + Fries Combo",
    price: 250,
    discountPrice: 199,
    category: "Combo",
    img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b",
    desc: "Perfect combo meal deal.",
    rating: 4.7,
    reviews: 1800,
    badge: "DEAL"
  },
  {
    id: 16,
    name: "Pizza + Coke Combo",
    price: 400,
    discountPrice: 329,
    category: "Combo",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    desc: "Pizza with refreshing coke.",
    rating: 4.8,
    reviews: 2100
  }

];


/* ================== CATEGORIES ================== */
const categories = [
  "All",
  "Pizza",
  "Burger",
  "Biryani",
  "Main Course",
  "Snacks",
  "Drinks",
  "Desserts",
  "Combo"
];
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
  const [trackingOpen, setTrackingOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [payment, setPayment] = useState("UPI");
  const [upi, setUpi] = useState("");
  const [coupon, setCoupon] = useState("");
const [discount, setDiscount] = useState(0);
const [couponApplied, setCouponApplied] = useState(false);
const subtotal = cart.reduce(
  (sum, i) => sum + (i.discountPrice || i.price) * i.qty,
  0
);

const mrpTotal = cart.reduce(
  (sum, i) => sum + i.price * i.qty,
  0
);

const savings = mrpTotal - subtotal;

const deliveryFee = subtotal > 499 ? 0 : 40;

const finalTotal = Math.max(subtotal + deliveryFee - discount, 0);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
 const applyCoupon = () => {
  if (couponApplied) {
    alert("Coupon already applied ❗");
    return;
  }

  if (coupon.toUpperCase() === "FOOD50") {
    setDiscount(50);
    setCouponApplied(true);
    alert("🎉 ₹50 OFF Applied");
  } 
  else if (coupon.toUpperCase() === "SAVE20") {
    const disc = Math.round(subtotal * 0.2);
    setDiscount(disc);
    setCouponApplied(true);
    alert("🎉 20% OFF Applied");
  } 
  else {
    alert("❌ Invalid Coupon");
  }
};


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

  // ✅ CALCULATIONS
  const subtotal = cart.reduce(
    (sum, i) => sum + (i.discountPrice || i.price) * i.qty,
    0
  );

  const mrpTotal = cart.reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );

  const savings = mrpTotal - subtotal;
  const deliveryFee = subtotal > 499 ? 0 : 40;
  const finalTotal = Math.max(subtotal + deliveryFee - discount, 0);

  const newOrder = {
    id: Date.now(),
    items: cart,

    // ✅ IMPORTANT (yahi missing tha)
    subtotal,
    savings,
    discount,
    deliveryFee,
    total: finalTotal,

    couponCode: coupon,

    payment,
    upi,
    customer,

    status: "Preparing",
    date: new Date().toLocaleString(),
  };

  const updated = [newOrder, ...orders];
  setOrders(updated);
  localStorage.setItem("orders", JSON.stringify(updated));

  // RESET
  setCart([]);
  setCheckoutOpen(false);
  setCartOpen(false);
  setCoupon("");
  setDiscount(0);
  setCouponApplied(false);

  alert("Order Placed 🎉");

  // ✅ STATUS FLOW (realistic)
  setTimeout(() => {
    updateOrderStatus(newOrder.id, "On the Way");
  }, 3000);

  setTimeout(() => {
    updateOrderStatus(newOrder.id, "Delivered");
  }, 7000);
};
<button
  onClick={() => {
    setSelectedOrder(o);
    setTrackingOpen(true);
  }}
  className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600"
>
  🚚 Track Order
</button>
/* ================== DELETE ORDER ================== */
const deleteOrder = (id) => {
  const updated = orders.filter((o) => o.id !== id);

  setOrders(updated);
  localStorage.setItem("orders", JSON.stringify(updated));
};
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">

     {/* ================= NAVBAR ================= */}
<nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow z-50 px-4 md:px-10 py-3 border-b border-gray-200 dark:border-gray-800">

  <div className="flex justify-between items-center">

    {/* LOGO */}
    <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
      🍽️ Shreemaya Restaurant
    </h1>

    {/* ================= DESKTOP MENU ================= */}
    <div className="hidden md:flex items-center gap-4">

      {/* SEARCH */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 pl-10 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 w-64"
        />
        <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
      </div>

      {/* HOME */}
      <button
        onClick={() => navigate("/")}
        className="px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:opacity-90 transition"
      >
        Home
      </button>

      {/* ORDERS */}
      <button
        onClick={() => setOrdersOpen(true)}
        className="text-gray-700 dark:text-white hover:text-orange-500"
      >
        📦 Orders
      </button>

      {/* TRACKING */}
      <button
        onClick={() => setTrackingOpen(true)}
        className="text-green-600 font-semibold animate-pulse"
      >
        🚴 Live Tracking
      </button>

      {/* CART */}
      <button
        onClick={() => setCartOpen(true)}
        className="relative text-gray-700 dark:text-white"
      >
        🛒
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
          {cart.length}
        </span>
      </button>

      {/* THEME */}
      <button onClick={toggleTheme} className="text-xl">
        {dark ? "🌙" : "☀️"}
      </button>

    </div>

    {/* ================= MOBILE MENU BUTTON ================= */}
    <button
      className="md:hidden text-2xl"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? "✖" : "☰"}
    </button>

  </div>

  {/* ================= MOBILE MENU ================= */}
  {menuOpen && (
    <div className="md:hidden mt-4 flex flex-col gap-3 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg">

      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-3 py-2 rounded border dark:bg-gray-800 dark:text-white"
      />

      <button
        onClick={() => {
          navigate("/");
          setMenuOpen(false);
        }}
        className="bg-orange-500 text-white py-2 rounded"
      >
        Home
      </button>

      <button
        onClick={() => {
          setOrdersOpen(true);
          setMenuOpen(false);
        }}
        className="py-2"
      >
        📦 Orders
      </button>

      <button
        onClick={() => {
          setTrackingOpen(true);
          setMenuOpen(false);
        }}
        className="py-2 text-green-600"
      >
        🚴 Live Tracking
      </button>

      <button
        onClick={() => {
          setCartOpen(true);
          setMenuOpen(false);
        }}
        className="py-2"
      >
        🛒 Cart ({cart.length})
      </button>

      <button onClick={toggleTheme} className="py-2">
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
    className="relative bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 text-white rounded-2xl p-6 md:p-12 mb-12 shadow-2xl overflow-hidden"
  >

    {/* GLOW EFFECT */}
    <div className="absolute -top-10 -right-10 w-52 h-52 bg-yellow-400/20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-60 h-60 bg-red-500/20 rounded-full blur-3xl"></div>

    <div className="relative z-10">

      {/* TITLE */}
      <h1 className="text-2xl md:text-5xl font-bold leading-tight">
        🍽️ Shreemaya Restaurant
      </h1>

      <h2 className="mt-2 text-lg md:text-2xl font-semibold text-orange-100">
        Delicious Food. Fast Delivery. Premium Experience.
      </h2>

      <p className="mt-4 text-sm md:text-base max-w-2xl text-orange-50 leading-relaxed">
        Experience restaurant-quality food at your doorstep. From hot pizzas 🍕 to spicy biryani 🍗 
        and creamy curries 🍛 — every dish is crafted with premium ingredients, hygiene, and love.
      </p>

      {/* ================= FRANCHISE PROFILE ================= */}
      <div className="mt-6 bg-white/10 backdrop-blur-md p-4 rounded-xl flex flex-col md:flex-row items-center gap-4 border border-white/20">

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPhcdJ6Nx3Vv4Wx040iAZcMNQSKQfXsd0zA&s"
          className="w-20 h-20 rounded-full border-2 border-white"
          alt="franchise"
        />

        <div>
          <h3 className="text-xl font-bold">Mrs. Manisha Yadav</h3>
          <p className="text-orange-200 text-sm">
            Franchise Owner - Shreemaya Restaurant
          </p>

          <p className="text-xs mt-2 text-orange-50 leading-relaxed">
            Managing restaurant operations with excellence, ensuring top-quality food, 
            fast delivery service, and customer satisfaction across the region.
          </p>

          {/* RATING */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-300 text-lg">⭐⭐⭐⭐⭐</span>
            <span className="text-sm text-white/90">
              4.9 / 5.0 Top Rated Franchise
            </span>
          </div>
        </div>

      </div>

      {/* ================= FEEDBACK ================= */}
      <div className="mt-6 bg-white/10 p-4 rounded-xl border border-white/20">
        <h4 className="font-semibold text-yellow-300 mb-2">
          💬 Feedback to Shreemaya Group
        </h4>

        <p className="text-sm text-white/90 leading-relaxed">
          "Excellent support and high-quality food system. Delivery is fast, customers are happy, 
          and business growth has been amazing with Shreemaya."
        </p>
      </div>

      {/* ================= OFFERS ================= */}
      <div className="flex flex-wrap gap-3 mt-6 text-sm">

        <div className="bg-white/20 px-3 py-1 rounded-full">
          🔥 Flat 50% OFF
        </div>

        <div className="bg-white/20 px-3 py-1 rounded-full">
          🎟️ Use Code: FOOD50
        </div>

        <div className="bg-white/20 px-3 py-1 rounded-full">
          🚚 Free Delivery
        </div>

        <div className="bg-white/20 px-3 py-1 rounded-full">
          💸 ₹100 Cashback
        </div>

      </div>

      {/* ================= FOOD HIGHLIGHTS ================= */}
      <div className="flex flex-wrap gap-3 mt-6 text-sm">

        <div className="bg-white/20 px-3 py-1 rounded-full">
          🍕 Pizza & Fast Food
        </div>

        <div className="bg-white/20 px-3 py-1 rounded-full">
          🍗 Biryani Specials
        </div>

        <div className="bg-white/20 px-3 py-1 rounded-full">
          🍔 Burgers & Snacks
        </div>

        <div className="bg-white/20 px-3 py-1 rounded-full">
          🏆 Premium Quality
        </div>

      </div>

      {/* ================= CTA ================= */}
      <div className="flex flex-wrap gap-3 mt-6">

        <button
          onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
          className="px-6 py-2 bg-white text-red-500 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          🍽️ Explore Menu
        </button>

        <button
          onClick={() => setOrdersOpen(true)}
          className="px-6 py-2 border border-white rounded-lg font-semibold hover:bg-white hover:text-red-500 transition"
        >
          📦 Track Orders
        </button>

      </div>

    </div>
  </motion.div>
{/* ================= CATEGORY ================= */}
<div className="mb-6">

  {/* SCROLL WRAPPER */}
  <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">

    {categories.map((c, i) => {

      const icons = {
        All: "🍽️",
        Pizza: "🍕",
        Burger: "🍔",
        Biryani: "🍗",
        Pasta: "🍝",
        Main: "🍛",
        Drinks: "🥤",
        Dessert: "🍨"
      };

      return (
        <button
          key={i}
          onClick={() => setCategory(c)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-all duration-300 border
          
          ${
            category === c
              ? "bg-gradient-to-r from-orange-500 to-red-500 text-white border-transparent shadow-lg scale-105"
              : "bg-[#1f2937] text-gray-300 border-gray-700 hover:bg-gray-700 hover:text-white"
          }`}
        >
          <span className="text-lg">
            {icons[c] || "🍴"}
          </span>
          {c}
        </button>
      );
    })}

  </div>

  {/* SCROLL SHADOW (OPTIONAL PREMIUM TOUCH) */}
  <div className="h-[2px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-2"></div>

</div>
 {/* ================= PRODUCTS ================= */}
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">

  {filtered.map((p) => (
    <motion.div
      key={p.id}
      whileHover={{ scale: 1.04 }}
      className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden relative border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all"
    >

      {/* IMAGE */}
      <div className="relative overflow-hidden">

        <img
          src={p.img}
          className="h-36 md:h-44 w-full object-cover transition duration-500 hover:scale-110"
          alt={p.name}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

        {/* BADGE */}
        {p.badge && (
          <span className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] px-2 py-1 rounded-full shadow">
            {p.badge}
          </span>
        )}

        {/* DISCOUNT */}
        {p.discountPrice && (
          <span className="absolute top-2 right-2 bg-black/80 text-white text-[10px] px-2 py-1 rounded-full shadow">
            {Math.round(((p.price - p.discountPrice) / p.price) * 100)}% OFF
          </span>
        )}

      </div>

      {/* CONTENT */}
      <div className="p-3 md:p-4">

        {/* NAME */}
        <h2 className="dark:text-white text-sm md:text-base font-semibold line-clamp-1">
          {p.name}
        </h2>

        {/* PRICE */}
        <div className="flex items-center gap-2 mt-1">

          <span className="text-lg font-bold text-orange-500">
            ₹{p.discountPrice || p.price}
          </span>

          {p.discountPrice && (
            <span className="line-through text-gray-400 text-xs">
              ₹{p.price}
            </span>
          )}

        </div>

        {/* DESCRIPTION */}
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 leading-relaxed">
          {p.desc}
        </p>

        {/* RATING + REVIEWS */}
        <div className="flex items-center justify-between mt-2">

          <div className="flex items-center gap-2 text-xs">
            <span className="bg-green-600 text-white px-2 py-[2px] rounded-full">
              ⭐ {p.rating}
            </span>
            <span className="text-gray-400">
              ({p.reviews})
            </span>
          </div>

          {/* QUICK ADD */}
          <button
            onClick={() => addToCart(p)}
            className="text-xs px-3 py-1 bg-gradient-to-r bg-orange-500 hover:bg-red-500 text-white active:bg-gray-900 rounded-full hover:opacity-90 transition"
          >
            + Add to cart
          </button>

        </div>

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
      className="flex-1 bg-black/70 backdrop-blur-sm"
      onClick={() => setCartOpen(false)}
    />

    {/* PANEL */}
    <div className="w-80 md:w-96 bg-gradient-to-b from-[#1f2937] to-[#020617] text-white p-5 overflow-y-auto shadow-2xl border-l border-gray-800">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">🍽️ Your Cart</h2>
        <button onClick={() => setCartOpen(false)} className="bg-gray-700 px-2 py-1 rounded">
          ✖
        </button>
      </div>

      {/* EMPTY */}
      {cart.length === 0 ? (
        <div className="text-center py-10 text-gray-400">
          Cart is empty 😢
        </div>
      ) : (
        cart.map((i) => (
          <div key={i.id} className="flex gap-3 mb-4 bg-[#111827] p-3 rounded-xl border border-gray-700">

            <img src={i.img} className="w-14 h-14 rounded-lg object-cover" />

            <div className="flex-1">
              <p className="text-sm font-semibold">{i.name}</p>

              <p className="text-xs text-gray-400">
                ₹{i.discountPrice || i.price}
              </p>

              <div className="flex gap-2 mt-2">
                <button onClick={() => decreaseQty(i.id)} className="bg-gray-700 px-2">-</button>
                <span>{i.qty}</span>
                <button onClick={() => increaseQty(i.id)} className="bg-gray-700 px-2">+</button>
              </div>
            </div>

            <div className="text-amber-400 font-bold">
              ₹{(i.discountPrice || i.price) * i.qty}
            </div>

          </div>
        ))
      )}

      {/* TOTAL */}
      {cart.length > 0 && (
        <div className="mt-5 border-t pt-4">

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between text-sm text-gray-400">
            <span>Delivery</span>
            <span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
          </div>

          <div className="flex justify-between font-bold text-lg mt-2">
            <span>Total</span>
            <span className="text-amber-400">₹{subtotal + deliveryFee}</span>
          </div>

          <button
            onClick={() => {
              setCartOpen(false);
              setCheckoutOpen(true);
            }}
            className="mt-4 w-full py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg"
          >
            Proceed to Checkout 🚀
          </button>

        </div>
      )}

    </div>
  </div>
)}

 

 {/* ================= CHECKOUT ================= */}
{checkoutOpen && (
  <div
    className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 backdrop-blur-md"
    onClick={() => setCheckoutOpen(false)}
  >

    <div
      className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white p-6 rounded-2xl w-80 md:w-96 max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >

      <h2 className="text-xl font-bold text-center mb-4">
        🍽️ Checkout
      </h2>

      {/* FORM */}
      <div className="space-y-3">

        <input placeholder="Name" className="w-full p-2 rounded bg-white/20"
          onChange={(e)=>setCustomer({...customer,name:e.target.value})}
        />

        <input placeholder="Phone" className="w-full p-2 rounded bg-white/20"
          onChange={(e)=>setCustomer({...customer,phone:e.target.value})}
        />

        <textarea placeholder="Address" className="w-full p-2 rounded bg-white/20"
          onChange={(e)=>setCustomer({...customer,address:e.target.value})}
        />

        <select className="w-full p-2 rounded bg-white/20"
          onChange={(e)=>setPayment(e.target.value)}
        >
          <option className="text-black">UPI</option>
          <option className="text-black">COD</option>
        </select>

        {payment === "UPI" && (
          <input placeholder="UPI ID" className="w-full p-2 rounded bg-white/20"
            onChange={(e)=>setUpi(e.target.value)}
          />
        )}

        {/* COUPON */}
        <div className="flex gap-2">
          <input
            value={coupon}
            onChange={(e)=>setCoupon(e.target.value)}
            placeholder="Coupon Code"
            className="flex-1 p-2 rounded bg-white/20"
          />
          <button onClick={applyCoupon} className="bg-yellow-400 text-black px-3 rounded">
            Apply
          </button>
        </div>

        <p className="text-xs">Use: FOOD50 (50₹ OFF) / SAVE20 (20₹ OFF)</p>

      </div>

      {/* BILL */}
      <div className="mt-4 bg-white/10 p-3 rounded text-sm">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery</span>
          <span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-yellow-300">
            <span>Coupon</span>
            <span>-₹{discount}</span>
          </div>
        )}

        <hr className="my-2"/>

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{finalTotal}</span>
        </div>

      </div>

      <button
        onClick={() => {
          if (!customer.name || !customer.phone || !customer.address) {
            alert("Fill details ❗");
            return;
          }

          if (payment === "UPI" && !upi) {
            alert("Enter UPI ❗");
            return;
          }

          placeOrder();
        }}
        className="w-full mt-4 py-2 bg-white text-red-500 font-bold rounded"
      >
        Place Order 🚀
      </button>

    </div>
  </div>
)}

/* ================= ORDER HISTORY ================= */
{ordersOpen && (
  <div
    className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50"
    onClick={() => setOrdersOpen(false)}
  >
    <div
      className="bg-[#020617] text-white p-5 rounded-2xl w-80 md:w-[420px] max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >

      <div className="flex justify-between mb-4">
        <h2 className="font-bold text-lg">📦 Orders</h2>
        <button onClick={() => setOrdersOpen(false)}>✖</button>
      </div>

      {orders.length === 0 ? (
        <p className="text-center text-gray-400">No Orders 😢</p>
      ) : (
        orders.map((o) => (
          <div
            key={o.id}
            className="bg-gray-900 p-4 rounded mb-3 relative border border-gray-800"
          >

            {/* ❌ DELETE BUTTON */}
            <button
              onClick={() => deleteOrder(o.id)}
              className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1 rounded"
            >
              ❌
            </button>

            <p className="text-xs text-gray-400">{o.date}</p>

            {/* BILL */}
            <div className="mt-2 text-sm bg-gray-800 p-2 rounded">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{o.subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span>{o.deliveryFee === 0 ? "FREE" : `₹${o.deliveryFee}`}</span>
              </div>

              {o.discount > 0 && (
                <div className="flex justify-between text-green-400">
                  <span>Discount</span>
                  <span>-₹{o.discount}</span>
                </div>
              )}

              <div className="flex justify-between font-bold text-amber-400 mt-1">
                <span>Total</span>
                <span>₹{o.total}</span>
              </div>

            </div>

            {/* COUPON */}
            {o.couponCode && (
              <p className="text-xs text-yellow-300 mt-2">
                🎟 Coupon: {o.couponCode}
              </p>
            )}

            {/* USER */}
            <p className="text-xs mt-2">👤 {o.customer?.name}</p>
            <p className="text-xs">💳 {o.payment}</p>

            {/* STATUS */}
            <p className="text-xs mt-2 bg-blue-500 inline-block px-2 rounded">
              {o.status}
            </p>

            {/* ACTIONS */}
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => {
                  setSelectedOrder(o);
                  setTrackingOpen(true);
                }}
                className="bg-blue-600 px-2 py-1 rounded text-xs hover:bg-blue-700"
              >
                📍 Track
              </button>

              <button
                onClick={() => downloadInvoice(o)}
                className="bg-green-600 px-2 py-1 rounded text-xs hover:bg-green-700"
              >
                🧾 Invoice
              </button>
            </div>

          </div>
        ))
      )}
    </div>
  </div>
)}

{/* ================= TRACKING ================= */}
{trackingOpen && (
  <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl w-80 shadow-2xl">

      <h2 className="text-xl font-bold mb-4 text-center">
        🚴 Live Order Tracking
      </h2>

      <div className="flex flex-col gap-4 text-sm">

        <div className="flex items-center gap-3">
          <span className="text-green-500">✔</span>
          Order Confirmed
        </div>

        <div className="flex items-center gap-3">
          <span className="text-yellow-500 animate-pulse">●</span>
          Preparing Food
        </div>

        <div className="flex items-center gap-3">
          <span className="text-gray-400">○</span>
          Out for Delivery
        </div>

        <div className="flex items-center gap-3">
          <span className="text-gray-400">○</span>
          Delivered
        </div>

      </div>

      <button
        onClick={() => setTrackingOpen(false)}
        className="mt-5 w-full bg-red-500 text-white py-2 rounded"
      >
        Close
      </button>

    </div>
  </div>
)}
      <Footer />
    </div>
  );
};

export default Icecrem;