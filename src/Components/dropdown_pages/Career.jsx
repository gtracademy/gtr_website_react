import React, { useState } from "react";
import "swiper/css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import heroImg from "../../assets/Group-16.png";
import careerimg from "../../assets/careerimg-1.jpg";
import careerimg1 from "../../assets/careerimg-2.jpg";
import careerimg2 from "../../assets/careerImg-3.jpeg";
import groupimg from "../../assets/Group-7.png";
import groupimg16 from "../../assets/image-16.jpg";

const Career = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    role: "",
    resume: null,
  });

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I apply for multiple roles?",
      answer:
        "Yes, you can apply for multiple roles that align with your skills and interests. Each application will be reviewed individually by our recruitment team.",
    },
    {
      question: "Are there remote or hybrid opportunities?",
      answer:
        "Absolutely! Many of our roles are fully remote or offer hybrid flexibility depending on the team.",
    },
    {
      question: "What’s the interview process like?",
      answer:
        "Our interview process typically includes an initial screening, followed by technical or role-specific interviews, and a final discussion with senior management or HR.",
    },
    {
      question: "Is there an opportunity for growth and upskilling?",
      answer:
        "Definitely! We provide structured learning programs, certifications, and mentorship opportunities to help employees grow in their careers.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="font-sans text-gray-800">
      {/* HERO SECTION */}
      <section className="bg-white pt-20 pb-16 px-4 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Shape the Future. <br />
            <span className="text-blue-600">Build Your Career</span> with GTR
            Academy.
          </h2>
          <p className="text-gray-600 mb-6">
            Join a team that’s transforming lives through innovative education
            and career-focused training.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            Get Started
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img src={heroImg} alt="Career Hero" className="w-[400px]" />
        </div>
      </section>

      {/* COUNTERS */}
      <div className="bg-[#003b73] flex justify-center py-8 px-4">
        <div className="bg-white rounded-lg shadow-md w-full max-w-6xl flex flex-col md:flex-row items-center justify-between text-center md:text-left py-6 px-8">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800">We’re Just</h2>
            <h2 className="text-2xl font-semibold text-gray-800">
              Getting{" "}
              <span className="text-[#003b73] font-bold relative inline-block">
                Started
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#003b73] rounded-full"></span>
              </span>
            </h2>
          </div>

          <div className="md:w-2/3 flex flex-col md:flex-row justify-around items-center gap-6">
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold text-[#003b73]">5K+</h3>
              <p className="text-gray-800 font-medium mt-1">Cities</p>
            </div>

            <div className="hidden md:block h-10 w-px bg-gray-300"></div>

            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold text-[#003b73]">10K+</h3>
              <p className="text-gray-800 font-medium mt-1">Active Users</p>
            </div>

            <div className="hidden md:block h-10 w-px bg-gray-300"></div>

            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold text-[#003b73]">30K+</h3>
              <p className="text-gray-800 font-medium mt-1">Live Classes</p>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section className="bg-blue-100 py-14 px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Join Our Mission to Empower Learning
        </h3>
        <p className="max-w-4xl mx-auto text-gray-700">
          Join Our Mission to Empower Learning At GTR Academy, we’re not just
          building careers — we’re transforming lives. Since our inception,
          we’ve empowered over 10,000 learners and successfully facilitated
          9,200+ placements, creating lasting impact across industries. Our
          commitment goes beyond education — we’re a team of educators,
          technologists, career coaches, and innovators united by a shared goal:
          to make skill-based learning accessible, practical, and
          results-driven.
        </p>
      </section>

      {/* EXPERIENCE LIFE SECTION */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Experience life at GTR Academy
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We’re creating a workplace where personal development and
              professional growth go hand in hand, empowering every team member
              to thrive.
            </p>
            <img src={groupimg} alt="arrow" className="w-40 md:w-52 mt-10" />
          </div>

          <div className="flex gap-6 justify-center">
            <img
              src={careerimg}
              alt="GTR Team Celebration"
              className="rounded-xl shadow-md w-[280px] lg:w-[300px] object-cover"
            />
            <img
              src={careerimg1}
              alt="GTR Team Event"
              className="rounded-xl shadow-md w-[280px] lg:w-[300px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="py-16 bg-gray-50 px-6 lg:px-20">
        <h3 className="text-2xl font-bold text-center mb-8">
          Why Work With Us
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-2">👶 Employee-Friendly Policies</h4>
            <p className="text-gray-600 text-sm">
              Maternity Leave | Paternity Leave | Adoption Leave | Period Leave
              | Creche Support
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">💪 We’ve Got Your Back</h4>
            <p className="text-gray-600 text-sm">
              Insurance Cover | National Pension Scheme | COVID-19 Insurance
              Reimbursements
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">💫 360° Wellness</h4>
            <p className="text-gray-600 text-sm">
              Monthly Wellness Programs | Open Pantry | Gaming Zone
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">
              🎓 Unparalleled Learning Opportunities
            </h4>
            <p className="text-gray-600 text-sm">
              Best-in-Class Mentors | Education Growth | Timely Review
            </p>
          </div>
        </div>
      </section>

      {/* MEET EXPERTS */}
      {/* <section className="py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Meet our industry experts</h3>
          <p className="text-gray-600">
            With a strong belief in innovation, integrity, and teamwork, our
            dedicated team works tirelessly to inspire excellence.
          </p>
        </div>
        <img src={careerimg2} alt="Experts" className="rounded-xl shadow-md lg:w-1/2" />
      </section> */}

       <section className="py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={groupimg16}
            alt="FAQ"
            className="rounded-xl shadow-md w-[400px] md:w-[450px] lg:w-[480px] h-auto object-contain"
          />
        </div>

        <div className="lg:w-1/2 w-full">
          <h3 className="text-3xl font-bold mb-8 text-[#12265A]">
            Frequently Asked Questions (FAQs)
          </h3>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-medium text-gray-800">
                  {faq.question}
                </h4>
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-600" />
                ) : (
                  <FaChevronDown className="text-gray-600" />
                )}
              </div>

              {openIndex === index && (
                <p className="mt-2 text-gray-600 leading-relaxed transition-all duration-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

       

      

      {/* CURRENT OPENINGS */}
      <section className="py-16 px-6 lg:px-20">


        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <img
            src={careerimg2}
            alt="Application"
            className="rounded-lg shadow-md lg:w-1/2"
          />
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl p-6 lg:w-1/2 w-full"
          >
            <h4 className="font-bold text-lg mb-4">
              Application Form — We’d Love to Know You Better!
            </h4>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border p-2 mb-3 rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border p-2 mb-3 rounded-md"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border p-2 mb-3 rounded-md"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-full border p-2 mb-3 rounded-md"
            />
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border p-2 mb-3 rounded-md"
            >
              <option value="">Select Role</option>
              <option>Academic Counselor</option>
              <option>Business Counselor</option>
            </select>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="w-full border p-2 mb-4 rounded-md"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full"
            >
              Submit Application
            </button>
          </form>
        </div>

        <h3 className="text-2xl font-bold text-center mb-8 pt-6">Current Openings</h3>

        <div className="overflow-x-auto border rounded-lg mb-10">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4">Position</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Apply By</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">Academic Counselor</td>
                <td className="py-3 px-4">Noida</td>
                <td className="py-3 px-4">Full-Time</td>
                <td className="py-3 px-4">15 May 2025</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Business Counselor</td>
                <td className="py-3 px-4">Noida</td>
                <td className="py-3 px-4">Full-Time</td>
                <td className="py-3 px-4">15 May 2025</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* APPLICATION FORM */}
       
      </section>

      {/* ✅ FORM Section (Updated) */}
      {/* <section className="py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={groupimg16}
            alt="FAQ"
            className="rounded-xl shadow-md w-[400px] md:w-[450px] lg:w-[480px] h-auto object-contain"
          />
        </div>

        <div className="lg:w-1/2 w-full">
          <h3 className="text-3xl font-bold mb-8 text-[#12265A]">
            Frequently Asked Questions (FAQs)
          </h3>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-medium text-gray-800">
                  {faq.question}
                </h4>
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-600" />
                ) : (
                  <FaChevronDown className="text-gray-600" />
                )}
              </div>

              {openIndex === index && (
                <p className="mt-2 text-gray-600 leading-relaxed transition-all duration-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default Career;
