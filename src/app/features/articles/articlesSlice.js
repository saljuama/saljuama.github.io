import {createSlice} from "@reduxjs/toolkit";

const initialState = {}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {}
})

export const articlesReducer = articlesSlice.reducer

