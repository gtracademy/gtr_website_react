import React from "react";
import { FaHeart, FaUserTie, FaMoneyBillWave, FaClock, FaArrowRight } from "react-icons/fa";
// import { MdOutlineFileDownload } from "react-icons/md";

const CourseSidebar = () => {
  return (
    <>
      
      <div className="bg-[#0B3954] text-white p-6 mt-0 rounded-lg shadow-xl">
        <h3 className="text-2xl font-bold mb-4 text-white">SAP EWM S/4 HANA</h3>
        <div className="space-y-4 text-gray-200">
          <div className="flex items-center space-x-3">
            <FaUserTie className="text-red-500 text-xl" />
            <p className="text-lg">Instructor: <span className="font-semibold">Suresh Reddy</span></p>
          </div>
          <div className="flex items-center space-x-3">
            <FaMoneyBillWave className="text-red-500 text-xl" />
            <p className="text-lg">Course Fee: <span className="font-semibold">₹60,000</span></p>
          </div>
          <div className="flex items-center space-x-3">
            <FaClock className="text-red-500 text-xl" />
            <p className="text-lg">Duration: <span className="font-semibold">6 months</span></p>
          </div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <button className="flex-1 py-2 items-center bg-[#C81D25] text-white rounded-lg font-bold text-lg hover:bg-red-700 transition">
            Enroll Now
          </button>
          <button className="flex-1 bg-white border border-gray-600 text-[#364D9D] rounded-lg font-semibold text-lg hover:bg-gray-200 transition">
            📄 Brochure 
          </button>
        </div>
      </div>

      
      <div className="bg-white mt-4 border border-gray-300 p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-red-600 text-xl">
            <FaHeart />
          </span>
          <h3 className="text-lg font-bold text-gray-800">Talk to an Expert</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Have questions or need guidance? Our experts are here to help you make the right choice.
        </p>
        <button className="w-full bg-[#C81D25] text-white px-5 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-red-700 transition">
          <span>Request a callback</span>
          <FaArrowRight />
        </button>
      </div>
    </>
  );
};

export default CourseSidebar;