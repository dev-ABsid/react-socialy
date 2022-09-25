import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostsFeed from "./pages/PostsFeed";
import PostDetails from "./pages/PostDetails";
import PostsFeedSimple from "./pages/PostsFeedSimple";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsFeed />} />
        <Route path="/posts-simple" element={<PostsFeedSimple />} />
        <Route path="/post/:postId" element={<PostDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
