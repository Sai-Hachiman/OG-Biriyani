import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, MessageCircle } from "lucide-react";
import Footer from "../components/Footer";

const plans = [
  {
    name: "Basic",
    price: "₹199",
    features: ["Single Biryani", "500ml Soft Drink", "Delivery Under 3km"],
  },
  {
    name: "Family Pack",
    price: "₹699",
    features: ["Family Biryani", "2-Starters", "Free Delivery", "Free Dessert"],
  },
  {
    name: "Premium Feast",
    price: "₹999",
    features: [
      "2 Full Biryani Choices",
      "2 Starters",
      "Soft Drinks",
      "Dessert Combo",
      "Free Delivery",
    ],
  },
];

const testimonials = [
  {
    name: "Rahul Kumar",
    review:
      "Best biryani in town! Hot, spicy and absolutely delicious. Will order again!",
  },
  {
    name: "Sneha R",
    review:
      "Loved the Family Pack! Quantity was big and taste was authentic.",
  },
  {
    name: "Aman Gupta",
    review:
      "Delivery was fast and fresh. My go-to biryani place from today!",
  },
];

export default function Pricing() {
  return (
    <div>
    <div className="bg-white text-black min-h-screen font-poppins">

      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20"
      >
        <h1 className="text-5xl font-bold tracking-tight">Pricing Plans</h1>
        <p className="mt-3 text-gray-600 text-lg">
          Choose the best package for your meal
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 p-6">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-300 p-6 rounded-2xl shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-4xl font-bold text-yellow-600 mb-4">
              {plan.price}
            </p>
            <ul className="space-y-2 mb-6 text-gray-700">
              {plan.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>

            <button className="w-full bg-gray-300 text-black font-bold py-2 rounded-xl hover:bg-gray-400 transition">
              Online Coming Soon
            </button>

            {/* Social Share Section */}
            <div className="flex justify-center gap-4 mt-4 opacity-70">
              <a className="hover:opacity-100 transition">
                <MessageCircle />
              </a>
              <a className="hover:opacity-100 transition">
                <Facebook />
              </a>
              <a className="hover:opacity-100 transition">
                <Twitter />
              </a>
              <a className="hover:opacity-100 transition">
                <Instagram />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials Section */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center text-4xl font-bold mt-24"
      >
        Customer Reviews
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 p-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-300 p-6 rounded-2xl shadow-md"
          >
            <p className="text-gray-700 italic">“{t.review}”</p>
            <p className="mt-4 text-yellow-600 font-semibold">— {t.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Coming Soon Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative mt-20"
      >
      <div
        className="w-full h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
        backgroundImage: `url('/images/coming-soon-banner1.jpg')`,
        filter: "brightness(0.4)",
  }}
/>

        {/* Animated Text */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          transition={{ repeat: 1, repeatType: "mirror", duration: 10 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 text-center"
        >
          <h1 className="text-6xl font-bold text-red-600 drop-shadow-xl">
            OG Biriyani Online Order Coming Soon
          </h1>
          
        </motion.div>
      </motion.div>

      {/* ===================================================
           ORDER QR + DELIVERY LINKS SECTION
      ===================================================== */}
      <div className="max-w-6xl mx-auto py-20">

        {/* QR Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-4xl font-bold"
        >
          Order at the Restaurant
        </motion.h2>

        {/* QR Code Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex justify-center mt-8"
        >
          <div className="p-6 border rounded-2xl shadow-md bg-white text-center">
            <img
  src="/images/order-qr.png"
  alt="Order QR Code"
  className="w-48 mx-auto"
/>
            <p className="font-medium text-gray-700">
              Scan this QR to view our offline menu at the restaurant
            </p>
          </div>
        </motion.div>

        {/* Food Delivery Partner Cards */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-3xl font-bold mt-20"
        >
          Delivery Partners
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 p-6 mt-10">

{/* Zomato Card */}
<motion.a
  whileHover={{ scale: 1.05 }}
  href="https://zomato.onelink.me/xqzv/f4ug8jfo"
  target="_blank"
  className="bg-white border border-gray-300 p-6 rounded-2xl shadow-md flex items-center gap-6 hover:shadow-lg transition"
>
  <img
    src="/images/zomato-logo.jpg"
    alt="Zomato"
    className="w-24"
  />
  <div>
    <h3 className="text-xl font-bold">Order via Zomato</h3>
    <p className="text-gray-600">Available at your location</p>
  </div>
</motion.a>

{/* Swiggy Card */}
<motion.a
  whileHover={{ scale: 1.05 }}
  href="https://www.swiggy.com/city/bangalore/og-biriyani-sanjay-nagar-new-bel-road-rt-nagar-rest1207878"
  target="_blank"
  className="bg-white border border-gray-300 p-6 rounded-2xl shadow-md flex items-center gap-6 hover:shadow-lg transition"
>
  <img
    src="/images/swiggy-logo.jpg"
    alt="Swiggy"
    className="w-24"
  />
  <div>
    <h3 className="text-xl font-bold">Order via Swiggy</h3>
    <p className="text-gray-600">Fast home delivery</p>
  </div>
</motion.a>

        </div>
        {/* ===================================================
     STORE HOURS / OPEN TIMINGS
===================================================== */}
<div className="max-w-4xl mx-auto py-20">

  <motion.h2
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    className="text-center text-4xl font-bold mb-8"
  >
    Store Hours
  </motion.h2>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="bg-white border border-gray-300 rounded-2xl shadow-md p-8"
  >
    <p className="text-center text-gray-700 mb-6 text-lg">
      We are open every day with all your favorite biryanis hot & fresh!
    </p>

    <div className="grid sm:grid-cols-2 gap-6 text-gray-800 font-medium">

      <div className="space-y-2">
        <p className="flex justify-between">
          <span>Monday</span>
          <span>Closed</span>
        </p>
        <p className="flex justify-between">
          <span>Tuesday</span>
          <span>11:00 AM – 11:00 PM</span>
        </p>
        <p className="flex justify-between">
          <span>Wednesday</span>
          <span>11:00 AM – 11:00 PM</span>
        </p>
        <p className="flex justify-between">
          <span>Thursday</span>
          <span>11:00 AM – 11:00 PM</span>
        </p>
      </div>

      <div className="space-y-2">
        <p className="flex justify-between">
          <span>Friday</span>
          <span>11:00 AM – 11:30 PM</span>
        </p>
        <p className="flex justify-between">
          <span>Saturday</span>
          <span>11:00 AM – 11:30 PM</span>
        </p>
        <p className="flex justify-between">
          <span>Sunday</span>
          <span>11:00 AM – 11:00 PM</span>
        </p>
        <p className="flex justify-between">
          <span>Enjoy your meal</span>
          <span> - OG Biriyani </span>
        </p>
      </div>

    </div>
  </motion.div>
</div>

      </div>
      
    </div>
    <Footer />
    </div>
  );
}
