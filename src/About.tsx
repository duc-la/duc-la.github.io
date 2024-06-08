import React from 'react';
import './About.css';
// import Menu from './Menu.tsx';


const About: React.FC = () => {
  return (
    <div className="app">
      <main>
        <h1>Duc La</h1>
        <h2>Prospective Quant</h2>
        {/* <h3>Interests: Machine Learning, Data Science, Mathematics, Software Design</h3> */}

        <p className = "info">
          I am an undegrad student at the University of Utah - 2025.
          <br></br>
          I am interested in Data Science, Machine Learning, 
          <br></br>
          Software Design, and Mathematics.
        </p>

        <h2 style={{ marginTop: '50px' }}>Current Grind: </h2>
        <p className = "info">
          Researcher at <a href="https://treu.cs.utah.edu/" className="highlighted" target="_blank" rel="noopener noreferrer">University of Utah REU Site</a>
          <br></br>
          Researcher at <a href="https://eng.auburn.edu/directory/tcn0015" className="highlighted" target="_blank" rel="noopener noreferrer">Auburn University under Professor Tin Nguyen </a>
          <br></br>
          Developing (Prototype phase) <a href="https://github.com/duc-la/Level-Up-Planning" className="highlighted" target="_blank" rel="noopener noreferrer">Level Up Planning</a>
        </p>


        <p className = "synopsis">
          I came to appreciate problem solving when I was in middle 
          <br></br>
          school competing in <a href="https://www.mathcounts.org/" className="highlighted" target="_blank" rel="noopener noreferrer">math competitions</a>. I enjoyed being
          <br></br>
          competitive in a subject that I found fun. 
          
          <br></br>
          <br></br>
          For my first year as an undergrad, I was able to work for a  <a href="https://www.aircorp.ai/" className="highlighted" target="_blank" rel="noopener noreferrer">startup</a>
          <br></br>
          as a Software Engineer doing work in segmentation techniques. 
          <br></br>
          For this summer, I was also accepted as a Researcher at the <a href="https://treu.cs.utah.edu/" className="highlighted" target="_blank" rel="noopener noreferrer">REU site</a>
          <br></br>
          at the University of Utah and as a Researcher under <a href="https://eng.auburn.edu/directory/tcn0015" className="highlighted" target="_blank" rel="noopener noreferrer">Professor Tin Nguyen</a>
          <br></br>
          at Auburn University. 


          <br></br>
          <br></br>
          Now, I am looking for a Quant job or any job that
          <br></br>
          requires me to be analytical. From coding <a href="https://github.com/duc-la" className="highlighted" target="_blank" rel="noopener noreferrer">multiple projects</a> 
          <br></br>
          to doing research worthy of <a href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AOAOcb1F69PX-cSCYZnC0GWG6nkCbWBVim_kqAviALwqVlih4XZewwfdWmZWBizXV7SLWMick2LKtYDC_lVZhGqOjjZfk9GDChfe_dXjqVA&user=QTTIVAsAAAAJ" className="highlighted" target="_blank" rel="noopener noreferrer">publications in top conferences</a>, 
          <br></br>
          I have found that real experience is essential to improve skills. 

          <br></br>
          <br></br>
          My main focus, currently, is finding an internship for the
          <br></br>
          Fall of 2024 and each semester after that. I want to gain as 
          <br></br>
          much experience as I can before I graduate so that my skills 
          <br></br>
          can keep improving. 

          <br></br>
          <br></br>
          I am obssessed with optimization of any kind. Whether it be time,
          <br></br>
          spending, workout gains, or algorithms. 

        </p>

        <h3>Check out my: </h3>
        <div className="button-container">
          <a href="https://github.com/duc-la" target="_blank" rel="noopener noreferrer" className="button">GitHub</a>
          <a href="https://www.linkedin.com/in/duc-la" target="_blank" rel="noopener noreferrer" className="button">LinkedIn</a>
          <a href="https://www.duc-la.com" target="_blank" rel="noopener noreferrer" className="button">Personal Website</a>
        </div>

        {/* <Menu></Menu> */}
      </main>
    </div>
  );
};

export default About;