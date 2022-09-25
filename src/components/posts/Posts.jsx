import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import OwlCarousel from "react-owl-carousel3";
import { fetchPosts } from "../../features/posts/PostSlice";
import PostItem from "../post/PostItem";
import { options } from "../../utils/config";
// Icons
import spinner from "../../assets/images/icons/spinner.gif";

//Posts -> display all posts
const Posts = () => {
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  //if fetchpost != changes then use the memoized fetchPosts
  const fetchAllPosts = useCallback(() => {
    (async () => {
      try {
        dispatch(fetchPosts());
      } catch (err) {
        console.log(err);
      }
    })();
  }, [dispatch]);

  //fetch posts dispatch to redux
  useEffect(() => {
    (async () => {
      try {
        dispatch(fetchPosts());
      } catch (err) {
        console.log(err);
      }
    })();
  }, [fetchAllPosts]);

  return (
    <section className="min-h-screen flex flex-wrap items-center justify-center bg-gray-900">
      <OwlCarousel className="owl-carousel owl-theme items-center" {...options}>
        {posts.length > 0 ? (
          posts.map((post) => <PostItem post={post} key={post.id} />)
        ) : (
          <img className="animate-spin" src={spinner} alt="spinner" />
        )}
      </OwlCarousel>
    </section>
  );
};

export default Posts;
