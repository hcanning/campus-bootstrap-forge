
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Navigation */}
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

      {/* Hero Slider */}
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

      {/* Stats Section */}
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

      {/* About Section */}
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

      {/* Programs Cards */}
      <section id="programs" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Academic Programs</h2>
            <p className="text-xl text-gray-600">Discover world-class programs designed to prepare you for tomorrow's challenges</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💻</div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Engineering & Technology</h4>
              <p className="text-gray-600 mb-4">
                Cutting-edge programs in computer science, electrical engineering, and emerging technologies 
                that prepare students for the digital future.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Computer Science
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Electrical Engineering
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Data Science
                </li>
              </ul>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Health Sciences</h4>
              <p className="text-gray-600 mb-4">
                Comprehensive healthcare programs that combine rigorous academic training with hands-on 
                clinical experience in state-of-the-art facilities.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Medicine
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Nursing
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Public Health
                </li>
              </ul>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💼</div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Business & Management</h4>
              <p className="text-gray-600 mb-4">
                Dynamic business programs that develop entrepreneurial thinking and leadership skills 
                for the global marketplace.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  MBA Programs
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Finance
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Marketing
                </li>
              </ul>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Arts & Humanities</h4>
              <p className="text-gray-600 mb-4">
                Rich programs in literature, philosophy, history, and fine arts that cultivate 
                critical thinking and creative expression.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Literature
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Philosophy
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Fine Arts
                </li>
              </ul>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Social Sciences</h4>
              <p className="text-gray-600 mb-4">
                Interdisciplinary programs that examine human behavior, society, and culture 
                through multiple lenses and methodologies.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Psychology
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Sociology
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Political Science
                </li>
              </ul>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🧪</div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Natural Sciences</h4>
              <p className="text-gray-600 mb-4">
                Rigorous scientific programs that combine theoretical knowledge with practical 
                research experience in modern laboratories.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Biology
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Chemistry
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✓</span>
                  Physics
                </li>
              </ul>
              <button className="text-blue-600 hover:text-blue-800 font-semibold">Learn More →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section id="admissions" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about joining our university community</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-white rounded-lg shadow">
              <button className="w-full text-left p-6 focus:outline-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-blue-900">What are the admission requirements?</h3>
                  <span className="text-blue-600">+</span>
                </div>
              </button>
              <div className="px-6 pb-6">
                <p className="text-gray-700 mb-3">Admission requirements vary by program, but generally include:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
                  <li>Completed application form with personal statement</li>
                  <li>Official transcripts from previous institutions</li>
                  <li>Standardized test scores (SAT, ACT, GRE, GMAT as applicable)</li>
                  <li>Letters of recommendation from academic or professional references</li>
                  <li>English proficiency test scores for international students</li>
                </ul>
                <p className="text-gray-700">Visit our admissions office or schedule a consultation to discuss specific program requirements.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow">
              <button className="w-full text-left p-6 focus:outline-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-blue-900">What financial aid options are available?</h3>
                  <span className="text-blue-600">+</span>
                </div>
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow">
              <button className="w-full text-left p-6 focus:outline-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-blue-900">What housing options are available for students?</h3>
                  <span className="text-blue-600">+</span>
                </div>
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow">
              <button className="w-full text-left p-6 focus:outline-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-blue-900">What support services are available for students?</h3>
                  <span className="text-blue-600">+</span>
                </div>
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow">
              <button className="w-full text-left p-6 focus:outline-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-blue-900">How can I schedule a campus visit?</h3>
                  <span className="text-blue-600">+</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;
