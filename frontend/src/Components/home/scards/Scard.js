import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Scard.css";
import { servicesData } from '../../../data';
import { Link } from 'react-router-dom';

const Scard = () => {
  return (
    <div className='services'>
      <Container className="services-section">
        <Row className="justify-content-center">
          {servicesData.slice(0, 4).map((service, index) => ( // Slice to get only the first four
            <Col key={index} md={3} sm={6} className="mb-4">
              <Card className="service-card">
                <Card.Body>
                  <Card.Title className="service-title">{service.title}</Card.Title>
                  <Card.Text className="service-description">{service.description}</Card.Text>
                  <Link to={service.path} className="explore-btn">Explore More</Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Scard;
