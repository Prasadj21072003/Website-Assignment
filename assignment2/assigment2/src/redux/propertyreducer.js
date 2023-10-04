import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  property: [],
};

export const propertySlice = createSlice({
  name: "propertydata",
  initialState,
  reducers: {
    adddata: (state, action) => {
      state.property = action.payload;
    },
  },
});

export const { adddata } = propertySlice.actions;
export default propertySlice.reducer;
