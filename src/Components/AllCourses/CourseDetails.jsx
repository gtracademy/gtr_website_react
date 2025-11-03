import React, { useState } from "react";
import { useSearch } from "../ContextApi/SearchContext";
import EnrollNow from "../Models/EnrollNow";

const AllCourses = () => {
  const { courses } = useSearch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  console.log(selectedCourse);
  
  const [selectedCategory, setSelectedCategory] = useState("All");

  if (!courses || courses.length === 0) {
    return (
      <div className="text-center py-20 text-gray-600 text-lg">
        No courses available at the moment.
      </div>
    );
  }

  // ✅ Get unique course categories
  const categories = ["All", ...new Set(courses.map((c) => c.courseCategory))];

  // ✅ Filter courses by category
  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((c) => c.courseCategory === selectedCategory);

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto max-w-7xl">
        {/* ✅ Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-10">
          Our Courses
        </h1>

        {/* ✅ Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full border text-sm md:text-base transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ✅ Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => {
            const shortDescription =
              course.courseDescription?.split(" ").slice(0, 100).join(" ") +
              (course.courseDescription?.split(" ").length > 100 ? "..." : "");

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
              >
                {/* ✅ Course Image */}
                <img
                  src={course.courseImage?.cloud}
                  alt={course.courseKeyword}
                  className="w-full h-56 object-cover"
                />

                {/* ✅ Course Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    {course.courseKeyword}
                  </h2>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-4">
                    {shortDescription ||
                      "This course helps you enhance your skills and career."}
                  </p>

                  {/* ✅ Duration and Eligibility */}
                  <div className="text-sm text-gray-600 mb-4">
                    <p>
                      <span className="font-semibold text-gray-800">
                        Duration:
                      </span>{" "}
                      {course.courseDuration || "Not specified"}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-800">
                        Eligibility:
                      </span>{" "}
                      {course.courseEligibility || "Open for all learners"}
                    </p>
                  </div>

                  {/* ✅ Price Section */}
                  <div className="mt-auto">
                    {/* Online */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">
                        Online (Live Classes):
                      </span>
                      <div>
                        <span className="text-red-600 font-bold text-lg mr-2">
                          ₹{course.courseDiscount?.online}
                        </span>
                        <span className="line-through text-gray-500 text-sm">
                          ₹{course.coursePrice?.online}
                        </span>
                      </div>
                    </div>

                    {/* Offline */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-700 font-medium">
                        Offline (Recorded Classes):
                      </span>
                      <div>
                        <span className="text-red-600 font-bold text-lg mr-2">
                          ₹{course.courseDiscount?.offline}
                        </span>
                        <span className="line-through text-gray-500 text-sm">
                          ₹{course.coursePrice?.offline}
                        </span>
                      </div>
                    </div>

                    {/* ✅ Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleEnrollClick(course)}
                        className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-medium transition duration-200"
                      >
                        Enroll Now
                      </button>

                      <a
                        href={`/course/${course.courseUrl}`}
                        rel="noopener noreferrer"
                        className="w-1/2 text-center bg-gray-200 hover:bg-gray-300 text-gray-800 py-2.5 rounded-xl font-medium transition duration-200"
                      >
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ✅ Enroll Modal */}
      {selectedCourse && (
        <EnrollNow
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          coursePricing={{
            price: selectedCourse?.coursePrice,
            discount: selectedCourse?.courseDiscount,
          }}
          courseTitle={selectedCourse?.courseKeyword}
        />
      )}
    </div>
  );
};

export default AllCourses;
