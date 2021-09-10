import React from "react";

import { Eleven } from "./Eleven";
import { Game } from "../lib/Game";
import { Match } from "../lib/Match";
import { Squad } from "../lib/Squad";
import { Team } from "../lib/Team";
import { Team as TeamType } from "../lib/createTeams";

function getDescription(
  team: TeamType,
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
      <div style={{ display: "inline-block" }}>
        <Eleven
          description={getDescription(game.getPlayerTeam(), playersOfTheGame)}
          players={playersOfTheGame.get()}
        />
      </div>
      <div style={{ display: "inline-block" }}>
        <Eleven
          description={getDescription(rivalTeam.get(), rivalPlayersOfTheGame)}
          players={rivalPlayersOfTheGame.get()}
        />
      </div>
    </>
  );
}
