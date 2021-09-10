import { PlayerData, TeamData } from "./models";
import { Squad } from "./Squad";

const Team = {
  of(team: TeamData) {
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
