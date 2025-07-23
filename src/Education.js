import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Education.css';

function Education() {
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * -10;
    setTilt({ x: rotateX, y: rotateY });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <div className="education-section">
      <h2 className="education-title">Education</h2>
      <div
        className={`education-card ${flipped ? 'flipped' : ''}`}
        onClick={() => setFlipped(!flipped)}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        {/* Front of the Card */}
        <motion.div className="card-face card-front">
          <h3>Mississippi State University</h3>
          <p>Starkville, MS</p>
          <p>Bachelor of Science in Computer Engineering</p>
          <p>(Graduating May 2025)</p>
        </motion.div>

        {/* Back of the Card */}
        <motion.div className="card-face card-back">
          <h3>Details</h3>
          <p><strong>GPA:</strong> 3.38</p>
          <p><strong>Certifications in Progress:</strong></p>
          <ul>
            <li>Professional Engineer (PE) License</li>
            <li>Microsoft Certified: Azure AI Fundamentals (AI-900)</li>
            <li>Google Data Analytics Professional Certificate</li>
            <li>Autodesk Certification</li>
            <li>CompTIA Security+</li>
            <li>CompTIA Data+</li>
          </ul>
        </motion.div>

        {/* Tooltip hint */}
        <div className="card-hint">Click to flip</div>
      </div>
    </div>
  );
}

export default Education;
