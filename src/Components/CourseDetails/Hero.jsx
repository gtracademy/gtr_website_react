// import React from "react";
// import { Link } from "react-router-dom";
// import dp from "../assets/saurabhM.jpeg"

// const Hero = () => {
//   return (
//     <section className="bg-white min-h-screen flex items-center justify-center px-6">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
//         {/* Left Content */}
//         <div className="space-y-6 text-center md:text-left">
//           <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
//             Hi, I’m <span className="text-yellow-500">Saurabh</span> Kumar
//           </h1>
//           <p className="text-lg text-gray-600">
//             A passionate <span className="font-semibold text-black">Web Developer</span> 
//             crafting modern, responsive, and user-friendly websites with React, 
//             Tailwind, Node.js, and WordPress.
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//             <Link
//               to="/projects"
//               className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-xl shadow-md hover:bg-yellow-400 transition"
//             >
//               View Projects
//             </Link>
//             <Link
//               to="/contact"
//               className="px-6 py-3 border-2 border-yellow-500 text-black font-semibold rounded-xl hover:bg-yellow-100 hover:text-black transition"
//             >
//               Contact Me
//             </Link>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="flex justify-center md:justify-end">
//           <img
//             src={dp}
//             alt="Saurabh"
//             className="rounded-full shadow-lg border-4 border-yellow-500 w-72 h-72 object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100 text-center px-6"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
        Master SAP EWM S/4 HANA
      </h1>
      <p className="max-w-2xl text-gray-700 mb-6">
        Learn from industry experts and get hands-on with SAP EWM modules.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Enroll Now
      </button>
    </section>
  );
};

export default Hero;
