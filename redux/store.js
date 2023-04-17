import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./features/eventsSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    user: userReducer,
  },
});
