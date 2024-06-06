import React, { useState } from 'react';
import './Menu.css';

const Menu: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // if (isMenuOpen){
          
        // }
        //console.log("Menu state: ", !isMenuOpen);
    };

    
    // let menuContent;
    // if (isMenuOpen) {
    //     menuContent = (
    //         <div className="help-menu">
    //             <ul>
    //                 <li><a href="#about">About</a></li>
    //                 <li><a href="#projects">Projects</a></li>
    //                 <li><a href="#contact">Contact</a></li>
    //             </ul>
    //         </div>
    //     );
    // }

    return (
      // <div className="filler">
      //   <p>Help Menu</p> {/* Add this line for debugging */}
      //   {/* <ul>
      //     <li><a href="#about">About</a></li>
      //     <li><a href="#projects">Projects</a></li>
      //     <li><a href="#contact">Contact</a></li>
      //   </ul>    */}
      // </div>

      // <div className="help-menu">
      //   {/* <p>Help Menu</p> Add this line for debugging */}
      //   <ul>
      //     <li><a href="#about">About</a></li>
      //     <li><a href="#projects">Projects</a></li>
      //     <li><a href="#contact">Contact</a></li>
      //   </ul>   
      // </div>
      <div>
          <div className="help-button" onClick={toggleMenu}>Help</div>
          {isMenuOpen && 
            (<div className="help-menu">
              <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
          </div>)}
      </div>

    );
};

export default Menu;