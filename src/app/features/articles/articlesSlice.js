import {createSlice} from "@reduxjs/toolkit";
import {scanRepository} from "./articlesScanner";

const initialState = {}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {}
})

export const articlesReducer = articlesSlice.reducer


export const loadStuff = () => async dispatch => {
  const result = await scanRepository('https://github.com/saljuama/articles')
  console.log('********************')
  console.log(JSON.stringify(result))
}
