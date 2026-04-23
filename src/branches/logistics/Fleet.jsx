import React, { useState } from "react";
import { motion } from "framer-motion";

const Fleet = () => {
  const [filter, setFilter] = useState("All");
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const vehicles = [
  {
    id: "BUS101",
    number: "BR-01-AB-1234",
    type: "Bus",
    name: "Luxury AC Sleeper",
    driver: "Ramesh Kumar",
    status: "Running",
    fuel: "70%",
    lastService: "10 days ago",
    route: "Patna → Delhi",
  },
  {
    id: "BUS102",
    number: "BR-01-AB-5678",
    type: "Bus",
    name: "Volvo Multi-Axle",
    driver: "Ajay Singh",
    status: "Available",
    fuel: "85%",
    lastService: "3 days ago",
    route: "Patna → Ranchi",
  },
  {
    id: "BUS103",
    number: "BR-01-XY-9988",
    type: "Bus",
    name: "Semi Sleeper AC",
    driver: "Mukesh Yadav",
    status: "Running",
    fuel: "60%",
    lastService: "7 days ago",
    route: "Patna → Varanasi",
  },
  {
    id: "BUS104",
    number: "BR-01-ZZ-1111",
    type: "Bus",
    name: "Express Coach",
    driver: "Sunil Verma",
    status: "Maintenance",
    fuel: "40%",
    lastService: "Today",
    route: "Patna → Gaya",
  },

  {
    id: "TRK201",
    number: "BR-01-CD-5678",
    type: "Truck",
    name: "Heavy Cargo Truck",
    driver: "Suresh Yadav",
    status: "Available",
    fuel: "90%",
    lastService: "5 days ago",
    route: "Patna → Kolkata",
  },
  {
    id: "TRK202",
    number: "BR-01-CD-8899",
    type: "Truck",
    name: "Container Truck",
    driver: "Ravi Kumar",
    status: "Running",
    fuel: "75%",
    lastService: "8 days ago",
    route: "Patna → Mumbai",
  },
  {
    id: "TRK203",
    number: "BR-01-CD-4455",
    type: "Truck",
    name: "Refrigerated Truck",
    driver: "Deepak Singh",
    status: "Available",
    fuel: "65%",
    lastService: "6 days ago",
    route: "Patna → Lucknow",
  },
  {
    id: "TRK204",
    number: "BR-01-CD-7788",
    type: "Truck",
    name: "Open Body Truck",
    driver: "Anil Yadav",
    status: "Maintenance",
    fuel: "30%",
    lastService: "Today",
    route: "Patna → Dhanbad",
  },

  {
    id: "TMP301",
    number: "BR-01-EF-1111",
    type: "Tempo",
    name: "Mini Delivery Tempo",
    driver: "Amit Singh",
    status: "Maintenance",
    fuel: "40%",
    lastService: "Today",
    route: "Local Delivery",
  },
  {
    id: "TMP302",
    number: "BR-01-EF-2222",
    type: "Tempo",
    name: "Pickup Tempo",
    driver: "Rahul Kumar",
    status: "Running",
    fuel: "55%",
    lastService: "2 days ago",
    route: "Patna → Hajipur",
  },
  {
    id: "TMP303",
    number: "BR-01-EF-3333",
    type: "Tempo",
    name: "Goods Carrier Tempo",
    driver: "Vikash Yadav",
    status: "Available",
    fuel: "80%",
    lastService: "4 days ago",
    route: "Patna → Muzaffarpur",
  },
  {
    id: "TMP304",
    number: "BR-01-EF-4444",
    type: "Tempo",
    name: "Mini Cargo Van",
    driver: "Kunal Singh",
    status: "Running",
    fuel: "68%",
    lastService: "6 days ago",
    route: "Patna → Nalanda",
  },

  {
    id: "BUS105",
    number: "BR-01-GH-5555",
    type: "Bus",
    name: "Deluxe Non-AC",
    driver: "Manoj Kumar",
    status: "Available",
    fuel: "78%",
    lastService: "5 days ago",
    route: "Patna → Purnea",
  },
  {
    id: "BUS106",
    number: "BR-01-GH-6666",
    type: "Bus",
    name: "Luxury Volvo",
    driver: "Rohit Singh",
    status: "Running",
    fuel: "82%",
    lastService: "2 days ago",
    route: "Patna → Jaipur",
  },

  {
    id: "TRK205",
    number: "BR-01-IJ-7777",
    type: "Truck",
    name: "Oil Tanker",
    driver: "Sanjay Kumar",
    status: "Running",
    fuel: "88%",
    lastService: "1 day ago",
    route: "Patna → Barauni",
  },
  {
    id: "TRK206",
    number: "BR-01-IJ-8888",
    type: "Truck",
    name: "Flatbed Truck",
    driver: "Arun Yadav",
    status: "Available",
    fuel: "72%",
    lastService: "9 days ago",
    route: "Patna → Bokaro",
  },

  {
    id: "TMP305",
    number: "BR-01-KL-9999",
    type: "Tempo",
    name: "Small Cargo Tempo",
    driver: "Pankaj Singh",
    status: "Available",
    fuel: "67%",
    lastService: "3 days ago",
    route: "Local Delivery",
  },
  {
    id: "TMP306",
    number: "BR-01-KL-1212",
    type: "Tempo",
    name: "Fast Delivery Tempo",
    driver: "Gaurav Kumar",
    status: "Running",
    fuel: "74%",
    lastService: "4 days ago",
    route: "Patna → Siwan",
  },

  {
    id: "BUS107",
    number: "BR-01-MN-3434",
    type: "Bus",
    name: "Night Sleeper",
    driver: "Ashok Kumar",
    status: "Running",
    fuel: "69%",
    lastService: "6 days ago",
    route: "Patna → Kolkata",
  },
  {
    id: "BUS108",
    number: "BR-01-MN-5656",
    type: "Bus",
    name: "Superfast AC",
    driver: "Vinod Yadav",
    status: "Available",
    fuel: "91%",
    lastService: "2 days ago",
    route: "Patna → Delhi",
  },
];
  const filteredVehicles =
    filter === "All"
      ? vehicles
      : vehicles.filter((v) => v.status === filter);

  const getStatusColor = (status) => {
    if (status === "Running") return "bg-blue-500";
    if (status === "Available") return "bg-green-500";
    if (status === "Maintenance") return "bg-red-500";
  };

  return (
    <div className="pt-28 px-6 min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white">

      {/* ================= TITLE ================= */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        🚚 Fleet Management System
      </h1>

      {/* ================= DETAIL PAGE ================= */}
      {selectedVehicle ? (
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl">

          <button
            onClick={() => setSelectedVehicle(null)}
            className="mb-4 text-blue-500"
          >
            ← Back
          </button>

          <h2 className="text-2xl font-bold mb-2">
            {selectedVehicle.name}
          </h2>

          <p className="text-gray-500 dark:text-gray-300">
            🚗 Vehicle No: {selectedVehicle.number}
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-4">

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl">
              <p>🆔 ID: {selectedVehicle.id}</p>
              <p>🚘 Type: {selectedVehicle.type}</p>
              <p>👨 Driver: {selectedVehicle.driver}</p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl">
              <p>⛽ Fuel: {selectedVehicle.fuel}</p>
              <p>🛠 Last Service: {selectedVehicle.lastService}</p>
              <p>📍 Route: {selectedVehicle.route}</p>
            </div>

          </div>

          {/* STATUS */}
          <div className="mt-6">
            <span
              className={`px-4 py-2 rounded-full text-white ${getStatusColor(
                selectedVehicle.status
              )}`}
            >
              {selectedVehicle.status}
            </span>
          </div>

          {/* ACTIONS */}
          <div className="mt-6 flex gap-3">

            <button className="flex-1 bg-blue-500 text-white py-3 rounded-xl">
              Assign Driver
            </button>

            <button className="flex-1 bg-green-500 text-white py-3 rounded-xl">
              Update Status
            </button>

          </div>

        </div>
      ) : (
        <>
          {/* ================= FILTER ================= */}
          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            {["All", "Available", "Running", "Maintenance"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-4 py-2 rounded-xl ${
                  filter === item
                    ? "bg-blue-500 text-white"
                    : "bg-white dark:bg-gray-800"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* ================= GRID ================= */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

            {filteredVehicles.map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl cursor-pointer"
              >

                {/* HEADER */}
                <div className="flex justify-between">
                  <h2 className="font-bold">{v.name}</h2>

                  <span
                    className={`text-xs px-3 py-1 rounded-full text-white ${getStatusColor(
                      v.status
                    )}`}
                  >
                    {v.status}
                  </span>
                </div>

                {/* INFO */}
                <div className="mt-3 text-sm">
                  <p>🚗 {v.number}</p>
                  <p>👨 {v.driver}</p>
                </div>

                {/* BUTTONS */}
                <div className="mt-5 flex gap-2">

                  <button
                    onClick={() => setSelectedVehicle(v)}
                    className="flex-1 bg-blue-500 text-white py-2 rounded-xl"
                  >
                    Assign
                  </button>

                  <button
                    onClick={() => setSelectedVehicle(v)}
                    className="flex-1 bg-gray-500 text-white py-2 rounded-xl"
                  >
                    Details
                  </button>

                </div>

              </motion.div>
            ))}

          </div>
        </>
      )}
    </div>
  );
};

export default Fleet;