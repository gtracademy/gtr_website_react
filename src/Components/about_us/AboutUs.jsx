// import aboutusimg1 from "../../assets/aboutus_1.jpg";
// import aboutusimg2 from "../../assets/aboutus_2.jpg";
// import aboutusimg3 from "../../assets/aboutus_3.jpg";

import aboutusimg4 from "../../assets/aboutus3.jpg";
import aboutusbanner from "../../assets/About us.png"
import Header from "../Header";

const AboutUs = () => {
  return (
    <>
    <div className="w-full shadow-md bg-white sticky top-0 z-50"><Header/></div>

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
        {/* <div className="relative -mt-20 flex justify-center flex-wrap gap-4 px-4">
          {[aboutusimg1, aboutusimg2, aboutusimg3, aboutusimg4].map(
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
        </div> */}

        {/* Section 1 */}
        <section className=" py-16 px-6 md:px-20">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            We make sure your idea & creation delivered properly
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-gray-600 text-justify">
            <p>
              <strong>Rasta Infotech</strong> is a leading digital solutions
              provider specializing in custom software development, enterprise
              technology consulting, and industry-specific digital
              transformation. We help businesses across sectors—including
              healthcare, life sciences, manufacturing, travel and
              transportation, energy, and utilities—leverage modern technologies
              to achieve operational excellence and sustainable growth.
            </p>
            <p>
              With a strong foundation in cloud computing, AI/ML, IoT, and data
              analytics, we deliver scalable, secure, and future-ready platforms
              that solve real-world challenges. Our team of experienced
              engineers, designers, and strategists work collaboratively to
              build solutions that are not only technically robust but also
              aligned with your business goals.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="py-1 px-6 md:px-20 bg-white">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Image - takes 50% width */}
            <div className="w-full md:w-1/2 ">
              <img
                src={aboutusimg4}
                alt="Founder"
                className="w-full h-auto rounded-xl shadow-lg object-fit"
              />
              <p className="mt-4 text-center text-sm text-gray-600 italic">
                “Making an impact, together” <br />
                <span className="font-medium text-gray-800">Rasta Founder</span>
              </p>
            </div>

            {/* Right: Content - takes 50% width */}
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-semibold mb-6">
                We empower small business owners
              </h3>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed text-justify">
                At <strong>Rasta Infotech</strong>, we believe that small
                businesses are the backbone of innovation and community growth.
                Our mission is to empower entrepreneurs and small business
                owners with affordable, scalable, and smart digital solutions
                that help them compete in today’s fast-paced market.
              </p>
              <blockquote className="border-l-4 border-yellow-400 pl-4 text-gray-700 italic text-justify">
                “Whether you're launching a startup, running a local shop, or
                expanding your online presence, we provide the tools and
                technology to help you succeed.”
              </blockquote>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
