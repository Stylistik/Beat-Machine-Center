import React from 'react';
// import Nav from 'react-bootstrap/Nav';
//  import LoginRedirect from '../pages/loginPage';
//import React Router
// import LoginRedirect from '../pages/loginPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// function LogIN(props) {
//     return <button> {props.Name} </button>;
//   }



// function Login() {

//     return (
//       <div>
//        <LogIN  Name="Welcome Back" />
//       </div>
//     );
//   }
function clicked(){
  alert('clicked');

}

export default class LogMeIn extends React.Component {
  constructor() {
    super();

    this.state ={
      displayME: false
    };

    this.handleChange = this.handleChange.bind(this);

    this.twoInstance = (
      <div onCLick={this.handleChange}>
            {/* <LoginRedirect/> */}
      </div>    );
  }
  handleChange(event){
    this.setState({displayME:true});
  }
  render(){
    const  style = this.state.displayME ? {display:'none'} :{};
  return(
    <Router>
      <div>
       
            <button><Link onClick={this.handleChange}  to="/LoginRedirect">Welcome Back</Link></button>
       
      </div>
      <Switch>
        <Route path="/LoginRedirect">
          {/* <LoginRedirect/> */}
        </Route>
      </Switch>
    </Router>
  );
}
  
}


