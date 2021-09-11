import React from "react";
import { Screen } from "../App";
import { Classification } from "../Classification";
import { CurrentMatch } from "../CurrentMatch";
import { Game } from "../lib/Game";
import { CalendarSummary } from "../CalendarSummary";

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
      <div>
        {screen === "PREMATCH" ? (
          <button onClick={playGame}>Play Game</button>
        ) : (
          <div>
            <button onClick={nextGame}>NEXT</button>
          </div>
        )}
      </div>

      <CalendarSummary results={[]} />

      {/* <CurrentMatch game={game} jornadaNumber={jornada} />
      <Classification teams={game.teams.getAll()} /> */}
      {screen === "RESULT" ? (
        <div>{game.getPlayerTeam().lastResult}</div>
      ) : null}
    </div>
  );
}

export { Dashboard };
