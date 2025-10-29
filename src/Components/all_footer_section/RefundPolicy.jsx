// src/Pages/RefundPolicy.jsx
import React from "react";
import bannerImg from "../../assets/Homeba_3.jpg"; // ✅ Replace with your actual banner image path

const RefundPolicy = () => {
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
            Refund & Cancellation Policy
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto">
            Please review our refund and cancellation policy carefully before
            making a purchase.
          </p>
        </div>
      </div>

      {/* ===== Policy Content ===== */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-6 md:p-12 mt-10 mb-16">
        {/* Introduction */}
        <p className="text-gray-700 leading-relaxed mb-6">
          At <span className="font-semibold">GTR Academy</span>, we are committed
          to providing high-quality educational experiences to our students. It
          is important to note that all purchases made with us are{" "}
          <span className="font-semibold text-red-600">non-refundable</span>, and
          no exceptions will be granted. Please review our Refund and
          Cancellation Policy outlined below.
        </p>

        {/* General Policy */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          General Policy
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          All transactions conducted with GTR Academy are final. We do not
          entertain refund requests or cancellations for any of our courses or
          classes under any circumstances. Once a payment is successfully
          processed, the student acknowledges and agrees that no refunds will be
          issued.
        </p>

        {/* Refund Procedure */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Refund Procedure
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Due to our strict no-refund policy, there is no established procedure
          for refund requests, as they are not applicable. Students are advised
          to review all course details and policies carefully before making any
          payments.
        </p>

        {/* Refund Processing */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Refund Processing
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          As our standard policy is non-refundable, there is no specific
          timeline for refund processing, since refunds are not issued for any
          course or program under any condition.
        </p>

        {/* Additional Costs */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Additional Costs
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our refund policy solely pertains to course or class fees directly
          paid to GTR Academy. We do not assume responsibility for any other
          expenses incurred by students, including but not limited to travel,
          accommodation, internet, or device-related costs.
        </p>

        {/* Modification of Policy */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Modification of Policy
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          GTR Academy retains the right to modify or amend this Refund and
          Cancellation Policy at any time without prior notice. Any such
          revisions will be communicated in writing to our students, and the
          updated policy will be published on our official website.
        </p>

        {/* Contact Us */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Contact Us
        </h2>
        <p className="text-gray-700 leading-relaxed mb-2">
          Should you have any questions or require additional information
          concerning our Refund and Cancellation Policy, please reach out to us:
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
          Thank you for choosing GTR Academy for your educational journey.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
