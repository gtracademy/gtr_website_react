import React from "react";
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-white py-12 md:py-0">
      <div className="w-full h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 lg:pl-10 lg:pr-0">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-4">
          {/* Heading */}
          <h1 className="text-3xl md:text-[50px] font-bold font-serif leading-snug">
            <span className="text-[#C81D25]">Skills for Every </span> <br />
            <span className="text-[#0B3954]">Milestone in Your Career</span>
          </h1>

          {/* Sub-text */}
          <p className="text-gray-600 max-w-lg mx-auto md:mx-0 text-base md:text-xl">
            Achieve your dreams and shape your future with India’s trusted
            learning destination.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 justify-center md:justify-start mt-8">
            <div className="text-center md:text-left border-l-0 md:border-l-4 md:pl-4 border-[#C81D25]">
              <h3 className="text-2xl font-bold text-[#0C3C78]">10,000+</h3>
              <p className="text-sm text-gray-600">Students Trained</p>
            </div>
            <div className="text-center md:text-left border-l-0 md:border-l-4 md:pl-4 border-[#C81D25]">
              <h3 className="text-2xl font-bold text-[#0C3C78]">251,370+</h3>
              <p className="text-sm text-gray-600">Hours of Training</p>
            </div>
            <div className="text-center md:text-left border-l-0 md:border-l-4 md:pl-4 border-[#C81D25]">
              <h3 className="text-2xl font-bold text-[#0C3C78]">9,200+</h3>
              <p className="text-sm text-gray-600">Facilitated Placements</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-8">
            <button className="bg-[#364D9D] text-white px-18 py-3 rounded-lg font-medium shadow-md hover:bg-[#2a3d80] transition">
              Book a Free Demo
            </button>
            <Link to="/all-courses" className="border border-gray-400 px-18 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
              View all Courses
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-end">
          <img
            src="/Home-hero-bg.png"
            alt="Student"
            className="w-full max-w-sm md:max-w-md lg:max-w-[1000px] h-[90vh] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
