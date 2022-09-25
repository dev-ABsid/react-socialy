import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPosts, getPost } from "../../actions/PostActions";

const initialState = [];

//fetch all posts
//Thunk request type => Get
export const fetchPosts = createAsyncThunk("posts/getAll", async () => {
  const response = await getAllPosts();
  return response.data;
});

//fetch single posts
//Thunk request type => Get
export const fetchPost = createAsyncThunk("posts/getSingle", async () => {
  const response = await getPost();
  return response.data;
});

//create slice & manage global posts state
const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [fetchPost.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

export default postsSlice.reducer;
