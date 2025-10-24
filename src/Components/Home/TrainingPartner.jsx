import React from "react";
import nasscom from "../../assets/nasscom.webp";
import iso from "../../assets/iso.webp";
import msme from "../../assets/msme.webp";
import rootbix from "../../assets/rootbix.webp";
import dun from "../../assets/dun.webp";
import samgov from "../../assets/sam-gov.webp";
import certificate from "../../assets/Certificate.webp";

const TrainingPartner = () => {
  return (
    <div
      className={`bg-[url('./bg_certificate.webp')] relative w-full bg-cover bg-bottom bg-no-repeat px-4 sm:px-8 md:px-16 py-12 flex flex-col lg:flex-row items-center justify-between gap-12`}
    >
      {/* LEFT SECTION */}
      <div className="flex-1 max-w-xl text-center lg:text-left relative ">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004aad]">
          Approved Training partner
        </h2>

        <p className="mt-4 leading-relaxed text-sm sm:text-base text-[#333333]">
          Approved Training partner under the scheme for{" "}
          <span className="text-[#004aad] underline">
            market-led fee-based services
          </span>{" "}
          implemented by Nasscom
        </p>

        {/* LOGO GRID - Split into two rows */}
        <div className="mt-8 space-y-4">
          {/* First Row */}
          <div className="grid grid-cols-3 gap-4 w-full">
            {[nasscom, samgov, rootbix].map((logo, i) => (
              <div key={i} className=" flex items-center justify-center ">
                <img
                  src={logo}
                  alt="partner-logo"
                  className="w-28 sm:w-32 md:w-36 lg:w-40 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-3 gap-4 w-full">
            {[iso, msme, dun].map((logo, i) => (
              <div key={i} className=" flex items-center justify-center">
                <img
                  src={logo}
                  alt="partner-logo"
                  className="w-28 sm:w-32 md:w-36 lg:w-40 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* FEATURES SECTION */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start mt-10 gap-6 sm:gap-10">
          {[
            "Showcase on LinkedIn and resume",
            "Share achievements on social platforms",
            "Earn a Tier 1 certification from GTR Academy",
          ].map((feature, i) => (
            <div
              key={i}
              className="flex items-center space-x-3 w-full sm:w-auto justify-center sm:justify-start"
            >
              {/* Blue circular badge with checkmark */}
              <div className="w-8 h-8 sm:w-13 sm:h-6 bg-[#004aad] rounded-full flex items-center justify-center">
                <span className="text-white text-base sm:text-lg">✔</span>
              </div>
              {/* Feature text */}
              <span className="text-[#333333] text-sm sm:text-base text-center sm:text-left">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex-1 flex justify-center relative mt-10 lg:mt-0 z-10">
        <img
          src={certificate}
          alt="Certificate"
          className="w-[220px] sm:w-[300px] md:w-[380px] lg:w-[480px] xl:w-[550px] relative drop-shadow-2xl left-0 sm:left-6"
        />
      </div>
    </div>
  );
};

export default TrainingPartner;
