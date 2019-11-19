import React from 'react';
// import Nav from 'react-bootstrap/Nav';
//  import LoginRedirect from '../pages/loginPage';
//import React Router
// import SignupRedirect from '../pages/sigupPage';
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

export default class SignMeIn extends React.Component {
  constructor() {
    super();

    this.state ={
      displayME: false
    };

    this.handleChange = this.handleChange.bind(this);

    this.twoInstance = (
      <div onCLick={this.handleChange}>
            {/* <SignupRedirect/> */}
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
         
           <button> <Link onClick={this.handleChange}  to="/SignupRedirect">Need An Account</Link></button>
        
      </div>
      <Switch>
        <Route path="/SignupRedirect">
          {/* <SignupRedirect/> */}
        </Route>
      </Switch>
    </Router>
  );
}
  
}


