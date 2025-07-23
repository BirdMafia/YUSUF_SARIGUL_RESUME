import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaShieldAlt, FaTools, FaLaptop } from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    role: 'Project Manager',
    company: 'DriveNav System | Mississippi State University',
    date: 'Aug 2024 – May 2025',
    icon: <FaCode />,
    details: [
      'Led the end-to-end development of an assistive driving system with Raspberry Pi 5.',
      'Integrated LCD displays and haptic feedback pads for real-time driver alerts.',
      'Developed and optimized algorithms for sensor data processing and communication.'
    ]
  },
  {
    role: 'Cybersecurity Intern',
    company: 'National Cyber Group | Sterling, VA',
    date: 'May 2024 – Aug 2024',
    icon: <FaShieldAlt />,
    details: [
      'Performed vulnerability assessments, network scanning, and penetration testing.',
      'Used Nmap, Wireshark, Nessus, and Kali Linux to identify and mitigate risks.',
      'Collaborated with cybersecurity teams to improve system defenses.'
    ]
  },
  {
    role: 'Electronic Technician (IT)',
    company: 'MFJ Enterprise | Starkville, MS',
    date: 'Jan 2023 – Apr 2023',
    icon: <FaTools />,
    details: [
      'Conducted quality control for meters, radios, and circuit boards.',
      'Performed through-hole soldering and programming of circuit boards.',
      'Ensured flawless product functionality with bench testing.'
    ]
  },
  {
    role: 'Help Desk Technician',
    company: 'Hinds Community College | Raymond, MS',
    date: 'Jan 2020 – May 2022',
    icon: <FaLaptop />,
    details: [
      'Provided technical support for desktops, laptops, and printers.',
      'Assisted with system upgrades and software installations.',
      'Documented troubleshooting steps in the help desk ticket system.'
    ]
  }
];

function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={() => toggleDetails(index)}
          >
            <div className="timeline-icon">{exp.icon}</div>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <p className="company">{exp.company}</p>
              <p className="date">{exp.date}</p>
              {expandedIndex === index && (
                <ul className="details">
                  {exp.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
