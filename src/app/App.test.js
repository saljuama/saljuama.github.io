import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'

describe('The Application', () => {
  it('renders the landing page', () => {
    render(<App />)

    const landingPageTitle = screen.getByText(/Home Page/i)
    expect(landingPageTitle).toBeInTheDocument()
  })
})
