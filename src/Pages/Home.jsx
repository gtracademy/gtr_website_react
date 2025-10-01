import React from "react";
import Hero from "../Components/Home/Hero";
import CourseFilter from "../Components/Home/CourseFilter";
import WhyChooseUs from "../Components/Home/WhyChooseUs";
import AlumniTestimonials from "../Components/Home/AlumniTestimonials";
import TrainingDev from "../Components/Home/TrainingDev";
import HiringPartners from "../Components/Home/HiringPartners";
import PlacementProcess from "../Components/Home/PlacementProcess";
import FAQSection from "../Components/Home/FAQSection";
import TrainingPartner from "../Components/Home/TrainingPartner";
import NeedHelpSection from "../Components/Home/NeedHelpSection";
import Header from "../Components/Header";
import StudentsWorkSection from "../Components/Home/StudentsWorkSection";
import AboutUs from "../Components/Home/AboutUs";

const Home = () => {
  return (
    <>
      <div className="w-full shadow-md bg-white sticky top-0 z-50">
        <Header />
      </div>
      <div>
        <Hero />
      </div>

      <div className="mx-[2%] ">
        <CourseFilter />
        {/* <HiringPartners /> */}
        <WhyChooseUs />
        <StudentsWorkSection />
        <AboutUs />
        <PlacementProcess />
        <AlumniTestimonials />
        <TrainingDev />
        <FAQSection />
        <TrainingPartner />
        <NeedHelpSection />
      </div>
    </>
  );
};

export default Home;
