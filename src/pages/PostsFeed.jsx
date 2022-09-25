import React from "react";
import Header from "../components/common/Header";
import Posts from "../components/posts/Posts";

//PostsFeed-> display all posts on initial laod
const PostsFeed = () => {
  return (
    <>
      <Header />
      <Posts />
    </>
  );
};

export default PostsFeed;
