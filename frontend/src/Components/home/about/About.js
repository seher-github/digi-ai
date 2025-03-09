import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <div className='about'>
    <Container className='about-section'>
        <Row className="align-items-center">
          <Col lg={6} className="left-column">
            <p className="subheading">Empowering Growth with Smart Solutions</p>
            <h2 className="big-heading">AI That Works for Your Business</h2>
          </Col>

          {/* Right Column (Description & Button) */}
          <Col lg={6} className="right-column">
            <p className="about-description">
              Digi-AI empowers your business with smart automation, real-time insights, and personalized marketing strategies.
              Leverage AI-driven content creation, targeted ads, and data-backed decisions to maximize efficiency and ROI.
              Let AI handle the heavy lifting while you focus on growth.
            </p>
            <Button className="about-button">Explore More</Button>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default About;
