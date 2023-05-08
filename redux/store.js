import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apiSlice";
import eventsReducer from "./features/eventsSlice";
import userReducer from "./features/userSlice";
import apiReducer from "./features/apiSlice";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    user: userReducer,
    api: apiReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), //apiSlice and apiReducer are similar, REVIEW
});
