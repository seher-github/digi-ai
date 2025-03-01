import React from 'react'
import { Container, Button } from "react-bootstrap"
import "./Hero.css"


const Hero = () => {
  return (
    <div className='hero'>
    <Container className="hero-container">
    <div className="hero-overlay"></div>
    <p className="hero-tagline">Elevate your business with AI</p>
    <h1 className="hero-title">AI That Works for Your Business</h1>
    <p className="hero-subtitle">
      Navigating digital challenges? We’re Here to Help you Shine.
    </p>
    <div className="hero-buttons">
      <Button variant="dark" className="learn-more-btn">Learn More</Button>
      <Button variant="primary" className="get-started-btn">Get Started</Button>
    </div>
    <p className="hero-services">Services you are going to experience</p>
  </Container>
  </div>
  )
}

export default Hero
