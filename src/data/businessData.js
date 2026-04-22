import dairyImg from "../assets/5.jpeg";
import icecreamImg from "../assets/ice.jpeg";
import restaurantImg from "../assets/restu.jpeg";
import packagedImg from "../assets/food.jpeg";
import retailImg from "../assets/net.jpeg";
import logisticsImg from "../assets/logis.jpeg";
export const branches = [
  {
    id: "dairy",
    title: "🥛 Shreemaya Dairy Product",
    desc: "Our Dairy Division delivers fresh, hygienic, and high-quality dairy products, ensuring purity and nutrition in every product we offer.",

    image:dairyImg,

    details: [
      "100% Fresh and Organic Milk Collection",
      "Advanced Processing and Packaging System",
      "Daily Supply Chain Across Multiple Locations",
      "Strict Quality and Hygiene Standards",
    ],

    products: [
      { name: "Fresh Milk", price: 50 },
      { name: "Paneer", price: 320 },
      { name: "Desi Ghee", price: 650 },
      { name: "Curd (Dahi)", price: 80 },
      { name: "Butter", price: 120 },
    ],
  },

  {
    id: "icecream",
    title: "🍨 Premium Ice Cream",
    desc: "We offer premium ice creams made with rich ingredients and delightful flavors, crafted to provide a refreshing experience for all age groups.",

    image: icecreamImg,

    details: [
      "Rich and Creamy Texture with Natural Ingredients",
      "Wide Variety of Flavors",
      "Available in Family Packs and Single Servings",
      "Seasonal and Special Edition Flavors",
    ],

    products: [
      { name: "Vanilla Ice Cream", price: 100 },
      { name: "Chocolate Ice Cream", price: 120 },
      { name: "Strawberry Ice Cream", price: 110 },
      { name: "Mango Ice Cream", price: 130 },
      { name: "Butterscotch Ice Cream", price: 140 },
    ],
  },

  {
    id: "restaurant",
    title: "🍽️ Dining Experience",
    desc: "Our restaurant provides a premium dining experience with a perfect blend of taste, hygiene, and excellent customer service.",

    image: restaurantImg,

    details: [
      "Fine Dining and Fast Food Options",
      "Clean and Hygienic Kitchen Environment",
      "Wide Range of Veg and Non-Veg Dishes",
      "Online Ordering and Takeaway Available",
    ],

    products: [
      { name: "Pizza", price: 250 },
      { name: "Burger", price: 150 },
      { name: "Paneer Butter Masala", price: 280 },
      { name: "Biryani", price: 200 },
      { name: "Cold Drinks", price: 50 },
    ],
  },

  {
    id: "packaged",
    title: "🍱 Packaged Foods",
    desc: "We provide ready-to-eat packaged food products that combine convenience, taste, and long shelf life.",

    image: packagedImg,

    details: [
      "Safe and Hygienic Packaging",
      "Long Shelf Life Products",
      "Affordable and High Quality",
      "Wide Distribution Network",
    ],

    products: [
      { name: "Kurkure", price: 20 },
      { name: "Pasta", price: 60 },
      { name: "Chips", price: 30 },
      { name: "Namkeen", price: 50 },
      { name: "Biscuits", price: 40 },
    ],
  },

  {
    id: "retail",
    title: "🛒 Retail Network",
    desc: "Our retail stores are located across multiple areas, providing daily essentials and grocery products with convenience and reliability.",

    image: retailImg,

    details: [
      "Multiple Store Locations",
      "All Daily Grocery and Essentials Available",
      "Customer-Friendly Service",
      "Affordable Pricing for Every Household",
    ],

    products: [
      { name: "Rice", price: 60 },
      { name: "Wheat Flour", price: 50 },
      { name: "Cooking Oil", price: 150 },
      { name: "Sugar", price: 45 },
      { name: "Spices", price: 80 },
    ],
  },

  {
    id: "logistics",
    title: "🚚 Shreemaya Express",
    desc: "Our logistics division ensures efficient product delivery along with transport services including trucks, trailers, and tour buses.",

    image: logisticsImg,

    details: [
      "Bulk Goods Transportation",
      "Truck and Trailer Services",
      "Tour and Travel Bus Facility",
      "Fast, Safe, and Reliable Delivery System",
    ],

    products: [
      { name: "Truck Transport Service", price: 5000 },
      { name: "Trailer Transport", price: 8000 },
      { name: "Tour Bus Booking", price: 10000 },
      { name: "Supply Chain Logistics", price: 15000 },
    ],
  },
];