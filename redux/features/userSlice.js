import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: 0,
  thirdPartyCredentials: {
    apple_uid: 0,
    github_uid: 0,
  },
  accessToken: "accessToken",
  username: "username",
  alias: "alias",
  password: "password",
  eventsIds: [],
  status: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserData: (state, action) => {
      console.log("REDUX --- saveUserData ---");
      return { ...state, ...action.payload };
    },
    logoutUser: (state, action) => {},

    thirdPartyCredReducer: (state, action) => {
      state.thirdPartyCredentials = {
        ...state.thirdPartyCredentials,
        ...action.payload,
      };
    },
  },
});

export const { thirdPartyCredReducer, saveUserData, logoutUser } =
  userSlice.actions;

export const userData = (state) => {
  return state.user;
};

export const usersEventsIds = (state) => {
  return state.user.eventsIds;
};

export default userSlice.reducer;
