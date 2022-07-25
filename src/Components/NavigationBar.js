import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';          
import React from 'react'

function NavigationBar() {
  return (
    <div>
      <Navbar bg="primary" expand="sm">
      <Container className="m-0">
        <Navbar.Brand className="text-white" href="#home">TextUtils</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white text-primary" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="#home">Home</Nav.Link>
            <Nav.Link className="text-white" href="#about">About</Nav.Link>
          </Nav>
            
          </Navbar.Collapse>
          
          
      </Container>
          </Navbar>
</div>
  )
}

export default NavigationBar
    
    