import React from 'react';
import { useAnimateIn } from '../hooks/useAnimateIn';
import { useInView } from '../hooks/useInView';

const Skill = () => {
  const { fadeInUpClass } = useAnimateIn();

  // Skill categories with proficiency levels (0‑100)
  const skillCategories = [
    {
      category: 'AI & Machine Learning',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 85 },
        { name: 'Scikit-learn', level: 90 },
        { name: 'Keras', level: 80 },
        { name: 'Hugging Face', level: 85 },
        { name: 'LangChain', level: 75 },
        { name: 'OpenAI', level: 80 },
      ],
    },
    {
      category: 'Data Engineering',
      skills: [
        { name: 'SQL', level: 90 },
        { name: 'Pandas', level: 95 },
        { name: 'Spark', level: 80 },
        { name: 'Airflow', level: 75 },
        { name: 'Kafka', level: 70 },
        { name: 'Hadoop', level: 65 },
      ],
    },
    {
      category: 'MLOps & Cloud',
      skills: [
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 85 },
        { name: 'AWS', level: 85 },
        { name: 'GCP', level: 80 },
        { name: 'MLflow', level: 80 },
        { name: 'Kubeflow', level: 70 },
        { name: 'Jenkins', level: 75 },
        { name: 'Terraform', level: 70 },
      ],
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'FastAPI', level: 80 },
        { name: 'Flask', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'GraphQL', level: 75 },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 overflow-hidden">
      {/* Header */}
      <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-2 text-center ${fadeInUpClass(0)}`}>
        Skills & Expertise
      </h1>
      <p className={`text-gray-600 text-center mb-12 max-w-2xl mx-auto ${fadeInUpClass(100)}`}>
        Technologies I work with and my proficiency levels.
      </p>

      {/* Categories */}
      <div className="space-y-16">
        {skillCategories.map((category, catIndex) => {
          // Scroll trigger for this category
          const { ref: catRef, isInView: catInView } = useInView({ threshold: 0.2, triggerOnce: true });

          return (
            <div
              key={category.category}
              ref={catRef}
              className={`${fadeInUpClass(200 + catIndex * 100)}`}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-blue-200 inline-block">
                {category.category}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  // Stagger delay for each skill
                  const skillDelay = skillIndex * 50;

                  return (
                    <div
                      key={skill.name}
                      className="group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: catInView ? `${skill.level}%` : '0%',
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Optional: floating background decoration */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
    </div>
  );
};

export default Skill;