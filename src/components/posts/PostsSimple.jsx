import React, { useEffect, useState } from "react";
import { getPost } from "../../actions/PostActions";
import PostItem from "../post/PostItem";
// Icons
import spinner from "../../assets/images/icons/spinner.gif";

//PostsSimple -> display posts one by one
const PostsSimple = () => {
  const [post, setPost] = useState();
  const [currentPost, setCurrentPost] = useState(1);

  //fetch single post details
  useEffect(() => {
    (async () => {
      try {
        const postRes = await getPost(currentPost);
        setPost(postRes.data);
        setCurrentPost(postRes.data.id);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  // change post on next prev click
  const changePostHandler = async (change) => {
    if (change === "next") {
      try {
        setCurrentPost(currentPost + 1);
        const postRes = await getPost(currentPost + 1);
        setPost(postRes.data);
        setCurrentPost(postRes.data.id);
      } catch (err) {
        console.log(err);
      }
    } else if (change === "prev") {
      try {
        if (currentPost > 1) {
          setCurrentPost(currentPost - 1);
          const postRes = await getPost(currentPost - 1);
          setPost(postRes.data);
          setCurrentPost(postRes.data.id);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      return "";
    }
  };

  return (
    <section className="min-h-screen flex flex-wrap items-center justify-center bg-gray-900">
      <button
        onClick={() => changePostHandler("prev")}
        className="button opacity-60 p-1 bg-white border border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 "
      >
        Prev
      </button>
      {post ? (
        <PostItem post={post} />
      ) : (
        <img className="animate-spin" src={spinner} alt="spinner" />
      )}
      <div className="flex-wrap gap-2">
        <button
          onClick={() => changePostHandler("next")}
          className="button opacity-60 p-1 bg-white border border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 "
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default PostsSimple;
