import React, { useState } from "react";
import { FaUserTie, FaMoneyBillAlt } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import intructorImg from "../../assets/image.png"; // Instructor image
// import backgroundimg from "../../assets/background.jpg"; // Background image
import EnrollNow from "../Models/EnrollNow";
import { BsDownload } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { coursesData } from "../data/CourseData";
import MobileBannerImg from "../../assets/Blue.webp"

const CourseBanner = () => {
  const { slug } = useParams(); // get slug from URL
  const [isModalOpen, setModalOpen] = useState(false);

  const course = coursesData.find((c) => c.slug === slug);

  return (
    <section
      id="course-banner"
      className="bg-white relative overflow-hidden"
    >
      {/* Mobile Background Image */}
      <div
        className="absolute inset-0 md:hidden bg-center bg-cover opacity-15 z-0"
        style={{ backgroundImage: `url(${MobileBannerImg })` }}
      ></div>

      {/* Optional Dark Overlay for readability */}

      {/* Main Content */}
      <div className="relative z-10  flex flex-col md:flex-row items-center gap-8 ">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 mb-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
            <span className="text-[#05254a]">
              {course ? course.title : "Course Name Coming Soon"}
            </span>
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            At GTR Academy, our SAP ABAP course is designed for aspiring SAP
            developers and IT professionals looking to gain real-time SAP ABAP
            training. Delivered online with a certificate, this course covers
            everything from basic ABAP syntax to advanced topics like OData,
            ALV, BDC, and module pool programming.
          </p>

          {/* Instructor + Fee + Icons */}
          <div className="flex flex-col space-y-6 mb-6">
            {/* Instructor */}
            <div className="flex items-center text-lg text-gray-800 font-medium">
              <FaUserTie className="text-red-600 text-2xl mr-2" />
              <span>
                Instructor: <span className="font-bold">Suresh Reddy</span>
              </span>
            </div>

            {/* Course Fee + Share */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full max-w-lg">
              {/* Course Fee */}
              <div className="flex items-center text-lg text-gray-800 font-medium">
                <FaMoneyBillAlt className="text-red-600 text-2xl mr-2" />
                <span>
                  Course Fee:
                  <span className="text-black font-extrabold text-2xl ml-1">
                    ₹60,000
                  </span>
                </span>
              </div>
              {/* Icons */}
              <div className="flex items-center space-x-3 text-2xl">
                <CiShare2 className="text-red-600 cursor-pointer hover:scale-110 transition" />
                <button className="flex items-center border-[brown] border px-3 py-1 rounded-2xl text-[#a9151c] font-bold text-lg cursor-pointer hover:scale-110 transition-all">
                  Watch Video
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full">
            <button
              className="w-full py-4 bg-[#C81D25] text-white rounded-md font-bold text-lg hover:bg-[#a9151c] transition-all transform hover:scale-105 shadow-md"
              onClick={() => setModalOpen(true)}
            >
              Enroll Now
            </button>
            <button className="w-full py-4 border-2 border-gray-300 text-gray-800 rounded-md font-semibold text-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-all transform hover:scale-105 shadow-md">
              Download Brochure <BsDownload className="text-red-600 text-xl" />
            </button>
          </div>
        </div>

        {/* Instructor Image Section - hidden on mobile */}
        <div className="hidden md:flex flex-1 justify-center relative">
          <img
            src={intructorImg}
            alt="Instructor"
            className="rounded-xl w-full max-w-[500px] h-auto object-cover"
          />
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-700 via-gray-400 to-[#0B3954]"></div>

      <EnrollNow isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default CourseBanner;
