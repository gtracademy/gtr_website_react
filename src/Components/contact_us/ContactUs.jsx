import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const ContactUs = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Reach Out Today</h2>
        <p className="text-sm md:text-base max-w-2xl mx-auto">
          Enhancing Professional Growth — As industries evolve rapidly, staying
          relevant is crucial. We guide you through skill transformation that
          leads to measurable progress in your career.
        </p>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 py-14 px-6 md:px-12">
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Reach Us
          </h3>
          ROOTBIX infotech private limited Ground floor, DLF Cyber City, DLF Phase 3, Gurugram, Haryana 122002

          {/* Address Cards */}
          <div className="space-y-5">
            <div className="bg-blue-50 border-l-4 border-blue-700 p-5 rounded-xl shadow-sm">
              <h4 className="font-bold mb-2">Head Office - India</h4>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-700 mt-1" />
                <p>
                  324 and 426A, Orbit Plaza, CR - Ghaziabad Uttar Pradesh 201016
                </p>
              </div>
              <p className="flex items-center gap-2 mt-2">
                <FaPhoneAlt className="text-blue-700" /> +91 9220248214, +91
                9220248215, +91 9220248216, +91 9220248217
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaEnvelope className="text-blue-700" /> connect@gtracademy.org
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-700 p-5 rounded-xl shadow-sm">
              <h4 className="font-bold mb-2">Bangalore Office</h4>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-700 mt-1" />
                <p>
                  No 47, Vinayaka Layout off to BIEC road, Behind BIEC,
                  Bangalore-560107
                </p>
              </div>
              <p className="flex items-center gap-2 mt-2">
                <FaPhoneAlt className="text-blue-700" /> +91 9220248214, +91
                9220248215
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaEnvelope className="text-blue-700" /> connect@gtracademy.org
              </p>
            </div>

              <div className="bg-blue-50 border-l-4 border-blue-700 p-5 rounded-xl shadow-sm">
              <h4 className="font-bold mb-2">Gurugram Office - India</h4>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-700 mt-1" />
                <p>
                  ROOTBIX infotech private limited Ground floor, DLF Cyber City, DLF Phase 3, Gurugram, Haryana 122002
                </p>
              </div>
              <p className="flex items-center gap-2 mt-2">
                <FaPhoneAlt className="text-blue-700" /> +91 9220248214, +91
                9220248215, +91 9220248216, +91 9220248217
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaEnvelope className="text-blue-700" /> connect@gtracademy.org
              </p>
            </div>


          </div>

          {/* Socials */}
          <div className="mt-6">
            <p className="font-semibold text-gray-700 mb-2">
              Stay Connected with Us
            </p>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-blue-700 transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-blue-700 transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="hover:text-blue-700 transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-blue-700 transition">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            Have Questions?
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Request a call from our executive.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none">
              <option>Select Course</option>
              <option>SAP VIM</option>
              <option>SAP BASIS</option>
              <option>SAP BTP</option>
              <option>Power BI with AI</option>
              <option>Data Science</option>
            </select>
            <textarea
              rows="3"
              placeholder="Enter your query"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-semibold py-2 rounded-lg hover:bg-blue-800 flex items-center justify-center gap-2 transition"
            >
              Submit <BsArrowRight />
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-10">
        <iframe
          title="GTR Academy Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.609926041949!2d77.4347409!3d28.5520946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefa4b1b0d9f1%3A0x7f6f74e5703b53e7!2sOrbit%20Plaza%2C%20Crossings%20Republic!5e0!3m2!1sen!2sin!4v1698765432109"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          className="border-none"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
