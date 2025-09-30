import React, { useState } from "react";
import { GiMoneyStack } from "react-icons/gi";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import advancedExcel from "../../assets/Course Images2/Advanced Excel.webp";
import dataAnalyst from "../../assets/Course Images2/Data Analyst.webp";
import dataScienceAI from "../../assets/Course Images2/Data Science AI.webp";
import generativeAI from "../../assets/Course Images2/Generative AI.webp";
import pOWERBIwithAI from "../../assets/Course Images2/POWER BI with AI.webp";
import pythonwithfastapi from "../../assets/Course Images2/python with fast api.webp";
import sAPABAP from "../../assets/Course Images2/SAP ABAP.webp";
import sAPActivate from "../../assets/Course Images2/SAP Activate.webp";
import sAPARIBA from "../../assets/Course Images2/SAP ARIBA.webp";
import sAPBASIS from "../../assets/Course Images2/SAP BASIS.webp";
import sAPBTP from "../../assets/Course Images2/SAP BTP.webp";
// import sAPBusinessOne from "../../assets/Course Images2/SAP Business One.webp";
import sAPBW4HANA from "../../assets/Course Images2/SAP BW4 HANA.webp";
import sAPCPI from "../../assets/Course Images2/SAP CPI.webp";
import sAPDataMigrationandBODS from "../../assets/Course Images2/SAP Data Migration & BODS.webp";
import sAPDatasphere from "../../assets/Course Images2/SAP Datasphere.webp";
import sAPEWM from "../../assets/Course Images2/SAP EWM.webp";
import sAPFICO from "../../assets/Course Images2/SAP FICO.webp";
import sAPHCM from "../../assets/Course Images2/SAP HCM.webp";
import sAPMM from "../../assets/Course Images2/SAP MM.webp";
import sAPPM from "../../assets/Course Images2/SAP PM.webp";
import sAPPP from "../../assets/Course Images2/SAP PP.webp";
import sAPPS from "../../assets/Course Images2/SAP PS.webp";
import sapSFEC from "../../assets/Course Images2/sap SF EC.webp";
// import sapSFONB from "../../assets/Course Images2/sap SF ONB.webp";
// import sapsf from "../../assets/Course Images2/sap sf.webp";

// Categories
const categories = [
  "Popular",
  "SAP Technical",
  "SAP Functional",
  "HR Courses",
  "VLSI",
  "Data Science",
  "Python with Fast API",
];

