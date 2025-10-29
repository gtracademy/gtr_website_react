// src/Pages/TermsConditions.jsx
import React from "react";

const TermsConditions = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-6">
          Terms and Conditions
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Welcome to <span className="font-semibold">GTR Academy</span>!  
          By accessing and using our website and services, you agree to comply with the following terms and conditions.
        </p>

        {/* General Terms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            1. General Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            GTR Academy provides online training programs and educational content for personal and professional development.
            All users must create an account to access our courses and services. You are responsible for maintaining the
            confidentiality of your account information.
          </p>
        </section>

        {/* Content and Usage */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            2. Content and Usage
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            All content provided on our website, including text, images, videos, and course materials, is the intellectual
            property of GTR Academy and is protected by copyright laws.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Users may not copy, distribute, or reproduce any content without prior written permission from GTR Academy.
          </p>
        </section>

        {/* Payment and Refunds */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            3. Payment and Refunds
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All purchases made on our website are non-refundable. Please review our Refund and Cancellation Policy for detailed
            information.
          </p>
        </section>

        {/* Privacy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            4. Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We are committed to protecting your privacy. Please refer to our Privacy Policy for information on how we collect,
            use, and protect your personal data.
          </p>
        </section>

        {/* Changes to Terms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            5. Changes to Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            GTR Academy reserves the right to modify or amend these terms and conditions at any time. Any changes will be
            communicated to users through our website.
          </p>
        </section>

        {/* Contact */}
        <section className="border-t pt-6 mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            6. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            For any queries or additional information, please contact us at{" "}
            <a
              href="mailto:connect@gtracademy.org"
              className="text-red-600 font-medium hover:underline"
            >
              connect@gtracademy.org
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;
