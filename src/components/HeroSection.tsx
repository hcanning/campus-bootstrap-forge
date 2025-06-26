
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Excellence in Education</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Shaping tomorrow's leaders through innovative learning, groundbreaking research, and transformative experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Explore Programs
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Virtual Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
