import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Shashank Singh",
    role: "SAP Consultant",
    text: "This course gave me the confidence to handle SAP EWM projects. The mentor explains everything clearly with real-time examples.",
    img: "https://via.placeholder.com/150/ffc107/000000?text=S",
  },
  {
    name: "Lakshmi",
    role: "Associate - TCS USA",
    text: "The hands-on approach was exactly what I needed. I feel industry-ready and skilled in SAP EWM after completing this program.",
    img: "https://via.placeholder.com/150/ffc107/000000?text=L",
  },
 
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 bg-white max-w-7xl mx-auto">
      
        <h2 className="text-3xl font-bold mb-6 text-[#0B3954] border-b-2 border-[#C81D25] pb-2 inline-block">Student Testimonials</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative bg-gray-50 p-8 rounded-lg shadow-md border-b-4 border-[#C81D25] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaQuoteLeft className="absolute top-4 left-4 text-red-500 text-3xl opacity-20" />
                <p className="text-gray-700 leading-relaxed text-lg italic mb-6">“{t.text}”</p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover shadow-sm border-3 border-red-500"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{t.name}</h3>
                    <p className="text-sm text-gray-600 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
 
    </section>
  );
};

export default Testimonials;