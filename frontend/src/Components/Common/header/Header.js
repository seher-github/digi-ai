import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link
import "./Header.css";

const Header = () => {
  // State for toggle menu
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" className="custom-navbar" expanded={expanded}>
      <Container>
        {/* Use Link for brand navigation */}
        <Navbar.Brand as={Link} to="/" className="brand">DIGI-AI</Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)}
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        {/* Navbar Collapse */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-content">
            <Nav className="nav-links">
              {/* Use `as={Link}` instead of `to` for React Router */}
              <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
              <Nav.Link href="#" className="nav-link-custom">About</Nav.Link>
              <Nav.Link as={Link} to="/services" className="nav-link-custom">Services</Nav.Link>
              <Nav.Link href="#" className="nav-link-custom">Contact</Nav.Link>
            </Nav>

            {/* Auth Buttons */}
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
