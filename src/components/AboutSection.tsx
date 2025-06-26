
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">About Our University</h2>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              For over a century, the University of Excellence has been at the forefront of higher education, 
              pioneering innovative teaching methods and conducting groundbreaking research that shapes our world.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Our commitment to academic excellence, combined with our dedication to fostering critical thinking 
              and creativity, has produced generations of leaders, innovators, and change-makers.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  🏆
                </div>
                <div>
                  <h5 className="font-semibold">Excellence</h5>
                  <small className="text-gray-500">Academic Achievement</small>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  🌍
                </div>
                <div>
                  <h5 className="font-semibold">Global</h5>
                  <small className="text-gray-500">International Reach</small>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="University Campus" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
