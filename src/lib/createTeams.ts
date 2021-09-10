import { createSquad } from "./createSquad";
import { Player } from "./models";

type TeamQuality = "MEDIOCRE" | "POOR" | "OKAY" | "AVERAGE" | "GOOD" | "TOP";

type TeamName =
  | "Real Madrid"
  | "Sevilla"
  | "Valencia"
  | "Barcelona"
  | "Atlético"
  | "Mallorca"
  | "R. Sociedad"
  | "Osasuna"
  | "Athletic"
  | "Rayo"
  | "Villarreal"
  | "Cádiz"
  | "Levante"
  | "Betis"
  | "Elche"
  | "Espanyol"
  | "Granada"
  | "Celta"
  | "Getafe"
  | "Alavés";

const teamNames: TeamName[] = [
  "Real Madrid",
  "Sevilla",
  "Valencia",
  "Barcelona",
  "Atlético",
  "Mallorca",
  "R. Sociedad",
  "Osasuna",
  "Athletic",
  "Rayo",
  "Villarreal",
  "Cádiz",
  "Levante",
  "Betis",
  "Elche",
  "Espanyol",
  "Granada",
  "Celta",
  "Getafe",
  "Alavés",
];

type Team = {
  name: TeamName;
  quality: TeamQuality;
  players: Player[];
  games: number;
  points: number;
  lastResult: 'WON'|'LOST'|'DRAW'|'BETWEEN_SEASONS'
};

const teams: Team[] = [
  { name: "Real Madrid", quality: "TOP", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS' },
  { name: "Sevilla", quality: "GOOD", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS' },
  { name: "Valencia", quality: "GOOD", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS' },
  { name: "Barcelona", quality: "TOP", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS' },
  { name: "Atlético", quality: "TOP", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS' },
  { name: "Mallorca", quality: "AVERAGE", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS' },
  { name: "R. Sociedad", quality: "GOOD", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS' },
  { name: "Osasuna", quality: "AVERAGE", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS' },
  { name: "Athletic", quality: "GOOD", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS' },
  { name: "Rayo", quality: "OKAY", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS' },
  { name: "Villarreal", quality: "AVERAGE", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS' },
  { name: "Cádiz", quality: "POOR", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS' },
  { name: "Levante", quality: "POOR", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS' },
  { name: "Betis", quality: "POOR", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS' },
  { name: "Elche", quality: "MEDIOCRE", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS' },
  { name: "Espanyol", quality: "OKAY", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS' },
  { name: "Granada", quality: "POOR", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS' },
  { name: "Celta", quality: "OKAY", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS' },
  { name: "Getafe", quality: "GOOD", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS' },
  { name: "Alavés", quality: "POOR", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS' },
];

function createTeams(): Team[] {
  return teams.map((team) => ({ ...team, players: createSquad(team.quality) }));
}

export { createTeams, teams, teamNames };
export type { Team, TeamName, TeamQuality };
