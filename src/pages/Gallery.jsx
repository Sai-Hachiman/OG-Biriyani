// Updated Gallery.jsx with Follow popup dialog + fun animation + mobile responsive sidebar

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StoriesBar from "../components/StoriesBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const galleryImages = [
  "/images/chicken-biryani.jpg",
  "/images/hyderabadi-biryani.jpg",
  "/images/mutton-biryani.jpg",
  "/images/prawn-biryani.jpg",
  "/images/fish-biryani.jpg",
  "/images/chicken-65.jpg",
  "/images/grilled-chicken.jpg",
  "/images/dum-biryani.jpg",
  "/images/falooda.jpg",
  "/images/icecream.jpg",
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [showFollowPopup, setShowFollowPopup] = useState(false);

  return (
    <div>
      <div className="bg-white dark:bg-neutral-900 text-black dark:text-white min-h-screen flex justify-center pt-5 pb-20">
        <div className="w-full max-w-6xl flex flex-col gap-6 px-6">

          {/* Stories Bar */}
          <StoriesBar />

          {/* Top Section */}
          <div className="flex justify-between items-center border-b border-gray-200 pb-3">
            <h2 className="text-2xl font-bold tracking-tight">Gallery</h2>
            <Link to="/reels" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-80 transition">Watch Reels</Link>
          </div>

          {/* Main Layout */}
          <div className="flex flex-col md:flex-row gap-10">

            {/* LEFT PROFILE SIDEBAR (mobile responsive) */}
            <div className="w-full md:w-1/4 flex flex-col gap-6 order-1 md:order-none">
              <div className="flex items-center gap-4">
                <img src="/images/Logo.png" className="w-16 h-16 rounded-full object-cover border" />
                <div>
                  <h2 className="text-xl font-bold">OG Biryani</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">@ogbiryani</p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p>🔥 Bangalore’s favorite biriyani</p>
                <p>🍽 Fresh • Authentic • Spicy</p>
                <p>📍 R T Nagar</p>
                <p>⏰ 12 PM – 11 PM</p>
              </div>

              {/* Follow Button triggers popup */}
              <button
                onClick={() => setShowFollowPopup(true)}
                className="bg-red-500 hover:bg-red-600 text-white rounded-lg py-2 font-semibold w-full md:w-auto"
              >
                Follow
              </button>
            </div>

            {/* IMAGE GRID */}
            <div className="flex-1 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 order-3 md:order-none">
              {galleryImages.map((src, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.02 }} onClick={() => setSelected(src)} className="cursor-pointer rounded-xl overflow-hidden relative group">
                  <img src={src} alt={`gallery-${idx}`} className="w-full h-60 object-cover transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <p className="text-white font-semibold text-lg">Tap to View</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="hidden lg:flex w-1/4 flex-col gap-4 order-2 md:order-none">
              <h3 className="text-lg font-semibold">Recommended</h3>

              <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-lg">
                <h4 className="font-bold mb-2">🔥 Today’s Special</h4>
                <img src="/images/hyderabadi-biryani.jpg" className="rounded-lg h-28 w-full object-cover" />
                <p className="text-sm mt-2">Hyderabadi Dum Biryani</p>
              </div>

              <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-lg">
                <h4 className="font-bold mb-2">⭐ Top Rated</h4>
                <img src="/images/chicken-biryani.jpg" className="rounded-lg h-28 w-full object-cover" />
                <p className="text-sm mt-2">Chicken Biryani</p>
              </div>

              <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-lg">
                <h4 className="font-bold mb-2">🔥 Bestseller</h4>
                <img src="/images/grilled-chicken.jpg" className="rounded-lg h-28 w-full object-cover" />
                <p className="text-sm mt-2">Grilled Chicken</p>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE LIGHTBOX */}
        <AnimatePresence>
          {selected && (
            <motion.div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
              <motion.img src={selected} className="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.7 }} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* FOLLOW POPUP SUCCESS DIALOG */}
        <AnimatePresence>
          {showFollowPopup && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFollowPopup(false)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-xl text-center w-80"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="text-5xl mb-3"
                >🎉</motion.div>
                <h2 className="text-xl font-bold mb-2">Thanks for following!</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  You are now following <strong>OG Biriyani</strong>
                </p>
                <button
                  className="mt-4 px-5 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
                  onClick={() => setShowFollowPopup(false)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}
