import { PlayerData } from "./models";
import { createTeams, Team, TeamName } from "./createTeams";

class Teams {
  constructor(private teams = createTeams()) {}

  getTeam(teamName: TeamName): Team {
    return this.teams.find((squad) => squad.name === teamName)!;
  }

  getSquad(teamName: TeamName): PlayerData[] {
    return this.getTeam(teamName)!.players;
  }

  getAll(): Team[] {
    return this.teams;
  }
}

export { Teams };
