import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add(state, { payload }) {
      state.push(payload);
    },
    deleteTodo(state, { payload }) {
      return state.filter(({ id }) => id !== payload);
    },
  },
});
export const { add, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
