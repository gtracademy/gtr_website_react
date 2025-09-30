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
      <nav className="w-full z-1 sticky top-0 ">
        <div className="max-w-[1500px] mx-auto flex">
          {/* left side div in navbar */}
          <ul className="w-2/3 rounded-lg h-[5rem] bg-gray-100 flex items-center justify-start ps-5 py-3 space-x-6 overflow-x-auto border-b border-gray-300 shadow-sm whitespace-nowrap scrollbar-hide">
            {sections.map((sec) => (
              <li
                key={sec.id}
                onClick={() => handleScroll(sec.id)}
                className={`list-none cursor-pointer px-4 py-2 rounded-md text-lg font-Lato font-medium transition-all
          ${
            activeSection === sec.id
              ? "bg-white text-[#a9151c] shadow-md"
              : "text-gray-700 hover:text-[#a9151c]"  
          }`}
              >
                {sec.label}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
