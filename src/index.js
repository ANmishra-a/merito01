import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { BrowserRouter } from "react-router-dom";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy2zNRXmsTfwU1yvMt73RoyPUWcF-48cg",
  authDomain: "merito-123.firebaseapp.com",
  projectId: "merito-123",
  storageBucket: "merito-123.appspot.com",
  messagingSenderId: "183691294120",
  appId: "1:183691294120:web:cb25c8dd33247c4f15199d",
  measurementId: "G-WH0FQZW210",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
