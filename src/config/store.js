import {configureStore} from "@reduxjs/toolkit"
import {articlesReducer as articles} from "../app/features/articles/articlesSlice";

export default configureStore({
  reducer: {articles}
})
