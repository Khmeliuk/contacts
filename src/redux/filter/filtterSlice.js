import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterAction: {
      reducer(state, action) {
        return (state = action.payload);
      },
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterAction } = filterSlice.actions;
export const getFilter = (state) => state.filter;
