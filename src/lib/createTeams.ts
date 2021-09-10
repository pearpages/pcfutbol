import { createSquad } from "./createSquad";
import { Player } from "./models";

type TeamQuality = "MEDIOCRE" | "POOR" | "OKAY" | "AVERAGE" | "GOOD" | "TOP";

const tactics = ["5-3-2" , "5-4-1" , "4-4-2" , "4-5-1" , "4-2-4" , "4-3-3" , "3-3-4" , "3-4-3" , "3-5-2"] as const;
type Tactic = typeof tactics[number];

const teamNames = [
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
] as const;

type TeamName = typeof teamNames[number];

type Team = {
  name: TeamName;
  quality: TeamQuality;
  players: Player[];
  games: number;
  points: number;
  lastResult: 'WON'|'LOST'|'DRAW'|'BETWEEN_SEASONS';
  tactic: Tactic;
};

const teams: Team[] = [
  { name: "Real Madrid", quality: "TOP", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS', tactic: "4-4-2" },
  { name: "Sevilla", quality: "GOOD", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS', tactic: "4-4-2" },
  { name: "Valencia", quality: "GOOD", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS', tactic: "4-4-2" },
  { name: "Barcelona", quality: "TOP", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS', tactic: "4-4-2" },
  { name: "Atlético", quality: "TOP", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS', tactic: "4-4-2" },
  { name: "Mallorca", quality: "AVERAGE", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS', tactic: "4-4-2" },
  { name: "R. Sociedad", quality: "GOOD", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS', tactic: "4-4-2" },
  { name: "Osasuna", quality: "AVERAGE", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS', tactic: "4-4-2" },
  { name: "Athletic", quality: "GOOD", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS', tactic: "4-4-2" },
  { name: "Rayo", quality: "OKAY", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS', tactic: "4-4-2" },
  { name: "Villarreal", quality: "AVERAGE", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS', tactic: "4-4-2" },
  { name: "Cádiz", quality: "POOR", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS', tactic: "4-4-2" },
  { name: "Levante", quality: "POOR", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS', tactic: "4-4-2" },
  { name: "Betis", quality: "POOR", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS', tactic: "4-4-2" },
  { name: "Elche", quality: "MEDIOCRE", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS', tactic: "4-4-2" },
  { name: "Espanyol", quality: "OKAY", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS', tactic: "4-4-2" },
  { name: "Granada", quality: "POOR", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS', tactic: "4-4-2" },
  { name: "Celta", quality: "OKAY", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS', tactic: "4-4-2" },
  { name: "Getafe", quality: "GOOD", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS', tactic: "4-4-2" },
  { name: "Alavés", quality: "POOR", players: [], games: 0, points: 0, lastResult: 'BETWEEN_SEASONS', tactic: "4-4-2" },
];

function createTeams(): Team[] {
  return teams.map((team) => ({ ...team, players: createSquad(team.quality) }));
}

export { createTeams, teams, teamNames, tactics };
export type { Team, TeamName, TeamQuality, Tactic };
