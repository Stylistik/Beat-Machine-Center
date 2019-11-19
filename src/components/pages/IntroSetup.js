
  import React, { Component } from "react";
//   import './function.js';
   import "./style.css";
   import Row from 'react-bootstrap/Row';
   // import Col from 'react-bootstrap/Col';
   // import Display from "./Display";
   // import Button from "./Button";
   
   // const data = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
 
   class HomeSetup extends Component {
   
   
 
     render() {
       function removeTransition(e) {
         if (e.propertyName !== 'transform') return;
         e.target.classList.remove('playing');
       }
     
       function playSound(e) {
         const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
         const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
         if (!audio) return;
     
         key.classList.add('playing');
         audio.currentTime = 0;
         audio.play();
       }
     
       const keys = Array.from(document.querySelectorAll('.key'));
       keys.forEach(key => key.addEventListener('transitionend', removeTransition));
       window.addEventListener('keydown', playSound);
 
       return (
      <div >
           <Row >
           <div  class="keys">
       <Row >
       <div  data-key="65" class="key">
       <kbd>A</kbd>
       <span class="sound">clap</span>
     </div>
     <div data-key="83" class="key">
       <kbd>S</kbd>
       <span class="sound">hihat</span>
     </div>
     <div data-key="68" class="key">
       <kbd>D</kbd>
       <span class="sound">kick</span>
     </div>
     <div data-key="70" class="key">
       <kbd>F</kbd>
       <span class="sound">openhat</span>
     </div>
     <Row>
     <div data-key="71" class="key">
           <kbd></kbd>
           <span class="sound"></span>
         </div>
         <div data-key="72" class="key">
           <kbd></kbd>
           <span class="sound"></span>
         </div>
         <div data-key="74" class="key">
           <kbd></kbd>
           <span class="sound"></span>
         </div>
         <div data-key="75" class="key">
           <kbd></kbd>
           <span class="sound"></span>
         </div>
     </Row>
        </Row>
        </div>
           </Row>
          
       
      </div>
         
       );
     }
   }
   
   export default HomeSetup;