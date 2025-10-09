import React from "react";
import {
  FaUserTie,
  FaHandsHelping,
  FaProjectDiagram,
  FaFileDownload,
} from "react-icons/fa";

const highlightItems = [
  {
    text: "Learn EWM from the Masters of Industry",
    icon: <FaUserTie className="text-[#273382] text-3xl" />,
  },
  {
    text: "Hands-on practical exercises",
    icon: <FaHandsHelping className="text-[#273382] text-3xl" />,
  },
  {
    text: "Real-time scenarios & projects",
    icon: <FaProjectDiagram className="text-[#273382] text-3xl" />,
  },
  {
    text: "Downloadable study documents",
    icon: <FaFileDownload className="text-[#273382] text-3xl" />,
  },
];

const Highlights = () => {
  return (
    <section id="highlights" className="py-6 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-[#0B3954] border-b-2 border-[#C81D25] pb-2 inline-block">
        Highlights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlightItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-xl shadow-md border-b-4 border-[#273382] 
              bg-gradient-to-t from-[#f5f7ff] to-white
              transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mb-4">{item.icon}</div>
            <p className="text-gray-800 text-base font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
