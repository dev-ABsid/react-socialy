import React from "react";

//PostComments -> display all the comments in single post
const PostComments = ({ comments }) => {
  return (
    <div className="max-w-screen-lg mx-auto gap-4 p-4 mb-8 text-white shadow-lg">
      <h3 className="text-2xl">Comments</h3>
      {comments &&
        comments.map((comment) => (
          <div key={comment.id} className="flex gap-4 mt-6">
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between">
                <p className="relative whitespace-nowrap text-gray-500 overflow-hidden">
                  {comment?.name}
                </p>
              </div>
              <p className="text-gray-400 text-sm">{comment.email}</p>
              <p className="text-xl">{comment.body}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostComments;
