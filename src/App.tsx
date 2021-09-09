import React, { useState } from "react";
import { createSquads } from "./lib/createSquads";
import { createMatches, Match } from "./lib/createMatches";
import { TeamName, teamNames } from "./lib/createSquad";
import { Player } from "./lib/models";
import { Classification } from './Classification';

import "./App.css";

const teams = createSquads();
const matches = createMatches(teamNames);

function getTeam(teamName: TeamName) {
  return teams.find((squad) => squad.name === teamName);
}

function getSquad(teamName: TeamName): Player[] {
  return getTeam(teamName)!.players;
}

function getMatches(teamName: TeamName): Match[] {
  return matches.flatMap((round) =>
    round.filter((teams) => teams.includes(teamName))
  );
}

function calculateSquadAverage(players: Player[]): number {
  const totalQuality = players.reduce(
    (total, player) => total + player.quality,
    0
  );
  return totalQuality / players.length;
}

function playJornada(jornadaNumber: number) {
  const jornada = matches[jornadaNumber];
  jornada.forEach(match => {
    const homeTeam = getTeam(match[0]);
    const awayTeam = getTeam(match[1]);

    const qualityHome = calculateSquadAverage(homeTeam!.players)
    const qualityAway = calculateSquadAverage(awayTeam!.players)
    
    homeTeam!.games++;
    awayTeam!.games++;
    if (qualityHome > qualityAway) {
      homeTeam!.points = homeTeam!.points + 3;
      homeTeam!.lastResult = 'WON';
      awayTeam!.lastResult = 'LOST';
    } else {
      awayTeam!.points = awayTeam!.points + 3;
      awayTeam!.lastResult = 'WON';
      homeTeam!.lastResult = 'LOST';
    }
  })
}

const barcaTeam = getTeam('Barcelona');
const barcaSquad = getSquad("Barcelona");
const barcaMatches = getMatches("Barcelona");
const barcaQuality = calculateSquadAverage(barcaSquad);

type Screen = "RESULT" | "PREMATCH";

function App() {
  const [jornada, setJornada] = useState(0);
  const [screen, setScreen] = useState<Screen>("PREMATCH");
  const [result, setResult] = useState<'WON'|'LOST'|'DRAW'|'BETWEEN_SEASONS'>('BETWEEN_SEASONS');

  const currentMatch = barcaMatches[jornada];
  const rival = currentMatch.find((team) => team !== "Barcelona") as TeamName;

  const playGame = () => {
    playJornada(jornada);
    setResult(barcaTeam!.lastResult);
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
        <Classification teams={teams} />
      </div>
      <div>TEAM MANAGEMENT</div>
      <div>
        <div>
          Current match: <strong>{currentMatch.join(" ")}</strong>
        </div>
        <div>
          <div>Barca: {barcaQuality}</div>
          <div>
            {rival}: {calculateSquadAverage(getSquad(rival))}
          </div>
        </div>
        {screen === "PREMATCH" ? (
          <button onClick={playGame}>Play Game</button>
        ) : (
          <div>
            RESULT: {result}
            <br/><button onClick={nextGame}>NEXT</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
