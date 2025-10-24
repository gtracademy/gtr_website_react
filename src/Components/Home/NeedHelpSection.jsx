import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import roundCircleimg from "../../assets/Round Blue.webp";
import needhelpimg from "../../assets/needhelp.png";

const NeedHelpSection = () => {
  return (
    <div className="flex bg-black rounded-4xl m-2 ">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2 h-full">
        <img
          src={needhelpimg}
          alt="Need Help"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-1/2 bg-black text-white p-12 md:p-20 flex flex-col justify-center">
        {/* Background round circles */}
        <img
          src={roundCircleimg}
          alt="Round Design"
          className="absolute top-0 right-0 w-60 opacity-30"
        />
        <img
          src={roundCircleimg}
          alt="Round Design"
          className="absolute bottom-0 left-10 w-60 opacity-30"
        />

        {/* Content */}
        <div className="relative z-10">
          <p className="text-lg text-gray-300 mb-4">
            Share your details, and we'll reach out at a time that works best for you.
          </p>
          <div className="flex items-center gap-3 mb-3">
            <FaPhoneAlt className="text-blue-500" />
            <span className="text-white text-lg">+91 9650518049</span>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <FaEnvelope className="text-blue-500" />
            <span className="text-white text-lg">connect@gtracademy.org</span>
          </div>
          <button className="bg-[#2563eb] hover:bg-[#1e40af] text-white font-medium py-3 px-6 rounded-xl transition-all">
            Request a callback
          </button>
        </div>
      </div>
    </div>
  );
};

export default NeedHelpSection;