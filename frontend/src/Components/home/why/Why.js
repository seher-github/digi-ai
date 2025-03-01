import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"
import "./Why.css"
import why from '../../../Assets/about.png'


const Why = () => {
  return (
    <section className="why-digi-ai">
    <Container>
      <Row className="align-items-center">
        {/* Left Side - Image */}
        <Col md={6} className="text-center left-col">
          <div className="image-wrapper">
            <img
              src={why}
              alt="Infographic"
              className="infographic-img"
            />
            <div className="blurred-circle"></div>
          </div>
        </Col>

        {/* Right Side - Text */}
        <Col md={6} className='right-col'>
          <h3 className="section-subtitle">Powering Marketing with Intelligence!</h3>
          <h2 className="section-title">Why Digi AI?</h2>
          <p className="features">
            <strong>AI-Driven Results:</strong> Data-backed strategies for better performance. <br />
            <strong>Automation & Efficiency:</strong> Save time and scale faster. <br />
            <strong>Personalization at Scale:</strong> Tailored experiences for every customer. <br />
            <strong>Real-Time Insights:</strong> Optimize campaigns on the go.
          </p>
          <Button className="explore-btn">Explore More</Button>
        </Col>
      </Row>
    </Container>
  </section>

  )
}

export default Why
