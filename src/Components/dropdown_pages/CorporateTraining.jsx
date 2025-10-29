import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import bannerBg from "../../assets/corporate training.webp";
import trainingImg from "../../assets/corporateTrainingimg.jpg";
import groupimg16 from "../../assets/image-16.jpg";


const CorporateTrainingPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* ======== Banner Section ======== */}
      
       <div
        className="relative bg-cover bg-center h-[380px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `url(${bannerBg})`,
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative text-center z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Corporate Training
          </h1>
          <p className="text-sm md:text-base italic">
            Empowering Teams, Elevating Performance
          </p>
        </div>
      </div> 

      {/* ======== Intro Section ======== */}
      <div className="py-16 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Image */}
          <img
            src={trainingImg}
            alt="Corporate Training"
            className="rounded-xl shadow-lg"
          />

          {/* Right - Content */}
          <div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Companies around the world invest in employee training for their
              business. GTR Academy helps you achieve your goals faster and in a
              more cost-effective way.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Flexible Dates",
                "1-on-1 Training",
                "Class Recordings (to the participant)",
                "Certification Desk",
                "Revision Classes",
                "4-Hour Sessions",
                "Lab Extension",
                "Serving All Time Zones",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-600" />{" "}
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              Corporate training is a structured approach to developing employees
              through various learning programs. It serves as a catalyst for
              employee success, which directly impacts the success of your business
              or organization. Implementing training and development is crucial for
              companies aiming to enhance employee performance. It sharpens employees’
              job skills and knowledge, ultimately boosting their productivity at
              the workplace.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Today’s corporate world requires not only skilled workers but
              up-skilled professionals. With the constant evolution of the
              marketplace, every industry needs individuals who are committed to
              learning, adapting, and evolving with emerging trends. Your workforce
              needs to stay up-to-date, and that’s what GTR Academy offers —
              interactive in-person and online training for individuals or groups
              across IT, Sales, Operations, Marketing, Management, and Consulting.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At GTR Academy, we provide all the necessary tools and resources to help
              you thrive in a rapidly changing technological landscape. Our
              experienced in-house corporate trainers deliver the right knowledge to
              keep you competitive in today’s corporate environment.
            </p>
          </div>
        </div>
      </div>

      {/* ======== Benefits Section ======== */}
      <div className="bg-gray-50 py-16 px-6 lg:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Benefits for organisations that invest in employee training
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Elevated Job Performance",
              desc: "Employee training provides your workforce with the necessary skills and knowledge to succeed in their roles, resulting in enhanced job performance and greater efficiency.",
            },
            {
              title: "Elevated Productivity",
              desc: "A well-trained team is a more productive team. By boosting your employees’ skills, they can work more efficiently, driving overall productivity.",
            },
            {
              title: "Competitive Edge",
              desc: "Companies that invest in employee training gain a competitive edge. A skilled and knowledgeable workforce can distinguish your business from the competition.",
            },
            {
              title: "Employee Retention",
              desc: "Providing training opportunities demonstrates your commitment to employee growth, fostering loyalty and improving retention of valuable team members.",
            },
            {
              title: "Adaptation to Change",
              desc: "In today’s fast-changing business environment, training helps employees adapt to new technologies, processes, and best practices—keeping your company agile and competitive.",
            },
            {
              title: "Regulatory Compliance",
              desc: "In regulated industries, employee training ensures compliance with required standards, helping your organization avoid legal risks and penalties.",
            },
          ].map((b, i) => (
            <div
              key={i}
              className="bg-blue-900 text-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ======== Core Values ======== */}
      <div className="bg-blue-900 text-white py-16 px-6 lg:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Integrity",
              desc: "We uphold integrity and honesty, adhering to the highest academic, professional, and ethical standards in everything we do.",
            },
            {
              title: "Respect",
              desc: "We respect and value the dignity of every individual, promote civil discourse, and cultivate a diverse and inclusive community.",
            },
            {
              title: "Responsibility",
              desc: "We act with responsibility and hold ourselves accountable for our decisions, actions, and their outcomes.",
            },
            {
              title: "Discovery",
              desc: "We pursue and generate new knowledge, encourage creativity and innovation, and apply them for the benefit of our communities, society, and the environment.",
            },
            {
              title: "Excellence",
              desc: "We strive for excellence in all our pursuits—as individuals, as an institution, and as a leader in higher education.",
            },
            {
              title: "Community",
              desc: "We work together for the betterment of society.",
            },
          ].map((v, i) => (
            <div
              key={i}
              className="bg-white text-blue-900 p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="font-bold text-lg mb-2">{v.title}</h3>
              <p className="text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ======== Call Back Form ======== */}
      <div className="py-16 px-6 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src={groupimg16}
            alt="Trainer"
            className="w-full rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900">
              Book a Free Call Back
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 p-3 rounded-lg"
              />
              <input
                type="email"
                placeholder="Email ID"
                className="w-full border border-gray-300 p-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="Number"
                className="w-full border border-gray-300 p-3 rounded-lg"
              />
              <select className="w-full border border-gray-300 p-3 rounded-lg">
                <option>Select Course</option>
                <option>SAP VIM</option>
                <option>SAP BASIS</option>
                <option>SAP BTP</option>
                <option>Power BI</option>
                <option>Data Science</option>
              </select>
              <input
                type="text"
                placeholder="Enter City"
                className="w-full border border-gray-300 p-3 rounded-lg"
              />
              <textarea
                placeholder="Any Query"
                className="w-full border border-gray-300 p-3 rounded-lg"
                rows="3"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-900 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateTrainingPage;
