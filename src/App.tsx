import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <main>
        <h1>Duc La</h1>
        <h2>Software Engineer</h2>
        <h3>I am interested in algorithms and data science</h3>
        <div className="separator">
          <ul>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        {/* Add more components here */}
      </main>
      <header>
      {/* <nav> */}
        {/* <ul> */}
          {/* <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li> */}
        {/* </ul> */}
      {/* </nav> */}
    </header>
    </div>
  );
};

export default App;
