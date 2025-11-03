"use client";
import React from "react";
import Image from "next/image";
import { FaHeart, FaStar, FaChevronLeft, FaChevronRight, FaThumbsUp } from "react-icons/fa";

export default function Products() {
  const products = [
    {
      id: 1,
      title: "Office Wear",
      desc: "Suits, Smart Dresses...",
      price: "150-300",
      img: "https://i.ibb.co/6bFC7xz/image1.png",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Office Wear",
      desc: "Suits, Smart Dresses...",
      price: "150-300",
      img: "https://i.ibb.co/8z6rHcC/image2.png",
      rating: 4.8,
    },
    {
      id: 3,
      title: "Office Wear",
      desc: "Suits, Smart Dresses...",
      price: "150-300",
      img: "https://i.ibb.co/GcVn8QZ/image3.png",
      rating: 4.8,
    },
    {
      id: 4,
      title: "Office Wear",
      desc: "Suits, Smart Dresses...",
      price: "150-300",
      img: "https://i.ibb.co/RQrZ7mS/image4.png",
      rating: 4.8,
    },
    {
      id: 5,
      title: "Office Wear",
      desc: "Suits, Smart Dresses...",
      price: "150-300",
      img: "https://i.ibb.co/xm3tZTy/image5.png",
      rating: 4.8,
    },
    {
      id: 5,
      title: "Office Wear",
      desc: "Suits, Smart Dresses...",
      price: "150-300",
      img: "https://i.ibb.co/xm3tZTy/image5.png",
      rating: 4.8,
    },
  ];

  return (
    <section className="container mx-auto px-6 py-10">
      {/* Title Row */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          Shop From Our <span className="text-blue-600">Products</span>
        </h2>
        <a href="#" className="text-blue-600 text-sm font-medium hover:underline flex items-center gap-1">
          View all →
        </a>
      </div>

      {/* Slider Buttons */}
      <div className="flex justify-end gap-2 mb-4">
        <button className="p-2 border rounded-md text-gray-500 hover:text-blue-600 hover:border-blue-600 transition">
          <FaChevronLeft />
        </button>
        <button className="p-2 border rounded-md text-gray-500 hover:text-blue-600 hover:border-blue-600 transition">
          <FaChevronRight />
        </button>
      </div>

      {/* Product Cards */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {products.map((product,index) => (
          <div
            key={index}
            className="min-w-[200px] bg-white shadow-md rounded-xl border border-blue-100 hover:shadow-lg transition relative"
          >
            {/* Product Image */}
            <div className="relative w-full h-48 bg-blue-50 rounded-t-xl">
              <Image
                src={'/assets/categories/Img.svg'}
                alt={product.title}
                fill
                className="object-contain rounded-t-xl p-4"
              />
              <div className="absolute top-3 left-3 bg-white text-blue-600 p-1.5 rounded-full shadow">
                <FaThumbsUp size={14} />
              </div>
              <div className="absolute top-3 right-3 bg-white text-red-500 p-1.5 rounded-full shadow">
                <FaHeart size={14} />
              </div>
            </div>

            {/* Product Details */}
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800 text-sm">{product.title}</h3>
                <div className="flex items-center text-yellow-500 text-xs">
                  <FaStar className="mr-1" /> {product.rating}
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-1">{product.desc}</p>
              <p className="text-green-600 text-sm font-semibold mt-2">
                ZMW <span className="text-red-500">{product.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
