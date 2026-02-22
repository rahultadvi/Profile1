import React, { useEffect, useState, useRef } from 'react';
import { useAnimateIn } from '../hooks/useAnimateIn';
import { useInView } from '../hooks/useInView';
import pic from "../assets/v.jpeg"

const Home = () => {
  // Typing animation state
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const fullTitle = 'Vikas Vaniya';
  const fullSubtitle = 'AI Engineer & Machine Learning Specialist';
  const [titleIndex, setTitleIndex] = useState(0);
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);

  // Typing effect
  useEffect(() => {
    if (titleIndex < fullTitle.length) {
      const timer = setTimeout(() => {
        setDisplayedTitle(prev => prev + fullTitle[titleIndex]);
        setTitleIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Start subtitle after title finishes
      setShowSubtitle(true);
    }
  }, [titleIndex]);

  useEffect(() => {
    if (showSubtitle && subtitleIndex < fullSubtitle.length) {
      const timer = setTimeout(() => {
        setDisplayedSubtitle(prev => prev + fullSubtitle[subtitleIndex]);
        setSubtitleIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [showSubtitle, subtitleIndex]);

  // Scroll animations
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.3 });
  const { ref: skillsRef, isInView: skillsInView } = useInView({ threshold: 0.3 });

  // Animation classes based on inView
  const fadeInUpClass = (inView, delay = 0) =>
    `transition-all duration-700 ease-out transform ${
      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }` + (delay ? ` delay-${delay}` : '');

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 overflow-hidden">
      {/* Hero Section */}
      <div ref={heroRef} className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        {/* Profile Image with floating and pulse animation */}
        <div className={`flex-shrink-0 ${fadeInUpClass(heroInView, 0)}`}>
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl hover:shadow-2xl transition-all duration-300 animate-float">
            <div className="absolute inset-0 rounded-full animate-pulse border-4 border-blue-300 opacity-75"></div>
            <img
               src={pic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center md:text-left flex-1">
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-2 ${fadeInUpClass(heroInView, 100)}`}>
            {displayedTitle}
            <span className="animate-blink">|</span>
          </h1>
          <p className={`text-xl md:text-2xl text-blue-600 font-semibold mb-4 min-h-[3rem] ${fadeInUpClass(heroInView, 200)}`}>
            {displayedSubtitle}
            {showSubtitle && subtitleIndex < fullSubtitle.length && (
              <span className="animate-blink">|</span>
            )}
          </p>
          <p className={`text-gray-600 text-lg mb-6 max-w-2xl ${fadeInUpClass(heroInView, 300)}`}>
            Building intelligent systems that bridge the gap between cutting-edge AI research and real-world engineering.
            Passionate about creating scalable, ethical, and impactful solutions.
          </p>

          <div className={`flex flex-wrap justify-center md:justify-start gap-4 mb-8 ${fadeInUpClass(heroInView, 400)}`}>
            <a
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-110 hover:shadow-xl duration-200"
            >
              Contact Me
            </a>
            <a
              href="/projects"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition transform hover:scale-110 hover:shadow-xl duration-200"
            >
              View Projects
            </a>
          </div>

          {/* Social Icons */}
          <div className={`flex justify-center md:justify-start space-x-4 ${fadeInUpClass(heroInView, 500)}`}>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition transform hover:scale-125">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition transform hover:scale-125">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition transform hover:scale-125">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Featured Skills Preview */}
      <div ref={skillsRef} className="mt-16">
        <h2 className={`text-3xl font-bold text-gray-800 mb-6 text-center md:text-left ${fadeInUpClass(skillsInView, 600)}`}>
          Core Expertise
        </h2>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Deep Learning', 'NLP'].map((skill, i) => (
            <span
              key={skill}
              className={`px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium 
                         hover:bg-blue-200 hover:scale-110 hover:shadow-md transition-all duration-300 
                         ${fadeInUpClass(skillsInView, 700 + i * 50)}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Add custom keyframe animations to global CSS or via Tailwind config */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Home;