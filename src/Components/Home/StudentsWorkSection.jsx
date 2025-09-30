import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// Import your logos
import accenture from "../../assets/Company Icon/accenture.png";
import aramco from "../../assets/Company Icon/aramco.png";
import capgemini from "../../assets/Company Icon/capgemini.png";
import cogni from "../../assets/Company Icon/cogni.png";
import deloitte from "../../assets/Company Icon/Deloitte.png";
import dxc from "../../assets/Company Icon/DXC.png";
import ey from "../../assets/Company Icon/EY.png";
import hcl from "../../assets/Company Icon/hcl.png";
import hp from "../../assets/Company Icon/HP.png";
import ibm from "../../assets/Company Icon/ibm.png";
import infosys from "../../assets/Company Icon/infosys.png";
import itc from "../../assets/Company Icon/itc.png";
import kpmg from "../../assets/Company Icon/kpmg.png";
import larsen from "../../assets/Company Icon/larsen.png";
import sony from "../../assets/Company Icon/sony.png";

const companyLogos = [
  itc,
  kpmg,
  sony,
  larsen,
  aramco,
  accenture,
  deloitte,
  capgemini,
  dxc,
  ey,
  hp,
  hcl,
  cogni,
  ibm,
  infosys,
];

const StudentsWorkSection = () => {
  return (
    <section className="py-8 sm:py-10 bg-gradient-to-b from-white to-gray-50">
      <div className="px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b2c4d]">
          Where our students work
        </h2>
        <p className="mt-2 sm:mt-3 text-gray-600 max-w-xl sm:max-w-2xl text-lg sm:text-lg">
          Achieve your dreams and shape your future with India’s trusted
          learning destination.
        </p>
      </div>

      {/* Swiper for logos */}
      <div className="w-full">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={20}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            480: { slidesPerView: 3, spaceBetween: 25 },
            640: { slidesPerView: 4, spaceBetween: 25 },
            768: { slidesPerView: 5, spaceBetween: 30 },
            1024: { slidesPerView: 6, spaceBetween: 35 },
          }}
          className="flex items-center"
        >
          {companyLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-24 sm:h-28 md:h-32">
                <img
                  src={logo}
                  alt={`Company logo ${index}`}
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-80 hover:opacity-100 transition"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default StudentsWorkSection;
