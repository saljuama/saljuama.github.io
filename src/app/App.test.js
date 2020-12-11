import React from 'react'
import {screen} from '@testing-library/react'
import {renderWithRouter} from "../utils/testUtils";
import {App} from './App'

describe('The Application', () => {
  it('renders the landing page', () => {
    renderWithRouter(<App/>)
    const landingPageTitle = screen.getByText(/Home Page/i)
    expect(landingPageTitle).toBeInTheDocument()
  })
})
