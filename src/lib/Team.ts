import { Team as TeamType } from "./createTeams";
import { PlayerData } from "./models";
import { Squad } from "./Squad";

const Team = {
  of(team: TeamType) {
    return {
      get() {
        return team;
      },
      pickFormation(): PlayerData[] {
        return Squad.of(team.players).pickBest11(team.tactic);
      },
    };
  },
};

export { Team };
