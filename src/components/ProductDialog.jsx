import React from "react";
import { motion } from "framer-motion";

export default function ProductDialog({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-md w-full overflow-hidden"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-56 object-cover"
        />

        <div className="p-5">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {item.name}
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2 text-yellow-500">
            {"★".repeat(Math.round(item.rating))}
            {"☆".repeat(5 - Math.round(item.rating))}
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
            {item.description || "Delicious authentic preparation."}
          </p>

          <p className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">
            ₹{item.price}
          </p>

          <button
            onClick={onClose}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
