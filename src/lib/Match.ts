import type { Match as MatchType } from './createMatches';
import type { TeamName } from './createTeams';

const Match: {
  match?: MatchType,
  of: (match: MatchType) => typeof Match,
  getRival: (teamName: TeamName) => TeamName
} = {
  match: undefined,
  of(match: MatchType) {
    this.match = match;
    return this;
  },
  getRival(localName: TeamName): TeamName {
    return this.match.find((team) => team !== localName) as TeamName;
  }
}

export { Match };
