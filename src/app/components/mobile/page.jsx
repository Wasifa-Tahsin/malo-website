"use client";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function MobilePage() {
  return (
  <section
  className=" px-6 py-10"
  style={{
    background: "linear-gradient(90deg, rgba(118, 202, 226, 1) 0%, rgba(228, 236, 250, 1) 100%)",
  }}
>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text & Buttons */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Download Our <br /> Mobile App And Save <br /> Time, Money
          </h1>
          <p className="text-gray-600 mt-4 max-w-md">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more
          </p>

          {/* App Store / Google Play Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-6 justify-center md:justify-start">
            {/* App Store */}
            <button className="border-2 py-2 px-4 rounded-xl bg-[#E7FFF7] flex items-center gap-3 hover:bg-[#d0fff0] transition">
              <FaApple className="text-3xl text-gray-800" />
              <div className="text-left">
                <p className="text-sm md:text-base">Download on the</p>
                <h4 className="font-bold">App Store</h4>
              </div>
            </button>

            {/* Google Play */}
            <button className="border-2 py-2 px-4 rounded-xl bg-[#E7FFF7] flex items-center gap-3 hover:bg-[#d0fff0] transition">
              <FaGooglePlay className="text-3xl text-gray-800" />
              <div className="text-left">
                <p className="text-sm md:text-base">GET IT ON</p>
                <h4 className="font-bold">Google Play</h4>
              </div>
            </button>
          </div>
        </div>

        {/* Images */}
        <div className=" flex  justify-center ">
          <img
            className="w-1/2 sm:w-1/2 md:w-auto mx-auto"
            src="/assets/mobile/mobile1.png"
            alt="Mobile Preview 1"
          />
          <img
            className="w-1/2 sm:w-1/2 md:w-auto mx-auto"
            src="/assets/mobile/mobile2.png"
            alt="Mobile Preview 2"
          />
        </div>
      </div>
    </section>
  );
}
