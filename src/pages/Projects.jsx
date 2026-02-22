import React from 'react';
import { useAnimateIn } from '../hooks/useAnimateIn';
import { useInView } from '../hooks/useInView';

const Projects = () => {
  const { fadeInUpClass } = useAnimateIn();

  // Scroll animation for the entire grid
  const { ref: gridRef, isInView: gridInView } = useInView({ threshold: 0.1 });

  // Helper: combine base delay with scroll-triggered visibility
  const cardFadeClass = (baseDelay) => {
    return `transition-all duration-700 ease-out transform ${
      gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }` + (gridInView ? ` delay-${baseDelay}` : '');
  };

  const projects = [
    {
      title: 'LLM-Powered Chatbot',
      description: 'Built a production-ready chatbot using LangChain, OpenAI, and FastAPI with memory and context management.',
      tech: ['Python', 'LangChain', 'FastAPI', 'React'],
      image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#',
    },
    {
      title: 'Computer Vision for Retail',
      description: 'Developed a real-time object detection system for automated checkout using YOLOv5 and TensorRT.',
      tech: ['Python', 'YOLOv5', 'TensorRT', 'Docker'],
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#',
    },
    {
      title: 'MLOps Pipeline',
      description: 'Designed an end-to-end ML pipeline with Kubeflow, MLflow, and Seldon for model deployment.',
      tech: ['Kubeflow', 'MLflow', 'Docker', 'Kubernetes'],
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#',
    },
    {
      title: 'AI Research Assistant',
      description: 'Built a tool that summarizes research papers and extracts key findings using transformer models.',
      tech: ['Hugging Face', 'Transformers', 'Flask', 'React'],
      image: 'https://images.unsplash.com/photo-1674027444485-ce889c2a1b5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 overflow-hidden">
      {/* Header with initial fade-in */}
      <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-2 text-center ${fadeInUpClass(0)}`}>
        Projects
      </h1>
      <p className={`text-gray-600 text-center mb-12 max-w-2xl mx-auto ${fadeInUpClass(100)}`}>
        Real-world applications I've built – from LLMs to computer vision and MLOps.
      </p>

      {/* Project Grid – scroll-triggered animations */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const delay = 200 + index * 100; // base delay in ms
          return (
            <a
              key={index}
              href={project.link}
              className={`group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 ${cardFadeClass(delay)}`}
            >
              {/* Image with overlay on hover */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium group-hover:bg-blue-200 group-hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;