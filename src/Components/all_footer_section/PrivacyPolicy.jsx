// src/Pages/PrivacyPolicy.jsx
import React from "react";
import bannerImg from "../../assets/Homeba_3.jpg"; // ✅ Replace with your banner image path

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ===== Hero Section ===== */}
      <div
        className="relative bg-cover bg-center h-[260px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center z-10 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto">
            Your privacy matters to us. Learn how GTR Academy collects, uses, and protects your information.
          </p>
        </div>
      </div>

      {/* ===== Content Section ===== */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-6 md:p-12 mt-10 mb-16">
        {/* Intro */}
        <p className="text-gray-700 leading-relaxed mb-6">
          This Privacy Policy outlines the policies and procedures governing the collection, utilization, and disclosure of personal
          information when you engage with GTR Academy’s services. We aim to clarify your privacy rights and how we safeguard your
          data within the boundaries of the law.
        </p>

        {/* Interpretation & Definitions */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Interpretation and Definitions
        </h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">Interpretation</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Words capitalized in this document carry meanings as defined under specific conditions. These definitions apply uniformly
          regardless of whether they appear in singular or plural form.
        </p>

        <h3 className="text-xl font-semibold mb-2">Definitions</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>Account</strong>: Refers to a unique user account created to access our services.</li>
          <li><strong>Affiliate</strong>: Indicates an entity that controls, is controlled by, or shares common control with another entity.</li>
          <li><strong>Company</strong>: Denotes GTR Academy ("the Company," "We," "Us," or "Our").</li>
          <li><strong>Cookies</strong>: Small files placed on your device by a website containing browsing details.</li>
          <li><strong>Country</strong>: Refers to India.</li>
          <li><strong>Device</strong>: Includes any apparatus capable of accessing our services, such as a computer, cellphone, or tablet.</li>
          <li><strong>Personal Data</strong>: Signifies information pertaining to an identified or identifiable individual.</li>
          <li><strong>Terms and Conditions</strong>: Encompasses the agreement between You and the Company regarding the Service.</li>
          <li><strong>Service</strong>: Corresponds to the Website.</li>
          <li><strong>Website</strong>: Refers to GTR Academy (accessible from <a href="https://gtracademy.org" className="text-red-600 hover:underline">https://gtracademy.org</a>).</li>
          <li><strong>Service Provider</strong>: Any natural or legal entity processing data on behalf of the Company.</li>
          <li><strong>Usage Data</strong>: Data collected automatically during Service use (e.g., page visits, duration).</li>
        </ul>

        {/* Collecting & Using Data */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Collecting and Using Your Personal Data
        </h2>

        <h3 className="text-xl font-semibold mb-2">Types of Data Collected</h3>
        <h4 className="text-lg font-medium mb-2">Personal Data</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          When you use our Service, we may request certain personally identifiable information that facilitates communication and
          identification. Such information includes but is not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
        </ul>

        <h4 className="text-lg font-medium mb-2">Usage Data</h4>
        <p className="text-gray-700 leading-relaxed mb-6">
          Usage Data is automatically collected during Service use. This may include information such as your Device’s IP address,
          browser type, pages visited, visit time, and diagnostic data.
        </p>

        {/* Cookies */}
        <h3 className="text-xl font-semibold mb-2">Tracking Technologies and Cookies</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          We employ Cookies and similar tracking technologies to monitor and enhance Service functionality. These include:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li><strong>Cookies or Browser Cookies</strong>: Small files placed on your Device for user experience and analytics.</li>
          <li><strong>Web Beacons</strong>: Small electronic files that track usage and email interactions.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-6">
          We use both Session and Persistent Cookies to ensure functionality, remember user preferences, and enhance your experience.
        </p>

        {/* Use of Personal Data */}
        <h3 className="text-xl font-semibold mb-2">Use of Your Personal Data</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Company may utilize Personal Data for various purposes, including but not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Providing and maintaining our Service</li>
          <li>Managing your Account</li>
          <li>Performance of contracts</li>
          <li>Contacting you</li>
          <li>Providing news, offers, and updates</li>
          <li>Managing your requests</li>
          <li>Business transfers and analysis</li>
        </ul>

        {/* Retention, Transfer, Deletion */}
        <h3 className="text-xl font-semibold mb-2">Retention and Deletion of Your Data</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          We retain Personal Data as long as necessary for the purposes outlined unless longer retention is required by law. You may
          request deletion, correction, or access to your data by contacting us.
        </p>

        {/* Disclosure */}
        <h3 className="text-xl font-semibold mb-2">Disclosure of Your Personal Data</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          We may disclose your Personal Data in certain circumstances such as business transactions, law enforcement requests, or
          other legal obligations.
        </p>

        {/* Security */}
        <h3 className="text-xl font-semibold mb-2">Security of Your Personal Data</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          We take all reasonable steps to protect your data. However, no online data transmission or storage method is 100% secure.
        </p>

        {/* Children's Privacy */}
        <h3 className="text-xl font-semibold mb-2">Children’s Privacy</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our Service is not intended for individuals under 13. We do not knowingly collect data from minors. If you believe your
          child has provided us with data, please contact us to remove it.
        </p>

        {/* Links */}
        <h3 className="text-xl font-semibold mb-2">Links to Other Websites</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our Service may contain links to other websites that are not operated by us. We are not responsible for their content or
          privacy practices.
        </p>

        {/* Changes */}
        <h3 className="text-xl font-semibold mb-2">Changes to this Privacy Policy</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          We may update this Privacy Policy periodically. Any changes will be communicated through our website or via email.
        </p>

        {/* Contact */}
        <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you have any questions about this Privacy Policy, you can contact us at:
        </p>
        <ul className="list-none text-gray-700 space-y-1">
          <li><strong>Email:</strong> <a href="mailto:connect@gtracademy.com" className="text-red-600 hover:underline">connect@gtracademy.com</a></li>
          <li><strong>Office:</strong> 324 and 426 A, Orbit Plaza, CR – Ghaziabad, Uttar Pradesh 201016</li>
          <li><strong>Phone:</strong> +91 9910057126</li>
        </ul>

        <p className="text-gray-600 text-sm mt-6">Thank you for choosing GTR Academy!</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
