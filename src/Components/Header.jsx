import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import GridViewIcon from "@mui/icons-material/GridView";
import MegaMenu from "./MegaMenu"; // Make sure path is correct
import { coursesData } from "./data/CourseData";
import { RxCross2 } from "react-icons/rx";
import { useSearch } from "./ContextApi/SearchContext";


const Header = () => {
  const { query, setQuery, setFilteredCourses, filteredCourses } = useSearch();

  const [isOpen, setIsOpen] = useState(false); // Mobile Menu
  const [showMegaMenu, setShowMegaMenu] = useState(false); // Mega Menu


  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setShowMegaMenu(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setShowMegaMenu(false);
    }, 200);
  };

  const handleCoursesClick = () => {
    setShowMegaMenu((prev) => !prev);
  };

  // 🔍 Handle search
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFilteredCourses([]);
    } else {
      const results = coursesData.filter((course) =>
        course.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCourses(results);
    }
  };

  // 🔒 Clear search on select
  const clearSearch = () => {
    setQuery("");
    setFilteredCourses([]);
  };

  return (
    <header className="w-full shadow-md bg-white top-0 z-50">
      <div className="  flex justify-between items-center ">
        {/* Logo */}
        <div className="flex items-center py-3 md:py-5 bg-[#364D9D] px-4">
          <Link to="/">
            <img src="/GTR Logo.webp" alt="Logo" className="h-14 " />
          </Link>
        </div>

        {/* Desktop: Courses + MegaMenu */}
        <div
          className="relative hidden md:block"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="flex items-center text-lg font-semibold gap-2 cursor-pointer text-gray-800 hover:text-[#364D9D] transition"
            onClick={handleCoursesClick}
          >
            <GridViewIcon fontSize="medium" />
            Courses
          </button>

          {showMegaMenu && <MegaMenu onClose={() => setShowMegaMenu(false)} />}
        </div>

        {/* Desktop Search */}
        {/* Desktop Search */}
        <div className="hidden md:flex relative items-center gap-3 border border-gray-300 p-2 rounded-full w-[35%] focus-within:shadow-md">
          <input
            type="text"
            placeholder="Search for courses..."
            className="w-full text-sm p-1 focus:outline-none"
            value={query}
            onChange={handleSearch}
          />

          {query ? (
            <RxCross2
              className="text-xl text-gray-500 cursor-pointer hover:text-[#364D9D] transition"
              onClick={clearSearch}
            />
          ) : (
            <CiSearch className="text-2xl text-gray-600 cursor-pointer hover:text-[#364D9D]" />
          )}

          {/* 🔽 Dropdown results */}
          {filteredCourses.length > 0 && (
            <ul className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-2xl w-full  max-h-72 overflow-y-auto z-50 animate-fadeIn">
              {filteredCourses.map((course) => (
                <li key={course.slug}>
                  <Link
                    to={`/course/${course.slug}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-[#f5f8ff] text-gray-800 transition-all duration-200"
                    onClick={clearSearch}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#e8ecff]">
                      <course.icon className="text-[#364D9D] text-lg" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium ">{course.title}</span>
                      <span className="text-xs text-gray-500">
                        {course.category[0]}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {query && filteredCourses.length === 0 && (
            <div className="absolute left-[100px] top-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-2xl w-full max-w-md p-4 text-center text-gray-500 z-50 text-sm animate-fadeIn">
              No results found
            </div>
          )}
        </div>

        {/* Right Menu Desktop */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <Link
            to="#"
            className="text-gray-700 hover:text-[#364D9D] transition"
          >
            Enterprises Solution
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-[#364D9D] transition"
          >
            FAQ
          </Link>
          <Link to="#">
            <button className="bg-[#C81D25] px-5 py-3 rounded-lg text-white font-medium hover:bg-[#a9151c] transition">
              Login / Signup
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FiX className="text-3xl text-gray-800" />
            ) : (
              <FiMenu className="text-3xl text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col gap-4 px-6 py-5 font-medium">
            <Link to="#" className="text-gray-700 hover:text-[#364D9D]">
              Courses
            </Link>
            <Link to="#" className="text-gray-700 hover:text-[#364D9D]">
              Enterprises Solution
            </Link>
            <Link to="#" className="text-gray-700 hover:text-[#364D9D]">
              FAQ
            </Link>
            <Link to="#">
              <button className="bg-[#C81D25] w-full py-2 rounded-lg text-white font-medium hover:bg-[#a9151c] transition">
                Login / Signup
              </button>
            </Link>

            {/* Mobile Search */}
            <div className="flex items-center gap-3 border border-gray-300 p-2 rounded-full">
              <input
                type="text"
                placeholder="Search for courses..."
                className="w-full text-sm px-2 focus:outline-none"
              />
              <CiSearch className="text-2xl text-gray-600 cursor-pointer hover:text-[#364D9D]" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
