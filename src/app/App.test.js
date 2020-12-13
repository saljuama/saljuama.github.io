import React from 'react'
import {screen} from '@testing-library/react'
import storeForTest from '../config/store'
import {renderWithReduxAndRouter} from "../utils/testUtils";
import {App} from './App'

describe('The Application', () => {
  it('renders the landing page', () => {
    renderWithReduxAndRouter(<App/>, storeForTest)
    const landingPageTitle = screen.getByText(/Home Page/i)
    expect(landingPageTitle).toBeInTheDocument()
  })
})
