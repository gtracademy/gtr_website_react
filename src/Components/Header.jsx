import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import { FaChalkboardTeacher, FaVideo } from "react-icons/fa";

// Data for Courses
const courseData = {
  online: {
    "SAP Technical": [
      "ABAP on HANA",
      "SAP UI5/Fiori",
      "SAP BASIS",
      "SAP BTP",
      "SAP S/4 HANA Development",
    ],
    "SAP Functional": ["SAP MM", "SAP SD", "SAP FICO", "SAP HCM", "SAP PP"],
    "Data Science": [
      "Python for Data Science",
      "Machine Learning",
      "Deep Learning",
      "Power BI",
      "Tableau",
    ],
  },
  recorded: {
    "SAP Technical": [
      "ABAP Complete Guide",
      "Fiori App Development",
      "SAP Basis Automation",
    ],
    "SAP Functional": [
      "MM with Real-time Scenarios",
      "FICO for Beginners",
      "SD Complete Training",
    ],
    "Data Science": [
      "Recorded Python DS",
      "ML Crash Course",
      "Data Visualization Bootcamp",
    ],
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [selectedMode, setSelectedMode] = useState("online"); // default Online
  const [selectedCategory, setSelectedCategory] = useState("SAP Technical"); // default category
  const timerRef = useRef(null);

  // Handle show with delay
  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setShowMegaMenu(true);
  };

  // Handle hide with delay
  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setShowMegaMenu(false);
    }, 200); // delay 200ms for smoother hover
  };

  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-3 md:py-4 px-4 md:px-0">
        {/* Logo + Course button */}
        <div className="flex items-center gap-5 relative">
          
          <Link to="/">
          <img
            src="/GTR Logo.webp"
            alt="Logo"
            className="h-12 w-auto bg-[#364D9D] px-3 rounded-lg"
          />
          </Link>

          {/* Mega Menu Trigger (Hover) */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hidden md:flex items-center font-semibold gap-2 cursor-pointer text-gray-800 hover:text-[#364D9D] transition">
              <img src="/widgets.png" alt="Course Icon" className="size-6" />
              Courses
            </button>

            {/* Mega Menu */}
            {showMegaMenu && (
              <div className="absolute left-0 top-full mt-2 w-[1000px] bg-white shadow-xl border border-gray-200 rounded-xl p-6 grid grid-cols-4 gap-6 animate-fadeIn">
                {/* Column 1 - Learning Modes */}
                <div>
                  <h3 className="font-semibold text-[#364D9D] mb-3">
                    Learning Modes
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li
                      className={`flex items-center gap-2 cursor-pointer ${
                        selectedMode === "online"
                          ? "text-[#C81D25] font-semibold"
                          : "hover:text-[#C81D25]"
                      }`}
                      onMouseEnter={() => {
                        setSelectedMode("online");
                        setSelectedCategory("SAP Technical");
                      }}
                    >
                      <FaChalkboardTeacher /> Online
                    </li>
                    <li
                      className={`flex items-center gap-2 cursor-pointer ${
                        selectedMode === "recorded"
                          ? "text-[#C81D25] font-semibold"
                          : "hover:text-[#C81D25]"
                      }`}
                      onMouseEnter={() => {
                        setSelectedMode("recorded");
                        setSelectedCategory("SAP Technical");
                      }}
                    >
                      <FaVideo /> Recorded
                    </li>
                  </ul>
                </div>

                {/* Column 2 - Categories */}
                <div>
                  <h3 className="font-semibold text-[#364D9D] mb-3">
                    Categories
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {Object.keys(courseData[selectedMode]).map((cat) => (
                      <li
                        key={cat}
                        className={`cursor-pointer ${
                          selectedCategory === cat
                            ? "text-[#C81D25] font-semibold"
                            : "hover:text-[#C81D25]"
                        }`}
                        onMouseEnter={() => setSelectedCategory(cat)}
                      >
                        {cat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3 + 4 - Courses */}
                <div className="col-span-2 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-[#364D9D] mb-3">
                      Courses
                    </h3>
                    <div className="grid grid-cols-2 gap-3 text-gray-600">
                      {courseData[selectedMode][selectedCategory].map(
                        (course, index) => (
                          <Link to='/course-page'
                            key={index}
                            className="hover:text-[#C81D25] cursor-pointer"
                          >
                            {course}
                          </Link >
                        )
                      )}
                    </div>
                  </div>

                  {/* Add Course Button */}
                  <div className="mt-4 flex justify-end">
                    <Link to="/all-courses"  className="bg-[#364D9D] text-white px-4 py-2 rounded-lg hover:bg-[#2b3a7f] transition">
                      All Course
                    </Link >
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-3 border border-gray-300 p-2 rounded-full w-[35%] focus-within:shadow-md">
          <input
            type="text"
            placeholder="Search for courses..."
            className="w-full text-sm px-2 focus:outline-none"
          />
          <CiSearch className="text-2xl text-gray-600 cursor-pointer hover:text-[#364D9D]" />
        </div>

        {/* Right Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <Link to="#" className="text-gray-700 hover:text-[#364D9D] transition">
            Business Solution
          </Link>
          <Link to="#" className="text-gray-700 hover:text-[#364D9D] transition">
            FAQ
          </Link>
          <Link to="#">
            <button className="bg-[#C81D25] px-4 py-2 rounded-lg cursor-pointer text-white font-medium hover:bg-[#a9151c] transition">
              Login / Signup
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
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
            <Link
              to="#"
              className="text-gray-700 hover:text-[#364D9D] transition"
            >
              Business Solution
            </Link>
            <Link
              to="#"
              className="text-gray-700 hover:text-[#364D9D] transition"
            >
              FAQ
            </Link>
            <Link to="#">
              <button className="bg-[#C81D25] w-full py-2 rounded-lg text-white font-medium hover:bg-[#a9151c] transition">
                Login / Signup
              </button>
            </Link>
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
