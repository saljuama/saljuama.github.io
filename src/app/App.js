import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Switch from 'react-bootstrap/cjs/Switch'
import Route from 'react-router-dom/es/Route'

import NavigationBar from './navigation/NavigationBar'
import Home from './pages/home/Home'
import AboutMe from './pages/aboutMe/AboutMe'
import './App.scss'


const routes = [
  { path: "/about-me", component: AboutMe },
  { path: "/", component: Home }
]

const App = () =>
  <Router>
    <div className="App">
      <NavigationBar/>
      <Switch>
        { routes.map(route =>
          <Route exact path={ route.path }>
            <route.component/>
          </Route>
        ) }
      </Switch>
    </div>
  </Router>

export default App
