import React from "react";

const WhoShouldJoin = () => {
  return (
    <section id="who-join" className="pt-8 bg-white max-w-7xl mx-auto">
      
        <h2 className="text-3xl font-bold mb-6 text-[#0B3954] border-b-2 border-[#C81D25] pb-2 inline-block">
          Who Should Join This Course?
        </h2>

        <ul className="list-none space-y-4">
          <li className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
            <span className="text-red-600 text-3xl font-bold">01</span>

            <p className="text-gray-800 text-lg font-medium">
              Aspiring professionals who want to learn SAP EWM implementation.
            </p>
          </li>

          <li className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
            <span className="text-red-600 text-3xl font-bold">02</span>

            <p className="text-gray-800 text-lg font-medium">
              SAP Functional Consultants, Business Analysts, and IT
              professionals seeking domain expertise.
            </p>
          </li>

          <li className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
            <span className="text-red-600 text-3xl font-bold">03</span>

            <p className="text-gray-800 text-lg font-medium">
              Supply Chain professionals, Warehouse Managers, and Logistics
              experts looking to upskill.
            </p>
          </li>

          <li className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
            <span className="text-red-600 text-3xl font-bold">04</span>

            <p className="text-gray-800 text-lg font-medium">
              Students from technical and SAP/ERP backgrounds aiming to build
              careers in SAP EWM.
            </p>
          </li>

          <li className="flex items-center space-x-4 bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
            <span className="text-red-600 text-3xl font-bold">05</span>

            <p className="text-gray-800 text-lg font-medium">
              Organizations & enterprises seeking to train teams in
              industry-leading SAP practices.
            </p>
          </li>
        </ul>
      
    </section>
  );
};

export default WhoShouldJoin;
