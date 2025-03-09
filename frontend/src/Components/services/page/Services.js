import React from 'react'
import Back from '../../Common/back/Back'
import Scard from '../../home/scards/Scard'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { servicesData } from '../../../data'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div>
    <Back  smallHeading={"Empowering Growth with Smart Solutions"}
     mainHeading={"Comprehensive Services We Proudly Offer"} />
     <Scard />
    <div className='services'>
         <Container className="services-section">
           <Row className="justify-content-center">
             {servicesData.slice(4, 8).map((service, index) => ( // Slice to get only the first four
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
    </div>
  )
}

export default Services
