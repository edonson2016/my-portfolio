import React, { useState, useEffect } from 'react';
import { User, Briefcase, Award, Menu, X } from 'lucide-react';
import EdwardPic from "./assets/Edward_ResearchPic.png";
import SkillCard from './components/SkillCard';
import JobCard from './components/JobCard';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // controls DOM + CSS
  const [isEdHover, setIsEdHover] = useState(false);
  const [isEdVisible, setIsEdVisible] = useState(false);

  const openPopup = () => {
    setIsVisible(true);
    setTimeout(() => setShowPopup(true), 10); // small delay to trigger transition
  };

  const closePopup = () => {
    setShowPopup(false);
    setTimeout(() => setIsVisible(false), 500); // wait for fade-out duration
  };

  const ExpandEd = () => {
    setIsEdVisible(true);
    setTimeout(() => setIsEdHover(true), 0); // small delay to trigger transition
  };

  const CloseEd = () => {
    setIsEdHover(false);
    setTimeout(() => setIsEdVisible(false), 250); // wait for fade-out duration
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

//   const skills = [
//   "JavaScript",
//   "React",
//   "Python",
// ];

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
                  <a
                    href="/Edward_Donson_CV.pdf"
                    download
                    className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-slate-400 transition-colors inline-block"
                  >
                    Download CV
                  </a>
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

            <div className="grid md:grid-cols-1 gap-8">
              {/* Education Card */}
              <div className={`bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-xl
                              transition-[max-height] duration-250 ease-in-out
                              overflow-hidden
                              ${isEdHover ? "max-h-[500px]" : "max-h-[140px]"}`}
              onMouseEnter={ExpandEd}
              onMouseLeave={CloseEd}>
                <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                  Joint Computer Science and Mathematics Major
                </h3>
                <p className="text-blue-600 font-medium mb-2">Harvey Mudd College</p>
                <p className="text-slate-600 mb-4">2022 - 2026</p>
                {isEdVisible && <div
                  className={`text-slate-700 transition-opacity duration-250 ease-in-out ${
                    isEdHover ? "opacity-100" : "opacity-0"
                  }`}
                >
                <h3 class="text-purple-600 font-semibold">Relevant Coursework:</h3>
                <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 list-disc list-inside">
                  <li>Data Structures & Algorithms</li>
                  <li>Linear Algebra</li>
                  <li>Intermediate Probability</li>
                  <li>Math Methods in Data Science</li>
                  <li>Multivariable Calculus</li>
                  <li>Stochastic Processes</li>
                  <li>Operations Research</li>
                  <li>Mathematical Analysis</li>
                  <li>Network Algorithmics</li>
                </ul>
                </div>
                }
              </div>

              {/* Skills Card */}
              <div className="grid md:grid-cols-2 gap-6">
              <SkillCard title="Languages" skills={["Java", "Python", "C++", "JavaScript", "HTML/CSS", "R", "SQL"]} />
              <SkillCard title="Frameworks" skills={["React", "Node.js", "Flutter", "MySQL", "MongoDB"]} />
              <SkillCard title="Developer Tools" skills={["Git", "VS Code", "Eclipse", "Linux/UNIX", "Apache", "Docker"]} />
              <SkillCard title="Packages" skills={["pandas", "NumPy", "Matplotlib", "ASE", "PyTorch", "scikit-learn", "rJAGS"]} />
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
              <JobCard title="A" company_name="A" date="A" bullets={['A']} color='purple' />

              {/* Experience Item */}
              <JobCard title="A" company_name="A" date="A" bullets={['A']} />
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-300">© 2024 Your Name. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/edward-donson/" className="text-slate-300 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/edonson2016" className="text-slate-300 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}