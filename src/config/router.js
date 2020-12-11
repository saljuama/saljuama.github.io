import {createBrowserHistory} from "history";

export const history = createBrowserHistory()

export const mainSections = {
  HOME: 'HOME',
  BLOG: 'BLOG',
  ABOUT: 'ABOUT'
}

export const routesToMainSections = {
  '/': mainSections.HOME,
  '/blog': mainSections.BLOG,
  '/about': mainSections.ABOUT
}
