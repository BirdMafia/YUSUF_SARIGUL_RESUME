import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import shoeBaeImg from './ShoeBae.png';
import FPGAImg from './FPGA.png';
import DriveNavImg from './DriveNav.png';
import TI30Img from './TI30.png';
import TPMImg from './TPM.png';
import ATImg from './AT.png';

const projects = [
  {
    title: 'DriveNav System',
    description: 'AI-powered Raspberry Pi navigation and multi-sensor platform for autonomous assistance.',
    details: `Developed a multi-sensor platform with GPS, camera, and edge AI processing. Used YOLOv5 and OpenCV for real-time object detection.`,
    image: DriveNavImg,  // Add your screenshot here
    link: 'https://yas272.wixsite.com/drivenav-1',
    tech: ['Python', 'OpenCV', 'YOLOv5', 'Raspberry Pi']
  },
  {
    title: 'Tornado Prediction Model',
    description: 'Deep learning-based tornado prediction system built on weather data.',
    details: `Trained PyTorch and TensorFlow models for accurate prediction of severe weather events.`,
    image: TPMImg,
    link: 'https://github.com/BirdMafia/Tornado_Prediction_Model/tree/main',
    tech: ['PyTorch', 'TensorFlow', 'NumPy', 'Pandas']
  },
  {
    title: 'Apollo Threads',
    description: 'E-commerce platform for custom apparel with live preview features.',
    details: `Built with JavaScript, HTML, and CSS, integrating Shopify APIs and custom interactive features.`,
    image: ATImg,
    link: 'http://www.apollo-threads.com/',
    tech: ['JavaScript', 'Shopify', 'HTML', 'CSS']
  },
  {
    title: 'ShoeBae',
    description: 'Sneaker resale platform with automated inventory and pricing tools.',
    details: `Created a marketplace using Python (Flask) and integrated real-time stock updates.`,
    image: shoeBaeImg,
    link: 'https://github.com/citlalih1421/Group3-SE',
    tech: ['Python', 'Flask', 'HTML', 'CSS']
  },
  {
    title: 'FPGA Digital Signal Processor',
    description: 'FPGA-based DSP with Verilog for audio signal analysis.',
    details: `Designed and simulated Verilog code for a working DSP pipeline on Basys3 FPGA.`,
    image: FPGAImg,
    link: '#',
    tech: ['Verilog', 'Basys3', 'FPGA']
  },
  {
  title: 'TI-30XIIS Calculator Dissection',
  description: 'Reverse-engineered and analyzed the internals of a TI-30XIIS calculator.',
  details: `Disassembled a TI-30XIIS scientific calculator to examine its PCB design, integrated circuits, and hardware layout. Documented findings on component functionality, including the logic control IC and power management system.`,
  image: TI30Img, 
  link: 'https://yas272.wixsite.com/yusuf-sarigul',
  tech: ['Hardware Analysis', 'Reverse Engineering', 'PCB Disassembly']
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedProject(project)}
          >
            {project.image && (
              <img src={project.image} alt={project.title} className="project-thumbnail" />
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>

    <AnimatePresence>
    {selectedProject && (
        <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedProject(null)}
        >
        <motion.div
            className="modal-content"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
        >
            {/* View Project & Iframe at Top */}
            {selectedProject.link !== '#' && (
            <div className="project-link-section top-link">
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
                </a>
                <iframe
                className="project-preview"
                src={selectedProject.link}
                title={selectedProject.title}
                sandbox="allow-same-origin allow-scripts allow-popups"
                ></iframe>
            </div>
            )}

            {/* Title and Details */}
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.details}</p>

            {/* Tech Tags */}
            <div className="tech-list">
            {selectedProject.tech.map((t, idx) => (
                <span key={idx} className="tech-tag">{t}</span>
            ))}
            </div>

            {/* Close Button */}
            <button className="close-btn" onClick={() => setSelectedProject(null)}>Close</button>
        </motion.div>
        </motion.div>
    )}
    </AnimatePresence>
    </div>
  );
}

export default Projects;