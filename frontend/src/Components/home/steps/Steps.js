import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import "./Steps.css"
import { steps } from '../../../data'
  

const Steps = () => {
  return (
    <div className='steps'>
    <Container className="steps-section">
    <Row className="align-items-center g-0">
      <Col md={6} className="steps-left">
        {steps.map((step, index) => (
          <div key={index} className="step-item">
            <div className="step-circle">{step.number}</div>
            <div className="step-text">{step.text}</div>
          </div>
        ))}
      </Col>
      <Col md={6} className="steps-right">
      <p className="steps-subtext">Smarter Strategies, Better Results</p>
        <h2 className="steps-heading">3 Easy Steps to Follow</h2>
        <p className="steps-description">
          Digi-AI streamlines marketing with AI automation, smart analytics, and campaign
          optimization. Follow three simple steps to create, launch, and improve your
          strategy effortlessly.
        </p>
        
      </Col>
    </Row>
  </Container>
  </div>
  )
}

export default Steps
