import React, { useState } from "react";
import { Game } from "./lib/Game";
import { Classification } from "./Classification";
import { CurrentMatch } from "./CurrentMatch";

import "./App.css";

const game = new Game({ playerTeam: "Barcelona" });

type Screen = "RESULT" | "PREMATCH";

function App() {
  const [jornada, setJornada] = useState(0);
  const [screen, setScreen] = useState<Screen>("PREMATCH");

  const playGame = () => {
    game.playJornada(jornada);
    setScreen("RESULT");
  };

  const nextGame = () => {
    setJornada(jornada + 1);
    setScreen("PREMATCH");
  };

  return (
    <div className="App">
      <div>CALENDAR</div>
      <div>TEAM MANAGEMENT</div>
      <div style={{ display: "inline-block" }}>
        <CurrentMatch game={game} jornadaNumber={jornada} />
        {screen === "PREMATCH" ? (
          <>
            <br />
            <button onClick={playGame}>Play Game</button>
          </>
        ) : (
          <div>
            RESULT: {game.getPlayerTeam().lastResult}
            <br />
            <button onClick={nextGame}>NEXT</button>
          </div>
        )}
      </div>
      <Classification teams={game.teams.getAll()} />
    </div>
  );
}

export default App;
