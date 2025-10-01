import React, { useState } from "react";
import { FaHeart, FaShareAlt, FaUserTie, FaMoneyBillAlt } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import intructorImg from "../../assets/image.png";
import EnrollNow from "../Models/EnrollNow";
import { BsDownload } from "react-icons/bs";
const CourseBanner = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <section id="course-banner" className="px-6 bg-white relative">
      {" "}
      <div className="max-w-full mx-auto flex flex-col md:flex-row items-center gap-8">
        {" "}
        {/* Left Side Content */}{" "}
        <div className="ms-10 flex-1">
          {" "}
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
            {" "}
            <span className="text-[#05254a]">SAP EWM S/4 HANA</span>{" "}
          </h2>{" "}
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            {" "}
            At GTR Academy, our SAP ABAP course is designed for aspiring SAP
            developers and IT professionals looking to gain real-time SAP ABAP
            training. Delivered online with a certificate, this course covers
            everything from basic ABAP syntax to advanced topics like OData,
            ALV, BDC, and module pool programming.{" "}
          </p>{" "}
          {/* Instructor + Fee + Icons */}{" "}
          <div className="flex flex-col space-y-6 mb-6">
            {" "}
            {/* Instructor */}{" "}
            <div className="flex items-center text-lg text-gray-800 font-medium">
              {" "}
              <FaUserTie className="text-red-600 text-2xl mr-2" />{" "}
              <span>
                {" "}
                Instructor: <span className="font-bold">Suresh Reddy</span>{" "}
              </span>{" "}
            </div>{" "}
            {/* Course Fee + Wishlist + Share */}{" "}
            <div className="flex items-center gap-14 w-full max-w-lg">
              {" "}
              {/* Course Fee */}{" "}
              <div className="flex items-center text-lg text-gray-800 font-medium">
                {" "}
                <FaMoneyBillAlt className="text-red-600 text-2xl mr-2" />{" "}
                <span>
                  {" "}
                  Course Fee:{" "}
                  <span className="text-black font-extrabold text-2xl ml-1">
                    {" "}
                    ₹60,000{" "}
                  </span>{" "}
                </span>{" "}
              </div>{" "}
              {/* Icons */}{" "}
              <div className="flex items-center space-x-3 text-2xl">
                {" "}
                {/* <FaRegHeart className="text-red-600 cursor-pointer hover:scale-110 transition" /> */}{" "}
                <CiShare2 className="text-red-600 cursor-pointer hover:scale-110 transition" />{" "}
                <button className=" flex items-center border-[brown] border-1 px-3 py-1 rounded-2xl text-[#a9151c] font-bold text-lg cursor-pointer hover:scale-110 hover:origin-left transition-all">
                  {" "}
                  Watch Video{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* Action Buttons */}{" "}
          <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-4">
            {" "}
            <button
              className="justify-center w-full py-4 bg-[#C81D25] text-white rounded-md font-bold text-lg hover:bg-[#a9151c] transition-all transform hover:scale-105 shadow-md"
              onClick={() => setModalOpen(true)}
            >
              {" "}
              Enroll Now{" "}
            </button>{" "}
            <button className="justify-center w-full py-4 border-2 border-gray-300 text-gray-800 rounded-md font-semibold text-lg flex items-center gap-3 hover:bg-gray-100 transition-all transform hover:scale-105 shadow-md">
              {" "}
              Download Brochure <BsDownload className="text-red-600 text-xl" />{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
        {/* Instructor Image Section */}{" "}
        <div className="flex-1 flex justify-center relative">
          {" "}
          <img
            src={intructorImg}
            alt="Instructor"
            className="rounded-xl w-full max-w-[500px] h-auto object-cover"
          />{" "}
        </div>{" "}
      </div>{" "}
      {/* Bottom Gradient Line */}{" "}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-700 via-gray-400 to-[#0B3954]"></div>{" "}
      <EnrollNow isOpen={isModalOpen} onClose={() => setModalOpen(false)} />{" "}
    </section>
  );
};
export default CourseBanner;
