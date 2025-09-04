import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaUserGraduate } from "react-icons/fa6";

const alumniData = [
  {
    name: "Shashi Singh",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    quote: '"GTR Academy has changed my life"',
    review:
      "GTR Academy saw my post and reached out. I prepared for 12 days, did mock interviews, and received multiple offers. I finally chose NTT Data.",
    company: "NTT Data",
    ctc: "7.2 LPA",
    rating: 5,
  },
  {
    name: "Lakshmi",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    quote: '"GTR Academy helped me land Accenture"',
    review:
      "I started preparing in SAP in Feb 2021. I posted a document on LinkedIn and GTR Academy saw my post. I followed their preparation for 12 days and landed a top role in Accenture.",
    company: "Accenture",
    ctc: "7.2 LPA",
    rating: 5,
  },
  {
    name: "Amit Rao",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    quote: '"From fresher to top MNC in 3 weeks!"',
    review:
      "With GTR Academy’s mentorship and case-based training, I was placed within weeks.",
    company: "Infosys",
    ctc: "6.8 LPA",
    rating: 4,
  },
  {
    name: "Atti Rao",
    image: "https://images.pexels.com/photos/1034859/pexels-photo-1034859.jpeg",
    quote: '"From fresher to top MNC in 3 weeks!"',
    review:
      "With GTR Academy’s mentorship and case-based training, I was placed within weeks.",
    company: "Infosys",
    ctc: "6.8 LPA",
    rating: 4,
  },
];

const AlumniTestimonials = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedAlumni = alumniData[selectedIndex];

  return (
    <section className="px-6 py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-start">
          {/* Flex container to align icon and heading */}
          <h3 className="text-4xl text-red-700 font-serif font-semibold flex items-center gap-4">
            <span className="text-[#0B3954] mb-2">
              <FaUserGraduate />
            </span>
            Alumni Diaries
          </h3>
          <p className="text-lg text-[#0B3954] font-bold">
            Celebrating Success Together
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Swiper Slider (Cards) */}
          <div className="md:col-span-1">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{ delay: 3000 }}
              spaceBetween={20}
              navigation
              pagination={{ clickable: true }}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
            >
              {alumniData.map((alumni, index) => (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => setSelectedIndex(index)}
                    className={`relative h-[320px] w-full rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition duration-300 ${
                      selectedIndex === index
                        ? "border-4 border-red-500 scale-105"
                        : "hover:scale-105"
                    }`}
                  >
                    <img
                      src={alumni.image}
                      alt={alumni.name}
                      className="h-full w-full object-cover"
                    />
                    {/* Optional Play Button Overlay */}
                    {/* <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-white opacity-80"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div> */}
                    <div className="absolute bottom-0 bg-black bg-opacity-60 text-white w-full px-4 py-3">
                      <p className="italic text-sm md:text-xs">
                        {alumni.quote}
                      </p>
                      <h4 className="text-base font-semibold mt-1">
                        {alumni.name}
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Side: Testimonial Card */}
          <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-xl border border-gray-200">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-lg font-semibold">{selectedAlumni.name}</h4>
                <p className="text-sm text-gray-500">
                  {selectedAlumni.company} ·{" "}
                  <span className="text-purple-700 font-semibold">
                    {selectedAlumni.ctc}
                  </span>
                </p>
                <div className="text-yellow-400 mt-1 text-lg">
                  {"★".repeat(selectedAlumni.rating).padEnd(5, "☆")}
                </div>
              </div>
              <span className="text-2xl">🎯</span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {selectedAlumni.review}
            </p>

            {/* Dots */}
            <div className="flex gap-2 mt-6 justify-center">
              {alumniData.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedIndex(i)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition ${
                    selectedIndex === i
                      ? "bg-red-500 scale-125"
                      : "bg-gray-300 hover:bg-red-300"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniTestimonials;
