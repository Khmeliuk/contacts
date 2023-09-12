import { createSlice } from "@reduxjs/toolkit";
import {
  registrationAsyncThunk,
  loginAsyncThunk,
  logOutAsyncThunk,
  refreshTokenAsyncThunk,
} from "../auth/authOperation";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLogin: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [registrationAsyncThunk.pending](state, action) {},
    [registrationAsyncThunk.fulfilled](state, { payload }) {
      state.isLoading = true;
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.token = payload.token;
    },
    [registrationAsyncThunk.rejected](state, action) {
      state.isLoading = false;
    },
    [loginAsyncThunk.pending](state, action) {},
    [loginAsyncThunk.fulfilled](state, { payload }) {
      state.isLoading = true;
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.token = payload.token;
    },
    [loginAsyncThunk.rejected](state, action) {
      state.isLoading = false;
    },
    [logOutAsyncThunk.pending](state, action) {},
    [logOutAsyncThunk.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.user.name = null;
      state.user.email = null;
      state.token = null;
    },
    [logOutAsyncThunk.rejected](state, action) {},

    [refreshTokenAsyncThunk.pending](state, action) {},
    [refreshTokenAsyncThunk.fulfilled](state, { payload }) {
      state.isLoading = true;
      state.user.name = payload.name;
      state.user.email = payload.email;
    },
    [refreshTokenAsyncThunk.rejected](state, action) {},
  },
});
