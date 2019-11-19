import React from 'react';
import Navi from '../mainFiles/navbar';
import IntroTitle from '../mainFiles/introTitle';
import Drum from './drums';
import Row from 'react-bootstrap/Row';
import HomeSetup from './IntroSetup';
import "./style.css";



function LoggedIn(){
    return { showResults: false };
}

function onClick(){
    this.setState({ showResults: true });
}


export default class IntroPage extends React.Component {

    render(){
       
        return(
            <div>
            <div className='NavArea'>
          <Navi/>
      </div>
      <div className='container'>
          <IntroTitle/>
      </div>
     <Row style={{display: 'none'}} className='Hey'>
     <Drum/>
     </Row>
     
     <div>
     <Row >
     <div  style={{marginTop:'47vh'}} data-key="71" class="key">
         <button style={{backgroundColor:'transparent', color:'white', border:'none'}}>Try It Out</button>
         </div>
        <div style={{color:'white', marginTop:'56vh'}}> <a>Or</a></div>
         <div style={{marginTop:'47vh'}} data-key="72" class="key">
           <button style={{backgroundColor:'transparent', color:'white', border:'none'}}>Welcome Back</button>
         </div>
     </Row>
     </div>
 </div>
        )
    }
}