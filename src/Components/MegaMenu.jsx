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
      className="absolute left-0 top-full w-[900px] bg-white shadow-xl z-50 rounded-md border border-gray-200 mt-3 flex"
    >
      {/* Categories Sidebar */}
      <div className="w-64 border-r border-gray-200 p-4 bg-gray-50">
        <h3 className="text-md font-bold mb-3 text-gray-800">Categories</h3>
        <nav className="flex flex-col gap-2">
          {categories.length > 0 ? (
            categories.map((category) => (
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
                {category}
              </button>
            ))
          ) : (
            <p className="text-gray-500 italic">No categories found.</p>
          )}
        </nav>
      </div>

      {/* Courses Panel */}
      <div className="flex-1 p-4 grid grid-cols-2 gap-3">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <Link
              to={`/course/${course.courseUrl}`}
              key={course.courseUrl}
              className="flex items-center gap-2 border border-gray-200 rounded-md p-3 bg-white text-sm text-gray-800 hover:text-[#C81D25] hover:shadow-sm transition-all"
              onClick={onClose}
            >
              <h6 className="font-medium">{course.courseTitle}</h6>
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
