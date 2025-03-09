import React from 'react'
import Back from '../../../Common/back/Back'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './AiRec.css'


const AiRec = () => {
  return (
    <div className='airec'>
        <Back mainHeading={"AI Content Creation & Recommendations"}
         smallHeading={"Empowering Growth with Smart Solutions"} />
     <div className="ai-form-container">
      <h2 className="form-title">Get Customized AI Recommendations</h2>
      <Form>
        <Row >
          {/* Left Side Inputs */}
          <Col md={6} className='left'>
            <Form.Group controlId="campaignName">
              <Form.Label>Campaign Name</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group controlId="targetAudience">
              <Form.Label>Target Audience</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group controlId="adType">
              <Form.Label>Ad Type</Form.Label>
              <p className="form-subtitle">Select One</p>
              <div className="checkbox-group">
            
                <Form.Check type="radio" label="Display" name="adType"  />
                <Form.Check type="radio" label="Video" name="adType" />
                <Form.Check type="radio" label="Search" name="adType" />
                <Form.Check type="radio" label="Social" name="adType" />
              </div>
            </Form.Group>
            
          </Col>

          {/* Right Side Inputs */}
          <Col md={6} className='right'>
            <Form.Group controlId="industryType">
              <Form.Label>Industry Type</Form.Label>
              <Form.Control as="select">
                <option>Select Industry</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="budgetRange">
              <Form.Label>Budget Range</Form.Label>
              <Form.Control as="select">
                <option>Select Budget</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="contentPreferences">
              <Form.Label>Content Preferences</Form.Label>
              <p className="form-subtitle">Select One</p>
              <div className="checkbox-group">
                <Form.Check type="checkbox" label="Blog" />
                <Form.Check type="checkbox" label="Video" />
                <Form.Check type="checkbox" label="Infographic" />
                <Form.Check type="checkbox" label="Ad Copy" />
              </div>
            </Form.Group>
          </Col>
          <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
        </Row>
        
       
      </Form>
    </div>
    </div>
  )
}

export default AiRec
