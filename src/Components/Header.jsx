import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import GridViewIcon from "@mui/icons-material/GridView";
import MegaMenu from "./MegaMenu";
import { RxCross2 } from "react-icons/rx";
import { useSearch } from "./ContextApi/SearchContext";
import {
  FaUserGraduate,
  FaSchool,
  FaBriefcase,
  FaHandshake,
  FaChalkboardTeacher,
  FaBlog,
} from "react-icons/fa";

const Header = () => {
  const { courses } = useSearch(); // ✅ use only course data

  // Independent local search state
  const [headerQuery, setHeaderQuery] = useState("");
  const [headerFiltered, setHeaderFiltered] = useState([]);
  const debounceRef = useRef(null);

  // Dropdown + menu state
  const [aboutOpen, setAboutOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const timerRef = useRef(null);
  const aboutTimerRef = useRef(null);
  const [aboutMobileOpen, setAboutMobileOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  // Mobile categories (mirror MegaMenu behavior)
  const categories = useMemo(() => {
    const all = courses?.map((c) => c.courseCategory) || [];
    return [...new Set(all)];
  }, [courses]);
  const [activeMobileCategory, setActiveMobileCategory] = useState(categories[0] || "");
  useEffect(() => {
    if (categories.length > 0) setActiveMobileCategory(categories[0]);
  }, [categories]);

  const aboutusHeader = [
    { icon: <FaUserGraduate />, label: "Our Mentors", path: "/mentors" },
    { icon: <FaSchool />, label: "Education Institution", path: "/education" },
    { icon: <FaBriefcase />, label: "Career", path: "/career" },
    { icon: <FaChalkboardTeacher />, label: "Corporate Training", path: "/corporate-training" },
    { icon: <FaHandshake />, label: "Hire from Us", path: "/hire" },
    { icon: <FaBlog />, label: "Blog", path: "/blog" },
  ];

  // 🔍 Debounced search
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      const trimmed = headerQuery.trim().toLowerCase();
      if (trimmed === "") return setHeaderFiltered([]);

      const results = courses.filter(
        (course) =>
          course.courseTitle?.toLowerCase().includes(trimmed) ||
          course.courseDescription?.toLowerCase().includes(trimmed)
      );
      setHeaderFiltered(results);
    }, 300);

    return () => clearTimeout(debounceRef.current);
  }, [headerQuery, courses]);

  const clearSearch = () => {
    setHeaderQuery("");
    setHeaderFiltered([]);
  };

  // Hover handlers
  const handleAboutMouseEnter = () => {
    clearTimeout(aboutTimerRef.current);
    setAboutOpen(true);
  };
  const handleAboutMouseLeave = () => {
    aboutTimerRef.current = setTimeout(() => setAboutOpen(false), 200);
  };
  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setShowMegaMenu(true);
  };
  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setShowMegaMenu(false), 200);
  };

  return (
    <header className="w-full shadow-md top-0 z-50 bg-[#364D9D] md:bg-white h-14 md:h-22 py-1 md:py-0 md:mb-0">
      <div className="relative grid grid-cols-5 items-center px-4 md:px-0 md:flex md:justify-between h-full">
        {/* Mobile Login (left) */}
        <div className="md:hidden justify-self-center col-span-1">
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <button className="bg-[#C81D25] px-3 py-1 rounded-lg text-white font-medium hover:bg-[#a9151c] transition">
              Login
            </button>
          </Link>
        </div>
        {/* Logo */}
        <div className="col-start-2 col-span-3 justify-self-center z-10 flex items-center h-full md:h-full bg-[#364D9D] px-3 md:px-4 justify-center md:justify-start md:static">
          <Link to="/">
            <img src="/GTR Logo.webp" alt="Logo" className="h-12 md:h-14 object-contain" />
          </Link>
        </div>

        {/* Desktop Courses + MegaMenu */}
        <div
          className="relative hidden md:block"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            to="/courses"
            className="flex items-center text-lg font-semibold gap-2 text-gray-800 hover:text-[#364D9D] transition"
            aria-haspopup="true"
            aria-expanded={showMegaMenu ? "true" : "false"}
          >
            <GridViewIcon fontSize="medium" />
            Courses
          </Link>
          {showMegaMenu && <MegaMenu onClose={() => setShowMegaMenu(false)} />}
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex relative items-center gap-3 border border-gray-300 p-2 rounded-full w-[35%] focus-within:shadow-md">
          <input
            type="text"
            placeholder="Search for courses..."
            className="w-full text-sm p-1 focus:outline-none"
            value={headerQuery}
            onChange={(e) => setHeaderQuery(e.target.value)}
          />
          {headerQuery ? (
            <RxCross2
              className="text-xl text-gray-500 cursor-pointer hover:text-[#364D9D] transition"
              onClick={clearSearch}
            />
          ) : (
            <CiSearch className="text-2xl text-gray-600 cursor-pointer hover:text-[#364D9D]" />
          )}

          {/* Dropdown results */}
          {headerFiltered.length > 0 && (
            <ul className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-2xl w-full max-h-72 overflow-y-auto z-50 animate-fadeIn">
              {headerFiltered.map((course) => (
                <li key={course.courseUrl}>
                  <Link
                    to={`/course/${course.courseUrl}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-[#f5f8ff] text-gray-800 transition-all duration-200"
                    onClick={clearSearch}
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#e8ecff]">
                      <span className="text-[#364D9D] text-lg font-bold">📘</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">{course.courseKeyword}</span>
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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <Link to="/enterprise" className="text-gray-700 hover:text-[#364D9D] transition">
            Enterprises Solution
          </Link>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <Link to="/about" className="text-gray-700 hover:text-[#364D9D] font-semibold transition">
              About Us
            </Link>
            {aboutOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-8 w-80 bg-white rounded-b-lg shadow-lg z-50 animate-fadeIn">
                <ul className="grid grid-cols-1 gap-2 p-4">
                  {aboutusHeader.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.path}
                        className="flex justify-between items-center px-4 py-2 rounded-lg hover:bg-[#f5f8ff] hover:text-[#364D9D] text-gray-800 font-medium transition-all transform hover:translate-x-2"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[#364D9D] text-lg">{item.icon}</span>
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

          <Link to="/login">
            <button className="bg-[#C81D25] px-5 py-3 mr-4 rounded-lg text-white font-medium hover:bg-[#a9151c] transition">
              Login / Signup
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center justify-self-center h-full col-span-1">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <FiX className="text-3xl text-white md:text-gray-800" /> : <FiMenu className="text-3xl text-white md:text-gray-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg relative z-[1000]">

          {/* Search */}
          <div className="px-4 pb-4 mt-4">
            <div className="flex items-center gap-3 border border-gray-300 p-2 rounded-full">
              <input
                type="text"
                placeholder="Search for courses..."
                className="w-full text-sm px-2 focus:outline-none"
                value={headerQuery}
                onChange={(e) => setHeaderQuery(e.target.value)}
              />
              {headerQuery ? (
                <RxCross2
                  className="text-xl text-gray-500 cursor-pointer hover:text-[#364D9D]"
                  onClick={() => {
                    setHeaderQuery("");
                    setHeaderFiltered([]);
                  }}
                />
              ) : (
                <CiSearch className="text-2xl text-gray-600 cursor-pointer hover:text-[#364D9D]" />
              )}
            </div>
            {headerFiltered.length > 0 && (
              <ul className="mt-3 bg-white border border-gray-200 rounded-2xl shadow-sm max-h-72 overflow-y-auto">
                {headerFiltered.map((course) => (
                  <li key={course.courseUrl}>
                    <Link
                      to={`/course/${course.courseUrl}`}
                      onClick={() => {
                        setIsOpen(false);
                        setHeaderQuery("");
                        setHeaderFiltered([]);
                      }}
                      className="flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-[#f5f8ff]"
                    >
                      <span className="text-sm font-medium">{course.courseKeyword}</span>
                      <span className="text-[#364D9D] font-bold">{">"}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Courses Section */}
          <div className="px-4 pt-3 pb-6">
            <button
              className="w-full flex items-center justify-between text-gray-800"
              onClick={() => setMobileCoursesOpen((v) => !v)}
              aria-expanded={mobileCoursesOpen ? "true" : "false"}
            >
              <span className="flex items-center gap-2">
                <GridViewIcon fontSize="small" />
                <span className="text-base font-semibold">Courses</span>
              </span>
              <span className={`text-gray-500 transition-transform ${mobileCoursesOpen ? "rotate-90" : ""}`}>{">"}</span>
            </button>

            {mobileCoursesOpen && (
              <>
                {/* Category pills */}
                <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      className={`shrink-0 px-3 py-1 rounded-full text-sm border transition ${
                        activeMobileCategory === cat
                          ? "bg-[#364D9D] text-white border-[#364D9D]"
                          : "text-gray-700 border-gray-300"
                      }`}
                      onClick={() => setActiveMobileCategory(cat)}
                    >
                      {cat || "General"}
                    </button>
                  ))}
                </div>

                {/* Course list for active category (routes mirror MegaMenu) */}
                <ul className="mt-4 divide-y divide-gray-200 rounded-lg border border-gray-200">
                  {courses
                    .filter((c) => !activeMobileCategory || c.courseCategory === activeMobileCategory)
                    .map((course) => (
                      <li key={course.courseUrl}>
                        <Link
                          to={`/course/${course.courseUrl}`}
                          onClick={() => {
                            setIsOpen(false);
                            clearSearch();
                          }}
                          className="flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-[#f5f8ff]"
                        >
                          <span className="text-sm font-medium">{course.courseKeyword}</span>
                          <span className="text-[#364D9D] font-bold">{">"}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </>
            )}

            {/* Utility links under list */}
            <div className="mt-4 grid grid-cols-1 gap-3 font-medium">
              <Link to="/enterprise" className="text-gray-700 hover:text-[#364D9D]" onClick={() => setIsOpen(false)}>
                Enterprises Solution
              </Link>

              {/* About Us collapsible */}
              <button
                className="flex items-center justify-between w-full text-left text-gray-700 hover:text-[#364D9D]"
                onClick={() => setAboutMobileOpen((v) => !v)}
                aria-expanded={aboutMobileOpen ? "true" : "false"}
              >
                <span>About Us</span>
                <span className={`transition-transform ${aboutMobileOpen ? "rotate-90" : ""}`}>{">"}</span>
              </button>
              {aboutMobileOpen && (
                <ul className="ml-2 rounded-lg border border-gray-200 divide-y divide-gray-200">
                  {aboutusHeader.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.path}
                        className="flex items-center justify-between px-3 py-2 text-gray-800 hover:bg-[#f5f8ff]"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-[#364D9D]">{item.icon}</span>
                          {item.label}
                        </span>
                        <span className="text-gray-400 font-bold">{">"}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              <Link to="/all-courses" className="text-[#C81D25] font-semibold" onClick={() => setIsOpen(false)}>
                View All Courses
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
