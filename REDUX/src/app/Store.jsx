import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../features/posts/PostSlice";

export default configureStore({
  reducer: {
    post: PostReducer,
  },
});
