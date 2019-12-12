import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Home.scss'

const Home = () =>
  <Container className='Home' fluid={true}>
    <Row>
      <Col>
        <h1>Home page</h1>
      </Col>
    </Row>
  </Container>

export default Home