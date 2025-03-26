import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome to My Portfolio</h1>
          <p>This is my personal portfolio website.</p>
          <Button variant="primary">Learn More</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;