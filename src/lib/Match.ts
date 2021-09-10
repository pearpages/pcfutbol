import type { Match as MatchType } from './createMatches';
import type { TeamName } from './createTeams';

const Match: {
  of: (match: MatchType) => {
    getRival: (teamName: TeamName) => TeamName
  }
} = {
  of(match: MatchType) {
    return {
      getRival(localName: TeamName): TeamName {
        return match!.find((team) => team !== localName) as TeamName;
      }
    }
  }
}

export { Match };
