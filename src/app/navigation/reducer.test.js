import deepFreeze from 'deep-freeze'
import { navigationReducer } from './reducer'
import { navigateToMainSection } from './actions'
import { mainSections } from './constants'


describe('The Navigation Reducer', () => {

  it('Updates the navigation of main sections', () => {
    const initialState = { activeMainSection: mainSections.HOME }
    const expectedState = { activeMainSection: mainSections.BLOG }

    deepFreeze(initialState)

    expect(navigationReducer(initialState, navigateToMainSection(mainSections.BLOG)))
      .toEqual(expectedState)
  })
})
