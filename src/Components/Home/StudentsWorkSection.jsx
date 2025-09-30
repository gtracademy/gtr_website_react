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
    <section className="py-10 bg-gradient-to-b from-white to-gray-50">
      <div className=" px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b2c4d]">
          Where our students work
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl ">
          Achieve your dreams and shape your future with India’s trusted
          learning destination.
        </p>
      </div>

      {/* Swiper for logos */}
      <div className="w-full">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={6}
          spaceBetween={30}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="flex items-center"
        >
          {companyLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-20">
                <img
                  src={logo}
                  alt={`Company logo ${index}`}
                  className="h-10 w-auto opacity-70 hover:opacity-100 transition"
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
