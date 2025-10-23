import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaPlay, FaStar } from "react-icons/fa";
import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5";

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
  {
    id: 4,
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
  {
    id: 5,
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

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section id="testimonials" className="py-11 bg-white relative mb-4 ">
      {/* Title */}
      <div className=" text-center md:text-left px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#05254a]">
          Student Testimonial
        </h2>
        <p className="text-red-600 text-lg font-semibold">
          Celebrating Success Together
        </p>
      </div>

      {/* Swiper */}
      <div className="relative max-w-6xl mx-auto px-6 z-0">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          pagination={{ clickable: true }}
          loop={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="testimonial-swiper"
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-500">
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[480px] object-cover object-top"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/70 text-red-600 p-5 sm:p-6 rounded-full hover:scale-110 transition">
                    <FaPlay size={26} />
                  </button>
                </div>

                {/* Gradient + Text */}
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent text-center p-3 sm:p-4">
                  <p className="text-yellow-400 font-semibold text-sm sm:text-base italic">
                    “{item.text}”
                  </p>
                  <h3 className="text-white text-lg sm:text-xl font-bold">
                    {item.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation (Centered Arrows) */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 bg-gray-600 hover:bg-gray-800 text-white p-3 rounded-full shadow transition"
        >
          <IoArrowBackOutline size={22} />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2  bg-gray-600 hover:bg-gray-800 text-white p-3 rounded-full shadow transition"
        >
          <IoArrowForwardOutline size={22} />
        </button>
      </div>

      {/* Active Review Box */}
      <div className="mt-12 sm:mt-16 max-w-lg sm:max-w-3xl lg:max-w-4xl mx-auto px-4">
        <div className="bg-white shadow-md rounded-lg p-5 sm:p-6 border border-gray-200">
          <h3 className="text-lg sm:text-xl font-bold text-[#05254a]">
            {testimonials[activeIndex].review.person}
          </h3>
          <div className="flex items-center gap-1 sm:gap-2 mt-2 mb-3">
            {[...Array(testimonials[activeIndex].review.stars)].map((_, i) => (
              <FaStar
                key={i}
                className="text-yellow-500 text-sm sm:text-base"
              />
            ))}
          </div>
          <p className="text-gray-700 mb-3 text-sm sm:text-base">
            <span className="text-purple-700 font-bold">
              {testimonials[activeIndex].review.company}
            </span>
            :{" "}
            <span className="text-red-600 font-bold">
              {testimonials[activeIndex].review.package}
            </span>
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {testimonials[activeIndex].review.feedback}
          </p>
        </div>
      </div>

      {/* Scaling Center Slide */}
      <style jsx>{`
        .testimonial-swiper .swiper-slide {
          transform: scale(0.9);
          opacity: 0.6;
          transition: all 0.4s ease;
        }
        .testimonial-swiper .swiper-slide-active {
          transform: scale(1);
          opacity: 1;
          
        }
        .testimonial-swiper .swiper-slide-next,
        .testimonial-swiper .swiper-slide-prev {
          opacity: 0.85;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
