import {configureStore} from "@reduxjs/toolkit"
import {dummyReducer} from "../app/dummySlice";

export default configureStore({
  reducer: {dummy: dummyReducer}
})
