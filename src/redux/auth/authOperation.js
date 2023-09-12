import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const registrationAsyncThunk = createAsyncThunk(
  "registration/post",
  async (credential, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", credential);
      token.set(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginAsyncThunk = createAsyncThunk(
  "login/post",
  async (credential, thunkAPI) => {
    try {
      const res = await axios.post("/users/login", credential);

      token.set(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logOutAsyncThunk = createAsyncThunk(
  "logOut/post",
  async (_, thunkAPI) => {
    try {
      const res = await axios.post("/users/logout");

      token.unset();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const refreshTokenAsyncThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const persistStore = thunkAPI.getState().auth.token;
    token.set(persistStore);

    if (persistStore === null) {
      return thunkAPI.rejectWithValue("missing token ");
    }
    try {
      const { data } = await axios.get("/users/current");

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
