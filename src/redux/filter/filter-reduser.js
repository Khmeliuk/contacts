import { createReducer } from "@reduxjs/toolkit";

import { filterAction } from "./filter-action";

const filterDate = {
  filter: "",
};

export const filterReducer = createReducer(filterDate, {
  [filterAction]: (state, action) => {
    return { filter: action.payload };
  },
});
