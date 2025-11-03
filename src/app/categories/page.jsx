"use client";
import React from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
  
const categoriesData = [
  {
    title: "Agriculture",
    img: "/images/categories/agriculture.png",
  },
  {
    title: "Artist/Personality /Public Figure",
    img: "/images/categories/artist.png",
  },
  {
    title: "Automotive Vehicles",
    img: "/images/categories/automotive.png",
  },
  {
    title: "Education",
    img: "/images/categories/education.png",
  },
  {
    title: "Food & Hospitality",
    img: "/images/categories/food.png",
  },
  {
    title: "Health & Medical Services",
    img: "/images/categories/health.png",
  },
];

export default function Categories() {
  return (
    <div className="container mx-auto px-8 py-10">
      {/* Title */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          See Our <span className="text-blue-600">Categories</span>
        </h2>
        <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
          View All →
        </a>
      </div>

      {/* Category Cards */}
      <div className="flex items-center gap-5 overflow-x-auto scrollbar-hide">
        {categoriesData.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-sm hover:shadow-md p-4 min-w-[150px] transition"
          >
            <div className="w-28 h-28 mb-3 relative">
              <Image
                src={cat.img}
                alt={cat.title}
                fill
                className="object-contain rounded-md bg-blue-50"
              />
            </div>
            <p className="text-center text-sm font-medium text-gray-700">
              {cat.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
