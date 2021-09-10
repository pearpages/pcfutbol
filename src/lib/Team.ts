import { Team as TeamType } from "./createTeams";
import { Player } from "./models";
import { Squad } from "./Squad";

const Team = {
  of(team: TeamType) {
    return {
      get() {
        return team;
      },
      pickFormation(): Player[] {
        return Squad.of(team.players).pickBest11(team.tactic);
      },
    };
  },
};

export { Team };
