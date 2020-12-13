import {parse} from 'node-html-parser'

export const scanRepository = async url => {
  const html = await fetch(url)
    .then(response => response.status === 200 ? response.text() : '')
    .then(html => parse(html))
    .catch(error => {
      console.error(`SON OF A BIATCH.... ${error.message}`)
      return undefined
    })
  return html !== undefined
    ? html.querySelectorAll('a.js-navigation-open')
    : []
}
