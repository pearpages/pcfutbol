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

export { Dashboard };
