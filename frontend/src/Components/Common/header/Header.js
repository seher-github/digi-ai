import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  // State for toggle menu
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" className="custom-navbar" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#" className="brand">DIGI-AI</Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)}
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-content">
            <Nav className="nav-links">
              <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
              <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
              <Nav.Link href="#services" className="nav-link-custom">Services</Nav.Link>
              <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
            </Nav>
            <div className="auth-buttons">
              <Button variant="dark" className="login-btn">Log In</Button>
              <Button variant="primary" className="signup-btn">Sign Up</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
