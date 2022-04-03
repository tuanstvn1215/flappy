import React, { useState, useEffect } from "react";
import { Game } from "../components/Game/Game";
import "./Game.css";
function App(props) {
  useEffect(() => {
    let game = new Game();
    game.init();
    game.setLevel(3);
    let playerSkin = localStorage.getItem("player-skin");
    game.setCharacterSkin(playerSkin);
    setTimeout(() => {
      game.run();
    }, 1000);
  });
  return <div className="Game"></div>;
}

export default App;
