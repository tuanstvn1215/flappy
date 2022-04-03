import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from ".//routes/App";
import ScoreBoard from ".//routes/ScoreBoard";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from ".//routes/Menu";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="scoreboard" element={<ScoreBoard />} />
        <Route path="menu" element={<Menu />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
