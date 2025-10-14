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
      className="absolute left-0 top-full w-[950px] bg-white shadow-xl z-50 rounded-md border border-gray-200 mt-3 flex"
    >
      {/* Left Sidebar - Categories */}
      <div className="w-64 border-r border-gray-200 p-4 bg-gray-50">
        <h3 className="text-md font-bold mb-3 text-gray-800">Categories</h3>
        <nav className="flex flex-col gap-2">
          {categories.length > 0 ? (
            categories.map((category) => (
              <button
                key={category}
                className={`flex justify-between items-center px-3 py-2 rounded-md text-sm transition-all ${
                  activeCategory === category
                    ? "bg-[#C81D25] text-white font-semibold"
                    : "hover:bg-gray-100 text-gray-700"
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
      <div className="flex-1 p-6 grid grid-cols-2 gap-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <Link
              to={`/course/${course.courseUrl}`}
              key={course.courseUrl}
              className="flex items-center justify-between border border-gray-200 rounded-md px-4 py-3 bg-white text-sm text-gray-800 hover:text-[#C81D25] hover:shadow-md transition-all"
              onClick={onClose}
            >
              <h6 className="font-medium">{course.courseTitle}</h6>
              <span className="text-[#C81D25] font-semibold text-xs">
                {">"}
              </span>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 italic">No courses available.</p>
        )}

        {/* "All Courses" button at bottom right */}
        <div className="col-span-2 flex justify-end mt-4">
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
