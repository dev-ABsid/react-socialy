import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

//fetch All posts
//request type => Get
export const getAllPosts = async () => {
  try {
    const posts = await axios.get(`${API_URL}/posts`);
    return posts;
  } catch (err) {
    console.log(err);
  }
};

//fetch single post
//request type => Get
export const getPost = async (id) => {
  try {
    const post = await axios.get(`${API_URL}/posts/${id}`);
    return post;
  } catch (err) {
    console.log(err);
  }
};

//fetch all comments
//request type => Get
export const getComments = async (id) => {
  try {
    const comments = await axios.get(`${API_URL}/posts/${id}/comments`);
    return comments;
  } catch (err) {
    console.log(err);
  }
};
