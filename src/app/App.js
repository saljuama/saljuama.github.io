import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NavigationBar from './navigation/NavigationBar'
import Home from './pages/home/Home'
import AboutMe from './pages/aboutMe/AboutMe'
import Blog from './pages/blog/Blog'
import NotFound from './NotFound'

import './App.scss'


const routes = [
  { path: "/about-me", component: AboutMe },
  { path: "/blog", component: Blog },
  { path: "/", component: Home }
]

const App = () =>
  <div className="App">
    <NavigationBar/>
    <Switch>
      { routes.map(route => <Route exact path={ route.path } render={ () => (<route.component/>) }/>) }
      <Route render={ () => (<NotFound/>) }/>
    </Switch>
  </div>

export default App
