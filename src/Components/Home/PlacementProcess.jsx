import placementImage from "../../assets/Placement SVG/Placement Blue.svg";
import placementMobileIcon from "../../assets/Placement SVG/Placement Blue Mobile.svg";

const PlacementProcess = () => {



  return (
    <div className="w-full flex flex-col py-12 bg-white px-4 sm:px-6 lg:px-8">
      {/* Flex container for icon + text */}
      <div className="flex items-center mb-6 sm:mb-8">

        {/* <img
          src={placementIcon}
          alt="placement icon"
          className="w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4"
        /> */}

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
          Placement Process
        </h2>
      </div>

      {/* Placement process image - responsive */}
      <picture>
        <source srcSet={placementMobileIcon} media="(max-width: 640px)" />
        <img
          src={placementImage}
          alt="Placement Process"
          className="w-full h-auto object-contain"
        />
      </picture>
    </div>
  );
};

export default PlacementProcess;
