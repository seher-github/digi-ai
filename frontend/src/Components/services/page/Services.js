import React from 'react'
import Back from '../../Common/back/Back'
import Scard from '../../home/scards/Scard'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { servicesData } from '../../../data'

const Services = () => {
  return (
    <div>
    <Back  smallHeading={"Empowering Growth with Smart Solutions"}
     mainHeading={"Comprehensive Services We Proudly Offer"} />
     <Scard />
   <div className='services'>
      <Container className="services-section">
      <Row className="justify-content-center">
        {servicesData.slice(4, 8).map((service, index) => (
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
    </div>
  )
}

export default Services
