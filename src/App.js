
import React, { useState, useEffect } from 'react';
import './App.css';
import { motion, useAnimation } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education'; 
import Projects from './Projects';

const sections = [
  {
  icon: '🏠',
  label: 'Home',
  content: (
      <div className="home-letter">
        <div className="home-photo"> <center>
          <img src={require('./profile.jpeg')} width="300" height="300" alt="Yusuf Sarigul" />
        </center></div>
        <p>
          Greetings, traveler! I am Yusuf Sarigul, a Computer Engineer skilled in Software, Embedded Systems,
          AI/ML, and Cybersecurity. Within these walls lies my portfolio – a collection of my crafted works,
          noble skills, and honorable experiences.
        </p>
        <p>
          May your exploration here bring forth insights into my expertise and accomplishments.
          Use the sidebar to navigate the chapters of my story.
        </p>
        <center><div className="wax-seal">
          <span className="wax-text">YS</span>
        </div> </center>
      </div>
  ),
},,
  { icon: '💼', label: 'Experience', content: <Experience /> },
  { icon: '🎓', label: 'Education', content: <Education /> },
  { icon: '🛠️', label: 'Skills', content: <Skills /> },
  { icon: '📂', label: 'Projects', content: <Projects /> },
];

function App() {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [hoverIndex, setHoverIndex] = useState(null);
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      controls.start({ y: [0, 10, 0], transition: { duration: 0.5 } });
    } else {
      controls.start({ y: [0, -10, 0], transition: { duration: 0.5 } });
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="App">
      <motion.div className="sidebar" animate={controls}>
        <div className="insignia">Y<span className="merge">S</span></div>
        <hr />
        <div className="icons">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className={`sidebar-icon ${activeSection.label === section.label ? 'active' : ''}`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => setActiveSection(section)}
            >
              {hoverIndex === index ? (
                <motion.div
                  className="hover-label"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: [10, -5, 0] }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {section.label}
                </motion.div>
              ) : (
                <motion.div
                  className="icon"
                  style={{ color: activeSection.label === section.label ? '#FFD700' : '#fff' }}
                  whileHover={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {section.icon}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/yusuf-sarigul/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={22} />
          </a>
          <a href="https://github.com/BirdMafia" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={22} />
          </a>
        </div>
      </motion.div>
      <div className="outline-background">
        <div className="top-waves">
          <div className="wave-line"></div>
          <div className="wave-line"></div>
          <div className="wave-line"></div>
        </div>
        <div className="bottom-waves">
          <div className="wave-line"></div>
          <div className="wave-line"></div>
          <div className="wave-line"></div>
        </div>
        <div className="left-waves">
          <div className="wave-vertical"></div>
          <div className="wave-vertical"></div>
          <div className="wave-vertical"></div>
        </div>
        <div className="right-waves">
          <div className="wave-vertical"></div>
          <div className="wave-vertical"></div>
          <div className="wave-vertical"></div>
        </div>
        <div className="content">
          <motion.div
            key={activeSection.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeSection.content}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
