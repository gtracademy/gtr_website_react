import React from "react";
import { FaChalkboardTeacher, FaVideo, FaTimes } from "react-icons/fa"; // React Icons

const EnrollNow = ({
  isOpen,
  onClose,
  coursePricing,
  courseTitle,
  razorpayLink,
}) => {
  const { price, discount } = coursePricing || {};
  const { online, offline } = razorpayLink || {};

  if (!isOpen) return null;

  // ✅ Function to handle button click and open Razorpay page
  const handleEnrollClick = (link) => {
    if (link) {
      window.open(link, "_blank"); // opens Razorpay payment page in new tab
    } else {
      alert("Payment link not available.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000] px-4">
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
          {courseTitle}
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Live/Online Classes Card */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <FaChalkboardTeacher className="text-4xl text-[#0B3954] mb-2" />
            <h3 className="text-lg font-semibold mb-2">Live/Online Classes</h3>
            <div className="flex flex-col items-center">
              <span className="text-gray-400 line-through text-lg">
                ₹{price?.online}
              </span>
              <span className="text-red-600 text-2xl font-bold">
                ₹{discount?.online}
              </span>
            </div>
            <p className="text-sm text-gray-700 mt-2 text-center">
              ₹{discount?.online} now and ₹{discount?.online} post-placement
              after 3 months (GST exclusive).
            </p>
            <button
              onClick={() => handleEnrollClick(online)} // ✅ open online link
              className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Enroll Now
            </button>
          </div>

          {/* Recorded Classes Card */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <FaVideo className="text-4xl text-[#0B3954] mb-2" />
            <h3 className="text-lg font-semibold mb-2">
              Recorded 12 Months Access
            </h3>
            <div className="flex flex-col items-center">
              <span className="text-gray-400 line-through text-lg">
                ₹{price?.offline}
              </span>
              <span className="text-red-600 text-2xl font-bold">
                ₹{discount?.offline}
              </span>
            </div>
            <p className="text-sm text-gray-700 mt-2 text-center">
              {courseTitle} classes with unlimited mocks, a comprehensive
              question bank, and personalized doubt solving.
            </p>
            <button
              onClick={() => handleEnrollClick(offline)} // ✅ open offline link
              className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
            >
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