// Courses with multiple categories
const coursesData = [
  // Popular Courses
  {
    title: "SAP FICO S/4HANA",
    description: "Master SAP Financial Accounting with hands-on S/4HANA scenarios.",
    fee: "₹60,000",
    img: sAPFICO,
    category: ["SAP Functional", "Popular"],
  },
  {
    title: "SAP VIM",
    description: "Learn Vendor Invoice Management and automation in SAP.",
    fee: "₹60,000",
    img: sAPBASIS, // choose an appropriate SAP image
    category: ["SAP Functional", "Popular"],
  },
  {
    title: "VLSI",
    description: "Explore Very Large Scale Integration design and verification techniques.",
    fee: "₹60,000",
    img: dataAnalyst, // choose an image related to tech/data
    category: ["VLSI", "Popular"],
  },
  {
    title: "SAP BASIS S/4HANA",
    description: "Understand SAP system administration and architecture in S/4HANA.",
    fee: "₹60,000",
    img: sAPBASIS,
    category: ["SAP Technical", "Popular"],
  },
  {
    title: "SAP DATASPHERE S/4HANA",
    description: "Learn data integration and modeling using SAP Datasphere.",
    fee: "₹60,000",
    img: sAPDatasphere,
    category: ["SAP Technical", "Popular"],
  },
  {
    title: "Generative AI",
    description: "Build intelligent systems using generative models and AI tools.",
    fee: "₹60,000",
    img: generativeAI,
    category: ["Data Science", "Popular"],
  },
  {
    title: "Data Science AI",
    description: "Comprehensive training in AI-driven data science workflows.",
    fee: "₹60,000",
    img: dataScienceAI,
    category: ["Data Science", "Popular"],
  },
  {
    title: "Data Analyst",
    description: "Become a data analyst with skills in visualization and reporting.",
    fee: "₹60,000",
    img: dataAnalyst,
    category: ["Data Science", "Popular"],
  },

  // SAP Technical
  {
    title: "SAP ABAP S/4 HANA",
    description: "Learn advanced ABAP programming for S/4HANA systems.",
    fee: "₹60,000",
    img: sAPABAP,
    category: ["SAP Technical"],
  },
  {
    title: "SAP BTP",
    description: "Explore SAP Business Technology Platform for cloud solutions.",
    fee: "₹60,000",
    img: sAPBTP,
    category: ["SAP Technical"],
  },
  {
    title: "SAP BW4 HANA",
    description: "Master data warehousing with SAP BW/4HANA.",
    fee: "₹60,000",
    img: sAPBW4HANA,
    category: ["SAP Technical"],
  },
  {
    title: "SAP UI5 FIORI S/4HANA",
    description: "Design modern SAP applications using UI5 and Fiori.",
    fee: "₹60,000",
    img: sAPActivate, // approximate image
    category: ["SAP Technical"],
  },
  {
    title: "SAP CPI",
    description: "Integrate cloud applications using SAP Cloud Platform Integration.",
    fee: "₹60,000",
    img: sAPCPI,
    category: ["SAP Technical"],
  },
  {
    title: "SAP DATA MIGRATION & BODS",
    description: "Learn data migration strategies using SAP BODS.",
    fee: "₹60,000",
    img: sAPDataMigrationandBODS,
    category: ["SAP Technical"],
  },

  // SAP Functional
  {
    title: "SAP EWM S/4HANA",
    description: "Master Extended Warehouse Management in SAP S/4HANA.",
    fee: "₹60,000",
    img: sAPEWM,
    category: ["SAP Functional"],
  },
  {
    title: "SAP MM S/4HANA",
    description: "Learn Material Management processes in SAP.",
    fee: "₹60,000",
    img: sAPMM,
    category: ["SAP Functional"],
  },
  {
    title: "SAP SD S/4HANA",
    description: "Understand Sales and Distribution in SAP S/4HANA.",
    fee: "₹60,000",
    img: sAPPP, // approximate
    category: ["SAP Functional"],
  },
  {
    title: "SAP TM S/4HANA",
    description: "Manage transportation processes using SAP TM.",
    fee: "₹60,000",
    img: sAPPS, // approximate
    category: ["SAP Functional"],
  },
  {
    title: "SAP HCM",
    description: "Explore Human Capital Management in SAP.",
    fee: "₹60,000",
    img: sAPHCM,
    category: ["SAP Functional"],
  },
  {
    title: "SAP ARIBA",
    description: "Learn procurement and sourcing with SAP Ariba.",
    fee: "₹60,000",
    img: sAPARIBA,
    category: ["SAP Functional"],
  },
  {
    title: "SAP PP S/4HANA",
    description: "Master production planning in SAP S/4HANA.",
    fee: "₹60,000",
    img: sAPPP,
    category: ["SAP Functional"],
  },
  {
    title: "SAP WM",
    description: "Learn warehouse management processes in SAP.",
    fee: "₹60,000",
    img: sAPEWM,
    category: ["SAP Functional"],
  },
  {
    title: "SAP PM/EAM S/4HANA",
    description: "Explore plant maintenance and asset management in SAP.",
    fee: "₹60,000",
    img: sAPPM,
    category: ["SAP Functional"],
  },

  // HR Courses
  {
    title: "HR Courses",
    description: "Comprehensive HR training including payroll, recruitment, and compliance.",
    fee: "₹60,000",
    img: sapSFEC, // approximate image
    category: ["HR Courses"],
  },

  // Data Science (non-popular)
  {
    title: "Advanced Excel",
    description: "Master Excel for data analysis and business intelligence.",
    fee: "₹60,000",
    img: advancedExcel,
    category: ["Data Science"],
  },
  {
    title: "Power BI with AI",
    description: "Create smart dashboards using Power BI and AI features.",
    fee: "₹60,000",
    img: pOWERBIwithAI,
    category: ["Data Science"],
  },

  // Python
  {
    title: "Python with Fast API",
    description: "Build scalable APIs using Python and FastAPI framework.",
    fee: "₹60,000",
    img: pythonwithfastapi,
    category: ["Python with Fast API"],
  },
];


const CourseFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("Popular");

  const filteredCourses = coursesData.filter((course) =>
    course.category.includes(selectedCategory)
  );

  return (
    <div className="px-4  bg-gray-100 min-h-screen font-sans p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 ">
        <div>
          <h2 className="text-4xl font-bold text-red-700 mb-1 font-serif">
            Select your goal
          </h2>
          <p className="font-lato font-semibold text-[20px] leading-[29px] text-[#364D9D] max-w-lg mx-auto md:mx-0">
            <span className="text-[#2D2D2D] font-semibold">100+ </span>Courses
            available for you
          </p>
        </div>
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search for a Course"
            className="w-full border border-gray-300 rounded-full px-4 py-2 pl-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <span className="absolute left-3 top-2.5 text-gray-500">🔍</span>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-xl text-sm font-medium transition duration-200 ${
              selectedCategory === cat
                ? "bg-[#364D9D] text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            className="relative w-[380px] h-[430px] overflow-hidden rounded-xl shadow-lg group cursor-pointer transition-transform duration-300 hover:scale-[1.015]"
          >
            {/* Back Image Card (default view) */}
            <div className="absolute inset-0 z-10 transition-opacity duration-500 group-hover:opacity-10">
              <img
                src={course.img}
                alt="Course img"
                className="w-full h-[220px] object-cover rounded-t-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[220px] bg-white bg-opacity-50 rounded-b-xl p-4 text-white flex flex-col justify-start">
                <h3 className="text-2xl text-[#2D2D2D] font-semibold">
                  {course.title}
                </h3>
                <p className=" text-[#364D9D] py-2 line-clamp-3 text-[16px]">
                  {course.description}
                </p>
                <div className="h-0.5 bg-gray-700 my-2"></div>
                <div className="flex justify-between items-center text-[#2D2D2D] gap-2 mt-2 py-2 px-4 text-lg lato-bold">
                  <div className="flex items-center gap-2">
                    <GiMoneyStack className="text-red-700 h-[25px] w-[25px]" />
                    <span className="text-[20px]">Course Fee</span>
                    <span className="font-semibold text-[20px] ">
                      {course.fee}
                    </span>
                  </div>
                  <IoIosArrowDroprightCircle className="text-3xl text-black" />
                </div>
              </div>
            </div>

            {/* Hover Card (on hover) */}
            <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#004c7d] text-white rounded-xl flex flex-col justify-between">
              <div className="bg-red-500 py-3">
                <h2 className="text-2xl font-bold text-center mb-2">
                  {course.title}
                </h2>
              </div>
              <div className="p-4">
                <p className="text-xl line-clamp-4">{course.description}</p>
                <p className="mt-2 text-lg font-medium">
                  Instructor: Suresh Reddy
                </p>
              </div>
              <div className="flex flex-col justify-between items-start p-4 ">
                <div className="text-2xl font-semibold  ">
                  <span>Course Fee: </span>
                  {course.fee}
                </div>
              </div>
              <div className="flex gap-2 p-4">
                <button className="bg-white text-[#004c7d] px-3 py-2 rounded w-full text-xl font-semibold hover:bg-gray-200 transition">
                  Brochure
                </button>
                <button className="bg-white text-[#004c7d] px-3 py-2 rounded w-full text-xl font-semibold hover:bg-gray-200 transition">
                  Know More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseFilter;
