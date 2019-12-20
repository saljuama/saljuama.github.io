import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Blog.scss'

const Blog = () =>
  <Container className='Blog' fluid={true}>
    <Row>
      <Col>
        <h1>Blog page</h1>
      </Col>
    </Row>
  </Container>

export default Blog