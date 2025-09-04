import React, { useState } from "react";
import { GiMoneyStack  } from "react-icons/gi";

// Categories
const categories = [
  "Popular",
  "SAP Technical",
  "SAP Functional",
  "Data Science",
];

// Courses with multiple categories
const coursesData = [
  {
    title: "SAP EWM S/4 HANA",
    description:
      "This SAP EWM online training offers a comprehensive understanding of Extended Warehouse Management.",
    fee: "₹60,000",
    img: "https://windybot.com/img/VKLEyEltuou6AfOadtIh.jpg",
    category: ["Popular"],
  },
  {
    title: "Data Science Bootcamp",
    description:
      "Comprehensive data science course covering Python, ML, and AI fundamentals.",
    fee: "₹70,000",
    img: "https://windybot.com/img/HcFOmYVsd32XVTdARrI6.jpg",
    category: ["Data Science", "Popular"],
  },
  {
    title: "SAP Technical Fundamentals",
    description:
      "Learn the core of SAP ABAP and SAP BASIS in this detailed course.",
    fee: "₹50,000",
    img: "https://windybot.com/thumb/arh1V7lk7jOu3L10psgt.jpg",
    category: ["SAP Technical", "Popular"],
  },
  {
    title: "SAP FI Functional",
    description: "Explore SAP Financial Accounting with real-world scenarios.",
    fee: "₹65,000",
    img: "https://img.freepik.com/premium-vector/elementary-school-students-studying-classroom-teacher-vector-art-enhance-educational-content_1167215-204.jpg",
    category: ["SAP Functional", "Popular"],
  },
  {
    title: "Advanced SAP ABAP",
    description: "Take your ABAP skills to the next level.",
    fee: "₹55,000",
    img: "https://img-c.udemycdn.com/course/750x422/3593786_23bc_3.jpg",
    category: ["SAP Technical", "Popular"],
  },
  {
    title: "SAP MM Functional",
    description: "Master Material Management processes in SAP.",
    fee: "₹60,000",
    img: "https://www.shutterstock.com/image-illustration/3d-isometric-flat-illustration-future-260nw-2600620385.jpg",
    category: ["SAP Functional", "Popular"],
  },
  {
    title: "Machine Learning with Python",
    description: "Start your ML journey using Python and Scikit-learn.",
    fee: "₹68,000",
    img: "https://www.shutterstock.com/image-vector/science-teacher-bot-education-using-260nw-1576559788.jpg",
    category: ["Data Science", "Popular"],
  },
  {
    title: "Deep Learning with TensorFlow",
    description: "Build deep learning models using TensorFlow and Keras.",
    fee: "₹75,000",
    img: "https://media.istockphoto.com/id/1408776142/vector/using-robots-in-online-teaching.jpg?s=612x612&w=0&k=20&c=FNteI-x_RWCWhav4ormyl2_BEkKjLoNTNdQNvR3mhdA=",
    category: ["Data Science", "Popular"],
  },
];

const CourseFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("Popular");

  const filteredCourses = coursesData.filter((course) =>
    course.category.includes(selectedCategory)
  );

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold text-red-700 mb-1 font-serif">
            Select your goal
          </h1>
          <p className="text-blue-800 text-md">
            <span className="text-[#0B3954] font-semibold">100+ </span>Courses
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 h-[5]">
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            className="relative w-full h-[450px] overflow-hidden rounded-xl shadow-lg group cursor-pointer transition-transform duration-300 hover:scale-[1.015]"
          >
            {/* Back Image Card (default view) */}
            <div className="absolute inset-1 z-10 transition-opacity duration-500 group-hover:opacity-10">
              <img
                src={course.img} 
                alt="Course img"
                className="w-full h-[220px] object-cover rounded-t-xl"
              />
              <div className="absolute h-[220px] bottom-0 left-0 right-0 bg-white bg-opacity-50 rounded-b-xl p-4 text-white flex flex-col justify-start ">
                <h2 className="text-2xl text-black font-semibold">
                  {course.title}
                </h2>
                <p className="text-md text-blue-900 py-4 line-clamp-3">
                  {course.description}
                </p>
                <div className="h-0.5 bg-gray-700"></div>
                <div className="flex items-center text-blue-900 gap-2 mt-2 py-2 text-lg">
                  <GiMoneyStack  className="text-red-700 text-2xl" />
                  <span>Course Fee</span>
                  <span className="font-semibold">{course.fee}</span>
                </div>
              </div>
            </div>

            {/* Hover Card (on hover) */}
            <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#004c7d] text-white rounded-xl flex flex-col justify-between">
              <div className="bg-red-500 py-5">
                <h2 className="text-2xl font-bold text-center mb-2">
                  {course.title}
                </h2>
              </div>
              <div className="p-6">
                <p className="text-xl line-clamp-4">{course.description}</p>
                <p className="mt-4 text-lg font-medium">
                  Instructor: Suresh Reddy
                </p>
              </div>
              <div className="flex flex-col justify-between items-start p-6">
                <div className="text-2xl font-semibold">
                  <span>Course Fee: </span>
                  {course.fee}
                </div>
              </div>
              <div className="flex gap-2 p-6">
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
