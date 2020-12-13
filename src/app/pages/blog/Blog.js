import React, {useEffect, useState} from 'react'
import {Link, Route, Switch, useParams, useRouteMatch} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
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
  const [markdown, setMarkdown] = useState(undefined)

  useEffect(() => {
    axios
      .get(`https://raw.githubusercontent.com/saljuama/articles/main/${category}/${article}`)
      .then(response => setMarkdown(response.data))
      .catch(() => setMarkdown("# Error"))
  }, [markdown, category, article])

  return (
    <div className='Article'>
      <ReactMarkdown children={markdown}/>
    </div>
  )
}
