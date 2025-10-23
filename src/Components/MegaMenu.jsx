import React, { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "./ContextApi/SearchContext";

//   const categoryIcons = {
//   "SAP Technical": <FaDatabase />,
//   "SAP Functional": <BsDatabaseFillX />,
//   "HR Courses": <FaUserTie />,
//   "VLSI": <FaMicrochip />,
//   "Data Science": <FaChartLine />,
//   "Python with Fast API": <FaPython />,
// };

const MegaMenu = ({ onClose }) => {
  const { courses } = useSearch(); // ✅ Get courses from context

  const menuRef = useRef();

  // Extract unique categories dynamically
  const categories = useMemo(() => {
    const allCategories = courses?.map((c) => c.courseCategory) || [];
    return [...new Set(allCategories)];
  }, [courses]);

  // Default active category = first available one
  const [activeCategory, setActiveCategory] = useState(categories[0] || "");

  // Update active category when categories change
  useEffect(() => {
    if (categories.length > 0) {
      setActiveCategory(categories[0]);
    }
  }, [categories]);

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

  // Filter courses by selected category
  const filteredCourses = useMemo(() => {
    if (!activeCategory) return [];
    return courses.filter((course) => course.courseCategory === activeCategory);
  }, [courses, activeCategory]);

  return (
    <div
      ref={menuRef}
      className="absolute left-0 top-full w-[950px] bg-white shadow-lg z-50 rounded-b-lg mt-8 flex overflow-hidden"
    >
      {/* Left Sidebar - Categories */}
      <div className="w-64 p-4 bg-gray-50">
        <h3 className="text-md font-bold mb-3 text-gray-800">Categories</h3>
        <nav className="flex flex-col gap-2">
          {categories.length > 0 ? (
            categories.map((category) => (
              <button
                key={category}
                className={`flex justify-between items-center px-3 py-2 rounded-md text-sm transition-all ${
                  activeCategory === category
                    ? "bg-[#C81D25] text-white font-semibold"
                    : "text-gray-700 hover:text-[#C81D25]"
                }`}
                onMouseEnter={() => setActiveCategory(category)}
                onFocus={() => setActiveCategory(category)}
              >
                <span>{category}</span>
                <span className="text-xs">{">"}</span>
              </button>
            ))
          ) : (
            <p className="text-gray-500 italic">No categories found.</p>
          )}
        </nav>
      </div>

      {/* Right Section - Courses */}
      <div className="relative flex-1 p-5 pb-14 max-h-[400px] overflow-y-auto">
        <div
          className={`${
            filteredCourses.length === 1
              ? "grid grid-cols-1 gap-4 w-1/2"
              : "grid grid-cols-2 gap-4"
          }`}
        >
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <Link
                to={`/course/${course.courseUrl}`}
                key={course.courseUrl}
                onClick={onClose}
                className="flex items-center justify-between rounded-lg px-5 py-4 bg-gray-100 text-gray-800 text-sm font-medium hover:text-[#C81D25] transition-all"
              >
                <p>{course.courseKeyword}</p>
                <span className="text-[#C81D25] font-semibold text-sm">
                  {">"}
                </span>
              </Link>
            ))
          ) : (
            <p className="text-gray-500 italic">No courses available.</p>
          )}
        </div>

        {/* "All Courses" button - fixed bottom left */}
        <div className="absolute bottom-4 right-5 bg-white">
          <Link
            to="/all-courses"
            className="flex items-center gap-2 text-[#C81D25] font-semibold text-sm hover:underline"
          >
            <span>📚</span> All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
