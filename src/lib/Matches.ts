import { createMatches, Match } from "./createMatches";
import { TeamName, teamNames } from "./createTeams";

class Matches {
  constructor(private matches = createMatches(teamNames)) {}

  getTeamMatches(teamName: TeamName): Match[] {
    return this.matches.flatMap((round) =>
      round.filter((teams) => teams.includes(teamName))
    );
  }

  getJornada(number: number): Match[] {
    return this.matches[number];
  }
}

export { Matches };
