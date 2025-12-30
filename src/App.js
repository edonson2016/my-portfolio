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
  const [played, setPlayed] = useState(false);

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
                      ? 'text-slate-600 bg-slate-200'
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
                      ? 'text-slate-700 bg-slate-200'
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
        <section id="about" className="relative min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-300/30 rounded-full blur-3xl" />
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Description */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                  Hi, I'm{" "}
                    <span className="font-cursive">
                      Edward
                    </span>
                </h1>
                <div className="mt-8 flex space-x-4">
                  <button
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    onClick={() => {
                      window.location.href =
                        "mailto:edonson2016@gmail.com";
                    }}
                  >Contact Me</button>
                  {/* <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors" 
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
                        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                        onClick={closePopup}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )} */}
                  <a
                    href={`${process.env.PUBLIC_URL}/Edward_Donson_CV.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-green-300 text-gray-500 rounded-lg hover:border-green-400 transition-colors inline-block"
                  >
                    Download CV
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <p
                  className="md:text-3xl font-bold text-slate-800 mb-4 cursor-pointer"
                  onMouseEnter={() => {
                    if (!played) setPlayed(true);
                  }}
                >
                  Who am I...
                </p>

                {/* Typing text */}
                 <p
                  className={`
                    overflow-hidden
                    transition-all
                    duration-[2000ms]
                    ease-out
                    text-center
                    ${played ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  I am a current{" "}
                  <span className="font-semibold text-green-700">CS + Math</span>{" "}
                  undergraduate at Harvey Mudd College, passionate about using{" "}
                  <span className="font-semibold text-green-700">optimization</span>,{" "}
                  <span className="font-semibold text-green-700">probability</span>, and{" "}
                  <span className="font-semibold text-green-700">linear algebra</span>{" "}
                  to produce secure machine learning models and datasets for an increasingly{" "}
                  <span className="font-semibold text-green-700">data-centric</span> world. 
                  <div className="h-8"/>
                  I have experience in developing novel adversarial attacks against computer vision models,
                  using 
                  <span className="font-semibold text-green-700"> PyTorch</span> and 
                  <span className="font-semibold text-green-700"> IBM's Adversarial Robustness Toolkit</span>, 
                  and conducting experiments in randomized numerical linear algebra using 
                  <span className="font-semibold text-green-700"> NumPy</span> and 
                  <span className="font-semibold text-green-700"> SciPy</span>. 
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section id="qualifications" className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-12">
              <Award className="text-slate-600 mr-4" size={40} />
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
                <p className="text-green-600 font-medium mb-2">Harvey Mudd College</p>
                <p className="text-slate-600 mb-4">2022 - 2026</p>
                {isEdVisible && <div
                  className={`text-slate-700 transition-opacity duration-250 ease-in-out ${
                    isEdHover ? "opacity-100" : "opacity-0"
                  }`}
                >
                <h3 class="text-green-700 font-semibold">Relevant Coursework:</h3>
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
              <SkillCard title="Packages" skills={["pandas", "NumPy", "Matplotlib", "ASE", "PyTorch", "scikit-learn", "rJAGS", "Open3D"]} />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-12">
              <Briefcase className="text-slate-600 mr-4" size={40} />
              <h2 className="text-4xl font-bold text-slate-800">Experience</h2>
            </div>

            <div className="space-y-8">
              {/* Experience Item */}
              <JobCard title="Software Engineer" 
                company_name="Sokil Inc." 
                date="Aug. 2025 - Present" 
                location = "Claremont, CA"
                bullets={[' Developing software to extract LiDAR and IMU data from proprietary file .lvx file type',
                  'Leveraging eigenvalue-based curvature metrics to discern landmine presence in LiDAR scans, employing clustering and feature detection to highlight potential landmines and remove extraneous data points']} 
                skills_used={["Linux/UNIX", "Open3D"]}
                color='green' />

              <JobCard title="Adversarial Machine Learning Research Intern" 
                company_name="Center for Artificial Intelligence Security Research, Oak Ridge National Laboratory" 
                principal_inv = "Dr. Amir Sadovnik" 
                date="May 2025 – Aug. 2025" 
                location="Oak Ridge, TN"
                bullets={[' Developed extraction attack methods which leverage finetuned pre-trained vision models to produce transferable evasion attacks for a select target image',
                  'Leveraged hessian analysis and loss surface visualization methods to theoretically validate extraction attack effectiveness, ensuring extraction attacks properly mimic target model loss surfaces']} 
                skills_used={["PyTorch", "NumPy", "Python"]}
                color='green' />

              <JobCard title="Data Science Research Intern" 
                company_name="HADD Research Group, Harvey Mudd College" 
                principal_inv = "Dr. Jamie Haddock" 
                date="Jan. 2025 - Present" 
                location="Claremont, CA"
                bullets={[' Conduct experiments on the accuracy of sketch-solve methods for non-negative least squares regression',
                  'Compare existing randomized non-negative least squares regression with sketch-and-solve methods using similarity metrics like Jaccard similarity']} 
                skills_used={["NumPy", "scikit-learn", "pandas"]}
                color='green' />

              <JobCard title="LLM Education Research Intern" 
                company_name="METRICS Lab, Harvey Mudd College" 
                principal_inv = "Dr. Zachary Dodds" 
                date="Aug. 2024 - Aug. 2025" 
                location="Claremont, CA"
                bullets={['  Interpret hard metrics, like cyclomatic complexity and comment-code percentage, to understand LLM’s effect on student’s code writing habits',
                  'Developed a Python script to convert and filter .ipynb files to produce compilable python code for static analysis']} 
                skills_used={["Python", "R"]}
                color='green' />

              <JobCard title="Machine Learning Research Assistant " 
                company_name="MolSim Lab, Harvey Mudd College" 
                principal_inv = "Dr. Sandra Brown" 
                date="Jan. 2024 - Sep. 2024" 
                location="Claremont, CA"
                bullets={['  Developed universal scripts to analyze neural network performance using pandas and NumPy and produce visualizations illustrating neural networks accuracy',
                  'Trained artificial neural networks to predict molecule’s potential energy using the Atomistic Potential Learning package for three molecules of differing complexity']} 
                skills_used={["ASE", "pandas"]}
                color='green' />

              <JobCard title="Computer Science Grader and Tutor " 
                company_name="Department of Computer Science, Harvey Mudd College" 
                date="Aug. 2023 - Present" 
                location="Claremont, CA"
                bullets={['   Improved student performance and understanding of programming principles, data structures or logic and computability through tutoring sessions attended by up to ˜25 students',
                  'Collaborated with other graders to provide feedback for classes of up to 200 students, resulting in 100% of assignments having comprehensive feedback and grades']} 
                skills_used={["Python","Java", "C++"]}
                color='green' />
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-50">© 2024 Your Name. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/edward-donson/" className="text-slate-50 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/edonson2016" className="text-slate-50 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}