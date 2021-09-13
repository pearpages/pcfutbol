import { createMatches } from "./createMatches";
import { TeamName, teamNames } from "./createTeams";
import { JornadaData, MatchData } from "./models";

const mapToJornadaData = (jornada: [TeamName, TeamName][]) =>
  jornada.map((match) => ({ teams: match }));

const hasEnoughPendingMatches = ({
  totalMatches,
  jornada,
  numberOfMatches,
}: {
  totalMatches: number;
  jornada: number;
  numberOfMatches: number;
}) => totalMatches - jornada >= numberOfMatches;

const Matches = {
  of(matches = createMatches(Array.from(teamNames)).map(mapToJornadaData)) {
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
      getSpecificTeamMatches({
        teamName,
        jornada,
        numberOfMatches,
      }: {
        teamName: TeamName;
        jornada: number;
        numberOfMatches: number;
      }): any {
        const teamMatches = this.getTeamMatches(teamName);
        const totalMatches = teamMatches.length;
        if (
          !hasEnoughPendingMatches({
            totalMatches,
            jornada,
            numberOfMatches,
          })
        ) {
          const bestNextJornada = totalMatches - numberOfMatches;
          return teamMatches.slice(
            bestNextJornada,
            bestNextJornada + numberOfMatches
          );
        }
        return teamMatches.slice(jornada, jornada + numberOfMatches);
      },
    };
  },
};

export { Matches };
