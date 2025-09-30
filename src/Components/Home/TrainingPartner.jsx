// src/components/TrainingPartner.jsx
import React from "react";

const TrainingPartner = () => {
  return (
    <div className="bg-gradient-to-r from-white via-gray-200 to-[#0B3954]">
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-[#0B3954] via-gray-700 to-red-800 h-1 w-full mb-2"></div>

      <div className="py-4 px-3 sm:px-4 lg:px-6">
        {/* Heading */}
        <div className="mb-2">
          <h2 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-[#0B3954] text-center md:text-left">
            Approved Training Partner
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
          {/* Left Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
              Approved Training partner under the
              <br />
              <span className="text-red-700 font-medium">
                scheme for market-led fee-based services
              </span>
              <br />
              implemented by Nasscom
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src="/tainingCertificate.png"
              alt="Certificate of Achievement"
              className="w-full max-w-[250px] sm:max-w-[350px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPartner;
