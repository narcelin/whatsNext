import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { method } from "lodash";

const baseUrl = "http://localhost:4040/";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    //EXAMPLE DATA
    getProducts: builder.query({
      query: () => "products", //attaches /products to base url
    }),
    getProduct: builder.query({
      query: (id) => `products/${id}`,
    }),

    //Events
    getAllEvents: builder.query({
      query: () => "events",
    }),
    getEvents: builder.query({
      query: (eventsId) => ({
        url: "events",
        method: "GET",
        body: eventsId,
      }),
    }),
    getEvent: builder.query({
      query: (id) => {
        `events/${id}`;
      },
    }),

    //Users
    postUser: builder.mutation({
      query: (newUserData) => ({
        url: "users",
        method: "POST",
        body: newUserData,
      }),
    }),
    getUserByUid: builder.query({
      query: (uid) => `users/${uid}`,
    }),
    getUserByUsername: builder.query({
      query: (username) => ({
        url: "",
        method: "GET",
        body: username,
      }),
    }),
    loginUser: builder.mutation({
      query: (username) => ({
        url: "users/login",
        method: "POST",
        body: username,
      }),
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductsQuery,

  useGetAllEventsQuery,
  useGetEventsQuery,
  useGetEventQuery,

  usePostUserMutation,
  useGetUserByUidQuery,
  useGetUserByUsernameQuery,
  useLoginUserMutation,
} = apiSlice;

export default apiSlice.reducer;
