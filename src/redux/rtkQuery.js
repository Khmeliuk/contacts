import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com",
  }),
  tagTypes: "contacts",
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => ({
        method: "GET",
        url: "/contacts",
      }),
      providesTags: ["contacts"],
    }),
    getContactById: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/contacts/${id}`,
        data: id,
      }),
      providesTags: ["contacts"],
    }),
    editContact: builder.mutation({
      query: ({ id, ...newContact }) => ({
        method: "PATCH",
        url: `/contacts/${id}`,
        data: newContact,
      }),
      invalidatesTags: ["contacts"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({ method: "DELETE", url: `/contacts/${id}`, body: id }),
      invalidatesTags: ["contacts"],
    }),
    addContact: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/contacts",
        data: {
          ...data,
        },
      }),
      invalidatesTags: ["contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
  useGetContactByIdQuery,
  useEditContactMutation,
} = contactsApi;
