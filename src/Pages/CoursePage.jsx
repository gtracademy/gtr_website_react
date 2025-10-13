import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import CourseBanner from "../Components/CourseDetails/CourseBanner";
import Curriculum from "../Components/CourseDetails/Curriculum";
import WhoShouldJoin from "../Components/CourseDetails/WhoShouldJoin";
import Mentor from "../Components/CourseDetails/Mentor";
import Testimonials from "../Components/CourseDetails/Testimonials";
import Overview from "../Components/CourseDetails/Overview";
import CourseSidebar from "../Components/CourseDetails/CourseSidebar";
import Navbar from "../Components/CourseDetails/Navbar";
import { useSearch } from "../Components/ContextApi/SearchContext";

function CoursePage() {
  const { slug } = useParams();
  const { courses } = useSearch(); // ✅ get API courses from context
  const [course, setCourse] = useState(null);

  // Set course when courses from context are loaded
  useEffect(() => {
    if (courses && courses.length > 0) {
      const matchedCourse = courses.find(
        (c) =>
          c.courseUrl?.toLowerCase() === slug.toLowerCase() ||
          c.courseTitle?.toLowerCase().replace(/\s+/g, "-") === slug.toLowerCase()
      );
      setCourse(matchedCourse);
    }
  }, [courses, slug]);

  if (!courses || courses.length === 0) {
    return (
      <>
        <Header />
        <div className="min-h-[60vh] flex items-center justify-center text-lg">
          Loading courses...
        </div>
      </>
    );
  }

  // If course is not found after API loaded → show Coming Soon
  if (!course) {
    return (
      <>
        <Header />
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🚧 Coming Soon
          </h1>
          <p className="text-gray-600 text-lg max-w-xl">
            The course you’re looking for is not yet available. Please check back soon or explore other courses.
          </p>
        </div>
      </>
    );
  }

  // ✅ Normal course page
  return (
    <div>
      <Header />
      <div className="px-3 sm:px-14 ">
        <CourseBanner />
        <div className="hidden lg:block sticky top-0 z-50">
          <Navbar />
        </div>

        <div className="mx-auto px-6 py-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-6">
            <Overview />
            <Curriculum  course={course}/>
            <WhoShouldJoin />
            <Mentor />
            <Testimonials />
          </div>

          <div className="lg:col-span-4 -mt-24">
            <div className="sticky top-2">
              <CourseSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
