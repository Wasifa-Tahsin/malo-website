"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { FaThumbsUp } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaArrowRightLong, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Services() {
  const scrollRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Media and Marketing",
      desc: "Advertising consultation branding and promotions.",
      location: "Lusaka",
      price: "ZMW 150–300",
      rating: "4.8/5",
      views: "23",
      img: "/assets/img.png",
    },
    {
      id: 2,
      title: "Media and Marketing",
      desc: "Advertising consultation branding and promotions.",
      location: "Lusaka",
      price: "ZMW 150–300",
      rating: "4.8/5",
      views: "23",
      img: "/assets/img.png",
    },
    {
      id: 3,
      title: "Media and Marketing",
      desc: "Advertising consultation branding and promotions.",
      location: "Lusaka",
      price: "ZMW 150–300",
      rating: "4.8/5",
      views: "23",
      img: "/assets/img.png",
    },
    {
      id: 4,
      title: "Media and Marketing",
      desc: "Advertising consultation branding and promotions.",
      location: "Lusaka",
      price: "ZMW 150–300",
      rating: "4.8/5",
      views: "23",
      img: "/assets/img.png",
    },
    {
      id: 5,
      title: "Media and Marketing",
      desc: "Advertising consultation branding and promotions.",
      location: "Lusaka",
      price: "ZMW 150–300",
      rating: "4.8/5",
      views: "23",
      img: "/assets/img.png",
    },
  ];

  // ✅ Scroll handlers
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="container mx-auto py-10 px-6 md:px-10">
      {/* Section Title */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[22px] font-semibold text-gray-800">
          See Our{" "}
          <span className="text-blue-600 border-b-2 border-blue-600 pb-1">
            Services
          </span>
        </h2>

        <a
          href="#"
          className="text-sm text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2 transition"
        >
          View All
          <FaArrowRightLong className="text-blue-600 hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>

      {/* Arrows */}
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

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar"
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="min-w-[300px] max-w-[300px] bg-[#E9FAFF] rounded-xl shadow-sm hover:shadow-md transition p-3 flex-shrink-0"
          >
            {/* Image */}
            <div className="relative w-full h-[180px]">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute top-2 left-2 bg-white rounded-full p-2 text-blue-600">
                <FaThumbsUp size={16} />
              </div>
            </div>

            {/* Content */}
            <div className="mt-4">
              <h3 className="font-semibold text-gray-800 text-sm">
                {service.title}
              </h3>

              <div className="flex items-center gap-2 text-yellow-500 text-xs my-1">
                ⭐⭐⭐⭐⭐
                <span className="text-gray-500">{service.rating}</span>
                <span className="text-gray-400">({service.views})</span>
              </div>

              <p className="text-gray-600 text-xs mb-3">{service.desc}</p>

              <div className="flex items-center justify-between">
                <span className="flex items-center text-xs text-gray-500">
                  <IoLocationSharp className="text-blue-500 mr-1" />
                  {service.location}
                </span>
                <span className="text-xs text-[#F15C5C] font-semibold">
                  {service.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
