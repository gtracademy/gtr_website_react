import React from "react";
import { FaCheckCircle } from "react-icons/fa";
// import hireHero from "../../assets/hire-hero.jpg"; // replace with your image

import hirefromus from "../../assets/hirefromusimg.webp"; // replace with your image
import teampec from "../../assets/careerImg-3.jpeg"
import StudentsWorkSection from "../Home/StudentsWorkSection";

const HireFromUs = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Find Your Next Great Hire Today
          </h1>
          <p className="text-gray-600">
            Access industry ready talent trained by top experts at zero
            recruitment cost.
          </p>
          <button className="bg-[#ffb200] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#e29e00] transition-all">
            Start Hiring Now
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src={hirefromus}
            alt="Hiring professionals"
            className="rounded-md shadow-lg w-[85%]"
          />
        </div>
      </section>

      {/* Talent Features */}
      <section className="bg-white py-12 px-6 lg:px-16 grid md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center mb-3">
            <FaCheckCircle className="text-green-500 text-xl mr-2" />
            <h3 className="font-bold text-lg">Industry-Ready Talent</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Our candidates are rigorously trained in cutting edge technologies
            and real-world problem solving, ensuring they’re ready to contribute
            from Day 1.
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center mb-3">
            <FaCheckCircle className="text-green-500 text-xl mr-2" />
            <h3 className="font-bold text-lg">Custom Talent Matching</h3>
          </div>
          <p className="text-gray-600 text-sm">
            We match candidates based on your specific job role, skills, and
            organizational fit.
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center mb-3">
            <FaCheckCircle className="text-green-500 text-xl mr-2" />
            <h3 className="font-bold text-lg">Dedicated Hiring Support</h3>
          </div>
          <p className="text-gray-600 text-sm">
            A dedicated account manager helps streamline your hiring process
            with fast turnarounds and personalized support.
          </p>
        </div>
      </section>

      {/* Partner Companies */}
  

      <section>
        <StudentsWorkSection/>
      </section>



      {/* Testimonials */}
      <section className="bg-[#022859] text-white py-16 px-6 lg:px-20 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Find Your Next Great Hire Today
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Ananya Sharma",
              text: "GTR Academy made it easy to close multiple tech roles with speed and precision. Their candidates came fully prepared and ready to contribute from day one.",
            },
            {
              name: "Raghav Mehta",
              text: "From sharing profiles to final interviews, the entire hiring process with GTR Academy was fast, efficient, and incredibly well-managed by a proactive team.",
            },
            {
              name: "Priya Das",
              text: "We’ve consistently hired excellent talent through GTR Academy. They understand tech hiring deeply and always deliver strong, job-ready candidates efficiently and reliably.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white text-gray-800 rounded-lg p-6 shadow-md"
            >
              <p className="text-sm mb-4 leading-relaxed">“{item.text}”</p>
              <div className="border-t border-gray-300 pt-2 font-semibold text-gray-900">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold">Meet our dedicated team</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            With a strong belief in innovation, integrity, and teamwork, our
            dedicated team works tirelessly to exceed expectations.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={teampec}
            alt="Our Team"
            className="rounded-md shadow-md w-[80%]"
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 py-16 px-6 lg:px-20">
        <h2 className="text-center text-2xl font-bold mb-12">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg p-8 shadow-sm border">
            <h3 className="font-bold mb-4">We’re Here to Make Hiring Easy</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
              <li>Industry-Ready Talent</li>
              <li>Trained in DSA, Web Dev, Data Analytics, and more.</li>
              <li>Pre-Assessed & Ready</li>
              <li>Interns to Early Professionals</li>
              <li>Zero Recruitment Cost</li>
              <li>No Fees. No hassle. Just great hires.</li>
              <li>Fast Turnaround</li>
            </ul>
          </div>

          <form className="bg-white rounded-lg p-8 shadow-sm border space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Work Email"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Hiring Profile"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-[#022859] text-white py-2 rounded-md font-semibold hover:bg-[#00408c] transition-all"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HireFromUs;
