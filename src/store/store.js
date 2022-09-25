import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/PostSlice";

//store -> reducers store
export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
