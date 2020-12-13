import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {NavigationBar} from './navigation/components/NavigationBar'
import {Home} from './pages/home/Home'
import {Blog} from './pages/blog/Blog'
import {AboutMe} from './pages/aboutMe/AboutMe'
import {NotFound} from './pages/notFound/NotFound'
import './App.scss'

export const App = () => (
  <div className="App">
    <NavigationBar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/about" component={AboutMe}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </div>
)
