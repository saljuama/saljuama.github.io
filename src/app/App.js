import React from 'react'
import { Provider } from 'react-redux'
import { history, store } from '../config/store'
import { ConnectedRouter } from "connected-react-router"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavigationBar from './navigation/NavigationBar'
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import AboutMe from './pages/aboutMe/AboutMe'
import NotFound from './NotFound'

import './App.scss'

const App = () =>
  <div className="App">
    <NavigationBar/>
    <Switch>
      <Route path="/about-me" component={ AboutMe }/>
      <Route path="/blog" component={ Blog }/>
      <Route path="/" component={ Home }/>
      <Route component={ NotFound }/>
    </Switch>
  </div>

const Application = () =>
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ App }/>
        </Switch>
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>

export default Application
