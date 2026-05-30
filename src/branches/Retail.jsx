import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useParams,
  Link,
} from "react-router-dom";

// ===============================
// SHOP DATA
// ===============================
import p from '../assets/Prabhat.png'
const shops = [
  {
  id: 4,
  name: "Shreemaya - Prabhat Kirana & Jeneral Store",
  category: "Retail + Wholesale",
  owner: "Upendra Sahu",
  location: "Bihnagar, Madhubani, Bihar",
  established: "2018",
  rating: 4.6,
  contact: "+91 9876541230",
  email: "prabhatkirana@shreemaya.com",
  image:p,

  description:
    "Trusted kirana store providing fresh groceries and household essentials.",

  products: [
    { id: 11, name: "Wheat Flour (Atta)", price: 320, stock: 80 },
    { id: 12, name: "Toor Dal", price: 140, stock: 60 },
    { id: 13, name: "Mustard Oil", price: 180, stock: 50 },
    { id: 14, name: "Salt", price: 25, stock: 200 },
  ],
},

{
  id: 5,
  name: "Shreemaya Grocery Hub",
  category: "Retail",
  owner: "Anil Jain",
  location: "Gwalior, Madhya Pradesh",
  established: "2014",
  rating: 4.7,
  contact: "+91 9988771122",
  email: "groceryhub@shreemaya.com",
  image:
    "https://images.unsplash.com/photo-1543168256-418811576931",

  description:
    "Complete kirana destination with quality food grains and spices.",

  products: [
    { id: 15, name: "Basmati Rice", price: 120, stock: 100 },
    { id: 16, name: "Chana Dal", price: 90, stock: 70 },
    { id: 17, name: "Turmeric Powder", price: 60, stock: 90 },
    { id: 18, name: "Red Chilli Powder", price: 85, stock: 75 },
  ],
},

{
  id: 6,
  name: "Shreemaya Family Mart",
  category: "Retail + Wholesale",
  owner: "Rajesh Patel",
  location: "Sagar, Madhya Pradesh",
  established: "2019",
  rating: 4.8,
  contact: "+91 9090909090",
  email: "familymart@shreemaya.com",
  image:
    "https://images.unsplash.com/photo-1601598851547-4302969d0614",

  description:
    "Affordable kirana products for families and small businesses.",

  products: [
    { id: 19, name: "Moong Dal", price: 115, stock: 90 },
    { id: 20, name: "Refined Oil", price: 165, stock: 60 },
    { id: 21, name: "Besan", price: 80, stock: 100 },
    { id: 22, name: "Jaggery (Gud)", price: 55, stock: 120 },
  ],
},

{
  id: 7,
  name: "Shreemaya Wholesale Grocery",
  category: "Wholesale",
  owner: "Deepak Tiwari",
  location: "Rewa, Madhya Pradesh",
  established: "2013",
  rating: 4.9,
  contact: "+91 9777712345",
  email: "wholesalestore@shreemaya.com",
  image:
    "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8",

  description:
    "Bulk grocery supplies for retailers, restaurants and institutions.",

  products: [
    { id: 23, name: "Atta Bag (25kg)", price: 850, stock: 40 },
    { id: 24, name: "Rice Bag (25kg)", price: 2100, stock: 35 },
    { id: 25, name: "Sugar Bag (50kg)", price: 2400, stock: 30 },
    { id: 26, name: "Cooking Oil Can (15L)", price: 1850, stock: 25 },
  ],
},

{
  id: 8,
  name: "Shreemaya Smart Kirana",
  category: "Retail",
  owner: "Manoj Singh",
  location: "Satna, Madhya Pradesh",
  established: "2020",
  rating: 4.8,
  contact: "+91 9876501234",
  email: "smartkirana@shreemaya.com",
  image:
    "https://images.unsplash.com/photo-1516594798947-e65505dbb29d",

  description:
    "Modern kirana store with quality groceries and daily essentials.",

  products: [
    { id: 27, name: "Poha", price: 45, stock: 150 },
    { id: 28, name: "Suji (Semolina)", price: 50, stock: 120 },
    { id: 29, name: "Black Gram (Urad Dal)", price: 130, stock: 70 },
    { id: 30, name: "Coriander Powder", price: 65, stock: 85 },
  ],
},
];

// ===============================
// NAVBAR
// ===============================

function RetailNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-lg">

      <div className="max-w-7xl mx-auto px-5 py-4">

        <div className="flex justify-between items-center">

          <Link
            to="/"
            className="text-2xl font-bold text-orange-500"
          >
            SHREEMAYA RETAIL
          </Link>

          <div className="hidden md:flex gap-6 items-center">

            <Link
              to="/"
              className="hover:text-orange-500"
            >
              Home
            </Link>

            <Link
              to="/business"
              className="hover:text-orange-500"
            >
              Businesses
            </Link>

            <Link
              to="/contact"
              className="hover:text-orange-500"
            >
              Contact
            </Link>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-orange-500 text-white px-4 py-2 rounded"
            >
              {darkMode ? "☀" : "🌙"}
            </button>

          </div>

          <button
            className="md:hidden text-3xl"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            ☰
          </button>

        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4">

            <Link to="/">Home</Link>

            <Link to="/business">
              Businesses
            </Link>

            <Link to="/contact">
              Contact
            </Link>

            <button
              onClick={() =>
                setDarkMode(!darkMode)
              }
              className="bg-orange-500 text-white px-4 py-2 rounded"
            >
              Toggle Theme
            </button>

          </div>
        )}
      </div>
    </nav>
  );
}

// ===============================
// HERO
// ===============================

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">

      <div className="max-w-7xl mx-auto px-5">

        <h1 className="text-5xl font-bold mb-5">
          Welcome To Shreemaya Retail
        </h1>

        <p className="text-xl max-w-3xl">
          Explore our premium retail,
          wholesale and grocery stores.
          Shop products, discover offers,
          and experience quality service.
        </p>

      </div>
    </section>
  );
}

// ===============================
// SHOP LIST
// ===============================

