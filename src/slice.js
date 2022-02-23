/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "rootReducer",
  initialState: {
    user: null,
    tokens: {},
    success: false,
    fetching: false,
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
    fetching(state) {
      state.fetching = true;
      state.success = false;
    },
    success(state) {
      state.fetching = false;
      state.success = true;
    },
  },
});

export const { name, actions, reducer } = appSlice;
