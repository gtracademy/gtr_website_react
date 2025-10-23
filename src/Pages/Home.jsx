// src/Pages/Home.jsx
import React from "react";
import Hero from "../Components/Home/Hero";
import CourseFilter from "../Components/Home/CourseFilter";
import WhyChooseUs from "../Components/Home/WhyChooseUs";
import AlumniTestimonials from "../Components/Home/AlumniTestimonials";
import TrainingDev from "../Components/Home/TrainingDev";
import PlacementProcess from "../Components/Home/PlacementProcess";
import FAQSection from "../Components/Home/FAQSection";
import TrainingPartner from "../Components/Home/TrainingPartner";
import NeedHelpSection from "../Components/Home/NeedHelpSection";
import StudentsWorkSection from "../Components/Home/StudentsWorkSection";
import AboutUs from "../Components/Home/AboutUs";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="mx-[2%] ">
        <CourseFilter />
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
