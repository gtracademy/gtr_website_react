import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // ✅ for slug
import { FaUserTie, FaMoneyBillAlt } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { BsDownload } from "react-icons/bs";
import intructorImg from "../../assets/image.png";
import MobileBannerImg from "../../assets/Blue.webp";
import EnrollNow from "../Models/EnrollNow";
import { useSearch } from "../ContextApi/SearchContext";

// import { BsDownload, BsFilePdf, BsYoutube } from "react-icons/bs";

import { SiYoutubemusic } from "react-icons/si";
import BrochureForm from "../Models/BrochureForm";

const CourseBanner = () => {
  const { slug } = useParams(); // ✅ get slug from URL
  const { courses } = useSearch(); // ✅ get all courses from context

  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpens, setModalOpens] = useState(false);

  const [course, setCourse] = useState(null);

  // ✅ find the course by its slug or URL
  useEffect(() => {
    if (courses && courses.length > 0) {
      const matched = courses.find(
        (c) => c.courseUrl?.toLowerCase() === slug.toLowerCase()
      );
      setCourse(matched);
      // console.log("Matched course:", matched);
    }
  }, [courses, slug]);

  if (!courses || courses.length === 0) {
    return <p>Loading course details...</p>; // while API fetch is in progress
  }

  return (
    <section
      id="course-banner"
      className="bg-white relative overflow-hidden mt-3"
    >
      {/* Mobile Background Image */}
      <div
        className="absolute inset-0 md:hidden bg-center bg-cover opacity-15 "
        style={{ backgroundImage: `url(${MobileBannerImg})` }}
      ></div>

      <div className="relative flex flex-col md:flex-row items-center gap-8">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 mb-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
            <span className="text-[#05254a]">
              {course ? course.courseTitle : "Course Name Coming Soon"}
            </span>
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed text-lg pl-1">
            {course?.courseDescription ||
              "Course description will be available soon."}
          </p>

          {/* Instructor + Fee + Icons */}
          <div className="flex flex-col space-y-6 mb-6 pl-1">
            <div className="flex items-center text-lg text-gray-800 font-medium">
              <FaUserTie className="text-red-600 text-2xl mr-2" />
              <span>
                Instructor:{" "}
                <span className="font-bold">
                  {course?.mentor?.name || "Instructor Name Coming Soon"}
                </span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full max-w-lg">
              <div className="flex items-center text-lg text-gray-800 font-medium">
                <FaMoneyBillAlt className="text-red-600 text-2xl mr-2" />
                <span>
                  Course Fee:
                  <span className="text-black font-extrabold text-2xl ml-1">
                    ₹{course?.coursePrice.offline || "Price Not Available"}
                  </span>
                </span>
              </div>

              <div className="flex items-center space-x-3 text-2xl">
                <CiShare2 className="text-red-600 cursor-pointer hover:scale-110 transition" />
                <button className="flex items-center border-[brown] border gap-2 px-3 py-1 rounded-2xl text-[#a9151c] font-bold text-lg cursor-pointer hover:scale-110 transition-all">
                  <span>
                    <SiYoutubemusic />
                  </span>
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
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 border-2 cursor-pointer border-gray-300 text-gray-800 rounded-md font-semibold text-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-all transform hover:scale-105 shadow-md"
              onClick={() => setModalOpens(true)}
            >
              Download Brochure <BsDownload className="text-red-600 text-xl" />
            </a>
          </div>
        </div>

        {/* Instructor Image Section */}
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
      <BrochureForm
        isOpen={isModalOpens}
        onClose={() => setModalOpens(false)}
        brochureUrl={course?.courseBrochure || "#"}
      />
    </section>
  );
};

export default CourseBanner;
