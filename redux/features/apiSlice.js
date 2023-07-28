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
    getUserOutfitsEventsIds: builder.mutation({
      query: (outfitsIds) => ({
        url: "outfits",
        method: "POST",
        body: outfitsIds,
      }),
    }),
    getUserEvents: builder.mutation({
      query: (eventsId) => ({
        url: "events",
        method: "POST",
        body: eventsId,
      }),
    }),
    getEvent: builder.query({
      query: (id) => {
        `events/${id}`;
      },
    }),

    //Outfits

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
      query: (userLogin) => ({
        url: "users/login",
        method: "POST",
        body: userLogin,
      }),
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductsQuery,

  useGetAllEventsQuery,
  useGetUserOutfitsEventsIdsMutation,
  useGetUserEventsMutation,
  useGetEventQuery,

  usePostUserMutation,
  useGetUserByUidQuery,
  useGetUserByUsernameQuery,
  useLoginUserMutation,
} = apiSlice;

export default apiSlice.reducer;
