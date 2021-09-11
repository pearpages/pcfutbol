import React from "react";

import { Eleven } from "./Eleven";
import { Game } from "../lib/Game";
import { Match } from "../lib/Match";
import { Squad } from "../lib/Squad";
import { Team } from "../lib/Team";
import { TeamData } from "../lib/models";

function getDescription(
  team: TeamData,
  players: ReturnType<typeof Squad.of>
): string {
  return `${team.name} ${team.tactic} (${players.averageToFixed2()})`;
}

export function CurrentMatch({
  game,
  jornadaNumber,
}: {
  game: Game;
  jornadaNumber: number;
}) {
  const currentMatch = game.getPlayerMatch(jornadaNumber);
  const rivalName = Match.of(currentMatch).getRival(game.getPlayerTeam().name);
  const rivalTeam = Team.of(game.teams.getTeam(rivalName));
  const playerTeam = Team.of(game.getPlayerTeam());

  const playersOfTheGame = Squad.of(playerTeam.pickFormation());
  const rivalPlayersOfTheGame = Squad.of(rivalTeam.pickFormation());

  return (
    <>
      <div>
        <h4>{currentMatch[0] + " " + currentMatch[1]}</h4>
        <Eleven players={playersOfTheGame.get()} />
      </div>
      <div>
        <Eleven players={rivalPlayersOfTheGame.get()} />
      </div>
    </>
  );
}
