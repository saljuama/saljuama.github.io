import React, {useEffect, useState} from 'react'
import ReactMarkdown from 'react-markdown'
import './Blog.scss'

export const Blog = () => {
  const [article, setArticle] = useState(undefined)

  useEffect(async () => {
    if (article === undefined) {
      const response = await fetch('https://raw.githubusercontent.com/saljuama/articles/main/experiment/some-experiment.md')
      if (response.status === 200) {
        const text = await response.text()
        setArticle(text)
      }
    }
  })

  return (
    <div className='Article'>
      <ReactMarkdown children={article}/>
    </div>
  )
}
