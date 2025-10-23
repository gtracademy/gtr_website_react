import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import GridViewIcon from "@mui/icons-material/GridView";
import MegaMenu from "./MegaMenu"; // Make sure path is correct
import { RxCross2 } from "react-icons/rx";
import { useSearch } from "./ContextApi/SearchContext";
import {
  FaUserGraduate,
  FaSchool,
  FaBriefcase,
  FaHandshake,
  FaSmile,
  FaChalkboardTeacher,
  FaBlog,
} from "react-icons/fa";

const Header = () => {
  const { query, setQuery, setFilteredCourses, filteredCourses } = useSearch();

  const [aboutOpen, setAboutOpen] = useState(false); // Dropdown state

  const [isOpen, setIsOpen] = useState(false); // Mobile Menu
  const [showMegaMenu, setShowMegaMenu] = useState(false); // Mega Menu

  const timerRef = useRef(null);
  const aboutTimerRef = useRef(null); // Timer for About dropdown

  const aboutusHeader = [
    { icon: <FaUserGraduate />, label: "Our Mentors", path: "/mentors" },
    { icon: <FaSchool />, label: "Education Institution", path: "/education" },
    { icon: <FaBriefcase />, label: "Career", path: "/career" },
    {
      icon: <FaChalkboardTeacher />,
      label: "Corporate Training",
      path: "/corporate-training",
    },
    { icon: <FaHandshake />, label: "Hire from Us", path: "/hire" },
    { icon: <FaBlog />, label: "Blog", path: "/blog" },
    { icon: <FaSmile />, label: "Life at GTR", path: "/life-at-gtr" },
  ];

  // About dropdown handlers
  const handleAboutMouseEnter = () => {
    clearTimeout(aboutTimerRef.current);
    setAboutOpen(true);
  };

  const handleAboutMouseLeave = () => {
    aboutTimerRef.current = setTimeout(() => {
      setAboutOpen(false);
    }, 200);
  };

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
        <div className="hidden md:flex relative items-center gap-3 border border-gray-300 p-2 rounded-full w-[35%] focus-within:shadow-md">
          <input
            type="text"
            placeholder="Search for courses..."
            className="w-full text-sm p-1 focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {query ? (
            <RxCross2
              className="text-xl text-gray-500 cursor-pointer hover:text-[#364D9D] transition"
              onClick={clearSearch}
            />
          ) : (
            <CiSearch className="text-2xl text-gray-600 cursor-pointer hover:text-[#364D9D]" />
          )}

          {/* Dropdown results */}
          {filteredCourses.length > 0 && (
            <ul className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-2xl w-full max-h-72 overflow-y-auto z-50 animate-fadeIn">
              {filteredCourses.map((course) => (
                <li key={course.courseUrl}>
                  <Link
                    to={`/course/${course.courseUrl}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-[#f5f8ff] text-gray-800 transition-all duration-200"
                    onClick={clearSearch}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#e8ecff]">
                      <span className="text-[#364D9D] text-lg font-bold">
                        📘
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">{course.courseTitle}</span>
                      <span className="text-xs text-gray-500">
                        {course.courseCategory || "General"}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
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

          {/* About Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <Link
              to="/about"
              className="text-gray-700 hover:text-[#364D9D] font-semibold transition"
            >
              About Us
            </Link>

            {aboutOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-8 w-80 bg-white  rounded-b-lg shadow-lg z-50 animate-fadeIn">
                <ul className="grid grid-cols-1 gap-2 p-4">
                  {aboutusHeader.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.path}
                        className="flex justify-between items-center px-4 py-2 rounded-lg hover:bg-[#f5f8ff] hover:text-[#364D9D] text-gray-800 font-medium transition-all transform hover:translate-x-2"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[#364D9D] text-lg">
                            {item.icon}
                          </span>
                          <span>{item.label}</span>
                        </div>
                        <span className="text-gray-400 font-bold">{">"}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link to="#">
            <button className="bg-[#C81D25] px-5 py-3 mr-4 rounded-lg text-white font-medium hover:bg-[#a9151c] transition">
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
              About Us
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
