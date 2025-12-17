import React, { useState, useEffect } from 'react';
import { User, Briefcase, Award, Menu, X } from 'lucide-react';
import EdwardPic from "./assets/Edward_ResearchPic.png";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // controls DOM + CSS

  const openPopup = () => {
    setIsVisible(true);
    setTimeout(() => setShowPopup(true), 10); // small delay to trigger transition
  };

  const closePopup = () => {
    setShowPopup(false);
    setTimeout(() => setIsVisible(false), 500); // wait for fade-out duration
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'qualifications', 'experience'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100'>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-slate-800">Edward Donson</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'about', label: 'About', icon: User },
                { id: 'qualifications', label: 'Qualifications', icon: Award },
                { id: 'experience', label: 'Experience', icon: Briefcase }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    activeSection === id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {[
                { id: 'about', label: 'About', icon: User },
                { id: 'qualifications', label: 'Qualifications', icon: Award },
                { id: 'experience', label: 'Experience', icon: Briefcase }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    activeSection === id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Headshot */}
              <div className="flex justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 shadow-2xl flex items-center justify-center overflow-hidden">
                  <img src={EdwardPic} alt="Your Name" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Description */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                  Hi, I'm Edward
                </h1>
                <div className="mt-8 flex space-x-4">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" 
                  onClick={openPopup}>
                    Contact Me
                  </button>
                  {isVisible && (
                    <div
                      className={`fixed inset-0 max-w-full overflow-x-hidden flex items-center justify-center transition-opacity duration-500 ${
                        showPopup ? "opacity-100" : "opacity-0"
                      }`}
                    >
                    <div
                      className={`bg-white p-6 rounded-lg shadow-lg w-80 transition-transform duration-5000 ${
                        showPopup ? "scale-100" : "scale-95"
                      }`}
                    >
                      <h3 className="font-bold text-lg mb-2">Contact Info</h3>
                      <p>Email: edonson2016@gmail.com</p>
                      <button
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        onClick={closePopup}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
                  <button className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 transition-colors">
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section id="qualifications" className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-12">
              <Award className="text-blue-600 mr-4" size={40} />
              <h2 className="text-4xl font-bold text-slate-800">Qualifications</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Education Card */}
              <div className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                  Degree Name
                </h3>
                <p className="text-blue-600 font-medium mb-2">University Name</p>
                <p className="text-slate-600 mb-4">2018 - 2022</p>
                <p className="text-slate-700">
                  Description of your degree, major achievements, relevant coursework, or honors received.
                </p>
              </div>

              {/* Certification Card */}
              <div className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                  Certification Name
                </h3>
                <p className="text-blue-600 font-medium mb-2">Issuing Organization</p>
                <p className="text-slate-600 mb-4">2023</p>
                <p className="text-slate-700">
                  Details about the certification, skills gained, or projects completed as part of the certification.
                </p>
              </div>

              {/* Skills Card */}
              <div className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow md:col-span-2">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {['JavaScript', 'React', 'Python', 'Node.js', 'SQL', 'Git', 'AWS', 'Project Management'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-12">
              <Briefcase className="text-blue-600 mr-4" size={40} />
              <h2 className="text-4xl font-bold text-slate-800">Experience</h2>
            </div>

            <div className="space-y-8">
              {/* Experience Item */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-600">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-800">Job Title</h3>
                    <p className="text-blue-600 font-medium text-lg">Company Name</p>
                  </div>
                  <p className="text-slate-600 mt-2 md:mt-0">Jan 2023 - Present</p>
                </div>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Led development of key features that improved user engagement by 30%
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Collaborated with cross-functional teams to deliver projects on time
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Mentored junior developers and conducted code reviews
                  </li>
                </ul>
              </div>

              {/* Experience Item */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-600">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-800">Previous Job Title</h3>
                    <p className="text-purple-600 font-medium text-lg">Previous Company</p>
                  </div>
                  <p className="text-slate-600 mt-2 md:mt-0">Jun 2021 - Dec 2022</p>
                </div>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Developed and maintained multiple client-facing applications
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Implemented responsive designs and improved site performance
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Participated in agile development processes and sprint planning
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-300">© 2024 Your Name. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-slate-300 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}