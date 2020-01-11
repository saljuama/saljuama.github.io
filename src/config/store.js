import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { navigationReducer } from '../app/navigation/reducer'


export const history = createBrowserHistory()

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  navigation: navigationReducer
})

const middleware = composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))

export const store = createStore(rootReducer(history), middleware)
