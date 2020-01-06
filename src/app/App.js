import React from 'react'
import { Provider } from 'react-redux'
import { history, store } from '../config/store'
import { ConnectedRouter } from "connected-react-router"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavigationBar from './navigation/NavigationBar'
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import AboutMe from './pages/aboutMe/AboutMe'
import NotFound from './pages/notFound/NotFound'

import './App.scss'

const Content = () =>
  <div className="App">
    <NavigationBar/>
    <Switch>
      <Route path="/about-me" component={ AboutMe }/>
      <Route path="/blog" component={ Blog }/>
      <Route path="/" component={ Home }/>
      <Route component={ NotFound }/>
    </Switch>
  </div>

const App = () =>
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Content }/>
        </Switch>
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>

export default App
