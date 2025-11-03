"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaBars,
  FaMapMarkerAlt,
  FaSearch,
  FaShoppingCart,
  FaHeart,
} from "react-icons/fa";

export default function NavBar() {
  const [showCategory, setShowCategory] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    "Agriculture & Forestry / Wildlife",
    "Education",
    "Food & Hospitality",
    "Automotive Vehicles",
    "Artist/Personality/Public Figure",
  ];

  const locations = [
    "Lusaka",
    "Ndola",
    "Kitwe",
    "Mazabuka",
    "Zambezi",
    "Kaoma",
    "Chipata",
    "Kashikishi",
    "Mansa",
    "Chinsali",
    "Kabwe",
  ];

  return (
    <header className="w-full shadow-sm border-b bg-white">
      {/* 🔹 Top Navbar */}
      <div className=" px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Image
            alt="logo"
            src="/assets/malologo (2).png"
            width={110}
            height={90}
            className="object-contain"
          />
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 text-xl"
          >
            <FaBars />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-xl w-full">
          <input
            type="search"
            placeholder="Search Product"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            Sign Up
          </button>
          <button className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition">
            Sign In
          </button>
        </div>
      </div>

      {/* 🔹 Bottom Navbar */}
      <nav
        className={`bg-gray-50 shadow-inner px-6 py-3 transition-all duration-300 ${
          menuOpen ? "block" : "hidden md:flex"
        } flex-wrap justify-between items-center relative`}
      >
        {/* Category & Location */}
        <div className="flex items-center gap-4 flex-wrap mb-4 md:mb-0">
          {/* Category Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowCategory(!showCategory);
                setShowLocation(false);
              }}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-md shadow hover:bg-gray-50"
            >
              <FaBars /> Browse All Categories
            </button>

            {showCategory && (
              <div className="absolute mt-2 bg-white shadow-lg rounded-md p-4 w-64 z-50">
                <h3 className="font-semibold mb-2 text-gray-700">Category</h3>
                {categories.map((cat, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 mb-1 cursor-pointer text-sm text-gray-700"
                  >
                    <input type="checkbox" />
                    {cat}
                  </label>
                ))}

                <div className="mt-3">
                  <h3 className="font-semibold mb-2 text-gray-700">
                    Price Range
                  </h3>
                  <input type="range" min="60" max="5000" className="w-full" />
                  <div className="flex justify-between text-sm mt-1 text-gray-600">
                    <span>ZMW 60</span>
                    <span>ZMW 5000</span>
                  </div>
                </div>

                <button className="mt-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white w-full py-2 rounded-md">
                  Apply
                </button>
              </div>
            )}
          </div>

          {/* Location Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowLocation(!showLocation);
                setShowCategory(false);
              }}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-md shadow hover:bg-gray-50"
            >
              <FaMapMarkerAlt /> Location
            </button>

            {showLocation && (
              <div className="absolute mt-2 bg-white shadow-lg rounded-md w-48 z-50 max-h-64 overflow-y-auto">
                {locations.map((loc, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                  >
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-gray-700 text-sm font-medium">
          <li className="text-red-600 cursor-pointer">Home</li>
          <li className="cursor-pointer">Product</li>
          <li className="cursor-pointer">Service</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Contact Us</li>
          <li className="cursor-pointer">Offer</li>
          <li className="cursor-pointer">FAQ</li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4 mt-3 md:mt-0">
          <button className="text-gray-600 hover:text-gray-800">
            <FaShoppingCart />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <FaHeart />
          </button>
        </div>
      </nav>
    </header>
  );
}
