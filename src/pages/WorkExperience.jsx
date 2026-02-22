import React from 'react';
import { useAnimateIn } from '../hooks/useAnimateIn';
import { useInView } from '../hooks/useInView';

const WorkExperience = () => {
  const { fadeInUpClass } = useAnimateIn();

  // Scroll animation for the entire timeline
  const { ref: timelineRef, isInView: timelineInView } = useInView({ threshold: 0.1 });

  // Helper to combine base delay with scroll visibility
  const itemFadeClass = (baseDelay) => {
    return `transition-all duration-700 ease-out transform ${
      timelineInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }` + (timelineInView ? ` delay-${baseDelay}` : '');
  };

  const experiences = [
    {
      title: 'Senior AI Engineer',
      company: 'TechCorp AI',
      period: '2022 - Present',
      description: 'Lead the development of LLM-based applications, optimize inference pipelines, and mentor junior engineers. Implemented RAG systems for enterprise clients.',
    },
    {
      title: 'Machine Learning Engineer',
      company: 'DataWorks',
      period: '2019 - 2022',
      description: 'Built and deployed computer vision models for autonomous retail checkout systems. Achieved 98% accuracy and reduced latency by 40%.',
    },
    {
      title: 'Software Engineer (AI)',
      company: 'StartupX',
      period: '2017 - 2019',
      description: 'Developed recommendation engines and predictive analytics tools for e-commerce. Worked with cross-functional teams to integrate ML models into production.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 overflow-hidden">
      {/* Header with initial fade-in */}
      <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-2 text-center ${fadeInUpClass(0)}`}>
        Work Experience
      </h1>
      <p className={`text-gray-600 text-center mb-12 max-w-2xl mx-auto ${fadeInUpClass(100)}`}>
        My professional journey in AI and software engineering.
      </p>

      {/* Timeline container – scroll-triggered */}
      <div ref={timelineRef} className="relative">
        {/* Animated vertical line (grows as you scroll) */}
        <div
          className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-blue-200 transition-all duration-1000 ease-out ${
            timelineInView ? 'h-full' : 'h-0'
          }`}
          style={{ top: 0 }}
        />

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const delay = 200 + index * 150; // staggered delay
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${itemFadeClass(delay)}`}
              >
                {/* Timeline dot (pulsing) */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-0 md:top-6">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-lg" />
                </div>

                {/* Content card – alternating sides on desktop */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                  }`}
                >
                  <div
                    className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                      isEven ? 'hover:rotate-1' : 'hover:-rotate-1'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                      <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {exp.title}
                      </h2>
                      <span className="text-blue-600 font-medium mt-1 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600 text-lg mb-2 hover:text-blue-600 transition-colors">
                      {exp.company}
                    </p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;