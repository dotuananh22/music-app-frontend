import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./app/store";
import axiosClient from "api/axiosClient";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { authAction } from "features/auth/authSlice";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

const { dispatch } = store;

const notCheckUrl = [
  "/auth/login",
  "/auth/register",
  "/auth/logout",
  "/token/refresh-auth",
];

axiosClient.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    console.log(originalRequest.url);
    if (
      error.response.status === 401 &&
      !notCheckUrl.includes(originalRequest.url) &&
      !originalRequest._retry
    ) {
      // handle the case where the user is not authenticated
      originalRequest._retry = true;
      axiosClient
        .post("/token/refresh-auth")
        .then((res) => {
          dispatch(authAction.getUserLoading());
          if (res.data)
            axiosClient(originalRequest)
              .then((res) => {
                if (res.data)
                  return dispatch(authAction.getUserSuccess(res.data));

                return dispatch(authAction.getUserFailure());
              })
              .catch((err) => {
                return dispatch(authAction.getUserFailure(err));
              });
          return dispatch(authAction.getUserFailure());
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
    return error.response.data;
  }
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
