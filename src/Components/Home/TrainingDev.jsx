import React from "react";
import nasscom from "../../assets/nasscom.webp";
import iso from "../../assets/iso.webp";
import msme from "../../assets/msme.webp";
import rootbix from "../../assets/rootbix.webp";
import dun from "../../assets/dun.webp";
import samgov from "../../assets/sam-gov.webp";

const TrainingDev = () => {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Top Gradient Divider */}
      <div className="bg-gradient-to-r from-[#0B3954] via-gray-700 to-red-800 h-1 w-full mb-12 sm:mb-20"></div>

      <div className="w-full">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
          {/* Left Section - Text and Button */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C81D25] mb-2">
              GTR Academy Training & Development
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl text-[#0B3954] font-bold mb-4 sm:mb-8">
              (Enterprise of ROOTBIX INFOTECH Pvt. Ltd.)
            </h3>
            <p className="text-black text-base sm:text-lg mb-4">
              World-Class Employee Training Solutions
            </p>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-black text-base sm:text-lg mb-6 sm:mb-8">
              <li>Classroom Online Training Options</li>
              <li>Fully Customized, Instructor-Led Programs</li>
              <li>Flexible Scheduling – Learn on Your Own Terms</li>
            </ul>
            <button className="bg-[#C81D25] text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md shadow-md hover:bg-red-700 transition duration-300">
              Request a callback
            </button>
          </div>

          {/* Right Section - Logos */}
          <div className="lg:w-1/3 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {[msme, nasscom, samgov, dun, rootbix, iso].map((logo, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3 sm:p-4 rounded-lg shadow-md flex justify-center items-center h-20 sm:h-24 transform transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={logo}
                    alt={`Logo ${idx + 1}`}
                    className="max-h-full max-w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDev;
