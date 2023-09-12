import { createSlice } from "@reduxjs/toolkit";
import {
  addContactsAsyncThunk,
  deleteContactsAsyncThunk,
  getContactsAsyncThunk,
} from "../asyncThunk";

const contactsValue = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsValue,
  extraReducers: {
    [getContactsAsyncThunk.pending](state, action) {
      state.isLoading = true;
    },
    [getContactsAsyncThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      state.items = action.payload;
    },
    [getContactsAsyncThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContactsAsyncThunk.pending](state, action) {
      state.isLoading = true;
    },
    [addContactsAsyncThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
    },
    [addContactsAsyncThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContactsAsyncThunk.pending](state, action) {
      state.isLoading = true;
    },
    [deleteContactsAsyncThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      console.log(action.payload.id);
      state.items = state.items.filter((el) => el.id !== action.payload.id);
    },
    [deleteContactsAsyncThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
