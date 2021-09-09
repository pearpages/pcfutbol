import { teams } from "./createSquads";
import type { TeamName } from "./createSquad";

type Match = [TeamName, TeamName];
type Jornada = Match[];

function createMatches(ps = teams.map(team => team.name)): Jornada[] {
  const n = ps.length;
  const totalMatches = (n -1)* 2;
  const rs = new Array(totalMatches); // rs = round array
  ps = ps.slice();
  
  for (let j = 0; j < totalMatches; j += 1) {
    rs[j] = []; // create inner match array for round j
    for (let i = 0; i < n / 2; i += 1) {
      const o = n - 1 - i;

      // flip orders to ensure everyone gets roughly n/2 home matches
      const isHome = i === 0 && j % 2 === 1;
      // insert pair as a match - [ away, home ]
      rs[j].push([isHome ? ps[o] : ps[i], isHome ? ps[i] : ps[o]]);
    }
    ps.splice(1, 0, ps.pop()!); // permutate for next round
  }
  return rs;
}

export { createMatches };
export type { Match, Jornada };
