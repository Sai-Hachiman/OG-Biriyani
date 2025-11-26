import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ProductCard({ item, onClick }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="cursor-pointer bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-800"
      onClick={onClick}
    >
      {/* Image container */}
      <div className="relative w-full h-44 overflow-hidden bg-gray-200 dark:bg-gray-800">

        {/* Shimmer placeholder */}
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700" />
        )}

        {/* Image */}
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Badge */}
        {item.badge && (
          <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white rounded-md
            ${item.badge === "New" && "bg-green-600"}
            ${item.badge === "Hot" && "bg-red-600"}
            ${item.badge === "Top Seller" && "bg-yellow-600"}
          `}>
            {item.badge}
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="p-3">
        <h3 className="font-bold text-gray-800 dark:text-white text-lg mb-1">
          {item.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm mb-1">
          {"★".repeat(Math.round(item.rating))}
          {"☆".repeat(5 - Math.round(item.rating))}
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">
          {item.description || "Finest preparation with authentic spices."}
        </p>

        {/* Price */}
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-red-600 dark:text-red-400">
            ₹{item.price}
          </p>

          <button
            className="text-sm border border-red-500 text-red-600 dark:text-red-400 dark:border-red-400 
                       px-3 py-1 rounded-lg hover:bg-red-500 hover:text-white dark:hover:bg-red-500 transition"
          >
            View
          </button>
        </div>
      </div>
    </motion.div>
  );
}
