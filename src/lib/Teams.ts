import { PlayerData, TeamData } from "./models";
import { createTeams, TeamName } from "./createTeams";

class Teams {
  constructor(private teams = createTeams()) {}

  getTeam(teamName: TeamName): TeamData {
    return this.teams.find((squad) => squad.name === teamName)!;
  }

  getSquad(teamName: TeamName): PlayerData[] {
    return this.getTeam(teamName)!.players;
  }

  getAll(): TeamData[] {
    return this.teams;
  }
}

export { Teams };
