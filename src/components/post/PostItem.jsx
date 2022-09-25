import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { arrowRight } from "../../utils/icons";

//PostItem -> display post details
const PostItem = ({ post, postDetails }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        // set random images
        setImage(`random${Math.floor(Math.random() * 6) + 1}.jpg`);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [post]);

  return (
    <section className="flex justify-center antialiased text-gray-200">
      <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
        <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
          <figure className="relative pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
            {image && (
              <img
                className="w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                src={require(`../../assets/images/posts/${image}`)}
                alt=""
              />
            )}
          </figure>
          {/* post details */}
          <div>
            <header>
              <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                <div
                  className="hover:text-gray-100 transition duration-150 ease-in-out"
                  href="#0"
                >
                  {post?.title}
                </div>
              </h3>
            </header>
            <p className="text-lg text-gray-400 flex-grow">{post?.body}</p>
            {!postDetails && (
              <footer className="flex items-center mt-4">
                <Link
                  to={`/post/${post.id}`}
                  className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                >
                  Read More
                </Link>
                <span className="ml-2">{arrowRight}</span>
              </footer>
            )}
          </div>
        </article>
      </div>
    </section>
  );
};

export default PostItem;
