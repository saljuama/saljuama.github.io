import React from 'react'
import { store as reduxStore } from '../../../config/store'
import { renderWithReduxAndRouter } from '../../../utils/testUtils'
import { fireEvent, screen } from '@testing-library/react'
import NavigationBar from './NavigationBar'

describe('The Navigation Bar', () => {
  it('renders the navigation links', () => {
    renderWithReduxAndRouter(<NavigationBar/>, reduxStore)

    const linksToBeRendered = ['home-link', 'blog-link', 'about-link']
    linksToBeRendered.forEach(link => expect(screen.getByTestId(link)).toBeInTheDocument())
  })
  it('navigation links activate their respective main sections', () => {
    renderWithReduxAndRouter(<NavigationBar/>, reduxStore)

    fireEvent.click(screen.getByTestId('blog-link'))

    expect(screen.getByTestId('home-link')).not.toHaveClass('active')
    expect(screen.getByTestId('blog-link')).toHaveClass('active')
  })
})
