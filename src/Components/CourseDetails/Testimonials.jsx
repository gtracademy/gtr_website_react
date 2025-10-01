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

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section id="testimonials" className="py-12 bg-white relative ">
      {/* Title */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#05254a]">
          Student Testimonial
        </h2>
        <p className="text-red-600 text-lg font-semibold">
          Celebrating Success Together
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ clickable: true }}
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="max-w-6xl mx-auto testimonial-swiper"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-500">
              {/* Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[491px] object-cover object-top"
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/70 text-red-600 p-6 rounded-full hover:scale-110 transition">
                  <FaPlay size={30} />
                </button>
              </div>

              {/* Gradient + Text */}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent text-center p-4">
                <p className="text-yellow-400 font-semibold text-lg italic">
                  “{item.text}”
                </p>
                <h3 className="text-white text-xl font-bold">{item.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div
        onClick={() => swiperRef.current?.slidePrev()}
        className="cursor-pointer absolute -left-4 top-[400px]  z-10 transform -translate-y-1/2" 
      >
        <div className="text-xl p-2 rounded-full shadow bg-gray-500 hover:bg-gray-700 transition ease-in-out">
          <IoArrowBackOutline color="white" />
        </div>
      </div>

      <div
        onClick={() => swiperRef.current?.slideNext()}
        className="cursor-pointer absolute -right-4 top-[400px] z-10 transform -translate-y-1/2"
      >
        <div className="text-xl p-2 rounded-full shadow bg-gray-500 hover:bg-gray-700 transition ease-in-out">
          <IoArrowForwardOutline color="white" />
        </div>
      </div>

      {/* Active Review Box */}
      <div className="mt-10 max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-[#05254a]">
            {testimonials[activeIndex].review.person}
          </h3>
          <div className="flex items-center gap-2 mt-2 mb-3">
            {[...Array(testimonials[activeIndex].review.stars)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
          </div>
          <p className="text-gray-700 mb-3">
            <span className="text-purple-700 font-bold">
              {testimonials[activeIndex].review.company}
            </span>
            :{" "}
            <span className="text-red-600 font-bold">
              {testimonials[activeIndex].review.package}
            </span>
          </p>
          <p className="text-gray-700 leading-relaxed">
            {testimonials[activeIndex].review.feedback}
          </p>
        </div>
      </div>

      {/* Extra Styles for scaling center slide */}
      <style jsx>{`
        .testimonial-swiper .swiper-slide {
          transform: scale(0.85);
          opacity: 0.5;
          transition: all 0.5s ease;
        }
        .testimonial-swiper .swiper-slide-active {
          transform: scale(1);
          opacity: 1;
          z-index: 10;
        }
        .testimonial-swiper .swiper-slide-next,
        .testimonial-swiper .swiper-slide-prev {
          opacity: 0.8;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
