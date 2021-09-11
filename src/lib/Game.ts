import type { TeamData, MatchData, PlayerData, Formation } from "./models";
import type { TeamName } from "./createTeams";
import { Matches } from "./Matches";
import { Teams } from "./Teams";
import { Team } from "./Team";
import { getResult } from "./getResult";

function formationAdapter(players: PlayerData[]): Formation {
  return {
    goalie: players.filter((player) => player.position === 1)[0].quality,
    defenders: players
      .filter((player) => player.position === 2)
      .map((player) => player.quality),
    midfielders: players
      .filter((player) => player.position === 3)
      .map((player) => player.quality),
    attackers: players
      .filter((player) => player.position === 4)
      .map((player) => player.quality),
  };
}

function playJornada({
  jornadaNumber,
  matches,
  teams,
}: {
  jornadaNumber: number;
  matches: ReturnType<typeof Matches.of>;
  teams: Teams;
}) {
  const jornada = matches.getJornada(jornadaNumber);
  jornada.forEach((match) => {
    const homeTeam = teams.getTeam(match.teams[0]);
    const homeFormation = Team.of(homeTeam).pickFormation();
    const awayTeam = teams.getTeam(match.teams[1]);
    const awayFormation = Team.of(awayTeam).pickFormation();

    match.result = getResult(
      formationAdapter(homeFormation),
      formationAdapter(awayFormation)
    );
    const score = match.result.score;

    homeTeam!.games++;
    awayTeam!.games++;
    if (score[0] > score[1]) {
      homeTeam!.points = homeTeam!.points + 3;
      homeTeam!.lastResult = "WON";
      awayTeam!.lastResult = "LOST";
    } else if (score[0] < score[1]) {
      awayTeam!.points = awayTeam!.points + 3;
      awayTeam!.lastResult = "WON";
      homeTeam!.lastResult = "LOST";
    } else {
      homeTeam!.points = homeTeam!.points + 1;
      awayTeam!.points = awayTeam!.points + 1;
      awayTeam!.lastResult = "DRAW";
      homeTeam!.lastResult = "DRAW";
    }
  });
}

class Game {
  teams: Teams;
  matches: ReturnType<typeof Matches.of>;
  playerTeam: TeamName;
  constructor({
    teams,
    matches,
    playerTeam,
  }: {
    teams?: Teams;
    matches?: ReturnType<typeof Matches.of>;
    playerTeam: TeamName;
  }) {
    this.teams = teams || new Teams();
    this.matches = matches || Matches.of();
    this.playerTeam = playerTeam;
  }

  playJornada(jornadaNumber: number): void {
    playJornada({
      jornadaNumber,
      teams: this.teams,
      matches: this.matches,
    });
  }

  getPlayerTeam(): TeamData {
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
