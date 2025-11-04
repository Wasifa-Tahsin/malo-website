"use client"
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io"; // ✅ Import the icon

export default function FAQPage() {
  const faqs = [
    {
      question: "Do you offer online shopping and home delivery?",
      answer:
        "Click the button in the top right corner and follow the registration process.",
    },
    {
      question: "Do you carry organic or gluten-free products?",
      answer:
        "Go to the login page, click 'Forgot Password' and follow the instructions.",
    },
    {
      question: "Can I place a special order for a product you don’t usually carry?",
      answer: "Navigate to your profile and click on 'Order History'.",
    },
    {
      question: "Do you offer curbside pickup?",
      answer: "Navigate to your profile and click on 'Order History'.",
    },
    {
      question: "Can I use multiple coupons in one transaction?",
      answer: "Navigate to your profile and click on 'Order History'.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

      <div className="space-y-4  ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" bg-white border border-gray-100 rounded-md overflow-hidden text-gray-600"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-3 bg-white hover:bg-gray-200 flex justify-between items-center font-semibold"
            >
              {faq.question}
              <span className="ml-2 text-xl">
                {openIndex === index ? "−" : <IoMdArrowDropdown />}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 bg-white text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
