import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const callToApi = createAsyncThunk(
  "api/recipies",
  async (obj, { state, error }) => {
    try {
      const req = await fetch("https://api.chucknorris.io/jokes/random");
      const response = await req.json();
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
);

const recipiesSlice = createSlice({
  name: "recipies",
  initialState: [],
  reducers: {},
  extraReducer: {
    [callToApi.pending]: (state, action) => {
      return [];
    },
    [callToApi.fulfilled]: (state, action) => {
      return action.payload;
    },
    [callToApi.rejected]: (state, action) => {
      return [];
    },
  },
});

export const actions = recipiesSlice.actions;
export default recipiesSlice;
