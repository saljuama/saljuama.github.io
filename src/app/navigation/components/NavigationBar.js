import React from 'react'
import {mainSections, routesToMainSections} from "../../../config/router";
import {Link, useLocation} from 'react-router-dom'
import './NavigationBar.scss'

export const NavigationBar = () => {
  const location = useLocation()
  const sectionLinkClass = section => section === routesToMainSections[location.pathname] ? 'NavLink active' : 'NavLink'

  return (
    <nav className='NavigationBar'>
      <Link to="/" data-testid='home-link' className={sectionLinkClass(mainSections.HOME)}>Home</Link>
      <Link to="/blog" data-testid='blog-link' className={sectionLinkClass(mainSections.BLOG)}>Blog</Link>
      <Link to="/about" data-testid='about-link' className={sectionLinkClass(mainSections.ABOUT)}>About me</Link>
    </nav>
  )
}
