import {createSlice} from "@reduxjs/toolkit";

const dummySlice = createSlice({
  name: 'dummy',
  initialState: {},
  reducers: {}
})

export const dummyReducer = dummySlice.reducer
