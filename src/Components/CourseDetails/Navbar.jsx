import React, { useState } from "react";
import CourseSidebar from "./CourseSidebar";

const Navbar = () => {
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "highlights", label: "Highlights" },
    { id: "curriculum", label: "Curriculum" },
    { id: "who-join", label: "Who should join?" },
    { id: "mentor", label: "Mentor" },
    { id: "testimonials", label: "Testimonials" },
  ];

  const [activeSection, setActiveSection] = useState("overview");

  const handleScroll = (id) => {
    const element = document.getElementById(id); // gettting element by there id
    if (element) {
      const headerHeight = document.querySelector("nav").offsetHeight;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      <nav className="w-full z-50 sticky top-0">
        <div className="max-w-7xl mx-auto flex">
          {/* left side div in navbar*/}
          <div className="w-2/3 rounded-xl h-[5rem] bg-white flex items-center justify-center py-3 space-x-8 overflow-x-auto border-b border-gray-400 shadow-sm whitespace-nowrap scrollbar-hide">
            {sections.map((sec) => (
              <li
                key={sec.id}
                className={`relative list-none cursor-pointer text-[1.1rem] font-medium px-2 transition duration-300 ease-in-out
                ${
                  activeSection === sec.id
                    ? "text-[#C81D25]"
                    : "text-gray-700 hover:text-[#C81D25]"
                }`}
                onClick={() => handleScroll(sec.id)}
              >
                {sec.label}
              </li>
            ))}
          </div>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
