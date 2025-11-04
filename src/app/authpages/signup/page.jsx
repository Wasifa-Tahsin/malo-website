import React from 'react'
import { FaEyeSlash } from 'react-icons/fa'

export default function SignUp() {
  return (
    <div>

 <div className="flex flex-col justify-center items-center text-center px-4 py-10 ">

      {/* Title */}
      <div className="flex flex-col items-center space-y-2 mb-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-700">
          Register a New Account
        </h2>
        <p className="text-gray-600 max-w-sm">
          Please enter your information to create an account
        </p>
      </div>

      {/* Form */}
      <form className="rounded-lg flex flex-col space-y-4 w-full max-w-[700px] bg-white p-6 shadow-md">

        {/* User Name */}
        <div className="flex flex-col items-start w-full">
          <label htmlFor="username" className="text-gray-700 font-medium mb-1">User Name</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Asadujjaman"
            className="w-full h-[60px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col items-start w-full">
          <label htmlFor="email" className="text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Asadujjaman@gmail.com"
            className="w-full h-[60px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
          />
        </div>

        {/* Contact Number */}
        <div className="flex flex-col items-start w-full">
          <label htmlFor="number" className="text-gray-700 font-medium mb-1">Contact No</label>
          <input
            type="number"
            id="number"
            name="number"
            placeholder="0195365245263"
            className="w-full h-[60px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
          />
        </div>

        {/* Password */}
         <div className="flex flex-col items-start w-full">
                  <label htmlFor="confirmPassword" className="text-gray-700 font-medium mb-1">
                     Password
                  </label>
                  <div className="relative w-full">
                    <input
                      type="password"
                      id="confirmPassword"
                      placeholder='*******'
                      name="confirmPassword"
                      className="w-full h-[60px] border border-gray-300 rounded-md px-3 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-[#B14034]"
                    />
                    <FaEyeSlash className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
                  </div>
                </div>

        {/* Sign Up Button */}
        <button
          type="submit" style={{
            background:
              'linear-gradient(90deg, rgba(5, 85, 191, 1) 0%, rgba(91, 210, 244, 1) 100%)',
          }}
          className="bg-[#B14034] w-full h-[60px] text-white font-semibold rounded-md hover:bg-[#912f26] transition"
        >
          Sign Up
        </button>

        {/* Sign In Link */}
       <a to='/login'> <button
          type="button"
          className="mt-4 text-[#1D4ED8] hover:underline"
        >
          Sign In
        </button></a>

      </form>
    </div>

    </div>
  )
}
