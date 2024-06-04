import React from 'react';
import './About.css';
import Menu from './Menu.tsx';


const About: React.FC = () => {
  return (
    <div className="app">
      <main>
        <h1>Duc La</h1>
        <h2>Software Engineer</h2>
        <h3>I am interested in algorithms and data science</h3>
        {/* <div className="separator"> */}
        {/* <div className = "help-button" id = "helpButton">Help</div>
        <div className = "help-menu" id = "helpMenu">
          <ul>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Publications</a></li>
            <li><a href="#contact">Contact</a></li>
            
          </ul>
        </div> */}
        {/* </div> */}
        <Menu></Menu>
      </main>
    </div>
  );
};

export default About;