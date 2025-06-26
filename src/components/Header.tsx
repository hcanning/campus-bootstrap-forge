
import React from 'react';

const Header = () => {
  return (
    <nav className="bg-blue-900/90 backdrop-blur-sm fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-white font-bold text-xl">
              🎓 University of Excellence
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#programs" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium">Programs</a>
              <a href="#admissions" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium">Admissions</a>
              <a href="#contact" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
