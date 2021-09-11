import React from "react";
import { Screen } from "../App";
import { Classification } from "../Classification";
import { CurrentMatch } from "../CurrentMatch";
import { Game } from "../lib/Game";

function Dashboard({
  jornada,
  game,
  playGame,
  nextGame,
  screen,
}: {
  jornada: number;
  game: Game;
  playGame: () => void;
  nextGame: () => void;
  screen: Screen;
}) {
  return (
    <div className="App">
      <div>Jornada: {jornada + 1}</div>
      {screen === "PREMATCH" ? (
        <button onClick={playGame}>Play Game</button>
      ) : (
        <div>
          <button onClick={nextGame}>NEXT</button>
        </div>
      )}
      {screen === "RESULT" ? (
        <div>{game.getPlayerTeam().lastResult}</div>
      ) : null}
      {/* <CurrentMatch game={game} jornadaNumber={jornada} /> */}
      {/* <Classification teams={game.teams.getAll()} /> */}
    </div>
  );
}

export { Dashboard };
