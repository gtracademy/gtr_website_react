import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import saptraining from "../../assets/Sap-Training-.png";
import dataScience from "../../assets/Data-Science-.png";
import generativeai from "../../assets/Ai.png";
import VLSI from "../../assets/vlsi.png";
import powerBi from "../../assets/Power-BI-1CnsXBs-.png";
import campusEngagementImg from "../../assets/capus-engagement.png";
import educationbanner from "../../assets/education_banner.png";

const EducationInstitute = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      title: "Enhance Student Employability",
      content:
        "Our programs are designed to bridge the gap between academics and industry, ensuring students graduate with the skills employers demand. Through real-world projects and professional mentorship, we empower students to become job-ready.",
    },
    {
      title: "Stay Ahead of Industry Trends",
      content:
        "Keep your institution at the forefront of technological advancements by offering cutting-edge training programs aligned with the latest industry standards.",
    },
    {
      title: "Flexible Integration",
      content:
        "We offer multiple collaboration models — from short-term workshops to semester-integrated programs — allowing you to seamlessly blend our courses into your academic framework.",
    },
    {
      title: "Support and Resources",
      content:
        "GTR Academy provides all necessary learning materials, LMS access, and instructor support, ensuring a smooth and engaging learning experience for your students.",
    },
  ];

  return (
    <div className="w-full font-lato text-[#002147]">
      {/* Hero Section */}
      <section
        className="relative text-white py-16 md:py-28 px-6 md:px-12 bg-fill bg-center bg-no-repeat p-4"
        style={{
          backgroundImage: `url(${educationbanner})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>{" "}
        {/* Optional dark overlay for text readability */}
        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-2/3">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Start Learning Today, <br /> Make Your Student Future Ready
            </h1>
          </div>
          <div className="lg:w-1/3 mt-8 lg:mt-0 flex justify-center"></div>
        </div>
      </section>

      {/* About The Course */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          About The Course
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Making college student future ready by empowering SAP and Data Science
          knowledge</strong> <br></br>
          Are you a college student eager to enhance your skills and
          prepare for the future job market? GTR Academy is excited to introduce
          our SAP and Data Science training programs, specifically designed to
          equip college students with the knowledge and expertise needed to
          excel in today’s dynamic and competitive industries.
        </p>
      </section>

      {/* Why Choose Our Data Science Training */}
      <section className="px-6 md:px-12 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={saptraining}
              alt="Data Science Training"
              className="rounded-xl shadow-md h-[480px] md:h-[520px] w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Why Choose Our Data Science Training?
            </h3>
            <p className="mb-4 text-gray-700">
              Data Science is the most demanding career field in today’s world.
              Our training empowers students to become experts in data analysis,
              AI, and predictive modeling — essential skills for the digital
              age.
            </p>
            <h4 className="font-semibold text-lg mb-2">What You’ll Learn:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Machine Learning Fundamentals</li>
              <li>Data Analysis and Visualization</li>
              <li>Python and R Programming</li>
              <li>Statistical Modeling</li>
              <li>Real-world Industry Projects</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Data Science Training */}
      <section className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Why Data Science Training?
            </h3>
            <p className="text-gray-700 mb-4">
              Data is the new oil — and companies worldwide need professionals
              who can extract insights from it. Our course prepares students
              with end-to-end knowledge of tools like Python, SQL, Power BI, and
              advanced AI models.
            </p>
            <h4 className="font-semibold mb-2">What You’ll Learn:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>AI & ML Algorithms</li>
              <li>Data Cleaning and Preprocessing</li>
              <li>Power BI and Tableau</li>
              <li>Data Engineering Basics</li>
            </ul>
          </div>
          <div>
            <img
              src={dataScience}
              alt="Why Data Science"
              className="rounded-xl shadow-md h-[480px] md:h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Generative AI Program */}
      <section className="px-6 md:px-12 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={generativeai}
              alt="Generative AI"
              className="rounded-xl shadow-md h-[480px] md:h-[520px] w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Generative AI Training Program
            </h3>
            <p className="text-gray-700 mb-4">
              Experience the power of innovation with Generative AI. Our program
              teaches students to build AI-powered systems that generate
              creative content, images, code, and more — skills needed for the
              future of AI.
            </p>
            <h4 className="font-semibold mb-2">What You’ll Learn:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Foundation of Generative AI</li>
              <li>LLMs and Transformer Models</li>
              <li>Prompt Engineering</li>
              <li>Hands-on AI Tools (ChatGPT, Claude, Gemini, etc.)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* VLSI Training */}
      <section className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              VLSI (Very Large Scale Integration) Training Program
            </h3>
            <p className="text-gray-700 mb-4">
              Explore the backbone of semiconductor design and embedded systems.
              Our VLSI course empowers students with digital design, ASIC/FPGA
              flow, and chip verification expertise.
            </p>
            <h4 className="font-semibold mb-2">Key Highlights:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Digital Design Concepts</li>
              <li>ASIC Flow and FPGA Design</li>
              <li>Simulation and Verification</li>
              <li>Hands-on Labs and Projects</li>
            </ul>
          </div>
          <div>
            <img
              src={VLSI}
              alt="VLSI Training"
              className="rounded-xl shadow-md h-[480px] md:h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Power BI Training */}
      <section className="px-6 md:px-12 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={powerBi}
              alt="Power BI"
              className="rounded-xl shadow-md h-[480px] md:h-[520px] w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Power BI Training Program
            </h3>
            <p className="text-gray-700 mb-4">
              Discover how to transform data into actionable insights. This
              training enables students to visualize and analyze data using
              interactive dashboards and advanced analytics.
            </p>
            <h4 className="font-semibold mb-2">What You’ll Learn:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Data Modeling and Visualization</li>
              <li>DAX and Power Query</li>
              <li>Integration with Excel and SQL</li>
              <li>Real-time Dashboards and Reports</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Campus Engagements */}
      <section className="bg-gray-50 px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Campus Engagements</h3>
            <p className="text-gray-700 mb-4">
              At GTR Academy, we engage with colleges to organize
              skill-development workshops, certification programs, and
              real-world project sessions that prepare students for professional
              excellence.
            </p>
            <h4 className="font-semibold mb-2">
              Highlights of Our Engagements:
            </h4>
            <ul className="text-gray-700 space-y-2">
              <li>✔ Real-time Training Seminars</li>
              <li>✔ Hands-on Lab Activities</li>
              <li>✔ Expert-Led Career Talks</li>
              <li>✔ Live Industry Interaction Events</li>
            </ul>
          </div>
          <div>
            <img
              src={campusEngagementImg}
              alt="Campus Engagement"
              className="rounded-xl shadow-md h-[480px] md:h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-[#002147] text-white py-16 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-200 leading-relaxed">
            At GTR Academy, we fantasize a future where no family is left
            before, and every existent has the occasion to contribute to the
            nation’s progress. By supporting the dependents of our stalwart
            members of the force, we aren’t only recognizing their offerings but
            also strengthening the foundation of our society. Join us in our
            charge to make a difference. Together, we can make a brighter future
            for those who have given everything for our nation. GTR Academy –
            Empowering Lives, recognizing offerings.
          </p>
        </div>
      </section>

      {/* Partner With Us - FAQ Section */}
      <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Partner with GTR Academy: A Win-Win Opportunity for Colleges
        </h3>

        <div className="bg-blue-50 rounded-md shadow-sm border border-blue-100">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-6 py-4 font-semibold text-[#002147] hover:bg-blue-100 transition"
              >
                <span>{faq.title}</span>
                {openIndex === index ? (
                  <FaMinus className="text-[#004c7d]" />
                ) : (
                  <FaPlus className="text-[#004c7d]" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-40 bg-blue-100" : "max-h-0"
                }`}
              >
                <div className="px-10 py-4 text-gray-700">
                  <ul className="list-disc ml-6">
                    <li>{faq.content}</li>
                  </ul>
                </div>
              </div>

              {index !== faqs.length - 1 && <hr className="border-blue-200" />}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EducationInstitute;
