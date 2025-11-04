"use client";
import React from "react";
import { FaStar, FaStarHalfAlt, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Daniel Martin",
    location: "New York, USA",
    text: "I was looking for the perfect engagement ring, and this website exceeded all my expectations! The craftsmanship is stunning, and the diamond sparkles beautifully. My fiancée absolutely loves it, and I couldn’t be happier with my purchase!",
    rating: 4,
    img: "/assets/listen/pic1.jpg",
  },
  {
    id: 2,
    name: "Eleanor Pena",
    location: "California, USA",
    text: "I bought a bracelet for my mom’s birthday, and she was beyond thrilled! The attention to detail, the shine, and the fit were all perfect. I am very much like it. I highly recommend this store for anyone looking for meaningful, high-quality jewelry.",
    rating: 4,
    img: "/assets/listen/pic1.jpg",
  },
];

export default function Listening() {
  return (
    <section className="container mx-auto px-6 py-12 text-center">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Listening to Our Customers
      </h2>
      <p className="text-gray-500 mb-10">
        Discover how collectors like you rate our service, quality, and shipping experience.
      </p>

      {/* Testimonials */}
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-gradient-to-r from-[#BEE6F8] to-[#E4ECFA] rounded-xl p-6 flex-1 max-w-md shadow-md"
          >
            <FaQuoteLeft className="text-3xl text-blue-400 mb-3" />
            <p className="text-gray-700 mb-5 text-sm">{t.text}</p>

            <div className="flex items-center gap-3">
              <img
                src={t.img}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-left">
                <h4 className="font-semibold text-gray-800 text-sm">{t.name}</h4>
                <p className="text-gray-500 text-xs">{t.location}</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex mt-3">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-yellow-400 ${i < t.rating ? "fill-current" : "text-gray-300"}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      </div>
    </section>
  );
}
