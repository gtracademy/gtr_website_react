import React from "react";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import intructorImg from "../../assets/image.png"

const CourseBanner = () => {
  return (
    <section
      id="course-banner"
      className="pt-12 pb-16 px-6 bg-white relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
            <span className="text-[#05254a]">SAP EWM S/4 HANA</span>
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            At GTR Academy, our SAP ABAP course is meticulously designed for aspiring SAP developers and IT professionals seeking real-time, in-depth training. Delivered online with a prestigious certificate, this comprehensive course covers everything from foundational ABAP syntax to advanced topics like OData, ALV, BDC, and intricate module pool programming.
          </p>

          <div className="space-y-4 text-lg">
            <p className="text-gray-800 font-medium">
              <span className="font-bold">Instructor:</span> Suresh Reddy
            </p>
            <p className="text-gray-800 font-medium">
              <span className="font-bold">Course Fee:</span>{" "}
              <span className="text-red-600 font-extrabold text-2xl">₹60,000</span>
            </p>

          </div>

          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 bg-[#C81D25] text-white rounded-full font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg">
              Enroll Now
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-800 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              📄 Download Brochure
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative">
          <img
            src={intructorImg}
            alt="Instructor"
            className="rounded-xl w-full max-w-[500px] h-auto object-cover shadow-2xl"
          />
          <button className="absolute bottom-8 right-8 bg-white shadow-xl flex items-center px-4 py-2 rounded-full text-red-600 font-bold text-lg cursor-pointer hover:scale-110 transition-all">
            ▶ Watch Video
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-red-700 via-gray-400 to-[#0B3954]"></div>
    </section>
  );
};

export default CourseBanner;