import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BrochureForm = ({ isOpen = true, onClose, brochureUrl }) => {

  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    city: "",
    query: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    // ✅ Show toast instead of alert
    toast.success("Form submitted successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // ✅ Open brochure
    if (brochureUrl && brochureUrl !== "#") {
      window.open(brochureUrl, "_blank", "noopener,noreferrer");
    }

    // ✅ Close modal after a short delay so toast shows
    setTimeout(() => {
      onClose();
    }, 1000); 
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
      <div className="relative bg-white rounded-2xl w-full max-w-md shadow-2xl border border-gray-100 overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="bg-[#004C7D] text-white text-center py-4 font-semibold text-lg">
          Get in Touch
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-200 hover:text-white text-xl transition"
        >
          <AiOutlineClose />
        </button>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 p-6 bg-gradient-to-b from-white to-[#f9fbfc]"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004C7D] transition-all"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004C7D] transition-all"
            required
          />
          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            value={formData.number}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004C7D] transition-all"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="Enter City"
            value={formData.city}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004C7D] transition-all"
            required
          />
          <textarea
            name="query"
            placeholder="Any Query"
            value={formData.query}
            onChange={handleChange}
            rows="3"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#004C7D] transition-all resize-none"
          />

          <button
            type="submit"
            className="w-full bg-[#004C7D] text-white py-2 rounded-lg font-semibold text-lg hover:bg-[#00385c] transition-all shadow-md hover:shadow-lg"
          >
            Submit & Download
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BrochureForm;
