import React from "react";
import intructorImg from "../../assets/image.png";

const Mentor = () => {
  return (
    <section id="mentor" className="pt-8 max-w-7xl mx-auto bg-white">
      <h2 className="text-3xl font-bold mb-6 text-[#0B3954] border-b-2 border-[#C81D25] pb-2 inline-block">
        Know Your Mentor
      </h2>
      <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 rounded-lg shadow border border-gray-200">
     
        <img
          src={intructorImg}
          alt="Mentor"
          className="w-52 h-52 object-cover rounded-full shadow-lg border-4 border-[#C81D25]"
        />
       
        <div>
         
          <h3 className="text-3xl font-bold text-[#364D9D]">Suresh Reddy</h3>

          <ul className="text-gray-700 mt-4 leading-relaxed text-lg space-y-2">
            <li className="flex items-start">
              <span className="text-red-700 font-bold text-xl mr-2">•</span>
              SAP EWM S/4 HANA Expert
            </li>
            <li className="flex items-start">
              <span className="text-red-700 font-bold text-xl mr-2">•</span>
              15+ years in SAP consulting, projects, and training
            </li>
            <li className="flex items-start">
              <span className="text-red-700 font-bold text-xl mr-2">•</span>
              Specialized in logistics, supply chain & warehouse automation
            </li>
            <li className="flex items-start">
              <span className="text-red-700 font-bold text-xl mr-2">•</span>
              Certified SAP Trainer with 100+ global sessions delivered
            </li>
            <li className="flex items-start">
              <span className="text-red-700 font-bold text-xl mr-2">•</span> 
              Trusted mentor guiding professionals to SAP success
            </li>
          </ul>
        
        </div>
       
      </div>
    </section>
  );
};

export default Mentor;
