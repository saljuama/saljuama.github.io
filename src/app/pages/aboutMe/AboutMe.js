import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './AboutMe.scss'

const AboutMe = () =>
  <Container className='AboutMe' fluid={true}>
    <Row>
      <Col>
        <h1>About page</h1>
      </Col>
    </Row>
  </Container>

export default AboutMe