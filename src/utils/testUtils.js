import React from 'react'
import { store } from '../config/store'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

/**
 * To be used in components that render inside any `react-router` component for testing
 * @param component - The component to render. Ex: <MyComponent />
 */
export const renderWithRouter = component =>
  ({ ...render(<BrowserRouter>{ component }</BrowserRouter>) })

/**
 * To be used in components connected to the `redux` Store
 * @param component - The component to render. Ex: <MyComponent />
 * @param store - The store to use, typically a mocked store
 */
export const renderWithRedux = (component, store) =>
  ({ ...render(<Provider store={ store }>{ component }</Provider>) })


/**
 * To be used in components that are connected to the `redux` store and also use `react-router` components
 * @param component - The component to render. Ex: <MyComponent />
 * @param store - The store to use, typically a mocked store
 */
export const renderWithReduxAndRouter = (component, store = store) =>
  ({ ...render(<Provider store={ store }><BrowserRouter>{ component }</BrowserRouter></Provider>) })
