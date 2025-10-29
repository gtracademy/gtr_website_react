import React, { useEffect, useState } from "react";
import Highlights from "./Highlights";
import { useSearch } from "../ContextApi/SearchContext";
import { useParams } from "react-router-dom";

const Overview = () => {
  const { courses } = useSearch();
  const { slug } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (courses && courses.length > 0 && slug) {
      const matched = courses.find(
        (c) => c.courseUrl?.toLowerCase() === slug.toLowerCase()
      );
      setCourse(matched || null);
    }
  }, [courses, slug]);

  if (!courses || courses.length === 0) {
    return <p>Loading course details...</p>;
  }

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Content Column */}
        <div className="md:w-full">
          <div id="overview">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B3954] border-b-2 border-[#C81D25] pb-2 inline-block">
              Overview
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
              {course?.courseOverview || "No overview available for this course."}
            </p>
          </div>
          <Highlights />
        </div>
      </div>
    </section>
  );
};

export default Overview;
