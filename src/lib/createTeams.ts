import type { TeamName, TeamQuality, Squad } from "./createSquad";
import { createSquad } from "./createSquad";

const teams: {name: TeamName, quality: TeamQuality}[] = [
  { name: "Real Madrid", quality: 'TOP'},
  { name: "Sevilla", quality: 'GOOD'},
  { name: "Valencia", quality: 'GOOD'},
  { name: "Barcelona", quality: 'TOP'},
  { name: "Atlético", quality: 'TOP'},
  { name: "Mallorca", quality: 'AVERAGE'},
  { name: "R. Sociedad", quality: 'GOOD'},
  { name: "Osasuna", quality: 'AVERAGE'},
  { name: "Athletic", quality: 'GOOD'},
  { name: "Rayo", quality: 'OKAY'},
  { name: "Villarreal", quality: 'AVERAGE'},
  { name: "Cádiz", quality: 'POOR'},
  { name: "Levante", quality: 'POOR'},
  { name: "Betis", quality: 'POOR'},
  { name: "Elche", quality: 'MEDIOCRE'},
  { name: "Espanyol", quality: 'OKAY'},
  { name: "Granada", quality: 'POOR'},
  { name: "Celta", quality: 'OKAY'},
  { name: "Getafe", quality: 'GOOD'},
  { name: "Alavés", quality: 'POOR'}
];

function createTeams(): Squad[] {
  return teams.map(team => createSquad(team.name, team.quality))
}

export { createTeams, teams };
