
  import React, { Component } from "react";
 import './function';
  import "./style.css";
  import Row from 'react-bootstrap/Row';
  // import Col from 'react-bootstrap/Col';
  // import Display from "./Display";
  // import Button from "./Button";
  
  // const data = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  class Drum extends Component {
    state = {
      display: "Press a key to play the drums!"
    };
  

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
          <div  className="keys">
      <Row >
      <div ref="audio_tag" src={{}} data-key="65" className="key">
      <kbd>A</kbd>
      <span className="sound">clap</span>
    </div>
    <div data-key="83" className="key">
      <kbd>S</kbd>
      <span className="sound">hihat</span>
    </div>
    <div data-key="68" className="key">
      <kbd>D</kbd>
      <span className="sound">kick</span>
    </div>
    <div data-key="70" className="key">
      <kbd>F</kbd>
      <span className="sound">openhat</span>
    </div>
    <Row>
    <div data-key="71" className="key">
          <kbd>G</kbd>
          <span className="sound">boom</span>
        </div>
        <div data-key="72" className="key">
          <kbd>H</kbd>
          <span className="sound">ride</span>
        </div>
        <div data-key="74" className="key">
          <kbd>J</kbd>
          <span className="sound">snare</span>
        </div>
        <div data-key="75" className="key">
          <kbd>K</kbd>
          <span className="sound">tom</span>
        </div>
    </Row>
       </Row>
       </div>
          </Row>
         
       <audio ></audio>
       <audio ref="audio_tag" data-key="83" src="./sounds/hihat.wav"></audio>
       <audio ref="audio_tag" data-key="65" src="./sounds/clap.wav"></audio>
       <audio ref="audio_tag" data-key="68" src="./sounds/kick.wav"></audio>
       <audio ref="audio_tag" data-key="70" src="./sounds/openhat.wav"></audio>
       <audio ref="audio_tag" data-key="71" src="./sounds/boom.wav"></audio>
       <audio ref="audio_tag" data-key="72" src="./sounds/ride.wav"></audio>
       <audio ref="audio_tag" data-key="74" src="./sounds/snare.wav"></audio>
       <audio ref="audio_tag" data-key="75" src="./sounds/tom.mp3"></audio>
     </div>
        
      );
    }
  }
  
  export default Drum;