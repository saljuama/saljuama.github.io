import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import { mainSections } from '../constants'
import { navigateToMainSection } from '../actions'

import './NavigationBar.scss'

class NavigationBar extends React.Component {

  sectionLinkClass(section) {
    return this.props.activeMainSection === section ? 'NavLink active' : 'NavLink'
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark" sticky="top" className="NavigationBar">
        <Navbar.Brand>
          <Image src="/logo192.jpg" width={ 40 } height={ 40 } roundedCircle/>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/"
                data-testid='home-link'
                className={ this.sectionLinkClass(mainSections.HOME) }
                onClick={ () => this.props.navigateTo(mainSections.HOME) }>Home</Link>
          <Link to="/blog"
                data-testid='blog-link'
                className={ this.sectionLinkClass(mainSections.BLOG) }
                onClick={ () => this.props.navigateTo(mainSections.BLOG) }>Blog</Link>
          <Link to="/about"
                data-testid='about-link'
                className={ this.sectionLinkClass(mainSections.ABOUT) }
                onClick={ () => this.props.navigateTo(mainSections.ABOUT) }>About me</Link>
        </Nav>
      </Navbar>
    )
  }
}


export default connect(
  state => ({
    activeMainSection: state.navigation.activeMainSection
  }),
  dispatch => ({
    navigateTo: section => dispatch(navigateToMainSection(section))
  })
)(NavigationBar)
