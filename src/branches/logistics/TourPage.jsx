import React, { useState } from "react";

const Tours = () => {
  const [selectedBus, setSelectedBus] = useState(null);

  const buses = [
  {
    name: "Shreemaya Luxury Bus",
    route: "Delhi → Bhopal",
    price: "₹999",
    time: "10:00 AM",
    rating: 4.8,
    reviews: 2100,
    users: "Raj, Amit, Priya, Mohan",
    desc: "Ultra luxury AC sleeper bus with WiFi, charging ports and smooth ride.",
    img: "https://i.pinimg.com/736x/0f/be/0f/0fbe0fc4b0b533d5548da7870d3643a8.jpg",
  },
  {
    name: "Express AC Bus",
    route: "Mumbai → Indore",
    price: "₹1299",
    time: "08:30 PM",
    rating: 4.6,
    reviews: 1500,
    users: "Neha, Rohit, Suresh",
    desc: "Fast express AC bus with premium seating and night comfort.",
    img: "https://s1.rdbuz.com/bo-images/IND/WM/21603/86/FR/DS/webp/UzWj2q.webp",
  },
  {
    name: "Sleeper Coach",
    route: "Kolkata → Patna",
    price: "₹899",
    time: "09:00 PM",
    rating: 4.4,
    reviews: 980,
    users: "Aman, Rahul, Sita",
    desc: "Comfort sleeper coach with privacy curtains.",
    img: "https://content.jdmagicbox.com/v2/comp/delhi/e2/011pxx11.xx11.210821212638.u2e2/catalogue/shivam-travels-bihar-bus-service-mori-gate-delhi-bus-services-for-bihar-835e5f96jo.jpg",
  },
  {
    name: "Volvo Multi Axle",
    route: "Patna → Delhi",
    price: "₹1499",
    time: "07:00 PM",
    rating: 4.9,
    reviews: 3200,
    users: "Vikas, Ankit, Pooja",
    desc: "Top class Volvo with luxury pushback seats and AC.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnpMHnRkAnYIs3em5arNE596tfoTjN0kZsdA&s",
  },
  {
    name: "Semi Sleeper AC",
    route: "Patna → Ranchi",
    price: "₹799",
    time: "06:30 AM",
    rating: 4.3,
    reviews: 600,
    users: "Ravi, Sonu",
    desc: "Affordable semi sleeper for short routes.",
    img: "https://s1.rdbuz.com/bo-images/IND/WM/19344/54/FR/ML/webp/hT6IzI.webp",
  },
  {
    name: "Night Sleeper Deluxe",
    route: "Delhi → Jaipur",
    price: "₹1099",
    time: "10:00 PM",
    rating: 4.7,
    reviews: 1400,
    users: "Karan, Meena",
    desc: "Night luxury sleeper with blankets and comfort beds.",
    img: "https://img.12go.asia/0/plain/s3://12go-web-static/static/images/operator/17726/class/1504-outside.jpeg",
  },
  {
    name: "Superfast AC Coach",
    route: "Patna → Kolkata",
    price: "₹1199",
    time: "05:00 PM",
    rating: 4.5,
    reviews: 1200,
    users: "Amit, Priya",
    desc: "High speed AC coach with smooth ride.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Vip3zz_qy8YF_6GPnHbsotFs7l8q3nYYWA&s",
  },
  {
    name: "Economy Bus",
    route: "Patna → Gaya",
    price: "₹399",
    time: "09:00 AM",
    rating: 4.0,
    reviews: 300,
    users: "Local users",
    desc: "Budget friendly bus for daily travel.",
    img: "https://patnapress.com/wp-content/uploads/2025/04/When-Will-Patnas-Women-Only-Buses-Start-Running%E2%80%94and-What-Can-Commuters-Expect_.jpg",
  },
  {
    name: "Tourist Luxury Coach",
    route: "Bhopal → Goa",
    price: "₹2499",
    time: "04:00 PM",
    rating: 4.9,
    reviews: 4100,
    users: "Tour group",
    desc: "Premium long tour bus with full luxury experience.",
    img: "https://5.imimg.com/data5/SELLER/Default/2025/10/553670287/SN/JD/MS/22159619/49-seater-ac-bus-service-250x250.jpg",
  },
  {
    name: "Mini Travel Bus",
    route: "Patna → Nalanda",
    price: "₹299",
    time: "11:00 AM",
    rating: 4.1,
    reviews: 200,
    users: "Local",
    desc: "Mini bus for short distance travel.",
    img: "https://content.jdmagicbox.com/v2/comp/thane/m9/022pxx22.xx22.241129130224.y4m9/catalogue/indian-travels-nitin-company-chowk-thane-west-thane-tempo-travellers-on-rent-jhgesfo25o-250.jpg",
  },
  {
    name: "AC Deluxe Bus",
    route: "Delhi → Lucknow",
    price: "₹999",
    time: "06:00 PM",
    rating: 4.6,
    reviews: 1700,
    users: "Rohit, Anjali",
    desc: "Comfortable AC bus with spacious seating.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM34yAgtf9luW1MTXWhqORMHenyY3caNp82A&s",
  },
  {
    name: "Volvo Sleeper",
    route: "Mumbai → Pune",
    price: "₹799",
    time: "08:00 PM",
    rating: 4.8,
    reviews: 2200,
    users: "IT crowd",
    desc: "Luxury Volvo sleeper for night travel.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl0NSy9AvgO2p6mzPFBl88LwgtEzxrSY5OXQ&s",
  },
  {
    name: "Express Non-AC",
    route: "Patna → Muzaffarpur",
    price: "₹199",
    time: "07:30 AM",
    rating: 3.9,
    reviews: 150,
    users: "Daily commuters",
    desc: "Affordable non-AC bus.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYtdCn4tyRzZY4At7xaKtzOrtuJ5usIow8Xg&s",
  },
  {
    name: "Premium Sleeper",
    route: "Delhi → Chandigarh",
    price: "₹899",
    time: "09:30 PM",
    rating: 4.7,
    reviews: 1300,
    users: "Students",
    desc: "Premium sleeper with privacy.",
    img: "https://s1.rdbuz.com/bo-images/IND/WM/25291/4/FR/DS/webp/PTY9G7.webp",
  },
  {
    name: "Holiday Special Bus",
    route: "Patna → Darjeeling",
    price: "₹1599",
    time: "03:00 PM",
    rating: 4.8,
    reviews: 1800,
    users: "Tourists",
    desc: "Special bus for hill station trips.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    name: "City Shuttle",
    route: "Patna → Hajipur",
    price: "₹99",
    time: "Every 30 mins",
    rating: 4.2,
    reviews: 500,
    users: "Daily users",
    desc: "Fast shuttle service for city commute.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxYeoxCgZ6xeahzhTppBAyxZ6sgnQ72FJZrA&s",
  },
  {
    name: "Ultra Luxury Coach",
    route: "Delhi → Manali",
    price: "₹1999",
    time: "07:00 PM",
    rating: 4.9,
    reviews: 5000,
    users: "Travelers",
    desc: "Top luxury coach for hill journeys.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTDcqAWWMgEnxJzqGTeOYSDJNVElMpP8l8mw&s",
  },
  {
    name: "AC Seater Bus",
    route: "Patna → Bhagalpur",
    price: "₹499",
    time: "01:00 PM",
    rating: 4.3,
    reviews: 700,
    users: "Office commuters",
    desc: "Comfortable AC seating bus.",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  },
  {
    name: "Weekend Special",
    route: "Patna → Varanasi",
    price: "₹699",
    time: "05:30 AM",
    rating: 4.5,
    reviews: 900,
    users: "Pilgrims",
    desc: "Special bus for weekend travel.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tqogdFV4faDRVlQRecy6cVKDz3oCEvCumg&s",
  },
];

  const handleWhatsApp = (bus) => {
    const msg = `Hi, I want to book ${bus.name} (${bus.route}) at ${bus.price}`;
    window.open(`https://wa.me/917654267227?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div className="pt-28 px-6 min-h-screen bg-gray-100 dark:bg-gray-950 transition-all duration-300">

      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        🚌 Tour Booking
      </h1>

      {/* LIST */}
      {!selectedBus && (
        <div className="grid md:grid-cols-3 gap-6">
          {buses.map((bus, i) => (
            <div
              key={i}
              onClick={() => setSelectedBus(bus)}
              className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <img src={bus.img} className="w-full h-44 object-cover" />

              <div className="p-4">
                <h2 className="text-lg font-bold">{bus.name}</h2>

                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {bus.route}
                </p>

                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-green-500 font-semibold">
                    {bus.price}
                  </span>
                  <span className="text-blue-400">{bus.time}</span>
                </div>

                <div className="mt-2 text-yellow-500 text-sm">
                  ⭐ {bus.rating} ({bus.reviews})
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* DETAIL */}
      {selectedBus && (
        <div className="flex justify-center">
          <div className="w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">

            <img src={selectedBus.img} className="w-full h-80 object-cover" />

            <div className="p-6 text-gray-900 dark:text-white">

              <h1 className="text-2xl font-bold">{selectedBus.name}</h1>

              <p className="text-gray-500 dark:text-gray-300 mt-1">
                {selectedBus.route}
              </p>

              <p className="mt-4 text-gray-700 dark:text-gray-300">
                {selectedBus.desc}
              </p>

              <div className="flex justify-between mt-5">
                <span className="text-green-500 font-bold text-lg">
                  {selectedBus.price}
                </span>
                <span className="text-blue-400">{selectedBus.time}</span>
              </div>

              <div className="mt-4">
                <p className="text-yellow-500 text-lg">
                  ⭐ {selectedBus.rating}
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {selectedBus.reviews}+ reviews
                </p>

                <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                  👥 Users: {selectedBus.users}
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setSelectedBus(null)}
                  className="flex-1 bg-gray-500 text-white py-3 rounded-xl"
                >
                  ← Back
                </button>

                <button
                  onClick={() => handleWhatsApp(selectedBus)}
                  className="flex-1 bg-green-500 text-white py-3 rounded-xl"
                >
                  💬 Book on WhatsApp
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Tours;