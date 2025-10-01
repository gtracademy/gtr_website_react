import React from "react";
import Navbar from "../Components/CourseDetails/Navbar";
import CourseBanner from "../Components/CourseDetails/CourseBanner";
import Curriculum from "../Components/CourseDetails/Curriculum";
import WhoShouldJoin from "../Components/CourseDetails/WhoShouldJoin";
import Mentor from "../Components/CourseDetails/Mentor";
import Testimonials from "../Components/CourseDetails/Testimonials";
import Overview from "../Components/CourseDetails/Overview";
import CourseSidebar from "../Components/CourseDetails/CourseSidebar";
import Header from "../Components/Header";


function CoursePage() {
  return (
    <div >
      <Header/>
      <CourseBanner />
      <Navbar />
      

      <div className="container mx-auto px-6 py-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left side (2/3 width → 8/12 columns) */}
        <div className="lg:col-span-8 space-y-2">
          <Overview />
          <Curriculum />
          <WhoShouldJoin />
          <Mentor />
          <Testimonials />
        </div>

        {/* Right side (1/3 width → 4/12 columns, sticky sidebar) */}
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
