// src/components/TrainingPartner.jsx
import React from "react";

const TrainingPartner = () => {
  return (
    <div className="bg-gradient-to-r from-white via-gray-200 to-[#0B3954]">
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-[#0B3954] via-gray-700 to-red-800 h-1 w-full mb-8"></div>
      <div className=" pb-8 ">
        <div className="mt-8">
          <h1 className="text-3xl md:text-[44px] font-serif font-bold text-[#0B3954] mb-4">
            Approved Training Partner
          </h1>
        </div>
        {/* Main Content Area */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
          {/* Left Section - Text */}
          <div className="md:w-1/2 ">
            <p className="text-lg md:text-[30px] text-black leading-relaxed">
              Approved Training partner under the
              <br />
              <span className="text-red-700 font-medium">
                scheme for market-led fee-based services
              </span>
              <br />
              implemented by Nasscom
            </p>
          </div>

          {/* Right Section - Image with Frame */}
          <div className="md:w-1/2 p-1 flex justify-center items-center">
            
              <img
                src="/tainingCertificate.png"
                alt="Certificate of Achievement"
                className="w-full h-120 object-contain"
              />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPartner;
