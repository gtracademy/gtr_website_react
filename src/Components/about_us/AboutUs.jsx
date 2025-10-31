import React, { useState } from "react";
import {
  FaUsers,
  FaBriefcase,
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaCertificate,
  FaGlobe,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";

// 🖼️ Replace with your assets
import corpImg from "../../assets/aboutusimg1.png";
import heroImg from "../../assets/About us.png";
import student1 from "../../assets/aboutusimg4.jpg";

const statItems = [
  { icon: <FaUsers />, value: "10,000+", label: "Students Trained" },
  { icon: <FaBriefcase />, value: "1,200+", label: " Placements" },
  { icon: <FaChalkboardTeacher />, value: "10+ yrs", label: "Industry Trainers" },
  { icon: <FaProjectDiagram />, value: "Live Projects", label: "Hands-on Learning" },
];

const testimonials = [
  {
    quote:
      "GTR Academy changed my career! After completing their Salesforce course, I landed my dream job within 3 months.",
    name: "Rohit Sharma",
    role: "Salesforce Developer at Tech Mahindra",
    img: student1,
  },
  {
    quote:
      "The trainers are exceptional. They not only teach but mentor you personally until you succeed.",
    name: "Priya Menon",
    role: "Data Analyst at Deloitte",
    img: student1,
  },
  {
    quote:
      "Our corporate team improved productivity by 30% after GTR’s IT & Communication workshop.",
    name: "HR Head",
    role: "GlobalTech Solutions",
    img: student1,
  },
  {
    quote:
      "The practical exposure at GTR helped me confidently switch my career into Cloud Computing.",
    name: "Amit Verma",
    role: "Cloud Engineer at Wipro",
    img: student1,
  },
  {
    quote:
      "Their placement support is truly hands-on — mock interviews, resume prep, and direct referrals!",
    name: "Sneha Gupta",
    role: "Data Scientist at Accenture",
    img: student1,
  },
];

export default function AboutUs() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-inter">
      {/* HERO SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 lg:px-8">
          {/* Text */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              <FaGlobe /> Empowering Careers
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Empowering Careers.{" "}
              <span className="text-blue-600">Building Futures.</span>
            </h1>

            <p className="text-gray-600 leading-relaxed max-w-xl">
              At GTR Academy, we bridge the gap between education and industry
              by offering placement-focused training that prepares you for
              real-world success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/all-courses"
                className="inline-flex justify-center items-center px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
              >
                View Programs
              </a>
              <a
                href="/contact"
                className="inline-flex justify-center items-center px-6 py-3 border border-gray-200 bg-white rounded-md shadow-sm hover:bg-gray-50 transition"
              >
                Contact Us
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {statItems.map((s, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-between bg-white py-5 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="p-3 bg-blue-50 rounded-full text-blue-600 text-xl">
                    {s.icon}
                  </div>
                  <div className="text-xl font-bold mt-2">{s.value}</div>
                  <div className="text-sm text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={heroImg}
              alt="GTR Academy"
              className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* MISSION & WHY CHOOSE US */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold flex items-center gap-2 mb-4">
              <AiOutlineClockCircle /> Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To create a new generation of skilled professionals ready to lead
              the digital world. We deliver hands-on learning, mentorship, and
              career support that transforms knowledge into opportunity.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="lg:col-span-2 bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaUsers />,
                  title: "10,000+ Students",
                  desc: "Trusted by learners and professionals worldwide.",
                },
                {
                  icon: <FaBriefcase />,
                  title: "1,200+ Placements",
                  desc: "Supported by top recruiters and placement partners.",
                },
                {
                  icon: <FaChalkboardTeacher />,
                  title: "Industry Experts",
                  desc: "Learn from certified and experienced trainers.",
                },
                {
                  icon: <FaCertificate />,
                  title: "Certification & Support",
                  desc: "Recognized credentials and dedicated career guidance.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600 text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{item.title}</div>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORPORATE TRAINING */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <h3 className="text-3xl font-bold">Corporate Training Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              We design customized employee training programs in Salesforce,
              ERP, Cloud, Data Analytics, and Soft Skills — each focusing on
              practical learning and measurable ROI.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <FaProjectDiagram className="text-blue-600 mt-1" /> Leadership &
                Management Development
              </li>
              <li className="flex items-start gap-3">
                <FaChalkboardTeacher className="text-blue-600 mt-1" /> Salesforce
                & CRM Systems Training
              </li>
              <li className="flex items-start gap-3">
                <FaBriefcase className="text-blue-600 mt-1" /> ERP, Cloud & Data
                Analytics Programs
              </li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={corpImg}
              alt="Corporate training"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS WITH PAGINATION */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-10">Success Stories</h3>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {currentTestimonials.map((t, index) => (
              <article
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 leading-relaxed">“{t.quote}”</p>
              </article>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-3 mt-10">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md border transition ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white hover:bg-blue-100 text-blue-600"
              }`}
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 rounded-md text-sm font-semibold ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white border text-gray-600 hover:bg-blue-50"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md border transition ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white hover:bg-blue-100 text-blue-600"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="font-semibold text-lg mb-3">Get in touch</h4>
            <p className="text-gray-600 flex items-center gap-2">
              <FaPhoneAlt /> +91 96505 18049
            </p>
            <p className="text-gray-600 flex items-center gap-2 mt-1">
              <FaEnvelope /> connect@gtracademy.org
            </p>
          </div>

          <div className="md:col-span-2">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full name"
                className="p-3 border rounded-md focus:outline-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-md focus:outline-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="p-3 border rounded-md focus:outline-blue-500"
              />
              <select className="p-3 border rounded-md focus:outline-blue-500">
                <option>Interested Program</option>
                <option>Salesforce</option>
                <option>Data Science</option>
                <option>Cloud</option>
              </select>
              <textarea
                className="p-3 border rounded-md sm:col-span-2 focus:outline-blue-500"
                placeholder="Message (optional)"
                rows="3"
              />
              <button className="sm:col-span-2 px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                Send
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
