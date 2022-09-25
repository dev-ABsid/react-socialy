import React from "react";
import { Link } from "react-router-dom";

//Home -> Dcube Socially default Page component
const Home = () => {
  return (
    <div className="page-container relative  h-full flex flex-auto flex-col px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:px-8">
      <div className="container mx-auto h-full">
        <div className="h-full flex flex-col items-center justify-center">
          <div className="text-center">
            <img
              src={require(`../assets/images/home/welcome.png`)}
              alt="Welcome"
              className="mx-auto mb-8"
            />
            <h3 className="mb-2">
              Welcome on Board, lets get started with
              <strong> DCUBE.Socialy</strong>
            </h3>
            <p className="text-base">
              Select the demo below to load the posts feed.
            </p>

            <div className="card mt-8 mb-9 card-border">
              <div className="card-body">
                <div className="grid grid-flow-row-dense grid-cols-2  gap-4">
                  <div className="p-4 rounded-lg text-center font-semibold text-white bg-box">
                    <p className="text-md">Slider - Redux Demo</p>
                    <p className="text-small mb-8">
                      Redux is Implemented to store all the posts in global
                      state (Just to show how it can be done with redux). All
                      the posts are loaded on the first load and owl carousel is
                      used to display the posts. useCallback hook is used to
                      memoized the calls.
                    </p>
                    <Link
                      to="/posts"
                      className="button border mt-8 text-white radius-round h-11 px-8 py-2 mb-2 w-full"
                    >
                      Get started
                    </Link>
                  </div>

                  <div className="p-4 rounded-lg text-center font-semibold text-white shadow-lg bg-box">
                    <p className="text-md">Pagination - No Redux Demo</p>
                    <p className="text-small mb-8">
                      Posts are loaded on each button click instead of loading
                      all posts on first load. No redux store and carousel is
                      used.
                    </p>
                    <Link
                      to="/posts-simple"
                      className="button border mt-8 text-white radius-round h-11 px-8 py-2 mb-2 w-full"
                    >
                      Get started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
