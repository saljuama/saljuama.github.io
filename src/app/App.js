import React, {useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import {NavigationBar} from './navigation/components/NavigationBar'
import {Home} from './pages/home/Home'
import {Blog} from './pages/blog/Blog'
import {AboutMe} from './pages/aboutMe/AboutMe'
import {NotFound} from './pages/notFound/NotFound'
import './App.scss'
import {useDispatch} from "react-redux";
import {loadStuff} from "./features/articles/articlesSlice";

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadStuff())
  })

  return (
    <div className="App">
      <NavigationBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/about" component={AboutMe}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  )
}
