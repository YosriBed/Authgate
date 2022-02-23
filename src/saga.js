import { takeLatest, all } from "redux-saga/effects";

import { actions } from "./slice";

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
    console.log(body);
  } catch (error) {
    console.log(error);
  }
}

function* register({ payload: { body } }) {
  try {
    console.log(body);
  } catch (error) {
    console.log(error);
  }
}

function* logout() {
  try {
    console.log("logging out...");
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
