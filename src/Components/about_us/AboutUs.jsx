 import gtrBanner from "../../assets/GTR Group 2.png";
import StudentsWorkSection from "../Home/StudentsWorkSection";
import WhyChooseUs from "../Home/WhyChooseUs";
import NeedHelpSection from "../Home/NeedHelpSection";
import Header from "../Header"

const AboutUs = () => {
  return (
    <>
     <div className="w-full shadow-md bg-white sticky top-0 z-50">  <Header/></div>
  
      <div className="bg-white text-gray-800">
        
      {/* ✅ Banner Section */}
      <section className="relative bg-white  md:py-0 bg-no-repeat bg-cover bg-center md:bg-top-right">
        <div className="w-full  overflow-hidden  ">
          <img
            src={gtrBanner}
            alt="GTR Academy Team"
            className="w-full h-full object-fit object-center"
          />
        </div>
      </section>

      {/* Logos Section */}
      <div className="py-6">
        <StudentsWorkSection />
      </div>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-center">
        <p className="text-lg leading-relaxed text-gray-700">
          Welcome to{" "}
          <span className="font-semibold text-blue-700">GTR Academy</span> —
          your destination for top-quality online training and global education.
          Since 2021, we’ve empowered <b>10,000+ students</b> and achieved{" "}
          <b>9,200+ placements</b>, helping learners step up, learn today, and
          lead tomorrow.
        </p>

        <p className="mt-6 text-lg text-gray-700">
          Led by experts from Microsoft, Deloitte, PwC, Tesla, IBM, and EY, our
          bootcamps specialize in ERP and Data Science, offering real-world
          insights, hands-on projects, and personalized mentorship.
        </p>

        <p className="mt-6 text-lg text-gray-700">
          With a strong network of <b>190+ hiring partners</b>, GTR Academy is a
          trusted choice for SAP, Salesforce, Embedded Systems, and Data Science
          training.
        </p>

        <p className="mt-6 text-lg text-gray-700">
          Our commitment to quality, expert trainers, and transparent approach
          make us a leader in practical, career-focused education — reflected in
          our top ratings across Google, Facebook, and LinkedIn.
        </p>
      </section>

      <div>
        <WhyChooseUs />
      </div>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-blue-700 mb-4">
              OUR MISSION
            </h3>
            <p className="text-gray-600">
              "To make quality education affordable and accessible for everyone,
              and help learners build real skills that lead to real careers."
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-blue-700 mb-4">OUR VISION</h3>
            <p className="text-gray-600">
              "To become a trusted learning partner for every student who dreams
              of a better future through skills and knowledge."
            </p>
          </div>
        </div>
      </section>

      <div>
        <NeedHelpSection/>
      </div>
    </div>
    
    </>


 
  
  );
};

export default AboutUs;
