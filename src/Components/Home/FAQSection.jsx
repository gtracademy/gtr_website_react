import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // For the expand/collapse icon

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null); // Keeping all collapsed by default

  const faqItems = [
    {
      mod: "Module 1",
      question: "What courses does GTR Academy offer?",
      answer:
        "We offer a diverse range of courses in IT and related fields, including SAP modules, Data Science, Python, Advanced Excel, Power BI, and more. Our programs are designed to equip you with the essential skills and knowledge required to excel in today's competitive job market.",
    },
    {
      mod: "Module 2",
      question: "Key Definitions & Concepts",
      answer:
        "This module covers fundamental concepts and essential definitions to build a strong theoretical foundation.",
    },
    {
      mod: "Module 3",
      question: "Industry Use Cases & Implementable Ideas",
      answer:
        "Explore real-world industry applications and develop practical, implementable solutions.",
    },
    {
      mod: "Module 4",
      question: "Hands-on Experience: Creating a Chatbot",
      answer:
        "Gain practical experience by building a functional chatbot from scratch.",
    },
    {
      mod: "Module 5",
      question: "Future Trends & Staying Relevant",
      answer:
        "Understand emerging technologies and strategies to stay competitive in the evolving job market.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative h-[41rem] py-16 px-4 sm:px-6 lg:px-8 bg-[url('/FAQ-bg.png')] bg-contain bg-right w-full bg-no-repeat">
      <div className="w-full relative z-10 flex flex-col lg:flex-row items-center lg:space-x-12">
        {/* Left Section - FAQ Content */}
        <div className="lg:w-1/2 w-full pr-0 lg:pr-10 mb-12 lg:mb-0">
          <h2 className="text-4xl font-extrabold text-[#C81D25] font-serif mb-8">
            Frequently Asked Questions ?
          </h2>

          <div className="bg-white rounded-xl shadow-xl border border-gray-100 divide-y divide-gray-100">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="transition-all duration-300 ease-in-out"
              >
                <button
                  className={`flex justify-between items-center w-full p-5 text-left focus:outline-none ${
                    openIndex === index
                      ? "bg-red-50 text-[#0B3954] font-bold"
                      : "text-gray-800 hover:bg-gray-50"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold">
                    {/* Module only show when answer is hidden */}
                    {openIndex !== index && (
                      <span className="mr-2">{item.mod}:</span>
                    )}
                    {item.question}
                  </span>
                  {openIndex === index ? (
                    <FaChevronUp className="text-red-500 text-xl" />
                  ) : (
                    <FaChevronDown className="text-gray-400 text-xl" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5 pt-0 text-gray-700 leading-relaxed bg-red-50">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
