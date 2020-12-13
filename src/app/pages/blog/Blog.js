import React from 'react'
import {Link, Route, Switch, useParams, useRouteMatch} from 'react-router-dom'
import {articleUrl, published} from "./published"
import './Blog.scss'

export const Blog = () => {
  const {path} = useRouteMatch()
  return (
    <Switch>
      <Route exact path={path} component={ArticleList}/>
      <Route path={`${path}/:category/:article`} component={Article}/>
    </Switch>
  )
}

const ArticleList = () => {
  const {url} = useRouteMatch()
  const articles = published.articles
  return (
    <div className='Blog'>
      <h1>Blog main page</h1>
      {articles.map(article => {
        const artUrl = articleUrl(article);
        return <Link to={`${url}${artUrl}`} key={artUrl}>{article.title}</Link>
      })}
    </div>
  )
}

export const Article = () => {
  const {category, article} = useParams()
  return (
    <div className='Article'>
      <h3>{category}</h3>
      <h3>{article}</h3>
    </div>
  )
}
