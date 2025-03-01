import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Scard.css";
import { servicesData } from '../../../data';

   
const Scard = () => {
    
  return (
    <div className='services'>
    <Container className="services-section">
    <Row className="justify-content-center">
      {servicesData.map((service, index) => (
        <Col key={index} md={3} sm={6} className="mb-4">
          <Card className="service-card">
            <Card.Body>
              <Card.Title className="service-title">{service.title}</Card.Title>
              <Card.Text className="service-description">{service.description}</Card.Text>
              <Button className="explore-btn">Explore More</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  </div>
  )
}

export default Scard
