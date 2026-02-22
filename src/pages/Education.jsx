import React, { useEffect, useState, useRef } from 'react';
import { useAnimateIn } from '../hooks/useAnimateIn';
import { useInView } from '../hooks/useInView';

const Education = () => {
  const { fadeInUpClass } = useAnimateIn();

  // --- Typing animation for hero section ---
  const lines = [
    'SYSTEM ONLINE',
    'Hello, I\'m Vikas Vaniya',
    'AI/ML Developer | Computer Vision Engineer',
    'Designing intelligent systems that solve real-world',
    'problems using AI, Computer Vision, and scalable web',
    'technologies.',
  ];

  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingDone, setIsTypingDone] = useState(false);

  // Typing effect
  useEffect(() => {
    if (currentLine >= lines.length) {
      setIsTypingDone(true);
      return;
    }

    const line = lines[currentLine];
    if (currentChar < line.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          if (newLines.length <= currentLine) newLines.push('');
          newLines[currentLine] = line.slice(0, currentChar + 1);
          return newLines;
        });
        setCurrentChar(prev => prev + 1);
      }, 50); // typing speed
      return () => clearTimeout(timer);
    } else {
      // Move to next line after a short pause
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // --- Scroll animations for education cards ---
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });

  // Education data
  const education = [
    {
      degree: 'B.tech. in Artificial Intelligence',
      institution: 'Indrshil University',
      year: '2022 - 2026',
      description: 'Specialized in deep learning and reinforcement learning. Thesis on multi-modal learning.',
    },
    {
      degree: 'B.tech. in Computer Engineering',
      institution: 'Indrshil University',
      year: '2022 - 2026',
      description: 'Minor in Mathematics. Focus on algorithms, data structures, and machine learning foundations.',
    },
  ];

  // Certifications
  const certifications = [
    'TensorFlow Developer Certificate',
    'AWS Machine Learning Specialty',
    'Deep Learning Specialization (deeplearning.ai)',
    'MLOps Certification',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 overflow-hidden">
      {/* Terminal Hero Section */}
      <div className="bg-gray-900 text-green-400 font-mono p-6 rounded-lg shadow-xl mb-16 border border-green-500">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400 text-sm ml-2">terminal@portfolio:~$</span>
        </div>

        <div className="space-y-1 text-lg md:text-xl">
          {displayedLines.map((line, index) => (
            <p key={index} className="whitespace-pre-wrap">
              {line}
              {index === displayedLines.length - 1 && !isTypingDone && showCursor && (
                <span className="inline-block w-2 h-5 bg-green-400 ml-1 animate-pulse"></span>
              )}
            </p>
          ))}
          {isTypingDone && (
            <div className="mt-4">
              <a
                href="/projects"
                className="inline-block px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition transform hover:scale-105"
              >
                View My Work →
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Education Section */}
      <div ref={sectionRef}>
        <h1 className={`text-4xl font-bold text-gray-800 mb-2 text-center ${fadeInUpClass(sectionInView ? 0 : null)}`}>
          Education
        </h1>
        <p className={`text-gray-600 text-center mb-12 ${fadeInUpClass(sectionInView ? 100 : null)}`}>
          My academic journey
        </p>

        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 ${
                fadeInUpClass(sectionInView ? 200 + index * 100 : null)
              }`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h2 className="text-2xl font-semibold text-gray-800">{item.degree}</h2>
                <span className="text-blue-600 font-medium">{item.year}</span>
              </div>
              <p className="text-gray-600 text-lg mb-2">{item.institution}</p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h2 className={`text-3xl font-bold text-gray-800 mb-6 text-center ${fadeInUpClass(sectionInView ? 400 : null)}`}>
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={cert}
                className={`bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition ${
                  fadeInUpClass(sectionInView ? 500 + i * 50 : null)
                }`}
              >
                <p className="text-gray-800 font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;