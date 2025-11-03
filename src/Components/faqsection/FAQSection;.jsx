import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "What courses does GTR Academy offer?",
    answer:
      "We offer a diverse range of courses in IT and related fields, including SAP modules, Data Science, Python, Advanced Excel, Power BI, and more. Our programs are designed to equip you with the essential skills and knowledge required to excel in today’s competitive job market.",
  },
  {
    question: "What are the intensive bootcamps at GTR Academy?",
    answer:
      "Our intensive bootcamps provide immersive learning experiences in a short period. Led by industry experts from Microsoft, Deloitte, PwC, Tesla, IBM, and EY, these bootcamps specialize in ERP and Data Science, offering real-world insights, hands-on experience, and practical skills.",
  },
  {
    question: "How does personalized mentorship work at GTR Academy?",
    answer:
      "Our programs include projects designed to mirror real-world challenges faced by professionals in the field. These projects allow you to apply your knowledge and skills to practical scenarios, enhancing your problem-solving abilities.",
  },
  {
    question: "What is the alumni network at GTR Academy?",
    answer:
      "As a GTR Academy student, you’ll gain access to our robust alumni network. This network is a valuable resource for job opportunities, industry connections, and professional growth, creating a strong community of learners and leaders.",
  },
  {
    question: "What makes the training at GTR Academy comprehensive?",
    answer:
      "We cover a wide range of topics and skills, ensuring you receive a well-rounded education and training. Whether you’re looking to enhance technical skills, develop leadership abilities, or gain expertise in a specific field, our programs are designed to meet your needs.",
  },
  {
    question: "Does GTR Academy offer placement support?",
    answer:
      "Yes, GTR Academy offers robust placement support through our extensive network of over 190 companies. We assist with resume building, interview preparation, and job matching to help you secure your desired position.",
  },
  {
    question: "Who are the mentors at GTR Academy?",
    answer:
      "Our mentors are industry professionals with extensive experience in their respective fields. For example, Sudhindra Deshpande, our SAP FICO expert, has 25 years of experience and has trained over 27,000 students. Each mentor brings valuable insights and practical knowledge to their teaching.",
  },
  {
    question: "How can I enroll in a course at GTR Academy?",
    answer:
      "You can enroll in our courses by visiting our website and selecting the course you are interested in. Follow the registration process and complete the payment to secure your spot. If you have any questions, feel free to contact our support team for assistance.",
  },
  {
    question: "What is the refund policy at GTR Academy?",
    answer:
      "All purchases made with GTR Academy are non-refundable, and no exceptions will be granted. Please review our Refund and Cancellation Policy for detailed information.",
  },
  {
    question: "What are some of the key features of GTR Academy's programs?",
    answer:
      "Our programs are known for their intensive bootcamps, personalized mentorship, industry-relevant projects, robust alumni network, comprehensive training, and strong placement support. These features ensure you receive the best education and career support.",
  },
  {
    question: "Does GTR Academy offer corporate training?",
    answer:
      "Yes, we offer customized corporate training in various fields such as ERP, Data Science, and more. Our corporate training programs are tailored to meet the specific needs of your organization and help your team gain valuable skills and knowledge.",
  },
  {
    question: "What sets GTR Academy apart from other training institutes?",
    answer:
      "Our commitment to quality training, distinguished trainers, personalized mentorship, and transparent dealings sets us apart. We dedicate ourselves to providing excellence in all our programs, whether it’s top-quality training, placement support, or the results of exam-based programs.",
  },
  {
    question: "How does GTR Academy help with career advancement?",
    answer:
      "Our placement support includes resume building, interview preparation, and job matching. We work closely with top corporations to provide job opportunities and career advancement for our candidates.",
  },
  {
    question: "How can I contact GTR Academy for more information?",
    answer:
      "You can reach out to us through our website’s contact form, email, or phone. Our support team is always ready to assist you with any questions or concerns you may have. Join us today at GTR Academy to supercharge your career and become self-reliant. Step up, learn today, and lead tomorrow with us!",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left text-gray-800 font-semibold text-lg md:text-xl focus:outline-none"
              >
                <span>{faq.question}</span>
                <span
                  className={`text-blue-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-[500px] p-5 pt-0" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
