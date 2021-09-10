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
    if (jornada === 37) {
      setJornada(0);
    } else {
      setJornada(jornada + 1);
    }
    setScreen("PREMATCH");
  };

  return (
    <div className="App">
      <h4>
        Jornada: {jornada + 1}{" "}
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
      </h4>
      <div>CALENDAR</div>
      <div>TEAM MANAGEMENT</div>
      <CurrentMatch game={game} jornadaNumber={jornada} />
      <Classification teams={game.teams.getAll()} />
    </div>
  );
}

export default App;
