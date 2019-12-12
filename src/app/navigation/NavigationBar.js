import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

import './NavigationBar.scss'

const NavigationBar = () =>
  <Navbar bg="dark" variant="dark" sticky="top" className="NavigationBar">
    <Navbar.Brand>
      <Image src="/logo192.jpg" width={40} height={40} roundedCircle />
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Link to="/">Home</Link>
      <Link to="/about-me">About me</Link>
    </Nav>
  </Navbar>

export default NavigationBar