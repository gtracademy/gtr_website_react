import React, { useState } from "react";

const Curriculum = ({ course }) => {
  const [openIndex, setOpenIndex] = useState(null);

  if (
    !course ||
    !course.courseCurriculum ||
    course.courseCurriculum.length === 0
  ) {
    return (
      <div className="text-center py-8 text-gray-500">
        Curriculum not available for this course.
      </div>
    );
  }

  return (
    <section id="curriculum" className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-[#0B3954] border-b-2 border-[#C81D25] pb-2 inline-block">
        Curriculum
      </h2>

      <div className="space-y-4">
        {course.courseCurriculum.map((item, index) => (
          <div
            key={item._id}
            className={`border border-gray-300 rounded-xl overflow-hidden shadow-sm transition-all duration-300 ease-in-out ${
              openIndex === index
                ? "shadow-md border-b-2 border-blue-800"
                : "hover:shadow-md"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`w-full flex justify-between cursor-pointer items-center p-4 text-left font-bold text-lg transition-colors duration-300 ${
                openIndex === index
                  ? "bg-red-50 text-gray-900"
                  : "bg-white text-gray-800 hover:bg-gray-50"
              }`}
            >
              {item.title}
              <span
                className={`transform transition-transform duration-300 text-2xl ${
                  openIndex === index
                    ? "rotate-90 text-[#0B3954]"
                    : "rotate-0 text-gray-500"
                }`}
              >
                &rsaquo;
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <ul className="px-12 list-disc space-y-2 text-gray-700 overflow-hidden">
                {item.details
                  ?.split(/\r?\n/)
                  .filter((line) => line.trim() !== "")
                  .map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Curriculum;
