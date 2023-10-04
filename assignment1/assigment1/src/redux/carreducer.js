import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
  page: 1,
  search: "",
};

export const carSlice = createSlice({
  name: "cardata",
  initialState,
  reducers: {
    adddata: (state, action) => {
      state.cars = action.payload;
    },
    addpage: (state, action) => {
      state.page = action.payload;
    },
    addsearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { adddata, addpage, addsearch } = carSlice.actions;

export default carSlice.reducer;
