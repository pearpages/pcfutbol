import type { Match } from "./createMatches";
import type { Team, TeamName } from "./createTeams";
import { Matches } from "./Matches";
import { Squad } from "./Squad";
import { Teams } from "./Teams";

class Game {
  teams: Teams;
  matches: Matches;
  playerTeam: TeamName;
  constructor({teams, matches, playerTeam}: {teams?: Teams, matches?: Matches, playerTeam: TeamName}) {
    this.teams = teams || new Teams();
    this.matches = matches || new Matches();
    this.playerTeam = playerTeam;
  }

  playJornada(jornadaNumber: number) {
    const jornada = this.matches.getJornada(jornadaNumber);
    jornada.forEach(match => {
      const homeTeam = this.teams.getTeam(match[0]);
      const awayTeam = this.teams.getTeam(match[1]);

      const qualityHome = Squad.of(homeTeam!.players).calculateSquadAverage();
      const qualityAway = Squad.of(awayTeam!.players).calculateSquadAverage();

      homeTeam!.games++;
      awayTeam!.games++;
      if (qualityHome > qualityAway) {
        homeTeam!.points = homeTeam!.points + 3;
        homeTeam!.lastResult = 'WON';
        awayTeam!.lastResult = 'LOST';
      } else {
        awayTeam!.points = awayTeam!.points + 3;
        awayTeam!.lastResult = 'WON';
        homeTeam!.lastResult = 'LOST';
      }
    })
  }

  getPlayerTeam(): Team {
    return this.teams.getTeam('Barcelona');
  }

  getPlayerMatches(): Match[] {
    return this.matches.getTeamMatches("Barcelona");
  }

  getPlayerMatch(jornada: number): Match {
    return this.getPlayerMatches()[jornada];
  }
}

export { Game };
