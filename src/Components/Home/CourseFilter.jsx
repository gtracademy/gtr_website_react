import React, { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../ContextApi/SearchContext";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDroprightCircle, IoIosArrowRoundForward } from "react-icons/io";
import { BsDownload } from "react-icons/bs";
import BrochureForm from "../Models/BrochureForm";

const CourseFilter = () => {
  const { courses } = useSearch(); // ✅ Use shared data only
  const [isModalOpens, setModalOpens] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("SAP Technical");

  // Local search
  const [query, setQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const debounceRef = useRef(null);

  // Debounced search
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const trimmed = query.trim().toLowerCase();
      if (trimmed === "") return setFilteredCourses([]);

      const results = courses.filter(
        (course) =>
          course.courseTitle?.toLowerCase().includes(trimmed) ||
          course.courseDescription?.toLowerCase().includes(trimmed)
      );
      setFilteredCourses(results);
    }, 300);

    return () => clearTimeout(debounceRef.current);
  }, [query, courses]);

  const clearSearch = () => {
    setQuery("");
    setFilteredCourses([]);
  };

  // Categories
  const categories = useMemo(() => {
    const unique = new Set(courses.map((c) => c.courseCategory || "Others"));
    return [...unique];
  }, [courses]);

  const filteredByCategory = useMemo(() => {
    return courses.filter((course) => course.courseCategory === selectedCategory);
  }, [courses, selectedCategory]);

  return (
    <>
      <div className="px-4 min-h-screen font-sans py-6 sm:py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-700 mb-1 font-serif">
              Select your goal
            </h2>
            <p className="font-lato font-semibold text-base sm:text-lg md:text-[20px] leading-relaxed text-[#364D9D] max-w-lg mx-auto md:mx-0">
              Courses available for you
            </p>
          </div>

          {/* Search Input */}
          <div className="hidden md:flex relative items-center gap-3 border border-gray-300 p-2 rounded-full w-[35%] focus-within:shadow-md">
            <input
              type="text"
              placeholder="Search for courses..."
              className="w-full text-sm p-1 focus:outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query ? (
              <RxCross2 className="text-xl text-gray-500 cursor-pointer hover:text-[#364D9D]" onClick={clearSearch} />
            ) : (
              <CiSearch className="text-2xl text-gray-600 cursor-pointer hover:text-[#364D9D]" />
            )}

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
                        <span className="text-[#364D9D] text-lg font-bold">📘</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">{course.courseKeyword}</span>
                        <span className="text-xs text-gray-500">{course.courseCategory || "General"}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-medium transition duration-200 ${
                selectedCategory === cat ? "bg-[#364D9D] text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredByCategory?.map((course, index) => (
            <div
              key={index}
              className="relative w-full h-auto overflow-hidden rounded-xl shadow-lg group cursor-pointer transition-transform duration-300 hover:scale-[1.015]"
            >
              {/* Back Image Card (default view) */}
              <div className="relative z-10 transition-opacity duration-500 group-hover:opacity-10">
                <img
                  src={
                    course.courseImage?.cloud ||
                    "https://via.placeholder.com/400x250?text=No+Image"
                  }
                  alt={course.courseKeyword}
                  className="w-full h-40 sm:h-48 md:h-56 object-fill rounded-t-xl"
                />
                <div className="bg-white bg-opacity-50 rounded-b-xl p-4">
                  <div className="text-base sm:text-base text-[#2D2D2D] font-semibold font-sans">
                    {course.courseKeyword}
                  </div>
                  <p className="text-sm sm:text-sm text-[#364D9D] py-2">
                    {course.courseDescription.length > 90
                      ? course.courseDescription.slice(0, 90) + "..."
                      : course.courseDescription}
                  </p>
                  <div className="h-0.5 bg-gray-700 my-2"></div>
                  <div className="flex  items-center text-[#2D2D2D] gap-1 mt-2 py-2 text-sm font-sans font-semibold">
                    <span>Fee</span>
                    <span className="font-semibold">
                      ₹{course.courseDiscount?.online || "N/A"}
                    </span>
                    <IoIosArrowDroprightCircle className="text-2xl text-black" />
                  </div>
                </div>
              </div>

              {/* Hover Card */}
              <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between">
                {/* Header / Course Keyword */}
                <div className="py-2 sm:py-3 border-b border-[#004c7d] ">
                  <div className="text-base sm:text-base font-bold text-center font-lato text-[#004c7d] bg-transparent">
                    {course.courseKeyword}
                  </div>
                </div>

                {/* Description & Instructor */}
                <div className="p-3 sm:p-4">
                  <p className="text-sm sm:text-sm font-sans text-[#004c7d]">
                    {course.courseDescription.length > 220
                      ? course.courseDescription.slice(0, 220) + "..."
                      : course.courseDescription}
                  </p>
                  <p className="mt-1 text-sm sm:text-sm font-medium font-sans text-[#004c7d]">
                    Instructor: <span> {course.mentor?.name || "N/A"}</span>
                  </p>
                </div>

                {/* Fee */}
                <div className="p-3 sm:p-4">
                  <div className="text-sm sm:text-sm font-semibold font-sans text-[#004c7d]">
                    <span>Course Fee: </span>₹
                    {course?.courseDiscount?.online || "N/A"}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 p-3 sm:p-4">
                  <a
                    className="bg-[#364d9d] text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded w-full text-sm font-semibold font-sans transform hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
                    onClick={() => {
                      setSelectedCourse(course?.courseBrochure || "#");
                      setModalOpens(true);
                    }}
                  >
                    Brochure <BsDownload />
                  </a>
                  <a
                    href={`/course/${course.courseUrl}`}
                    className=" text-[#004c7d] px-2 sm:px-3 py-1.5 sm:py-2 rounded w-full text-sm font-semibold font-sans bg-gray-200 transform hover:scale-105 transition-transform duration-300 flex items-center justify-center"
                  >
                    Know More <IoIosArrowRoundForward />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brochure Modal */}
      {isModalOpens && (
        <BrochureForm
          isOpen={isModalOpens}
          onClose={() => setModalOpens(false)}
          brochureUrl={selectedCourse?.courseBrochure?.cloud}
        />
      )}
    </>
  );
};

export default CourseFilter;
