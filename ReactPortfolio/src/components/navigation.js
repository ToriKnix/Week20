import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('About Me');

  const handleNavClick = (title) => {
    setActiveSection(title);
  };

  return (
    <nav>
      <ul>
        <li
          className={activeSection === 'About Me' ? 'active' : ''}
          onClick={() => handleNavClick('About Me')}
        >
          <Link to="/">About Me</Link>
        </li>
        <li
          className={activeSection === 'Portfolio' ? 'active' : ''}
          onClick={() => handleNavClick('Portfolio')}
        >
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li
          className={activeSection === 'Contact' ? 'active' : ''}
          onClick={() => handleNavClick('Contact')}
        >
          <Link to="/contact">Contact</Link>
        </li>
        <li
          className={activeSection === 'Resume' ? 'active' : ''}
          onClick={() => handleNavClick('Resume')}
        >
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
