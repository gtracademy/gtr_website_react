import React from 'react';

const whyItems = [
  {
    title: 'Realistic & Relevant',
    description:
      'Courses crafted for real-world applications with case studies, templates & toolkits.',
    icon: '🎯',
  },
  {
    title: 'Industry-Aligned Curriculum',
    description:
      'Up-to-date content co-created with experts to meet market demands.',
    icon: '📘',
  },
  {
    title: 'Hands-On Learning',
    description:
      'Real-time projects, labs, and simulations to build job-ready skills.',
    icon: '🧪',
  },
  {
    title: 'Expert Instructors',
    description:
      'Courses delivered by professionals with real industry experience.',
    icon: '🧑‍🏫',
  },
  {
    title: 'Career-Focused Outcomes',
    description:
      'Get certified, job-ready and build a portfolio that attracts employers.',
    icon: '🚀',
  },
  {
    title: 'Comprehensive Case Studies',
    description:
      'Learn from real-life industry scenarios to improve your decision-making.',
    icon: '📊', 
  },
];
 <div className="px-4  bg-gray-100 min-h-screen font-lato p-8"></div>
const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4  md:pr-[86px] bg-gradient-to-tr from-white to-gray-100">
      {/* Heading */}
      <div className="text-start mb-14">
        <p className="text-red-600 text-md font-serif font-semibold uppercase tracking-wide">
          Why Choose Us?
        </p>
        <h2 className="text-4xl font-serif font-extrabold text-[#0c3045] mt-2">The GTR Edge</h2>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {whyItems.map((item, idx) => (
          <div
            key={idx}
            className="relative p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-200 hover:border-red-500 hover:-translate-y-1 transform group"
          >
            {/* Floating Emoji */}
            <div className="absolute -top-6 left-6">
              <div className="w-12 h-12 bg-red-100 text-red-600 text-2xl flex items-center justify-center rounded-full shadow-sm group-hover:bg-red-600 group-hover:text-white transition">
                {item.icon}
              </div>
            </div>

            {/* Content */}
            <div className="pt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
