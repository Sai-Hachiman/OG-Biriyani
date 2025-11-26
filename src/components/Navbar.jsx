import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 shadow-md sticky top-0 z-50 border-b border-white/20 dark:border-gray-700/30">
      <nav className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between md:justify-center gap-6">
        {/* Logo */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <NavLink
            to="/"
            className="text-3xl font-extrabold tracking-tight text-red-600 drop-shadow-sm hover:scale-105 transition-transform"
          >
            <img src="/images/logo1.png" alt="logo" className="inline-block w-10 h-10 mr-2" /> OG Biryani
          </NavLink>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center flex-1 gap-8 text-base font-medium">
  <ul className="flex gap-8">
    <NavItem name="Home" to="/" />
    <NavItem name="Menu" to="/menu" />
    <NavItem name="Gallery" to="/gallery" />
    <NavItem name="Order" to="/pricing" />
    <NavItem name="Contact" to="/contact" />
  </ul>
</div>

{/* Order Now Right Side */}
<motion.a
  href="/pricing"
  whileHover={{ scale: 1.1 }}
  className="hidden md:block px-4 py-2 rounded-full bg-red-600 text-white shadow hover:bg-red-700 transition ml-auto"
>
  🍗 Order Now
</motion.a>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl text-red-600">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-t dark:border-gray-800"
      >
        <ul className="flex flex-col px-5 py-4 gap-5 text-base">
          <NavItem onClick={() => setOpen(false)} name="Home" to="/" />
          <NavItem onClick={() => setOpen(false)} name="Menu" to="/menu" />
          <NavItem onClick={() => setOpen(false)} name="Gallery" to="/gallery" />
          <NavItem onClick={() => setOpen(false)} name="Order" to="/pricing" />
          <NavItem onClick={() => setOpen(false)} name="Contact" to="/contact" />

          <motion.a
            href="#"
            whileTap={{ scale: 0.95 }}
            className="px-4 py-3 text-center rounded-xl bg-red-600 text-white font-semibold shadow hover:bg-red-700"
          >
            🍗 Order Now
          </motion.a>
        </ul>
      </motion.div>
    </header>
  );
}

function NavItem({ name, to, onClick }) {
  return (
    <li>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `transition-all pb-1 hover:text-yellow-500 hover:tracking-wide ${
            isActive ? "text-red-600 font-semibold border-b-2 border-red-600" : ""
          }`
        }
      >
        {name}
      </NavLink>
    </li>
  );
}
