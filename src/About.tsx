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
        
        <Menu></Menu>
      </main>
    </div>
  );
};

export default About;