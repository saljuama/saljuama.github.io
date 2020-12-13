import axios from 'axios'

const repositoryUrl = `https://raw.githubusercontent.com/saljuama/articles/main`

export const articleUrl = article => `/${article.category}/${article.markdown}`

export const articleMarkdown = async article => await axios
  .get(`${repositoryUrl}${articleUrl(article)}`)
  .then(response => response.data)
  .catch(() => '# Not Found')

export const published = {
  categories: [
    {title: 'High Performing Teams', key: 'high-performing-teams'},
    {title: 'Agile Engineering', key: 'agile-engineering'}
  ],
  articles: [
    {
      category: 'high-performing-teams',
      title: 'What is High Performance?',
      markdown: 'what-is-high-performance.md'
    },
    {
      category: 'high-performing-teams',
      title: 'The role of diversity in high performing teams',
      markdown: 'how-diversity-contributes-to-high-performance.md'
    },
    {
      category: 'agile-engineering',
      title: 'Feature Toggles and You!',
      markdown: 'feature-toggles-and-you.md'
    },
    {
      category: 'agile-engineering',
      title: 'Breaking it into small pieces',
      markdown: 'breaking-it-into-small-pieces.md'
    }
  ]
}
