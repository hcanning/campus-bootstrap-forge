
import React from 'react';

const Index = () => {
  return (
    <div className="university-homepage">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark university-primary fixed-top">
        <div className="container">
          <a className="navbar-brand display-font" href="#home">
            <i className="bi bi-mortarboard me-2"></i>
            University of Excellence
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#programs">Programs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#admissions">Admissions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Slider */}
      <section id="home" className="hero-slider">
        <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
          </div>
          
          <div className="carousel-inner h-100">
            <div className="carousel-item active hero-slide h-100" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'}}>
              <div className="hero-overlay"></div>
              <div className="container h-100 d-flex align-items-center">
                <div className="row w-100">
                  <div className="col-lg-8 text-white">
                    <h1 className="display-1 display-font fw-bold mb-4">Excellence in Education</h1>
                    <p className="lead fs-4 mb-5">Shaping tomorrow's leaders through innovative learning, groundbreaking research, and transformative experiences.</p>
                    <div className="d-flex gap-3 flex-wrap">
                      <button className="btn btn-university btn-lg text-white">Explore Programs</button>
                      <button className="btn btn-outline-light btn-lg">Virtual Tour</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="carousel-item hero-slide h-100" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'}}>
              <div className="hero-overlay"></div>
              <div className="container h-100 d-flex align-items-center">
                <div className="row w-100">
                  <div className="col-lg-8 text-white">
                    <h1 className="display-1 display-font fw-bold mb-4">Research & Innovation</h1>
                    <p className="lead fs-4 mb-5">Leading breakthrough discoveries that address global challenges and create a better world for all.</p>
                    <div className="d-flex gap-3 flex-wrap">
                      <button className="btn btn-university btn-lg text-white">Research Centers</button>
                      <button className="btn btn-outline-light btn-lg">Faculty Expertise</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="carousel-item hero-slide h-100" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'}}>
              <div className="hero-overlay"></div>
              <div className="container h-100 d-flex align-items-center">
                <div className="row w-100">
                  <div className="col-lg-8 text-white">
                    <h1 className="display-1 display-font fw-bold mb-4">Campus Life</h1>
                    <p className="lead fs-4 mb-5">Experience a vibrant community where lifelong friendships are formed and memories are created.</p>
                    <div className="d-flex gap-3 flex-wrap">
                      <button className="btn btn-university btn-lg text-white">Student Life</button>
                      <button className="btn btn-outline-light btn-lg">Apply Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <h2 className="display-4 fw-bold">25,000+</h2>
                <p className="fs-5">Students</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <h2 className="display-4 fw-bold">1,200+</h2>
                <p className="fs-5">Faculty</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <h2 className="display-4 fw-bold">150+</h2>
                <p className="fs-5">Programs</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <h2 className="display-4 fw-bold">200+</h2>
                <p className="fs-5">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 university-cream">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 className="display-4 display-font fw-bold section-title text-center">About Our University</h2>
              <p className="lead mb-4">
                For over a century, the University of Excellence has been at the forefront of higher education, 
                pioneering innovative teaching methods and conducting groundbreaking research that shapes our world.
              </p>
              <p className="mb-4">
                Our commitment to academic excellence, combined with our dedication to fostering critical thinking 
                and creativity, has produced generations of leaders, innovators, and change-makers who continue 
                to make significant contributions to society.
              </p>
              <div className="row mt-4">
                <div className="col-6">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-award-fill university-primary fs-3 me-3"></i>
                    <div>
                      <h5 className="mb-0">Excellence</h5>
                      <small className="text-muted">Academic Achievement</small>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-globe university-primary fs-3 me-3"></i>
                    <div>
                      <h5 className="mb-0">Global</h5>
                      <small className="text-muted">International Reach</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="University Campus" 
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Cards */}
      <section id="programs" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 display-font fw-bold section-title">Academic Programs</h2>
            <p className="lead">Discover world-class programs designed to prepare you for tomorrow's challenges</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 card-hover">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="bi bi-cpu university-primary fs-1"></i>
                  </div>
                  <h4 className="card-title display-font">Engineering & Technology</h4>
                  <p className="card-text">
                    Cutting-edge programs in computer science, electrical engineering, and emerging technologies 
                    that prepare students for the digital future.
                  </p>
                  <ul className="list-unstyled">
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Computer Science</li>
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Electrical Engineering</li>
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Data Science</li>
                  </ul>
                  <a href="#" className="btn btn-outline-primary mt-3">Learn More</a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 card-hover">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="bi bi-heart-pulse university-primary fs-1"></i>
                  </div>
                  <h4 className="card-title display-font">Health Sciences</h4>
                  <p className="card-text">
                    Comprehensive healthcare programs that combine rigorous academic training with hands-on 
                    clinical experience in state-of-the-art facilities.
                  </p>
                  <ul className="list-unstyled">
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Medicine</li>
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Nursing</li>
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Public Health</li>
                  </ul>
                  <a href="#" className="btn btn-outline-primary mt-3">Learn More</a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 card-hover">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="bi bi-briefcase university-primary fs-1"></i>
                  </div>
                  <h4 className="card-title display-font">Business & Management</h4>
                  <p className="card-text">
                    Dynamic business programs that develop entrepreneurial thinking and leadership skills 
                    for the global marketplace.
                  </p>
                  <ul className="list-unstyled">
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>MBA Programs</li>
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Finance</li>
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Marketing</li>
                  </ul>
                  <a href="#" className="btn btn-outline-primary mt-3">Learn More</a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 card-hover">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="bi bi-palette university-primary fs-1"></i>
                  </div>
                  <h4 className="card-title display-font">Arts & Humanities</h4>
                  <p className="card-text">
                    Rich programs in literature, philosophy, history, and fine arts that cultivate 
                    critical thinking and creative expression.
                  </p>
                  <ul className="list-unstyled">
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Literature</li>
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Philosophy</li>
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Fine Arts</li>
                  </ul>
                  <a href="#" className="btn btn-outline-primary mt-3">Learn More</a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 card-hover">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="bi bi-graph-up university-primary fs-1"></i>
                  </div>
                  <h4 className="card-title display-font">Social Sciences</h4>
                  <p className="card-text">
                    Interdisciplinary programs that examine human behavior, society, and culture 
                    through multiple lenses and methodologies.
                  </p>
                  <ul className="list-unstyled">
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Psychology</li>
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Sociology</li>
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Political Science</li>
                  </ul>
                  <a href="#" className="btn btn-outline-primary mt-3">Learn More</a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 card-hover">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <i className="bi bi-flask university-primary fs-1"></i>
                  </div>
                  <h4 className="card-title display-font">Natural Sciences</h4>
                  <p className="card-text">
                    Rigorous scientific programs that combine theoretical knowledge with practical 
                    research experience in modern laboratories.
                  </p>
                  <ul className="list-unstyled">
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Biology</li>
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Chemistry</li>
                    <li><i className="bi bi-check-circle-fill text-success me-2"></i>Physics</li>
                  </ul>
                  <a href="#" className="btn btn-outline-primary mt-3">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section id="admissions" className="py-5 university-cream">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 display-font fw-bold section-title">Frequently Asked Questions</h2>
            <p className="lead">Everything you need to know about joining our university community</p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item mb-3 border-0 rounded">
                  <h2 className="accordion-header">
                    <button className="accordion-button rounded" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      <strong>What are the admission requirements?</strong>
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p>Admission requirements vary by program, but generally include:</p>
                      <ul>
                        <li>Completed application form with personal statement</li>
                        <li>Official transcripts from previous institutions</li>
                        <li>Standardized test scores (SAT, ACT, GRE, GMAT as applicable)</li>
                        <li>Letters of recommendation from academic or professional references</li>
                        <li>English proficiency test scores for international students</li>
                      </ul>
                      <p>Visit our admissions office or schedule a consultation to discuss specific program requirements.</p>
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item mb-3 border-0 rounded">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      <strong>What financial aid options are available?</strong>
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p>We offer comprehensive financial aid packages including:</p>
                      <ul>
                        <li><strong>Merit-based scholarships</strong> - Awarded based on academic achievement</li>
                        <li><strong>Need-based grants</strong> - Financial assistance based on family income</li>
                        <li><strong>Work-study programs</strong> - Part-time employment opportunities on campus</li>
                        <li><strong>Student loans</strong> - Federal and private loan options</li>
                        <li><strong>Graduate assistantships</strong> - Teaching and research positions for graduate students</li>
                      </ul>
                      <p>Over 85% of our students receive some form of financial assistance. Contact our Financial Aid office for personalized guidance.</p>
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item mb-3 border-0 rounded">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      <strong>What housing options are available for students?</strong>
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p>Our campus offers diverse housing options to suit every student's needs:</p>
                      <ul>
                        <li><strong>Traditional residence halls</strong> - Shared rooms with common areas and dining facilities</li>
                        <li><strong>Suite-style apartments</strong> - Semi-private accommodations with kitchenettes</li>
                        <li><strong>Graduate housing</strong> - Apartments designed for graduate students and families</li>
                        <li><strong>Themed living communities</strong> - Housing based on academic interests or cultural groups</li>
                        <li><strong>Off-campus assistance</strong> - Support finding housing in the local community</li>
                      </ul>
                      <p>All on-campus housing includes high-speed internet, study spaces, and 24/7 security. Housing applications open in January for the following academic year.</p>
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item mb-3 border-0 rounded">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      <strong>What support services are available for students?</strong>
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p>We provide comprehensive support services to ensure student success:</p>
                      <ul>
                        <li><strong>Academic advising</strong> - Personalized guidance for course selection and career planning</li>
                        <li><strong>Tutoring center</strong> - Free tutoring in all major subjects</li>
                        <li><strong>Career services</strong> - Resume writing, interview preparation, and job placement assistance</li>
                        <li><strong>Counseling services</strong> - Mental health support and wellness programs</li>
                        <li><strong>Disability services</strong> - Accommodations and support for students with disabilities</li>
                        <li><strong>International student services</strong> - Specialized support for international students</li>
                      </ul>
                      <p>Our student success team is dedicated to helping every student reach their full potential.</p>
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item mb-3 border-0 rounded">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                      <strong>How can I schedule a campus visit?</strong>
                    </button>
                  </h2>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p>We encourage prospective students to visit our beautiful campus:</p>
                      <ul>
                        <li><strong>Guided campus tours</strong> - Daily tours led by current students (weekdays at 10am and 2pm)</li>
                        <li><strong>Information sessions</strong> - Learn about academics, student life, and admissions</li>
                        <li><strong>Overnight visits</strong> - Stay with a current student to experience campus life</li>
                        <li><strong>Virtual tours</strong> - Online campus exploration for those who can't visit in person</li>
                        <li><strong>Special visit days</strong> - Preview days, open houses, and program-specific events</li>
                      </ul>
                      <p>Schedule your visit online or call our admissions office at (555) 123-4567. We can't wait to show you what makes our university special!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <h4 className="display-font mb-3">
                <i className="bi bi-mortarboard me-2"></i>
                University of Excellence
              </h4>
              <p className="mb-3">
                Empowering minds, transforming lives, and shaping the future through 
                excellence in education, research, and service to humanity.
              </p>
              <div className="social-links">
                <a href="#" className="text-white me-3 fs-4"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-white me-3 fs-4"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-white me-3 fs-4"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-white me-3 fs-4"><i className="bi bi-linkedin"></i></a>
                <a href="#" className="text-white fs-4"><i className="bi bi-youtube"></i></a>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="mb-3">Academics</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light text-decoration-none">Undergraduate</a></li>
                <li><a href="#" className="text-light text-decoration-none">Graduate</a></li>
                <li><a href="#" className="text-light text-decoration-none">Doctoral</a></li>
                <li><a href="#" className="text-light text-decoration-none">Online Programs</a></li>
                <li><a href="#" className="text-light text-decoration-none">Continuing Education</a></li>
              </ul>
            </div>
            
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="mb-3">Campus Life</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light text-decoration-none">Student Organizations</a></li>
                <li><a href="#" className="text-light text-decoration-none">Athletics</a></li>
                <li><a href="#" className="text-light text-decoration-none">Housing</a></li>
                <li><a href="#" className="text-light text-decoration-none">Dining</a></li>
                <li><a href="#" className="text-light text-decoration-none">Events</a></li>
              </ul>
            </div>
            
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="mb-3">Resources</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light text-decoration-none">Library</a></li>
                <li><a href="#" className="text-light text-decoration-none">Career Services</a></li>
                <li><a href="#" className="text-light text-decoration-none">Health Center</a></li>
                <li><a href="#" className="text-light text-decoration-none">IT Support</a></li>
                <li><a href="#" className="text-light text-decoration-none">Alumni Network</a></li>
              </ul>
            </div>
            
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="mb-3">Contact</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-geo-alt me-2"></i>
                  123 University Ave<br>
                  Excellence City, EX 12345
                </li>
                <li className="mb-2">
                  <i className="bi bi-telephone me-2"></i>
                  (555) 123-4567
                </li>
                <li className="mb-2">
                  <i className="bi bi-envelope me-2"></i>
                  info@university.edu
                </li>
              </ul>
            </div>
          </div>
          
          <hr className="my-4" />
          
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0">&copy; 2024 University of Excellence. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="mb-0">Powered by Drupal 11 | 
                <a href="#" className="text-light text-decoration-none"> Privacy Policy</a> | 
                <a href="#" className="text-light text-decoration-none"> Terms of Use</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
