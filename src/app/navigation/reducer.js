import { NAVIGATE_TO_MAIN_SECTION, REACT_ROUTER_LOCATION_CHANGE, navigateToMainSection } from './actions'
import { mainSections, routesToMainSections } from './constants'

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
    case REACT_ROUTER_LOCATION_CHANGE:
      const path = routesToMainSections[action.payload.location.pathname]
      return navigationReducer(state, navigateToMainSection(path))
    default:
      return state
  }
}
