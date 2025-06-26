
import React from 'react';

const StatsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-2">25,000+</h2>
            <p className="text-gray-600">Students</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-2">1,200+</h2>
            <p className="text-gray-600">Faculty</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-2">150+</h2>
            <p className="text-gray-600">Programs</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-2">200+</h2>
            <p className="text-gray-600">Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
