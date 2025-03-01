import React from 'react';
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#" className="brand">DIGI-AI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="navbar-content">
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
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;