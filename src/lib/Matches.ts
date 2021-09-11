import { createMatches } from "./createMatches";
import { TeamName, teamNames } from "./createTeams";
import { MatchData } from "./models";

const Matches = {
  of(matches = createMatches(Array.from(teamNames))) {
    return {
      getTeamMatches(teamName: TeamName): MatchData[] {
        return matches.flatMap((round) =>
          round.filter((teams) => teams.includes(teamName))
        );
      },
      getJornada(number: number): MatchData[] {
        return matches[number];
      },
    };
  },
};

export { Matches };
