import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookCallModal from "../Models/BookFreeCall";
import MobileBannerImg from "../../assets/Blue.webp";
import desktopbannerimg from "../../assets/banner-1437x549.png";

const Hero = () => {
  const [isModalOpen, setIsModelOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-white py-12 md:py-0 bg-no-repeat bg-cover bg-center md:bg-top-right"
        style={{
          backgroundImage: `url(${desktopbannerimg})`, // ✅ applied imported image here
        }}
      >
        {/* Background Image with reduced opacity (mobile only) */}
        <div
          className="absolute inset-0 md:hidden bg-center bg-cover opacity-20 z-0"
          style={{ backgroundImage: `url(${MobileBannerImg})` }}
        ></div>

        {/* Optional dark overlay for better text readability (optional) */}
        {/* <div className="absolute inset-0 md:hidden bg-black opacity-20 z-0"></div> */}

        <div className="relative z-10 w-full h-auto md:h-[70vh] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:pl-[88px] lg:pr-0">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left space-y-3">
            {/* Heading */}
            <p className="text-4xl sm:text-5xl md:text-[60px] font-bold font-serif leading-snug">
              <span className="text-[#C81D25]">Skills for Every </span> <br />
              <span className="text-[#0B3954]">Milestone in Your Career</span>
            </p>

            {/* Sub-text */}
            {/* <p className="font-lato font-semibold text-base sm:text-lg md:text-[20px] leading-relaxed text-[#2D2D2D] max-w-lg mx-auto md:mx-0">
              Achieve your dreams and shape your future with India’s trusted
              learning destination.
            </p> */}

            {/* Sticker Call Form - Design copy */}
            <div>
              <form className="bg-white p-1 rounded-xl  w-full max-w-[620px] flex items-center gap-2">
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  maxLength={10}
                  pattern="[0-9]*"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, "");
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b3954] focus:border-[#0b3954]"
                />
                <button
                  type="submit"
                  className="bg-[#0b3954] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#052b44] transition-colors"
                >
                  <span className="block md:hidden">Get Call</span>{" "}
                  {/* mobile */}
                  <span className="hidden md:block">
                    Get Immediate Call
                  </span>{" "}
                  {/* desktop */}
                </button>
              </form>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 sm:gap-12 justify-center md:justify-start mt-8">
              <div className="text-center md:text-left border-l-0 md:border-l-4 md:pl-4 border-[#C81D25]">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0C3C78]">
                  10,000+
                </h3>
                <p className="font-lato font-semibold text-sm sm:text-base leading-[26px] text-[#2D2D2D]">
                  Students Trained
                </p>
              </div>
              <div className="text-center md:text-left border-l-0 md:border-l-4 md:pl-4 border-[#C81D25]">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0C3C78]">
                  251,370+
                </h3>
                <p className="font-lato font-semibold text-sm sm:text-base leading-[26px] text-[#2D2D2D]">
                  Hours of Training
                </p>
              </div>
              <div className="text-center md:text-left border-l-0 md:border-l-4 md:pl-4 border-[#C81D25]">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0C3C78]">
                  9,200+
                </h3>
                <p className="font-lato font-semibold text-sm sm:text-base leading-[26px] text-[#2D2D2D]">
                  Facilitated Placements
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start mt-8">
              <button
                className="bg-[#364D9D] text-white px-6 sm:px-18 py-3 rounded-lg font-medium shadow-md hover:bg-[#2a3d80] transition"
                onClick={() => setIsModelOpen(true)}
              >
                Book a Free Demo
              </button>
              <Link
                to="/all-courses"
                className="border border-gray-400 px-6 sm:px-18 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
              >
                View all Courses
              </Link>
            </div>
          </div>
        </div>

        <BookCallModal
          isOpen={isModalOpen}
          onClose={() => setIsModelOpen(false)}
        />
      </section>

      {/* Stats Banner Section (Blue Background) */}
      <section className="bg-gradient-to-r from-[#364d9d] to-[#1e3a8a] py-8 px-4 sm:px-6 text-white">
        <div className="w-full flex flex-col md:flex-row justify-around items-center gap-8 md:gap-10">
          {/* Stat 1 */}
          <div className="text-center md:text-center md:pr-10 md:border-r border-white">
            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400">
              10,000+
            </h3>
            <p className="text-base sm:text-lg font-medium">Students Trained</p>
          </div>

          {/* Stat 2 */}
          <div className="text-center md:text-center md:pr-10 md:border-r border-white">
            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400">
              251,370+
            </h3>
            <p className="text-base sm:text-lg font-medium">
              Hours of Training
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center md:text-center md:pr-10 md:border-r border-white">
            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400">
              9,200+
            </h3>
            <p className="text-base sm:text-lg font-medium">
              Facilitated Placements
            </p>
          </div>

          {/* Description */}
          <div className="text-center md:text-left max-w-md md:pl-10">
            <p className="text-base sm:text font-medium">
              Join thousands of professionals advancing their careers with
              cutting-edge skills in AI, Cloud Computing, Data Science, SAP
              Program and more.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
