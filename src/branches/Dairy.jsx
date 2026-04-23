import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ================== PRODUCTS ================== */
const productsData = [
  {
    id: 1,
    name: "Fresh Cow Milk",
    price: 50,
    category: "Milk",
    img: "https://4.imimg.com/data4/WE/NC/IMOB-44709808/images1-500x500.jpg",
    desc: "Farm fresh pure cow milk delivered daily.",
    rating: 4.6,
    reviews: 1243,
    badge: "BESTSELLER"
  },
  {
    id: 2,
    name: "Buffalo Milk",
    price: 60,
    category: "Milk",
    img: "https://img.clevup.in/408224/BuffaloMilk-1731154310288.png?format=webp",
    desc: "Rich and creamy buffalo milk for better nutrition.",
    rating: 4.7,
    reviews: 980
  },
  {
    id: 3,
    name: "Full Cream Milk",
    price: 55,
    category: "Milk",
    img: "https://tiimg.tistatic.com/fp/1/008/171/pure-healthy-raw-original-no-added-preservative-full-cream-milk-057.jpg",
    desc: "High fat full cream milk for strong health.",
    rating: 4.5,
    reviews: 870
  },
  {
    id: 4,
    name: "Paneer Premium",
    price: 320,
    category: "Cheese",
    img: "https://cms.patrika.com/wp-content/uploads/2020/02/13/paneer.jpg",
    desc: "Soft and fresh paneer perfect for cooking.",
    rating: 4.8,
    reviews: 2100,
    badge: "TOP RATED"
  },
  {
    id: 5,
    name: "Mozzarella Cheese",
    price: 280,
    category: "Cheese",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvEnOsWJiWPvjnKfAm_zINt0e6umW7YJiYQ&s",
    desc: "Stretchy cheese ideal for pizza & snacks.",
    rating: 4.6,
    reviews: 670
  },
  {
    id: 6,
    name: "Cheddar Cheese",
    price: 300,
    category: "Cheese",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5nlq3saP698Ne5hWZQWkZxEDltG-TFrYISg&s",
    desc: "Aged cheddar cheese with rich taste.",
    rating: 4.5,
    reviews: 520
  },
  {
    id: 7,
    name: "Desi Ghee (Pure)",
    price: 650,
    category: "Ghee",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOqZ5UxSzSzXxUWjeanSxNzv9U4j9ZByTRfA&s",
    desc: "Traditional bilona method ghee.",
    rating: 4.9,
    reviews: 3100,
    badge: "BESTSELLER"
  },
  {
    id: 8,
    name: "Cow Ghee",
    price: 600,
    category: "Ghee",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlyEQyIKfqmoSNM3F1TWjlQyuvq-T-7RLqYA&s",
    desc: "Healthy and aromatic cow ghee.",
    rating: 4.7,
    reviews: 1500
  },
  {
    id: 9,
    name: "Curd (Dahi)",
    price: 80,
    category: "Curd",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCefELjIIxDdTjQmRbOSF3BkOZ6i0U2ptHDw&s",
    desc: "Thick and creamy homemade curd.",
    rating: 4.6,
    reviews: 900
  },
  {
    id: 10,
    name: "Greek Yogurt",
    price: 120,
    category: "Curd",
    img: "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/323/323169/greek-yoghurt-in-bowl.jpg?w=1155&h=1541",
    desc: "Protein-rich Greek yogurt.",
    rating: 4.7,
    reviews: 430,
    badge: "NEW"
  },
  {
    id: 11,
    name: "Salted Butter",
    price: 120,
    category: "Butter",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKx3D4dWtF_b5qvkRJeLSiVLqxFmhFuVZkA&s",
    desc: "Creamy salted butter for daily use.",
    rating: 4.5,
    reviews: 780
  },
  {
    id: 12,
    name: "Unsalted Butter",
    price: 130,
    category: "Butter",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6VdEIq8yU-y9HEjiyiFAvMz3qjFexNpV4g&s",
    desc: "Perfect for baking and cooking.",
    rating: 4.6,
    reviews: 620
  },

  /* 🔥 ADD MORE VARIETY */
  {
    id: 13,
    name: "Flavored Milk (Chocolate)",
    price: 60,
    category: "Milk",
    img: "https://5.imimg.com/data5/ANDROID/Default/2022/3/IF/AU/YA/148854515/product-jpeg-500x500.jpg",
    desc: "Delicious chocolate flavored milk.",
    rating: 4.4,
    reviews: 340
  },
  {
    id: 14,
    name: "Lassi Sweet",
    price: 40,
    category: "Curd",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMLiSE5B5dinXCOHeE4UPuaOPILGLKjl6JCw&s",
    desc: "Refreshing traditional sweet lassi.",
    rating: 4.6,
    reviews: 880
  },
  {
    id: 15,
    name: "Ice Cream VanillaIce Cream Vanilla",
    price: 90,
    category: "Butter",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6UsvZ0Izhlb613DGwhCRzCKPzZa3mk8Vf3g&s",
    desc: "Classic vanilla ice cream.",
    rating: 4.7,
    reviews: 1500
  },
  {
    id: 16,
    name: "Khoya",
    price: 280,
    category: "Milk",
    img: "https://www.grocio.in/upload_images/product/big/4121620396860.jpg",
    desc: "Fresh khoya for sweets preparation.",
    rating: 4.5,
    reviews: 560
  },
  {
    id: 17,
    name: "Milk Powder",
    price: 400,
    category: "Milk",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3kevXi8E4T3OfMatipGplRERKOj0cfvyKg&s",
    desc: "Instant milk powder for quick use.",
    rating: 4.4,
    reviews: 430
  },
];

