import type { MatchData } from "./models";
import type { TeamName } from "./createTeams";

const Match = {
  of(match: MatchData) {
    return {
      getRival(localName: TeamName): TeamName {
        return match!.teams.find((team) => team !== localName) as TeamName;
      },
    };
  },
};

export { Match };
