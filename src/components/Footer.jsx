import React from "react";
import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Logo Section */}
        <div className="space-y-4">
          <img
            src="/images/logo1.png" 
            alt="OG Biryani Logo"
            className="w-40 opacity-90"
          />
          <p className="text-sm text-gray-400 leading-relaxed">
            Authentic Dum • Crafted Flavors • Real Taste
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/menu" className="hover:text-white">Menu</a></li>
            <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">Contact</h3>
          <div className="space-y-3 text-gray-300 text-sm">
            <p className="flex items-center gap-2"><Phone size={16}/> +91 98765 43210</p>
            <p className="flex items-center gap-2"><Mail size={16}/> support@ogbiryani.com</p>
            <p>Bangalore, India</p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a className="hover:opacity-70"><Facebook /></a>
            <a className="hover:opacity-70"><Instagram /></a>
            <a className="hover:opacity-70"><Youtube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center text-gray-500 text-sm border-t border-white/10 pt-6">
        © {new Date().getFullYear()} OG Biryani. All rights reserved.
      </div>
    </footer>
  );
}
