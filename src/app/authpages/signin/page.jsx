import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
export default function SignIn() {
  return (
    <div className=" flex justify-center items-center mt-20 mb-20 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-600 text-center mb-2">
          Login to Account
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Please enter your email and password to continue
        </p>

        {/* Form */}
        <form className="flex flex-col space-y-4">
          {/* Email */}
          <div className="flex flex-col w-full text-left">
            <label className="text-gray-500 mb-1">Email address:</label>
            <input
              type="email"
              placeholder="esteban_schiller@gmail.com"
              className="w-full h-12 px-3 rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col text-left w-full relative">
            <label className="text-gray-500 mb-1">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full h-12 px-3 rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
            />
            <FaEye className="absolute right-3 top-1/2   text-gray-400 cursor-pointer" />
          </div>

          {/* Remember + Forget */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              Remember Password
            </label>
            <a href={"/forgetPassword"}>
              <button type="button" className="text-gray-500 hover:underline">
                Forget Password?
              </button>
            </a>
          </div>

          {/* Sign In */}
          <button
            type="submit"
            style={{
              background:
                "linear-gradient(90deg, rgba(5, 85, 191, 1) 0%, rgba(91, 210, 244, 1) 100%)",
            }}
            className="bg-[#B14034] text-white mt-6 h-12 rounded-md font-semibold hover:bg-[#912f26] transition"
          >
            Sign In
          </button>

          {/* Sign Up */}
          <a href="/registerAccount" className="text-center">Sign Up</a>
        </form>
      </div>
    </div>
  );
}
