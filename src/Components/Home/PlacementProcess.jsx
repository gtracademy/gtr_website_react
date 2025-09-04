import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We explore your career aspirations and help you define a clear path to success.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-800">
        <path d="M21.721 12.067a.75.75 0 0 1-.741 1.082l-2.028-.276a.75.75 0 0 1-.65-.794l.275-2.029a.75.75 0 0 1 1.082-.741l2.029.276a.75.75 0 0 1 .65.794l-.275 2.028Zm1.258-3.004a.75.75 0 0 1-.06.77L22.28 10.37a.75.75 0 0 1-1.06-1.061l.639-.638a.75.75 0 0 1 .77.061l1.061 1.06Zm-3.004-1.258a.75.75 0 0 1 .77-.06l2.028.275a.75.75 0 0 1 .741 1.082l-.276 2.029a.75.75 0 0 1-1.082.741l-2.028-.275a.75.75 0 0 1-.741-1.082l.276-2.028ZM12.067 21.721a.75.75 0 0 1-1.082-.741l.276-2.029a.75.75 0 0 1 .794-.65l2.028.275a.75.75 0 0 1 .741 1.082l-.275 2.029a.75.75 0 0 1-.794.65l-2.028-.276Zm-3.004 1.258a.75.75 0 0 1-.77-.06l-1.061-1.061a.75.75 0 0 1 1.06-1.06l.638.639a.75.75 0 0 1 .061.77l-1.061 1.06Zm-1.258-3.004a.75.75 0 0 1-.06-.77l.275-2.028a.75.75 0 0 1 1.082-.741l2.029.276a.75.75 0 0 1 .741 1.082l-.276 2.028a.75.75 0 0 1-.794.65l-2.028-.275a.75.75 0 0 1-.65-.794Z" />
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Develop',
    description: 'We help you build a compelling portfolio and craft a standout professional resume.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-800">
        <path fillRule="evenodd" d="M19.982 19.982c.866 0 1.5.634 1.5 1.5 0 .866-.634 1.5-1.5 1.5H4.018c-.866 0-1.5-.634-1.5-1.5 0-.866.634-1.5 1.5-1.5h15.964ZM2.5 10.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v5.75h4.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H3.25a.75.75 0 0 1-.75-.75v-7.5Z" clipRule="evenodd" />
        <path d="M6 5.25a.75.75 0 0 0-.75.75v8.25a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-.75-.75ZM15.25 10.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v5.75h4.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H16a.75.75 0 0 1-.75-.75v-7.5ZM16.5 5.25a.75.75 0 0 0-.75.75v8.25a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-.75-.75Z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Strategize',
    description: 'We conduct mock interviews and provide personalized tips to prepare you for success.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-800">
        <path d="M16.5 6.75a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 .75.75h5.5a.75.75 0 0 0 0-1.5h-4v-3Z" />
        <path fillRule="evenodd" d="M3.5 6.75a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0V6.75ZM6 20a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Zm7 0a1 1 0 0 1-1-1v-7a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1Zm7 0a1 1 0 0 1-1-1v-10a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1Z" clipRule="evenodd" />
        <path d="M10.75 12.25a.75.75 0 0 0-.75.75v3.75a.75.75 0 0 0 1.5 0V13a.75.75 0 0 0-.75-.75Z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Connect',
    description: 'We facilitate connections with our vast network of top hiring partners.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-800">
        <path d="M2.25 6a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V6ZM16.5 6a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V6ZM9.348 9.947a.75.75 0 0 1 1.06 0l2.695 2.694a.75.75 0 0 1 0 1.06l-2.695 2.694a.75.75 0 1 1-1.06-1.06l1.822-1.821-1.822-1.821a.75.75 0 0 1 0-1.061Z" />
        <path d="M12 3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3.75A.75.75 0 0 1 12 3ZM12 18a.75.75 0 0 1 .75-.75v2.25a.75.75 0 0 1-1.5 0V17.25a.75.75 0 0 1 .75-.75Z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Succeed',
    description: 'We celebrate your success as you land your dream job and start your new career.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-800">
        <path d="M18.669 11.23a1.125 1.125 0 0 1 1.761 1.229l-2.128 4.093a1.125 1.125 0 0 1-.684.621l-4.144 1.27a1.125 1.125 0 0 1-1.229-.684l-4.093-2.128a1.125 1.125 0 0 1-.621-1.229l1.27-4.144a1.125 1.125 0 0 1 1.229-.621l4.093 2.128a1.125 1.125 0 0 1 .684.621l2.128 4.093Z" />
        <path fillRule="evenodd" d="M2.54 9.172a.75.75 0 0 1 1.06-.011l3.522 3.522 1.353-1.352a.75.75 0 0 1 1.06 0l4.243 4.242-4.093 2.128a1.125 1.125 0 0 1-1.229-.684l-2.128-4.093a1.125 1.125 0 0 1-.621-1.229l1.27-4.144a1.125 1.125 0 0 1 1.229-.621l4.093 2.128-4.242 4.243a.75.75 0 0 1-.951.09l-3.522-3.522a.75.75 0 0 1-.011-1.06Z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
        <path d="M9.75 3.375a.75.75 0 0 0-.75.75V5.25a.75.75 0 0 0 1.5 0V4.125a.75.75 0 0 0-.75-.75ZM15 3.375a.75.75 0 0 0-.75.75V5.25a.75.75 0 0 0 1.5 0V4.125a.75.75 0 0 0-.75-.75ZM12 6a.75.75 0 0 1 .75.75V8.25a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 12 6Z" />
      </svg>
    ),
  },
];

const PlacementProcess = () => {
  return (
    <div className="bg-[#f0f9f3] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#0B3954] mb-2">
          Your Placement Journey
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          We guide you through a proven process to land your dream job, step by step.
        </p>

        <div className="flex flex-col md:grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-5xl font-extrabold text-green-600 font-mono">
                  {step.number}
                </span>
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#0B3954] mb-2 text-start">
                {step.title}
              </h3>
              <p className="text-gray-600 text-start leading-snug">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementProcess;