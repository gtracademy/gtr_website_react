import React, { useEffect, useRef, useState } from "react";
import { FaDatabase, FaUserTie, FaMicrochip, FaPython, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Import Link for routing
import { coursesData } from "./data/CourseData";
import { BsDatabaseFillX } from "react-icons/bs";


const categories = [
  "SAP Technical",
  "SAP Functional",
  "HR Courses",
  "VLSI",
  "Data Science",
  "Python with Fast API",
];

const categoryIcons = {
  "SAP Technical": <FaDatabase />,
  "SAP Functional": <BsDatabaseFillX />,
  "HR Courses": <FaUserTie />,
  "VLSI": <FaMicrochip />,
  "Data Science": <FaChartLine />,
  "Python with Fast API": <FaPython />,
};

const MegaMenu = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState("SAP Technical");
  const menuRef = useRef();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const filteredCourses = activeCategory
    ? coursesData.filter((course) => course.category.includes(activeCategory))
    : [];

  return (
    <div
      ref={menuRef}
      className="absolute left-0 top-full w-[900px] bg-white shadow-xl z-50 rounded-md border border-gray-200 mt-3 flex"
    >
      {/* Categories Sidebar */}
      <div className="w-64 border-r border-gray-200 p-4 bg-gray-50">
        <h3 className="text-md font-bold mb-3 text-gray-800">Categories</h3>
        <nav className="flex flex-col gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                activeCategory === category
                  ? "bg-[#C81D25] text-white font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
              onMouseEnter={() => setActiveCategory(category)}
              onFocus={() => setActiveCategory(category)}
            >
              {categoryIcons[category]} {category}
            </button>
          ))}
        </nav>
      </div>

      {/* Courses Panel */}
      <div
        className={`flex-1 p-4 ${
          filteredCourses.length === 1
            ? "flex flex-col gap-2"
            : "grid grid-cols-2 gap-2"
        } ${filteredCourses.length > 8 ? "max-h-[400px] overflow-y-scroll" : ""}`}
      >
        {filteredCourses.length > 0 ? (
          filteredCourses.map(({ title, slug, icon: Icon }) => (
            <Link
              to={`/course/${slug}`}
              key={slug}
              className="flex items-center gap-2 border border-gray-200 rounded-md p-2 hover:shadow-sm transition-shadow bg-white text-sm hover:text-[#C81D25]"
              onClick={onClose}
            >
              {/* Render the icon component */}
              {Icon && <Icon className="text-[#C81D25] text-base" />}
              <h6 className="font-medium text-gray-800">{title}</h6>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 italic">No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default MegaMenu;
