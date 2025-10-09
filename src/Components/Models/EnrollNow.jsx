import React from "react";
import { FaChalkboardTeacher, FaVideo,FaTimes } from "react-icons/fa"; // React Icons

const EnrollNow = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-1000 px-4">
      <div className="bg-[#0B3954] rounded-lg shadow-lg w-full max-w-3xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-gray-300"
        >
          <FaTimes />
        </button>

        {/* Title */}
        <h2 className="text-center text-white text-xl md:text-2xl font-bold mb-6">
          SAP ABAP S/4 HANA
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Live/Online Classes Card */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <FaChalkboardTeacher className="text-4xl text-[#0B3954] mb-2" />
            <h3 className="text-lg font-semibold mb-2">Live/Online Classes</h3>
            <div className="flex flex-col items-center">
              <span className="text-gray-400 line-through text-lg">₹60,000</span>
              <span className="text-red-600 text-2xl font-bold">₹29,500</span>
            </div>
            <p className="text-sm text-gray-700 mt-2 text-center">
              ₹29,500 now and ₹30,000 post-placement after 3 months (GST exclusive).
            </p>
            <button className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition">
              Enroll Now
            </button>
          </div>

          {/* Recorded Classes Card */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <FaVideo className="text-4xl text-[#0B3954] mb-2" />
            <h3 className="text-lg font-semibold mb-2">Recorded 12 Months Access</h3>
            <div className="flex flex-col items-center">
              <span className="text-gray-400 line-through text-lg">₹60,000</span>
              <span className="text-red-600 text-2xl font-bold">₹29,500</span>
            </div>
            <p className="text-sm text-gray-700 mt-2 text-center">
              SAP ABAP S/4 HANA classes with unlimited mocks, a comprehensive
              question bank, and personalized doubt solving.
            </p>
            <button className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition">
              Enroll Now
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-white text-center text-xs mt-4">
          By Proceeding, I agree to T&C and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default EnrollNow;
