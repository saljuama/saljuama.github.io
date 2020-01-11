import deepFreeze from 'deep-freeze'
import { navigationReducer } from './reducer'
import { navigateToMainSection, REACT_ROUTER_LOCATION_CHANGE } from './actions'
import { mainSections } from './constants'

const reactRouterLocationChange = path => ({
  type: REACT_ROUTER_LOCATION_CHANGE,
  payload: { location: { pathname: path } }
})

describe('The Navigation Reducer', () => {
  describe('updates the main section when', () => {
    it('clicking the links on the navigation bar', () => {
      const initialState = { activeMainSection: mainSections.HOME }
      const expectedState = { activeMainSection: mainSections.BLOG }
      deepFreeze(initialState)

      const resultState = navigationReducer(initialState, navigateToMainSection(mainSections.BLOG))

      expect(resultState).toEqual(expectedState)
    })
    it('using react router', () => {
      const initialState = { activeMainSection: mainSections.HOME }
      const expectedState = { activeMainSection: mainSections.BLOG }
      deepFreeze(initialState)

      const resultState = navigationReducer(initialState, reactRouterLocationChange('/blog'))

      expect(resultState).toEqual(expectedState)
    })
  })
})
