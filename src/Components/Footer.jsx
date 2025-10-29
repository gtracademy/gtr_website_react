import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaAngleRight,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const allHeaders = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Blogs", path: "/blogs" },
    { name: "FAQ", path: "/faq" },
    { name: "Faculty", path: "/faculty" },
  ];

  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-[1500px] mx-auto">
        {/* Main Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-x-8 pb-10 border-b border-gray-700">
          {/* Column 1: GTR Academy Info */}
          <div>
            <img
              src="/GTR Logo.webp"
              alt="GTR Academy Logo"
              className="h-15 mb-6"
            />
            <p className="text-sm leading-relaxed mb-6">
              Welcome to{" "}
              <span className="text-[#364D9D] font-bold text-lg">
                GTR Academy
              </span>
              , your ultimate destination for top-notch online training and
              education. Since 2021, we have empowered 10,000+ students and
              facilitated 9200 placements, helping you step up, learn today, and
              lead tomorrow!
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-300"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-300"
              >
                <FaTwitter className="text-lg" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-300"
              >
                <FaLinkedinIn className="text-lg" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-300"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors duration-300"
              >
                <FaYoutube className="text-lg" />
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Useful Links
            </h3>
            <ul className="space-y-3">
              {allHeaders.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="flex items-center text-gray-400 hover:text-red-600 transition-colors duration-300"
                  >
                    <FaAngleRight className="mr-2 text-red-600 text-sm" />{" "}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Center */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Our Center
            </h3>
            <ul className="space-y-3">
              {["Delhi NCR", "Bangalore"].map((center, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center text-gray-400 hover:text-red-600 transition-colors duration-300"
                  >
                    <FaAngleRight className="mr-2 text-red-600 text-sm" />{" "}
                    {center}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <p className="flex items-start text-gray-400">
                <FaMapMarkerAlt className="mr-3 text-red-600 mt-1 flex-shrink-0" />
                <span>
                  23, 2nd Cross, Near Maimad, MHR Layout, Bangalore North,{" "}
                  <br />
                  Karnataka, India, 560080
                </span>
              </p>
              <p className="flex items-center text-gray-400">
                <FaPhoneAlt className="mr-3 text-red-600" />
                <span>+91 9650518049</span>
              </p>
              <p className="flex items-center text-gray-400">
                <FaEnvelope className="mr-3 text-red-600" />
                <span>
            
                  <a
                    href="mailto:connect@gtracademy.org"
                    className="hover:underline hover:text-blue-300 transition duration-200" 
                  >
                    connect@gtracademy.org
                  </a>
                </span>
              </p>

              <div className="flex space-x-3 mt-4">
                <a href="#">
                  <img
                    src="/google-play-store.webp"
                    alt="Get it on Google Play"
                    className="h-10"
                  />
                </a>
                <a href="#">
                  <img
                    src="/app-store-badge.webp"
                    alt="Download on the App Store"
                    className="h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 space-y-4 md:space-y-0 text-sm text-gray-500">
          <div className="text-center md:text-left">
            <p>
              Copyright 2025,{" "}
              <span className="text-green-600 font-semibold">GTR Academy</span>.
              All Rights Reserved.
            </p>
            <p className="mt-4">
              (Enterprise of{" "}
              <span className="text-orange-400 font-semibold">
                ROOTBIX INFOTECH
              </span>{" "}
              Pvt. Ltd.)
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Refund policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Accessibility Statement
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Cookies Setting
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-blue-800 p-3 rounded-xl shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
