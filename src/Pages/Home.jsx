import React from 'react'
import Hero from '../Components/Home/Hero'
import CourseFilter from '../Components/Home/CourseFilter'
import WhyChooseUs from '../Components/Home/WhyChooseUs'
import AlumniTestimonials from '../Components/Home/AlumniTestimonials'
import TrainingDev from '../Components/Home/TrainingDev'
import HiringPartners from '../Components/Home/HiringPartners'
import PlacementProcess from '../Components/Home/PlacementProcess'
import FAQSection from '../Components/Home/FAQSection'
import TrainingPartner from '../Components/Home/TrainingPartner'
import NeedHelpSection from '../Components/Home/NeedHelpSection'

const Home = () => {
  return (
    <>
    <Hero/>
    <CourseFilter />
    <WhyChooseUs />
    <AlumniTestimonials />
    <TrainingDev/>
    <HiringPartners/>
    {/* <PlacementProcess/> */}
    <FAQSection/>
    <TrainingPartner/>
    <NeedHelpSection/>
    </>
  )
}

export default Home