import React from "react";

const CookiesSetting = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-700 leading-relaxed">
      <h1 className="text-3xl font-bold text-center text-red-600 mb-8">
        Cookie Settings
      </h1>

      <p className="mb-6">
        We use cookies to enhance your experience on our website. Cookies are
        small data files stored on your device that help us understand your
        preferences and improve our services. By using our website, you consent
        to the use of cookies as described below:
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Types of Cookies:
      </h2>

      <ul className="list-disc list-inside space-y-3 mb-8">
        <li>
          <span className="font-semibold">Necessary Cookies:</span> Essential
          for the website’s functionality, including user authentication and
          security.
        </li>
        <li>
          <span className="font-semibold">Performance Cookies:</span> Collect
          anonymous data on website usage to help us improve performance and
          user experience.
        </li>
        <li>
          <span className="font-semibold">Functionality Cookies:</span> Remember
          user preferences and settings to provide a personalized experience.
        </li>
        <li>
          <span className="font-semibold">Advertising Cookies:</span> Used to
          deliver relevant advertisements and track the effectiveness of our
          marketing campaigns.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Managing Cookies:
      </h2>
      <p className="mb-6">
        You can control and manage cookies through your browser settings. You
        have the option to block or delete cookies, but please note that some
        website features may not function properly without them.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Consent:</h2>
      <p className="mb-6">
        By continuing to use our website, you consent to our use of cookies. You
        can withdraw your consent at any time by adjusting your browser
        settings.
      </p>

      <p className="mb-6">
        For more information or assistance with managing cookies, please contact
        us at{" "}
        <a
          href="mailto:connect@gtracademy.org"
          className="text-red-600 font-medium hover:underline"
        >
          connect@gtracademy.org
        </a>
        .
      </p>

      <p className="font-semibold text-gray-800">
        Thank you for choosing GTR Academy!
      </p>
    </div>
  );
};

export default CookiesSetting;
