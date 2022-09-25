import React from "react";
import Header from "../components/common/Header";
import PostsSimple from "../components/posts/PostsSimple";

//PostsFeed-> display all posts with pagination requests
const PostsFeedSimple = () => {
  return (
    <>
      <Header />
      <PostsSimple />
    </>
  );
};

export default PostsFeedSimple;
