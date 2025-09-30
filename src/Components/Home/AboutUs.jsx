// src/components/AboutUs.jsx
import React from "react";
import aboutus from "../../assets/About us.webp"

const AboutUs = () => {
  return (
    <section className="flex flex-col md:flex-row bg-white  rounded-xl overflow-hidden my-10">
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full">
        <img
          src={aboutus}
          alt="GTR Academy"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Side - Text */}
      <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
        <h3 className="text-blue-700 text-lg font-semibold mb-2">About Us</h3>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">GTR Academy</h1>
        <p className="text-gray-700 mb-4 leading-relaxed">
          In today's fast-paced world, staying ahead requires not just knowledge
          but mastery. GTR Academy stands at the forefront of professional
          development, delivering an innovative Learning Management System (LMS)
          platform designed for those who aspire to excel in their careers.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          <span className="font-semibold">Our Vision:</span> At GTR Academy, we
          are committed to transforming the learning landscape with cutting-edge
          technology and superior educational methodologies. Our focus is to
          cultivate a new generation of professionals who are not just
          job-ready but future-ready.
        </p>
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded transition duration-300 w-fit">
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;