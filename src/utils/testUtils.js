import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

/**
 * To be used in components that render inside any `react-router` component for testing
 * @param component - The component to render. Ex: <MyComponent />
 */
export const renderWithRouter = component => ({ ...render(<BrowserRouter>{component}</BrowserRouter>) })
