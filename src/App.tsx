import React from 'react';
import './App.css';
import About from './About.tsx';
import Projects from './Projets.tsx';
import Experience from './Experience.tsx'


const App: React.FC = () => {
  return (
    <div>
      <About></About>
      <Projects></Projects>
      <Experience></Experience>
      <></>
    </div>
   
    // <div className="app">
    //   <main>
    //     <h1>Duc La</h1>
    //     <h2>Software Engineer</h2>
    //     <h3>I am interested in algorithms and data science</h3>
    //     <div className="separator">
    //       <ul>
    //         <li><a href="#about">ABOUT</a></li>
    //         <li><a href="#contact">Experience</a></li>
    //         <li><a href="#projects">Projects</a></li>
    //         <li><a href="#contact">Publications</a></li>
    //         <li><a href="#contact">Contact</a></li>
            
    //       </ul>
    //     </div>
    //   </main>
    // </div>
  );
};

export default App;
