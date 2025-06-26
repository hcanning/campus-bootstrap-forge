
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">
              🎓 University of Excellence
            </h4>
            <p className="text-gray-300 mb-4">
              Empowering minds, transforming lives, and shaping the future through 
              excellence in education, research, and service to humanity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">📘</a>
              <a href="#" className="text-gray-300 hover:text-white">🐦</a>
              <a href="#" className="text-gray-300 hover:text-white">📷</a>
              <a href="#" className="text-gray-300 hover:text-white">💼</a>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold mb-3">Academics</h5>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Undergraduate</a></li>
              <li><a href="#" className="hover:text-white">Graduate</a></li>
              <li><a href="#" className="hover:text-white">Doctoral</a></li>
              <li><a href="#" className="hover:text-white">Online Programs</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-3">Campus Life</h5>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Student Organizations</a></li>
              <li><a href="#" className="hover:text-white">Athletics</a></li>
              <li><a href="#" className="hover:text-white">Housing</a></li>
              <li><a href="#" className="hover:text-white">Dining</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-3">Contact</h5>
            <ul className="space-y-2 text-gray-300">
              <li>
                📍 123 University Ave<br />
                Excellence City, EX 12345
              </li>
              <li>📞 (555) 123-4567</li>
              <li>✉️ info@university.edu</li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-2 md:mb-0">&copy; 2024 University of Excellence. All rights reserved.</p>
          <p className="text-gray-300">
            Powered by Drupal 11 | 
            <a href="#" className="hover:text-white"> Privacy Policy</a> | 
            <a href="#" className="hover:text-white"> Terms of Use</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