function Shops() {
  const navigate = useNavigate();

  const [search, setSearch] =
    useState("");

  const [filter, setFilter] =
    useState("All");

  const [sort, setSort] =
    useState("");

  let filtered = shops.filter(
    (shop) =>
      shop.name
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (filter === "All" ||
        shop.category.includes(filter))
  );

  if (sort === "rating") {
    filtered.sort(
      (a, b) => b.rating - a.rating
    );
  }

  if (sort === "name") {
    filtered.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  return (
    <>
      <HeroSection />

      <div className="max-w-7xl mx-auto px-5 py-10">

        <div className="grid md:grid-cols-3 gap-4 mb-8">

          <input
            type="text"
            placeholder="Search Shop..."
            className="border p-3 rounded"
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <select
            className="border p-3 rounded"
            onChange={(e) =>
              setFilter(e.target.value)
            }
          >
            <option>All</option>
            <option>Retail</option>
            <option>Wholesale</option>
          </select>

          <select
            className="border p-3 rounded"
            onChange={(e) =>
              setSort(e.target.value)
            }
          >
            <option value="">
              Sort By
            </option>

            <option value="rating">
              Rating
            </option>

            <option value="name">
              Name
            </option>
          </select>

        </div>

        <div className="grid md:grid-cols-3 gap-8">
  {filtered.map((shop) => (
    <div
      key={shop.id}
      onClick={() =>
        navigate(`/business/retail/${shop.id}`)
      }
      className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
    >
      <img
        src={shop.image}
        alt={shop.name}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold mb-2">
          {shop.name}
        </h2>

        <p className="text-gray-600 dark:text-gray-300">
          📍 {shop.location}
        </p>

        <p className="text-gray-600 dark:text-gray-300">
          👤 {shop.owner}
        </p>

        <p className="text-gray-600 dark:text-gray-300">
          ⭐ {shop.rating}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            {shop.category}
          </span>

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            Since {shop.established}
          </span>
        </div>

        <p className="mt-4 text-sm text-gray-500 line-clamp-3">
          {shop.description}
        </p>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-orange-500 font-semibold">
            View Shop →
          </span>

          <span className="text-xs text-gray-400">
            {shop.products.length} Products
          </span>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </>
  );
}
// ===============================
// CART DRAWER
// ===============================

function CartDrawer({
  cart,
  setCart,
  showCart,
  setShowCart,
}) {
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: item.qty + 1,
            }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                qty:
                  item.qty > 1
                    ? item.qty - 1
                    : 1,
              }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.qty,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 bg-white dark:bg-gray-900 shadow-2xl z-50 transition-all duration-300 ${
        showCart
          ? "translate-x-0"
          : "translate-x-full"
      }`}
    >
      <div className="p-5">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Shopping Cart
          </h2>

          <button
            onClick={() =>
              setShowCart(false)
            }
            className="text-2xl"
          >
            ✕
          </button>

        </div>

        {cart.length === 0 ? (
          <p>
            No products added yet.
          </p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="border-b py-4"
              >
                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <p>
                  ₹ {item.price}
                </p>

                <div className="flex gap-3 items-center mt-2">

                  <button
                    onClick={() =>
                      decreaseQty(
                        item.id
                      )
                    }
                    className="bg-red-500 text-white px-3 rounded"
                  >
                    -
                  </button>

                  <span>
                    {item.qty}
                  </span>

                  <button
                    onClick={() =>
                      increaseQty(
                        item.id
                      )
                    }
                    className="bg-green-500 text-white px-3 rounded"
                  >
                    +
                  </button>

                  <button
                    onClick={() =>
                      removeItem(
                        item.id
                      )
                    }
                    className="bg-gray-700 text-white px-3 py-1 rounded ml-auto"
                  >
                    Remove
                  </button>

                </div>
              </div>
            ))}

            <div className="mt-6">

              <h3 className="text-xl font-bold">
                Total: ₹ {total}
              </h3>

              <button className="w-full mt-4 bg-orange-500 text-white py-3 rounded-lg font-semibold">
                Proceed To Checkout
              </button>

            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ===============================
// SHOP DETAILS PAGE
// ===============================

function ShopDetails() {

  const { id } = useParams();

  const shop = shops.find(
    (item) =>
      item.id === Number(id)
  );

  const [sort, setSort] =
    useState("");

  const [cart, setCart] =
    useState([]);

  const [showCart, setShowCart] =
    useState(false);

  if (!shop) {
    return (
      <div className="p-10 text-center text-3xl">
        Shop Not Found
      </div>
    );
  }

  let products = [
    ...shop.products,
  ];

  if (sort === "low") {
    products.sort(
      (a, b) =>
        a.price - b.price
    );
  }

  if (sort === "high") {
    products.sort(
      (a, b) =>
        b.price - a.price
    );
  }

  const addToCart = (
    product
  ) => {

    const existing =
      cart.find(
        (item) =>
          item.id ===
          product.id
      );

    if (existing) {

      setCart(
        cart.map((item) =>
          item.id ===
          product.id
            ? {
                ...item,
                qty:
                  item.qty +
                  1,
              }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...product,
          qty: 1,
        },
      ]);

    }

    setShowCart(true);
  };

  return (
    <>
      <CartDrawer
        cart={cart}
        setCart={setCart}
        showCart={showCart}
        setShowCart={
          setShowCart
        }
      />

      <div className="max-w-7xl mx-auto px-5 py-10">

        {/* Banner */}

        <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">

          <img
            src={shop.image}
            alt={shop.name}
            className="w-full h-96 object-cover"
          />

          <div className="p-8">

            <h1 className="text-5xl font-bold">
              {shop.name}
            </h1>

            <p className="mt-4 text-lg">
              {shop.description}
            </p>

            <div className="grid md:grid-cols-4 gap-4 mt-8">

              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">
                <h3 className="font-bold">
                  Owner
                </h3>

                <p>
                  {
                    shop.owner
                  }
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">
                <h3 className="font-bold">
                  Location
                </h3>

                <p>
                  {
                    shop.location
                  }
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">
                <h3 className="font-bold">
                  Contact
                </h3>

                <p>
                  {
                    shop.contact
                  }
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">
                <h3 className="font-bold">
                  Rating
                </h3>

                <p>
                  ⭐{" "}
                  {
                    shop.rating
                  }
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Products */}

        <div className="mt-12">

          <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">

            <h2 className="text-4xl font-bold">
              Products
            </h2>

            <select
              className="border p-3 rounded-lg"
              onChange={(e) =>
                setSort(
                  e.target.value
                )
              }
            >
              <option value="">
                Sort Products
              </option>

              <option value="low">
                Price Low To High
              </option>

              <option value="high">
                Price High To Low
              </option>

            </select>

          </div>

          <div className="grid md:grid-cols-4 gap-6">

            {products.map(
              (
                product
              ) => (
                <div
                  key={
                    product.id
                  }
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5"
                >

                  <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>

                  <h3 className="font-bold text-xl">
                    {
                      product.name
                    }
                  </h3>

                  <p className="text-orange-500 font-bold mt-2">
                    ₹
                    {
                      product.price
                    }
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    Stock:
                    {
                      product.stock
                    }
                  </p>

                  <button
                    onClick={() =>
                      addToCart(
                        product
                      )
                    }
                    className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg"
                  >
                    Add To Cart
                  </button>

                </div>
              )
            )}

          </div>

        </div>

      </div>
    </>
  );
}

// ===============================
// MAIN RETAIL COMPONENT
// ===============================

export default function Retail() {
  return (
    <>
      <RetailNavbar />

      <Routes>

        <Route
          path="/"
          element={<Shops />}
        />

        <Route
          path=":id"
          element={
            <ShopDetails />
          }
        />

      </Routes>
    </>
  );
}