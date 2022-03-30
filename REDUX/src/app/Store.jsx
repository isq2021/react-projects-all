import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";
import postReducer from "../features/posts/postSlice";

export default configureStore({
  reducer: {
    todos: todosReducer,
    posts: postReducer,
  },
});
