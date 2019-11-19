import React from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const mainPosition={
  float: 'left'
}

export default class Navi extends React.Component {
  render() {
    return(
      <Nav style={mainPosition} className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link >Search Beats</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Sample Beats</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" disabled >Saved Beats</Nav.Link>
      </Nav.Item>

    </Nav>
    )
  }
}