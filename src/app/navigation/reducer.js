import { NAVIGATE_TO_MAIN_SECTION } from './actions'
import { mainSections } from './constants'

export const navigationInitialState = {
  activeMainSection: mainSections.HOME
}

export const navigationReducer = (state = navigationInitialState, action) => {
  switch ( action.type ) {
    case NAVIGATE_TO_MAIN_SECTION:
      return {
        ...state,
        activeMainSection: action.navigateTo
      }
    default:
      return state
  }
}
