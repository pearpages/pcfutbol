import { createMatches } from "./createMatches";
import { TeamName, teamNames } from "./createTeams";
import { JornadaData, MatchData } from "./models";

const Matches = {
  of(
    matches = createMatches(Array.from(teamNames)).map((jornada) =>
      jornada.map((match) => ({ teams: match }))
    )
  ) {
    return {
      get(): JornadaData[] {
        return matches;
      },
      getTeamMatches(teamName: TeamName): MatchData[] {
        return matches.flatMap((round) =>
          round.filter((match) => match.teams.includes(teamName))
        );
      },
      getJornada(number: number): MatchData[] {
        return matches[number];
      },
    };
  },
};

export { Matches };
