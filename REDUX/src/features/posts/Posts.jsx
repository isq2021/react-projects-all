import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./postSlice";

function Posts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return <div>get posts..</div>;
}

export default Posts;
