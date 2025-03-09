import React, { useState } from 'react';
import Back from '../../../Common/back/Back';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Emailaut.css';

const Emailaut = () => {
  const [emailContent, setEmailContent] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <Back mainHeading={'AI Email Marketing Automation'} smallHeading={'Empowering Growth with Smart Solutions'} />
      <div className="ai-form-container">
        <h2 className="form-title">Get Customized AI Recommendations</h2>
        <Form>
          <Row>
            {/* Left Side Inputs */}
            <Col md={6} className='left'>
              <Form.Group controlId="uploadid">
                <Form.Label>Upload List</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>

              <Form.Group controlId="emailcompose">
                <Form.Label>Compose Email Message</Form.Label>
                <ReactQuill theme="snow" value={emailContent} onChange={setEmailContent} />
              </Form.Group>

              <Form.Group controlId="choosecta">
                <Form.Label>Choose Call to Action Button</Form.Label>
                <Form.Control as="select">
                  <option>Select CTA</option>
                </Form.Control>
              </Form.Group>
            </Col>

            {/* Right Side Inputs */}
            <Col md={6} className='right'>
              <Form.Group controlId="emailsubject">
                <Form.Label>Email Subject</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>

              <Form.Group controlId="selectdate">
                <Form.Label>Select Date & Time for Email Sending</Form.Label>
                <DatePicker 
                  selected={selectedDate} 
                  onChange={date => setSelectedDate(date)} 
                  showTimeSelect 
                  dateFormat="Pp" 
                  className="form-control"
                />
              </Form.Group>

              <Form.Group controlId="trackingoptions">
                <Form.Label>Tracking Options</Form.Label>
                <p className="form-subtitle">Select One</p>
                <div className="checkbox-group">
                  <Form.Check type="checkbox" label="Track Open Rates" />
                  <Form.Check type="checkbox" label="Click Through Rates" />
                  <Form.Check type="checkbox" label="Conversions" />
                </div>
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit" className="save-btn">
            Save Draft
          </Button>
          <Button variant="primary" type="submit" className="submit-btn">
            Launch Campaign
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Emailaut;
