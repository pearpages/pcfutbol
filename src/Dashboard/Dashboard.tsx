import React from "react";
import { Screen } from "../App";
import { Classification } from "../Classification";
import { CurrentMatch } from "../CurrentMatch";
import { Game } from "../lib/Game";
import { Result, ResultsSummary } from "../ResultsSummary";

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

      <ResultsSummary
        results={
          game.getPlayerMatches(jornada).map((match, index) => {
            if (match.result) {
              return {
                jornada: jornada + index + 1,
                rival: match.teams.find((x) => x !== game.playerTeam),
                stadium: match.teams[0] === game.playerTeam ? "HOME" : "AWAY",
                score: match.result.score,
              };
            }
            return {
              jornada: jornada + index + 1,
              rival: match.teams.find((x) => x !== game.playerTeam),
              stadium: match.teams[0] === game.playerTeam ? "HOME" : "AWAY",
              score: undefined,
            };
          }) as Result[]
        }
      />

      {/* <CurrentMatch game={game} jornadaNumber={jornada} />
      <Classification teams={game.teams.getAll()} /> */}
      {screen === "RESULT" ? (
        <div>{game.getPlayerTeam().lastResult}</div>
      ) : null}
    </div>
  );
}

export { Dashboard };
