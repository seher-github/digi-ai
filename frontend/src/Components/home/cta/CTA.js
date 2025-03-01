import React from 'react'
import { Container, Button } from "react-bootstrap"
import "./CTA.css" // Import external CSS

const CTA = () => {
  return (
    <div className='cta'>
    <section className="cta-section">
    <Container className="cta-container">
      <p className="cta-subtitle">Join the Future of Marketing with Digi-AI</p>
      <h2 className="cta-title">Be A Part Of Something Big</h2>
      <Button className="cta-button">Get Started Today</Button>
    </Container>
  </section>
  </div>
  )
}

export default CTA
