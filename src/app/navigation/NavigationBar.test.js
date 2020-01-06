import React from 'react'
import { renderWithRouter } from '../../utils/testUtils'
import { screen } from '@testing-library/react'

import NavigationBar from './NavigationBar'

describe('The Navigation Bar', () => {
  it('renders the navigation links', () => {
    renderWithRouter(<NavigationBar/>)

    const linksToBeRendered = ['home-link', 'blog-link', 'about-link']
    linksToBeRendered.forEach(link => expect(screen.getByTestId(link)).toBeInTheDocument())
  })

})
