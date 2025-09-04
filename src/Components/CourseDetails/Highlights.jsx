import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Highlights = () => {
  return (
    <section id="highlights" className="py-12 bg-white">
      <h2 className="text-3xl font-bold mb-5 text-[#0B3954] border-b-2 border-[#C81D25] pb-2 inline-block">Highlights</h2>
      <ul className="list-none space-y-3 text-gray-700 text-lg">
        <li className="flex items-start space-x-2">
          <FaCheckCircle className="text-red-600 mt-1 flex-shrink-0" />
          <span>Learn EWM from the Masters of Industry</span>
        </li>
        <li className="flex items-start space-x-2">
          <FaCheckCircle className="text-red-600 mt-1 flex-shrink-0" />
          <span>Hands-on practical exercises</span>
        </li>
        <li className="flex items-start space-x-2">
          <FaCheckCircle className="text-red-600 mt-1 flex-shrink-0" />
          <span>Real-time scenarios & projects</span>
        </li>
        <li className="flex items-start space-x-2">
          <FaCheckCircle className="text-red-600 mt-1 flex-shrink-0" />
          <span>Downloadable study documents</span>
        </li>
      </ul>
    </section>
  );
};

export default Highlights;