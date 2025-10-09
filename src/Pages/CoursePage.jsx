import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/CourseDetails/Navbar";
import CourseBanner from "../Components/CourseDetails/CourseBanner";
import Curriculum from "../Components/CourseDetails/Curriculum";
import WhoShouldJoin from "../Components/CourseDetails/WhoShouldJoin";
import Mentor from "../Components/CourseDetails/Mentor";
import Testimonials from "../Components/CourseDetails/Testimonials";
import Overview from "../Components/CourseDetails/Overview";
import CourseSidebar from "../Components/CourseDetails/CourseSidebar";
import Header from "../Components/Header";
import { coursesData } from "../Components/data/CourseData";

function CoursePage() {
  const { slug } = useParams();

  // ✅ Check if course exists
  const course = coursesData.find((course) => course.slug === slug);

  // ✅ If no course found → show Coming Soon
  if (!course) {
    return (
      <>
        <Header />
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🚧 Coming Soon
          </h1>
          <p className="text-gray-600 text-lg max-w-xl">
            The course you’re looking for is not yet available. Please check
            back soon or explore our other programs!
          </p>
        </div>
      </>
    );
  }

  // ✅ Normal Course Layout
  return (
    <div>
      <Header />
      <div className="px-3 sm:px-16">
        <CourseBanner />

        {/* Navbar - hidden on mobile, sticky on desktop */}
        <div className="hidden lg:block sticky top-0 z-50 ">
          <Navbar />
        </div>

        <div className=" mx-auto px-6 py-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left side (content) */}
          <div className="lg:col-span-8 space-y-6">
            <Overview />
            <Curriculum />
            <WhoShouldJoin />
            <Mentor />
            <Testimonials />
          </div>

          {/* Right side (sidebar) */}
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
