import React from 'react';
// Import your images from the assets folder
// import msmeLogo from './assets/msme-logo.cms';
// import nasscomLogo from './assets/nasscom-logo.png';
// import samGovLogo from './assets/sam-gov-logo.png';
// import ibmLogo from './assets/ibm-logo.jpg';
// import rootbixLogo from './assets/rootbix-logo.png';
// import isoCertifiedLogo from './assets/iso-logo.avif';

const TrainingDev = () => {
  return (
    <div className="py-18 ">
      <div className="bg-gradient-to-r from-[#0B3954] via-gray-700 to-red-800 h-1 w-full mb-20"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* Left Section - Text and Button */}
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold text-[#C81D25] mb-2">
              GTR Academy Training & Development
            </h1>
            <h2 className="text-xl text-[#0B3954] font-bold mb-8">
              (Enterprise of ROOTBIX INFOTECH Pvt. Ltd.)
            </h2>
            <p className="text-black text-lg mb-4">
              World-Class Employee Training Solutions
            </p>
            <ul className="list-disc list-inside space-y-2 text-black text-lg mb-8">
              <li>Classroom Online Training Options</li>
              <li>Fully Customized, Instructor-Led Programs</li>
              <li>Flexible Scheduling – Learn on Your Own Terms</li>
            </ul>
            <button className="bg-[#C81D25] text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-red-700 transition duration-300">
              Request a callback
            </button>
          </div>

          {/* Right Section - Logos */}
          <div className="lg:w-1/3 mt-12 w-full lg:mt-0 lg:pl-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center h-24">
                <img src="/msme-logo.cms" alt="MSME Logo" className="max-h-full max-w-full" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center h-24">
                <img src="/nasscom-logo.png" alt="NASSCOM Logo" className="max-h-full max-w-full" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center h-24">
                <img src="sam-gov-logo.png" alt="SAM.gov Logo" className="max-h-full max-w-full" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center h-24">
                <img src="/ibm-logo.jpg" alt="IBM Logo" className="max-h-full max-w-full" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center h-24">
                <img src="/rootbix-logo.png" alt="Rootbix Infotech Logo" className="max-h-full max-w-full" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center h-24">
                <img src="/iso-logo.avif" alt="ISO Certified Logo" className="max-h-full max-w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDev;