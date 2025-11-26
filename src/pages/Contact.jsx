import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div>
    <div className="min-h-screen bg-white text-black">
      
      {/* Header */}
      <div className="w-full py-16 text-center bg-gray-100">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-600 mt-2 text-lg">
          We’re here to help. Get in touch anytime!
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Contact Details */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Store Information</h2>

          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-600">support@ogbiryani.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6" />
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-gray-600">
                OG Biryani, RT Nagar  
                Bangalore - 560094
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex items-start gap-4 mt-6">
            <Clock className="w-6 h-6" />
            <div>
              <p className="font-semibold">Opening Hours</p>
              <p className="text-gray-600">Mon – Sun: 11 AM – 11 PM</p>
            </div>
          </div>

          {/* Delivery Links */}
          <h2 className="text-2xl font-bold mt-8">Order Online</h2>

          <div className="flex gap-4">
            <a
              href="https://zomato.onelink.me/xqzv/f4ug8jfo"
              target="_blank"
              className="px-4 py-2 bg-red-600 text-white rounded-lg"
            >
              Order on Zomato
            </a>

            <a
              href="https://www.swiggy.com/city/bangalore/og-biriyani-sanjay-nagar-new-bel-road-rt-nagar-rest1207878"
              target="_blank"
              className="px-4 py-2 bg-orange-500 text-white rounded-lg"
            >
              Order on Swiggy
            </a>
          </div>

          {/* Social Links */}
          <h2 className="text-2xl font-bold mt-8">Follow Us</h2>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-70">
              <Facebook className="w-7 h-7" />
            </a>
            <a href="#" className="hover:opacity-70">
              <Instagram className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          <form className="space-y-4">
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="w-full p-3 border rounded-lg"
              placeholder="Your Email"
            />
            <textarea
              rows="5"
              className="w-full p-3 border rounded-lg"
              placeholder="Your Message"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-80 mt-10">
        <iframe
          title="Store Location"
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.508217016357!2d77.5979798!3d13.0306296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1734546e7c43%3A0xcab5aab1fcbfdfcf!2sOG%20BIRIYANI!5e0!3m2!1sen!2sin!4v1732260000000!5m2!1sen!2sin"></iframe>
      </div>

      {/* Footer note */}
      <div className="py-6 text-center text-gray-500 text-sm">
        # OG Biriyani !!! Make your Meal !!! More Yum !!!
      </div>
    </div>
    <Footer />
    </div>
  );
}
