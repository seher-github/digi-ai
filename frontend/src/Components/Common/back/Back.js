import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Back.css";
import img from '../../../Assets/img1.png';

const Back = ({ smallHeading, mainHeading }) => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          {/* Left AI Illustration */}
          <Col md={6} className="text-center">
            <img src={img} alt="Illustration" className="hero-image" />
          </Col>

          {/* Right Text Section */}
          <Col md={6} className="text-content">
            <p className="small-heading">{smallHeading}</p>
            <h1 className="main-heading">{mainHeading}</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Back;
