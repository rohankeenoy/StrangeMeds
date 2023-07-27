import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import axios from 'axios';
import '../components/contact.css';
import LogosContainer from '../components/logosContainer';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSent, setIsSent] = useState(false); // State to track if the email is sent
  const [isLoading, setIsLoading] = useState(false); // State to track if the email is being sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state while sending the email

    // Send form data to the backend server
    axios.post('http://localhost:5000/send-inquiry', formData)
      .then((response) => {
        console.log("Email sent");
        setIsSent(true); // Set isSent state to true after the email is successfully sent
        setIsLoading(false); // Reset loading state after the email is sent
      })
      .catch((error) => {
        console.log("There was a failure.");
        setIsLoading(false); // Reset loading state if there's an error sending the email
      });
  };
  

  return (
    <div className="container">
      <NavBar />
      <div className="form-container">
        <h1> Contact us!</h1>
        <Container className="form">
          <Row className="d-flex justify-content-center">
            <Col xs={12} md={8}>
              {isSent ? (
                <p>Email sent successfully!</p>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Message:</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Button type="submit" disabled={isLoading}>Submit</Button>
                </Form>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="logos-container">
        <LogosContainer />
      </div>
      <Container className="footer-container">
        <hr />
        <p>
          Developed by Rohan{' '}
          <a href="https://rohankeenoy.github.io/" target="_blank" rel="noopener noreferrer">
            https://rohankeenoy.github.io/
          </a>
        </p>
      </Container>
    </div>
  );
};

export default InquiryForm;
