import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseBanner from "../Components/CourseDetails/CourseBanner";
import Curriculum from "../Components/CourseDetails/Curriculum";
import WhoShouldJoin from "../Components/CourseDetails/WhoShouldJoin";
import Mentor from "../Components/CourseDetails/Mentor";
import Testimonials from "../Components/CourseDetails/Testimonials";
import Overview from "../Components/CourseDetails/Overview";
import CourseSidebar from "../Components/CourseDetails/CourseSidebar";
import Navbar from "../Components/CourseDetails/Navbar";
import { useSearch } from "../Components/ContextApi/SearchContext";
import Skeleton from "../Components/common/Skeleton";

function CoursePage() {
  const { slug } = useParams();
  const { courses } = useSearch();
  const [course, setCourse] = useState(null);

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

  // ⏳ Loading state — show skeleton layout
  if (!courses || courses.length === 0) {
    return (
      <div className="px-6 py-12 space-y-6">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-64 w-full rounded-lg" />
        <Skeleton className="h-6 w-1/2 mt-4" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-40 w-full" />
        </div>
      </div>
    );
  }

  // 🚧 Course not found — optional fallback UI
  if (!course) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">🚧 Coming Soon</h1>
        <p className="text-gray-600 text-lg max-w-xl">
          The course you’re looking for is not yet available. Please check back soon or explore other courses.
        </p>
      </div>
    );
  }

  // ✅ Course found — show full content
  return (
    <div className="px-3 sm:px-14">
      <CourseBanner />
      <div className="hidden lg:block sticky top-0 ">
        <Navbar />
      </div>

      <div className="mx-auto px-6 py-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-6">
          <Overview />
          <Curriculum course={course} />
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
  );
}

export default CoursePage;
