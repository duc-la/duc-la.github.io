import React from 'react';
import './About.css';
// import Menu from './Menu.tsx';


const About: React.FC = () => {
  return (
    <div className="app">
      <main>
        <h1>Duc La</h1>
        <h2>Student, Prospective Software Engineer/Quant/AI Engineer</h2>
        {/* <h3>Interests: Machine Learning, Data Science, Mathematics, Software Design</h3> */}

        <p className = "info">
          I am an undegrad student at the University of Utah - 2025.
          <br></br>
          I am interested in things that require a lot of analysis and problem solving. 
          <br></br>
          Currently, I am doing work in Machine Learning, Data Science, Mathematics, and Software Design.
        </p>

        <h3>Check out my: </h3>
        {/* <Menu></Menu> */}
      </main>
    </div>
  );
};

export default About;