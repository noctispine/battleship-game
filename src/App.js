import React from "react";
import StateControl from "./StateControl";
import GameContainer from "./components/gameWindow/GameContainer";
import Header from "./components/header/Header";
import { GameWrapper } from "./components/styled-components/boardStyles";

function App() {
  return (
    <StateControl>
      <Header />
      <GameWrapper>
        <GameContainer />
      </GameWrapper>
    </StateControl>
  );
}

export default App;
