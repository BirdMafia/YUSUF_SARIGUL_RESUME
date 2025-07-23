import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaCuttlefish, FaJava, FaJs, FaGitAlt, FaDocker,
  FaMicrochip, FaBrain, FaShieldAlt, FaTools, FaHtml5,
  FaCss3Alt, FaDatabase, FaTerminal, FaCloud
} from 'react-icons/fa';
import {
  SiVscodium, SiPycharm, SiJupyter, SiAnaconda, SiJenkins,
  SiTrello, SiNotion, SiSlack, SiFigma, SiVirtualbox,
  SiGooglecolab
} from 'react-icons/si';
import './Skills.css';

const skillCategories = {
  Languages: [
    { name: 'Python', level: 95, icon: <FaPython />, tooltip: 'Used in Tornado Prediction Model & ML pipelines' },
    { name: 'C++', level: 90, icon: <FaCuttlefish />, tooltip: 'Used in embedded systems & FPGA design' },
    { name: 'C', level: 88, icon: <FaCuttlefish />, tooltip: 'Real-time systems & microcontroller programming' },
    { name: 'MATLAB', level: 75, icon: <FaBrain />, tooltip: 'Signal processing & academic projects' },
    { name: 'SQL', level: 70, icon: <FaDatabase />, tooltip: 'Data analytics & database queries' },
    { name: 'Bash', level: 70, icon: <FaTerminal />, tooltip: 'Linux scripting & automation' },
    { name: 'Verilog', level: 80, icon: <FaTools />, tooltip: 'FPGA-based hardware design' },
    { name: 'SystemVerilog', level: 80, icon: <FaTools />, tooltip: 'RTL design & testbench creation' },
    { name: 'VHDL', level: 70, icon: <FaTools />, tooltip: 'ASIC and FPGA projects' },
    { name: 'Assembly', level: 65, icon: <FaTools />, tooltip: 'Low-level programming' },
    { name: 'Java', level: 80, icon: <FaJava />, tooltip: 'Object-oriented software development' },
    { name: 'JavaScript', level: 80, icon: <FaJs />, tooltip: 'Interactive websites (Apollo Threads, ShoeBae)' },
    { name: 'HTML', level: 85, icon: <FaHtml5 />, tooltip: 'Frontend structure for web apps' },
    { name: 'CSS', level: 85, icon: <FaCss3Alt />, tooltip: 'Styling and responsive design' }
  ],
  Software: [
    { name: 'VS Code', level: 90, icon: <SiVscodium />, tooltip: 'Primary IDE for development' },
    { name: 'Git', level: 90, icon: <FaGitAlt />, tooltip: 'Version control for all projects' },
    { name: 'GitHub', level: 90, icon: <FaGitAlt />, tooltip: 'Project collaboration & repos' },
    { name: 'GitLab', level: 85, icon: <FaGitAlt />, tooltip: 'CI/CD pipelines' },
    { name: 'PyCharm', level: 85, icon: <SiPycharm />, tooltip: 'Python-focused IDE' },
    { name: 'Jupyter Notebook', level: 80, icon: <SiJupyter />, tooltip: 'Data analysis and ML experimentation' },
    { name: 'Docker', level: 80, icon: <FaDocker />, tooltip: 'Containerized applications' },
    { name: 'Anaconda', level: 75, icon: <SiAnaconda />, tooltip: 'ML and Python environment management' },
    { name: 'TensorBoard', level: 70, icon: <FaBrain />, tooltip: 'Neural network performance tracking' },
    { name: 'Jenkins', level: 65, icon: <SiJenkins />, tooltip: 'CI/CD automation' },
    { name: 'Trello', level: 80, icon: <SiTrello />, tooltip: 'Agile project management' },
    { name: 'Notion', level: 85, icon: <SiNotion />, tooltip: 'Project organization and knowledge base' },
    { name: 'Slack', level: 80, icon: <SiSlack />, tooltip: 'Team collaboration' },
    { name: 'Figma', level: 70, icon: <SiFigma />, tooltip: 'UI/UX design prototypes' },
    { name: 'VirtualBox', level: 70, icon: <SiVirtualbox />, tooltip: 'Virtualized environments' },
    { name: 'PowerShell', level: 65, icon: <FaTerminal />, tooltip: 'Windows automation scripts' },
    { name: 'Google Colab', level: 80, icon: <SiGooglecolab />, tooltip: 'ML prototyping' },
    { name: 'Microsoft Azure', level: 65, icon: <FaCloud />, tooltip: 'Cloud computing for AI apps' }
  ],
  Hardware: [
    { name: 'Raspberry Pi (3, 4, 5)', level: 95, icon: <FaMicrochip />, tooltip: 'DriveNav system & edge AI' },
    { name: 'Arduino', level: 90, icon: <FaMicrochip />, tooltip: 'Sensor-based projects' },
    { name: 'NanoS3', level: 85, icon: <FaMicrochip />, tooltip: 'Side-module microcontrollers' },
    { name: 'FPGA (Basys3)', level: 85, icon: <FaMicrochip />, tooltip: 'Verilog and VHDL designs' },
    { name: 'ASIC Boards', level: 80, icon: <FaMicrochip />, tooltip: 'FPGA-to-ASIC workflows' },
    { name: 'Embedded C', level: 80, icon: <FaMicrochip />, tooltip: 'Microcontroller firmware' },
    { name: 'GPIO/I2C/UART/SPI', level: 80, icon: <FaMicrochip />, tooltip: 'Communication protocols' },
    { name: 'Multithreading', level: 75, icon: <FaMicrochip />, tooltip: 'Real-time systems' },
    { name: 'Edge AI Inference', level: 80, icon: <FaBrain />, tooltip: 'Deploying AI models on devices' },
    { name: 'Oscilloscope', level: 70, icon: <FaTools />, tooltip: 'Signal debugging' },
    { name: 'Logic Analyzer', level: 70, icon: <FaTools />, tooltip: 'Protocol and timing analysis' },
    { name: 'Multimeter', level: 75, icon: <FaTools />, tooltip: 'Hardware diagnostics' },
    { name: 'PCB Assembly', level: 80, icon: <FaTools />, tooltip: 'SMT & through-hole soldering' },
    { name: 'Reverse Engineering', level: 70, icon: <FaTools />, tooltip: 'Hardware disassembly & analysis' }
  ],
  'AI/ML': [
    { name: 'PyTorch', level: 90, icon: <FaBrain />, tooltip: 'Tornado Prediction Model' },
    { name: 'TensorFlow', level: 85, icon: <FaBrain />, tooltip: 'Model deployment & training' },
    { name: 'Scikit-learn', level: 85, icon: <FaBrain />, tooltip: 'ML pipeline construction' },
    { name: 'OpenCV', level: 80, icon: <FaBrain />, tooltip: 'Image processing & vision' },
    { name: 'YOLOv5', level: 75, icon: <FaBrain />, tooltip: 'Object detection' },
    { name: 'MediaPipe', level: 70, icon: <FaBrain />, tooltip: 'Pose & hand-tracking models' },
    { name: 'HuggingFace Transformers', level: 75, icon: <FaBrain />, tooltip: 'NLP experiments' },
    { name: 'NumPy', level: 90, icon: <FaBrain />, tooltip: 'Data manipulation & ML' },
    { name: 'Pandas', level: 85, icon: <FaBrain />, tooltip: 'Data preprocessing' },
    { name: 'Matplotlib', level: 80, icon: <FaBrain />, tooltip: 'Data visualization' },
    { name: 'TinyML', level: 70, icon: <FaBrain />, tooltip: 'Embedded ML on microcontrollers' }
  ],
  Cybersecurity: [
    { name: 'Wireshark', level: 90, icon: <FaShieldAlt />, tooltip: 'Network traffic analysis' },
    { name: 'Nmap', level: 85, icon: <FaShieldAlt />, tooltip: 'Network scanning' },
    { name: 'Snort', level: 80, icon: <FaShieldAlt />, tooltip: 'Intrusion detection' },
    { name: 'Nessus', level: 75, icon: <FaShieldAlt />, tooltip: 'Vulnerability assessments' },
    { name: 'Metasploit', level: 75, icon: <FaShieldAlt />, tooltip: 'Penetration testing' },
    { name: 'Kali Linux', level: 85, icon: <FaShieldAlt />, tooltip: 'Security testing' },
    { name: 'Ubuntu', level: 80, icon: <FaShieldAlt />, tooltip: 'Linux-based security environments' },
    { name: 'SIEM Concepts', level: 70, icon: <FaShieldAlt />, tooltip: 'Security event management' },
    { name: 'Penetration Testing', level: 75, icon: <FaShieldAlt />, tooltip: 'Red team exercises' },
    { name: 'Network Traffic Analysis', level: 80, icon: <FaShieldAlt />, tooltip: 'Cybersecurity monitoring' }
  ]
};

function Skills() {
  const [activeCategory, setActiveCategory] = useState('Languages');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="tabs">
        {Object.keys(skillCategories).map((category) => (
          <button
            key={category}
            className={`tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        className="skills-grid"
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {skillCategories[activeCategory].map((skill, idx) => (
          <div
            className="skill-bar"
            key={idx}
            onMouseEnter={() => setHoveredSkill(idx)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="skill-icon">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>
            <div className="progress-wrapper">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              ></motion.div>
            </div>
            <span className="skill-percent">{skill.level}%</span>
            {hoveredSkill === idx && <div className="tooltip">{skill.tooltip}</div>}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