const categories = ["All", "Milk", "Cheese", "Ghee", "Curd", "Butter"];

/* ================== COMPONENT ================== */
const Dairy = () => {
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
      🥛 Shreemaya Dairy
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
        className="bg-green-600 text-white px-3 py-1 rounded"
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
        className="bg-green-600 text-white py-2 rounded"
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
    className="relative bg-gradient-to-r from-green-600 via-green-500 to-green-700 text-white rounded-2xl p-6 md:p-12 mb-12 shadow-2xl overflow-hidden"
  >

    {/* Background Glow */}
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
    <div className="absolute bottom-0 left-0 w-52 h-52 bg-white/10 rounded-full blur-2xl"></div>

    {/* Content */}
    <div className="relative z-10">

      <h1 className="text-2xl md:text-5xl font-bold leading-tight">
        🥛 Welcome to Shreemaya Dairy
      </h1>

      <h2 className="mt-2 text-lg md:text-2xl font-semibold text-green-100">
        Pure. Fresh. Trusted.
      </h2>

      <p className="mt-4 text-sm md:text-base max-w-2xl text-green-50 leading-relaxed">
        Shreemaya Dairy is the first and most trusted branch of the Shreemaya Group, 
        delivering farm-fresh dairy products straight to your home. We don’t just sell products — 
        we deliver <b>purity, hygiene, and trust</b> in every drop.
      </p>

      <p className="mt-3 text-sm md:text-base max-w-2xl text-green-100">
        🐄 Direct from farms | ❄ Hygienic processing | 🚚 Fast delivery | ❤️ Loved by families
      </p>

      <div className="flex flex-wrap gap-3 mt-6">

        <button
          onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
          className="px-6 py-2 bg-white text-green-700 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Shop Fresh Products
        </button>

        <button
          onClick={() => setOrdersOpen(true)}
          className="px-6 py-2 border border-white rounded-lg font-semibold hover:bg-white hover:text-green-700 transition"
        >
          View Orders 📦
        </button>

      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap gap-4 mt-6 text-sm">

        <div className="bg-white/20 px-3 py-1 rounded-full">
          ✅ 100% Pure Milk
        </div>

        <div className="bg-white/20 px-3 py-1 rounded-full">
          🧊 Cold Chain Maintained
        </div>

        <div className="bg-white/20 px-3 py-1 rounded-full">
          🌿 No Chemicals
        </div>

        <div className="bg-white/20 px-3 py-1 rounded-full">
          🏆 Premium Quality
        </div>

      </div>

    </div>
  </motion.div>

        {/* CATEGORY */}
        <div className="flex gap-3 mb-6 overflow-x-auto">
          {categories.map((c, i) => (
            <button key={i}
              onClick={() => setCategory(c)}
              className={`px-4 py-1 rounded-full border whitespace-nowrap ${
                category === c ? "bg-green-600 text-white" : ""
              }`}>
              {c}
            </button>
          ))}
        </div>

        {/* PRODUCTS */}
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
  {filtered.map((p) => (
    <motion.div
      key={p.id}
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow overflow-hidden relative"
    >

      {/* IMAGE */}
      <img
        src={p.img}
        className="h-32 md:h-40 w-full object-cover"
      />

      {/* BADGE */}
      {p.badge && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded shadow">
          {p.badge}
        </span>
      )}

      {/* CONTENT */}
      <div className="p-3 md:p-4">

        {/* NAME */}
        <h2 className="dark:text-white text-sm md:text-base font-semibold line-clamp-1">
          {p.name}
        </h2>

        {/* PRICE */}
        <p className="text-green-600 font-bold">₹{p.price}</p>

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
          className="mt-2 w-full py-1 md:py-2 bg-green-700 text-white rounded text-sm active:bg-gray-900 hover:bg-green-300 transition"
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
          <div className="flex-1 bg-black/50" onClick={() => setCartOpen(false)} />

          <div className="w-80 md:w-96 bg-white dark:bg-gray-900 p-5 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 dark:text-white">Cart</h2>

            {cart.map((i) => (
              <div key={i.id} className="flex gap-3 mb-4">
                <img src={i.img} className="w-14 h-14 rounded" />

                <div className="flex-1">
                  <p className="dark:text-white text-sm">{i.name}</p>

                  <div className="flex gap-2 mt-1">
                    <button onClick={() => decreaseQty(i.id)}>-</button>
                    <span>{i.qty}</span>
                    <button onClick={() => increaseQty(i.id)}>+</button>
                  </div>
                </div>

                <p className="text-sm">₹{i.price * i.qty}</p>
              </div>
            ))}

            <h3 className="font-bold">Total ₹{total}</h3>

            <button
              onClick={() => {
                setCartOpen(false);
                setCheckoutOpen(true);
              }}
              className="mt-3 w-full py-2 bg-green-600 text-white rounded"
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      {/* ================= CHECKOUT ================= */}
{checkoutOpen && (
  <div
    className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
    onClick={() => setCheckoutOpen(false)}   // 👈 OUTSIDE CLICK CLOSE
  >
    <div
      className="bg-white dark:bg-gray-900 p-5 rounded w-80 max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}   // 👈 INSIDE CLICK SAFE
    >

      <h2 className="font-bold mb-3 dark:text-white">Checkout</h2>

      <input
        placeholder="Name"
        className="w-full mb-2 p-2 border"
        onChange={(e) =>
          setCustomer({ ...customer, name: e.target.value })
        }
      />

      <input
        placeholder="Phone"
        className="w-full mb-2 p-2 border"
        onChange={(e) =>
          setCustomer({ ...customer, phone: e.target.value })
        }
      />

      <textarea
        placeholder="Address"
        className="w-full mb-2 p-2 border"
        onChange={(e) =>
          setCustomer({ ...customer, address: e.target.value })
        }
      />

      <input
        placeholder="City"
        className="w-full mb-2 p-2 border"
        onChange={(e) =>
          setCustomer({ ...customer, city: e.target.value })
        }
      />

      <input
        placeholder="Pincode"
        className="w-full mb-2 p-2 border"
        onChange={(e) =>
          setCustomer({ ...customer, pincode: e.target.value })
        }
      />

      <select
        className="w-full mb-3 p-2 border"
        onChange={(e) => setPayment(e.target.value)}
      >
        <option>UPI</option>
        <option>COD</option>
      </select>

      {payment === "UPI" && (
        <input
          placeholder="UPI ID"
          className="w-full mb-3 p-2 border"
          onChange={(e) => setUpi(e.target.value)}
        />
      )}

      <p className="dark:text-white">Total ₹{total}</p>

      <button
        onClick={placeOrder}
        className="w-full mt-3 py-2 bg-green-600 text-white rounded"
      >
        Place Order
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
      className="bg-white dark:bg-gray-900 p-5 rounded w-80 md:w-96 max-h-[80vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="font-bold mb-3 dark:text-white">📦 Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">No Orders</p>
      ) : (
        orders.map((o) => (
          <div
            key={o.id}
            className="border p-3 mb-4 rounded shadow relative"
          >

            {/* ❌ DELETE BUTTON */}
            <button
              onClick={() => {
                const updated = orders.filter((item) => item.id !== o.id);
                setOrders(updated);
                localStorage.setItem("orders", JSON.stringify(updated));
              }}
              className="absolute top-2 right-2 text-red-500 text-xs hover:scale-110 transition"
            >
              ❌ Delete
            </button>

            <p className="text-xs text-gray-500">{o.date}</p>
            <p className="font-semibold">{o.status}</p>
            <p className="text-green-600 font-bold">₹{o.total}</p>

            <div className="text-sm mt-2">
              <p>{o.customer?.name}</p>
              <p>{o.customer?.phone}</p>
              <p>{o.customer?.address}</p>
              <p>{o.customer?.city} - {o.customer?.pincode}</p>
            </div>

            <div className="text-sm mt-2">
              {o.items.map((i) => (
                <p key={i.id}>{i.name} x {i.qty}</p>
              ))}
            </div>

            <p className="text-xs mt-2">Payment: {o.payment}</p>

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

export default Dairy;