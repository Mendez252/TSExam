import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const globalSlice: any = createSlice({
  name: "global",
  initialState: {
    isLoggedIn: true,
    setEmployees: [{ name: "Carlos" }],
  },
  reducers: {
    isLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setEmployees: (state, action) => {
      state.setEmployees = action.payload;
    },
  },
});

export const { isLoggedIn, setEmployees } = globalSlice.actions;

export default globalSlice.reducer;
