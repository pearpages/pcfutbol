import type { MatchData } from "./models";
import type { Team as TeamType, TeamName } from "./createTeams";
import { Matches } from "./Matches";
import { Squad } from "./Squad";
import { Teams } from "./Teams";
import { Team } from "./Team";

class Game {
  teams: Teams;
  matches: Matches;
  playerTeam: TeamName;
  constructor({
    teams,
    matches,
    playerTeam,
  }: {
    teams?: Teams;
    matches?: Matches;
    playerTeam: TeamName;
  }) {
    this.teams = teams || new Teams();
    this.matches = matches || new Matches();
    this.playerTeam = playerTeam;
  }

  playJornada(jornadaNumber: number) {
    const jornada = this.matches.getJornada(jornadaNumber);
    jornada.forEach((match) => {
      const homeTeam = this.teams.getTeam(match[0]);
      const homeFormation = Team.of(homeTeam).pickFormation();
      const awayTeam = this.teams.getTeam(match[1]);
      const awayFormation = Team.of(awayTeam).pickFormation();

      const qualityHome = Squad.of(homeFormation).calculateSquadAverage();
      const qualityAway = Squad.of(awayFormation).calculateSquadAverage();

      homeTeam!.games++;
      awayTeam!.games++;
      if (qualityHome > qualityAway) {
        homeTeam!.points = homeTeam!.points + 3;
        homeTeam!.lastResult = "WON";
        awayTeam!.lastResult = "LOST";
      } else {
        awayTeam!.points = awayTeam!.points + 3;
        awayTeam!.lastResult = "WON";
        homeTeam!.lastResult = "LOST";
      }
    });
  }

  getPlayerTeam(): TeamType {
    return this.teams.getTeam(this.playerTeam);
  }

  getPlayerMatches(): MatchData[] {
    return this.matches.getTeamMatches(this.playerTeam);
  }

  getPlayerMatch(jornada: number): MatchData {
    return this.getPlayerMatches()[jornada];
  }
}

export { Game };
