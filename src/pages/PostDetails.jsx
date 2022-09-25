import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import PostItem from "../components/post/PostItem";
import { getComments, getPost } from "../actions/PostActions";
import PostComments from "../components/comments/PostComments";
import spinner from "../assets/images/icons/spinner.gif";

//PostDetails -> display posts details page
const PostDetails = () => {
  const [post, setPost] = useState();
  const [comments, setComments] = useState();
  const { postId } = useParams();

  // get current post and current post comments
  useEffect(() => {
    (async () => {
      try {
        const postRes = await getPost(postId);
        setPost(postRes.data);
        const commentsRes = await getComments(postId);
        setComments(commentsRes.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <section className="min-h-screen flex flex-wrap pt-8 justify-center bg-gray-900">
        <div className="pt-8">
          {post ? (
            <PostItem post={post} postDetails={true} />
          ) : (
            <img className="animate-spin" src={spinner} alt="spinner" />
          )}
          {comments && <PostComments comments={comments} />}
        </div>
      </section>
    </>
  );
};

export default PostDetails;
