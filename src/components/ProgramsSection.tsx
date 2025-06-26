
import React from 'react';

const ProgramsSection = () => {
  const programs = [
    {
      icon: '💻',
      title: 'Engineering & Technology',
      description: 'Cutting-edge programs in computer science, electrical engineering, and emerging technologies that prepare students for the digital future.',
      features: ['Computer Science', 'Electrical Engineering', 'Data Science']
    },
    {
      icon: '🏥',
      title: 'Health Sciences',
      description: 'Comprehensive healthcare programs that combine rigorous academic training with hands-on clinical experience in state-of-the-art facilities.',
      features: ['Medicine', 'Nursing', 'Public Health']
    },
    {
      icon: '💼',
      title: 'Business & Management',
      description: 'Dynamic business programs that develop entrepreneurial thinking and leadership skills for the global marketplace.',
      features: ['MBA Programs', 'Finance', 'Marketing']
    },
    {
      icon: '🎨',
      title: 'Arts & Humanities',
      description: 'Rich programs in literature, philosophy, history, and fine arts that cultivate critical thinking and creative expression.',
      features: ['Literature', 'Philosophy', 'Fine Arts']
    },
    {
      icon: '📊',
      title: 'Social Sciences',
      description: 'Interdisciplinary programs that examine human behavior, society, and culture through multiple lenses and methodologies.',
      features: ['Psychology', 'Sociology', 'Political Science']
    },
    {
      icon: '🧪',
      title: 'Natural Sciences',
      description: 'Rigorous scientific programs that combine theoretical knowledge with practical research experience in modern laboratories.',
      features: ['Biology', 'Chemistry', 'Physics']
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Academic Programs</h2>
          <p className="text-xl text-gray-600">Discover world-class programs designed to prepare you for tomorrow's challenges</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{program.icon}</div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">{program.title}</h4>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <ul className="space-y-2 mb-4">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
