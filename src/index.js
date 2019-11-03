import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/posts";

axios.interceptors.request.use(
  request => {
    console.log(request);
    // Edit Config
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

axios.interceptors.request.use(
  response => {
    console.log(response);
    // Edit Config
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
