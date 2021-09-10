import type { TeamName } from "./createTeams";

type Match = [TeamName, TeamName];
type Jornada = Match[];

function createMatches(teams: TeamName[]): Jornada[] {
  const n = teams.length;
  const totalMatches = (n -1)* 2;
  const rs = new Array(totalMatches); // rs = round array
  teams = teams.slice();

  for (let j = 0; j < totalMatches; j += 1) {
    rs[j] = []; // create inner match array for round j
    for (let i = 0; i < n / 2; i += 1) {
      const o = n - 1 - i;

      // flip orders to ensure everyone gets roughly n/2 home matches
      const isHome = i === 0 && j % 2 === 1;
      // insert pair as a match - [ away, home ]
      rs[j].push([isHome ? teams[o] : teams[i], isHome ? teams[i] : teams[o]]);
    }
    teams.splice(1, 0, teams.pop()!); // permutate for next round
  }
  return rs;
}

export { createMatches };
export type { Match, Jornada };
