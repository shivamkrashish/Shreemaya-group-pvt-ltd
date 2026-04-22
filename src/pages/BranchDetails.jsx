import { useParams } from "react-router-dom";
import { branches } from "../data/businessData";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const BranchDetails = () => {
  const { id } = useParams();

  const branch = branches.find((b) => b.id === id);

  if (!branch) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Branch Not Found ❌</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white flex flex-col min-h-screen">

      {/* MAIN CONTENT */}
      <motion.div
        key={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-1 pt-24 px-4 md:px-10 py-10"
      >
        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          {branch.title}
        </h1>

        {/* IMAGE */}
        <img
          src={branch.image}
          alt={branch.title}
          className="w-full h-64 object-cover rounded-xl mt-6"
        />

        {/* DESC */}
        <p className="mt-6 text-center text-gray-600 dark:text-gray-300">
          {branch.desc}
        </p>

        {/* PRODUCTS */}
        {branch.products?.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mt-10 text-center">
              Our Products
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              {branch.products.map((p, i) => (
                <div
                  key={i}
                  className="p-5 bg-white dark:bg-gray-900 rounded-xl shadow"
                >
                  <h3 className="font-bold">{p.name}</h3>
                  <p className="text-green-600">₹{p.price}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </motion.div>

      {/* 🔥 FOOTER FIXED */}
      <Footer />

    </div>
  );
};

export default BranchDetails;