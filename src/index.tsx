import firebase from "firebase/app";
import React from "react";
import ReactDOM from "react-dom";
import "@csstools/normalize.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastProvider } from "react-toast-notifications";
import {firebaseConfig} from "./utils/firebase";

// firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider newestOnTop={true} placement="top-center" autoDismissTimeout={1000}>
      <App />
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
