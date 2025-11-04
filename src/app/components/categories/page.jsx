"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Categories() {
  const scrollRef = useRef(null);

  const categoriesData = [
    { title: "Agriculture", img: "/assets/categories/pic2.png" },
    {
      title: "Artist/Personality /Public Figure",
      img: "/assets/categories/pic1.png",
    },
    {
      title: "Automotive Vehicles",
      img: "/assets/categories/pic3.png",
    },
    { title: "Education", img: "/assets/categories/pic4.png" },
    {
      title: "Food & Hospitality",
      img: "/assets/categories/pic1.png",
    },
    {
      title: "Health & Medical Services",
      img: "/assets/categories/pic2.png",
    },
    {
      title: "Health & Medical Services",
      img: "/assets/categories/pic3.png",
    },
    {
      title: "Health & Medical Services",
      img: "/assets/categories/pic4.png",
    },
    {
      title: "Health & Medical Services",
      img: "/assets/categories/pic5.png",
    },
  ];
  // ✅ Scroll functions
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="container mx-auto px-6 py-10">
      {/* Title Row */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          See Our <span className="text-blue-600">Categories</span>
        </h2>
        <a
          href="#"
          className="text-blue-600 text-sm font-medium hover:underline flex items-center gap-1"
        >
          View All →
        </a>
      </div>

      {/* Arrow Buttons */}
      <div className="flex justify-end gap-2 mb-4">
        <button
          onClick={scrollLeft}
          className="p-2 border rounded-md text-gray-500 hover:text-blue-600 hover:border-blue-600 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={scrollRight}
          className="p-2 border rounded-md text-gray-500 hover:text-blue-600 hover:border-blue-600 transition"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Category Cards */}
      <div
        ref={scrollRef}
        className="flex items-center gap-5 overflow-x-auto scroll-smooth hide-scrollbar"
      >
        {categoriesData.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-sm hover:shadow-md p-4 min-w-[150px] sm:min-w-[180px] transition border border-blue-100"
          >
            <div className="relative w-28 h-28 mb-3 bg-blue-50 rounded-md">
              <Image
                src={cat.img}
                alt={cat.title}
                fill
                className="object-contain p-4 rounded-md"
              />
            </div>
            <p className="text-center text-sm font-medium text-gray-700">
              {cat.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
