import { createMatches } from "./createMatches";
import { TeamName, teamNames } from "./createTeams";
import { MatchData } from "./models";

class Matches {
  constructor(private matches = createMatches(Array.from(teamNames))) {}

  getTeamMatches(teamName: TeamName): MatchData[] {
    return this.matches.flatMap((round) =>
      round.filter((teams) => teams.includes(teamName))
    );
  }

  getJornada(number: number): MatchData[] {
    return this.matches[number];
  }
}

export { Matches };
