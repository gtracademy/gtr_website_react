import React, { useState } from "react";

const curriculumData = [
  {
    module: "Module 1: Detailed Understanding of Generative AI",
    content: [
      "Foundations of AI and ML: Differences between discriminative vs generative models",
      "Understanding Transformers & Embeddings",
      "The evolution from GPT-2 to GPT-4 and beyond",
      "Hands-on with GPT APIs: text, chat, code generation",
      "Ethical considerations, risks, and real-world implications"
    ],
  },
  {
    module: "Module 2: Key Definitions & Concepts",
    content: [
      "AI terminology explained",
      "Industry jargons simplified",
      "Understanding embeddings, prompts, context windows"
    ],
  },
  {
    module: "Module 3: Industry Use Cases & Implementable Ideas",
    content: [
      "Healthcare applications",
      "Financial sector insights",
      "Customer service automation",
      "Retail & logistics optimization"
    ],
  },
  {
    module: "Module 4: Hands-on Experience Creating a Chatbot",
    content: [
      "Building your own chatbot using GPT",
      "Integrating APIs",
      "Testing and deployment"
    ],
  },
  {
    module: "Module 5: Future Trends & Staying Relevant",
    content: [
      "AI trends to watch",
      "How to keep upskilling",
      "Staying competitive in AI-driven industries"
    ],
  },
];

const Curriculum = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="curriculum" className="pt-8 max-w-7xl mx-auto">
    
              <h2 className="text-3xl font-bold mb-6 text-[#0B3954] border-b-2 border-[#C81D25] pb-2 inline-block">Curriculum</h2>
              <div className="space-y-4">
                {curriculumData.map((item, index) => (
                  <div
                    key={index}
                    className={`border border-gray-300 rounded-xl overflow-hidden shadow-sm transition-all duration-300 ease-in-out ${openIndex === index ? 'shadow-md border-b-2 border-blue-800 ' : 'hover:shadow-md'}`}
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className={`w-full flex justify-between cursor-pointer items-center p-4 text-left font-bold text-lg transition-colors duration-300 ${openIndex === index ? 'bg-red-50 text-gray-900' : 'bg-white text-gray-800 hover:bg-gray-50'}`}
                    >
                      {item.module}
                      <span className={`transform transition-transform duration-300 text-2xl ${openIndex === index ? 'rotate-90 text-[#0B3954]' : 'rotate-0 text-gray-500'}`}>
                        &rsaquo;
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <ul className="px-12 list-disc space-y-0 text-gray-700 overflow-hidden">
                        {item.content.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
    
    </section>
  );
};

export default Curriculum;