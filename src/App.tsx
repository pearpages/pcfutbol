import React, { useState } from "react";
import { Match } from './lib/Match';
import { Squad } from './lib/Squad';
import { Game } from "./lib/Game";
import { Classification } from './Classification';

import "./App.css";

const game = new Game({playerTeam: 'Barcelona'});

type Screen = "RESULT" | "PREMATCH";

function App() {
  const [jornada, setJornada] = useState(0);
  const [screen, setScreen] = useState<Screen>("PREMATCH");

  const currentMatch = game.getPlayerMatch(jornada);
  const rivalName = Match.of(currentMatch).getRival(game.getPlayerTeam().name);

  const playGame = () => {
    game.playJornada(jornada);
    setScreen("RESULT");
  };

  const nextGame = () => {
    setJornada(jornada + 1);
    setScreen('PREMATCH');
  }

  return (
    <div className="App">
      <div>CALENDAR</div>
      <div>
        <Classification teams={game.teams.getAll()} />
      </div>
      <div>TEAM MANAGEMENT</div>
      <div>
        <div>
          Current match: <strong>{currentMatch.join(" ")}</strong>
        </div>
        <div>
          <div>Barca: {Squad.of(game.getPlayerTeam().players).calculateSquadAverage()}</div>
          <div>
            {rivalName}: {Squad.of(game.teams.getSquad(rivalName)).calculateSquadAverage()}
          </div>
        </div>
        {screen === "PREMATCH" ? (
          <button onClick={playGame}>Play Game</button>
        ) : (
          <div>
            RESULT: {game.getPlayerTeam().lastResult}
            <br/><button onClick={nextGame}>NEXT</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
