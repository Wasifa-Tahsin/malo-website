import Image from 'next/image';
import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      className="bg-base-200 text-white py-10"
      style={{
        background: "linear-gradient(90deg, #073879 0%, #75D3FE 100%)",
      }}
    >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between gap-10">
        {/* Logo and description */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
          <Image
            src="/assets/malologo (2).png"
            alt="logo"
            width={136}
            height={117}
            className="rounded-2xl"
          />
          <p className="max-w-xs">
            It is a long established fact that a <br /> reader will be distracted
            by the <br /> readable content.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-10">
          <div>
            <h6 className="text-2xl mb-2">Information</h6>
            <div className="flex flex-col gap-1">
              <a className="link link-hover">About Us</a>
              <a className="link link-hover">FAQ</a>
              <a className="link link-hover">Privacy Policy</a>
              <a className="link link-hover">Terms & Condition</a>
            </div>
          </div>

          <div>
            <h6 className="text-2xl mb-2">Help & Support</h6>
            <div className="flex flex-col gap-1">
              <a className="link link-hover">About Us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press Kit</a>
            </div>
          </div>

          <div>
            <h6 className="text-2xl mb-4">Download App</h6>
           {/* App Store / Google Play Buttons */}
<div className="flex flex-col gap-4">
  <button className="border-2 py-2 px-4 rounded-xl bg-[#13e7a1] flex items-center gap-3 hover:bg-[#d0fff0] transition">
    <FaApple className="text-3xl text-gray-800" />
    <div className="text-left">
      <p className="text-sm md:text-base">Download on the</p>
      <h4 className="font-bold">App Store</h4>
    </div>
  </button>

  <button className="border-2 py-2 px-4 rounded-xl bg-[#0fb17b] flex items-center gap-3 hover:bg-[#d0fff0] transition">
    <FaGooglePlay className="text-3xl text-gray-800" />
    <div className="text-left">
      <p className="text-sm md:text-base">GET IT ON</p>
      <h4 className="font-bold">Google Play</h4>
    </div>
  </button>
</div>

          </div>
        </div>
      </div>
    </footer>
  );
}
