import React, { useState } from "react";
import {
  FaHeart,
  FaMoneyBillWave,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import BookFreeCall from "../Models/BookFreeCall";
import { useParams } from "react-router-dom";

const CourseSidebar = () => {
  const { slug } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    slug: slug || "",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry submitted:", formData);
    // ✅ You can now send `formData` to your backend API
    // Example:
    // await axios.post("/api/enquiry", formData);
  };

  return (
    <>
      {/* Course Info Card */}
      <div className="bg-[#0B3954] text-white p-6 mt-0 rounded-lg shadow-xl">
        <h3 className="text-2xl font-bold mb-4 text-white">SAP EWM S/4 HANA</h3>
        <div className="space-y-4 text-gray-200">
          <div className="flex items-center space-x-3">
            <FaMoneyBillWave className="text-red-500 text-xl" />
            <p className="text-lg">
              Course Fee: <span className="font-semibold">₹60,000</span>
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <FaClock className="text-red-500 text-xl" />
            <p className="text-lg">
              Duration: <span className="font-semibold">6 months</span>
            </p>
          </div>
        </div>
      </div>

      {/* Enquiry Form */}
      <div className="text-black mt-4 border border-gray-300 p-6 rounded-lg shadow-md">
        <h3 className="pb-3 font-semibold text-lg">Enquiry Now</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex">
            <select className="border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none">
              <option value="+91">+91</option>
              <option value="+1">+1</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-r-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* ✅ Hidden slug field */}
          <input type="hidden" name="slug" value={formData.slug} />

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition cursor-pointer"
          >
            Submit →
          </button>
        </form>
      </div>

      {/* Talk to Expert */}
      <div className="bg-white mt-4 border border-gray-300 p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-red-600 text-xl">
            <FaHeart />
          </span>
          <h3 className="text-lg font-bold text-gray-800">Talk to an Expert</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Have questions or need guidance? Our experts are here to help you make
          the right choice.
        </p>
        <button
          className="w-full bg-[#C81D25] text-white px-5 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-red-700 transition"
          onClick={openModal}
        >
          <span>Request a callback</span>
          <FaArrowRight />
        </button>
      </div>

      <BookFreeCall isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default CourseSidebar;
