import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./TextSlider.css";
import { services } from "../../../data";



const TextSlider = () => {
  return (
    <Container fluid className="slider-container">
      <Row>
        <Col>
          <div className="slider-track">
            {[...services, ...services].map((service, index) => (
              <span key={index} className="slider-item">
                {service}
              </span>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TextSlider;
