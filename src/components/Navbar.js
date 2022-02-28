import React from 'react';
import { Container, Navbar, Nav,  } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import logo from '../logo.jpg'

function NavBar() {
  return (<div className="navbarsticky">  <Navbar bg="light" variant="light">
  <Container>
  <Navbar.Brand className="NAME">HITECH SHOP</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link as={Link} to="/">Home</Nav.Link>
    <Nav.Link as={Link} to="/Courses">Courses</Nav.Link>
    <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
  </Nav>
  <img  src={logo} width="100" height="60" className="footerlogo"></img>
  </Container>
</Navbar></div>);
}

export default NavBar;
