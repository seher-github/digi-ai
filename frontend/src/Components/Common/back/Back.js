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
            <img
              src={img}
              alt="AI Chatbot"
              className="hero-image"
            />
          </Col>

          {/* Right Text Section */}
          <Col md={6} className="text-content">
            <p className="small-heading"><span>{smallHeading}</span></p>
            <h1 className="main-heading">
          <span>   {mainHeading}</span>
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Back;
