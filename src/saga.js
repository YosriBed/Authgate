import { call, put, takeLatest, all, select } from "redux-saga/effects";

import { actions } from "./slice";

const accessTokenSelector = (state) => state.tokens?.access?.token;
const refreshTokenSelector = (state) => state.tokens?.refresh.token;

const api = (
  url,
  method,
  token,
  body,
  headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    "access-control-allow-origin": "*",
  }
) => {
  const baseApiUrl =
    process.env.REACT_APP_API_SERVER || "http://localhost:8080";

  return fetch(`${baseApiUrl}${url}`, {
    method,
    body,
    headers,
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
};

function* login({ payload: { body } }) {
  try {
    yield put(actions.fetching());
    const token = yield select(accessTokenSelector);
    const response = yield call(
      api,
      "/api/auth/login",
      "POST",
      token,
      JSON.stringify(body)
    );
    yield put(actions.setUser(response.user));
    yield put(actions.setTokens(response.tokens));
    yield put(actions.success());
  } catch (error) {
    console.log(error);
  }
}

function* register({ payload: { body } }) {
  try {
    yield put(actions.fetching());
    const token = yield select(accessTokenSelector);
    const response = yield call(
      api,
      "/api/auth/register",
      "POST",
      token,
      JSON.stringify(body)
    );
    yield put(actions.setUser(response.user));
    yield put(actions.setTokens(response.tokens));
    yield put(actions.success());
  } catch (error) {
    console.log(error);
  }
}

function* logout() {
  try {
    const token = yield select(refreshTokenSelector);
    yield call(
      api,
      "/api/auth/logout",
      "POST",
      null,
      JSON.stringify({ refreshToken: token })
    );
    yield put(actions.clearUserSession());
  } catch (error) {
    console.log(error);
  }
}

function* saga() {
  yield all([
    takeLatest(actions.login.type, login),
    takeLatest(actions.register.type, register),
    takeLatest(actions.logout.type, logout),
  ]);
}

export default saga;
