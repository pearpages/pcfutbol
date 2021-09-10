import type { MatchData } from "./models";
import type { TeamName } from "./createTeams";

const Match: {
  of: (match: MatchData) => {
    getRival: (teamName: TeamName) => TeamName;
  };
} = {
  of(match: MatchData) {
    return {
      getRival(localName: TeamName): TeamName {
        return match!.find((team) => team !== localName) as TeamName;
      },
    };
  },
};

export { Match };
