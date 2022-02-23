/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "rootReducer",
  initialState: {
    user: null,
    tokens: {},
  },
  reducers: {
    login() {},
    register() {},
    logout() {},
    setUser(state, action) {
      state.user = action.payload;
    },
    setTokens(state, action) {
      state.tokens = action.payload;
    },
    clearUserSession(state) {
      state.user = null;
      state.tokens = null;
    },
  },
});

export const { name, actions, reducer } = appSlice;
