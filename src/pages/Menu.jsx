// Modern & Fun Redesigned Menu.jsx Filter Section
// Drop‑in replacement for your filter UI section only

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, Filter, XCircle, Search } from "lucide-react";
import menuItems from "../data/menuItems";
import ProductCard from "../components/ProductCard";
import ProductDialog from "../components/ProductDialog";
import Footer from "../components/Footer";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [vegFilter, setVegFilter] = useState(null);
  const [sortOption, setSortOption] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const categories = [...new Set(menuItems.map((i) => i.category))];

  const toggleCategory = (cat) => {
    setCategoryFilters((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filteredItems = useMemo(() => {
    let list = [...menuItems];
    if (search.trim()) list = list.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()));
    if (categoryFilters.length) list = list.filter((i) => categoryFilters.includes(i.category));
    if (vegFilter !== null) list = list.filter((i) => i.veg === vegFilter);
    if (sortOption === "price_low") list.sort((a, b) => a.price - b.price);
    if (sortOption === "rating_high") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [search, categoryFilters, vegFilter, sortOption]);

  return (
    <div>
      <div className="flex">
        {/* MOBILE FILTER BUTTON */}
        <button
          className="fixed bottom-6 right-6 z-50 md:hidden bg-red-600 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 animate-bounce"
          onClick={() => setMobileFilterOpen(true)}
        >
          <Filter size={20} /> Filters
        </button>

        {/* MODERN LEFT SIDEBAR */}
        <aside className="hidden md:block w-72 border-r bg-white/60 backdrop-blur-lg p-6 sticky top-0 h-screen overflow-y-auto shadow-sm rounded-r-xl">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
            <SlidersHorizontal /> Filters
          </h2>

          {/* Search Bar */}
          <div className="relative mb-5">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search biryani, grill, more..."
              className="w-full pl-10 py-2 rounded-lg bg-gray-100 border focus:ring-2 focus:ring-red-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Veg / Non Veg Buttons */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Type</h3>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setVegFilter(true)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${vegFilter === true ? "bg-green-500 text-white" : "bg-gray-100"}`}
              >🟢 Veg</button>
              <button
                onClick={() => setVegFilter(false)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${vegFilter === false ? "bg-red-500 text-white" : "bg-gray-100"}`}
              >🔴 Non-Veg</button>
              <button
                onClick={() => setVegFilter(null)}
                className="px-4 py-1.5 rounded-full bg-gray-200 text-sm"
              >Reset</button>
            </div>
          </div>

          {/* Category Pills */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm border transition-all ${categoryFilters.includes(cat) ? "bg-red-600 text-white border-red-600" : "bg-white border-gray-300 hover:bg-gray-100"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Sort By */}
          <div>
            <h3 className="font-semibold mb-2">Sort By</h3>
            <select
              className="w-full py-2 px-3 rounded-lg bg-gray-100 border"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">None</option>
              <option value="price_low">Price: Low → High</option>
              <option value="rating_high">Rating: High → Low</option>
            </select>
          </div>
        </aside>

        {/* MOBILE FILTER POPUP */}
        {mobileFilterOpen && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-end">
            <div className="w-72 h-full bg-white p-6 shadow-xl animate-slide-left overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Filters</h2>
                <XCircle size={24} className="text-red-500 cursor-pointer" onClick={() => setMobileFilterOpen(false)} />
              </div>

              {/* Same filters reused */}
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border rounded-lg py-2 px-3"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="mb-5">
                <h3 className="font-semibold mb-2">Type</h3>
                <div className="flex gap-2 flex-wrap">
                  <button className="px-3 py-1 rounded bg-green-500 text-white" onClick={() => setVegFilter(true)}>Veg</button>
                  <button className="px-3 py-1 rounded bg-red-500 text-white" onClick={() => setVegFilter(false)}>Non-Veg</button>
                  <button className="px-3 py-1 rounded bg-gray-300" onClick={() => setVegFilter(null)}>Reset</button>
                </div>
              </div>

              <div className="mb-5">
                <h3 className="font-semibold mb-2">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => toggleCategory(cat)}
                      className={`px-3 py-1 rounded-full text-sm border ${categoryFilters.includes(cat) ? "bg-red-600 text-white border-red-600" : "bg-white border-gray-300"}`}
                    >{cat}</button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Sort By</h3>
                <select className="w-full border py-2 px-3 rounded-lg" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                  <option value="">None</option>
                  <option value="price_low">Price: Low → High</option>
                  <option value="rating_high">Rating: High → Low</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* MENU GRID */}
        <main className="flex-1 p-4">
          <motion.h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-red-600">🍽️ Our Menu</motion.h1>

          {filteredItems.length === 0 && (<p className="text-center text-gray-500 mt-10">No matching items found.</p>)}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, idx) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.06 }}>
                <ProductCard item={item} onClick={() => setSelectedProduct(item)} />
              </motion.div>
            ))}
          </div>
        </main>
      </div>

      {selectedProduct && (<ProductDialog item={selectedProduct} onClose={() => setSelectedProduct(null)} />)}
      <Footer />
    </div>
  );
}
