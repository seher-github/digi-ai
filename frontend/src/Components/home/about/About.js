import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <div className='about'>
    <Container fluid className="about-us-container">
      <Row className="d-flex align-items-center">
        {/* Left Column: Background Image with Text */}
        <Col md={6} className="left-column">
          <div className="left-content">
            <div className="text-content">
              <h3 className="small-heading">Empowering Growth with Smart Solutions</h3>
              <h1 className="big-heading">AI That Works For Your Business</h1>
            </div>
          </div>
        </Col>

        {/* Right Column: Paragraph and Button */}
        <Col md={6} className="right-column">
          <p className="about-description">
            Digi-AI empowers your business with smart automation, real-time insights, and personalized marketing strategies. Leverage AI-driven content creation, targeted ads, and data-backed decisions to maximize efficiency and ROI. Let AI handle the heavy lifting while you focus on growth.
          </p>
          <Button className="explore-more-btn">Explore More</Button>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default About;
