"use client";
import React from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Categories() {
  const categoriesData = [
    {
      title: "Agriculture",
      img: "https://i.ibb.co/nsSmCVx/image-box-5.png",
    },
    {
      title: "Artist/Personality /Public Figure",
      img: "https://i.ibb.co/nsSmCVx/image-box-5.png",
    },
    {
      title: "Automotive Vehicles",
      img: "https://i.ibb.co/nsSmCVx/image-box-5.png",
    },
    {
      title: "Education",
      img: "https://i.ibb.co/nsSmCVx/image-box-5.png",
    },
    {
      title: "Food & Hospitality",
      img: "https://i.ibb.co/nsSmCVx/image-box-5.png",
    },
    {
      title: "Health & Medical Services",
      img: "https://i.ibb.co/nsSmCVx/image-box-5.png",
    },
    {
      title: "Health & Medical Services",
      img: "https://i.ibb.co/nsSmCVx/image-box-5.png",
    },
  ];

  return (
    <div className="container mx-auto justify-center items-center px-8 py-10">
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
                src={'/assets/categories/Img.svg'}
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
