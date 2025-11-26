// src/pages/Home.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";
import Footer from "../components/Footer";

const HERO_SLIDES = [
  {
    id: 1,
    image: "/images/hero-biryani.jpg",
    headline: "OG BIRIYANI",
    sub: "Real Flavor • Real Spice • Real Dum",
  },
  {
    id: 2,
    image: "/images/biryani3.jpg",
    headline: "Hyderabadi Dum Biryani",
    sub: "Aged basmati • Slow-cooked Masala • Aroma sealed",
  },
  {
    id: 3,
    image: "/images/grill-chicken-full.jpg",
    headline: "Grilled Perfection",
    sub: "Smoky, juicy & full of charred goodness",
  },
];

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Story Behind OG Biryani",
    excerpt:
      "How we sourced spices and brought the authentic dum technique to Bangalore.",
    image: "/images/mutton-biryani.jpg",
    date: "Nov 10, 2025",
  },
  {
    id: 2,
    title: "Top 5 Tips to Reheat Biryani Perfectly",
    excerpt:
      "Keeping moisture and texture intact — microwave and stovetop methods.",
    image: "/images/chicken-biryani.jpg",
    date: "Oct 27, 2025",
  },
  {
    id: 3,
    title: "Why Dum Makes All the Difference",
    excerpt:
      "Understanding why slow-cooking under pressure yields unmatched aroma.",
    image: "/images/dum-biryani.jpg",
    date: "Sep 05, 2025",
  },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const slideRef = useRef(null);
  const AUTO_MS = 5000;

  // auto-advance slider
  useEffect(() => {
    slideRef.current = setInterval(() => {
      setSlide((s) => (s + 1) % HERO_SLIDES.length);
    }, AUTO_MS);
    return () => clearInterval(slideRef.current);
  }, []);

  const goTo = (i) => {
    clearInterval(slideRef.current);
    setSlide(i);
    slideRef.current = setInterval(() => {
      setSlide((s) => (s + 1) % HERO_SLIDES.length);
    }, AUTO_MS);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ====== HERO SLIDER ====== */}
      <section className="relative h-[78vh] md:h-[85vh] overflow-hidden">
        <AnimatePresence initial={false}>
          {HERO_SLIDES.map((s, i) =>
            i === slide ? (
              <motion.div
                key={s.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
              >
                <img
                  src={s.image}
                  alt={s.headline}
                  className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center px-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl"
                  >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg">
                      {s.headline}
                    </h1>
                    <p className="mt-4 text-md md:text-lg text-white/90">
                      {s.sub}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3 justify-center">
                      <button className="bg-white text-black px-5 py-3 rounded-full font-semibold">
                        🍽 Online Order
                      </button>

                      <a
                        href="https://zomato.onelink.me/xqzv/f4ug8jfo"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-full font-semibold"
                      >
                        Order on Zomato
                      </a>

                      <a
                        href="https://www.swiggy.com/city/bangalore/og-biryani-sanjay-nagar-new-bel-road-rt-nagar-rest1207878"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full font-semibold"
                      >
                        Order on Swiggy
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Slider controls */}
        <div className="absolute left-6 bottom-6 flex items-center gap-3">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-10 h-2 rounded-full transition-all ${
                i === slide ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* arrows */}
        <div className="absolute inset-y-0 right-6 flex flex-col items-center justify-center gap-3">
          <button
            onClick={() => setSlide((s) => (s - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
            className="bg-black/40 text-white rounded-full p-3 hover:bg-black/60"
            aria-label="prev"
          >
            ‹
          </button>
          <button
            onClick={() => setSlide((s) => (s + 1) % HERO_SLIDES.length)}
            className="bg-black/40 text-white rounded-full p-3 hover:bg-black/60"
            aria-label="next"
          >
            ›
          </button>
        </div>
      </section>

      {/* ====== BRIEF OVERVIEW & HIGHLIGHTS ====== */}


<section className="max-w-6xl mx-auto px-6 py-16 space-y-16">

  <h2 className="text-red text-4xl md:text-5xl font-extrabold text-center mb-10 tracking-tight">
Why OG Biriyani?
</h2>
  {/* Section 1: The Craft */}
  <div className="grid md:grid-cols-2 gap-10 items-center">
    <div>
      <motion.h2 initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-3xl md:text-4xl font-bold">
        The Art of Authentic Dum
      </motion.h2>
      <motion.p initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="mt-4 text-gray-700 leading-relaxed">
        Our biryani follows traditional slow-fire dum where every layer — rice, meat, and masala — cooks in harmony. No shortcuts, only patience, precision, and passion.
      </motion.p>
      <ul className="mt-6 space-y-2 text-gray-700">
        <li>• Simmered over sealed pots</li>
        <li>• Naturally infused aromas</li>
        <li>• Balanced spice layering</li>
      </ul>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <img src="/images/dum-biryani.jpg" className="w-full h-80 object-cover rounded-xl shadow" />
      <img src="/images/kitchen-fire.png" className="w-full h-80 object-cover rounded-xl shadow" />
    </div>
  </div>

  {/* Section 2: Ingredients */}
  <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
        <div className="grid grid-cols-2 gap-4">
      <img src="/images/spices.jpg" className="w-full h-40 object-cover rounded-xl shadow" />
      <img src="/images/basmati.jpg" className="w-full h-40 object-cover rounded-xl shadow" />
      <img src="/images/marination.jpg" className="w-full h-40 object-cover rounded-xl shadow" />
      <img src="/images/fresh-meat.jpg" className="w-full h-40 object-cover rounded-xl shadow" />
    </div>
    <div>
      <motion.h2 initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-3xl md:text-4xl font-bold">
        Premium Ingredients. Everyday Freshness.
      </motion.h2>
      <motion.p initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="mt-4 text-gray-700 leading-relaxed">
        From handpicked basmati rice to freshly ground spices, we keep our ingredients pure. Every batch of masala is crafted in-house to maintain consistency and depth.
      </motion.p>
      <ul className="mt-6 space-y-2 text-gray-700">
        <li>• Daily sourced meat cuts</li>
        <li>• Hand-ground masalas</li>
        <li>• 24-hour marination process</li>
      </ul>
    </div>

  </div>

  {/* Section 3: Experience */}
  <div className="grid md:grid-cols-2 gap-10 items-center">
    <div>
      <motion.h2 initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-3xl md:text-4xl font-bold">
        A Feast for Every Occasion
      </motion.h2>
      <motion.p initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="mt-4 text-gray-700 leading-relaxed">
        Whether it's a family dinner, celebration, or a weekend indulgence, our biryani brings people together. Rich, aromatic, and deeply satisfying.
      </motion.p>
      <div className="mt-6 flex gap-3">
        <Link to="/menu" className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-red-700">View Menu</Link>
        <Link to="/gallery" className="border border-gray-300 px-6 py-2 rounded-lg font-semibold shadow">Gallery</Link>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <img src="/images/family-meal.jpg" className="w-full h-30 object-cover rounded-xl shadow" />
      <img src="/images/plate-biryani.jpg" className="w-full h-30 object-cover rounded-xl shadow" />
      <img src="/images/Logo.png" className="w-full h-30 object-cover rounded-xl shadow" />
      <img src="/images/table-spread.jpg" className="w-full h-20 object-cover rounded-xl shadow" />
    </div>
  </div>
</section>

      {/* ====== FEATURED / PROMOS ====== */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6">Featured</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -6 }} className="bg-white rounded-xl p-5 shadow">
              <img src="/images/dum-biryani.jpg" className="h-40 w-full object-cover rounded-lg" />
              <h4 className="font-semibold mt-3">Dum Biryani</h4>
              <p className="text-sm text-gray-600 mt-1">Slow-cooked for authentic aroma.</p>
            </motion.div>

            <motion.div whileHover={{ y: -6 }} className="bg-white rounded-xl p-5 shadow">
              <img src="/images/prawn-biryani.jpg" className="h-40 w-full object-cover rounded-lg" />
              <h4 className="font-semibold mt-3">Prawns Biryani</h4>
              <p className="text-sm text-gray-600 mt-1">Seafood delight with coastal spices.</p>
            </motion.div>

            <motion.div whileHover={{ y: -6 }} className="bg-white rounded-xl p-5 shadow">
              <img src="/images/grilled-chicken.jpg" className="h-40 w-full object-cover rounded-lg" />
              <h4 className="font-semibold mt-3">Grilled Chicken</h4>
              <p className="text-sm text-gray-600 mt-1">Smoky, tender and juicy.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== New Full-Screen Brand Logo Section ===== */}
<section className="relative h-50 w-full flex items-center justify-center overflow-hidden">

  {/* Parallax / scrolling effect wrapper */}
  <div
    className="absolute inset-0 bg-cover bg-center w-full h-50"
    style={{ backgroundImage: "url('/images/logo-bg1.jpg')" }}
  />

  {/* Dark overlay for contrast */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Logo foreground */}
  <motion.img
    src="/images/logo1.png"
    alt="OG Biryani Logo"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 w-[60%] md:w-[35%] drop-shadow-2xl"
  />
</section>

      {/* ====== BLOG & NEWS FEED ====== */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Blog & News</h3>
          <Link to="/blog" className="text-sm text-red-600">See all</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((p) => (
            <motion.article key={p.id} whileHover={{ y: -6 }} className="bg-white rounded-xl shadow overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <div className="text-xs text-gray-500">{p.date}</div>
                <h4 className="font-semibold mt-2">{p.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{p.excerpt}</p>
                <div className="mt-4">
                  <Link to={`/blog/${p.id}`} className="text-red-600 font-medium">Read more →</Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ====== CONTACT & OPEN HOURS ====== */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-3">Contact</h3>

            <p className="text-gray-700 mb-4">
              OG Biryani • RT Nagar • Bangalore
            </p>

            <div className="flex gap-4 items-start text-gray-700 mb-4">
              <Phone className="mt-1" /> <div>+91 98765 43210</div>
            </div>

            <div className="flex gap-4 items-start text-gray-700 mb-4">
              <Mail className="mt-1" /> <div>support@ogbiryani.com</div>
            </div>

            <h4 className="font-semibold mt-4">Open Hours</h4>
            <div className="mt-2 text-gray-700">
              <div>Mon – Thu: 11:00 AM – 11:00 PM</div>
              <div>Fri – Sat: 11:00 AM – 11:30 PM</div>
              <div>Sun: 11:00 AM – 11:00 PM</div>
            </div>

            <div className="mt-6 flex gap-3">
              <a href="https://zomato.onelink.me/xqzv/f4ug8jfo" target="_blank" rel="noreferrer" className="px-4 py-2 bg-red-600 text-white rounded-md">Zomato</a>
              <a href="https://www.swiggy.com/city/bangalore/og-biryani-sanjay-nagar-new-bel-road-rt-nagar-rest1207878" target="_blank" rel="noreferrer" className="px-4 py-2 bg-orange-500 text-white rounded-md">Swiggy</a>
            </div>
          </div>

          <div className="h-72 rounded-xl overflow-hidden border">
            <iframe
              title="OG Biryani Location"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.508217016357!2d77.5979798!3d13.0306296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1734546e7c43%3A0xcab5aab1fcbfdfcf!2sOG%20BIRIYANI!5e0!3m2!1sen!2sin!4v1732260000000!5m2!1sen!2sin"
            />
          </div>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 items-center">
          <div>
            <div className="text-xl font-bold">OG BIRIYANI</div>
            <div className="text-sm text-gray-400 mt-2">Real Taste. Real Story.</div>
          </div>

          <div className="flex gap-4 justify-center">
            Order Now
          </div>

          <div className="text-right text-sm text-gray-400">
            ••• Make Your Meal !!! More Yum !!! •••
          </div>
        </div>
      </footer>
      <Footer />
    </div>
  );
}
