import React from "react";
import { motion } from "framer-motion";

const steps = [
  { label: "Order Placed", icon: "📝" },
  { label: "Preparing", icon: "👨‍🍳" },
  { label: "On the Way", icon: "🚚" },
  { label: "Delivered", icon: "✅" }
];

const Tracking = ({ order, onClose }) => {
  if (!order) return null;

  const currentStepIndex = steps.findIndex(
    (s) => s.label === order.status
  );

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      {/* BACKDROP CLICK CLOSE */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      ></div>

      {/* TRACKING CARD */}
      <div className="relative bg-gradient-to-br from-orange-500 to-red-500 text-white p-6 rounded-2xl w-[90%] max-w-md shadow-2xl">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">📍 Live Tracking</h2>

          <button
            onClick={onClose}
            className="bg-white/20 px-2 py-1 rounded hover:bg-white/30"
          >
            ✖
          </button>
        </div>

        {/* ORDER INFO */}
        <div className="bg-white/10 p-3 rounded mb-4 text-sm">
          <p><b>Order ID:</b> {order.id}</p>
          <p><b>Total:</b> ₹{order.total}</p>
          <p><b>Status:</b> {order.status}</p>
        </div>

        {/* TRACKING STEPS */}
        <div className="space-y-4">

          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-3">

              {/* ICON */}
              <motion.div
                animate={{
                  scale: index === currentStepIndex ? [1, 1.3, 1] : 1
                }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className={`w-10 h-10 flex items-center justify-center rounded-full 
                ${
                  index <= currentStepIndex
                    ? "bg-green-400 text-black"
                    : "bg-white/20"
                }`}
              >
                {step.icon}
              </motion.div>

              {/* TEXT */}
              <div className="flex-1">
                <p
                  className={`font-semibold ${
                    index <= currentStepIndex
                      ? "text-white"
                      : "text-white/50"
                  }`}
                >
                  {step.label}
                </p>

                {/* PROGRESS LINE */}
                {index < steps.length - 1 && (
                  <div className="h-1 w-full bg-white/20 mt-1 relative overflow-hidden rounded">
                    {index < currentStepIndex && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8 }}
                        className="h-full bg-green-400"
                      />
                    )}
                  </div>
                )}
              </div>

            </div>
          ))}

        </div>

        {/* DELIVERY MESSAGE */}
        {order.status === "Delivered" && (
          <div className="mt-5 text-center bg-green-400 text-black p-3 rounded font-semibold">
            🎉 Your Order has been Delivered!
          </div>
        )}

      </div>
    </div>
  );
};

export default Tracking;