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
  events: [],
  status: "idle",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    thirdPartyCredReducer: (state, action) => {
      state.thirdPartyCredentials = {
        ...state.thirdPartyCredentials,
        ...action.payload,
      };
    },
    createUser: (state, action) => {
      console.log("Redux --- createUser ---");
      state = { ...state, ...action.payload };
      return state;
    },
    loginUser: (state, action) => {},
    logoutUser: (state, action) => {},
  },
});

export const { thirdPartyCredReducer, createUser, loginUser, logoutUser } =
  userSlice.actions;

export const userData = (state) => {
  return state.user;
};

export default userSlice.reducer;
