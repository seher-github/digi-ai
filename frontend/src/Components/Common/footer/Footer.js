import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"
import "./Footer.css"


const Footer = () => {
  return (
    <footer className="footer">
    <Container>
      <Row className="footer-content">
        <Col md={4} className="footer-brand">
          <h2>DIGI-AI</h2>
          <p className="footer-text">
          Digi-AI simplifies marketing with AI-powered automation, smart analytics, and campaign optimization. Drive growth effortlessly with data-driven strategies.
          </p>
          <Button variant="primary" className="signup-btn">Sign Up Now</Button>
        </Col>

        <Col md={4} className="footer-section first">
          <h4>Company</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </Col>

        <Col md={4} className="footer-section second">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </Col>

        <Col md={4} className="footer-section third">
          <h4>Services</h4>
          <ul>
            <li><a href="#home">AI Recommendations</a></li>
            <li><a href="#about">Analytics & Insights</a></li>
            <li><a href="#services">Email Marketing</a></li>
            <li><a href="#contact">Budget Optimization</a></li>
          </ul>
        </Col>
      </Row>
    </Container>

    <div className="footer-bottom">
      <p>Copyright @ 2025 made by Digi AI</p>
    </div>
  </footer>

  )
}

export default Footer
