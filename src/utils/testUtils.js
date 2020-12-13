import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {render} from '@testing-library/react'
import {Provider} from 'react-redux'

export const renderWithRouter = component => ({
  ...render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
})

export const renderWithRedux = (component, testStore) => ({
  ...render(
    <Provider store={testStore}>
      {component}
    </Provider>
  )
})

export const renderWithReduxAndRouter = (component, testStore) => ({
  ...render(
    <Provider store={testStore}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </Provider>
  )
})
