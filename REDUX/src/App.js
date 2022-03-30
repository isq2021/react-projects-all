import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "./features/posts/PostSlice.jsx";

function App() {
  const { posts, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div>
      {" "}
      {posts.map((item) => (
        <h2> {item.title} </h2>
      ))}{" "}
    </div>
  );
}

export default App;
