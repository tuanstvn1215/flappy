import "./App.css";
import React, { useState, useEffect } from "react";
import { App } from "./components/Game/Game.js";
import { Link } from "react-router-dom";
function App() {
  useEffect(() => {
    let game = new Game();
    game.run();
  });
  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
      <div className="Game"></div>
    </div>
  );
}

export default App;
