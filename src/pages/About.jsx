import React, { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';
import pic from "../assets/v.jpeg"

const About = () => {
  // Entrance animation for the hero section (mount only)
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUpClass = (delay = 0) =>
    `transition-all duration-700 ease-out transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }` + (delay ? ` delay-${delay}` : '');

  // Scroll‑triggered animations for lower sections
  const { ref: skillsRef, isInView: skillsInView } = useInView({ threshold: 0.2 });
  const { ref: experienceRef, isInView: experienceInView } = useInView({ threshold: 0.2 });

  const skills = [
    'Python', 'TensorFlow', 'PyTorch', 'Machine Learning',
    'Deep Learning', 'NLP', 'Computer Vision', 'LLMs',
    'Data Engineering', 'Cloud Computing', 'MLOps', 'React',
    'FastAPI', 'Docker', 'Kubernetes', 'SQL'
  ];

  const experiences = [
    {
      title: 'Senior AI Engineer',
      company: 'TechCorp AI',
      period: '2022 - Present',
      description: 'Lead the development of LLM-based applications, optimize inference pipelines, and mentor junior engineers.'
    },
    {
      title: 'Machine Learning Engineer',
      company: 'DataWorks',
      period: '2019 - 2022',
      description: 'Built and deployed computer vision models for autonomous retail checkout systems.'
    },
    {
      title: 'Software Engineer (AI)',
      company: 'StartupX',
      period: '2017 - 2019',
      description: 'Developed recommendation engines and predictive analytics tools for e-commerce.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />

      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className={`inline-block mb-4 ${fadeInUpClass(0)}`}>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl mx-auto group">
            <img
               src={pic}
              alt="Profile"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
        <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-4 ${fadeInUpClass(100)}`}>
          Vikas Vaniya
        </h1>
        <p className={`text-xl md:text-2xl text-blue-600 font-semibold ${fadeInUpClass(200)}`}>
          AI Engineer & Machine Learning Specialist
        </p>
      </div>

      {/* Bio Section */}
      <div className={`mb-16 max-w-3xl mx-auto text-center ${fadeInUpClass(300)}`}>
        <p className="text-lg text-gray-700 leading-relaxed">
          I'm an AI engineer with a passion for building intelligent systems that solve real-world problems.
          With over 6 years of experience in machine learning and software engineering, I've worked on projects
          ranging from natural language processing to computer vision. I believe in creating technology that is
          both powerful and ethical, and I love sharing knowledge with the community.
        </p>
      </div>

      {/* Skills Section – scroll‑triggered */}
      <div ref={skillsRef} className="mb-16">
        <h2 className={`text-3xl font-bold text-gray-800 mb-8 text-center transition-all duration-700 ${
          skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Technical Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className={`px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium 
                         hover:bg-blue-200 hover:scale-110 hover:shadow-md transition-all duration-300 
                         ${skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: skillsInView ? `${index * 50}ms` : '0ms' }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Experience Timeline – scroll‑triggered */}
      <div ref={experienceRef} className="mb-16">
        <h2 className={`text-3xl font-bold text-gray-800 mb-8 text-center transition-all duration-700 ${
          experienceInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((job, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 
                         ${experienceInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: experienceInView ? `${300 + index * 150}ms` : '0ms' }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {job.title}
                </h3>
                <span className="text-blue-600 font-medium">{job.period}</span>
              </div>
              <p className="text-gray-600 text-lg mb-2">{job.company}</p>
              <p className="text-gray-700">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;