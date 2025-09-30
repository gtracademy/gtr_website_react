import React from "react";

const whyItems = [
  {
    title: "Realistic & Relevant",
    description:
      "Courses crafted for real-world applications with case studies, templates & toolkits.",
    icon: "🎯",
  },
  {
    title: "Industry-Aligned Curriculum",
    description:
      "Up-to-date content co-created with experts to meet market demands.",
    icon: "📘",
  },
  {
    title: "Hands-On Learning",
    description:
      "Real-time projects, labs, and simulations to build job-ready skills.",
    icon: "🧪",
  },
  {
    title: "Expert Instructors",
    description:
      "Courses delivered by professionals with real industry experience.",
    icon: "🧑‍🏫",
  },
  {
    title: "Career-Focused Outcomes",
    description:
      "Get certified, job-ready and build a portfolio that attracts employers.",
    icon: "🚀",
  },
  {
    title: "Comprehensive Case Studies",
    description:
      "Learn from real-life industry scenarios to improve your decision-making.",
    icon: "📊",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="from-white to-gray-100 px-4 sm:px-6 lg:px-8 py-10">
      {/* Heading */}
      <div className="text-start mb-10 sm:mb-12">
        <p className="text-red-600 text-lg sm:text-md font-serif font-semibold uppercase tracking-wide">
          Why Choose Us?
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-[#0c3045] mt-2">
          The GTR Edge
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {whyItems.map((item, idx) => (
          <div
            key={idx}
            className="relative p-4 sm:p-6 bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-200 hover:border-red-500 hover:-translate-y-1 transform group"
          >
            {/* Floating Emoji */}
            <div className="absolute -top-5 sm:-top-6 left-4 sm:left-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 text-red-600 text-lg sm:text-2xl flex items-center justify-center rounded-full shadow-sm group-hover:bg-red-600 group-hover:text-white transition">
                {item.icon}
              </div>
            </div>

            {/* Content */}
            <div className="pt-8 sm:pt-10">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-red-600 transition">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
