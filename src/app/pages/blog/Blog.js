import React, {useEffect, useState} from 'react'
import ReactMarkdown from 'react-markdown'
import './Blog.scss'

export const Blog = () => {
  const [article, setArticle] = useState(undefined)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://raw.githubusercontent.com/saljuama/articles/main/experiment/some-experiment.md')
      return response.status === 200 ? await response.text() : ''
    }
    setArticle(fetchData())
  }, [article])

  return (
    <div className='Article'>
      <ReactMarkdown children={article}/>
    </div>
  )
}
