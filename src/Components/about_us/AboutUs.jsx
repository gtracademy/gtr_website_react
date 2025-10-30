import aboutusimg1 from "../../assets/aboutusimg1.png";
import aboutusimg2 from "../../assets/aboutusimg2.jpg";
import aboutusimg3 from "../../assets/aboutusimg3.jpg";

import aboutusimg4 from "../../assets/aboutusimg4.jpg";
import aboutusbanner from "../../assets/About us.png";
import NeedHelpSection from "../Home/NeedHelpSection";

const AboutUs = () => {
  return (
    <>
      <div className="font-sans min-h-screen ">
        {/* Header */}
        <div className="w-full">
          <img
            src={aboutusbanner}
            alt="About Us Banner"
            className="w-full h-auto object-fit"
          />
        </div>

        {/* Image Row placed AFTER header but visually overlaps */}
        <div className="relative -mt-20 flex justify-center flex-wrap gap-4 px-4">
          {[aboutusimg2, aboutusimg1, aboutusimg3, aboutusimg4].map(
            (img, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden shadow-lg border-4 border-white transform transition-transform duration-500 ease-in-out hover:scale-105
        ${
          index % 2 === 0
            ? "w-32 h-40 md:w-80 md:h-100"
            : "w-28 h-32 md:w-70 md:h-80"
        }
      `}
              >
                <img
                  src={img}
                  alt={`Team ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            )
          )}
        </div>

        {/* Section 1 */}
        <section className="py-1 px-6 md:px-20 bg-white m-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Image - takes 50% width */}

            {/* Right: Content - takes 50% width */}
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4">
                We Focus on Student Training and Placement
              </h3>
              <p>
                Welcome to <strong>GTR Academy</strong>, your ultimate
                destination for top-notch online training and education. Since
                2021, we have empowered 10000+ students and facilitated 9200+
                placements, helping you step up, learn today, and lead tomorrow!
                Founded by experts with experience in leading global firms, GTR
                Academy offers expertly curated courses led by industry
                professionals. Our mission is to provide quality practical
                training to students not just in India but across the globe.
              </p>
              <p>
                Our intensive bootcamps, led by industry experts from Microsoft,
                Deloitte, PwC, Tesla, IBM, and EY, specialize in ERP and Data
                Science, providing students with real-world insights. We offer
                personalized mentorship, industry-relevant projects, and a
                robust alumni network to ensure you are job-ready and excel in
                your professional journey.
              </p>
            </div>
            <div className="w-full md:w-1/2 ">
              <img
                src={aboutusimg4}
                alt="Founder"
                className="w-full h-[560px] rounded-xl shadow-lg object-cover"
              />
              {/* <p className="mt-4 text-center text-sm text-gray-600 italic">
                “Making an impact, together” <br />
                <span className="font-medium text-gray-800">GTR Founder</span>
              </p> */}
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="py-1 px-6 md:px-20 bg-white mb-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Image - takes 50% width */}
            <div className="w-full md:w-1/2">
              <img
                src={aboutusimg1}
                alt="Founder"
                className="w-full h-[560px] rounded-xl shadow-lg object-cover"
              />
              <p className="mt-4 text-center text-sm md:text-base text-gray-600 italic">
                “Making an impact, together” <br />
                <span className="font-medium text-gray-800">GTR Founder</span>
              </p>
            </div>

            {/* Right: Content - takes 50% width */}
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4">
                We Focus on Student Training and Placement
              </h3>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed text-justify">
                <strong>GTR Academy</strong> is also a preferred choice for
                recruitment by numerous corporations in fields such as SAP and
                Salesforce Solutions, Embedded Systems, and Data Science. Our
                extensive network of over 190 companies ensures robust placement
                support for our candidates.
              </p>
              <blockquote className="border-l-4 border-yellow-400 pl-4 text-gray-700 italic text-justify">
                “Our commitment to quality training, distinguished trainers, and
                transparent dealings sets us apart. We dedicate ourselves to
                providing excellence in all our programs, whether it’s
                top-quality training, placement support, or the results of
                exam-based programs. This dedication is reflected in our glowing
                reviews on Google, Facebook, and LinkedIn.”
              </blockquote>
            </div>
          </div>
        </section>
        <NeedHelpSection />
      </div>
    </>
  );
};

export default AboutUs;
