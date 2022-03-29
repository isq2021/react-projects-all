import { configureStore } from "@reduxjs/toolkit";
import recipiesSlice from "../components/Home/HomeSlice";
const Store = configureStore({
  reducer: {
    recipies: recipiesSlice.reducer,
  },
});

export default Store;
