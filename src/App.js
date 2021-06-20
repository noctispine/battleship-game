import React from "react";
import StateControl from "./StateControl";
import GameContainer from "./components/gameWindow/GameContainer";
import Header from "./components/header/Header";
import './App.css';

function App() {
  return (
    <StateControl>
      <Header />
        <GameContainer />
    </StateControl>
  );
}

export default App;
