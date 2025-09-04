import React from "react";
import Highlights from "./Highlights";

const Overview = () => {
  return (
    <section className="bg-white pt-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Content Column */}
        <div className="md:w-full">
          <div id="overview" className="py-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B3954] border-b-2 border-[#C81D25] pb-2 inline-block">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              This SAP EWM online training offers a comprehensive understanding of Extended Warehouse Management (EWM) in the context of SAP S/4HANA. The course covers essential topics such as EWM fundamentals, organizational units, master data, and key warehouse processes like inbound, outbound, and inventory management. Designed for logistics professionals, warehouse managers, and SAP users, this hands-on program helps you enhance your skills in warehouse operations using SAP EWM and prepares you for real-world implementation and certification.
            </p>
          </div>
          <Highlights />
        </div>

        
        
      </div>
    </section>
  );
};

export default Overview;