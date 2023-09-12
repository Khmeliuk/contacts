import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addContact, deleteContact, getContacts } from "../API.API";

axios.defaults.baseURL = "https://64e6563109e64530d17fe5d5.mockapi.io/";

export const getContactsAsyncThunk = createAsyncThunk(
  "contacts/get",
  async (_, thunkAPI) => {
    try {
      const contacts = await getContacts();
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsAsyncThunk = createAsyncThunk(
  "contacts/add ",
  async (data, thunkAPI) => {
    try {
      const contacts = await addContact(data);
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsAsyncThunk = createAsyncThunk(
  "contacts/delete",
  async (id, thunkAPI) => {
    try {
      const contacts = await deleteContact(id);
      console.log(contacts, "contacts");
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
