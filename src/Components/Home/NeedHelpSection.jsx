// src/components/NeedHelpSection.jsx
import React from 'react';

const NeedHelpSection = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="w-full">
        <h2 className="text-4xl font-serif font-bold text-red-700 mb-6">
          Need help ?
        </h2>
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-stretch">
          {/* Image Section */}
          <div className="md:w-1/3 flex-shrink-0">
            <img
              src="https://img.freepik.com/free-photo/businesswoman-call-center-office_1098-984.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Customer Support Agent"
              className="w-full h-[35vh] object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-2/3 bg-gradient-to-r from-[#136494] to-[#0B3954] p-8 flex flex-col justify-center items-center text-center">
            <p className="text-white text-lg md:text-xl mb-6">
              Share your details, and we'll reach out at a time that works best for you.
            </p>
            <button className="bg-[#C81D25] hover:bg-red-700 cursor-pointer text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
              Request a callback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedHelpSection;