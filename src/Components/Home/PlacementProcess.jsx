import React from "react";
import placementImage from "../../assets/Placement SVG/Placement Blue.svg";
import placementIcon from "../../assets/PlacemnetImg.png";

const PlacementProcess = () => {
  return (
    <div className="w-full flex flex-col py-18 bg-white">
      {/* Flex container for icon + text */}
      <div className="flex items-center mb-8">
        <img src={placementIcon} alt="placement icon" className="w-12 h-12 mr-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Placement Process
        </h2>
      </div>

      {/* Placement process image */}
      <img
        src={placementImage}
        alt="Placement Process"
        className="object-contain"
      />
    </div>
  );
};

export default PlacementProcess;
