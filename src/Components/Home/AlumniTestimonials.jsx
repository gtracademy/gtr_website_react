import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaPlay, FaStar } from "react-icons/fa";
import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5";
import alumniIco from "../../assets/alumni_icon.png";

import testimonialImg from "../../assets/Group 21@2x.png";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Shashank Singh",
    text: "GTR Academy has changed my life",
    img: testimonialImg,
    review: {
      person: "Lakshmi",
      company: "Accenture",
      package: "72 LPA",
      stars: 5,
      feedback: `I've started preparing in SAP in Feb 2021, I posted a document on LinkedIn to present my skill and fortunately GTR Academy saw my post and suggest me take it as challenge for 21 days and present your skills. 
      After completion of 21 days I started getting many calls and got offer from top 3 MNC's and finally chose NTT Data.`,
    },
  },
  {
    id: 2,
    name: "Shashank Singh",
    text: "GTR Academy has changed my life",
    img: testimonialImg,
    review: {
      person: "Ravi",
      company: "TCS",
      package: "45 LPA",
      stars: 4,
      feedback:
        "Thanks to GTR Academy, I was able to clear multiple interviews and now working at TCS with great confidence.",
    },
  },
  {
    id: 3,
    name: "Shashank Singh",
    text: "GTR Academy has changed my life",
    img: testimonialImg,
    review: {
      person: "Priya",
      company: "Infosys",
      package: "38 LPA",
      stars: 5,
      feedback:
        "The 21-day challenge transformed my preparation strategy. I recommend this to every aspiring SAP professional!",
    },
  },
];

const AlumniTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section
      id="testimonials"
      className="bg-white relative px-4 sm:px-6 lg:px-8 py-10"
    >
      {/* Title */}
      <div className="mb-6 sm:mb-10">
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={alumniIco}
            alt="alumni icon"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#05254a]">
            Alumni Diaries
          </h2>
        </div>
        <p className="text-red-600 text-base sm:text-lg font-semibold mt-1 sm:mt-2">
          Celebrating Success Together
        </p>
      </div>

      {/* Grid: Swiper + Active Review */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* Left Side: Swiper */}
        <div className="relative w-full">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            spaceBetween={20}
            loop={true}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="testimonial-swiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-500">
                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-86 sm:h-106 md:h-132 object-cover object-top rounded-xl"
                  />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white/70 text-red-600 p-4 sm:p-5 rounded-full hover:scale-110 transition">
                      <FaPlay size={20} sm={24} />
                    </button>
                  </div>

                  {/* Gradient + Text */}
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent text-center p-2 sm:p-3">
                    <p className="text-yellow-400 font-semibold text-xs sm:text-sm italic">
                      “{item.text}”
                    </p>
                    <h3 className="text-white text-sm sm:text-lg font-bold">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div
            onClick={() => swiperRef.current?.slidePrev()}
            className="cursor-pointer absolute -left-2 sm:-left-4 md:-left-10 top-1/2 z-10 transform -translate-y-1/2"
          >
            <div className="text-lg sm:text-xl p-1 sm:p-2 rounded-full shadow bg-gray-500 hover:bg-gray-700 transition">
              <IoArrowBackOutline color="white" />
            </div>
          </div>

          <div
            onClick={() => swiperRef.current?.slideNext()}
            className="cursor-pointer absolute -right-2 sm:-right-4 md:-right-7 top-1/2 z-10 transform -translate-y-1/2"
          >
            <div className="text-lg sm:text-xl p-1 sm:p-2 rounded-full shadow bg-gray-500 hover:bg-gray-700 transition">
              <IoArrowForwardOutline color="white" />
            </div>
          </div>
        </div>

        {/* Right Side: Active Review */}
        <div className="bg-white  rounded-lg p-4 sm:p-6 md:p-8 ">
          <h3 className="text-lg sm:text-xl font-bold text-[#05254a]">
            {testimonials[activeIndex].review.person}
          </h3>
          <div className="flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2 mb-2 sm:mb-3">
            {[...Array(testimonials[activeIndex].review.stars)].map((_, i) => (
              <FaStar
                key={i}
                className="text-yellow-500 text-sm sm:text-base"
              />
            ))}
          </div>
          <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-3">
            <span className="text-purple-700 font-bold">
              {testimonials[activeIndex].review.company}
            </span>
            :{" "}
            <span className="text-red-600 font-bold">
              {testimonials[activeIndex].review.package}
            </span>
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {testimonials[activeIndex].review.feedback}
          </p>
        </div>
      </div>

      {/* Extra Styles for scaling center slide */} 
      {/* <style jsx>{`
        .testimonial-swiper .swiper-slide {
          transform: scale(0.9);
          opacity: 0.5;
          transition: all 0.5s ease;
        }
        .testimonial-swiper .swiper-slide-active {
          transform: scale(1);
          opacity: 1;
          z-index: 10;
        }
      `}</style> */}
    </section>
  );
};

export default AlumniTestimonials;
