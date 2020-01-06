import React from 'react'
import { render } from '@testing-library/react'
import Application from './App'

test('renders learn react link', () => {
  const { getByText } = render(<Application />)

  const linkElement = getByText(/Home Page/i)
  expect(linkElement).toBeInTheDocument()
})
