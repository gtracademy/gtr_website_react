import React, { useState, useEffect } from "react";
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

  // SEO meta tags for this page
  useEffect(() => {
    const title = "GTR Academy | Job-Ready Corporate & IT Training for College Students";
    const description =
      "Empower students with AI, Data Science, SAP, and Power BI training. GTR Academy bridges the gap between education and industry with job-ready certification programs.";
    const keywords =
      "GTR Academy, corporate training institute, Data Science certification, SAP training, Power BI course, AI training for students, Generative AI, college partnership program, IT upskilling, placement-ready courses";

    document.title = title;
    const ensureMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    ensureMeta("description", description);
    ensureMeta("keywords", keywords);
  }, []);

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
        className="relative text-white py-12 md:py-18 px-6 md:px-12 bg-fill bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${educationbanner})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>{" "}
        {/* Optional dark overlay for text readability */}
        <div className="relative max-w-7xl mx-auto flex flex-col items-start gap-4 text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Empowering Careers. Building Futures.
          </h1>
          <p className="max-w-3xl text-sm md:text-lg text-gray-100">
            Start learning today and make your students future-ready with GTR Academy’s corporate training and IT upskilling programs. We bridge academia and industry for job-ready outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Link to="#" className="bg-[#C81D25] text-white px-5 py-3 rounded-md font-semibold hover:bg-[#a9151c] transition">Get Started Now</Link>
            <Link to="#" className="bg-white text-[#002147] px-5 py-3 rounded-md font-semibold hover:bg-gray-100 transition">Partner with Us</Link>
          </div>
        </div>
      </section>

      {/* About The Course */}
      <section className="py-12 md:py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About The Course</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Making College Students Industry-Ready Through Real-World Training</strong><br />
          At GTR Academy, we empower students to master technologies that shape the modern workplace. Our SAP, Data Science, and Generative AI training programs are designed by certified professionals to give learners hands-on experience in solving real-world business problems.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm md:text-base">
          <div className="bg-gray-50 rounded-lg p-4">100% industry-aligned curriculum</div>
          <div className="bg-gray-50 rounded-lg p-4">Hands-on projects guided by experts</div>
          <div className="bg-gray-50 rounded-lg p-4">Live sessions, lab access, and revision classes</div>
          <div className="bg-gray-50 rounded-lg p-4">Placement-oriented learning approach</div>
        </div>
        <p className="mt-4 text-[#002147] font-semibold">Empowering over 10,000+ students with skills that drive careers forward.</p>
      </section>

      {/* Why Choose Our Data Science Training */}
      <section className="px-6 md:px-12 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={saptraining}
              alt="Data Science Training"
              className="rounded-xl shadow-md h-64 md:h-80 w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Why Choose GTR Academy?</h3>
            <p className="mb-4 text-gray-700">
              Your gateway to professional excellence. We customize corporate-aligned training for college students to prepare them for high-demand roles in Data Analytics, AI, Power BI, and SAP.
            </p>
            <h4 className="font-semibold text-lg mb-2">You’ll Learn:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Machine Learning & Predictive Analytics</li>
              <li>Data Modeling and Visualization</li>
              <li>Generative AI and Prompt Engineering</li>
              <li>SAP ERP Implementation Basics</li>
              <li>Power BI Dashboard Design</li>
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
              className="rounded-xl shadow-md h-64 md:h-80 w-full object-cover"
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
              className="rounded-xl shadow-md h-64 md:h-80 w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Generative AI Training Program</h3>
            <p className="text-gray-700 mb-4">
              Build the future with AI innovation. Hands-on Generative AI training with real-world projects on ChatGPT, Claude, and Gemini.
            </p>
            <h4 className="font-semibold mb-2">You’ll Learn:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Generative AI Foundations</li>
              <li>LLM Models & Prompt Techniques</li>
              <li>Applied AI Projects for Businesses</li>
            </ul>
          </div>
        </div>
      </section>

      {/* VLSI Training */}
      <section className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">SAP Training Program</h3>
            <p className="text-gray-700 mb-4">
              Learn SAP — the global standard in business management. Gain expertise across key modules with real-world implementation labs.
            </p>
            <h4 className="font-semibold mb-2">You’ll Learn:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>SAP ERP Fundamentals</li>
              <li>Integration and Configuration</li>
              <li>Business Process Mapping</li>
              <li>SAP Project Practice Sessions</li>
            </ul>
          </div>
          <div>
            <img
              src={VLSI}
              alt="SAP Training"
              className="rounded-xl shadow-md h-64 md:h-80 w-full object-cover"
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
              className="rounded-xl shadow-md h-64 md:h-80 w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Power BI Training Program</h3>
            <p className="text-gray-700 mb-4">
              Turn data into business insights. Create real-time dashboards and actionable BI.
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
      <section className="bg-gray-50 px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Campus Engagements</h3>
            <p className="text-gray-700 mb-4">
              Partnering with colleges to empower the next generation. We conduct on-campus workshops, corporate readiness programs, and internship-based learning modules.
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
              className="rounded-xl shadow-md h-64 md:h-80 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-[#002147] text-white py-12 md:py-16 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-200 leading-relaxed">
            Empowering Students. Enriching Futures. We envision a world where every student becomes job-ready, tech-savvy, and future-focused. By integrating education with corporate expertise, we create lifelong learners who thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Partner With Us - FAQ Section */}
      <section className="py-12 md:py-16 px-6 md:px-12 max-w-5xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Partner With GTR Academy
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

        <div className="flex justify-center mt-6 gap-3">
          <Link to="#" className="bg-[#C81D25] text-white px-5 py-3 rounded-md font-semibold hover:bg-[#a9151c] transition">Schedule a Partnership Call</Link>
          <Link to="#" className="bg-white border border-[#002147] text-[#002147] px-5 py-3 rounded-md font-semibold hover:bg-gray-50 transition">Join Our College Program</Link>
        </div>
      </section>
    </div>
  );
};

export default EducationInstitute;
