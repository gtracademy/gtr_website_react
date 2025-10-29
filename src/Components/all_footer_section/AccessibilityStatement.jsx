// src/Pages/AccessibilityStatement.jsx
import React from "react";
import bannerImg from "../../assets/Homeba_3.jpg"; // ✅ Replace with your actual banner image path

const AccessibilityStatement = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ===== Hero Banner ===== */}
      <div
        className="relative bg-cover bg-center h-[260px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center z-10 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Accessibility Statement
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto">
            Ensuring accessibility for all users is a key part of GTR Academy’s commitment to inclusivity.
          </p>
        </div>
      </div>

      {/* ===== Content Section ===== */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-6 md:p-12 mt-10 mb-16">
        <p className="text-gray-700 leading-relaxed mb-6">
          At <span className="font-semibold">GTR Academy</span>, we are committed
          to ensuring that our online services and content are accessible to all
          individuals, including those with disabilities. We strive to provide
          an inclusive and user-friendly experience for everyone.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our goal is to continuously improve the accessibility of our website
          and digital platforms so that users of all abilities can access our
          learning materials, services, and information without barriers.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          We actively review and update our website design and functionality in
          alignment with recognized accessibility standards and best practices.
          These improvements are ongoing and informed by both internal testing
          and feedback from our community.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Feedback and Assistance
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you encounter any accessibility issues or have suggestions on how
          we can improve, please reach out to us. Your feedback is invaluable in
          helping us enhance our services and ensure equal access for all.
        </p>

        <ul className="list-none text-gray-700 space-y-1 mb-6">
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:connect@gtracademy.org"
              className="text-red-600 hover:underline"
            >
              connect@gtracademy.org
            </a>
          </li>
          <li>
            <strong>Office:</strong> 324 and 426 A, Orbit Plaza, CR – Ghaziabad,
            Uttar Pradesh 201016
          </li>
          <li>
            <strong>Phone:</strong> +91 9910057126
          </li>
        </ul>

        <p className="text-gray-600 text-sm mt-6">
          Thank you for supporting accessibility and inclusivity at GTR Academy.
        </p>
      </div>
    </div>
  );
};

export default AccessibilityStatement;
